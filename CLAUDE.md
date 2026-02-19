# CLAUDE.md

## Stack

- **Framework**: React 18.3.1 via Create React App (react-scripts 5.0.1)
- **Language**: JavaScript (no TypeScript)
- **Routing**: None — single-page scroll with `#hash` anchor links
- **CSS**: CSS Modules (`.module.css` per component) + one global stylesheet (`src/styles/global.css`)
- **Icons**: `react-icons` 5.3.0 — uses `react-icons/fi` (Feather) in Navbar and Hero, `react-icons/fa6` (Font Awesome 6) for X/Twitter icon in Hero
- **Node**: Requires Node 20+ locally. `.env` file provides `NODE_OPTIONS=--openssl-legacy-provider` and `SKIP_PREFLIGHT_CHECK=true`

## Project Structure

```
personal-website/
├── public/
│   ├── index.html              # IBM Plex Mono font, SEO meta tags, dark mode flash-prevention script
│   ├── manifest.json           # PWA manifest
│   ├── vani.png                # Profile photo (678KB, 962x938)
│   ├── vani-agarwal-resume.pdf # Resume PDF (180KB)
│   ├── favicon.ico             # VA monogram (16x16)
│   ├── logo192.png / logo512.png  # VA monogram icons
│   └── robots.txt
├── src/
│   ├── index.js                # React entry point (StrictMode)
│   ├── index.css               # Single @import of global.css
│   ├── App.js                  # Root — renders all sections, manages dark mode state
│   ├── styles/
│   │   └── global.css          # Design system: CSS custom properties, reset, dark mode, animations
│   ├── hooks/
│   │   ├── useDarkMode.js      # Dark mode toggle — localStorage + prefers-color-scheme
│   │   └── useScrollAnimation.js  # Intersection Observer fade-in (fires once)
│   ├── data/
│   │   ├── experience.js       # 5 roles with bullet points (accordion content)
│   │   ├── projects.js         # 4 projects with title, description, stack, optional link
│   │   └── social.js           # Email, GitHub, LinkedIn, X links (shared by Hero + Contact)
│   └── components/
│       ├── navbar/             # Fixed 48px action bar, VA monogram left, uppercase nav links right, dark toggle
│       ├── hero/               # Compact intro: photo, name (26px), tagline, social icons
│       ├── about/              # Single paragraph bio
│       ├── experience/         # Accordion pattern: collapsed rows expand to show bullet points
│       ├── projects/           # Flat list: ⊹ Name — description — stack per row
│       ├── resume/             # Two text links: Download PDF + View PDF (no embed)
│       ├── contact/            # "Let's chat." + inline ⊹-prefixed text links
│       └── footer/             # Copyright line, 11px muted text
├── .env                        # NODE_OPTIONS=--openssl-legacy-provider, SKIP_PREFLIGHT_CHECK=true
├── .github/workflows/
│   └── gh-pages.yml            # GitHub Actions deploy — working (Node 20 + openssl flag)
├── package.json
└── .gitignore
```

## Design System

Aesthetic inspired by internet.dev / sacred.computer — minimal, monospaced, no decoration.

- **Font**: IBM Plex Mono (Google Fonts), weights 400/500/600, loaded via `<link>` in index.html
- **Base text**: 13px, line-height 1.6. Section labels: 11px uppercase, 0.1em letter-spacing, accent color. Name in hero: 26px semibold — largest element on the page
- **Dark mode** (default via system preference): `[data-theme="dark"]` overrides all CSS custom properties. Flash prevention via inline `<script>` in index.html
- **Colors**: Light: `#fafafa` bg, `#1a1a1a` text. Dark: `#0a0a0a` bg, `#d4d4d4` text. Muted: `#737373` (both). Accent: terracotta `#C4785A` (light) / `#D4896A` (dark) — used ONLY for section labels and link hover states
- **Borders**: `1px solid rgba(255,255,255,0.08)` (dark) / `1px solid rgba(0,0,0,0.08)` (light). No border-radius anywhere. No box-shadows. No gradients
- **Spacing**: 4px–48px scale (--space-xs through --space-2xl). Sections padded at 48px vertical, 24px horizontal
- **Layout**: max-width 720px, centered
- **Animations**: `.fade-in` / `.visible` classes driven by `useScrollAnimation` hook (Intersection Observer, threshold 0.15, fires once). 12px translateY, 350ms duration
- **Breakpoints**: 768px (tablet) and 480px (mobile)

## Content

- **Data files** in `src/data/`: experience.js (5 roles with bullet arrays), projects.js (4 projects), social.js (4 links)
- **About bio**: inline JSX in `src/components/about/About.js`
- **Hero tagline**: inline JSX in `src/components/hero/Hero.js`
- **Social links**: defined once in `src/data/social.js`, imported by Hero.js and Contact.js
- To update content, edit the data files or inline JSX in the component

## Build & Deploy

- **Dev server**: `npm start` (`.env` provides the required Node flags automatically)
- **Production build**: `npm run build`
- **Deploy target**: GitHub Pages at `https://vaniagarwal343.github.io/personal-website`
- **Deploy command**: `npm run deploy` (runs `gh-pages -d build`)
- **CI**: `.github/workflows/gh-pages.yml` — triggers on push to `main`, uses Node 20 with `NODE_OPTIONS=--openssl-legacy-provider` and `SKIP_PREFLIGHT_CHECK=true`
- **`homepage`** in package.json: `https://vaniagarwal343.github.io/personal-website` — CRA uses this as the base path for all assets

## Dependencies

Production: `react`, `react-dom`, `react-icons`, `react-scripts`
Dev: `@babel/plugin-proposal-private-property-in-object` (suppresses CRA warning)

No dead dependencies. No unused packages.

## Known Issues / Future Work

1. **No `<meta og:image>`**: OG tags exist for title/description but no image — social previews will be text-only. Could add `vani.png` as og:image
2. **Vite migration**: Would eliminate the `--openssl-legacy-provider` workaround entirely. Straightforward for a project this size
3. **Profile photo optimization**: `public/vani.png` is 678KB at 962x938 — could be resized/compressed for faster load
4. **Project previews**: The hover preview concept from the old card grid was removed in the flat-list refactor. Could be re-added as small tooltips if desired
