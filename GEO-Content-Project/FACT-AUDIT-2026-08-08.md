# Fact audit — homepage, cursos, precios, nosotros, testimonios, contacto, FAQ hub

**Date:** 2026-08-08 · **Branch:** `seo/gbp-pack-nap-consistency` · **Blog excluded.**

**Method.** Clean rebuild (`rm -rf dist && npm run build`, 188 pages, 0 sync twins), then every
claim extracted from `dist/<route>/index.html` — the built output, not source. That is what visitors
and Google actually receive, and it excludes dead components and `.bak`/`" 2"` twins by construction.
**691 claims** extracted across **14/14 routes**, classified into 16 categories, then adjudicated
against the source hierarchy in the plan. Source line numbers below are where the fix goes; the
verdict comes from `dist/`.

**Guard that paid off.** `ValuesSection.tsx` and `InfoCards.tsx` both carry "150+", and
`CoursePageLayout.tsx` carries the retired academy name — all three have **zero importers** and ship
nowhere. A source-based audit would have reported them as live defects. They are excluded.

---

## Summary

| Severity | Count | What |
|---|---|---|
| **P1 — publish risk** | 2 | A pass guarantee and an unsourced salary statistic |
| **P2 — contradicts a governing source** | 4 | Adult group size, Friday hours, review count, retired entity name |
| **P3 — page contradicts itself** | 3 | Metro walk time, pass-rate year, course taxonomy |
| **P4 — true but unqualified** | 1 | Bare "100% aprobados" |
| **P5 — gap / inconsistency** | 3 | `A consultar` pricing, missing FAQPage schema, homepage nativeness meta |

**The FAQs are indeed the worst surface, and you were right to single them out.** 8 of the 13
defects live in FAQ answers. Every one traces to the same root cause: FAQ answers are hand-written
prose that reads from no shared constant, while prices, NAP and rating all read from
`utils/napData.ts`. Prose drifted; the constants did not.

**Good news first.** The structured data is clean. Every in-scope route emits `ratingValue: 5`
and `reviewCount: 183` — schema is consistent across all 14. Address (`Av. de El Ferrol, 22` /
`28029`) and phone (`604 910 611`) are consistent everywhere. Prices on the course pages match the
approved contract exactly. No `+1.000 alumnos` appears on any in-scope page.

---

## P1 — Publish risk

### P1.1 — A pass **guarantee** is live on /contacto/
`pages/ContactoPage.tsx:40` (FAQ answer, "¿Cuánto cuesta una academia de inglés?")

> "En Impulse ofrecemos **garantía 100% aprobados Cambridge** con excelente relación valor-calidad."

This is the exact form `SEO-Decisions-Log.md:838` retired on 2026-07-30 — the log records the
guarantee wording being replaced with "100% de aprobados Cambridge en el curso 2024/25 (alumnos
presentados)" across 21 of 104 occurrences. This one survived the sweep. It is the only
"garantía" + pass-rate construction left on the site, and it promises a future outcome rather than
reporting a past result.

**Verdict: CONTRADICTS.** Recommend replacing with the approved qualified form.

### P1.2 — An unsourced salary statistic on /cursos-ingles/adultos/
`pages/cursos/AdultosPage.tsx:103` (FAQ answer)

> "Estadísticas muestran **15-25% aumento salarial** con B2/C1. […] Inversión en inglés
> (**1000-1500 €**) se recupera en aumento salarial en menos de 1 año. **ROI clarísimo.**"

"Estadísticas muestran" cites nothing. No approved-facts source contains this figure, and the
"1000-1500 €" investment band is not a published Impulse price. This is the single largest
**UNSOURCED** claim on the in-scope pages, and it is an earnings claim.

**Verdict: UNSOURCED.** → Question 1.

---

## P2 — Contradicts a governing source

### P2.1 — Adult group size published as 10; approved figure is 8
Approved (`impulse-english.facts.md:14`, Danny 2026-08-03): Infantil **7** · Primaria **10** ·
Secundaria **10** · Adultos **8** · Online **8** · Particulares 1:1.

| Where | Says | Should be |
|---|---|---|
| `pages/PreguntasFrecuentesPage.tsx:67` | "máximo 10 alumnos en primaria/secundaria/**adultos**" | adultos = 8 |
| `components/CoursesSection.tsx:63` (homepage, "First, Advanced y Proficiency") | "Máx. 10 alumnos" | adult exam prep = 8 |
| `components/CoursesSection.tsx:55` (homepage, "Cambridge Extensivo" B1-C2) | "Máx. 10 alumnos" | depends — see Q2 |

The course pages themselves are correct (`/cursos-ingles/adultos/` says "máximo 8" in four places).
So the homepage and the FAQ hub overstate class size for adults against the academy's own course
pages — a prospect comparing the two sees a conflict.

**Verdict: CONTRADICTS.**

### P2.2 — Friday hours: 15:30 vs 13:30, on two pages, one of them twice
`utils/napData.ts:76` — the declared single source of truth, which also feeds
`openingHoursSpecification` in your structured data — says **Viernes 13:30-19:30**.

| Where | Says |
|---|---|
| `utils/napData.ts:76` + JSON-LD (all 14 routes) | **13:30** – 19:30 |
| `pages/ContactoPage.tsx:219` (hardcoded hours block) | **13:30** – 19:30 |
| `pages/ContactoPage.tsx:35` (FAQ answer) | **15:30** – 19:30 |
| `pages/PreguntasFrecuentesPage.tsx:55` (FAQ answer) | **15:30** – 19:30 |

`/contacto/` renders both figures on the same page — I confirmed both strings in
`dist/contacto/index.html`. Someone reading the FAQ and the hours panel gets two different answers,
and one of them disagrees with what Google is told.

**Verdict: CONTRADICTS** (schema + napData agree on 13:30; two FAQ answers dissent). → Question 3.

### P2.3 — Review count: 150+/155+ still live, against 183
`reviews.json` (pulled 2026-08-05) and `napData.ts:173` both say **183**, and every route's
JSON-LD emits 183. Visible copy on two routes still says otherwise:

| Where | Says |
|---|---|
| `pages/TestimonialsPage.tsx:148` | "**155+** Reseñas 5 Estrellas" |
| `pages/TestimonialsPage.tsx:272` | "**150+** Familias Nos Dan 5 Estrellas" |
| `pages/TestimonialsPage.tsx:329` | "más de **150** familias" |
| `components/LocationsSection.tsx:170` (homepage) | "**150+**" |

`/testimonios/` is the worst case: its own `<meta description>` says 183 while the page body says
155+ and 150+. Your reviews page under-sells the review count by 33.

**Verdict: CONTRADICTS.** Already ruled by you (commit `139f2da`: "Reviews: publish 183"). No new
ruling needed — this is unfinished application of a decision you already made.

### P2.4 — The retired entity name is still in body prose
The branch you're on dropped "La Vaguada" from `legalName` on entity-consolidation grounds
(`napData.ts:8-11`). Four body-prose sentences still carry the old name:

- `pages/SobreNosotrosPage.tsx:205` and `:243` — JP's and Danny's bios
- `pages/NuestroEquipoPage.tsx:131` and `:172` — the same two bios, duplicated

**Scope note:** the string appears on 91 pages sitewide, but the rest are **alt text** and
client-side `document.title` calls, which are lower-severity and mostly on out-of-scope pages.
The four above are the ones a reader actually reads.

**Verdict: CONTRADICTS.**

---

## P3 — Page contradicts itself, no governing source

### P3.1 — Metro walk time: 3, 4, 6 and 500 metres all ship
`components/LocationsSection.tsx` contradicts itself **within one component**:

| Line | Says |
|---|---|
| `LocationsSection.tsx:54` | "a **4 minutos** andando del Metro" |
| `LocationsSection.tsx:101` | "Línea 9 - Barrio del Pilar (**4 min**)" |
| `LocationsSection.tsx:187` | "a **3 minutos** andando del metro de Barrio del Pilar" |
| `LocationsSection.tsx:218` | "más **3 minutos** andando hasta la academia" |
| `components/PriceLocationCards.tsx:25` (7 cursos pages) | "a **3 min** andando" |
| `pages/ContactoPage.tsx:31` + `:163` | "a solo **500 metros**" |
| homepage hero area | "A **6 minutos** de Línea 9" |

The GBP pack settled on 3 minutes. Nothing in the repo governs it formally.
**Verdict: INCONSISTENT.** → Question 4.

### P3.2 — Cambridge pass rate: five different wordings, two different course years
The approved form (`impulse-english.facts.md:19`) is exactly:
*"100% de aprobados Cambridge en el curso 2024/25 (alumnos presentados)"* — always qualified.

| Wording | Where |
|---|---|
| ✅ "…en el curso 2024/25 (alumnos presentados)" | secundaria, adultos, online |
| ⚠️ "100% aprobados Cambridge 24/25 (presentados)" | cursos index, primaria, secundaria |
| ❌ "100% de aprobados en exámenes Cambridge **2025/26**" | homepage (`NewsOverlay.tsx:16`) |
| ❌ "100% de aprobados Cambridge **2025/26**" | `SobreNosotrosPage.tsx:16` (badge) |
| ❌ "100% de aprobados Cambridge B2 First en **2025/26**" | `NuestroEquipoPage.tsx:242` |
| ❌ "100% Aprobados **24/25**" | `NuestroEquipoPage.tsx:91` (badge) |
| ❌ "100% de aprobados Cambridge (alumnos presentados)" — **no year** | `CursosOverviewPage.tsx:103` |

`/sobre-nosotros/` states **both years on one page** (badge says 2025/26 at line 16, body says
2024/25 at line 208). `/nuestro-equipo/` does the same in reverse.

The two contracts disagree with each other: `impulse-english.facts.md` approves **only 2024/25**;
`blog-batch-windows/_CONTRACT.md` says 100% holds for B2 First in **both 2024/25 and 2025/26**.
**Verdict: NEEDS RULING.** → Question 2.

### P3.3 — The homepage sells a course taxonomy the site no longer has
`components/CoursesSection.tsx` cards are: *Inglés general · Preparación MOVERS · Extensivos ·
Preparación KET · Preparación FLYERS · Cambridge Extensivo · First, Advanced y Proficiency.*

`/cursos-ingles/` sells: *Infantil · Primaria · Secundaria · Adultos · Particulares · Online.*

These are two different product structures. The homepage is the highest-authority page on the site
and it doesn't describe the courses the rest of the site sells.
**Verdict: INCONSISTENT.** → Question 5.

---

## P4 — True but unqualified

`components/CoursesSection.tsx:63` renders a bare **"100% aprobados"** chip — no exam named, no
course year, no "(alumnos presentados)". `CursosOverviewPage.tsx:103` drops the year.
`SobreNosotrosPage.tsx:16` and `NuestroEquipoPage.tsx:91` drop "(alumnos presentados)".

The claim is true; stripped of its qualifier on the homepage it reads as a standing promise, which
is the exact failure mode the 2026-07-30 decision was meant to close.
**Verdict: UNQUALIFIED.** → Question 2 (covers the wording).

---

## P5 — Gaps and inconsistencies

### P5.1 — `/precios/` says "A consultar" for two courses that have published prices
`pages/PreciosPage.tsx:83` and `:90` show **"A consultar"** for particulares and online, while
**29 €/hora** is published on `/cursos-ingles/particulares/`, on the cursos overview, in
`napData.ts:93` (`priceRange: "€29/hora - €99/mes"`) and on your GBP.
Your price page is the one place a prospect looks for the price, and it's the one place that
withholds it. **Verdict: INCONSISTENT.** → Question 6.

### P5.2 — Two pages render visible FAQs that emit no FAQPage schema
`/sobre-nosotros/` (4 Q&As) and `/contacto/` (9 Q&As) declare `faqs` as `const` instead of
`export const`, so the `.astro` wrapper can't import it and no `FAQPage` node is generated. 13
question/answer pairs are invisible to Google. `/testimonios/` has no FAQ block at all.
**Verdict: GAP** (SEO, not accuracy — bundled per the plan, say the word to drop it).

### P5.3 — "Profesores nativos" asserted flatly on the homepage, hedged everywhere else
| Where | Says |
|---|---|
| `src/pages/index.astro:66` (homepage meta description) | "profesores **nativos**" |
| `pages/NuestroEquipoPage.tsx:15` | "profesores nativos **y bilingües certificados**" |
| `pages/PreguntasFrecuentesPage.tsx:237` | "**Algunos** nativos, otros bilingües" |

The two FAQ answers agree with each other. The homepage meta description — the line that appears
in Google's search results — is the outlier. **Verdict: CONTRADICTS.** → Question 7.

---

## Questions only you can answer

Numbered for easy reply — "1: cut it, 2: both years, 3: 13:30…" is enough.

1. **Salary claim (P1.2).** "15-25% aumento salarial", "ROI clarísimo", "inversión 1000-1500 €" on
   `/cursos-ingles/adultos/`. Cut it, or do you have a source I can cite?
2. **Pass rate (P3.2, P4).** Which is true — 2024/25, 2025/26, or both? Your two contracts disagree.
   And should I standardise every instance to one exact wording, including "(alumnos presentados)"
   on the homepage and the badges?
3. **Friday hours (P2.2).** 13:30 or 15:30? `napData.ts` and your Google structured data currently
   say 13:30, so this is the answer that's already live to Google.
4. **Metro walk time (P3.1).** 3 minutes, 4 minutes, or 500 metres? I'd standardise on 3 (the GBP
   pack's figure) unless you say otherwise.
5. **Homepage course cards (P3.3).** The homepage sells MOVERS/KET/FLYERS/Extensivos; the site sells
   Infantil/Primaria/Secundaria/Adultos/Particulares/Online. Should I rebuild the homepage cards to
   match the real course structure? This is a bigger change than the rest — flag if you'd rather
   handle it separately.
6. **`/precios/` (P5.1).** Publish 29 €/hora for particulares and online, or keep "A consultar"?
7. **"Profesores nativos" (P5.3).** Are all teachers native, or is "nativos y bilingües certificados"
   the accurate line? If the latter, the homepage meta description needs changing.
8. **Adult group size (P2.1).** Confirming: adults = 8, so the homepage "Máx. 10" on the
   First/Advanced/Proficiency card and the FAQ-hub "adultos: 10" are both wrong. Correct?
9. **FAQPage schema (P5.2).** Bundle the sobre-nosotros/contacto schema fix into this pass, or leave it?

## What I'll do without asking, once you've ruled

These have an unambiguous governing source and need no decision from you:

- Replace `155+` / `150+` / "más de 150 familias" with `NAP.aggregateRating.reviewCount` (183),
  using the pattern already in `components/GoogleReviews.tsx:96` — so it can never drift again.
- Replace the retired guarantee wording on `ContactoPage.tsx:40` with the approved qualified form.
- Point `ContactoPage.tsx:213-219` and both FAQ hours answers at `NAP.openingHoursText` instead of
  restating hours in prose.
- Drop "La Vaguada" from the four founder-bio sentences.
- Correct adult group size to 8 on the FAQ hub and homepage.

## Out of scope, logged not fixed

- **22 article files still ship "+1.000 alumnos"** against your 960 ruling — all blog, all in
  `dist/`. Largest single fact defect in the repo. The `verify:facts` gate will catch it whenever
  you want it fixed.
- The retired entity name in **alt text** on ~87 out-of-scope pages (ubicaciones, blog,
  examenes-cambridge). Low severity, mechanical, happy to sweep it separately.
