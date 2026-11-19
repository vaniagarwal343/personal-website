# Front-page assets

The page checks for each file when it is built (and on every request in
`npm run dev`). A missing file shows as an empty plate marked "Missing asset",
never a broken image. Paths are set in `content/front-page.ts` and
`content/reading-list.ts`. Run `npm run check:content` to list anything missing.

| Folder | Files | Source |
|---|---|---|
| `tbd/` | `tbd-chat-light.webp`, `tbd-chat-dark.webp` | `tbdlogonew-06.png` (black knot, light theme) and `TBD.png` (cream knot, dark theme), resized |
| `plates/` | `<benchmark>-light.webp`, `<benchmark>-dark.webp` | Screenshots of each benchmark's lead figure on research.site, in its light and dark themes |
| `logos/` | `microsoft-ai-{light,dark}.svg` | The MAI wordmark from microsoft.ai's header, set in page ink per theme |
| `logos/` | `snapp-ai.webp` | Supplied Snapp app icon, resized (same in both themes) |
| `logos/` | `ups.svg` | UPS shield, Wikimedia Commons (same in both themes) |
| `logos/` | `uw-light.svg`, `uw-dark.svg` | UW signature, Wikimedia Commons; the dark version is the same mark in one light colour |
| `logos/` | `intdev-{light,dark}.png` | Supplied intdev screenshot, turned into a one-colour mark on transparent |
| `books/` | `NN-title.webp` | Supplied spine photos, trimmed to the spine and set to 560px tall |
| `textures/` | `{indigo,ochre,stone}-{light,dark}.webp` | Paper washes. Regenerate with `python scripts/gen_textures.py public/front/textures` (needs numpy, scipy, Pillow) |

To add a book with a spine photo: put a transparent PNG/WebP of the spine in
`books/` and add `spine: { src, width, height }` to its entry. Without one, the
book is set in type.

`theme-init.js` in this folder is code, not an asset. It sets the theme before
first paint.
