export type ProjectEntry = {
  number: string;
  slug: string;
  name: string;
  tagline: string;
  href: string;
  external?: boolean;
};

export const projects: ProjectEntry[] = [
  {
    number: '01',
    slug: 'tbd',
    name: 'tbd.chat',
    tagline: 'privacy architecture as honesty infrastructure',
    href: '/work/tbd',
  },
  {
    number: '02',
    slug: 'research-site',
    name: 'research.site',
    tagline: 'transparency architecture as autonomy infrastructure',
    href: '/work/research-site',
  },
  {
    number: '03',
    slug: 'microsoft-ai',
    name: 'microsoft ai',
    tagline: 'credit systems and the ethics of nudging',
    href: '/work/microsoft-ai',
  },
  {
    number: '04',
    slug: 'snapp-ai',
    name: 'snapp ai',
    tagline: 'tool whitelisting as accountability infrastructure',
    href: '/work/snapp-ai',
  },
  {
    number: '05',
    slug: 'teaching',
    name: 'teaching',
    tagline: 'cse 373, university of washington',
    href: 'https://courses.cs.washington.edu/courses/cse373/',
    external: true,
  },
];

export type WritingEntry = {
  year: string;
  title: string;
  href: string;
  todo?: boolean;
};

export const writing: WritingEntry[] = [
  {
    year: '2026',
    title: 'vsd for ai intermediaries',
    href: '#',
    todo: true,
  },
  {
    year: '2026',
    title: 'build your own feature',
    href: '#',
    todo: true,
  },
  {
    year: '2026',
    title: 'on friction (draft)',
    href: '#',
    todo: true,
  },
];

export type SocialEntry = {
  label: string;
  href: string;
  external?: boolean;
};

export const contact: SocialEntry[] = [
  { label: 'vagar343@uw.edu', href: 'mailto:vagar343@uw.edu' },
  { label: 'github', href: 'https://github.com/vaniagarwal343', external: true },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/vaniagarwal-/', external: true },
  { label: 'x', href: 'https://x.com/vaniagrwall', external: true },
  { label: 'resume.pdf', href: '/papers/vani-agarwal-resume.pdf', external: true },
];

export const currently = ['research.site', 'tbd.chat'];
export const previously = [
  'microsoft ai · seattle',
  'snapp ai · sf',
  'uw · cse 373',
  'ups supply chain',
  'societal',
];
