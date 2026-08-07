# Article Type Detection & Routing

The skill supports **6 article types**: `roundup`, `alternatives`, `vs`, `review`, `guide`, `informational`. Each has its own structure, title format, forbidden openers, and final-section rules. Type detection happens in Stage 2 (brief) and determines the entire downstream workflow.

## Detection rules — priority order

Apply in order. **First match wins.** If no rule matches, fall back to `research.json → search_intent → suggested_article_type`. Default to `informational` if nothing else fits.

| Priority | Keyword pattern | Type |
|---|---|---|
| 1 | Contains ` vs `, ` versus `, or ends with ` vs` | **vs** |
| 2 | Contains `alternatives` or `alternative to` | **alternatives** |
| 3 | Ends with ` review`, contains ` review `, or starts with `review of ` | **review** |
| 4 | Starts with `best ` or `top ` | **roundup** (forced — overrides SERP intent) |
| 5 | Starts with `how to `, `how do i`, `how can i`, ends with `tutorial` or `step by step` | **guide** |
| 6 | Starts with `what is`, `why is`, `why does`, `when should`, or ends with `?` | **informational** |
| 7 | None of the above | SERP fallback → `informational` |

**Important:** `best ` / `top ` keywords force `roundup` regardless of SERP intent. This was added in commit `803b8f8` because SERP intent detection was unreliable for commercial listicles.

---

## Universal rules (apply to every article type)

These apply to all 6 types:

0. **Universal opener: H1 → intro prose → snippet section.** Every article opens with the H1 title, then intro prose (no heading). What comes next depends on type:
   - **Roundup / Alternatives**: `## [Short Keyword]` + ranked list (NO TL;DR — the ranked list IS the snippet section)
   - **Everything else**: a TL;DR italic paragraph (50–80 words, no heading), placed AFTER the intro and BEFORE the first H2
   The TL;DR is never the first thing in the article. The intro always comes first. After the snippet section, the article continues with `## What's New in [Topic] for 2026` (or skip with `whats_new_skip:` in the brief). See `templates/tldr.md`, `templates/whats_new.md`.
1. **Grade 7 reading level** — Flesch-Kincaid grade 7 or under. Average sentence ~15 words. Use contractions (it's, you'll, don't). Active voice. Define technical terms immediately.
2. **Final body H2 contains the word "Verdict"** — accepted forms: `## Verdict`, `## Our Verdict`, `## The Verdict`, `## Verdict on [secondary keyword]`, `## [secondary keyword] Verdict`. NEVER `Conclusion`, `Final Thoughts`, or `Summary`. Prefer a Verdict variant that includes a secondary keyword, because the title and 1–2 of the body H2s are already carrying the primary keyword. The Verdict heading is your last natural opportunity to place a secondary or LSI keyword in an H2 without forcing it. Examples: keyword "best AI SEO tools 2026" → `## Verdict on AI SEO Software`. Keyword "how to beat AI search competitors" → `## Verdict on AI Search Visibility`. Primary keyword still appears once inside the Verdict body prose.
3. **No markdown tables** — never use pipes and dashes for tables. Use bullet lists for all structured data.
4. **Paragraphs max 2–3 sentences.** No walls of text.
5. **FAQ section** — 4–6 questions, schema-ready Q&A format, 40–60 word answers, placed before Verdict.
6. **Primary keyword placement** — title, first 100 words, at least 2 H2s, Verdict section.
7. **Title includes year (2026)** for freshness signal. Target 50–70 characters.
8. **Forbidden openers (all types):** `In today's world`, `In this article we'll cover`, restating the keyword as a statement, listing what the article covers.

---

## Type 1: Roundup (`best X`, `top X`)

**Detection triggers:** starts with `best ` or `top `.

**Title format:** `[Number] Best [Keyword] in 2026 ([Ranked & Tested | Reviewed | etc.])`
Example: `9 Best AI Writing Tools in 2026 (Tested & Ranked)`

**Intro hook:** Bold claim or relatable pain point. State ranking rationale clearly.
Example: `Most AI writing tool lists just dump 30 options with no real testing. This one ranks them by what actually matters.`

**Section order (follow exactly):**

Roundup and alternatives have **NO TL;DR**. The Ranked-list H2 + bulleted ranked list IS the snippet section. The intro flows directly into it.

0. **H1 title** + **intro prose** (no heading)
1. **Intro** — hook + ranking rationale (the prose right after H1; no H2 of its own)
2. **Ranked List (CRITICAL, NON-NEGOTIABLE — THE FEATURED SNIPPET WINNER)** — H2 using the short main keyword (e.g. `## Best AI Writers`). Numbered ranked list of every product. Format: `1. **[Product Name]** [one-line verdict]`. Every product you review must appear here. **This H2 is the single most important section for Google featured snippet capture. It comes at position 3, right after the intro. Nothing displaces it. Nothing pushes it later in the article.**
3. **`## What's New in [Topic] for 2026`** — 100–180 words on dated, specific recent changes from `research.json`. SKIP if the topic has no recent shifts worth naming (note `whats_new_skip: <reason>` in brief). See `templates/whats_new.md`.
4. **`## How We Tested`** — 100–180 words, methodology and criteria. See `templates/how_we_tested.md`.
5. **One H2 per product** — cap at **7 products**. Use this format for each:
   - H2 heading: `## #N. [Product Name] — [One-sentence verdict]` (e.g. `## #1. Jasper — Best for Marketing Teams`)
   - Opening paragraph: what it is and who it's for (2–3 sentences)
   - Key features: bulleted list (4–6 bullets)
   - Rating block:
     ```
     - **Best For:** [specific use case]
     - **Standout Feature:** [feature]
     - **Limitation:** [honest con]
     - **Price:** [real price, not "contact sales"]
     - **Rating:** [X/5 stars]
     ```
   - Closing sentence on who should (and shouldn't) choose this tool
4. **What to Look for in a [short keyword]** — buying guide H2 **after** the product sections. 3–5 criteria, one paragraph per criterion.
5. **FAQ** — 4–6 Q&A, schema-ready
6. **Verdict** — `## Verdict` (NOT Conclusion). Restate top pick with primary keyword.

**Hard rules:**
- **Cap at 7 products.** Engagement drops after 7 (from commit `3070fb1`).
- **Primary keyword in H2 of at least 2 product sections.**
- **No markdown tables** — use bullet lists.
- **Rank order matters** — #1 is the one you'd actually buy.

---

## Type 2: Alternatives (`X alternatives`, `alternative to X`)

**Detection triggers:** contains `alternatives` or `alternative to`. Detects baseline product from keyword (e.g. `chatgpt alternatives` → baseline = `ChatGPT`).

**Structure is identical to Roundup** — same ranked-list + Ranked List + What to Look for + Verdict. The only difference is framing: every product is compared explicitly to the baseline product.

**Title format:** `[Number] Best [Baseline] Alternatives in 2026 (Ranked)`
Example: `7 Best ChatGPT Alternatives in 2026 (Ranked & Tested)`

**Intro hook:** Specific, relatable reason someone would want an alternative to the baseline. One pain point in 1–2 sentences, then pivot to "here's what actually works." Never say `[Baseline] is a popular tool…`

**Section order:** H1 → intro → **Ranked List (snippet winner — position 3, never displaced)** → `## What's New in [Topic] for 2026` (skip if nothing dated to say) → `## How We Tested` → detailed alternatives (one H2 each, cap at 7) → What to Look for → FAQ → Verdict. Alternatives have **no TL;DR** — the ranked-list section serves the snippet role.

**Hard rules:**
- **Cap at 7 alternatives.**
- Every product section explicitly compares back to the baseline ("Unlike ChatGPT, [alt] does X…").
- Ranked List is **non-negotiable** — every alternative in the detailed sections must appear in the Ranked List.
- No markdown tables.

---

## Type 3: Vs (head-to-head comparison)

**Detection triggers:** contains ` vs `, ` versus `, or ends with ` vs`. Identifies Product A and Product B from the keyword.

**Title format:** `[Product A] vs [Product B] (2026): Which Is Better?` or `[Product A] vs [Product B]: Honest Comparison After Testing Both`

**Intro hook:** State the single most important difference between the two products in the first sentence. Never say `Both are great tools` — readers came to pick one.

**Section order (follow exactly):**

The TL;DR captures the snippet for vs articles. The TL;DR comes AFTER the intro, not before. There is NO separate "Quick Verdict" H2.

0. **H1 title**
1. **Intro prose** — one-sentence differentiator (no heading; comes immediately after H1)
2. **TL;DR italic block** — 50–80 words, no heading, AFTER the intro. Must name the overall winner AND the use-case winners. See `templates/tldr.md`.
3. **## What's New in [Topic] for 2026** — 100–180 words, dated changes (skip if nothing recent; note `whats_new_skip:` in brief)
4. **## How We Tested [Product A] vs [Product B]** — 100–180 words, methodology
5. **## [Product A] Overview** — 150–200 words. What it is, who it's for, what it does well.
6. **## [Product B] Overview** — same format, 150–200 words.
7. **Head-to-Head H2 sections** — 3–5 H2s, one per comparison dimension (Features, Pricing, Ease of Use, Integrations, Customer Support). Within each: describe A, describe B, state which wins and why. Be decisive.
8. **## Key Differences** — 4–6 bullets. Format: `[Product A] does X; [Product B] does Y instead.`
9. **## Who Should Pick Each** — two sub-sections:
   - `**Pick [Product A] if...**` + 3 bullets naming specific scenarios
   - `**Pick [Product B] if...**` + 3 bullets
10. **FAQ** — 4–6 Q&A
11. **## Verdict** — name the overall winner, state why, weave in primary keyword.

**Hard rules:**
- **Pick a winner in every dimension.** Lopsided comparisons lose credibility, but refusing to call winners is worse.
- **TL;DR must name the overall winner.** No hedging in the snippet block.
- Acknowledge where each product genuinely excels.
- No markdown tables.

---

## Type 4: Review (single-product deep dive)

**Detection triggers:** ends with ` review`, contains ` review `, or starts with `review of `.

**Title format:** `[Product] Review (2026): Is It Worth It?` or `[Product] Review: Honest Take After X Months`

**Intro hook:** The single most surprising or counterintuitive thing about the product. Never open with `In this review we'll cover...`

**Section order (follow exactly):**

The TL;DR captures the snippet for review articles. The TL;DR comes AFTER the intro. There is NO separate "Quick Verdict" H2.

0. **H1 title**
1. **Intro prose** — surprising hook (no heading; comes right after H1)
2. **TL;DR italic block** — 50–80 words, no heading, AFTER intro. Must include the score /10 (e.g., "Score: 8/10") and name who the product is best for.
3. **## What's New in [Topic] for 2026** — 100–180 words, dated changes (skip if nothing recent)
4. **## How We Tested [Product]** — 100–180 words, methodology
5. **## What Is [Product]** — company background, core use case, market positioning (1–2 paragraphs)
6. **## What [Product] Does Well** — 4–6 H3 sub-sections, one per major feature. (Avoid the heading "Key Features" because "key" is a forbidden word in `rules/humanizer.md`.) Each H3 is 100–150 words: what it does, why it matters, limitations.
7. **## Pricing** — each tier as a bullet. Include real prices (not "contact for pricing"). Note free trial or money-back guarantee.
8. **## Pros and Cons** — two separate bulleted lists labelled `**Pros**` and `**Cons**`. 4–6 pros, 2–4 cons. Be opinionated.
9. **## Who [Product] Is For** — 3 specific personas. Format: `If you're a [persona], [Product] is great because [specific reason].`
10. **## Alternatives to [Product]** — 2–3 named alternatives, one sentence each on how they differ.
11. **FAQ** — 4–6 Q&A
12. **## Verdict** — restate score /10, give a concrete recommendation (`buy` / `don't buy` / `buy if...`).

**Hard rules:**
- **Score /10 must appear in the TL;DR and in the final Verdict** — those are the two anchor points (no separate Quick Verdict H2).
- **Include real pricing** — no "contact sales" vagueness.
- Verdict is opinionated — a review without a verdict is useless.
- No markdown tables.

---

## Type 5: Guide (`how to`, tutorial, step-by-step)

**Detection triggers:** starts with `how to `, `how do i`, `how can i`, or ends with `tutorial` / `step by step`.

**Title format:** `How to [Action] in 2026 (Step-by-Step Guide)`
Example: `How to Choose the Best AI Writing Tool in 2026 (Step-by-Step Guide)`

**Intro hook:** Pain point or promise of a concrete outcome.

**Section order:**

0. **H1 title**
1. **Intro hook + outcome contract** — prose right after H1 (no heading). Must include a sentence in this exact pattern: `By the end of this guide, you'll know how to [outcome 1], [outcome 2], and [outcome 3].`
2. **TL;DR italic block** — 50–80 words, no heading, AFTER the intro. Compresses the answer for skim readers and AI-search snippet capture.
3. **`## What's New in [Topic] for 2026`** — 100–180 words on recent shifts. Required (skip with `whats_new_skip:` in brief if nothing dated to say).
4. **## What You'll Need** or **## Before You Start** — bulleted prerequisites checklist. **Skip entirely if no meaningful prerequisites.**
3. **Numbered step H2s** — for procedural content: `## Step 1: [Action Verb] [Object]`. For conceptual content where steps don't logically fit, use descriptive H2s instead. **Do not force step numbering onto non-procedural sections.**
4. **Action-verb H2s** — every H2 starts with an action verb or describes a concrete outcome. Use `Set Up Your Account`, not `Account Setup`.
5. **## Common Mistakes to Avoid** — near the end. 3–5 bulleted mistakes with a brief fix for each.
6. **FAQ** — 4–6 Q&A
7. **## Verdict**

**Hard rules:**
- **Intro contract is required** — "By the end of this guide…"
- Each H2 section: 250–400 words, actionable and specific.
- No markdown tables.

---

## Type 6: Informational (`what is X`, topic overviews)

**Detection triggers:** starts with `what is`, `why is`, `why does`, `when should`, or ends with `?`.

**Title format:** `What Is [Topic]? A Complete Overview for 2026` or `[Topic] Explained: Everything You Need to Know`

**Intro hook:** Surprising fact, common misconception, or scale/importance of the topic.

**Section order:**

0. **H1 title**
1. **Intro hook** — prose right after H1 (no heading). Surprising fact, common misconception, or scale/importance.
2. **TL;DR italic block** — 50–80 words, no heading, AFTER the intro. Defines the topic in one or two sentences and gives the core takeaway.
3. **`## What's New in [Topic] for 2026`** — 100–180 words on recent shifts. Required (skip with `whats_new_skip:` if nothing dated).
4. **Topic definition** — first H2 must define the topic clearly in **one plain-English paragraph**. No jargon in the definition itself (or define jargon in the same sentence).
3. **Key concepts as H2s** — one H2 per major sub-concept. Use noun-phrase or question headings: `How X Works`, `Types of X`, `Why X Matters`, `X vs Y`.
4. **Examples in every H2** — each H2 section includes at least one concrete, real-world example.
5. **Context and relevance section** — one H2 answers `Why does this matter?` or `Who uses X and why?`. Grounds the topic in practical relevance.
6. **FAQ** — 4–6 Q&A
7. **## Verdict**

**Hard rules:**
- **No step numbering.** This is not a how-to. Use descriptive H2s only.
- **Every H2 needs a concrete example.**
- Lead with the answer, explain second.
- No markdown tables.

---

## Tone by type

| Type | Tone |
|---|---|
| Roundup | Opinionated, comparative, specific ("top pick is X because…") |
| Alternatives | Pragmatic, solution-focused ("if X isn't working for you, try Y") |
| Vs | Decisive, balanced, opinionated ("both are good, but X wins for Y") |
| Review | Honest, balanced, specific ("the good, the bad, the verdict") |
| Guide | Instructional, confident, patient ("do this, then this") |
| Informational | Clear, authoritative, example-driven ("here's what it means, here's an example") |

## Ambiguity handling

If a keyword matches multiple rules, the priority order above decides:
- `how to pick the best crm` → matches `how to ` (priority 5) → **guide**. Does not match roundup because it doesn't start with `best `.
- `best chatgpt alternatives` → matches `alternatives` (priority 2) → **alternatives**, not roundup.
- `notion vs clickup review` → matches ` vs ` (priority 1) → **vs**, not review.

The priority is: vs > alternatives > review > roundup > guide > informational > SERP fallback.
