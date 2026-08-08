# SEO Decisions Log

Every SEO decision is logged here, grounded in [`SEO-Master-Class-Reference.md`](./SEO-Master-Class-Reference.md)
(the standing first-consult playbook). Newest first.

---

## 2026-08-08 — Google Business Profile rebuilt as the map-pack lever (book-gap territory)

Artifact: `impulse-seo-ops/gbp/GBP-PACK-2026-08.md`, gated by `gbp/verify_gbp_pack.py`.
The 2026-06-28 pack is marked SUPERSEDED (eight stale facts, listed in its banner).
Repo half committed as `be08c51` on `seo/gbp-pack-nap-consistency`.

**Scope note, stated up front:** the book has **no GBP / map-pack / NAP-citations chapter**
(`SEO-Master-Class-Reference.md:10-12`). Everything below is the external local-SEO half, paired
with the on-page work rather than derived from the book. Where the book *does* apply, it is cited.

### Decision 1 — Treat the GBP, not more on-page work, as this quarter's lever for the money terms.
**Evidence:** GSC 2026-08-05, 3,407 queries, synthetic `"mejor academia de inglés para niños en [X]"`
template stripped (82 queries, 1,044 impressions, **0 clicks**). Every high-volume commercial term
shows impressions with **zero clicks** at organic positions 20 to 65: `clases de ingles para adultos`
226 impr @ 28.1, `academia ingles madrid` 222 @ 25.9, `clases de ingles niños` 150 @ 63.6,
`academias de ingles en madrid baratas` 87 @ 22.9. All render a local pack; Impulse is absent from it.
**Why (book gap):** the book's local chapter is geo-tiered content hubs and geographic keywords, which
is already built and already ranking 1.1 to 4.6 on the barrio terms. Organic page 3 is not winnable
this quarter, so the remaining gap is the pack, which the book does not cover.

### Decision 2 — Services carry the words; Products and Posts carry the links.
GBP **Services** have no URL field and Google strips URLs from service and description text; service
descriptions cap at 300 chars, the business description at 750, service areas at 20. So the 13
services are written for keyword relevance only, mirrored into **Products** (the sole per-item surface
with a URL and button) and into **14 Posts** with CTA buttons, which is the surface that always exists
regardless of category gating. **Why (book §5, n-grams):** the service names are the n-gram variations
the money queries are built from, so they belong where Google reads them for matching.

### Decision 3 — Add an `Inglés para empresas` service now, page later.
`clases de ingles empresas` ranks **1.1** and `academias de ingles para empresas` **1.8**, with no
dedicated page. Service points at `/cursos-ingles/adultos/` as a stopgap; a real
`/ingles-para-empresas/` is flagged as the cheapest on-page win available.
**Why (book §2, one intent = one page):** B2B is a distinct intent already ranking on borrowed
relevance. It earns its own page; until it has one, the closest existing page is the honest target.

### Decision 4 — Service areas chosen by demand, not by page count. Alcobendas and Sanse stay out.
20 slots ordered by measured impressions, led by Barrio del Pilar, La Vaguada, Las Tablas (685 real
impressions, the highest of any location) and Sanchinarro (343, position 43.6). Alcobendas (70/mo) and
San Sebastián de los Reyes (90/mo) are the largest volumes on the board and are still excluded:
**no students, so no authentic local signal** (Danny, confirmed; `Location-Page-Discovery.md:147-150`).
The 20th slot is left empty on purpose.

### Decision 5 — Publish prices on the profile; keep the 100% out of the description.
Prices go in (64/83/87/94 €/mes, 29 €/hora, matrícula 45 €, libro máx 40 €) because no local
competitor states any of them, which makes `academias de ingles en madrid baratas` (87 impr, pos 22.9)
answerable with a number. The **100% pass rate is deliberately excluded from the description** and
confined to the Cambridge services and posts where the year is named: it has no published denominator,
and an unverifiable claim in the highest-visibility field is what costs citations. Never "100% de 960".

### Decision 6 — Never claim to be a Cambridge exam centre.
The June pack's Q&A said "te preparas y te examinas con nosotros". Impulse is a **Centro Oficial de
Preparación** Cambridge; the site says exactly that. The new Q&A states the official exam is sat at a
centro examinador and its fee is separate. `verify_gbp_pack.py` fails the build on the false form while
allowing the honest disclaimer.

### Decision 7 — Site and profile must stop contradicting each other (the consensus principle).
Fixed in `be08c51`: pass-rate year form normalised to `2024/25` and `2025/26` on pass-rate lines only
(45 lines, 35 files; ~51 exam-calendar uses of `2025-2026` deliberately untouched); `priceRange`
widened to `€29/hora - €99/mes`; `areaServed` gained Chamartín, Valdezarza, Arroyo del Fresno and
Sanchinarro, whose pages had been live but unregistered. **Open, Danny's call:** whether `legalName`
carries "La Vaguada". Sign, GBP, schema and directories all have to agree; `origin/main` still has
the longer form.

### Decision 8 — Shape the review ask, never the review.
Carries forward the 2026-07-30 decision unchanged: nudge questions steer reviewers toward
`academia de inglés`, the barrio, the Cambridge term, the course type, brand, metro and outcome, in
that priority. No scripting, no incentives. Target 183 to 250 at +6 to +10/month.

---

## 2026-08-07 — Blog targeting for primaria/ESO parents (30 briefs)

Artifact: `GEO-Content-Project/primaria-eso-blog-briefs.md`. All figures are live DataForSEO Labs
pulls (Spain, Spanish, 2026-08-07); zero-volume targets are labelled as such.

### Decision 1 — Reject `colegio bilingüe` despite 880/mo at LOW competition.
**Why (book §1, "Avoid branded searches"):** the cluster is ~90% navigational brand queries for
named schools — `colegio bilingüe valle del miro` (3.600), `vallmont` (1.900), `sierra blanca`
(1.600). Searchers want one specific school, not advice. Kept only as an *angle* (brief #22,
"is a bilingual school enough?"), never as a head-term target.

### Decision 2 — Reject the whole `inglés primaria` / `inglés eso` space.
**Why (book §1, purchasing-intent test):** top terms are `fichas inglés 3 primaria` (480),
`ejercicios`, `libros`, `repaso … pdf con soluciones` — free-worksheet hunters and pupils, not
buying parents. `inglés eso` is additionally polluted by "eso" the pronoun. Note this is the same
trap already visible in GSC: the site's current "winners" are PDF-hunter posts with near-zero
commercial intent (see Decision 6, 2026-07-28).

### Decision 3 — Target the Cambridge exam-logistics and level-ladder cluster instead.
**Why (book §2, tier you can compete with):** `fechas examen cambridge` 590/mo at **KD 2**,
`examen cambridge b2` 1.000/mo at **KD 8**, `niveles de inglés cambridge` 1.000/mo at **KD 5–7**,
`a2 key for schools` 110/mo at **KD 3** with page-1 rivals averaging 6,9 referring domains —
the book's "ripe for the picking". All uncovered by the 58 existing articles, and Impulse is an
official Cambridge preparation centre, so the authority is real rather than claimed.

### Decision 4 — The "for Schools" exam family is the primaria/ESO gap.
**Why:** 25 of 58 existing articles cover Cambridge exams, and **none** covers the *for Schools*
versions that school-age candidates actually sit. Distinct exam, distinct intent, so a separate
page is permitted under §2 — but `b2 first for schools` (#16) carries real cannibalisation risk
against 18 existing B2 articles and must lead on the *for Schools* difference.

### Decision 5 — `niveles de inglés cambridge` (#4) becomes the hub.
**Why (book §4, interlinking / Knowledge Graph):** it is the first question a parent asks and the
natural parent of every exam piece. The exam briefs link into it; it earns the authority.

### Decision 6 — `clases particulares de inglés` (590/mo, KD 2) is NOT a blog target.
**Why:** intent is **commercial**. It belongs to a service page via `geo-pages`; routing it
through the blog would build the wrong page type for the query.

**Validation plan:** publish Tier 1 before the September spike (Cambridge and class-search terms
run ~3× in September). Re-pull at +4/+8 weeks and read position and CTR against the control
cohort, not raw clicks.

---

## 2026-08-03 — DECIDED: do not build San Sebastián de los Reyes or Alcobendas.

**Decision [DANNY, 3 Aug 2026]:** no pages for **San Sebastián de los Reyes (90/mo, 210 in
September)** or **Alcobendas (70/mo, 170 in September)**, despite these being the two highest-volume
unbuilt terms in the §14 research — each on its own bigger than any barrio term the site owns
(Barrio del Pilar, the best, is 40/mo).

**Why this is the right call, recorded so it stops being re-proposed:**
- Both are **separate municipalities**, not Madrid barrios. The academy is one physical centre on
  Av. de El Ferrol 22, and the entire local play on the existing 14 pages rests on a checkable
  proximity claim — "2 paradas", "8 minutos en el 147", "3 minutos andando". Neither town has a
  route like that. There is no honest version of the page's core argument.
- The book's **purchasing-intent / landmine test** applies: someone searching "academia de inglés
  Alcobendas" wants an academy *in Alcobendas*. Ranking a Madrid-Norte centre for it would earn
  impressions and bounce them, which is the pattern §5 says to stop doing, not start.
- It would also be the **one-intent-one-page rule inverted** — a page whose intent we cannot
  actually serve, competing for attention with fourteen pages we can.

**What this closes:** the barrio/location-page programme is **complete**. 14 pages, all grade A,
zero elements below 9. No further location pages are planned; the phase-2 list in §2 is now fully
resolved (built, folded, or explicitly declined).

**Where the growth actually is, for the next session:** not more location pages. The head term
`academia de inglés cerca de mí` is **1,600/mo, 4,400 in September** — the pillar shipped in July
and is the asset worth expanding. Off-page is the other half: the site has **zero local backlinks**
(see the Madrid Norte target list, 2026-08-02), which no amount of on-page work substitutes for.

---

## 2026-08-03 — Four new barrio pages built; two barrios deliberately NOT given pages.

**Context:** Danny asked for pages on seven phase-2 barrios. Research changed the shape of it.

### Decision 1 — Build four, fold two into existing pages, skip one.
**Why (book §2, "one intent = ONE page"):** five of the seven were already claimed by live pages.
**Valdeacederas is literally the origin of the bus-147 route the Tetuán page is built on**, and
Herrera Oria appears on five pages plus the homepage. A separate page for either would compete with
its own siblings for the same searcher.

| Barrio | Decision | Why |
|---|---|---|
| Arroyo del Fresno | **Built** | No existing mention; clean L7 route |
| Sanchinarro | **Built** | No existing mention; 20/mo, the most volume of the seven |
| Valdezarza | **Built** | Only a passing EOI reference on Mirasierra |
| Chamartín | **Built** | Only a passing mention on Tetuán |
| Valdeacederas | **Folded into Tetuán** | Same intent as the page that owns the 147 route |
| Herrera Oria | **Folded into Mirasierra** | Its L9 neighbour; named on 5 pages already |
| Fuencarral | **Skipped** | Zero volume, and it is the *district* name on four pages |

Instead of competing pages, Tetuán and Mirasierra each gained a dedicated FAQ answering the
"¿cuánto se tarda desde …?" query for the folded barrio, using the canonical route data. That keeps
the term covered and the authority concentrated.

**Volume caveat, stated plainly:** per §14 these are 0–20/mo terms. This is a local-pack and
topical-coverage play, not a traffic play. San Sebastián de los Reyes (90/mo) and Alcobendas
(70/mo) remain the real unbuilt gaps.

### Decision 2 — Publish structural transit facts, never invented minutes.
L7 station order was verified against Metro de Madrid/Wikipedia before any copy was written, and
recorded in `Business-Information.txt` §2. Arroyo del Fresno is **3 paradas** from Peñagrande,
Valdezarza **2**, both on L7 with no transfer; Chamartín is **1 parada on L10 to Plaza de Castilla
then 2 on L9**. Minute figures appear only where the site already owned a source (Peñagrande
station → academy ~8 min on foot; Barrio del Pilar → academy 500 m / ~3 min). **Sanchinarro has no
metro and no sourced minute figure, so the page publishes none** — it leads on price, group size
and the online option instead, and says outright that the academy is not around the corner.

### Decision 3 — Shared JSX scaffolding, prose written per barrio.
The uniqueness scorer strips classNames and tags and compares only visible text, so sharing markup
costs nothing while sharing prose costs everything. Every reader-visible string was written once,
for one barrio. Case studies rotated (Josmary, Daniel, Sergio ×2) rather than repeating one.
Result: the four new pages score 93–96 on uniqueness-inclusive GEO with **no regression on the
existing ten**.

### Decision 4 — Review threshold lowered 70 → 43 chars, and the allocator now pins.
Four pages need eight verbatim reviews and only one eligible review was unplaced. `MIN_CHARS` in
`build_pool.py` dropped to 43 — the shortest real review that still reads as a sentence — taking
the eligible pool from 79 to 93.
**The first re-run then tried to reshuffle four already-live pages**, swapping a 353-character
review off the homepage rail for a 65-character one, because widening eligibility re-ranks the
whole pool. `allocate.py` now pins every already-published review to its page and only fills empty
slots, so the 78 live quotes are untouched and the artifact is idempotent. Churning verified
testimonials for no benefit is exactly what the verbatim gate exists to prevent.

**Result:** 14 barrio pages, **all grade A**, lowest 95, **zero elements below 9**, site-wide
baseline 96. Build 146 → 150 pages. Gates: `astro check` 0 errors · quote gate 0 fail in source and
dist (86 quotes now) · sitemap carries all four new URLs.

**Validation plan:** book §5. These four start from zero impressions, so impressions are the first
signal, not CTR. Filter GSC on "URLs containing `academia-ingles-`" and watch the cluster; judge the
four new ones against the existing ten as the control. Seasonal caveat as ever: August trough,
September 3× spike.

---

## 2026-08-02 (late, part 2) — The last five barrio pages rebuilt for GEO. All ten now grade A, every element ≥ 9.

**Context:** Barrio del Pilar, La Vaguada, Mirasierra, Montecarmelo/Las Tablas and Peñagrande had
never been through the GEO rebuild: no named teacher, no case study, no published prices
(Case Studies 0, Pricing 0–2, Team 2). Site-wide baseline was 85.

### Decision 1 — Hand-write each page's blocks instead of running `apply-geo-blocks.py`.
**Why (book §2 anti-cannibalization + the scorecard's Overall Uniqueness row):** the tool exists and
would have been faster, but it pastes an identical JP bio, price table and case study into every
page. The evidence that this is costly was already in the audit: the three pages sharing the
templated Daniel de la Peña block (La Ventilla, Plaza Castilla, Tetuán) were *exactly* the three
worst on uniqueness (7, 8, 7) while Cuatro Torres and La Paz, on different case studies, scored 10
and 9. Pasting the same blocks onto five more pages would have dragged the whole cluster under the
gate. Every block was written per page — different angle, different quotes pulled from the same
transcript, different price lead-in. Uniqueness on the five new pages came out 9–10.

Two of the tool's steps were also stale and would have broken these pages: it rewires inline review
arrays to a `localReviews` const these five don't define, and its "kill fabricated claims" cleanup
predates the current copy.

### Decision 2 — Case studies distributed, not repeated: Sergio ×2, Josmary ×2, Daniel ×1 (new pages).
All three are real, transcribed from video, and recorded in `Business-Information.txt` §6 with
explicit `[GAP]` markers. Those were respected: **no CEFR level or certificate is claimed for Sergio
or Daniel**, because neither names one. Daniel's proof is the career outcome (18 months → teaching
primary school English full-time), which is stronger than an acronym anyway.

### Decision 3 — Titles and H1s carry a real number, per page.
Every H1 now pairs the barrio name with a sourced figure (`a 3 minutos de Peñagrande`,
`a 4 minutos de Mirasierra`, `a 1 minuto del bus`). Travel figures come from
`components/LocationsSection.tsx`, the canonical route data — not from the pages' own prior claims,
several of which were wrong.

### Defects found and fixed along the way (none of these were in the brief)
- **Five pages overrode their own title after hydration.** Cuatro Torres, La Paz, Plaza Castilla,
  Tetuán and La Ventilla each ran `document.title = '…'` in a `useEffect`, replacing the SSR title
  with a 100+ char generic one the moment the island hydrated — silently undoing the title fixes
  made earlier the same day. Removed from all five.
- **"174+ reseñas" was still live in 10 places** (4 barrio pages, `SobreNosotrosPage`,
  `ContactoPage`, `ValuesSection`, `TestimonialsSection`, the Madrid-Norte blog post and
  `testimonios.astro`'s meta). The real count is 180. Corrected everywhere; verified absent from
  `dist/`.
- **Josmary was published as "Josh Mary"** — in `TestimonialsPage.tsx` *and* in the `VideoObject`
  schema on `testimonios.astro`, i.e. shipped to Google as structured data under the wrong name for
  a real person. `Business-Information.txt` §6 flagged this as "fixed first, independently of the
  GEO work"; it hadn't been. Both corrected.
- **Peñagrande contradicted itself on distance** — hero said 3 minutes, benefits and two FAQs said
  12–15. Reconciled to the canonical figures (L9 ~3 min + 3 walking; 8 min on foot from the L7
  station; 3–5 by car).
- **Audit bug: `score_intro` matched number units case-sensitively**, so title-cased copy
  ("7-10 Alumnos", "15 Minutos") never counted. Fixed with `re.I`.

**Result:** all ten pages **grade A**, **zero elements below 9**, site-wide baseline **85 → 96**.
Gates: `astro check` 0 errors · build 146 pages · quote gate 0 fail in source and dist.

**Follow-up, same night — RESOLVED for the service pages.** Danny confirmed the phrasing:
*"100% de aprobados Cambridge en el curso 2024/25 (alumnos presentados)"*, scoped to the service
pages. A full sweep found the claim in **104 places**, not the ~16 metas first flagged.

Why the qualifier matters: `Business-Information.txt` §12 records the proof as "100% Cambridge
**B2 First** pass rate, 2024/25 **and** 2025/26", marked `[cohort size unknown]`. A bare "100%
aprobados" therefore over-claims twice — it implies every Cambridge exam, and a denominator nobody
has. §12 is explicit: *"inventing a denominator is exactly the kind of unverifiable claim that
costs citations."*

Applied to **21 occurrences** across `pages/cursos/*`, `pages/examenes-cambridge/*`, their `.astro`
wrappers and `ExamPageLayout` (used only by the two exam pages, so a service-page surface despite
living in `components/`): schema `Course` descriptions, meta descriptions, hero badges, section
headings, body copy. Secundaria already carried the qualifier on one line citing 2025-2026 —
normalised to 2024/25 so one page doesn't cite two cohorts. All four rewritten meta descriptions
stay inside the book's 160-char ceiling (146–158). Verified against the live pages, not just source.

**Still unqualified, deliberately out of scope** (~83 places): the blog posts, the location pages,
shared components (`ValuesSection`, `InfoCards`, `SEOHead`), several top-level pages, and two
site-wide sources that surface on *every* page including the service ones —
`utils/schemaData.ts` (the Organization schema `description`, which is the entity description
Google reads) and `src/data/academyImages.ts` (image alt text). The Organization schema is the
highest-value of these and the one to do next.

**Validation plan:** book §5 — these five had no differentiator in the SERP at all, so watch
impressions first (they should broaden on barrio + price/transit long-tail), then CTR. Filter GSC by
"URLs containing `academia-ingles-`" and judge the cluster as a whole. Seasonal caveat: August is
the trough, September is the 3× spike, so compare against the control cohort, not month-on-month.

---

## 2026-08-02 (late) — Five barrio pages were shipping truncated title tags. Fixed, and the audit now scores the composed title.

**Context:** finishing Plaza Castilla's meta (Title Tag scored 3/10, page grade B) surfaced a
bigger defect. `BaseLayout` treats the `.astro` `title=` prop as a **theme**, not a finished title:
`utils/buildPageTitle.ts` appends the brand chain and, past 70 chars, hard-truncates the theme to
41. Five location pages were over that line, so production was serving titles cut mid-word:

```
Inglés de negocios en Cuatro Torres | des | Impulse English La Vaguada
Inglés cerca de La Paz | Cambridge desde  | Impulse English La Vaguada
Inglés a una parada de La Ventilla | Camb | Impulse English La Vaguada
Inglés a 8 min de Tetuán | Bus 147 direct | Impulse English La Vaguada
```

`geo-audit.py` scored four of those **9–10/10** because it read the source prop, never the composed
string. Confirmed against `dist/`, not inferred.

### Decision 1 — Author the full title on every location page (`fullTitle={true}`), capped at 60 chars.
**Why (book §3 on-page cheat-sheet):** the book is prescriptive — title tag **≤55–60 chars** to
avoid truncation. Letting a helper append a 34-char brand chain to an already-complete title
guarantees a breach. `fullTitle={true}` was already the in-repo pattern on Barrio del Pilar and
La Vaguada; this extends it to the other five rather than inventing a mechanism. Brand shortens to
"| Impulse" — the same trade those two pages already made, and length beats brand-chain length here.

| Page | Shipped now | Chars |
|---|---|---|
| Cuatro Torres | `Inglés de negocios en Cuatro Torres \| desde 29 €/h \| Impulse` | 60 |
| La Paz | `Inglés cerca de La Paz \| Cambridge desde 64 €/mes \| Impulse` | 59 |
| La Ventilla | `Inglés a una parada de La Ventilla \| desde 64 € \| Impulse` | 57 |
| Plaza Castilla | `Inglés a 2 paradas de Plaza Castilla \| desde 64 € \| Impulse` | 59 |
| Tetuán | `Inglés a 8 min de Tetuán \| Bus 147 directo \| Impulse` | 52 |

Each keeps a real, page-verified differentiator (transport fact or published price) ahead of the
brand, per the book's "mine competitor SERPs for recurring modifiers" note. Titles were not
otherwise re-themed — the book's "don't change a title more than once a quarter" rule applies, and
these are defect repairs, not experiments.

### Decision 2 — The audit now models `buildPageTitle` and hard-fails a truncated title (2/10).
**Why:** an audit that scores a string the user never sees will keep certifying broken pages.
`compose_title()` in `geo-audit.py` mirrors the TS helper and was validated to reproduce all ten
shipped `<title>` tags byte-for-byte before any page was edited.

### Decision 3 — Plaza Castilla's meta description rewritten for accuracy, not just for score.
It claimed **"A 15 min en Metro Línea 9"**. The page's own copy says 12 min on the metro plus 3 on
foot; 15 is the door-to-door total, not the metro leg. Now: *"a dos paradas de Plaza de Castilla por
la línea 9, sin transbordos… grupos de 7 a 10 alumnos, desde 64 €/mes"* (154 chars, inside the
book's 155–160 ceiling).

### Fixed alongside — AggregateRating scored 8/10 on all ten pages from a stale hardcode.
The audit carried the literal note *"reviewCount from napData — currently 178, must be 180"*.
`napData.ts` already said 180. The scorer now reads `napData.reviewCount` and compares it against
`reviews/reviews.json` (`meta.reviews_count`, pulled live from the profile), so it tracks reality
instead of a comment. All ten pages 8 → 10.

**Result:** Plaza Castilla 89 → **95 (grade A)**; La Ventilla 93 → 94; site-wide baseline 83 → **85**.
Gates: `astro check` 0 errors · build 146 pages · quote gate 0 fail in source and dist.

**Still open:** Mirasierra, Montecarmelo and Peñagrande keep generic `Academia Inglés [barrio]`
titles (3/10) — they are three of the six never-GEO'd pages and get their titles in that rebuild.

**Validation plan:** GSC CTR on the five URLs. Book §5 — low CTR is the title-tag/meta signal, and
four of these were previously unreadable in the SERP, so CTR is the metric that should move first.
Compare the 28 days after the deploy against the 28 before, seasonally caveated (Aug trough).

---

## 2026-08-02 — Local backlink target list for Madrid Norte (off-page, book-gap territory)

**Context:** Danny asked which local pages and businesses in Barrio del Pilar / Madrid Norte offer
the highest-value backlinks. Research file:
`impulse-seo-ops/data/madrid-norte-backlink-targets-2026-08-02.md`. Data: DataForSEO backlinks
(rank 0–100, spam score, referring main domains) + live SERP + direct page verification.

**Book position (§Prioritization Pyramid):** backlinks are the **4th and last** layer — "the cement",
below content, keywords and technical. The book gives no off-page methodology and no GBP/citations
chapter, so this work sits in the documented **book gap** and is scored on external local-SEO
principles (relevance × proximity × attainability), not on a book rule. Logged here for the record,
not because the playbook prescribed it.

### Decision 1 — Score targets on relevance × attainability, not raw authority.
**Why:** a rank-73 national directory contributes less to a map-pack query than a rank-37 district
newspaper that names the barrio. Proximity and topical fit dominate for local intent. The one
book-adjacent principle applied is §1's landmine test, reused as a **spam screen**: `newslandidiomas.es`
shows rank **50** but its profile is PBN/hacked garbage (betting and adult domains), proving the
headline number alone is not decision-grade.

### Decision 2 — `empresasdelbarrio.com` is the #1 target; promoted from "Phase 1, cheap".
**Why:** verified live — it ranks **#11 organic for "academia de ingles barrio del pilar"**,
lists **Junior English and CECP but not Impulse**, links out with **no `rel` attribute** (dofollow),
and scores **spam 11**. One listing yields a dofollow local link, referral traffic from a page
already on page 1 for the money term, and closes a gap two direct rivals are using. Highest-value
single action on the list.

### Decision 3 — Treat the district link graph as an uncontested land-grab, not a grind.
**Why:** `impulse-english.es` holds **rank 11, 8 referring main domains, zero from any Madrid
business or institution**. But the local-pack leader `juniorenglish.net` (rank 16, 304 reviews)
holds only **four** genuine local links, and no rival has a district link moat. ~8–12 real local
links would lead the district outright. Sized as a Q4-2026 target.

### Decision 4 — Drop `barriodelpilar.com` from the paid plan.
**Why:** verified abandoned — newest article **2 Jan 2020**, nothing in six years, no advertising
page, spam 44, despite a 2026 copyright footer. The 2026-07-24 plan listed it as a paid
sponsored-content target. Corrected there.

### Decision 5 — No disavow for the two spam-70 links.
**Why:** `m98ufa.com` (spam 75) and `plumeriamarketing.com` (spam 70) hit `juniorenglish.net` on the
same days (7–8 Jul 2026) — an indiscriminate scraper network spraying local academies, not targeted
negative SEO. Google discounts these automatically; disavowing invites more risk than it removes.

**Validation plan:** monthly `backlinks_summary` on `impulse-english.es`, tracking **referring main
domains with spam ≤40**. Baseline 2026-08-02: **8 total, 0 local.** Fold into the monthly report.
Judge no earlier than ~8 weeks after links land.

---

## 2026-08-02 — Annual year roll 2025 → 2026, plus the 2026 course-price refresh

**Context:** the site still read as a 2025 site — 649 source occurrences of "2025", ~620 of them
reaching production HTML, in title tags, H1s, meta descriptions, freshness badges and the sitewide
pass-rate claim. Danny asked for a blanket 2025 → 2026 change; a blanket change would have published
falsehoods, so the occurrences were split by what the year actually *means*.

### Decision 1 — Roll the year everywhere it means "now"; never where it means "when".
**Why (book §Title Tag, line 77):** the reference names the year as a recurring SERP modifier worth
mining from competitor titles, and warns against changing titles more than once a quarter. An annual
roll is exactly the once-a-year change that modifier is for — a stale year in the title is a direct
CTR loss on queries where competitors show the current one.

Rolled: all "Guía Completa 2025" / "Comparativa 2025" style titles, headlines, H1s and meta
descriptions; the "en 2025/26" boilerplate (→ 2026/27); the 8 hardcoded "Actualizado: Diciembre 2025"
badges (→ Agosto 2026, the month actually edited, not a fabricated one).

### Decision 2 — `datePublished` is never rolled; `dateModified` is.
**Why:** backdating publication is a misrepresentation to both readers and Google, and it destroys
the only honest freshness signal the site has. All 126 `datePublished` values were left untouched;
`dateModified` was rolled to 2026 instead. Freshness now comes from a true "updated" date.

### Decision 3 — Nine 2025s deliberately preserved as historical fact.
Linguaskill "My Best Score" *implementada en 2025* and certificates *emitidos desde 2025* (real
feature-launch dates); the *EF EPI 2025* ranking and *LinkedIn España 2025* salary data (named
sources with a publication year); and three unsourced percentage statistics framed as 2025 data
("datos actualizados de 2025, el 87%…", "el 89%…", "En 2025, más del 80% de las universidades…").
Rolling a statistic's year restates it as a newer finding that was never made.

### Decision 4 — Pass-rate claim rolled to 2025-2026 on Danny's confirmation only.
~28 instances of "100% aprobados 2024-2025" (three separator variants, now normalised to one form).
This asserts a result about the just-finished academic year, so it was rolled **only** after Danny
confirmed the 100% pass rate held for 2025/26 — not inferred.

### Decision 5 — Course prices refreshed to the 2026 table; exam fees left alone.
Impulse's own tiers moved Primaria 71 → 83 €, Secundaria 75 → **desde 87 €** (bands S1–S3 87 /
S4–S6 91 / S7–S8 93), Adultos 79 → 94 €; Infantil stays at 64 € with a second weekly class at 99 €.
Trimestral rates (239 / 251 / 263 / 269 €) are now published on `/precios/` for the first time.
Headline range and `priceRange` are **64 – 99 €/mes** — 99 €, not 94 €, because Infantil-2-clases is
the true monthly ceiling.

Third-party figures were left untouched throughout: Cambridge and Linguaskill exam fees (233 €,
130 €, 120 €, 210 €, confirmed unchanged for 2026), Linguaskill per-module prices (48–75 €), TKT
(75 €/module), and the competitor/market-rate tables in the comparison articles. Each price hit was
read in context — no find-and-replace.

**Validation plan:** GSC — watch CTR on the pages whose title tag gained the 2026 modifier
(Linguaskill guides, Cambridge centre/registration guides, precio pages) over the next 28-day window
against the same pages' pre-change CTR. Confirm the Offer/priceRange changes re-crawl cleanly in the
Rich Results Test.

---

## 2026-07-31 — Founder `Person` nodes on the organisation schema

**Context:** follow-up to the 2026-07-30 entry below, which flagged that the site had no `Person`
or `founder` schema at all. Danny supplied JP's full name: **JP Paul** (confirmed 2026-07-31 —
"JP Paul is his full name"; there is no surname beyond it). Only Danny has a LinkedIn to point at.

### Decision 1 — `founder` → two `Person` nodes on the canonical `#organization` node only.
**Why (book §4 authority / E-E-A-T, plus the entity half the book skips):** named, corroborated
people behind a local business is the strongest E-E-A-T signal a small site can emit cheaply, and
it gives Google something to attach the founders to as entities rather than as page text. Each
node carries `worksFor` → `#organization`, closing the loop back to the business entity.

Deliberately **not** added to the per-location `#localbusiness` nodes (`generateLocationPageSchema`):
those already declare `parentOrganization` → `#organization`, so repeating the founders there would
restate the same two people on 10 pages for no additional signal.

### Decision 2 — `sameAs` only where a real profile exists. JP's node ships without one.
**Why:** `sameAs` is a corroboration claim — it asserts "this is the same person as that profile."
With no verified profile for JP, the honest options are omit it or invent one, and inventing it
would be a false claim on the exact signal the property exists to carry. Danny's node gets
`sameAs` → his LinkedIn. JP's node is name + `jobTitle` + `worksFor` until a profile URL exists.
Same reasoning as the standing "let dead URLs 404" rule: no signal beats a wrong one.

### Decision 3 — Visible site copy keeps "JP". Full name lives in schema only.
**Why:** per Danny, the displayed name stays as-is. Schema carries `name: "JP Paul"` with
`alternateName: "JP"`, which is exactly what `alternateName` is for — the machine-readable record
is complete without changing what visitors read.

**Implementation:** `FOUNDERS` array added to `utils/napData.ts` (founder identity gets one source,
same rule as NAP) and consumed by `generateOrganizationSchema()` in `utils/schemaData.ts`.

**Verification:** `npx astro check` 0 errors · clean `npm run build` 146 pages · `founder` array
present in the emitted JSON-LD on all 146 pages, with `sameAs` on Danny's node only.

**Build-integrity finding (not SEO):** `components/icons/WhatsAppIcon.tsx`, imported by 14 pages,
is committed on `main` only (`c371672`) and is absent from `design/ui-refresh-non-blog`,
`offer/prueba-de-nivel` and `fix/youtube-handle-founder-linkedin`. Those branches do **not** build
standalone; earlier green checks on them passed only because the file was sitting on disk untracked.
Restored from `main` to verify this work. Needs resolving before any of those branches is built in CI.

---

## 2026-07-30 — Corrected a dead YouTube handle in `sameAs`, added founder LinkedIn to /sobre-nosotros/

**Context:** Danny supplied the real channel, `https://www.youtube.com/@Impulse_English_lavaguada`,
and his personal profile, `https://www.linkedin.com/in/danieljohnfitzpatrick/`.

### Decision 1 — Repoint the YouTube URL sitewide. The one in the code was a 404.
**Why (not a book point — this is the off-page/entity half the reference explicitly skips):**
`utils/napData.ts` carried `https://www.youtube.com/@Impulse-English`, which returns **404**
(verified by curl; the real handle returns 200). That URL was emitted in the LocalBusiness
`sameAs` array on **all 146 pages**, so the site was asserting entity-sameness with a channel
that does not exist — a broken corroboration signal on the highest-value structured data,
on exactly the local/entity surface the "cerca de mí" pillar and GBP work depend on. The real
handle also matches the naming of every other profile in NAP (`impulse_english_lavaguada` on
Instagram, Facebook, TikTok), confirming `@Impulse-English` was an uncorrected placeholder.

Changed in `utils/napData.ts` (`social.youtube` + `sameAs`), `public/llms.txt`, and
`SITE-DOCUMENTATION.md`. Footer and Newsletter inherit from NAP, so their icons follow automatically.
Deliberately **not** changed: `seo-system/` (historical fossil per root CLAUDE.md) and
`scratch.html` (stale untracked build dump).

### Decision 2 — Founder LinkedIn as a visible link only, not yet as schema.
**Why (book §4 authority/E-E-A-T, applied conservatively):** a real, verifiable founder profile
strengthens the about page's expertise signal. Added under Danny's bio on `/sobre-nosotros/`
("Conecta con Danny en LinkedIn"). Not added to structured data because the site currently has
**no `Person` or `founder` schema at all** — `utils/schemaData.ts` has no Person type. Inventing
one as a side effect of a link request would be scope creep; logged below as a follow-up instead.

**Follow-up (not done):** add `founder` → `Person` nodes (JP + Danny) to the organisation schema
with `sameAs` pointing at the LinkedIn profiles. That is the change that would actually let Google
disambiguate the founders as entities. Needs a decision on JP's surname/profile first.

**Incident note (build hygiene, not SEO):** the mandated pre-edit backup of `public/llms.txt`
was written *inside* `public/`, which Astro copies verbatim — `llms.txt.bak-…` shipped into `dist/`.
Caught by the dist grep, moved out, rebuilt clean. **Never write `.bak-*` files under `public/`.**

**Verification:** `npx astro check` 0 errors · clean `npm run build` 146 pages ·
`dist/` grep: 0 occurrences of the dead handle, new handle on 148 files, present in the homepage
`sameAs` array, founder LinkedIn present on `/sobre-nosotros/`. No tracking surfaces touched.

**Validation plan:** re-run a Rich Results / schema check on the homepage after deploy to confirm
the `sameAs` set is clean; the YouTube profile should stop being a dangling reference.

---

## 2026-07-24 — Top-50 video-able query shortlist for the YouTube + blog pairing programme

**Context:** Danny will record one video per query (Shorts ~90s + some long-form) and pair each with a
blog post. Deliverable: `video-queries-top50.md` (project root). Data: GSC 28-day queries (to 2026-07-20),
fresh DataForSEO SERP/PAA pulls (18 seeds, Spain/es, `live/advanced` — note: `live/regular` returns NO
PAA/related blocks), DataForSEO Google Ads volumes, on-disk PAA harvests (`data/paas/*.csv`).

### Decision — Select 50 queries by consolidated intent, ranked volume+GSC first, PAA-only allowed; exclude branded/navigational/PDF-download terms.
**Why (book):**
- **DEEPR:** all 50 are Education/Problem-solving motivations — "local businesses should produce educational content."
- **PAA mining is the prescribed market-gap finder** (§1) — 23 of 50 come primarily from PAA.
- **Tier 3–4 long-tail** for a low-DA site (§2): navigational giants ("academia inglés madrid", 2.858 imp
  at pos ~38) were *excluded* as video topics — wrong intent for video and covered by the local pillar work.
- **One intent = one page:** GSC variants consolidated (e.g. ~15 "caduca" phrasings → 2 queries, B2/C1);
  25 queries map onto EXISTING articles (video embeds there — no new cannibalizing page), 25 marked NUEVA.
- **"No volume ≠ no search"** (§2, Level 5): strong recurring PAA questions kept despite null Google Ads
  volume (Google Ads also nulls all "ñ" keywords — verified; don't trust null for niños/españoles terms).
- Excluded PDF-download cluster ("exámenes C1 PDF con soluciones", top GSC clicks) — download intent,
  a video answers the wrong job; that cluster is a separate lead-magnet play, not a video topic.

**Data mechanics learned (for reuse):** PAA/related requires SERP `live/advanced` (+`people_also_ask_click_depth: 2`);
Labs `keyword_ideas` on broad seeds returns off-topic noise (DGT/RAE) — use curated `search_volume` batches instead.

**Context:** biggest generic local term in the niche; a proximity/"near-me" query. No page currently
targets it; homepage is anchored to "La Vaguada y Barrio del Pilar."

### Decision 1 — The **homepage** owns the term as the Tier-1 pillar; the `por-barrios` hub + 10 barrio pages are the interlinked Tier-2/3 moat.
**Why (book):**
- Homepage is the authority node and *already ranks #22* — Expansion step says **build the moat around the proven winner**, don't move the target to a zero-authority page.
- **One intent = one page** — chasing the term on both homepage *and* hub = self-cannibalization.
- **Broad-vs-narrow rule** removes the only risk (barrio dilution): broaden the H1/title/intro to "Madrid norte / cerca de ti," keep "La Vaguada"/"Barrio del Pilar" as H2 sub-sections.
- Rejected: new `/academia-ingles-cerca-de-mi/` page (don't spin up a thin page for a term you already rank for); hub-as-pillar (discards homepage traction/authority).

### Decision 2 — Optimise existing surfaces **this PR**; build new location pages (Herrera Oria, Valdeacederas, Fuentelarreina) as a **separate Expansion PR after validation.**
**Why (book):** **Validation precedes Expansion** — measure the term's avg position + the barrio cluster
(GSC "URLs containing academia-ingles") first; *"don't build hubs just to build hubs."* Then expand
around what's working, using the routing data in `Competitor info and direction for new location pages.docx`.

### Decision 3 — **Defer the homepage copy rewrite.** Ship the near-me signal through new surfaces, geo data and internal linking only; leave title, H1 and intro untouched.
**Why (book):** same principle as Decision 2 — **Validation precedes Expansion.** The homepage's barrio
consolidation merged the *same day* (`f29b3b9`) and has **zero GSC data**. Rewriting its title/H1/intro
now would overwrite an unmeasured change and make both experiments unreadable: if position moves, we
couldn't attribute it. Decision 1 stands — the homepage is still the Tier-1 pillar — but the
broad-vs-narrow rewrite of its copy waits for one GSC cycle on the barrio terms.

**Shipped instead (PR `seo/cerca-de-mi-pillar`):**
- Corrected the LocalBusiness `geo` pin (~500 m off) to the real GBP coordinates; added `geo.position` + `ICBM` head meta.
- Homepage FAQ + `FAQPage` schema, six proximity questions (metro/bus/coche/aparcamiento), answers <300 chars.
- "Cómo llegar desde tu barrio" routing block on the homepage — real metro L9 / bus / drive times per origin.
- "Zonas" header-nav entry → the `por-barrios` hub (it had no nav entry at all).
- Completed the lateral barrio ring + added homepage up-links, via a shared `NearbyAreas` component
  fed by a single `utils/barrioAreas.ts` list (the hand-maintained rings had drifted: several pages
  were missing Mirasierra and Montecarmelo/Las Tablas).

**Scope note:** the book has **no GBP/citations chapter** → the "citations" half of this keyword's
attack is a separate, off-repo workstream (GBP category, NAP consistency vs `utils/napData.ts`, reviews).

**Implementation plan:** `~/.claude/plans/handoff-saved-vectorized-ullman.md` (approved and executed
2026-07-23). Supersedes the earlier draft `twinkly-popping-gosling.md`, whose Deliverable B1
(homepage copy rewrite) is deferred by Decision 3.

---

## 2026-07-24 — GSC indexing audit: why 196 pages are "not indexed" + the fix plan

**Context:** GSC Pages report shows 196 not indexed vs 119 indexed (coverage export 2026-07-22).
Audit ran: live crawl of all 145 sitemap URLs, fresh 28-day + 3-month Search Analytics API pulls,
legacy-URL status from `impulse-seo-ops/`, source-code link scan. Headline finding: the live site is
technically clean (145/145 return 200 with self-canonicals); the "not indexed" mass is legacy
WordPress debris + self-inflicted redirect noise.

### Decision 1 — Normalize ALL internal links to trailing-slash canonicals (≈327 refs across ~60 files) in one PR.
**Why (book §4 Interlinking):** internal links are the **authority engine**; every internal href
currently points at the slashless variant and eats a 308 hop, so link equity flows through redirects.
Google has even *selected slashless variants as canonicals* for ~10 pages (e.g.
`/examenes-cambridge/fechas-precios` — 261 impressions on the redirect URL) and keeps 32 URLs in the
"Page with redirect" bucket. The April Redirect-Pages-Fix-Plan prescribed this and it was never implemented.

### Decision 2 — Request Indexing on the homepage only; let everything else consolidate on its own.
**Why (book §5 Validation):** "Request Indexing sparingly (only major updates) or you look spammy."
Google's selected homepage canonical is still `http://www.impulse-english.es/` (26k impressions / 3 mo
vs the real homepage at pos ~42). The homepage had a major update (barrio consolidation + cerca-de-mí
pillar). One manual Request Indexing + the redirect chain does the rest. Everything links back to the
homepage (§4), so the trailing-slash PR also feeds this.

### Decision 3 — Keep letting dead WordPress URLs 404. No new redirects.
**Why:** standing project rule (prefer honest 404s over weak topical 301s) + book's content-first
pyramid — the 29 404s / most of the 109 "Crawled – currently not indexed" are `/dipl-testimonial/*`,
`/qsm_quiz/*`, `/blog-N/`, `/hola-mundo/`, author/category archives. They have no successor page and
will fall out of the report on their own. Not a problem to fix; a graveyard to ignore.

### Decision 4 — Remove `/gracias/` from the sitemap; noindex the `lp.` subdomain.
**Why:** `/gracias/` is noindexed AND robots-disallowed AND in the sitemap — three contradictory
signals on one URL (it is the "Excluded by noindex" row and part of the robots bucket).
`lp.impulse-english.es` serves 200, indexable, inside the domain property (45 impressions / 3 mo) —
an ads LP competing with the site. One intent = one page (§2).

**Deferred:** content/interlinking rescue of the 17 zero-impression sitemap pages (mostly weaker blog
posts + `/blog/todos/`) — fold into the Validation→Expansion loop after the trailing-slash PR ships,
per §6 (expand around winners, don't polish losers first).

**Blocked/manual (GSC UI):** bump `impulse-gsc-reporter` SA to Full (URL Inspection API returns 403 for
Restricted users); submit `sitemap-index.xml` directly; export drill-down URL lists for the
"Crawled – currently not indexed" (109) and 403 (5) buckets to confirm Decision 3's assumption.

### 2026-07-24 addendum — deep pass (link graph + query-level cannibalization, 28d API data)

**New findings that upgrade the plan:**
1. **Homepage split is a live ranking loss, not just a canonical untidiness.** The stale
   `http://www.impulse-english.es/` document ranks **pos 3.4** for "academia ingles madrid" while the
   real homepage sits at pos 41.4 *on the same query* (28d). Same pattern on ~15 local queries
   (vaguada pos 1.0 vs 4.1; peñagrande 1.3 vs 9.1). Consolidation (Request Indexing + existing 301s)
   inherits that authority — highest-upside single action available.
2. **The blog has no authority engine (§4).** Full link-graph crawl: nearly every article's in-degree
   is exactly 1 (its card on the index). Zero article-to-article linking across 97 articles. Worse,
   `/blog/` lists only 67/97 and `/blog/todos/` only 40/97 — ~29 articles are one stale index
   generation from orphanhood. §4 prescribes: every article links ≥2 siblings + upline, circular.
3. **Linguaskill cluster self-cannibalizes** — "diferencias entre linguaskill y cambridge" splits over
   4 posts (pos 17/35/58/78). Winner: `/blog/cambridge-vs-linguaskill-diferencias/`. Crown it with
   anchors from the other three (§2 consolidate synonyms; one intent = one page). 76 split queries total.
4. Slash/slashless splits are **absent at query level in the 28d window** — the trailing-slash issue is
   crawl-waste + equity-through-redirects, not an active ranking split. Priority stays but below 1–3.

### 2026-07-24 addendum 2 — max-effort census (full URL universe reconstructed + live-probed)

Universe rebuilt from sitemap + 16-month GSC pages + April redirect CSV + legacy audit +
vercel.json redirect sources = 339 URLs (Google's own count: 315). Hard facts settled:
- **403 bucket = WordPress machinery**: `/wp-json/*`, `/wp-login.php`, `/xmlrpc.php` serve 403 live.
  Harmless scanner/crawler leftovers; will decay; no action.
- **404 bucket = the intentional graveyard, verified live** (author/category/dipl-testimonial/qsm_quiz
  families + pagination). No successor pages exist; standing 404 policy holds.
- **Zero real pages hidden outside the sitemap** — every 200-serving page Google knows is either in
  the sitemap or is `lp.impulse-english.es` / the redirecting host variants.
- **Zero-impression sitemap pages split (16 mo history)**: 6 never earned an impression ever
  (all are index-orphaned newer articles → discovery starvation) vs 10 that earned then dropped to
  zero (quality demotion; incl. `/linguaskill/precios-fechas/` at 522 lifetime imp). Arithmetic bound:
  ~25–30 of 144 indexable pages are unindexed.
- **Barrio-template similarity is moderate, not fatal**: 8 pairs at Jaccard 0.35–0.45 (all location
  pages, worst La Paz↔La Ventilla). Secondary index-risk factor; blog articles are unique.
- **Latent landmine defused-but-present**: `vercel.json` has an `X-Robots-Tag: noindex, nofollow`
  header rule on source `/blog` (and `/gracias`) that never fires today because it matches only the
  slashless path, which 308s first. DELETE the `/blog` rule (and re-source `/gracias` → `/gracias/`)
  before any header-matching change arms it against the blog hub.
- **Method note**: `site:` SERP checks via DataForSEO are unreliable for per-URL index state (18/19
  queries return empty, including the homepage) — per-URL verdicts require the URL Inspection API
  (blocked on SA Restricted→Full). `inspect_index.py` is staged in `impulse-seo-ops/` for the moment
  the permission lands; wire it into the monthly cron as the continuous index monitor.

### 2026-07-24 addendum 3 — final verification pass (adversarial re-check of own findings)

- **Ghost-homepage evidence hardened**: the uniform "mejor academia de inglés para niños en
  {barrio}, madrid" queries (~100 imp each/28d) are NOT our rank tracker (basket mismatch; tracker ran
  only Jun 28–29). Likely synthetic/AI-assistant fan-out queries — but in those same SERPs BOTH
  homepage documents rank simultaneously (http://www pos ~1, https pos 4–9), which proves the double
  listing independently of query source. Brand + head-term rows are real-user evidence.
- **Cloaking ruled out**: Googlebot UA vs normal UA → byte-identical 200s (219,054 B).
- **NEW — schema contradicts canonicals on 117 pages**: JSON-LD `url`/`@id`/breadcrumb `item` values
  are slashless while rel=canonical carries the slash. `schemaData.ts` generators must emit
  trailing-slash URLs — folded into the trailing-slash PR (it's links + schema, one normalization).
- Blog listings: `/blog/` has NO pagination; union of `/blog/` (67) + `/todos/` (40) covers 96/97
  articles; only `/blog/mejores-academias-madrid/` is in neither. Titles: zero duplicates across 145.
  JSON-LD: 145/145 parseable, zero www references.
- `lp.impulse-english.es` title = homepage title verbatim ("Impulse English Academy La Vaguada ·
  Cambridge Centre Oficial") — brand-duplicate; noindex decision confirmed.
- **Backlink equity = the one remaining blind spot**: DataForSEO backlinks API not subscribed (June
  pull was an auth error, file is empty). Free replacement: GSC UI → Links → Export (top linked pages
  + top linking sites) — added as manual ask #5. Decision: no redirect-policy changes until that
  export shows whether any dead URL holds real external links.
- PSI keyless quota exhausted — mobile perf unverified today (last verified 85+ in March; the
  perf-harness gap memory stands).

---

## 2026-07-24 (evening) — PR 1 built + URL Inspection API results (SA now Full)

**Inspection API (145 sitemap URLs + variants, archived `inspection-2026-07-24.json`):**
- **Ghost homepage is RESOLVED**: all three stale variants (`http://www`, `https://www`, `http://`)
  now report `googleCanonical = https://impulse-english.es/`; the real homepage is PASS /
  "Submitted and indexed", crawled 2026-07-24 13:55 UTC. Danny's Request Indexing + the 301s landed.
- **134/145 sitemap URLs indexed** — far better than the ≤119 the coverage report implied. The
  entire not-indexed remainder is 10 starved pages + `/gracias/` (intentional):
  9 "Crawled – currently not indexed" (incl. `mejores-academias-madrid`, `linguaskill/precios-fechas`)
  and 2 "Discovered – never crawled" (`linguaskill-oposiciones-merece-la-pena`, `/blog/todos/` itself).
  Every one is a blog/long-tail page → confirms the authority-starvation diagnosis; PR 1 targets them.
- `lp.impulse-english.es` = "Crawled – currently not indexed" → not actively competing today; PR 2
  (noindex) stays queued but is less urgent.

**PR 1 implementation decisions (branch `seo/trailing-slash-authority-engine`):**
1. **Trailing-slash normalization done at three layers** (§4 — internal links are the authority
   engine; no equity through 308s): 518 source literals across 233 files; `schemaData.ts` now has
   `toCanonicalPageUrl()` applied inside every generator (url/@id/breadcrumb item) so ALL current and
   future callers emit canonical URLs; `[slug].astro` normalizes md-frontmatter URLs (auto-publish
   pipeline keeps writing slashless — normalized at the consumer, pipeline untouched).
   Excluded on purpose: `utils/popupVariants.ts` (strip-slash compare list) and vercel.json redirect
   sources. Result in dist: **0 slashless internal hrefs, 0 slashless schema URLs** (was 327 / 117 pages).
2. **Blog index unification via full hub directory instead of pagination** (deviation from the
   original "97 + pagination" sketch, same §4 goal, better shape): `/blog/` now server-renders an
   "Índice completo del blog" section linking ALL 96 articles grouped by category (1 hop from the
   hub, no thin paginated pages splitting authority); `/blog/todos/` extended from 40→96 via the same
   registry. Both auto-list future collection articles not yet in the registry ("Novedades" group).
3. **Master registry** `data/blog-directory.ts` generated by `scripts/seo/gen_blog_directory.py`
   (rerun after adding a static article): 96 entries = 71 static wrappers + 25 collection-only
   (12 md shadowed by static twins).
4. **Sibling interlinking rings** (§4 — every article links ≥2 siblings, circular): every one of the
   71 static article components + all collection pages now render a server-rendered "Artículos
   relacionados" block; siblings come from an alphabetical ring within 9 topic groups so in-links
   distribute evenly instead of piling on 3 favourites.
5. **Crown links** (§2 — one intent = one page; consolidate synonyms with anchors): computed from the
   archived 28d query-page data — 109 split queries found (audit said 76; threshold ≥15 imp applied),
   33 loser articles now link their winner FIRST with the split query as anchor text. Worst cluster
   crowned exactly as diagnosed: 3 Linguaskill losers → `/blog/cambridge-vs-linguaskill-diferencias/`
   with anchor "Diferencias entre linguaskill y cambridge".
6. **Landmines defused**: vercel.json `/blog` X-Robots-Tag rule DELETED; `/gracias` header re-sourced
   to `/gracias/` (now actually fires on the live path); `/gracias/` filtered out of the sitemap
   (144 URLs, all trailing-slash).
7. **`astro check` now a real gate** (standing feedback): `@astrojs/check` + `typescript` added to
   devDeps, tsconfig excludes the `seo-system/` fossil + migration script, 3 live-code type errors
   fixed → 0 errors. Build 146 pages OK. `verify:tracking` ALL PASS (double-tick, G-KNMS5YW69T).

**PR 1 MERGED** (commit `f1c73c6` → main → Vercel production). Live-verified on impulse-english.es:
sitemap = 144 URLs all trailing-slash / no `/gracias/`; `/blog/` lists 96 articles; `/gracias/`
X-Robots-Tag noindex now fires; crown anchors + trailing-slash JSON-LD live. Sitemap `sitemap-index.xml`
submitted + **API-confirmed processed (errors=0, warnings=0)**; old `sitemap.xml`/`sitemap-images.xml`
now 301 to it and will consolidate.

### 2026-07-24 (evening) — backlink blind spot RESOLVED (GSC Links export)

The one remaining unknown, and the decision it gated ("no redirect-policy changes until we see whether
any dead URL holds real external links"). Export archived in `impulse-seo-ops/data/gsc/audit-2026-07-24/`
(4 CSVs: Top target pages / linking sites / linking text / Latest links).

**Verdict: NO dead or legacy URL holds a single external link. Decision closed — the standing
"let dead WordPress URLs 404" policy is confirmed safe; no equity-preservation redirects are needed.**

- **Top target pages = only TWO URLs get external links, both live/indexed:** `/` (18 links / 13 sites)
  and `/aviso-legal/` (1 link / 1 site). None of the graveyard 404s, none of the 80+ WP redirect
  sources, none of the split/slashless variants appear. The entire external-authority mass sits on
  the homepage — which is exactly why PR 1's internal-link overhaul is the load-bearing lever: the
  sibling rings + crown links are the *only* mechanism distributing authority to blog/exam/location
  pages, all of which have zero external links (§4 internal links = the authority engine, empirically).
- **Profile is thin + citation-shaped:** ~19 links from ~14 sites — Reddit r/Madrid recommendation
  threads (the strongest, genuinely relevant), Danny's LinkedIn/BNI post, and directory citations
  (Glassdoor ×3 TLDs, ZoomInfo, ProvenExpert, barriodelpilar.es, inglify, etc.). Anchor text is 100%
  brand/URL/navigational ("impulse english es", "view site", "visitar web") — zero keyword anchors.
- **Note for a future off-page track (NOT this audit):** biggest untapped lever is local link building
  (Madrid / Barrio del Pilar directories, education sites). `impulse-english.com` also links in — a
  .com variant worth checking (owned? redirect candidate?).
- Method caveat retired: DataForSEO backlinks stays unsubscribed; GSC Links export is the free
  substitute and is now the standing source. Re-export quarterly.

### 2026-07-24 (evening) — Madrid Norte client-acquisition / local-link plan (off-page track)

The Links export proved the whole external profile is ~19 links to the homepage — so off-page is the
biggest untapped lever. Ran a 6-lane deep web research pass (lead-gen portals, directories/citations,
family/education portals, sponsorship, local press/networking, competitor mining), every org
live-verified with a real contact. This is the **proximity/citations half the Maverick book explicitly
doesn't cover** — pairs with the on-page work, not a substitute.

Full plan (tiered, contactable): `impulse-seo-ops/data/madrid-norte-acquisition-plan-2026-07-24.md`
+ artifact https://claude.ai/code/artifact/1855d679-cdce-4bf0-a26c-cbc731faf7cc

Key decisions/corrections logged there: (1) **NAP-identical everywhere, GBP = source of truth**;
(2) **highest free lever = close the Google-review gap** (rivals Cambridge House 51, English Connection
115+); (3) Cambridge public finder = exam centres only, prep-centre reg is credibility not a lead
listing; (4) paid channels judged on CPL vs student LTV (tracking now measures it) — Educaweb Educalead
(pay-per-valid-lead) first; (5) AMPA route (become the school's English provider) beats logo sponsorship.
Already live (optimise, don't recreate): GBP, tusclasesparticulares, academiaaldea.es.

### 2026-07-30 — Review-generation keyword targets (GBP reviews — book-gap territory)

**Context:** first analysed real review (JP/A2→B1, glowing) contains **zero** geo, category, or
Cambridge terms. Google matches review text for local relevance + map-pack justifications.

**Decision:** shape future review ASKS (never the reviews) with nudge questions so reviews naturally
include, in priority order: (1) "academia de inglés", (2) barrio/geo (Barrio del Pilar, La Vaguada,
Madrid, or the student's origin barrio), (3) Cambridge/exam terms (B2 First, preparación),
(4) course type (adultos/niños/particulares), (5) full brand name, (6) proximity/metro phrasing,
(7) outcome phrasing ("aprobé el B2"). Owner replies also indexed → each reply naturally carries
category + geo + brand. No scripting/incentives (Google policy + filter risk).
**Why (book):** review text = user-generated **n-grams** (§5) feeding the same local terms the
homepage pillar owns; but reviews/GBP are the book's declared gap — external local-SEO practice
(review justifications, review velocity per the Madrid Norte plan) supplies the mechanism.
Ties to: review-gap = top free lever (madrid-norte-acquisition-plan-2026-07-24).

### 2026-07-27 — "Zonas" out of the header nav (brand call) + founder bios inlined on Sobre Nosotros

**Context:** Danny wants "Zonas" removed from the header ("looks very poor, not what we're about")
and moved to the footer, and founder info (Danny + JP) visible under `/sobre-nosotros/`.
Branch `feat/nav-zonas-footer-founder-bios`.

### Decision 1 — Remove the "Zonas" nav item; compensate with a footer hub link. Brand-driven, SEO-neutral.
**Why (book §4 interlinking):** the nav link (added in the cerca-de-mí PR) was never load-bearing
for the moat. The `por-barrios` hub keeps its full inlink set without it: breadcrumb up-links from
all 10 barrio pages, homepage `LocationsSection`, Cambridge/Linguaskill pages, blog pillar — plus a
**new sitewide footer link "Ver todas las zonas"** (both footer variants, next to the existing
10-barrio "Servimos:" row) and a new `Nuestro Equipo` footer link. Net sitewide inlinks to the hub:
unchanged (nav → footer swap). Tier structure intact; anchor text still descriptive.

### Decision 2 — Inline JP + Danny bios on `/sobre-nosotros/`; keep `/nuestro-equipo/` live. One intent = one page holds.
**Why (book §2):** `/sobre-nosotros/` = brand/about intent, `/nuestro-equipo/` = team/teacher intent —
different queries, no new page spun up, no cannibalization. The bios strengthen E-E-A-T on the about
page (real people, verifiable credentials — book §3 E-E-A-T). Role labels unified to the
`seo-system/brand/team.md` co-founder framing on BOTH pages ("Director de Estudios y Cofundador" /
"Cofundador") so the site tells one consistent entity story. The previously orphan-ish
`/nuestro-equipo/` (single inlink) gains a sitewide footer link.

---

### 2026-07-30 — Offer pivot: "clase de prueba" → "prueba de nivel" + new `/prueba-de-nivel-ingles/`

**Context:** Danny's call — the site is selling a *clase de prueba*, but the actual product is a
free 25-minute personalised level test plus a 100% personalised plan de estudios with JP, the
Director de Estudios. Branch `offer/prueba-de-nivel`.

### Decision 1 — Lead with "prueba de nivel", not "clase de prueba". Demand-driven.
**Why (book §1 MOTIVATION + §2 keyword levels):** Google Ads volume, Spain, pulled 2026-07-30:
`prueba de nivel de inglés` **1,300/mo** (Sept peak 3,600), `test de nivel de inglés` **1,300/mo**,
`prueba de nivel inglés gratis` 720/mo, `qué nivel de inglés tengo` 390/mo — against
`clase de prueba inglés` = **0 (no recorded volume)**. The site was headlining a zero-demand term
while the real offer, already documented in FAQ answers sitewide, was buried in the fine print.
Motivation is **P**roblem-solving ("I don't know my level") — the book's low-competition sweet spot.

### Decision 2 — Repurpose `/reservar-clase/` → `/prueba-de-nivel-ingles/` with a 1:1 301. One intent = one page.
**Why (book §2 anti-cannibalization + §3 slug rule):** no new page spun up — the conversion page
*becomes* the level-test page, so there is no second page chasing the same intent. Slug shortened to
the base keyword. GSC evidence that the old URL had nothing to protect (audit-2026-07-24):
`/reservar-clase/` earned **1 click in 16 months** (491 impressions, avg pos 15.6) and **0 clicks in
the last 28 days**; its only queries were brand terms. A true successor exists, so the 301 is a
genuine consolidation, not a weak topical redirect (contrast the standing "let dead URLs 404" rule).
All ~84 internal-link files repointed directly at the new URL — no redirect hops.

### Decision 3 — Do NOT bet on ranking the bare national head term. Local + conversion is the play.
**Why (book §1 landmine test):** page 1 for `prueba de nivel de inglés` nationally is owned by free
CEFR testing tools (British Council, Cambridge, EF) — a landmine for a single-location academy.
The page targets the head term in H1/title for visibility, but its job is converting existing
traffic, with geo long-tail (`prueba de nivel de inglés Madrid / La Vaguada / Barrio del Pilar`,
Level 5 "no volume ≠ no search") as the winnable ranking upside.

### Decision 4 — Interlink from the already-ranking "qué nivel necesito" blog cluster.
**Why (book §4 authority engine + §6 expand around winners):** `/blog/b1-universidad-espana/` and
`/blog/escala-cambridge/` already earn ~250 impressions/mo at positions 8–10 for
"qué nivel de inglés necesito/piden…" queries. Those pages answer *what level do I need*; the new
page answers *what level do I have* — the natural downline click. Expansion is tactical, around
pages already proven in GSC, not speculative.

### Decision 5 — Keep the Infantil (2–5) clase de prueba. Different product, not stale copy.
**Why:** a 1-hour trial class (Mon–Fri 17:30) is the age-appropriate assessment for 2–5 year olds;
a 25-minute level test is not. Retiring it would have replaced a real offer with an unusable one.
Competitor/market commentary in blog posts ("many academies offer trial classes") also kept — it is
factual reporting, not our CTA.

### Compliance note (not a book point)
`MetodologiaPage.tsx` carried an unqualified **"100% aprobados garantizado"** — a *guarantee* claim
rather than a historical result. Aligned to the phrasing used everywhere else on the site:
"100% de aprobados Cambridge en el curso 2024/25 (alumnos presentados)".

**Validation plan:** GSC — filter "URLs containing `prueba-de-nivel`" plus queries containing
"nivel"; watch impressions/position through the September peak (3,600/mo on the head term).
Baseline is zero. Ship before mid-August so the page is indexed before the spike.

---

### 2026-08-03 — Service pages round 1: `/cursos-ingles/*` rebuilt for GEO (42 → 93)

**Context:** the location-page programme closed at 96. GSC (2026-07-28) showed `/cursos-ingles/*`
earning **2 clicks from 1,025 impressions**, the weakest commercial surface on the site. Branch
`geo/service-pages-round-1`; full work record in `GEO-Content-Project/service-pages-ledger.md`.

### Decision 1 — Target demand we already receive, not the high-volume head terms.
**Why (book §5 Validation + §2 keyword levels):** the Competitor Gap Dashboard (DataForSEO,
2026-08-02) puts Impulse at **9 referring domains** against Cambridge House's 520 (DR 304) and
Kids&Us's 1,528. `academias de ingles madrid` (KD 26) has Cambridge House at #4 — not winnable this
year. The pages already had impressions and no clicks, which is a CTR and trust problem that on-page
work fixes without links. Head terms are logged as gated on the Madrid Norte referring-domain
campaign, not attempted here.

### Decision 2 — Focus keyword set from page × query attribution, not cluster totals.
**Why (book §2 broad-vs-narrow + §5 n-grams):** cluster-level `Queries.csv` has no page dimension.
A new `page_query_pull.py` (dimensions `["page","query"]`, 5,488 rows) showed the plan's targeting
was wrong in three places: `clases de inglés para niños en madrid` at position 1.6 is held by the
**homepage** on the `http://www` variant, not by `/primaria/`; `/cursos-ingles/adultos/` has 63
impressions of which **42 are brand lookups**, with the whole adults cluster (1,250 impr, pos 29)
sitting on `/academias-ingles-madrid/adultos/`; and `/online/`, `/particulares/`, `/secundaria/` have
7, 4 and 3 impressions, so their cluster-derived focus terms were unsupported. The generic "niños"
family stayed on `/infantil/`, which already ranks for it (569 impr, 94 queries).

### Decision 3 — No new pages; fold the winnable head terms into the existing hub.
**Why (book §2 consolidate synonyms + §4 everything links to the homepage):** the gap report proposed
`/academia-de-ingles/`, `/escuelas-de-ingles-madrid/` and `/clases-de-ingles-madrid/`. The first
collides with the homepage, which already targets *Academia de Inglés La Vaguada y Barrio del Pilar*;
the other two are synonyms of each other. With 9 referring domains the site cannot power four
near-identical pages. `curso de ingles madrid` (880/mo, **KD 11**, no rival ranking) becomes the
`/cursos-ingles/` hub's focus, with `clase de ingles madrid` (KD 4), `escuelas de ingles en madrid`
(KD 8) and `academias de idiomas madrid` drilled into H2/H3.

### Decision 4 — Reject the gap report's "re-aim `/academias-ingles-madrid/` at inglés cerca de mí".
**Why (book §2 one intent = one page):** the `cerca de mí` pillar shipped onto the **homepage** in
July 2026 — `cerca de m` appears in `src/pages/index.astro` and nowhere else. Moving the target would
cannibalise the site's highest-authority page.

### Decision 5 — Defer de-commercialising the two overlapping hub pages to the +4-week read.
**Why:** Danny chose "keep both doors, different signs" over consolidation, which §2 permits
("tiers are fluid — anchor text and link direction tell Google which role it plays"). But the
attribution in Decision 2 showed `/academias-ingles-madrid/adultos/` holds the adults intent
*outright*. Stripping its commercial signals now would de-target the only page Google associates with
that intent and hand it to a page with 21 non-brand impressions. Steps 1–7 land first; re-decide once
the service page has traction.

### Decision 6 — On-page work, all seven pages.
**Why (book §3 + §4):** titles ≤60 with `fullTitle` (five were being truncated by the brand chain)
and metas ≤160 (six of seven were 162–191); H1s carrying a place and a number; answer capsules ≤300
chars; **33 FAQ answers rewritten** because they opened with "Sí."/"No.", which the book forbids;
28 location FAQs added; every page now links **back to the homepage** (none did), up to the hub and
sideways to its siblings — `/cursos-ingles/online/` went from 1 inbound link to 21.

**Deliberate divergence from the book (§6 Expansion):** these pages are not proven winners — the
site's winners are PDF-hunter blog posts with near-zero commercial intent. Book-optimal and
business-optimal point different ways here; enrolments won.

**Validation plan:** baseline `/cursos-ingles/*` = 2 clicks, 1,025 impressions, positions 13.8–47.6
(`data/gsc/2026-07-28/`). Re-pull at +4 and +8 weeks with `gsc_pull.py --days 28` plus
`page_query_pull.py --filter cursos-ingles`, and read **position and CTR, not raw clicks** — July–
August is the seasonal trough and September is a 3× spike, so judge against the barrio/blog control
cohort. Titles must not change again for a quarter (§3).

---

## 2026-07-23 — Target keyword: "academia de inglés cerca de mí" (6,600/mo, ~#22)

**Context:** biggest generic local term in the niche; a proximity/"near-me" query. No page currently
targets it; homepage is anchored to "La Vaguada y Barrio del Pilar."

### Decision 1 — The **homepage** owns the term as the Tier-1 pillar; the `por-barrios` hub + 10 barrio pages are the interlinked Tier-2/3 moat.
**Why (book):**
- Homepage is the authority node and *already ranks #22* — Expansion step says **build the moat around the proven winner**, don't move the target to a zero-authority page.
- **One intent = one page** — chasing the term on both homepage *and* hub = self-cannibalization.
- **Broad-vs-narrow rule** removes the only risk (barrio dilution): broaden the H1/title/intro to "Madrid norte / cerca de ti," keep "La Vaguada"/"Barrio del Pilar" as H2 sub-sections.
- Rejected: new `/academia-ingles-cerca-de-mi/` page (don't spin up a thin page for a term you already rank for); hub-as-pillar (discards homepage traction/authority).

### Decision 2 — Optimise existing surfaces **this PR**; build new location pages (Herrera Oria, Valdeacederas, Fuentelarreina) as a **separate Expansion PR after validation.**
**Why (book):** **Validation precedes Expansion** — measure the term's avg position + the barrio cluster
(GSC "URLs containing academia-ingles") first; *"don't build hubs just to build hubs."* Then expand
around what's working, using the routing data in `Competitor info and direction for new location pages.docx`.

### Decision 3 — **Defer the homepage copy rewrite.** Ship the near-me signal through new surfaces, geo data and internal linking only; leave title, H1 and intro untouched.
**Why (book):** same principle as Decision 2 — **Validation precedes Expansion.** The homepage's barrio
consolidation merged the *same day* (`f29b3b9`) and has **zero GSC data**. Rewriting its title/H1/intro
now would overwrite an unmeasured change and make both experiments unreadable: if position moves, we
couldn't attribute it. Decision 1 stands — the homepage is still the Tier-1 pillar — but the
broad-vs-narrow rewrite of its copy waits for one GSC cycle on the barrio terms.

**Shipped instead (PR `seo/cerca-de-mi-pillar`):**
- Corrected the LocalBusiness `geo` pin (~500 m off) to the real GBP coordinates; added `geo.position` + `ICBM` head meta.
- Homepage FAQ + `FAQPage` schema, six proximity questions (metro/bus/coche/aparcamiento), answers <300 chars.
- "Cómo llegar desde tu barrio" routing block on the homepage — real metro L9 / bus / drive times per origin.
- "Zonas" header-nav entry → the `por-barrios` hub (it had no nav entry at all).
- Completed the lateral barrio ring + added homepage up-links, via a shared `NearbyAreas` component
  fed by a single `utils/barrioAreas.ts` list (the hand-maintained rings had drifted: several pages
  were missing Mirasierra and Montecarmelo/Las Tablas).

**Scope note:** the book has **no GBP/citations chapter** → the "citations" half of this keyword's
attack is a separate, off-repo workstream (GBP category, NAP consistency vs `utils/napData.ts`, reviews).

**Implementation plan:** `~/.claude/plans/handoff-saved-vectorized-ullman.md` (approved and executed
2026-07-23). Supersedes the earlier draft `twinkly-popping-gosling.md`, whose Deliverable B1
(homepage copy rewrite) is deferred by Decision 3.

---

## 2026-08-07 — Study-abroad blog cluster gets its own section: `/blog/extranjero/`

**Trigger:** the 21 study-abroad articles shipped carrying `category: Inglés en el extranjero`, a value
that existed in the markdown and **nowhere in the rendering code**. They rendered a *Cambridge B2 First*
badge, a *"Volver a B2 First"* link to `/examenes-cambridge/b2-first/`, a `paa-cambridge-b2` lead source,
and an "Aprender Inglés" related-articles ring that recommended podcasts and vergüenza-al-hablar.

### Decision 1 — A real section hub at `/blog/extranjero/`, with all 21 articles nested inside it.
**Why (book §4, Interlinking):** the cluster had no Tier-1. Its only "hub" was another article that
nothing linked to, and `/ingles-en-el-extranjero/` contained **zero** links to any of the 21 — the
*"go back and link the pillar down to the new pages"* step ("build the moat") was never done. Each
article now links up to a section that links down to all 21, and the pillar links down to both.

### Decision 2 — The hub deliberately does **not** target "estudiar inglés en el extranjero".
**Why (book §2, anti-cannibalisation):** **one intent = one page.** That term belongs to
`/ingles-en-el-extranjero/`, which is the page that sells. The hub is a Tier-1 *organiser* —
built to group and pass authority, not to rank — exactly the role the book describes for Tier 1.

### Decision 3 — Nest the articles under a shared path token rather than leave them flat under `/blog/`.
**Why (book §5, Validation):** *"put a shared keyword in every hub page's slug so you can filter GSC by
URLs containing [token] and judge the cluster as a whole."* Flat under `/blog/` the 21 shared no token
and could only be read article-by-article. `/blog/extranjero/` is now one GSC filter.

### Decision 4 — **No redirects.** The old `/blog/<slug>/` URLs are left to 404.
**Why:** Danny's call, on the grounds that the articles went live the same day (`9abac0c`, 2026-08-07)
and are not yet indexed. All 69 internal cross-links were rewritten, so nothing on the site points at
the old paths and the sitemap lists only the new ones. Consistent with the standing preference for a
clean 404 over a redirect where there is no accrued equity to preserve.
**Residual risk, accepted:** any old URL Google *did* crawl in that window, or any external link,
returns 404 rather than landing on the moved article. Reversible in minutes if GSC shows crawled 404s —
21 entries in `vercel.json`.

### Decision 5 — `ringGroup` now derives from the markdown category, not the slug regex.
**Why:** `ring_group()` in `gen_blog_directory.py` is order-sensitive, and its `academia|madrid` and
`precio` rules had already captured two cluster articles into foreign rings. The related-articles ring
is the cluster's internal link graph (book §4: *each article links to at least two others, treat the
list as circular*), so it has to be the cluster.

---

## 2026-08-07 — 30 articles for families and adult learners in the catchment

**Artifact:** `GEO-Content-Project/local-families-adults-blog-briefs.md`. Volumes and KD are live
DataForSEO Labs pulls (Spain/es); the SERP and PAA for the hub term are live Madrid pulls via
`/serp/google/organic/live/advanced`. Brief: attract families and adults within ~6 km, local intent.

### Decision 1 — "Local intent" is redefined as the audience and the proof, not the query string.
**Why (measured, not asserted):** across 354 pulled keywords the entire Madrid-modified space is
`academia de ingles madrid` 1.300 (navigational, KD 32), `clases de ingles madrid` 480 (KD 34),
`academia de ingles en madrid` 170 — and then a cliff to ≤30/mo, where the tail is almost entirely
navigational hunts for a named rival or a street (`…calle orense…`, `…chester…`, `…what's up…`).
The two real terms are **commercial heads that belong to service pages** — already ruled in
Decision 6 of the primaria/ESO entry. There is no 30-article blog set in geo-modified queries.
Each brief is therefore a decision-moment question answered with local proof (barrio, group size,
real price, JP, the 25-minute test) and linked into the local service pages.

### Decision 2 — `niveles de inglés` (14.800/mo, LOW, €1,49 CPC) becomes the hub of the set.
**Why (book §2, "find the tier you can compete with" + §4, hub formula):** it is the largest
legitimate non-dictionary term found, its page 1 is British Council plus **small academies**
(Kells College, Astex, St George's, angloeducativo) several on 2019–2023 content and one on
`http://`, and the AI Overview at position 1 **cites those same small academies** — so citation is
attainable. Its PAA is almost entirely self-assessment (*¿cómo saber si soy B2?*, *¿qué nivel da la
ESO?*, *¿el B1 equivale a bachillerato?*), which lands directly on the free level test.

### Decision 3 — Reject the national ESL-grammar and dictionary space a second time.
**Why (book §1, purchasing-intent test):** widening the seeds returned
`verbos irregulares en ingles` 40.500, `diccionario ingles` 33.100, `hola en ingles` 22.200,
`traductor a ingles` 18.100 and `portadas de inglés` 18.100 — the last being school notebook covers,
peaking at **165.000 in September**. Owned by Google, WordReference and DeepL. This independently
re-confirms Decision 2 of the primaria/ESO entry from a different seed set.

### Decision 4 — One new category, not four. `Niveles de inglés`, `hubPath` = the level test.
**Why:** the other 24 briefs map onto existing categories (Cambridge exams, Kids Primary/Secundaria,
Career, Learning Methods). Only the MCER-ladder cluster has no home. Its `hubPath` is
`/prueba-de-nivel-ingles/` rather than a course page because the question the reader arrives with
*is* the thing the test answers. Registered in all four required places — the union, the config,
`MD_TO_DISPLAY` and `order` — because a frontmatter category string alone silently falls back to
Cambridge B2 First (see the same-day entry on `/blog/extranjero/`).

### Decision 5 — The Cambridge "for Schools" family is carried over, Madrid-localised.
**Why:** 25 of 117 published pieces cover Cambridge exams and none covers the *for Schools*
versions school-age candidates actually sit. `a2 key for schools` is 110/mo at **KD 3** with page-1
rivals averaging 6,9 referring domains. The national head terms stay with `/examenes-cambridge/*`;
the blog takes the localised and parent-facing forms only.

**Honest ceiling, recorded so it is not a surprise later:** Cluster A is the only part with real
measurable volume. Clusters C and D are largely zero-volume decision content — the deliberate cost
of choosing local intent over national volume. **Judge them on enquiries, not clicks.** Publish
A and B before September (`academia de ingles` 9.900 → 27.100; `academia de ingles madrid`
1.300 → 2.900).

---

## 2026-08-07 — `/blog/mejor-academia-ingles-tetuan/` (Local Madrid)

### Decision 1 — The blog piece takes the *comparison* intent; `/academia-ingles-tetuan/` keeps the *money* intent.
**Why (book §"Anti-cannibalization", one intent = ONE page):** the live SERP for
`mejor academia de ingles tetuan`, `academias de ingles en tetuan` and `academia ingles tetuan madrid`
returns a **near-identical top 4** (inglesmadrid.es, englishconnection.es, skippinandkids.com,
kidsandus.es). Google is treating these as one intent, so a second Impulse page aimed at
"academia de inglés en Tetuán" would have competed with our own location page.
The article is therefore built as a buyer's guide (criteria, comparison table, price method) and
links **down** to `/academia-ingles-tetuan/` with that anchor. Per the book's "tiers are fluid"
note, the link direction and anchor tell Google which page plays the money role.

### Decision 2 — Lead with the price-opacity gap, because it is the one thing no rival gives.
**Why:** all five Tetuán academies were scraped on 2026-08-07 and **none publishes a tariff**.
Impulse does (from 64 €/mes, matrícula 45 €, libro máx 40 €). That is a verifiable differentiator
rather than an adjective, and it also answers the strongest PAA on the query
(*¿Cuánto cuesta What's Up?*) and the related search *Academias de inglés en Madrid baratas*.

### Decision 3 — Do not fabricate competitor prices. Say "no publicado" instead.
**Why:** the 2025 article `academias-ingles-vaguada-barrio-pilar.md` invented per-month price bands
for seven named rivals. Every competitor figure in this piece is either quoted from their own site
and attributed as their claim (English Connection's self-reported 90% Cambridge pass rate) or
recorded as absent. Design contract also bars linking any competitor.

**Opportunity noted:** this query currently has **no AI Overview and no featured snippet**. The
opening 80 words are written as a direct, quotable answer to take that slot.

**Watch for cannibalization** against the existing static pages `/blog/mejores-academias-madrid/`
and `/blog/mejores-academias-madrid-norte/` — different (city-wide) intent, but same family.

---

## 2026-08-07 — `/blog/mejor-academia-ingles-chamartin/` (Local Madrid)

### Decision 1 — Publish despite near-zero volume, as an authority/comparison asset.
**Why (book §2, Keyword Levels 4–5, "no volume ≠ no search"):** measured on 2026-08-07 via Google
Ads (Madrid, es), `mejor academia de ingles chamartin` returns **no volume record at all**;
`academia de ingles chamartin` and `academias de ingles chamartin` are **10/mo** each — but at
**HIGH competition (index 93) and 5,38 € CPC**, i.e. the handful of searches are commercially
expensive. `mejores academias de ingles madrid` is 40/mo. This is a Tier-4/5 long-tail play.
**Judge it on enquiries, not clicks** — same honest ceiling recorded for the local cluster above.
**Winnability (book §2, "ripe for the picking"):** no page-1 result uses the exact phrase in its
title tag; the organic #1 is a *"cerca de Chamartín"* page from a centre that is not in the district.

### Decision 2 — The article does NOT reuse the Tetuán angle. Different district, different gap.
**Why (book §2 anti-cannibalization + the 3-gram uniqueness lesson from the barrio pages):** the
Tetuán piece leads on **price opacity** ("none of the five publishes a tariff"). That hook is
**false in Chamartín** — The English Exam Centre publishes 340 €/325 € per course, and both it and
Cambridge House publish a maximum class size. Reusing the Tetuán frame would have been factually
wrong *and* near-duplicate. Chamartín's real gap is the **unit of measurement**: a course price and
a monthly price are not comparable, so the piece teaches the conversion (340 € = ~38 €/mes over 9
months, ~113 €/mes over 3) and the three questions that close it.

### Decision 3 — Lead filter is "the name is not an accreditation", stated without accusing anyone.
**Why:** the zone contains centres branded *Exam Centre* and *Examination Institute*. The article
separates **centro preparador** / **centro examinador** / "reconocido por Cambridge", and sends the
reader to Cambridge English's own centre finder plus one plain question ("el día del examen, ¿entro
por esta misma puerta?"). **No negative claim is asserted about any named centre** — only what each
site says about itself. This is also Impulse's genuine differentiator: Cambridge *preparador*, and
official **Linguaskill** centre where the test is actually sat (certificate in 48 h).

### Decision 4 — Comparison intent to the blog; money intent stays with `/academia-ingles-chamartin/`.
**Why (book §4, "tiers are fluid" — anchor + link direction assign the role):** the location page
already exists and targets the money term. The article links **down** to it with the location anchor,
plus `/academia-ingles-plaza-castilla/` (the actual interchange on the route) and the Tetuán sibling,
keeping the Local Madrid ring circular.

**Data provenance:** every competitor fact was fetched from the centre's own site or its Google
listing on 2026-08-07 and is attributed as their claim; absent data is recorded as **"No publicado"**,
never estimated. Two centres (EEI, The Green Monkey) refused the fetch — they appear with address
only, no invented detail. Continues the Decision-3 rule from the Tetuán entry.

**Opportunity noted:** the SERP has a local pack + a `compare_sites` carousel but **no AI Overview
and no featured snippet** on the exact phrase. The `paaAnswer` and opening 80 words are written as a
direct, quotable answer to take that slot. 5 of the 8 FAQs are verbatim PAA questions scraped the
same day (deliberately a *different* selection from the Tetuán piece to avoid duplicate FAQ blocks).

---

## 2026-08-07 — `/blog/mejores-academias-ingles-tetuan/` (listicle format)

### Decision 1 — The listicle and the guide are separate pages. Danny's ruling.
**Why:** I flagged that `mejores academias de inglés en Tetuán` overlaps
`/blog/mejor-academia-ingles-tetuan/` (shipped the same day) and `/academia-ingles-tetuan/`, and
that the live SERP returns a near-identical top 4 for the singular and plural forms — which by the
book's "one intent = ONE page" rule reads as one intent. **Danny's call: they are different pages.**
Proceeding on that basis. The separation held in the writing: the guide answers *how to choose*
(six criteria, process, no ranking); the listicle *is* the ranking. **Watch GSC for the two
swapping positions on the same query** — that is the signal the split did not hold.

### Decision 2 — A brand-owned ranking, stated openly, with competitors as facts only.
**Why (standing instruction, not an SEO judgement):** these are local rivals. They get address,
ages, method and price-transparency taken from their own sites, and no verdict of any kind. We do
not call a competitor "ideal para" anything, and we do not attack one. Impulse is entry 1.
To keep that honest rather than covert, the page carries a "Cómo hemos ordenado esta lista"
section that says outright that Impulse publishes the list and states the four ranking criteria.
Enforced mechanically in `scripts/lib/listicle.js`; ten regression cases in `test-listicle.js`.

### Decision 3 — Answer-first ordering, because retrieval rewards it.
**Why:** ranked/numbered lists make up 71–86% of the listicles AI answer engines cite, and the
Princeton/Georgia Tech GEO paper measured up to ~40% visibility lift from statistics, direct quotes
and citations. So the page order is verdict (≤80 words, becomes `paaAnswer`) → compact ranking →
comparison table → the expanded entries. The first three are the extraction surface and the gate
**errors** if any of them falls below the first entry. Also emits `ItemList` schema, verified in
`dist`: 6 positions, contiguous, Impulse at 1, no competitor URLs.

### Decision 4 — Primary research = verified Google reviews, not interviews.
**Why:** customer interviews are not available (Danny). The listicle quotes one verbatim review
from the 183-review pull, matched character-for-character by the gate. Reviews are allocated one
per page across the site, so this run used **Concep R. H**, previously unallocated.

**Ceiling to record:** this is a self-ranked list. It will not be cited as a neutral roundup, and
it should not pretend to be one. Its value is the comparison table and the price-transparency
finding (five of six publish no tariff), both of which are verifiable and neither of which the
rivals publish.

### Amendment (same day) — rebuilt as a ranked LISTICLE via `seo-blog-writer --format listicle`.
Danny's call: the guide version above was replaced by a ranked listicle at the **same URL**
(`assemble.js --slug mejor-academia-ingles-chamartin`, so nothing moved). Rationale matches the
listicle guide's own test: `mejor/mejores academias de inglés en Chamartín` presupposes a ranking,
so a ranked, numbered, modular page is the right shape. It ships **ItemList schema** (7 ListItem
nodes) plus the FAQPage, which the guide version could not. FAQ is **7 of 8 verbatim PAA (87%)**.

**What changed in substance.** The competitor set is now drawn from the run's own Firecrawl scrapes
plus a same-day Google Maps check: Number 16 School (P.º de La Habana 12) enters; The Bridge is
**excluded and the exclusion is stated in the article**, because it publishes neither address,
group size nor price, so it has nothing to compare. Two honest caveats were added that the guide
version lacked: that a review **count** measures age rather than teaching quality, and that
"No publicado" is a missing datum rather than a defect. Competitor blocks carry verified facts and
no adjectives, per the standing "we do not recommend a rival" instruction.

**Two pipeline defects found and fixed while shipping this (both silent — validation passed clean
while the rendered page was wrong).** Recorded because they affect every article, not just this one:
1. Inline `<a href>` written as raw HTML in the body was half-escaped to `<a href="…"&gt;text</a&gt;`
   and rendered as visible text. Markdown links convert correctly; raw inline HTML anchors do not.
2. `mdToHtml()` in `scripts/lib/cms-impulse-astro.js` had **no markdown blockquote branch**, so the
   listicle format's mandatory verbatim review (`> quote`) was escaped into `<p>&gt; quote</p>`,
   losing the `<blockquote>` styling DESIGN.md defines. Fixed in the skill; all 10 `test-listicle.js`
   gate cases still pass. **`/blog/mejores-academias-ingles-tetuan/` is still live with this defect.**

---

## 2026-08-08 — Two false claims retired from the Tetuán cluster

### Decision 1 — "8 minutos en el bus 147 desde Tetuán y Valdeacederas" removed sitewide.
**Why:** checked independently against the web, on Danny's instruction. Spanish Wikipedia's
line-147 article gives the route as Plaza de Callao ↔ Barrio del Pilar via Paseo de la Castellana,
with **no stop on Bravo Murillo and none in Valdeacederas** — which is where Metro Tetuán and
Valdeacederas actually are. The published EMT timetable puts **Ginzo de Limia - Ferrol → Plaza de
Castilla alone at 12 minutes**, and Plaza de Castilla is the *northern edge* of Tetuán, so any trip
from Metro Tetuán is longer still. Both halves of the claim were wrong.

**Danny's ruling:** keep the route, drop the number, until a real door-to-door time is confirmed.
Corrected in the listicle, the guide, `TetuanPage.tsx` (11 places incl. H1, hero badge, image alt
and **three FAQ answers that generate FAQPage schema**), the `.astro` title and meta description,
and the homepage `LocationsSection` bus row. The page's hook survives: "Bus 147 directo desde
Tetuán" is confirmed true.

**Deliberately left alone:** the Montecarmelo→L9 "~8 min" row and the Tetuán car route "8-12 min".
Different claims, no evidence against them. Replacing a number I cannot source with another number
I cannot source is the same error twice.

### Decision 2 — "La única con acreditación oficial de Cambridge y de Linguaskill" removed.
**Why:** false. English Connection prepares A2 Key→C2 Proficiency and Skippin and Kids prepares
Cambridge certifications, both stated on their own sites. **"La única que publica sus precios"
stays** — that one was checked: five of six publish no tariff anywhere.

### Decision 3 — Reviews render as review cards, minimum four.
**Why:** v1 shipped its single review as bare body text — `dist` had zero `<blockquote>` elements,
so no stars, no Google mark, no author. On branded queries ~57% of citations go to reviews and
social proof, so the format was giving that away. Now five verbatim reviews render through the
site's own `<GoogleReviews>` component. Gate: 4 minimum, matched character-for-character against
`reviews.json`, and any author already in `review-allocation.md` is blocked — no review appears
twice on the site.

### Decision 4 — Stop publishing directions to competitors.
**Why:** entries carried nearest-metro and bus-line detail for rivals. Their address identifies the
business and stays; wayfinding is free help for a competitor, published on our own page.

---

## 2026-08-08 — Listicle title/description, and one canonical entity name

### Decision 1 — Listicles drop the brand chain from `<title>`; the brand moves to the social card.
**Why:** the title was 66 chars (truncates near 60) and `buildPageTitle` was injecting
"La Vaguada" — a *competing location term* on a page targeting Tetuán, muddying a geographic signal
that is already stretched. New title is **50 chars, ranked, numbered and dated**:
`Las 6 mejores academias de inglés en Tetuán (2026)`. Ranked/numbered titles are the pattern that
dominates AI citations, and the number was missing entirely.

Scoped to listicles only (`fullTitle={!!data.listItems}` in `blog/[slug].astro`) — Danny's call.
Ordinary articles keep the chain. New `ogTitle` prop on `BaseLayout` carries
`… | Impulse English Academy` on the social card, which has no length limit. `metaTitleMaxLength`
raised 41 → 60, since the brand chain no longer eats the budget.

### Decision 2 — Description sells the differentiator, not filler.
Replaced ~43 characters of nothing ("Encuentra la formación que tú necesitas hoy") with the finding
that earns the click and gets lifted: **"Solo una publica precios: desde 64 €/mes."**

### Decision 3 — One canonical entity name.
Four variants existed. `og:site_name` and `meta[name=publisher]` rendered
`Impulse English Academy La Vaguada, Barrio del Pilar`; `NAP.legalName` was a third form. Both now
`Impulse English Academy`, identical to `NAP.name` and the schema publisher/author. `alternateName`
reduced to the genuine short form so the canonical name is not an alias of itself. Location lives in
the address fields. **`buildPageTitle`'s location suffix is deliberately NOT changed** — that would
rewrite all 183 title tags including the La Vaguada and Barrio del Pilar location pages, where the
suffix is accurate. Open question, recorded rather than bundled in.

⚠️ Off-code half still outstanding: GBP, directory listings and review replies must use the same
single name or the fragmentation persists where it matters most.

### Decision 4 — Section depth: measured, mostly a non-issue.
The ~94 words/section average was an artefact of averaging FAQ H3s and ranked entries together.
Measured separately, the prose sections were already 167–239 words. The six entries are capped at
40–90 **by the listicle gate, on the original spec** ("each item must survive being torn out");
padding them to 120+ would break the format. Only real fix: the Comparativa section was a table with
one sentence of lead-in, now 205 words explaining how to read it and which column decides.
Non-entry sections now average **181 words**.

### Amendment 2 (2026-08-08) — rebuilt on the updated writer; consolidated to ONE URL.

**One page, not two.** The guide version and the listicle had been sitting at
`/blog/mejor-academia-ingles-chamartin/` and `/blog/mejores-academias-ingles-chamartin/` with the
**same H1, same title and near-identical bodies** — self-cannibalisation of exactly the kind the
book's "one intent = ONE page" rule exists to prevent. The singular slug was deleted. **No redirect
was added**: it had never been committed or deployed, so the URL never existed publicly (standing
preference: a 404 over a weak 301 where there is no live predecessor). The surviving slug matches
the sibling listicles (`-tetuan`, `-plaza-castilla`, `-fuencarral-el-pardo`).

**Also deleted: 5 Desktop-sync twins** (`… 2.md`) sitting in the content collection, each of which
Astro was building as a **live duplicate page on a URL containing a space**. Blog pages 111 → 105,
exactly the 6 removed. This is the sync-duplicate trap biting the content collection rather than
`dist/`.

**Rewritten against the updated pipeline.** The material change is reviews: the listicle contract
now requires a `## Reseñas verificadas en Google` section of **4+ verbatim reviews**, lifted into
`googleReviews` front-matter and rendered as real Google review cards (stars, Google mark, author)
instead of one blockquote of body text. Reviews consumed by this page, none previously allocated
and each evidencing a different criterion:

| Author | Evidences |
|---|---|
| rorik09 | C1 obtained with the director |
| Karina Garcia | attention to individual needs |
| Stefany Jiménez Espitia | intensive summer course |
| Jose Hernandez | parent, children's progress |

`Lidia Ramirez` was rejected despite passing the filter: it names "Stephan", a misspelling of a
former teacher on `excludeMentioning`, so the spelling slipped the gate while the dating problem
the exclusion exists to prevent remained. **The exclusion list matches literal spellings only.**

**Ranking criterion, stated in the article:** how much a reader can learn *before phoning* — centres
publishing both group size and price first, then one of the two, then neither. Teaching quality is
explicitly not ranked, because we have no honest way to measure it in a centre that is not ours.
`The English Exam Centre` was re-verified from its own site on 2026-08-08 and publishes both (6–9
per class, 340 €/325 € per course), so it ranks second on its own disclosure.

**The comparison table.** Cut to **4 columns** (Academia · Zona · Grupo máximo · Precio publicado)
and given the scrolling wrapper that `index.css` had described in a comment for months without
anything implementing it: tables rendered into a 68ch column with no `overflow-x`. Fixed in
`PAAArticlePage` (`wrapTables()`) plus `.table-scroll` rules, so the reading measure now applies to
text elements and a table may use the full column. This repaired **all 20 collection-rendered
articles with tables**, not just this one. The other 44 blog pages with tables are static `.astro`
wrappers that already carried their own `overflow-x-auto` and were never affected.

**Gates:** assemble validation clean at 2282 words, `errors: []`; ItemList (7 ListItem) + FAQPage
(8 Question) + Article; FAQ **6/8 verbatim PAA (75%)**; title 58 chars via the listicle
`fullTitle` path; `verify:design` ALL PASS with token debt unchanged at 793.
