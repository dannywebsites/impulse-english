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

## Step 4 — Rewrite `article.md`  ✅

Rewritten in-session from `facts-2026-08-08.md` (subscription, no metered API). 2,514 words.

**Both gates clean: `checkListicle` 0 errors / 0 warnings, `validateArticle` 0 errors / 0 warnings.**
Entry lengths 85 / 90 / 83 / 85 / 70 / 79 words, all inside the 40–90 extraction band. Verdict 59
words (cap 80). 12 internal links, each URL once. `node scripts/test-listicle.js` → all 17 cases pass.

What changed, against the four GEO gaps:

1. **Ranking list and table no longer restate each other.** The `de un vistazo` list now carries the
   *reason for the position*, one distinguishing fact per centre; the table carries *only comparable
   data*. The two previously overlapped ~60%, spending the table's extraction value on prose.
2. **Added a sixth column, `Exámenes oficiales`, plus a `<caption>`.** The column closes the uneven
   coverage gap directly: Cambridge preparation is now answered for all six centres (three say yes,
   three do not mention it) instead of appearing in three entries and missing from the other three.
   The caption states source and date.
3. **First column is `<th scope="row">`**, the machine-readable form for a row label, and now styled.
4. **FAQ re-aimed at this query's fan-out.** Was 6 questions with 4 generic; now 8, of which 4 are
   query-specific: cost in Tetuán, which centres prepare Cambridge, which publishes the smallest
   groups, how to get there. Dropped `¿Es posible aprender inglés en 2 meses?` and `¿Qué es wats up?`.
   **Recovered `¿Cuánto cuesta What's Up?`** — a real PAA on this SERP that the first draft dropped
   despite it being the most on-topic price question available.

⚠️ **The PAA-ratio "gate" does not exist.** `write-context.md:14` claims "The gate fails the article
below that ratio" for the half-verbatim-PAA rule. `validate.js:79-87` enforces only the FAQ *heading*
text; there is no ratio check anywhere. The instruction was honoured regardless (4 of 8 verbatim), but
the claim is false, and it is the same shape as the three verifiers that were passing by not looking.

Two published facts corrected:

- **Adult group size.** The old text said "un máximo de 10 en adultos". The brand's own value props
  are 7 infantil / 10 primaria y secundaria / **8 adultos**. Now stated per stage.
- **What's Up! minimum age.** "Admite alumnos a partir de los 12 años" was sourced from nothing. Now
  `De 12 a 17 años y adultos`, from the `Teens (12–17)` band they publish.

Revert this step: `cp article.before.md article.md` in the run dir, then re-assemble.

## Step 5 — Assemble + publish  ✅

```
node scripts/assemble.js --run runs/mejores-academias-ingles-tetuan-listicle \
  --slug mejores-academias-ingles-tetuan
```

`validation.json` → `{"format":"listicle","errors":[],"warnings":[],"wordCount":2514}`.

The slug pin is visible doing its job in the log: `runMeta()` generated
`"Mejores academias de inglés en Tetuán: Encuentra la tuya"` and it was **discarded** for the pinned
title, description and slug. Without the pin the URL would have moved to a `-2` variant.

Front-matter verified before copying: `url: /blog/mejores-academias-ingles-tetuan/` ·
`category: Local Madrid` exact (no silent Cambridge B2 First fallback) · `listItems` 6, non-empty so
`fullTitle` still fires · `googleReviews` 5 · `articleImages` 3, on the `.min(3)` floor · `faqItems` 8
· dates `2026-08-08`.

`contextSections` = 11, unchanged, so the index-coupled template slots landed as intended: inline
image 1 after `Comparativa` (the Cambridge certificate, backing the new column), inline image 2 after
entry 2, `<GoogleReviews>` after entry 6. The mid-article `<CTABand>` still lands at index 5, inside
the ranking after entry 4 — the known template limitation, out of scope and unchanged.

Copied to `src/content/articles/mejores-academias-ingles-tetuan.md` (32,730 → 35,853 bytes).

### ⚠️ Open: the five reviews are not in the allocation ledger
`Paloma aranda · Begoña Carnicero · Daniel de la Peña de Alaiz · Laura · Joaquín` are quoted here and
appear in **no** row of `review-allocation.md`. They were deliberately not added:

- that file's header says *"Do not edit by hand: re-run `pull_reviews.py && build_pool.py &&
  allocate.py`"*, so a hand-added row would be wiped by the next generator run;
- `allocate.py:30-56` models `.tsx` page files only. It has **no concept of a content-collection blog
  article**, and re-running it would allocate five reviews of its own choosing rather than adopt the
  five already quoted.

Consequence: the listicle gate blocks an author only once they are *in* the ledger, so nothing stops a
later article in the 42+27 batch quoting one of these five a second time. Needs a decision — teach
`allocate.py` about collection articles, or accept hand-maintained rows for CMS blog pages.

Revert this step: `cp collection.before.md` over the collection file.

## Step 6 — Fix the blog table CSS  ✅ (done out of order, before the rewrite)

Moved ahead of the rewrite so the table markup could be written against known rendering.

### ⚠️ Most of this was already implemented in the working tree, by someone else
On opening `src/index.css` the planned edit failed: the file had changed since it was read. Both
`src/index.css` and `components/PAAArticlePage.tsx` were already **modified and uncommitted**, with a
more complete fix than the CSS-only route this plan had chosen:

- `wrapTables()` (`PAAArticlePage.tsx:68-70`) wraps every `<table>` in `<div class="table-scroll">`
  before injection — the wrapper the writer is barred from emitting. Applied to **all** articles, not
  just listicles; 45 of them contain a table.
- `.article-prose .table-scroll` → `-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0`, so the scroll area
  bleeds to the screen edge on a phone and a cut-off column reads as scrollable rather than broken.
- `.table-scroll > table` → `min-w-[36rem]`, so columns scroll instead of crushing.
- **`.measure` was moved off the prose wrapper** onto `> p, ul, ol, h3, h4, blockquote`. That is the
  fix for the desktop half of the problem, which this plan had judged unreachable from CSS alone: the
  table is now free to use the full `.container-narrow` column instead of being capped at 68ch.

That work is better than what was planned and was left intact. Nothing was reverted or rewritten.

### What this step actually added, on top
Three gaps that remained, all needed by the rewritten table:

1. `.article-prose caption` — there was **no caption rule at all**, so a `<caption>` rendered as a
   centred body-sized paragraph. Now left-aligned 12px uppercase micro-caps in zinc-500.
2. `.article-prose tbody th` — only `tbody td` was styled, so `<th scope="row">` (the correct markup
   for the academy-name column, and the more machine-readable one) rendered as centred
   default-weight text. Now left-aligned, semibold, zinc-900, sharing td's borders.
3. `tbody tr:hover` — row tracking across 6 rows × 5 columns, using the `accent-blue-50` token that
   `tailwind.config.ts:6-10` says exists precisely so hovers stop reaching for stock Tailwind.

Verified by compiling: `npx tailwindcss -i src/index.css -o /tmp/tw-check.css` emits all three rules
(`caption` → `text-align:left; font-size:.75rem`, `tbody th` → `font-weight:600`, hover →
`rgb(241 246 251 / 0.7)`).

Revert this step: `git revert` the commit below; the pre-existing `wrapTables` work is in the same
commit, so a revert removes that too — restore it from `git show <sha>` if only my three rules are
unwanted.

## Step 7 — Build + verify  ✅

`rm -rf dist && npm run build` → **185 pages, green.**

| Gate | Result |
|---|---|
| `npm run verify:design` | **ALL PASS** — no structural errors across 27 page components; token debt **793, baseline 793** (unchanged, so `PAAArticlePage`'s zero allowance held) |
| `npm run verify:links` | **ALL PASS** — 54 articles, 355 refs requested, 355 rendered |
| `node scripts/test-listicle.js` | all 17 cases pass |

### Assertions against `dist/`, not source

1. `dist/blog/mejores-academias-ingles-tetuan/index.html` exists; **0 `… 2/` clone directories**
   (previous build had 5).
2. `<title>` = `Las 6 mejores academias de inglés en Tetuán (2026)` — 50 chars, **no "La Vaguada"
   chain**, so `listItems` survived and the `fullTitle` branch fired.
3. Exactly **1** `<table>`, with `<caption>`, `<thead>`, 12 `scope` attributes, wrapped in
   `.table-scroll`.
4. ItemList JSON-LD: 6 `ListItem`s, positions 1–6, `numberOfItems: 6`, names matching the visible
   ranking.
5. FAQPage JSON-LD: 8 questions, and **neither dropped question is still present**.
6. 5 review cards, with `fill-amber-400` stars and the `#4285F4` Google mark.
7. 6 numbered `<h2>`s, `Exámenes oficiales` column present, 14 honest `No indicado` cells.

### The measurement `verify:design` cannot make
Rendered `dist/` in real Chrome at both breakpoints (`scratchpad/check-table.mjs`, screenshots
alongside):

| | 390 × 844 | 1440 × 900 |
|---|---|---|
| page `scrollWidth` vs `clientWidth` | 390 vs 390 → **0px overflow** | 1440 vs 1440 → **0px overflow** |
| `.table-scroll` | present, `overflow-x: auto` | present, `overflow-x: auto` |
| scrolls inside its own box | **yes** (374 client / 608 scroll) | no (832 / 832, no need) |
| table width | 576px (the `min-w-[36rem]` floor) | **832px = exactly its heading width** |
| header cell heights | all 44px — **nothing wrapping** | all 44px |

Before this work the same page dragged the body sideways at 390px and capped the table at ~635px on
desktop, narrower than its own heading. Both are now measured fixed, not assumed.

---

## ⚠️ Concurrent session hazard — read before continuing this branch

A second session was committing to this repo throughout, doing the 2026-08-08 fact-audit work
(`b039340`, `7b4890d`, `20e81fb`). Observed twice:

1. `src/index.css` **changed under an open read**, which is how the better `wrapTables` implementation
   was discovered instead of being overwritten.
2. The checkout **moved off this branch to `feat/aprende-ingles-video-cluster` mid-task and back
   again**, so `git log` briefly showed none of this work and the ledger file vanished from disk.

State at the time of writing: this branch (`content/tetuan-listicle-geo-rewrite`) holds the work, and
`feat/aprende-ingles-video-cluster` **also** contains the table fix at its HEAD. Those two will need
reconciling at merge time; the content is identical, so it should resolve cleanly, but check rather
than assume.
