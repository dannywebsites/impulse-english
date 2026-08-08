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

## Step 2 — Delete the duplicate " 2" collection files  ✅ (no-op at source)

Nothing to delete. The four `" 2.md"` twins were on disk when the codebase was surveyed at ~13:05
and were **gone by 13:15** — Desktop sync removed them itself. Verified: `find src/content -name
"* [0-9].md"` returns nothing, and `src/content/articles/` holds 67 `.md` files with no twins.

What *did* remain was the stale build output from the last build, which still carried five clone
directories:

```
dist/blog/mejor-academia-ingles-chamartin 2      dist/blog/mejores-academias-ingles-chamartin 2
dist/blog/mejor-academia-ingles-tetuan 2         dist/blog/mejores-academias-ingles-plaza-castilla 2
dist/blog/mejores-academias-ingles-tetuan 2
```

These are removed by the `rm -rf dist` that already precedes the rebuild in Step 7, and they will
not regenerate because `getStaticPaths` derives slugs from filenames and the source files are gone.

⚠️ **This is not a permanent fix.** Desktop sync created these twins once and can do it again at any
time; the source files also remain untracked in git. Step 7 therefore asserts "no `… 2/`
directories in `dist/`" as a hard gate rather than assuming the problem is behind us.

Revert this step: nothing to revert — no files were changed.

## Step 3 — Re-scrape the five rivals  ✅

Scraped via the self-hosted Firecrawl VPS (`http://firecrawl-vps:3002`, read from the **skill's own**
`.env`), into `runs/mejores-academias-ingles-tetuan-listicle/sources-2026-08-08/`. The Aug 7 scrapes
were left in place so the two sets could be diffed. Script:
`scratchpad/rescrape.mjs` — it refuses to run if `FIRECRAWL_API_URL` is absent or is not the VPS,
and asserts ≥500 chars of markdown per page rather than trusting HTTP 200.

**5/5 returned non-empty markdown:**

| Domain | New chars | Aug 7 chars |
|---|---|---|
| inglesmadrid.es | 6,195 | 5,305 |
| englishconnection.es | 10,208 | 9,456 |
| skippinandkids.com | 4,533 | 4,072 |
| whatsup.es | 10,610 | 10,407 |
| kidsandus.es | 7,092 | 9,906 |

Fact sheet written to `runs/.../facts-2026-08-08.md` — that is what the rewrite is written from.

### The central claim survives
**No rival publishes a numeric price.** All five searched for `€`/`EUR`/`precio`/`tarifa`/`cuota`/
`desde N`/`/mes`/`mensual`: zero euro figures. Three price-adjacent near-misses, none with a number
(EC's university discounts, What's Up!'s `tarifa plana` model, Kids&Us's enrolment window). So
"solo una de las seis publica una tarifa" holds.

### What the re-scrape actually caught
1. **An unsourced claim in the published article.** It states What's Up! *"admite alumnos a partir de
   los 12 años"*. That phrasing is in **neither** scrape — it was an inference. The new scrape
   publishes **`Teens (12–17)`**, which sources the age band properly. Fixed by attribution, not by
   deletion.
2. **English Connection now publishes opening hours** (Lun/Mie/Vie 10:00–13:00 y 16:00–21:00,
   Mar/Jue 16:00–21:00). A new verifiable fact, and it fills the "hours" cell for one more rival.
3. **What's Up! added 100% online en directo** and split its adult offer into generales /
   conversación / talleres / intensivo.
4. **Skippin and Kids added on-site company training.**
5. **Yes! La Academia still makes no exam-prep claim at all** — so "no indicado" is the honest cell,
   not an omission on our side.
6. English Connection's address (Francos Rodriguez 59), max-group-of-10, 90% Cambridge pass claim,
   +2000 alumnos and 125/23 centre counts are all **unchanged** from Aug 7.

### Transport ruling applied
`components/LocationsSection.tsx:22-25` records the 2026-08-08 audit: the 147 runs
Callao–Barrio del Pilar along the Castellana, with **no stop on Bravo Murillo or in Valdeacederas**,
and the EMT timetable puts Ginzo de Limia–Plaza de Castilla alone at 12 minutes. So the rewrite says
the 147 serves Tetuán's **Castellana edge** (Santiago Bernabéu, Cuzco, Plaza de Castilla) and names
no duration. Readers on the Bravo Murillo side get told the metro route instead.

Revert this step: `rm -rf runs/.../sources-2026-08-08 runs/.../facts-2026-08-08.md` — the Aug 7
evidence was never touched.

## Step 4 — Rewrite `article.md`  ⏳

## Step 5 — Assemble + publish  ⏳

## Step 6 — Fix the blog table CSS  ⏳

## Step 7 — Build + verify  ⏳
