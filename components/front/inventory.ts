// Pure helpers shared by the front page and scripts/check-content.ts.
// No imports from Next or the browser, so the check script can run them in Node.

import type { Book, FrontPageContent, Graphic } from '../../content/types';

const PLACEHOLDER = /\[[^\]]*\]/;

export function isPlaceholder(value: unknown): boolean {
  return typeof value === 'string' && PLACEHOLDER.test(value);
}

/** A link target is usable only if it is a real URL, not a placeholder. */
export function usableHref(value: string | undefined): string | null {
  if (!value || isPlaceholder(value)) return null;
  return value;
}

export type Finding = { where: string; value: string };

/** Walks any value and returns every string that contains a [bracketed placeholder]. */
export function findPlaceholders(value: unknown, where = ''): Finding[] {
  if (typeof value === 'string') return isPlaceholder(value) ? [{ where, value }] : [];
  if (Array.isArray(value)) return value.flatMap((v, i) => findPlaceholders(v, `${where}[${i}]`));
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) => findPlaceholders(v, where ? `${where}.${k}` : k));
  }
  return [];
}

export type AssetRef = { where: string; path: string; optional?: boolean };

function graphicRefs(g: Graphic | { light: string; dark?: string }, where: string): AssetRef[] {
  const refs: AssetRef[] = [{ where: `${where}.light`, path: g.light }];
  if (g.dark) refs.push({ where: `${where}.dark`, path: g.dark });
  return refs;
}

/** Every file under /public that the front page references. */
export function listAssets(content: FrontPageContent, washes: ReadonlyArray<{ name: string; light: string; dark: string }>, books: Book[] = []): AssetRef[] {
  return [
    ...books.flatMap((b, i) => (b.spine ? [{ where: `readingList[${i}].spine`, path: b.spine.src }] : [])),
    ...washes.flatMap((w) => [
      { where: `washes.${w.name}.light`, path: w.light },
      { where: `washes.${w.name}.dark`, path: w.dark },
    ]),
    ...graphicRefs(content.tbdChat.graphic, 'tbdChat.graphic'),
    ...graphicRefs(content.researchSite.logo, 'researchSite.logo'),
    ...content.researchSite.plates.flatMap((p, i) => graphicRefs(p.graphic, `researchSite.plates[${i}].graphic`)),
    ...content.pastWork.tiles.flatMap((t, i) => [...graphicRefs(t.logo, `pastWork.tiles[${i}].logo`), ...graphicRefs(t.wash, `pastWork.tiles[${i}].wash`)]),
    ...graphicRefs(content.intdev.logo, 'intdev.logo'),
  ];
}

/** Paths that exist on disk, keyed by public path. Built on the server, passed to the page. */
export type AssetMap = Record<string, boolean>;

// ---------------------------------------------------------------------------
// Reading-list spines

/** FNV-1a, so a title always produces the same number on every build. */
export function hashString(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export type Spine = Book & { width: number; heightPct: number; key: string };

export function layoutSpines(books: Book[]): Spine[] {
  return books.map((b, i) => {
    const h = hashString(b.title);
    const width = b.pages ? Math.round(Math.min(46, Math.max(18, 12 + b.pages / 22))) : 18 + (h % 15);
    const heightPct = 84 + ((h >>> 8) % 17); // 84%..100% of the shelf
    return { ...b, width, heightPct, key: `${i}-${b.title}` };
  });
}
