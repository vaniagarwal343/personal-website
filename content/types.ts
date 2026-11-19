// Shapes for the front-page content. The data lives in front-page.ts and
// reading-list.ts. Any string wrapped in [square brackets] is a placeholder:
// `npm run check:content` lists them and fails while any remain.

/** A picture with optional separate light and dark files, paths under /public. */
export type Graphic = {
  light: string;
  /** Omit to use the light file in both themes. */
  dark?: string;
  alt: string;
};

export type Plate = {
  id: string;
  title: string;
  kind: string;
  published: string;
  url: string;
  graphic: Graphic;
};

export type PastWorkTile = {
  name: string;
  url: string;
  /** What you did there. Shown on hover and focus. */
  did: string;
  /** One-colour line logo: `light` (black) for the light theme, `dark` (white) for the dark theme. */
  logo: { light: string; dark?: string };
  /** The tile's procedural wash (scripts/gen_textures.py), light and dark. */
  wash: { light: string; dark: string; seed: number };
  /** Columns and rows this tile spans in the mosaic grid. */
  span: { cols: number; rows: number };
};

export type Essay = {
  title: string;
  kind: string;
  date: string;
  url: string;
};

export type Book = {
  title: string;
  author: string;
  year?: number | string;
  pages?: number;
  url?: string;
  /** Photo of the spine (transparent background), with its pixel size so the shelf never shifts. */
  spine?: { src: string; width: number; height: number };
};

export type FrontPageContent = {
  meta: { title: string; description: string };
  nav: { home: string; toggleDark: string; toggleLight: string };
  entrance: {
    nameLines: string[];
    /** The copy under your name. */
    claim: string;
    record: { nowShowing: string; kind: string; published: string; livesAt: string; plate: string; of: string };
  };
  researchSite: { title: string; url: string; logo: Graphic; pickerLabel: string; plates: Plate[] };
  tbdChat: { title: string; url: string; graphic: Graphic };
  pastWork: { title: string; columns: number; rows: number; tiles: PastWorkTile[] };
  /** The cell between past work and the right edge: just the intdev logo, linking to its site. */
  intdev: { url: string; label: string; logo: Graphic };
  writing: { title: string; essays: Essay[] };
  readingList: { label: string };
  contact: { title: string; email: string; links: Array<{ label: string; url: string }> };
  footer: { left: string };
  missingAsset: string;
};
