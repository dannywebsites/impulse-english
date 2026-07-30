# SEO Decisions Log

Every SEO decision is logged here, grounded in [`SEO-Master-Class-Reference.md`](./SEO-Master-Class-Reference.md)
(the standing first-consult playbook). Newest first.

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
