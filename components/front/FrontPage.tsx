'use client';

// The front page: one viewport-high spread of eight ruled cells.
// All words come from content/; this file only lays them out.
//
// DOM order is the mobile stacking order (entrance, research.site, tbd.chat,
// past work, writing, reading list, colophon, contact). On desktop a named
// grid places the cells into the 41/59 spread.

import * as React from 'react';

import type { Book, FrontPageContent, Graphic, PastWorkTile, Plate } from '../../content/types';
import { type AssetMap, layoutSpines, usableHref } from './inventory';
import { stepsFor, useActivePlate, useDocumentHidden, useMedia, useScrollStep } from './usePlates';

import s from './FrontPage.module.scss';

type Wash = { readonly name: string; readonly seed: number; readonly light: string; readonly dark: string };

type Props = {
  content: FrontPageContent;
  books: Book[];
  washes: ReadonlyArray<Wash>;
  assets: AssetMap;
};

const NEW_TAB = { target: '_blank', rel: 'noopener noreferrer' } as const;

function cx(...names: Array<string | false | null | undefined>) {
  return names.filter(Boolean).join(' ');
}

// ---------------------------------------------------------------------------

function WashLayer({ wash }: { wash: Wash }) {
  return (
    <>
      <img className={cx(s.texture, s.onlyLight)} src={wash.light} alt="" aria-hidden="true" decoding="async" />
      <img className={cx(s.texture, s.onlyDark)} src={wash.dark} alt="" aria-hidden="true" decoding="async" />
    </>
  );
}

/** A light/dark pair. The inactive theme is display:none, so only one alt is announced. */
function ThemedImage({ light, dark, alt, assets, className }: { light: string; dark?: string; alt: string; assets: AssetMap; className: string }) {
  const darkSrc = dark && assets[dark] ? dark : light;
  if (darkSrc === light) return <img className={className} src={light} alt={alt} decoding="async" />;
  return (
    <>
      <img className={cx(className, s.themedLight)} src={light} alt={alt} decoding="async" />
      <img className={cx(className, s.themedDark)} src={darkSrc} alt={alt} decoding="async" />
    </>
  );
}

function MissingAsset({ label, path }: { label: string; path: string }) {
  return (
    <span className={s.missing}>
      <span className={s.missingTab}>
        {label}
        <span className={s.missingPath}>{path}</span>
      </span>
    </span>
  );
}

/** The plate area of a textured cell: one graphic, contained, or an empty plate. */
function PlateGraphic({ graphic, assets, missingLabel }: { graphic: Graphic; assets: AssetMap; missingLabel: string }) {
  if (!assets[graphic.light]) return <MissingAsset label={missingLabel} path={graphic.light} />;
  return <ThemedImage light={graphic.light} dark={graphic.dark} alt={graphic.alt} assets={assets} className={s.plateImg} />;
}

function ExternalOrText({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  const url = usableHref(href);
  if (!url) return <span className={className}>{children}</span>;
  return (
    <a className={className} href={url} {...NEW_TAB}>
      {children}
    </a>
  );
}

// ---------------------------------------------------------------------------

function ThemeToggle({ dark, light }: { dark: string; light: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('vani-theme', next);
    } catch {
      /* storage unavailable: the choice lasts for this page view */
    }
  };

  // Follow the OS while the visitor has not chosen.
  React.useEffect(() => {
    const m = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem('vani-theme');
      } catch {
        /* ignore */
      }
      if (stored !== 'light' && stored !== 'dark') document.documentElement.setAttribute('data-theme', m.matches ? 'dark' : 'light');
    };
    m.addEventListener('change', onChange);
    return () => m.removeEventListener('change', onChange);
  }, []);

  // Both labels render; CSS shows the one for the theme you would switch to,
  // so server and client markup match and nothing flashes.
  return (
    <button type="button" className={s.toggle} onClick={toggle}>
      <svg viewBox="0 0 16 16" aria-hidden="true" className={s.toggleIcon}>
        <circle cx="8" cy="8" r="6.25" />
        <path d="M8 1.75 A6.25 6.25 0 0 1 8 14.25 Z" />
      </svg>
      <span className={s.srOnly}>Switch to </span>
      <span className={s.labelWhenLight}>{dark}</span>
      <span className={s.labelWhenDark}>{light}</span>
      <span className={s.srOnly}> theme</span>
    </button>
  );
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function PlatePicker({ plates, active, onPick, label }: { plates: Plate[]; active: number; onPick: (i: number) => void; label: string }) {
  if (plates.length > 6) {
    return (
      <label className={s.selectWrap}>
        <span className={s.srOnly}>{label}</span>
        <select className={s.select} value={active} onChange={(e) => onPick(Number(e.target.value))}>
          {plates.map((p, i) => (
            <option key={p.id} value={i}>
              {p.title}
            </option>
          ))}
        </select>
        <svg viewBox="0 0 10 10" aria-hidden="true" className={s.selectCaret}>
          <path d="M2 3.5 L5 6.5 L8 3.5" />
        </svg>
      </label>
    );
  }
  return (
    <div role="group" aria-label={label} className={s.segmented}>
      {plates.map((p, i) => (
        <button key={p.id} type="button" className={s.segment} aria-pressed={i === active} aria-label={`${pad(i + 1)}, ${p.title}`} onClick={() => onPick(i)}>
          {pad(i + 1)}
        </button>
      ))}
    </div>
  );
}

function PastWorkTileView({ tile, assets, missingLabel }: { tile: PastWorkTile; assets: AssetMap; missingLabel: string }) {
  const href = usableHref(tile.url);
  const name = `${tile.name}, ${tile.did}`;
  const inner = (
    <>
      <span className={s.tileWash} aria-hidden="true">
        <img className={cx(s.texture, s.onlyLight)} src={tile.wash.light} alt="" decoding="async" />
        <img className={cx(s.texture, s.onlyDark)} src={tile.wash.dark} alt="" decoding="async" />
      </span>
      <span className={s.tileFace}>
        {assets[tile.logo.light] ? (
          <ThemedImage light={tile.logo.light} dark={tile.logo.dark} alt="" assets={assets} className={s.tileLogo} />
        ) : (
          <span className={s.tileMissing}>
            <span className={s.tileName}>{tile.name}</span>
            <span className={s.tileMissingNote}>{missingLabel}</span>
          </span>
        )}
      </span>
      <span className={s.tileDid}>{tile.did}</span>
    </>
  );
  if (href) {
    return (
      <a className={s.tile} href={href} aria-label={name} {...NEW_TAB}>
        {inner}
      </a>
    );
  }
  // No URL yet: still focusable so the reveal works, but not a link.
  return (
    <span className={s.tile} role="group" tabIndex={0} aria-label={name}>
      {inner}
    </span>
  );
}

/**
 * The reading list: spines on a shelf that scrolls sideways. Scroll steps
 * of the page also move it along (not under reduced motion).
 */
function Shelf({ books, progress, label, assets }: { books: Book[]; progress: number; label: string; assets: AssetMap }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const spines = layoutSpines(books);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || progress < 0) return;
    el.scrollTo({ left: progress * (el.scrollWidth - el.clientWidth), behavior: 'smooth' });
  }, [progress]);

  return (
    <div ref={ref} className={s.shelfWindow} role="region" aria-label={label} tabIndex={0}>
      <ul className={s.shelf}>
        {spines.map((b) => {
          const url = b.url ? usableHref(b.url) : null;
          const photo = b.spine && assets[b.spine.src] ? b.spine : null;
          const name = `${b.title}, ${b.author}${b.year ? `, ${b.year}` : ''}`;
          const body = photo ? (
            <img className={s.spineImg} src={photo.src} width={photo.width} height={photo.height} alt={name} decoding="async" />
          ) : (
            <span className={s.spineTitle}>
              {b.title}
              <span className={s.srOnly}>, {b.author}</span>
            </span>
          );
          return (
            <li
              key={b.key}
              className={cx(s.spineItem, !photo && s.spineTyped)}
              style={photo ? { height: `${b.heightPct}%`, aspectRatio: `${photo.width} / ${photo.height}` } : { width: b.width, height: `${b.heightPct}%` }}
            >
              {url ? (
                <a className={s.spineLink} href={url} {...NEW_TAB}>
                  {body}
                </a>
              ) : (
                body
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------------

export default function FrontPage({ content: c, books, washes, assets }: Props) {
  const wash = (name: string) => washes.find((w) => w.name === name);
  const ochre = wash('Ochre');
  const stone = wash('Stone');
  const graphite = wash('Graphite');
  const plates = c.researchSite.plates;
  const count = plates.length;
  const steps = stepsFor(count);

  const narrow = useMedia('(max-width: 760px)');
  const reducedMotion = useMedia('(prefers-reduced-motion: reduce)');
  const hidden = useDocumentHidden();
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const { active, pick, fromScroll } = useActivePlate({ count, steps, paused: hovered || focused || hidden, reducedMotion });
  const trackRef = React.useRef<HTMLDivElement>(null);
  const step = useScrollStep(trackRef, steps, !narrow, fromScroll);

  const current = plates[active];
  // -1 = leave the shelf where the visitor put it.
  const shelfProgress = narrow || reducedMotion || steps < 2 ? -1 : step / (steps - 1);
  const missing = c.missingAsset;
  const [featured, ...olderEssays] = c.writing.essays;
  const olderIndex = olderEssays.length > 1 && steps > 1 && !narrow ? Math.round((step * (olderEssays.length - 1)) / (steps - 1)) : 0;

  return (
    <div id="top" ref={trackRef} className={s.track} style={{ '--steps': steps } as React.CSSProperties}>
      <div className={s.spread}>
        <header className={s.head}>
          <a className={s.home} href="#top">
            {c.nav.home}
          </a>
          <ThemeToggle dark={c.nav.toggleDark} light={c.nav.toggleLight} />
        </header>

        <main className={s.grid}>
          {/* Entrance: name and the line under it */}
          <section className={cx(s.cell, s.entrance)}>
            <h1 className={s.name}>
              {c.entrance.nameLines.map((line, i) => (
                <React.Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h1>
            {/* SLOT: your copy under the name. Edit content/front-page.ts → entrance.claim */}
            <p className={s.claim} data-slot="entrance-claim">
              {c.entrance.claim}
            </p>
          </section>

          {/* research.site benchmarks: its own cell, on the bottom row */}
          <section
            id="benchmarks"
            aria-label={c.researchSite.pickerLabel}
            className={cx(s.cell, s.areaShowcase, s.showcase)}
            onPointerEnter={(e) => e.pointerType === 'mouse' && setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            onFocus={() => setFocused(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
            }}
          >
            <div className={s.showHead}>
              <span className={s.kicker}>{c.entrance.record.nowShowing}</span>
              {count > 1 && <PlatePicker plates={plates} active={active} onPick={pick} label={c.researchSite.pickerLabel} />}
            </div>
            <div className={s.showPlates}>
              <div className={s.strip} style={{ height: `${count * 100}%`, transform: `translateY(${(-active * 100) / Math.max(1, count)}%)` }}>
                {plates.map((p, i) => (
                  <div key={p.id} className={s.showPlate} inert={i !== active} aria-hidden={i !== active}>
                    {usableHref(p.url) ? (
                      // Mouse shortcut to the benchmark; keyboard users get the same link in the record below.
                      <a className={s.showPlateLink} href={usableHref(p.url) ?? undefined} tabIndex={-1} {...NEW_TAB}>
                        <PlateGraphic graphic={p.graphic} assets={assets} missingLabel={missing} />
                      </a>
                    ) : (
                      <PlateGraphic graphic={p.graphic} assets={assets} missingLabel={missing} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className={s.showRecords}>
              <div className={s.strip} style={{ height: `${count * 100}%`, transform: `translateY(${(-active * 100) / Math.max(1, count)}%)` }}>
                {plates.map((p, i) => (
                  <div key={p.id} className={s.record} inert={i !== active} aria-hidden={i !== active}>
                    <ExternalOrText href={p.url} className={s.recordTitleLink}>
                      <span className={s.recordTitle}>{p.title}</span>
                      <span className={s.srOnly}> on research.site</span>
                    </ExternalOrText>
                    <span className={s.recordMeta}>
                      {p.kind} · {p.published}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {current && (
              <span className={s.srOnly} aria-live={hovered || focused ? 'polite' : 'off'}>
                {current.title}
              </span>
            )}
          </section>

          {/* tbd.chat: one graphic */}
          <article id="tbd-chat" aria-label={c.tbdChat.title} className={cx(s.cell, s.textured, s.areaTbd)}>
            {ochre && <WashLayer wash={ochre} />}
            <div className={cx(s.plate, s.plateBleed)}>
              <PlateGraphic graphic={c.tbdChat.graphic} assets={assets} missingLabel={missing} />
            </div>
            <a className={s.titleTab} href={c.tbdChat.url} {...NEW_TAB}>
              {c.tbdChat.title}
            </a>
          </article>

          {/* intdev: where you are now, linking to internet.dev */}
          <section id="intdev" aria-label={c.intdev.logo.alt} className={cx(s.cell, s.areaIntdev, s.intdev)}>
            <span className={s.intdevLabel}>{c.intdev.label}</span>
            <a className={s.intdevLink} href={c.intdev.url} {...NEW_TAB}>
              {assets[c.intdev.logo.light] ? (
                <ThemedImage light={c.intdev.logo.light} dark={c.intdev.logo.dark} alt={c.intdev.logo.alt} assets={assets} className={s.intdevImg} />
              ) : (
                <span className={s.intdevMissing}>{c.intdev.logo.alt}</span>
              )}
            </a>
          </section>

          {/* Past work */}
          <section id="past-work" aria-labelledby="past-work-title" className={cx(s.cell, s.areaPastWork, s.pastWork)}>
            <div className={s.cellHead}>
              <h2 id="past-work-title" className={s.h2}>
                {c.pastWork.title}
              </h2>
            </div>
            <ul className={s.mosaic} style={{ '--cols': c.pastWork.columns, '--rows': c.pastWork.rows } as React.CSSProperties}>
              {c.pastWork.tiles.map((t) => (
                <li key={t.name} className={s.mosaicItem} style={{ gridColumn: `span ${t.span.cols}`, gridRow: `span ${t.span.rows}` }}>
                  <PastWorkTileView tile={t} assets={assets} missingLabel={missing} />
                </li>
              ))}
            </ul>
          </section>

          {/* research.site: its mark and name, linking out */}
          <section id="research-site" aria-label={c.researchSite.title} className={cx(s.cell, s.areaResearch, s.rsCell)}>
            {graphite && <WashLayer wash={graphite} />}
            <a className={s.rsLink} href={c.researchSite.url} aria-label={c.researchSite.title} {...NEW_TAB}>
              {assets[c.researchSite.logo.light] ? (
                <ThemedImage light={c.researchSite.logo.light} dark={c.researchSite.logo.dark} alt="" assets={assets} className={s.rsMark} />
              ) : (
                <span className={s.rsName}>{c.researchSite.title}</span>
              )}
            </a>
          </section>

          {/* Writing */}
          <section id="writing" aria-labelledby="writing-title" className={cx(s.cell, s.areaWriting, s.writing)}>
            <h2 id="writing-title" className={cx(s.h2, s.h2Gap)}>
              {c.writing.title}
            </h2>
            {featured && (
              <>
                <ExternalOrText href={featured.url} className={s.essay}>
                  {featured.title}
                </ExternalOrText>
                <span className={s.essayMeta}>
                  {featured.kind}, {featured.date}
                </span>
              </>
            )}
            <div className={s.grow} />
            {olderEssays.length > 0 && (
              // One older essay at a time; page scroll steps through them (all stack on phones).
              <div className={s.olderWindow}>
                <div
                  className={s.olderStrip}
                  style={{ height: `${olderEssays.length * 100}%`, transform: `translateY(${(-olderIndex * 100) / olderEssays.length}%)` }}
                >
                  {olderEssays.map((e, i) => (
                    <div key={e.url} className={s.olderEssay} title={e.title} inert={!narrow && i !== olderIndex} aria-hidden={!narrow && i !== olderIndex}>
                      <ExternalOrText href={e.url} className={s.olderEssayTitle}>
                        {e.title}
                      </ExternalOrText>
                      <span className={s.essayMeta}>
                        {e.kind}, {e.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Reading list: only the spines */}
          <section id="reading-list" aria-label={c.readingList.label} className={cx(s.cell, s.textured, s.areaReading)}>
            {stone && <WashLayer wash={stone} />}
            <Shelf books={books} progress={shelfProgress} label={c.readingList.label} assets={assets} />
          </section>

          {/* Contact */}
          <section id="contact" aria-labelledby="contact-title" className={cx(s.cell, s.areaContact, s.contact)}>
            <h2 id="contact-title" className={s.h2}>
              {c.contact.title}
            </h2>
            <div className={s.grow} />
            <ul className={s.contactList}>
              {c.contact.links.map((l) => (
                <li key={l.url}>
                  <ExternalOrText href={l.url} className={s.contactLink}>
                    {l.label}
                  </ExternalOrText>
                </li>
              ))}
              <li>
                {usableHref(c.contact.email) ? (
                  <a className={s.contactLink} href={`mailto:${c.contact.email}`}>
                    {c.contact.email}
                  </a>
                ) : (
                  <span className={s.contactLink}>{c.contact.email}</span>
                )}
              </li>
            </ul>
          </section>
        </main>

        <footer className={s.foot}>
          <span>{c.footer.left}</span>
        </footer>
      </div>
    </div>
  );
}
