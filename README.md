# The Garden as Meaning-Machine — Slidev deck

A narratological lecture applying Ignasi Ribó's *Prose Fiction: An
Introduction to the Semiotics of Narrative* (Open Book Publishers, 2019,
CC BY 4.0) — chiefly Chapter 3, "Setting," supported by Chapters 1–2 — to
Nathaniel Hawthorne's "Rappaccini's Daughter."

Content and speaker notes are authored once in
`../content/deck-content.mjs` and compiled into `slides.md` by
`generate-slides.mjs`, so this deck and the companion PPTX
(`../pptx/`) never drift apart. **Edit the content file, then
regenerate — do not hand-edit `slides.md`.**

```bash
node generate-slides.mjs   # rebuild slides.md from deck-content.mjs
```

## Structure

- `slides.md` — generated deck markdown (21 slides). Speaker notes are the
  trailing HTML comments on each slide — this is both native Slidev
  presenter-note syntax *and* exactly what deck2video expects.
- `layouts/` — 7 local layout components (`cover`, `content`, `figure`,
  `twocol`, `quote`, `workcited`, `end`) built for this deck's botanical
  palette. Local layouts are picked up automatically by Slidev; no
  registration needed.
- `components/` — `Card`/`Cards` (bulleted argument cards) and `Sprig` (an
  original decorative botanical motif, hand-drawn in SVG).
- `public/diagrams/` — the six SVG figures (semiotic model, Freytag's
  pyramid applied, the storyworld-existents triangle, an original garden
  topography sketch, the four-kinds-of-setting matrix, and the
  verisimilitude schema). Four are adapted from Ribó's own diagrams under
  CC BY 4.0 (credited on their slides); two are original compositions.
  Regenerate them from `../assets/build-diagrams.mjs` if the content
  changes.
- `style.css` — the deck's palette (deep garden green, a single toxic-violet
  accent, parchment/ivory grounds, aged-gold rule lines) and typography.

## Running it

```bash
npm install
npm run dev      # slidev dev server with live reload
npm run build    # static production build -> dist/
```

## Deploying to Vercel

`vercel.json` is already set up for a static Slidev build (`npm run build`
→ `dist/`). From this folder:

```bash
vercel deploy        # preview
vercel deploy --prod # production
```

Or connect the repo/folder in the Vercel dashboard with:
- Build command: `npm run build`
- Output directory: `dist`

## Exporting narrated video with deck2video

This deck is authored as plain Slidev markdown with per-slide speaker
notes in HTML comments (`<!-- ... -->`), which is exactly the format
[deck2video](https://github.com/pjdoland/deck2video) expects — no extra
packaging needed. Three slides (Roadmap, Discussion Questions) use
`v-click` reveals whose speaker notes contain matching `[click]` markers,
so deck2video will render one narrated video segment per click state.

```bash
# from deck2video's own environment (see its README for setup):
python -m deck2video slidev/slides.md --format slidev --voice your-voice.wav
```

If narration or slide order changes, edit `../content/deck-content.mjs`
and re-run `node generate-slides.mjs` before re-exporting.

## Sources

See the in-deck MLA Works Cited slide. Primary: Hawthorne, "Rappaccini's
Daughter" (1846, *Mosses from an Old Manse*, public domain). Secondary:
Ribó, *Prose Fiction* (2019, CC BY 4.0).
