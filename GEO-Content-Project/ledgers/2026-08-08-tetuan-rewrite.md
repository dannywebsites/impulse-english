# Ledger — Tetuán listicle GEO rewrite + blog table fix

Date: 2026-08-08
Branch: `content/tetuan-listicle-geo-rewrite` (branched from `feat/aprende-ingles-video-cluster`)
Plan: `~/.claude/plans/stateful-skipping-fern.md`
Target URL: `/blog/mejores-academias-ingles-tetuan/` (unchanged — slug pinned)

Why: the published article passes the listicle gate clean but has four gaps against the
generative-engine-optimisation research, one of which is a rendering bug that breaks the page
sideways on mobile. Full reasoning in the plan's Context section.

---

## Step 1 — Branch + freeze the "before"  ✅

Frozen copies, all inside
`~/.claude/skills/seo-blog-writer/runs/mejores-academias-ingles-tetuan-listicle/`:

| File | Bytes | What it is |
|---|---|---|
| `article.before.md` | 14,327 | the writer-side markdown as published |
| `collection.before.md` | 32,730 | the assembled front-matter file live on the site |
| `rendered.before.html` | 387,016 | the served page, fetched from localhost:3000 |
| `index.css.before` | 11,327 | the stylesheet before the table fix |

Revert this step: `git checkout feat/aprende-ingles-video-cluster && git branch -D content/tetuan-listicle-geo-rewrite`
(the frozen copies live outside the repo, so they survive that).

Baseline facts recorded before any edit:

- `validation.json` = `{"format":"listicle","errors":[],"warnings":[],"wordCount":2261}` — the
  article that is being replaced passed its own gate clean. The gaps are things the gate does not
  measure.
- rendered page: 2,379 visible words, 1 `<table>` (with `<thead>`, **no `<caption>`**), ItemList
  positions 1–6 intact, 5 review cards, `datePublished` = `dateModified` = `2026-08-08`.
- `<title>` = `Las 6 mejores academias de inglés en Tetuán (2026)` — 47 chars, no brand chain,
  confirming the `fullTitle` branch fired.

## Step 2 — Delete the duplicate " 2" collection files  ⏳

## Step 3 — Re-scrape the five rivals  ⏳

## Step 4 — Rewrite `article.md`  ⏳

## Step 5 — Assemble + publish  ⏳

## Step 6 — Fix the blog table CSS  ⏳

## Step 7 — Build + verify  ⏳
