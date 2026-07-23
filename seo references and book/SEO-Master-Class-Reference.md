# SEO Master Class — "The Maverick Method" · Working Reference

> **📌 STANDING RULE — consult this FIRST for all SEO planning.**
> This is the distilled playbook from *SEO Master Class: The Maverick Method* (Jesse Cunningham,
> 200 pp., `./SEO Master Class.pdf`). **Every SEO decision on this project starts here** — keyword
> targeting, page structure, on-page copy, internal linking, and which page should rank for a term.
> Decisions get logged in [`SEO-Decisions-Log.md`](./SEO-Decisions-Log.md).
>
> **Scope caveat:** the book covers **on-page + content-architecture SEO only.** It has **no**
> Google Business Profile / map-pack / NAP-citations / "near me" chapter. For local *proximity*
> work, pair this reference (on-page/architecture) with an external local-SEO source for the
> GBP/citations half.

---

## The Maverick Method — the loop
**Motivation (DEEPR) → Action → Validation → Expansion → Repeat.**
It *enhances* traditional SEO, doesn't replace it. "SEO isn't a sprint. It's a marathon." Understand
the *function* of a tool so you can swap tools — fundamentals don't change.

**SEO Prioritization Pyramid (foundation → top):**
1. **Content** — the foundation ("no content, no traffic"). ~90% of the site.
2. **Keywords** — the blueprints.
3. **Technical SEO** — the scaffolding.
4. **Backlinks** — the cement.

**Why top-3 matters:** top 3 results ≈ 50%+ of clicks (1st ≈33%, 2nd ≈18%, 3rd ≈11%).

---

## 1. MOTIVATION — DEEPR (why people search)
Map every target query to one of five motivations; the strongest pages touch several at once:
- **D**ecision-making — comparing/reviewing before buying (best for affiliate).
- **E**ntertainment — fun/curiosity (usually weak monetiser).
- **E**ducation — learning a skill/how-to. **"A great place to live in for SEO"; local + global businesses should produce educational content.**
- **P**roblem-solving — fix a specific problem (powerful, less competition).
- **R**esearch — data/facts/trends (cite **.gov/.edu**; verify everything).

**Avoid landmines:**
- **Purchasing-intent test** — Google the term; if page 1 = brand sites / Amazon / retail + shopping ads, it's a landmine for a low-authority site. If shopping row *then blogs*, it may have potential.
- **Avoid branded searches** — if the #1 result is a specific product/book/brand, skip the term.
- **Find market gaps** via People Also Ask / Answer Socrates, competitor gaps ("did they phone it in?"), forums (Quora/Reddit — "unresolved issues are always market gaps"), reviews, keyword tools.

---

## 2. KEYWORDS — levels, tiers, and which term to chase
**Keyword Levels (competition vs. authority):**
| Level | Competition / Volume | Who can rank |
|---|---|---|
| 1 | High / High (broad "Food") | DA 70+ |
| 2 | Medium / Medium ("Desserts") | DA 50–70 |
| 3 | Low / High ("hidden gems") | DA 30–50 |
| 4 | Low / Low (specific long-tail) | DA 10–30 — **best for newer sites** |
| 5 | Zero volume (emerging/very specific) | anyone; "no volume ≠ no search" |

**Broad = visibility; long-tail = conversions.** Small/new sites: **"Find the tier you can compete with"** — usually Tier-3 long-tail not dominated by big DA.

**Blanket vs. Sniper:**
- **Blanket** — templated, scalable, themed series ("Best X in [City]"). Start here; best for teams/large brands. ~80% of content.
- **Sniper** — one-off, tool-researched, gap-filling articles targeting a specific low-competition/high-value keyword, nested in a hub. Use it to build tier-3 clusters **around content that's already winning** (Validation-driven).

**Winnability check (AHREFs):** low **KD**; competitors' low **Domain Rating** (DR, 1–100) on page 1 = room to rank; if **no competitor uses the keyword in their title tag**, it's "ripe for the picking."

**Broad-vs-narrow rule (critical for cannibalization):** target the **broader** query as the page's focus for traffic, then **drill the narrow subset into H2/H3** — don't make a low-volume subset the whole page. Keep intro phrasing aligned to the broad target or Google mis-reads the page's topic.

**Anti-cannibalization / which page ranks:**
- **One intent = ONE page.** *"This doesn't mean you're writing two different articles with the same keyword."*
- **Consolidate synonyms** into a single strong page (rank for many terms with one article).
- Before making a new page, `site:yourdomain.com + keyword` to check you're not duplicating yourself.
- **Tiers are fluid** — the same page can be Tier-1 in one hub and Tier-3 in another; anchor text + link direction tells Google which role it plays.

---

## 3. ACTION — on-page cheat-sheet
**Document top matter:** Slug · Title Tag · Meta Description.
- **Slug** — short, the base keyword, nothing extra.
- **Title Tag** — what shows on Google; **≤55–60 chars** (avoid truncation); can differ from H1 to add keywords; mine competitor SERPs for recurring modifiers (year, region). If using a number, **beat competitors' number**. Don't change more than **once a quarter**.
- **Meta Description** — **≤155–160 chars**; your pitch; include keyword + LSI; drives CTR.

**Headings:** **H1** = one per page, holds the **primary keyword**, interesting to humans. **H2/H3** = secondary keywords, phrased like the exact query a user types. Put the target keyword in the **paragraph immediately after each heading** (Google weights content nearest the H2 as most important).

**Body structure:** paragraphs **2–3 sentences** max; bite-sized; repeatable data tables near each H2. Distribute keywords + **LSI** (semantically related terms) **naturally — no stuffing** (penalised). Replace vague pronouns ("it"/"they") with a keyword when density is thin.

**First paragraph** = best featured-snippet shot: answer the query plainly in **≤300 chars** (write it last; save the "teaser" for after).
**Reassurance (2nd para)** = show you get the searcher's "why" (asking a question works). **Teaser** = keyword-rich promise of what's ahead.

**Data / E-E-A-T:** add real data; cite **high-authority / .gov** sources (never competitors). **Don't use ChatGPT to gather data** (great for generalities, bad for specifics). Heavily edit any AI content.

**Media:** relevant, high-quality, **compressed (<100 KB, prefer WebP** w/ JPEG/PNG fallback); descriptive hyphenated **filenames**; **alt text ≤75 chars**, descriptive + actionable + keyword (no stuffing); place images under H2s.

**FAQ section:** mine **People Also Ask** for ~a dozen *directly relevant* questions, rank by relevance. Answer **immediately, ≤300 chars**, **never "yes/no"** (Google may rephrase the question). Use **FAQ schema** (Yoast-style: H2 title, H3 questions) — search engines agreed on schema long ago. Plant rich-anchor internal links inside answers. Update annually against current PAAs.

---

## 4. INTERLINKING — the authority engine (Knowledge Graph)
A well-interlinked site mirrors Google's Knowledge Graph → signals authority + topical relevance.
**Tier hub formula:**
- **Tier 1** = broad pillar (often built to *organise*, not necessarily to rank).
- **Tier 2** = supporting, more specific; **links UP to T1 in its intro**.
- **Tier 3** = deeper still, clusters around a winning T2.
- Each article **links to at least two others** (upline + downline sibling); treat the list as **circular** (bottom links to top). Sibling links go best in the **conclusion** + anywhere natural.
- **Anchor text carries the target keyword** (highest-volume variant); use variations to prove you're not stuffing. **Deep-link** to the exact section (Copy-Link-to-Highlight) where relevant.
- **Everything links back to the homepage** — *"that's how Google recognises the importance of the homepage and boosts its rankings."* Don't build hubs so deep/disconnected they stop serving the site.
- **Bridge** articles connect loosely-related hubs (won't rank; keep juice flowing). **Gap** content fills topical holes (may not rank; prevents gaps in the knowledge graph).
- Build **Tier-2/3 first** (ranks faster); after publishing, **go back and link the pillar down to the new pages** ("build the moat"). Tools: Link Whisper, SEO Meta in One Click.

---

## 5. VALIDATION — measure before expanding
**"Stop what doesn't work; do more of what works."** Metrics:
- **GSC:** Total clicks · Impressions (≠ rank) · **Average position** (lower = better) · **CTR**. Focus on **organic**, not **branded**, queries.
- **CTR** — top sites hit 20–30%; low CTR → fix **title tag + meta description**. Feed real **n-grams** (exact phrases earning clicks in GSC) back into the article if missing (CTRL+F to check).
- **Bounce/engagement (GA4):** engaged session = >10s OR conversion OR ≥2 pageviews; hunt outliers.
- **Slug tokens for measurement:** put a shared keyword in every hub page's slug so you can filter GSC by **"URLs containing [token]"** and judge the cluster as a whole.
- **Indexing:** URL Inspection → Request Indexing **sparingly** (only major updates) or you look spammy.

---

## 6. EXPANSION — build the moat around winners
Expand around **proven** top pages only ("most expansion should be tactical and strategic"). Pull the winner's headers (SEO Meta in One Click) for T2/T3 ideas; vet each with AHREFs (natural link to the page + low KD + title-tag gap); **consolidate synonyms**; reject terms that are the wrong scope, too narrow, branded, or that Google reads as a different **location**. After building supporting pages, **link the pillar back down** to them. Then **Repeat** the loop.

---

## Local-SEO application notes (this project)
The book's "local" = **geo-tiered content hubs + geographic keywords**, and the **broad-vs-narrow / one-intent-one-page** rules for choosing which page ranks. For true proximity ("cerca de mí") queries, remember the **book gap**: pair the above with GBP optimisation + NAP citations + review velocity (external to the book). Location modifiers (barrio/zip/city/district) are **n-gram variations** to capture in copy and monitor in GSC.

---
*Distilled 2026-07-23 from a full 4-part read of all 200 pages. Verbatim rules preserved where the author was prescriptive.*
