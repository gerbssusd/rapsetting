// Generates slides.md from ../content/deck-content.mjs. Re-run this any time
// deck-content.mjs changes, so the Slidev deck and the PPTX stay in lockstep.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { slides, meta } from "../content/deck-content.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const esc = (s = "") => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const yq = (s) => `"${esc(s)}"`; // YAML double-quoted scalar

function notesBlock(narration) {
  if (!narration) return "";
  return `\n<!--\n${narration.trim()}\n-->\n`;
}

function cardsBlock(bullets, useClicks) {
  return bullets
    .map((b, i) => {
      const clickAttr = useClicks ? " v-click" : "";
      if (typeof b === "string") {
        return `<Card${clickAttr} n="${i + 1}">${b}</Card>`;
      }
      return `<Card${clickAttr} n="${i + 1}" head=${yq(b.head)}>${b.body}</Card>`;
    })
    .join("\n");
}

function frontmatter(obj) {
  const lines = Object.entries(obj)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => `${k}: ${v}`);
  return `---\n${lines.join("\n")}\n---\n`;
}

const parts = [];

// -------------------------- Global deck frontmatter -------------------------
parts.push(
  `---
theme: default
title: ${yq(meta.title)}
info: ${yq(meta.subtitle)}
class: text-left
transition: fade
mdc: true
fonts:
  sans: "Liberation Sans, Arial"
  serif: "Liberation Serif, Georgia"
layout: cover
eyebrow: ${yq(slides[0].eyebrow)}
headline: ${yq(slides[0].title)}
subtitle: ${yq(slides[0].subtitle)}
footer: ${yq(slides[0].footer)}
---
`
);
parts.push(notesBlock(slides[0].narration));

for (let idx = 1; idx < slides.length; idx++) {
  const s = slides[idx];
  let block = "---\n";

  if (s.kind === "list" || s.kind === "content") {
    block += frontmatter({
      layout: "content",
      eyebrow: yq(s.eyebrow),
      title: yq(s.title),
      intro: s.intro ? yq(s.intro) : undefined,
    }).replace(/^---\n|\n---\n$/g, "") + "\n---\n\n";
    block += `<Cards>\n${cardsBlock(s.bullets, s.useClicks)}\n</Cards>\n`;
  } else if (s.kind === "twocol") {
    const colAYaml = `{ head: ${yq(s.colA.head)}, lines: [${s.colA.lines.map(yq).join(", ")}] }`;
    const colBYaml = `{ head: ${yq(s.colB.head)}, lines: [${s.colB.lines.map(yq).join(", ")}] }`;
    block += frontmatter({
      layout: "twocol",
      eyebrow: yq(s.eyebrow),
      title: yq(s.title),
      colA: colAYaml,
      colB: colBYaml,
    }).replace(/^---\n|\n---\n$/g, "") + "\n---\n";
  } else if (s.kind === "diagram") {
    block += frontmatter({
      layout: "figure",
      eyebrow: yq(s.eyebrow),
      title: yq(s.title),
      image: yq(`/diagrams/${s.diagram}.svg`),
      caption: yq(s.caption),
    }).replace(/^---\n|\n---\n$/g, "") + "\n---\n\n";
    if (s.bullets && s.bullets.length) {
      block += `<Cards cols="1">\n${s.bullets.map((b, i) => `<Card n="${i + 1}">${typeof b === "string" ? b : b.body}</Card>`).join("\n")}\n</Cards>\n`;
    }
  } else if (s.kind === "matrix") {
    block += frontmatter({
      layout: "figure",
      eyebrow: yq(s.eyebrow),
      title: yq(s.title),
      image: yq(`/diagrams/${s.diagram}.svg`),
      caption: yq(s.caption),
    }).replace(/^---\n|\n---\n$/g, "") + "\n---\n";
  } else if (s.kind === "quote") {
    block += frontmatter({
      layout: "quote",
      eyebrow: yq(s.eyebrow),
      title: yq(s.title),
      quote: yq(s.quote),
      quoteCitation: yq(s.quoteCitation),
    }).replace(/^---\n|\n---\n$/g, "") + "\n---\n\n";
    block += `<Cards>\n${cardsBlock(s.bullets, false)}\n</Cards>\n`;
  } else if (s.kind === "workscited") {
    const entriesYaml = `[${s.entries.map((e) => `{ text: ${yq(e.text)} }`).join(", ")}]`;
    block += frontmatter({
      layout: "workcited",
      eyebrow: yq(s.eyebrow),
      title: yq(s.title),
      entries: entriesYaml,
    }).replace(/^---\n|\n---\n$/g, "") + "\n---\n\n";
    block += `_Scholars Ribó cites in turn — Bakhtin, Barthes, Chekhov, Aristotle, Freytag — are documented in full in his own book's bibliography and referenced here via signal phrase, per MLA convention for sources encountered secondhand._\n`;
  } else if (s.kind === "closing") {
    block += frontmatter({
      layout: "end",
      title: yq(s.title),
      subtitle: yq(s.subtitle),
    }).replace(/^---\n|\n---\n$/g, "") + "\n---\n";
  }

  block += notesBlock(s.narration);
  parts.push(block);
}

const out = parts.join("\n");
writeFileSync(path.join(__dirname, "slides.md"), out, "utf8");
console.log("wrote slides.md,", slides.length, "slides");
