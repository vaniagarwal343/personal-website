// Lists every [bracketed placeholder] in content/ and every asset the front
// page references that is not in /public. Exits 1 while any remain.
//
//   npm run check:content
//
// Not imported by the app and not part of `npm run build`.

import * as fs from 'fs';
import * as path from 'path';

import { frontPage, washes } from '../content/front-page';
import { readingList } from '../content/reading-list';
import { findPlaceholders, listAssets } from '../components/front/inventory';

const root = path.resolve(__dirname, '..');

const placeholders = [...findPlaceholders(frontPage, 'frontPage'), ...findPlaceholders(readingList, 'readingList')];

const missing = listAssets(frontPage, washes, readingList).filter((a) => !fs.existsSync(path.join(root, 'public', a.path)));

const empty: string[] = [];
if (readingList.length === 0) empty.push('content/reading-list.ts: readingList is empty (shelf renders empty)');
for (const b of readingList) if (!b.spine) empty.push(`content/reading-list.ts: "${b.title}" has no spine photo (set in type for now)`);

console.log(`Placeholders (${placeholders.length})`);
for (const p of placeholders) console.log(`  ${p.where}\n    ${p.value}`);

console.log(`\nMissing assets (${missing.length})`);
for (const m of missing) console.log(`  public${m.path}\n    used by ${m.where}`);

console.log(`\nMissing content (${empty.length})`);
for (const e of empty) console.log(`  ${e}`);

const total = placeholders.length + missing.length + empty.length;
console.log(total ? `\n${total} item(s) outstanding.` : '\nNothing outstanding.');
process.exit(total ? 1 : 0);
