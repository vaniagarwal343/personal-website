# Design reference: portfolio front page

This is the approved mockup of the front page, exported as plain HTML so it can be opened and read without any tooling. It is the source of truth for layout, spacing, type, colour and motion.

## What is here

- `front-page.html` is the mockup. Open it in a browser and scroll: the plates inside the textured cells turn, and the record card and the index follow. The theme toggle is in the top right.
- `screenshots/` shows it at 1440 × 900 in light and dark, plus the third scroll step.
- `textures/` holds the six paper washes: indigo, ochre and stone, each in light and dark.
- `gen_textures.py` regenerates the washes from their seeds (indigo 1126, ochre 2207, stone 3319). It needs numpy, scipy and Pillow. Run `python gen_textures.py textures`.

## What is not final

- Every word is a label or a `[bracketed placeholder]`. Vani writes the real copy.
- The ink drawings are stand-ins, not real graphics.
- The build brief changes five cells: tbd.chat, research.site, the Projects index, the reading list and the colophon. Where the brief and this mockup disagree, the brief wins.

## Notes

- Type is Newsreader and DM Mono, loaded from Google Fonts in this file.
- The scroll and theme script at the bottom of `front-page.html` is reference behaviour written for this file only. Port the behaviour, not the code.
