// Every word on the front page lives here. Components only lay it out.
//
// Rules:
// - Strings in [square brackets] are placeholders for Vani to replace.
// - Labels (Kind, Published, ...) come from the approved mockup.
// - Asset paths point under /public. Expected filenames are documented in
//   public/front/README.md. A path whose file does not exist renders as an
//   empty plate marked "Missing asset".
// - Run `npm run check:content` to list what is still missing.

import type { FrontPageContent } from './types';

export const frontPage: FrontPageContent = {
  meta: {
    title: 'Vani Agarwal',
    description: 'vani agarwal, partner at INTDEV | founder at research.site, tbd.chat',
  },

  nav: {
    home: 'vaniagarwal.com',
    toggleDark: 'Dark',
    toggleLight: 'Light',
  },

  entrance: {
    nameLines: ['Vani', 'Agarwal'],
    // The line under your name, in your words.
    claim: 'i design, build, and evaluate AI systems',
    record: {
      nowShowing: 'Now showing',
      kind: 'Kind',
      published: 'Published',
      livesAt: 'Lives at',
      plate: 'Plate',
      of: 'of',
    },
  },

  // research.site plate switcher, newest first. One plate per benchmark.
  // 1 plate: no picker, no timer. 2-4: segmented control. 5+: a select.
  // Graphics are screenshots of each benchmark's lead chart on research.site,
  // cropped to the data, in its light and dark themes. Alt text restates the data.
  researchSite: {
    title: 'research.site',
    url: 'https://research.site',
    // research.site's mark (from favicon_new.png), as one-colour black / white.
    logo: { light: '/front/logos/research-site-light.png', dark: '/front/logos/research-site-dark.png', alt: '' },
    pickerLabel: 'Benchmark plates',
    plates: [
      {
        id: 'harness-bench',
        title: 'Harness-Bench',
        kind: 'Benchmark, 4 harnesses, 12 questions',
        published: 'Nov 2026',
        url: 'https://research.site/harness-bench',
        graphic: {
          light: '/front/plates/harness-bench-light.webp',
          dark: '/front/plates/harness-bench-dark.webp',
          alt: 'Harness-Bench results for Claude Fable 5.2 in four setups. Rubric score: closed-book 0.558, plain tools 0.518, GPT Researcher 0.433, Deep Agents 0.562. Mean minutes per run: 2.0, 5.1, 7.4 and 12.8. Mean cost per run: $0.45, $2.93, $7.80 and $8.02.',
        },
      },
      {
        id: 'dse-246',
        title: 'DSE-246',
        kind: 'Benchmark, 2 search stacks, 246 tasks',
        published: 'Oct 2026',
        url: 'https://research.site/dse-246',
        graphic: {
          light: '/front/plates/dse-246-light.webp',
          dark: '/front/plates/dse-246-dark.webp',
          alt: 'DSE-246 results for one agent with two search stacks. Accuracy: Exa 56.4%, DeepSeek 39.2%. Median seconds per attempt: Exa 125, DeepSeek 189. Combined run cost: Exa $346.27, DeepSeek $525.28.',
        },
      },
      {
        id: 'astra-26',
        title: 'Astra-26',
        kind: 'Benchmark, 5 tool stacks, 26 tasks',
        published: 'Sep 2026',
        url: 'https://research.site/astra-26',
        graphic: {
          light: '/front/plates/astra-26-light.webp',
          dark: '/front/plates/astra-26-dark.webp',
          alt: 'Astra-26 answer accuracy by web tool stack: Exa 42.3%, built-in web 42.3%, Keenable 38.5%, Parallel 26.9%, Valyu 23.1%.',
        },
      },
      {
        id: 'lbc-30',
        title: 'LBC-30',
        kind: 'Benchmark, 2 agents × 4 search APIs, 30 tasks',
        published: 'Aug 2026',
        url: 'https://research.site/lbc-30',
        graphic: {
          light: '/front/plates/lbc-30-light.webp',
          dark: '/front/plates/lbc-30-dark.webp',
          alt: 'LBC-30 accuracy and cost per correct answer for Claude Code and Codex with four search APIs. Claude Code with Exa is the most accurate at 60% and the cheapest per correct answer at $2.79.',
        },
      },
    ],
  },

  tbdChat: {
    title: 'tbd.chat',
    url: 'https://tbd.chat',
    graphic: {
      light: '/front/tbd/tbd-chat-light.webp',
      dark: '/front/tbd/tbd-chat-dark.webp',
      alt: 'The tbd.chat knot logo on a soft pink and green gradient.',
    },
  },

  // Mosaic of logo tiles. The grid is `columns` x `rows`; each tile's span
  // says how many of those it covers. Spans in a row should add up to
  // `columns` so the lines close. One-liners are drawn from the resume.
  // Each tile has its own wash in the organisation's colours (seeds in
  // scripts/gen_textures.py) under a one-colour line logo.
  pastWork: {
    title: 'Past work',
    columns: 12,
    rows: 2,
    tiles: [
      {
        name: 'Microsoft AI',
        url: 'https://microsoft.ai',
        did: 'Designed a pay-as-you-go credit system and nudge engine for Copilot’s 10M+ student and consumer users.',
        logo: { light: '/front/logos/microsoft-ai-line-light.svg', dark: '/front/logos/microsoft-ai-line-dark.svg' },
        wash: { light: '/front/washes/mai-light.webp', dark: '/front/washes/mai-dark.webp', seed: 6603 },
        span: { cols: 7, rows: 1 },
      },
      {
        name: 'Snapp AI',
        url: 'https://trysnapp.ai',
        did: 'Calibrated and shipped the production LLM-judge evals scoring agent replies across 2,000+ messages a day.',
        logo: { light: '/front/logos/snapp-line-light.png', dark: '/front/logos/snapp-line-dark.png' },
        wash: { light: '/front/washes/snapp-light.webp', dark: '/front/washes/snapp-dark.webp', seed: 5502 },
        span: { cols: 5, rows: 1 },
      },
      {
        name: 'UPS',
        url: 'https://www.ups.com',
        did: 'Engineered a document service unifying 3 data sources to serve 1,000+ PDFs a day.',
        logo: { light: '/front/logos/ups-line-light.png', dark: '/front/logos/ups-line-dark.png' },
        wash: { light: '/front/washes/ups-light.webp', dark: '/front/washes/ups-dark.webp', seed: 4401 },
        span: { cols: 5, rows: 1 },
      },
      {
        name: 'University of Washington',
        url: 'https://www.washington.edu',
        did: 'Taught CSE 373 for 9 quarters, supporting 1,400+ students and leading teams of 12–15 TAs.',
        logo: { light: '/front/logos/uw-line-light.svg', dark: '/front/logos/uw-line-dark.svg' },
        wash: { light: '/front/washes/uw-light.webp', dark: '/front/washes/uw-dark.webp', seed: 7704 },
        span: { cols: 7, rows: 1 },
      },
    ],
  },

  intdev: {
    url: 'https://internet.dev',
    label: 'currently at',
    logo: {
      light: '/front/logos/intdev-light.png',
      dark: '/front/logos/intdev-dark.png',
      alt: 'INTDEV, Internet Development Studio',
    },
  },

  writing: {
    title: 'Writing',
    // Newest first. The first is set large; the rest sit in the row below.
    essays: [
      {
        title: 'Why do benchmarks remain the industry’s public standard?',
        kind: 'Essay',
        date: '16 Nov 2026',
        url: 'https://dominiquefranc.substack.com/p/why-do-benchmarks-remain-the-industrys',
      },
      {
        title: 'why am i embarrassed by my own creativity?',
        kind: 'Essay',
        date: '13 Sep 2026',
        url: 'https://dominiquefranc.substack.com/p/why-am-i-embarrassed-by-my-own-creativity',
      },
      {
        title: 'How do you restart your life in a city you already have history in?',
        kind: 'Essay',
        date: '5 Sep 2026',
        url: 'https://dominiquefranc.substack.com/p/how-do-you-restart-your-life-in-a',
      },
    ],
  },

  readingList: {
    // Screen-reader name for the shelf. The cell shows only the spines.
    label: 'Reading list',
  },

  contact: {
    title: 'Contact',
    email: 'v@internet.dev',
    links: [
      { label: 'X', url: 'https://x.com/vaniagrwall' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vaniagarwal-/' },
      { label: 'GitHub', url: 'https://github.com/vaniagarwal343' },
    ],
  },

  footer: {
    left: 'v0.1, 19 Nov 2026',
  },

  missingAsset: 'Missing asset',
};

/** Paper washes for the textured cells (seeds in scripts/gen_textures.py). */
export const washes = [
  { name: 'Ochre', seed: 2207, light: '/front/textures/ochre-light.webp', dark: '/front/textures/ochre-dark.webp' },
  { name: 'Stone', seed: 3319, light: '/front/textures/stone-light.webp', dark: '/front/textures/stone-dark.webp' },
  { name: 'Graphite', seed: 8805, light: '/front/washes/graphite-light.webp', dark: '/front/washes/graphite-dark.webp' },
] as const;
