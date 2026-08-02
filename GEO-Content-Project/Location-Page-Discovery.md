# Location Page Discovery — what ranks, what to build, what to skip

**Data:** Google Search Console, `sc-domain:impulse-english.es`, **2026-05-03 → 2026-07-31 (90 days)**,
pulled live 2026-08-02 via `impulse-seo-ops/gsc_pull.py`. Cross-checked against DataForSEO Labs
(ranked keywords + Google Ads volumes) and the live GBP.

---

## 0. Read this first — two data traps

### Trap 1: DataForSEO says your barrio pages don't exist. GSC says they work.
DataForSEO Labs shows **exactly one** barrio page ranking for anything
(`/academia-ingles-montecarmelo-las-tablas/`, 1 keyword, pos 11-20, ETV 0.46). That is a
false negative: DataForSEO's index only carries keywords with tracked volume, and barrio
terms sit at 0–40/mo, below its floor.

GSC shows **all ten pages getting impressions and clicks**. GSC is the ground truth here.
Never judge these pages by third-party keyword tools.

### Trap 2: ~80% of the barrio impressions are synthetic.
A single query template — **"mejor academia de inglés para niños en [X], madrid"** — accounts for:

- **87 distinct queries**
- **7,008 impressions**
- **0 clicks**

Impressions cluster suspiciously (median 93, most between 93 and 142) across places as
unrelated as Valverde, Berruguete, Canillas, Barajas and Hortaleza, mostly at positions 1–5.
Real human demand does not distribute like that, and position-1 traffic does not produce
zero clicks. **This is a bot or query-expansion artefact, not demand.**

Every number below has this template stripped out. Anyone reading raw GSC totals for these
pages will massively overestimate them.

**Real barrio-page performance, 90 days:** ~1,700 genuine impressions → **59 clicks**.

---

## 1. What is actually ranking today

Page-level, all queries (GSC Pages report, 90 days):

| Page | Clicks | Impressions | Avg pos | Verdict |
|---|---|---|---|---|
| /academia-ingles-barrio-del-pilar/ | **15** | 2,394 | 13.8 | Best performer |
| /academia-ingles-montecarmelo-las-tablas/ | **11** | 1,975 | 11.0 | Carrying two barrios |
| /academia-ingles-penagrande/ | **8** | 446 | 11.5 | Best CTR (1.79%) |
| /academia-ingles-tetuan/ | **7** | 665 | 12.1 | Solid |
| /academia-ingles-mirasierra/ | 6 | 1,070 | 11.3 | Impressions inflated by template |
| /academia-ingles-la-vaguada/ | 4 | 815 | 9.1 | Best position, weak clicks |
| /academia-ingles-plaza-castilla/ | 4 | 738 | 8.2 | Best position |
| /academia-ingles-cuatro-torres/ | 2 | 74 | 22.1 | Barely present |
| /academia-ingles-la-paz/ | 1 | 363 | 14.0 | Weak |
| /academia-ingles-la-ventilla/ | 1 | 160 | 25.3 | Weakest |
| **TOTAL** | **59** | **8,736** | — | ~1,700 impressions are real |

⚠️ An **11th URL** appears: `/academia-ingles-penagrande` **without a trailing slash**,
36 impressions at position 4.11. That is a duplicate URL splitting signals, and it holds a
*better* position than the canonical version. Fix the redirect.

### Real (non-synthetic) query demand by place

| Place | Real impr | Clicks | Best real query | Pos | Page? |
|---|---|---|---|---|---|
| **Las Tablas** | 685 | 0 | "academia ingles las tablas" (296i) | **11.8** | shared |
| Mirasierra | 418 | 0 | "academia de inglés mirasierra" (120i) | 2.0 | yes |
| **Sanchinarro** | 343 | 0 | "academia ingles sanchinarro" (144i) | **44.7** | **NO** |
| Barrio del Pilar | 319 | **12** | "academia de ingles barrio del pilar" (87i) | 4.2 | yes |
| La Vaguada | 277 | 0 | "cambridge house la vaguada" (85i) ⚠️ | 17 | yes |
| Plaza de Castilla | 215 | 0 | "academia inglés plaza de castilla" (172i) | 5.0 | yes |
| Montecarmelo | 168 | 0 | "academia de idiomas en montecarmelo" (94i) | 8.0 | shared |
| Valdeacederas | 105 | 0 | "acadeamia de inglés valdeacederas" (105i) ⚠️ typo | 8.2 | no |
| Madrid Norte (regional) | 344 | 0 | "academia inglés niños madrid norte" (116i) | 9.0 | no |
| La Paz | 17 | 0 | "academia la paz" (13i) | 10 | yes |
| Tetuán | 113 | 0 | template only | — | yes |
| Peñagrande / La Ventilla / Cuatro Torres | <10 | 0 | template only | — | yes |

Two things worth staring at:

- **"cambridge house la vaguada" (85 impressions) is your 2nd-biggest La Vaguada query.**
  People search your competitor's name + your barrio, and *your* page surfaces at position 17.
  A comparison angle on that page is an open goal.
- **Only Barrio del Pilar converts.** Every other barrio-name query produces zero clicks.
  The 59 clicks the pages earn come from other queries, not from their own barrio term.

---

## 2. Recommendations

### BUILD — strong evidence

#### 1. Las Tablas — split it out ⭐ (Danny was right)
- **685 real impressions**, the highest of any location on the site.
- "academia ingles las tablas" — 296 impressions, position 11.8, **0 clicks**.
- "academia de ingles en madrid las tablas" — 199 impressions, position 17.
- Google Ads volume: 20/mo, spiking to 70 in September.
- Today it shares a page with Montecarmelo, and the page's H1/title lead with Montecarmelo.
- **Rationale:** more search demand than any single-barrio page you own, stuck on page two
  because the page it lives on is about somewhere else. Splitting gives Las Tablas its own
  title, H1, answer capsule and FAQs, and lets Montecarmelo keep its own 168 impressions.
  Highest-confidence build on this list.

#### 2. Sanchinarro ⭐ NEW
- **343 real impressions**, no page at all.
- "academia ingles sanchinarro" — 144 impressions at **position 44.7**.
- "academia de ingles en madrid las tablas sanchinarro" — 199 impressions at position 17
  (people search the two together).
- Google Ads: 20/mo, 50 in September. Also "clases de ingles sanchinarro" 10/mo.
- **Rationale:** genuine unserved demand ranking on page five off the back of no dedicated
  page. Adjacent to Las Tablas and on the same L1/L10 corridor, so build the two together
  and cross-link them. Confirm you actually take students from Sanchinarro first.

### BUILD — Danny's call, thin evidence, needs care

#### 3–7. Fuencarral · Herrera Oria · Valdezarza · Arroyo del Fresno · Valdeacederas
- **Google Ads volume: zero for all five.**
- **GSC real impressions: zero for four of them.** Valdeacederas shows 105 impressions — but
  from a **single misspelled query** ("acadeamia de inglés valdeacederas"), which carries the
  same synthetic fingerprint as the template above. Treat it as noise, not demand.
- **Rationale FOR building (Danny's, and it holds up):** these are proximity and citation
  plays, not volume plays. All five sit inside Fuencarral-El Pardo or Tetuán, so the local
  signal is real and available — genuine metro routes, real drive times, actual students.
  An LLM asked "academia de inglés en Arroyo del Fresno" must answer from something, and with
  2–7 domains cited per response and no competitor bothering, being the only substantive
  answer is free. Keyword tools report zero for plenty of terms people still ask aloud.
- **Rationale AGAINST, which you should hear once:** five more near-identical pages about
  places with no measured demand is the exact input that gets a page-set collapsed into one
  representative URL — and your set is *already* collapsing (0.47–0.78 similarity, only
  Barrio del Pilar earning clicks). Adding five weak pages to a cluster that is already
  losing the duplicate battle can drag the strong pages down with them.
- **Therefore, the condition:** build them, but every one must clear the full ≥9 gate before
  it ships — its own travel route, its own two reviews, its own photos, its own FAQs, its own
  case study angle. **Build them last**, after the existing ten are fixed and re-measured. If
  the existing ten don't recover, don't add to the pile.

### CONSIDER

#### 8. "Madrid Norte" — a regional page, not a barrio page
- **344 real impressions**, e.g. "academia inglés niños madrid norte" 116i at position 9.
- Google Ads shows 0 for "academia de ingles madrid norte", so this is GSC-only demand.
- **Rationale:** it's the umbrella term for everything you serve and would strengthen the
  hub rather than compete with the barrio pages. Cheap, and it doesn't add to the
  duplicate cluster because it operates a level above it.

### DO NOT BUILD

| Place | Real impr | Why not |
|---|---|---|
| **Alcobendas** | 0 | 70/mo volume, but **no students** (Danny). No authentic local signal available. |
| **San Sebastián de los Reyes** | 0 | 90/mo volume — the biggest miss on paper — but **no students**. Same reason. |
| **Hortaleza, Valverde, Berruguete, Canillas, Chamartín, Barajas, Castellana, Cuatro Caminos** | template only | Their entire footprint is the synthetic "mejor academia… para niños" query. Zero real demand, zero clicks. |
| **Carabanchel (320), Arganzuela (250)** | real-ish | South Madrid. Nowhere near Av. de El Ferrol, positions 57–61. You cannot serve them. |
| **Boadilla del Monte (230), Las Rozas (44), Pozuelo (11), Majadahonda (14)** | real-ish | West-corridor commuter towns, positions 49–62. Too far, no students. |
| **Motril (703!), Pilas (292)** | noise | Granada and Sevilla. Pure index noise — do not chase. |
| **Moncloa (16), Canillejas (10)** | negligible | Too small, too far. |

---

## 3. Recommended sequence

1. **Fix the existing ten first.** They score 61/100 (grade D) and only one earns clicks.
   The content inputs are all in `Business-Information.txt` now. Re-measure after 30 days.
2. **Split Las Tablas** from Montecarmelo — best evidence on the board.
3. **Build Sanchinarro** alongside it, cross-linked.
4. **Fix the trailing-slash duplicate** on `/academia-ingles-penagrande`.
5. **Add the "cambridge house la vaguada" comparison angle** to the La Vaguada page.
6. *Then* the five zero-volume barrios, last, each held to the full ≥9 gate.
7. Optional: a Madrid Norte regional page.

**Timing:** everything peaks 2–3× in September. Anything meant to catch that needs to be
indexed and matured before late August.

---

*Sources: GSC snapshot `impulse-seo-ops/data/gsc/geo-barrio-audit/` (Queries.full.csv 6,039 rows,
Pages.csv 160 rows); DataForSEO Labs relevant_pages + Google Ads search volume, Madrid/es;
Google knowledge panel + business listing, 2026-08-02.*
