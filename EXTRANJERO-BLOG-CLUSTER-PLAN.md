# Plan — Blog cluster for the "inglés en el extranjero" pillar

> ## ▶ RESUME HERE — paused 2026-08-06 for a Claude Code update
>
> **State: the pipeline is built and proven. Nothing has been written yet.**
>
> **First three things to do on resume**
> 1. **Check for a parallel session before touching anything.** `git log --oneline -10` on
>    `seo/extranjero-hub` and `ls GEO-Content-Project/`. Two sessions already collided on
>    2026-08-06 and duplicated the photo work end to end. If someone else is mid-batch, split the
>    article list — do not both start at #1.
> 2. **Ask Danny what the 6.750 € covers** — which programme, which duration, what is included.
>    He authorised publishing "desde 6.750 €" as Impulse's own price; he has not yet said what it
>    buys. Until then it ships as `[PENDIENTE: confirmar qué incluye]`. Do not invent it.
> 3. Then start writing at **§6 article #1** (`becas para estudiar bachillerato en el extranjero`,
>    210/mo, peaking Aug 320 → Sep 480 — the most time-sensitive item in the batch).
>
> **What is already done and must not be redone**
> - Brand config wired and corrected (§2 B1, B3) — pillar URLs in the link graph, retired facts
>   replaced, `/reservar-clase` 308 removed from CTAs.
> - Photos shipped by the other session (§2 B4) — `viaje-01..34.webp`. **Do not re-convert them.**
> - The `impulse-astro` converter and the image rotation are written and build-verified (§12).
>
> **Files that hold this work** (the skill lives outside the site repo):
> ```
> <repo>/EXTRANJERO-BLOG-CLUSTER-PLAN.md            ← this file
> <repo>/GEO-Content-Project/extranjero-blog-briefs.md  ← the other session's 30 briefs
> ~/.claude/skills/seo-blog-writer/scripts/lib/cms-impulse-astro.js   ← the converter
> ~/.claude/skills/seo-blog-writer/scripts/lib/frontmatter.js         ← cmsProfile dispatch
> ~/.claude/skills/seo-blog-writer/scripts/lib/firecrawl.js           ← scraper (Apify = fallback)
> ~/.claude/skills/seo-blog-writer/scripts/rotate-images.js           ← per-article images
> ~/.claude/skills/seo-blog-writer/brands/impulse-english.brand.json  ← + .bak-20260806
> ```
>
> **Per-article command sequence** (the rotation step is easy to forget and silently ruins a batch):
> ```bash
> cd ~/.claude/skills/seo-blog-writer
> node scripts/prewrite.js --brand brands/impulse-english.brand.json \
>   --topic "<title>" --keywords "<kw>" --category "Inglés en el extranjero"
> node scripts/rotate-images.js --run runs/<id> --index <n> --pool ireland|academy
> #   ↑ MUST run between prewrite and writing. --pool ireland ONLY for Ireland articles.
> # write runs/<id>/article.md in-session — 4+ "## " sections, FAQ, answer in first 80 words
> node scripts/assemble.js --run runs/<id>
> ```
>
> **Two hard rules learned from the build gate — see §12:**
> - **4+ `##` sections per article**, or the second inline image never renders while the schema
>   and the build both stay green.
> - All 34 photos are **Ireland**. Non-Ireland articles use `--pool academy`.
>
> **Also worth telling Danny:** `~/.claude/skills` is a git repo with **no `.gitignore`**, and the
> entire `seo-blog-writer/` skill is still **untracked** — nothing in it has ever been committed.
> A careless `git add seo-blog-writer/` would stage **3.102 paths**, of which 3.003 are
> `scripts/node_modules` and 90 are `runs/`.
>
> **Correction (verified 2026-08-06 with `git add --dry-run` + `git check-ignore`):** an earlier
> version of this note claimed that would also stage `seo-blog-writer/.env` with its live API keys.
> **It would not** — `~/.gitignore_global:1` ignores `.env` globally, and the dry run confirms the
> file is absent from the staged set. The real problem is the node_modules bulk, not a key leak.
> Still worth a `.gitignore` (`node_modules/`, `runs/`) before anyone commits that skill.


**Date:** 2026-08-06 · **Branch:** `seo/extranjero-hub` (not pushed/merged)
**Skill:** `seo-blog-writer` (correct per the page-type rule: blog articles never go through `geo-pages`)
**Scope:** 1 blog hub + **22 articles published together at launch** + 18 follow-on = **41 pieces**

---

## 1. What already exists (audited, not assumed)

### The pillar (4 pages, built, unmerged)

| URL | Component | Owns these terms — **the blog must not target them** |
|---|---|---|
| `/ingles-en-el-extranjero/` | `ExtranjeroHubPage.tsx` | estudiar inglés en el extranjero · cursos de inglés en el extranjero · año escolar en el extranjero |
| `/ingles-en-el-extranjero/irlanda/` | `IrlandaPage.tsx` | curso de inglés en irlanda 260 · estudiar inglés en irlanda 260 · estudiar en irlanda 210 · **colegios en irlanda 170** · **internado en irlanda 170** |
| `/ingles-en-el-extranjero/irlanda/ano-escolar/` | `AnoEscolarIrlandaPage.tsx` | **año escolar en irlanda 480** · curso escolar en irlanda · estudiar 4 ESO en irlanda 110 · año escolar en irlanda precios 90 · estudiar bachillerato en irlanda 90 |
| `/ingles-en-el-extranjero/canada/` | `CanadaPage.tsx` | año escolar en canadá · estudiar en canadá · curso escolar en canadá |

Malta and Estados Unidos are live *offers* with **no page** — the hub renders them as link-less
cards on purpose. Navbar and Footer already link the cluster.

**This table is the cannibalisation guard.** Ireland's boarding-school and school-list terms
(`internado en irlanda`, `colegios en irlanda`, both 170/mo) are already claimed by `IrlandaPage`.
A blog article on either would fight our own page. England's equivalents are free — hence the split
below.

### The blog

- **72 static `.astro` pages** + **37 markdown files** in `src/content/articles/`.
- Static routes **shadow** the collection route. None of the 41 slugs below collide.
- `data/blog-directory.ts` is **auto-generated** by `scripts/seo/gen_blog_directory.py`. It drives
  `/blog/`, `/blog/todos/` and the sibling rings. Regenerate after the batch or the articles exist
  but are unreachable from the blog index.
- **Existing extranjero coverage: zero** across all 109 articles. Greenfield.

---

## 2. Five blockers to clear *before* writing

Each one silently wrecks the output if skipped.

### B1 — The brand config cannot link to the pillar
`~/.claude/skills/seo-blog-writer/brands/impulse-english.brand.json` builds internal links from a
37-URL `sitemap.pages` list. **Not one extranjero URL is in it.** Twenty-two spokes that never link
to the thing they exist to feed.

**Fix:** add the 4 pillar URLs, plus a `customLinkRules` entry:
`{ "keywords": "extranjero, año escolar, irlanda, canadá, malta, inmersión, familia de acogida, campamento de verano, internado", "url": "/ingles-en-el-extranjero/" }`

### B2 — The output format does not match the site
The skill emits **portable Markdown + generic YAML**; its own reference says *"This is intentionally
NOT the old Astro shape."* The site's collection needs `paaAnswer`, `contextSections[]` **with HTML
strings**, `impulseSection.ctaLinks`, `faqItems[]`, `breadcrumbs[]`, `articleImages[]` (min 3) — and
`src/pages/blog/[slug].astro` **never calls `entry.render()`**, so the Markdown body is dead weight.
Everything a visitor sees comes from front-matter.

**Fix:** add a `cmsProfile: "impulse-astro"` branch to `scripts/lib/frontmatter.js` (60 lines today)
converting `## heading` + body into `contextSections[{heading, content: <html>}]`, lifting the first
paragraph into `paaAnswer`, mapping the FAQ into `faqItems`. **Build this first.** Hand-assembling
22 articles at once is where a same-day launch dies.

### B3 — The brand config carries retired facts
Still says *"100% de aprobados"* and *"Más de 500 alumnos"*. Approved figures are **1.000+ alumnos
desde 2023** and **100 aprobados de Cambridge with the cohort size unknown** — never invent a
denominator. `customLinkRules` points at `/reservar-clase`, which `vercel.json:40` **308-redirects**
to `/prueba-de-nivel-ingles/`, so every article would ship a redirect hop in its main CTA.

### B4 — ✅ RESOLVED. The Ireland photos already shipped
Danny confirmed ownership and family consent on 2026-08-06. A parallel session had already converted
them: **34 WebP at `public/images/extranjero/viaje-01..34.webp`** (commit `2f62d81`), registry at
`src/data/extranjeroImages.ts`, consent record at `src/data/EXTRANJERO-PHOTO-CONSENT.md`
(deliberately outside `public/`, because everything in `public/` ships to `dist/`). EXIF and GPS are
stripped by the re-encode.

I duplicated this before spotting it and deleted my copies. **Blog articles draw from
`extranjeroImages.ts`.** Consent is scoped to the study-abroad section; Danny extended it to these
blog articles verbally — do not reuse the photos elsewhere without re-checking.

⚠️ These are all **Ireland**. Articles about Inglaterra, Escocia, Malta, Canadá and EE. UU. must not
illustrate themselves with an Irish photo captioned as somewhere else. Those articles use the
academy set or run image-light — never a mislabelled photo.

### B5 — One existing article argues the opposite case
`/blog/mejorar-speaking-ingles-sin-extranjero/` argues *"you don't need to go abroad."* Not wrong,
and I wouldn't delete it — but alongside 41 articles selling the opposite it needs one bridging
paragraph and a link into the pillar.

---

## 3. Keyword data — pulled live this session (DataForSEO, Spain, `es`)

**Correction to my first pass.** I seeded only Ireland, Canada, Malta and bare "inmersión
lingüística", concluded the cluster was thin, and was wrong. Once you go destination-qualified and
add England, Scotland and the US, it is roughly **three times bigger** than I first reported. The
numbers below replace my earlier "12 articles' worth" figure.

### Free space — not owned by any pillar page

| Keyword | Vol/mo | Seasonality | Article |
|---|---|---|---|
| becas para estudiar bachillerato en el extranjero | **210** | **Sep 480 · Oct 390 · Aug 320** | #1 |
| trabajar y estudiar en irlanda | **210** | Sep 390 | #3 |
| curso de inglés en malta | **210** | summer cycle | #4 |
| internado en inglaterra | **170** | Sep 260 | #5 |
| año escolar en estados unidos | **140** | Sep 260 · Mar 210 | #6 |
| campamentos de verano en irlanda | **140** | Jan 210 · Sep 210 | #7 |
| campamentos de verano en inglaterra | **140** | Mar 260 | #8 |
| becas de inmersión lingüística (cluster) | **~600 combinado** | Sep/Oct | #2 |
| estudiar en inglaterra | 70 | **Sep 320** | #9 |
| au pair en irlanda | 70 | steady | #10 |
| cursos de inglés en el extranjero para adultos | 70 | Mar 110 | #11 |
| año escolar en inglaterra | 50 | Mar 90 · Jul 90 | #12 |
| transition year irlanda | 50 | **Sep 170** | #13 |
| estudiar bachillerato en inglaterra | 20 | Mar 70 | #14 |
| estudiar un trimestre en el extranjero | 20 | Sep 50 | #15 |
| ventajas de estudiar en el extranjero | 20 | Sep 30 | #16 |
| familia de acogida **en irlanda** | 10 | flat | #17 |
| familia de acogida **en inglaterra** | 10 | flat | #18 |
| estudiar en escocia / año escolar en escocia | 10 + 10 | flat | #19 |
| intercambio escolar en el extranjero | 10 | flat | #20 |

**20–50/mo is the working band and that is fine** — it is a long-tail cluster and you've said so.
The point of the table is that every launch article now has a real query behind it, not a guess.

### Two phrasing rules the data enforces

1. **"inmersión lingüística" bare (1.600/mo) is Ministerio de Educación / UIMP scholarships** —
   `becas de inmersión lingüística 2026` 210, `programas de inmersión lingüística` 170,
   `inmersión lingüística ministerio de educación 2026` 110. So we write it as **#2, the comparison**:
   becas del Ministerio vs a private programme. That captures the traffic honestly instead of
   pretending to be a government scheme.
2. **"familia de acogida" bare (880/mo) is Spanish foster care** — plus a TV series at 590. The
   destination-qualified versions exist at 10/mo each and are the correct targets (#17, #18), which
   is exactly the point you made.

### Two open items

- **Canadá discrepancy:** `CanadaPage.tsx` records "año escolar en canadá = 140" from a Google Ads
  pull on 2026-08-05; DataForSEO Labs returned **20** today. 7× apart, one day apart. Doesn't change
  the plan; should be checked before any ad spend.
- `convalidar 4 eso en el extranjero`, `seguro médico estudiar en el extranjero`,
  `qué llevar a un año escolar`, `visado para estudiar en canadá` returned **no measurable volume**.
  They stay in batch 2 as objection-handling and AI-citation assets, not traffic plays.

---

## 4. Writing rule for England and Scotland

Six launch articles cover Inglaterra and Escocia. **Impulse organises Irlanda, Malta, Canadá and
EE. UU. — not England or Scotland.** These articles are written as honest informational guides that
compare the options and route the reader to what we actually run. No article may imply we sell an
England or Scotland programme. Same discipline as the hub's link-less Malta and US cards: never
promise a thing that isn't there.

---

## 5. The blog hub

**Do not** point it at "estudiar inglés en el extranjero" — the pillar owns that and the two would
cannibalise. The hub is the informational front door that funnels to the commercial pillar.

- **URL:** `/blog/ano-escolar-extranjero-guia-padres/`
- **H1:** Año escolar y cursos de inglés en el extranjero: la guía para padres
- **Job:** links **up** to `/ingles-en-el-extranjero/` for anyone ready to enquire; links **down**
  to all 40 spokes, grouped by cluster. Every spoke links back to the hub and to exactly one pillar page.

---

## 5b. Reconciliation with `GEO-Content-Project/extranjero-blog-briefs.md`

A parallel session shipped **30 article briefs** (commit `be46fd4`) and **34 Ireland photos**
(`2f62d81`, as `viaje-01..34.webp` with a consent record at `src/data/EXTRANJERO-PHOTO-CONSENT.md`
and a wired registry at `src/data/extranjeroImages.ts`) while this plan was being written. Branch is
now **PR #15, pushed, 17 commits, unmerged.**

I duplicated the image work and threw my copies away — the committed set is lighter (median 146 KB
vs my 159 KB) and properly integrated. **Use `src/data/extranjeroImages.ts` as the blog image
source.** Its own note scopes consent to the study-abroad section; Danny extended that to these blog
articles verbally on 2026-08-06.

**The two documents are complementary, not competing.**

What the briefs have that this plan didn't:
- **Live SERP evidence** — competitors publish prices on page one (6.750 € to 32.000 €), Impulse
  publishes none. The briefs call a "what actually drives the price" article the single
  highest-value decision available. **Needs Danny's sign-off** to publish market ranges.
- **AI Overviews render at rank 1** on `año escolar en irlanda`, `año escolar en canadá` and
  `trabajar en irlanda` → every article must answer its title question extractably in the
  **first 80 words**.
- **`vivir en irlanda` 260 @ competition 21** — the softest term in either research set. I missed it.
- `trabajar en irlanda` 1.900/mo is **not winnable** (SERP = Ministerio de Trabajo, SEPE, InfoJobs;
  CPC €1,23 vs €12,90). Correctly downgraded to the English-gap long tail. My `trabajar y estudiar
  en irlanda` 210 is a different, longer term and survives as part of that angle.
- `mini estancia` / `viaje de estudios` confirmed **zero volume** — cover under campamentos.

What this plan has that the 30 briefs don't — **all of it free space, none of it in their set**:

| Missing from the briefs | Vol/mo |
|---|---|
| becas para estudiar bachillerato en el extranjero | **210** (Sep 480 · Aug 320) |
| curso de inglés en malta — Malta has no page at all | **210** |
| internado en inglaterra | **170** |
| campamentos de verano en inglaterra | **140** |
| año escolar en estados unidos | **140** |
| becas de inmersión lingüística (cluster) | **~600 combinado** |
| estudiar en inglaterra | 70 (Sep 320) |
| au pair en irlanda | 70 |
| año escolar en inglaterra · estudiar bachillerato en inglaterra · estudiar en escocia · familia de acogida en inglaterra | 50 · 20 · 10 · 10 |

The briefs cover Irlanda and Canadá only. **England, Scotland, the US, Malta and the whole becas
cluster are absent** — roughly 1.100/mo of unclaimed space, and exactly the breadth Danny asked for.

**Voice note from the briefs, adopted here: `tú`, not `vosotros`** (vosotros only for genuine plural).

---

## 6. Launch batch — 22 articles, published together (merged)

Best of both documents. `B##` = brief number in `extranjero-blog-briefs.md`; **NEW** = only in this
plan. Everything here goes live in one push.

| # | Article | Target kw | Vol | Src | → links to |
|---|---|---|---|---|---|
| 1 | Becas para estudiar bachillerato en el extranjero: cuáles existen de verdad | becas para estudiar bachillerato en el extranjero | **210** Sep 480 · Aug 320 | **NEW** | hub |
| 2 | Vivir en Irlanda: coste real, vivienda y lo que nadie te cuenta | vivir en irlanda (comp **21**) | **260** | B27 | hub |
| 3 | Curso de inglés en Malta: para quién funciona y para quién no | curso de inglés en malta | **210** | **NEW** | hub |
| 4 | Becas de inmersión lingüística del Ministerio vs un programa privado | becas de inmersión lingüística | **~600** | **NEW** | hub |
| 5 | Campamento de verano en Irlanda: qué incluye y para qué edades | campamento de verano en irlanda | **140** | B21 | Irlanda |
| 6 | Internados en Inglaterra: cómo funcionan y qué cuestan | internado en inglaterra | **170** | **NEW** | Irlanda |
| 7 | Año escolar en Estados Unidos: qué esperar de un high school | año escolar en estados unidos | **140** | **NEW** | hub |
| 8 | Campamentos de verano en Inglaterra: qué los diferencia | campamentos de verano en inglaterra | **140** | **NEW** | hub |
| 9 | Trabajar en Irlanda sin inglés: qué puestos, qué techo y qué hacer | trabajo en irlanda para españoles sin inglés | English-gap | B24 | hub |
| 10 | Cuándo empieza y cuándo acaba el año escolar en Irlanda | PAA + calendario escolar Irlanda | AI-Ov | B1 | año escolar |
| 11 | Qué es el Transition Year y por qué encaja con 4º de la ESO | transition year irlanda | **50** Sep 170 | B2 | año escolar |
| 12 | Estudiar 4º de la ESO en Irlanda: la guía para padres | año escolar en irlanda 4 ESO | 110 | B3 | año escolar |
| 13 | Estudiar en Inglaterra: las opciones reales para un adolescente | estudiar en inglaterra | 70 Sep 320 | **NEW** | hub |
| 14 | Au pair en Irlanda: qué es, qué se cobra y qué se aprende | au pair en irlanda | 70 | **NEW** | Irlanda |
| 15 | Cursos de inglés en Irlanda para adultos: cómo funcionan de verdad | cursos de inglés en irlanda para adultos (CPC €7,05) | 50 | B17 | hub |
| 16 | Año escolar en Inglaterra: cómo se compara con Irlanda | año escolar en inglaterra | 50 | **NEW** | año escolar |
| 17 | Vacaciones escolares en Irlanda: el calendario completo | PAA | AI-Ov | B7 | año escolar |
| 18 | Trimestre en Irlanda: a quién le encaja media medida | trimestre en irlanda · curso escolar en irlanda | 70/210 | B5 | año escolar |
| 19 | Cómo se elige la familia de acogida (y qué preguntar antes de decir que sí) | familia de acogida **en irlanda** | 10 + trust | B8 | Irlanda |
| 20 | Convalidar el curso irlandés en España: cómo funciona de verdad | — | objection | B6 | año escolar |
| 21 | Academia o agencia: quién responde cuando algo va mal a 2.000 km | — | differentiator | B28 | hub |
| 22 | El sistema educativo irlandés explicado para familias españolas | PAA | AI-Ov | B10 | año escolar |

**Roughly 1.800/mo of measured demand, plus four AI-Overview/PAA plays.** Ten come from the briefs,
nine are new here, three are shared. #20 matters beyond its traffic: "convalidable en España" was
pulled from the pages last week as an unverified guarantee, and this is where it gets explained
honestly — tone must match the corrected page copy.

**Hub + 22 = 23 pieces live at launch.**

---

## 7. Follow-on queue

**From the briefs:** B4 *cuánto cuesta un año escolar en Irlanda* (**pending Danny's sign-off on
publishing market ranges — highest-value single decision in either document**) · B9 Bachillerato en
Irlanda · B11–B16 the whole Canadá cluster, **published Jan–Mar for the March peak** · B18 inmersión
para profesionales · B19 cuántas semanas para notar el salto · B20 inglés de negocios · B22 la
primera vez que se va solo · B23 curso de verano Irlanda vs campamento en España (**spring**) ·
B25 qué nivel piden para trabajar en Irlanda · B26 trabajar en verano (**Feb–Abr**) · B29 qué
preguntar a una agencia · B30 qué cambia de verdad en el inglés.

**From this plan:** Estudiar en Escocia · Estudiar Bachillerato en Inglaterra · Familia de acogida
en Inglaterra o Irlanda · Estudiar un trimestre en el extranjero · Ventajas y desventajas ·
Intercambio escolar · Cursos de inglés en el extranjero para adultos (destination-agnostic, 70) ·
¿A qué edad conviene irse? · the logistics set (documentación · seguro médico · visado Canadá ·
maleta · móvil y contacto) · the emotional set (morriña · acompañar sin invadir · quiere volverse ·
la vuelta a casa).

**One to queue deliberately:** *Volver con el B2 o el C1: cómo aprovechar el año para certificar* —
the bridge into the site's 100+ Cambridge articles, sending authority both ways. In neither document
until now.

Where a follow-on title overlaps a pillar-owned term, keep it **generic, not Ireland-qualified** —
`AnoEscolarIrlandaPage` already owns the Irish pricing and 4º-ESO phrases.

---

## 8. Execution — 22 at once

```bash
cd ~/.claude/skills/seo-blog-writer

# 0. Blockers B1+B3: edit brands/impulse-english.brand.json
# 0. Blocker B2: add cmsProfile "impulse-astro" to scripts/lib/frontmatter.js
# 0. Blocker B4: WebP the 34 photos → public/images/extranjero/ (pending your go-ahead)

# 1. Prove the pipeline on ONE article end-to-end before batching
node scripts/prewrite.js --brand brands/impulse-english.brand.json \
  --topic "Becas para estudiar bachillerato en el extranjero" \
  --keywords "becas para estudiar bachillerato en el extranjero" \
  --category "Inglés en el extranjero"
#    → write runs/<id>/article.md in-session → node scripts/assemble.js --run runs/<id>
#    → convert, drop in src/content/articles/, build, eyeball the rendered page

# 2. Then batch the remaining 21 + hub
node scripts/prewrite.js --brand brands/impulse-english.brand.json --batch topics.json
#    → write each runs/<id>/article.md in-session
node scripts/assemble.js --all

# 3. Register and build
cd "March-Impulse-Web-.../" && python3 scripts/seo/gen_blog_directory.py && npm run build
```

⚠️ **Scraping moved from Apify to Firecrawl on 2026-08-06** — Apify's separate `dannyaiagents2@`
account hit its cap on 5 August. `scripts/lib/firecrawl.js` now backs the `web_scrape` tool and
falls back to `apify.js` only when Firecrawl exhausts its retries, logging
`[research] firecrawl failed → apify fallback` so the switch is never silent.

Measured on article #1: **8 SERP searches + 6 scrapes = 6 Firecrawl credits.** Budget ~140 credits
for the 23 pieces. Stage A resumes safely — research is skipped when `brief.md` already exists.

**Correction to an earlier version of this plan:** it said to *"start with a small `resultsLimit`"*.
No such parameter exists in this code path — `apify.js:27` hardcodes `maxCrawlPages: 1`, and the
Firecrawl CLI scrapes one page per call. That advice was carried over from the old
`<repo>/seo-writer/` app, which is dead code. The real levers are **`researchDepth`** in the brand
config (`standard` = 3-5 scrapes, `light` = 2-3) and **pre-seeding `runs/<id>/brief.md`**, which
skips Stage A research entirely (`prewrite.js:155`).

⚠️ Writing 23 articles in-session is the token-heavy part. Expect to run it across a few sessions
even though they publish together; each run directory is independent and re-runnable.

---

## 9. Gates — none of these pass by not looking

| Gate | Check |
|---|---|
| Build | `npm run build` green, and each new slug present in `dist/blog/<slug>/index.html` |
| Design | `npm run verify:design` — errors fail; token debt must not grow |
| Titles | verify from **`dist/`**, not the `.astro` prop — BaseLayout hard-truncates at 70 chars |
| Directory | `gen_blog_directory.py` re-run; **entry count moved by 23**, not just "0 FAIL" |
| Images | ≥3 per article, hero + 2 inline, Spanish alt, real photos only |
| Language | Peninsular Spanish, vosotros; no LatAm variants |
| Facts | Approved figures only — no invented Cambridge denominator, no "100% de aprobados" |
| Offer honesty | No England/Scotland article implies we sell that programme (§4) |
| Cannibalisation | No article targets a term in the §1 ownership table |
| Links | Every spoke → hub + exactly one pillar page; CTA → `/prueba-de-nivel-ingles/`, no 308 hop |

---

## 10. Ledger

Work on `seo/extranjero-hub`. One commit per step, ledger line written **as each step completes**.
Never `git add <dir>` — untracked `.bak-*` twins sit beside sources, and explicit staging silently
omits *new* files, which breaks the Vercel build while the local build stays green. Stage explicit
paths **and** verify new files are included.

Log the targeting decisions in `seo references and book/SEO-Decisions-Log.md`: the anti-cannibalisation
call (§1, §5), the inmersión-as-comparison reframe (§3), and the England/Scotland offer-honesty
rule (§4).

---

## 11. Open with you

1. **Publish market price ranges?** The briefs' highest-value finding: every competitor shows a
   price on page one (6.750 € – 32.000 €), Impulse shows none, and the range is so wide that a
   family cannot calibrate. The proposed article gives **market ranges and the variables, with
   sources, without quoting an Impulse figure** — enquiry-only stays intact. Needs your yes/no.
2. **Canadá volume discrepancy** (140 vs 20) — worth checking before it informs anything paid.

Resolved: photos ✅ · brand config ✅ · launch list ✅.

---

## 12. Progress

| Step | State |
|---|---|
| B1 brand config — pillar URLs + 2 routing rules in the link graph | ✅ done |
| B3 brand config — retired facts replaced, `/reservar-clase` 308 removed from CTAs | ✅ done |
| B4 photos | ✅ done (by the parallel session; my duplicates removed) |
| Plan reconciled with the 30 briefs | ✅ done |
| B2 `cmsProfile: "impulse-astro"` converter | ✅ done — `scripts/lib/cms-impulse-astro.js`, wired via `frontmatter.js` |
| Per-article image rotation | ✅ done — `scripts/rotate-images.js` |
| Pipeline proven end-to-end against a real build | ✅ done — probe article rendered, then removed |
| Price decision | ✅ Danny 2026-08-06: **Impulse publishes "desde 6.750 €"** — inclusions still needed |
| Scraper moved Apify → Firecrawl | ✅ done — `lib/firecrawl.js`, Apify kept as logged fallback |
| **Write the 22 + hub** | 🟡 **5 of 23 written, installed and committed** |
| `gen_blog_directory.py`, build, gates | ⬜ — run once the batch is complete |

### Batch progress — 5 of 23 (2026-08-06)

| # | Article | Slug | Commit |
|---|---|---|---|
| 1 | Becas para estudiar bachillerato en el extranjero | `becas-bachillerato-extranjero-reales` | `3dd843b` |
| 4 | Becas de inmersión lingüística: Ministerio vs privado | `becas-inmersion-linguistica-ministerio` | `de7e758` |
| 2 | Vivir en Irlanda: coste real y vivienda | `vivir-en-irlanda-coste-real` | `de7e758` |
| 3 | Curso de inglés en Malta | `estudiar-ingles-malta-consejos` | `4bb3812` |
| 6 | Internados en Inglaterra | `guia-internados-inglaterra-precios` | `4bb3812` |

**Research already paid for and sitting on disk** (Stage A done, `brief.md` + rotated
`images.json` present — do NOT re-run prewrite, it would re-scrape):
`ano-escolar-en-estados-unidos-que-espera-mshlab41` (index 5, academy) ·
`campamentos-de-verano-en-inglaterra-que--mshlbth3` (index 6, academy) ·
`campamento-de-verano-en-irlanda-que-incl-mshldbg4` (index 7, ireland).

**Next image rotation index is 8.** Indices 0-7 are used; reusing one repeats another
article's photo set.

### Four defects fixed during the first batch — all would have hit every article

1. **`cmsProfile` was never set** in `impulse-english.brand.json`, so `assemble.js` emitted
   generic front-matter with no `contextSections`/`faqItems`/`articleImages` and an unquoted
   `date:`. The converter existed and was wired; the switch was simply never flipped. §12 above
   recorded it as done because the code was done.
2. **`rotate-images.js` appended instead of replacing.** `write-context.md` ended up with two
   image blocks, the stale one first, so bodies would cite brand-default academy photos while
   the front-matter cited the rotated ones.
3. **Titles.** `metaTitleMaxLength` was 60 but `utils/buildPageTitle.ts` hard-cuts the theme at
   **41**, mid-word. Set to 41, and the `+5` slack in `lib/meta.js` removed.
   ⚠️ **Pre-existing and untouched: 25 of 98 blog pages already ship mid-word titles.**
4. **Image pools.** `academyImages.ts` contains logos, duplicates and one Ireland photo
   (`dnny-tour-of-ireland.jpg`), which rotation handed to the *United States* article. Now
   filtered: no logos, no duplicates, no geography-tagged files in the academy pool.

### Two targeting conflicts inside this plan, resolved by writing around them

§6 assigns article #12 the term `año escolar en irlanda 4 ESO` and #18 `curso escolar en
irlanda`. **Both are owned by `AnoEscolarIrlandaPage` per §1**, and §9 forbids targeting them.
Write those two to the non-owned half of their term pair and link the pillar for the
commercial query.

### Gate script

`gate.sh` (session scratchpad) checks the things that fail silently: <4 `##` sections, missing
or stray images, hero leaking into the body, dashes, banned words, duplicate links, and pillar
terms in an H2. Verified in both directions — it passes known-good articles and catches
injected defects. Worth moving into the skill.

### What the build gate caught (neither was visible in review)

1. **Unquoted dates fail the schema.** YAML parses `publishedDate: 2026-08-06` as a *date*;
   `src/content/config.ts` types it `z.string()`. `astro sync` rejected it. Now forced to a
   double-quoted scalar, matching all 37 existing articles.
2. **`PAAArticlePage` places inline images only after context sections 1 and 3.** An article with
   fewer than 4 `##` sections silently drops its second inline image — while still passing the zod
   schema *and* the build, so the file promises 3 images and the page shows 2. The converter now
   warns. **Every article in the batch needs at least 4 `##` sections.**

### Price copy — blocked on one fact

Danny authorised publishing **"desde 6.750 €"** as Impulse's own starting price. I will not invent
what it covers. Until he confirms **which programme, which duration, and what is included**, that
sentence ships as a `[PENDIENTE: confirmar qué incluye]` marker — the same binding-marker convention
used for the barrio case studies. Consequence to schedule: `ExtranjeroHubPage.tsx` has a section
titled *"Por qué no verás un precio en esta página"* which now contradicts the blog and must be
rewritten in the same PR.

**Image rotation is not optional.** `buildImageManifest(brand)` is per-brand, not per-article — it
picks `hero.*` plus the alphabetically-first two, so without a rotation step all 23 articles ship the
identical three photos. The converter reassigns hero + 2 inline per article from
`extranjeroImages.ts` so no article repeats another's set.
