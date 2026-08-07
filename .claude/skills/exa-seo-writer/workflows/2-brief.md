# Stage 2: Content Brief

**Goal:** Read `research.json` and build a structured content brief that defines exactly what the article must contain to beat the top 10.

You are doing the work of a 1,700-line Python pipeline (spaCy NER + scikit TF-IDF + KeyBERT + co-occurrence matrix) using reasoning. The thresholds and formulas below are copied verbatim from the production pipeline — do not soften them.

## Inputs

- `research.json` from Stage 1
- `rules/article-types.md` — type detection rules
- `rules/seo.md` — SEO targets
- `references/brand-voice/` — optional folder of buyer-supplied articles for voice matching (see step 0 below)

## Step 0: Extract brand voice (if samples are present)

Before building the keyword brief, check `references/brand-voice/` for `.md` or `.txt` sample articles. If files exist, run:

```bash
python scripts/extract_voice.py --out voice_notes.md
```

The script analyses sentence rhythm, vocabulary, paragraph structure, POV, and tone signals from the buyer's existing published articles and writes `voice_notes.md` to the working directory. Read this file before writing the brief, and reference it inside the brief so the writing stage (Stage 3) inherits the voice notes.

If `references/brand-voice/` is empty (or `--no-brand-voice` was passed), skip this step. The article will be written in the default voice (concise, clear, grade-7, opinionated).

If `--brand-voice path/to/folder` was passed, point `extract_voice.py` at that folder instead.

The brand voice notes do NOT override `rules/humanizer.md`. Forbidden words stay forbidden even if the buyer's samples use them.

## Steps

### 1. Detect article type

Apply these rules **in priority order**. First match wins.

| Priority | Rule | Type |
|---|---|---|
| 1 | Keyword contains ` vs `, ` versus `, or ends with ` vs` | **Vs** (head-to-head) |
| 2 | Keyword contains `alternatives` or `alternative to` | **Alternatives** |
| 3 | Keyword ends with ` review`, contains ` review `, or starts with `review of ` | **Review** |
| 4 | Keyword starts with `best ` or `top ` | **Roundup** (forced — overrides SERP intent) |
| 5 | Keyword starts with `how to `, `how do i`, `how can i`, or ends with `tutorial` / `step by step` | **Guide** |
| 6 | Keyword starts with `what is`, `why is`, `why does`, `when should`, or ends with `?` | **Informational** |
| 7 | None of the above → keyword-pattern fallback | **Informational** |

If no rule matches, default to **Informational**. (The research.json does not include a `search_intent` field — type detection is entirely keyword-pattern driven.)

### 2. Read target word count

**Use `research.json → stats → target_word_count` directly.** The research script has already computed this as `avg × 1.1` (10% above the top-10 average). Do not recalculate.

Clamping rules (apply if needed):
- Floor: 700 words
- Ceiling: 5,000 words

If the value in `research.json` is below 700, use 700. If above 5,000, use 5,000.

### 3. Extract keywords with frequency categorization (the Surfer-style core)

This is the core of the skill's competitive moat. We do NOT use a third-party API to look up keyword data. We pull the actual top-10 articles via Exa, read their full text, and extract every keyword the SERP rewards by reasoning over the corpus directly. This is more accurate than API-based scoring because it reflects what's ranking RIGHT NOW, not what's in someone's database.

Read all competitor `full_text` fields (typically 5–10 documents). For each candidate n-gram (1–3 words):

- Count `frequency` (total occurrences across all documents)
- Count `articles_present` (how many of the documents contain it)
- Calculate `presence_pct = articles_present / total_articles × 100`
- Filter: skip terms with `frequency < 2` or length < 2 characters
- Filter: skip stop words and generic tokens

**You are doing TF-IDF reasoning by hand, not running scikit.** Pick terms that are distinctively common in competitors but not generic English. Prefer domain-specific phrases. Two competitors using the same unusual phrase = strong topical signal. The skill's competitive advantage is that this extraction happens inside the agent's reasoning, against the live SERP, every time.

Categorize each term by `presence_pct`:

| Category | Presence threshold | Typical count | Where to use it |
|---|---|---|---|
| **primary_keywords** | ≥ 70% of competitor articles | 5–15 | Title, H1, first 100 words, 2+ H2s, conclusion |
| **secondary_keywords** | 40–69% | 10–25 | H2s, H3s, body |
| **lsi_keywords** | 20–39% | 15–100 | Naturally in body |
| **rare_keywords** | Exactly 1 article (differentiators) | 5–50 | Optional — use if relevant to your angle |

For each kept term, calculate a target count for the article:

```
primary:   target_count = max(3, int(target_wc × density / 100))
secondary: target_count = max(2, int(target_wc × density / 100))
lsi:       target_count = max(1, avg_per_article rounded)
rare:      target_count = 1
```

Where `density = frequency / total_words × 100` (as a percent).

### 4. Extract entities (7 categories)

You are replacing spaCy NER. Read the competitor text and extract named entities into these 7 buckets:

| Bucket | What goes in |
|---|---|
| `products_and_tools` | Brand names, SaaS tools, software products, apps (e.g., Notion, ClickUp, Asana) |
| `people` | Named individuals quoted, cited, or founding companies |
| `money_and_pricing` | Prices with `$`, pricing tiers, free/paid mentions |
| `technologies` | APIs, SDKs, frameworks, programming languages, protocols (API, SDK, SaaS, REST, GraphQL, Python, React, etc.) |
| `locations` | Cities, countries, regions (only if content-relevant) |
| `dates_and_events` | Years, launch dates, product releases, historical events |
| `urls_and_domains` | Bare domain names mentioned in body text (not just citations) |

For each entity track:
- `frequency` — total mentions across all documents
- `articles_present` — how many documents mention it
- `presence_pct` — articles_present / total × 100

**Skip these false positives:** "The", "This", "That", "Read More", "Click Here", "Learn More", "Sign Up", "Log In", "Table Of Contents", "Share This", "Home", "About", "Contact", "Privacy", "Terms", "Blog", "News", "company", "business", "organization", "team", "group", "page", "site", "website", "content", "article".

**Minimum entity count:** 10 entities. **Target range:** 10–100.

### 5. Assign entity priority

Classify each entity by `presence_pct`:

| Priority | Threshold | Meaning |
|---|---|---|
| **must_include** | ≥ 50% of competitor articles | Article fails without these |
| **should_include** | 30–49% | Article is weaker without these |
| **consider** | < 30% | Optional depth |

### 6. Build pricing benchmarks (separate from entities)

From `money_and_pricing` bucket, split into two sub-buckets:

- **common_price_points** — dollar-amount entries like `$10`, `$49/mo`, `$299/yr`
  - Normalize: `$X per month` → `$X/mo`, `$X per year` → `$X/yr`
  - Deduplicate by normalized form
  - Keep top 15 by `presence_pct`
- **common_plan_tiers** — named plan tiers like "Starter", "Pro", "Business"
  - **Exclude generic tier names:** `free`, `premium`, `basic`, `pro`, `enterprise`
  - Keep top 10 by `presence_pct`

### 7. Identify co-occurrence pairs

Take the top 10 primary keywords + top 10 secondary keywords (20 candidates max).

For each pair that co-occurs in the **same sentence** in 2+ places across competitor content:
- Count `cooccurrence_count`
- Calculate `cooccurrence_strength = (actual_cooccurrence / expected_cooccurrence)` where expected is based on each keyword's independent frequency
- A pair is **strong** if `cooccurrence_strength > 1.5`

**Target:** 10–30 co-occurrence pairs, with at least 5 strong pairs.

### 8. Extract FAQ targets

Scan competitor content for FAQ signals (in this priority):

1. Text under headings matching `faq`, `f.a.q.`, `frequently asked questions`, `common questions`, `questions and answers`
2. H3 questions nested inside any of the above FAQ sections
3. Standalone H2/H3 headings that end with `?`
4. Sentences that end with `?` and appear in 2+ competitors

Select **4–6** most-common questions. Prefer questions that appear verbatim in multiple competitors (suggests Google "People Also Ask" signal).

FAQ answers will be **40–60 words each** in Stage 3 — mark this as a hard constraint.

### 9. Build the heading outline from competitor structure

Read `research.json → headings → headings_by_level → h2` (and h3). These are the real headings the top-10 use.

Derive your outline by:
1. Grouping similar H2s (e.g., "What is X", "Definition of X" → one "What is X" section)
2. Counting frequency of each group across competitors
3. Keeping any group that appears in 2+ competitors as a required section
4. Adding 1–2 differentiation sections based on `rare_keywords` (topics the top 10 don't cover)

Apply the article-type-specific section order from `rules/article-types.md`. **Every article ends with `## Verdict` — never `## Conclusion`.**

- **Roundup / Alternatives:** Intro → Quick List (max 7 products) → Individual Reviews → Buying Guide (What to Look For) → FAQ → Verdict
- **Vs (head-to-head):** Intro → Quick Verdict → Product A Review → Product B Review → per-dimension H2s (pricing, features, UX, support) → Similar Alternatives → Which Fits You → Verdict
- **Review:** Intro → Quick Verdict → Product Deep Dive → Pros/Cons → Pricing → Alternatives → FAQ → Verdict
- **Guide:** Intro (outcome contract) → Quick Answer → Main Body (numbered steps) → Deep Sections (tips/pitfalls) → FAQ → Verdict
- **Informational:** Intro → Quick Answer → Main Body → Deep Sections → FAQ → Verdict

**Cap roundup/alternatives products at 7.** Engagement drops after 7.

### 10. Write the brief

The brief can be kept inline in your reasoning (faster, token-efficient) OR written to `brief.md` in the working directory (better for human review). Pick one and stay consistent. For solo agent runs, inline is recommended.

Structure:

```markdown
# Content Brief: <keyword>

**Article type:** <roundup|alternatives|vs|review|guide|informational>
**Target word count:** <number from research.json stats.target_word_count>
**Primary keyword:** <keyword>

## Keyword targets

### Primary (≥70% competitor presence)
| Term | Presence | Frequency | Target count | Placement |
|---|---|---|---|---|
| ... | 100% | 42 | 8 | Title, H1, first 100, 2+ H2s, conclusion |

### Secondary (40–69%)
<table>

### LSI (20–39%)
<table — 15 to 100 terms>

### Rare / differentiators (1 article only)
<table — optional, up to 50>

## Entity targets

### Must include (≥50% presence)
- **products_and_tools:** <list>
- **people:** <list>
- **technologies:** <list>
- **locations:** <list>
- **dates_and_events:** <list>

### Should include (30–49%)
<same breakdown>

### Consider (<30%)
<same breakdown>

**Total entities: <count>** (must be ≥10)

## Pricing benchmarks

**Common price points:** $X/mo, $Y/yr, $Z one-time
**Common plan tiers:** Starter, Team, Business (non-generic only)

## Co-occurrence pairs (strong only, strength > 1.5)
1. `keyword1` + `keyword2` (strength: 2.3)
2. ...

## FAQs (4–6 questions, 40–60 word answers)
1. <question verbatim from "People Also Ask">
2. ...

## Outline (H2 level, from competitor patterns + differentiation)

Each H2 gets a one-sentence **BLUF** (Bottom Line Up Front) — the thesis the section must prove. Without a BLUF, sections drift into generic filler. The BLUF tells the writing stage exactly what claim each section must defend.

A good BLUF is:
- **Specific.** Not "explain what AI search is" but "show why traditional SEO leaks 30%+ of clicks once Google AI Overviews appear above your result."
- **Audience-aware.** Answers the reader's implicit "so what?"
- **Verifiable.** The claim must be backable by a fact, number, or example from `research.json`.

Format:

```markdown
1. H1: <title>
2. ## <H2 heading>
   - **BLUF:** <one-sentence thesis the section must prove>
   - **Word target:** <e.g., 250–350 words>
   - **Required entities:** <2–4 from research.json>
   - **Data sources:** <which competitor URLs / sections support the claim>
   - **Anti-patterns:** <e.g., "do not list features without explaining why each matters">
3. ## <next H2>
   - **BLUF:** ...
4. ...
```

Every H2 in the outline must have a BLUF. The Verdict H2 should use a variant that places a **secondary or LSI keyword** in the heading (e.g., `## Verdict on AI Search Visibility`), since the title and at least 1–2 of the body H2s are already carrying the primary keyword.

## Competitor gaps (differentiation opportunities)
- <gap 1 — topic from rare_keywords that 0–1 competitors cover>
- <gap 2>

## Competitor strengths (must-match to be competitive)
- <strength 1 — topic in 5/5 competitors>
- <strength 2>

## User context (if provided via `--context`)
If the user passed `--context "..."`, paste it here verbatim. The writing stage must respect the angle, audience, and brand voice the user specified.

## Brand voice notes (if samples present in references/brand-voice/)
If `voice_notes.md` was generated in step 0, paste its full content here. The writing stage will mirror the sentence rhythm, vocabulary, and paragraph patterns the script extracted, while still respecting `rules/humanizer.md`.
```

## Quality check before Stage 3

- [ ] Article type detected and matches exactly one of 6 types (roundup, alternatives, vs, review, guide, informational)
- [ ] Target word count is ≥ 700 and ≤ 5,000
- [ ] At least 5 primary keywords identified (≥70% presence)
- [ ] At least 15 LSI keywords identified (total across all categories)
- [ ] At least 10 entities extracted across the 7 categories
- [ ] At least 5 "must_include" entities
- [ ] At least 1 pricing benchmark (for commercial types) OR N/A noted (for informational)
- [ ] 4–6 FAQs listed with verbatim wording from competitors
- [ ] At least 5 strong co-occurrence pairs
- [ ] Outline has at least 6 H2 sections
- [ ] **Every H2 in the outline has a BLUF (one-sentence thesis), word target, and 2–4 required entities**
- [ ] **TL;DR plan (vs / review / guide / informational ONLY)**: a one-sentence note on what the 50–80 word italic TL;DR should claim. The TL;DR sits AFTER the intro prose, BEFORE the first H2 — never first. For vs articles, the TL;DR must name the overall winner. For review articles, the TL;DR must include the score /10. **Roundup and alternatives have NO TL;DR** — skip this checkbox for those types.
- [ ] **Ranked-list H2 plan (roundup/alternatives ONLY)**: outline's first body H2 is `## [Short Keyword]` (e.g., `## Best AI SEO Tools`) followed by a numbered ranked list of products. This is the Google featured-snippet target. The intro flows directly into this H2 — there is no TL;DR in between.
- [ ] **`## What's New in [Topic] for 2026` H2 in the outline**, with a BLUF naming 2–3 specific recent changes (with dates) from `research.json`. Required UNLESS the topic has nothing meaningful new — in that case add a `whats_new_skip: <one-sentence reason>` line to the brief and the lint script will honor it.
- [ ] **`## How We Tested` H2 in the outline** for `roundup`, `alternatives`, `vs`, `review` types only — with a one-line note on the testing methodology to claim. SKIP for `guide` and `informational`.
- [ ] **Verdict H2 uses a variant that includes a secondary or LSI keyword** (e.g., `## Verdict on [secondary]`)
- [ ] At least 1 competitor gap identified (article differentiation hook)

If any of the above fail, loop back and fix before proceeding to Stage 3.
