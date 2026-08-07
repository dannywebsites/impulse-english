# Stage 3: Write

**Goal:** Produce the full article, following the brief and enforcing every rule in `rules/seo.md`.

## Inputs

- `brief.md` from Stage 2
- `research.json` from Stage 1
- Section templates in `templates/`
- Rules in `rules/seo.md`, `rules/article-types.md`

## Section order by type

**Every article ends with `## Verdict` — never `## Conclusion`, `## Final Thoughts`, or `## Summary`.** The final-section rule is mandatory regardless of which type you're writing.

Every article starts with the H1 title, then the intro prose. The intro is never preceded by anything. The TL;DR (when used) comes AFTER the intro, not before.

**Snippet capture is type-conditional:**

- **Roundup / Alternatives**: snippet section is the `## [Short Keyword]` H2 + ranked bulleted list (e.g., `## Best AI SEO Tools` + numbered product list). It comes right after the intro. **No TL;DR for these types** — the ranked-list section serves the snippet role.
- **Vs / Review / Guide / Informational**: snippet section is the TL;DR italic block (50–80 words). It comes AFTER the intro prose, BEFORE the first H2.

| Article type | Section order |
|---|---|
| Roundup | H1 → intro → **`## [Short Keyword]` + ranked list (snippet winner)** → whats_new → how_we_tested → product_reviews (max 7 products) → deep_sections (buying guide) → faq → **verdict** |
| Alternatives | H1 → intro → **`## Best [Keyword] Alternatives` + ranked list (snippet winner)** → whats_new → how_we_tested → product_reviews (max 7) → deep_sections (buying guide) → faq → **verdict** |
| Vs | H1 → intro → **TL;DR italic block** → whats_new → how_we_tested → product_A_overview → product_B_overview → per-dimension H2s → similar_alternatives → which_fits → **verdict** |
| Review | H1 → intro → **TL;DR (with score /10)** → whats_new → how_we_tested → product_deep_dive → pros_cons → pricing → alternatives → faq → **verdict** |
| Guide | H1 → intro (with outcome contract) → **TL;DR** → whats_new → main_body (numbered steps) → deep_sections (tips/pitfalls) → faq → **verdict** |
| Informational | H1 → intro → **TL;DR** → whats_new → main_body (explanation) → deep_sections (examples/nuance) → faq → **verdict** |

**Intro**: prose right after H1, no heading. Always first. Hook + setup.
**TL;DR**: 50–80 words, italic, no heading, AFTER intro and BEFORE first H2. See `templates/tldr.md`. Used by vs/review/guide/informational. **NOT used by roundup/alternatives.**
**Ranked-list H2** (roundup/alternatives ONLY): position 3, right after intro. `## [Short Keyword]` heading (e.g., `## Best AI SEO Tools`) followed by a numbered/bulleted ranked list of products with one-line verdicts. THE Google featured-snippet section. See `templates/quick_answer.md`. Every product reviewed below must appear in this list.
**What's New in [Year]**: H2 right after the snippet section (TL;DR for non-roundup, ranked list for roundup/alternatives). 100–180 words, names specific dated recent changes from `research.json`. Required when the topic has recent shifts; SKIP when there's nothing specific to say (note `whats_new_skip: <reason>` in brief.md). See `templates/whats_new.md`.
**How We Tested**: H2 after What's New. 100–180 words, methodology trust block. Required for roundup/alternatives/vs/review (any type that tests products). SKIP for guide/informational. See `templates/how_we_tested.md`.

The article ENDS at the verdict. There is no meta section, no image references, no internal-link placeholders inside the article.

## How to use section templates

Each file in `templates/` describes:
- Purpose of the section
- Target word count
- Structural rules (hook type, paragraph length, etc.)
- Examples of good and bad output

**Read the relevant template BEFORE writing each section.** Do not improvise structure.

## Write section-by-section, not all at once

Drafting the whole article in one pass produces uneven quality and lets sections drift from the brief. Instead, write **one H2 at a time**, treating each section as a self-contained writing task. For each H2, work from this prompt structure:

```
Section H2: <heading from outline>
BLUF: <one-sentence thesis from the brief>
Required entities (mention at least 2): <from brief>
Data sources to cite: <competitor URLs or sections from research.json>
Word target: <from brief, e.g. 250–350 words>
Article-type tone: <from rules/article-types.md>
User context (if any): <from --context flag>
Brand voice notes (if any): <from voice_notes.md / brief.md "Brand voice notes" section>
Anti-patterns to avoid for this section: <from brief, plus rules/humanizer.md>

Write the section. Open with a sentence that proves the BLUF, not a transition. End with a specific takeaway. Match sentence rhythm, vocabulary, and POV from the brand voice notes (when supplied). No em dashes. No forbidden words. Every claim either cites a source or is deleted.
```

If `voice_notes.md` exists in the working directory, the buyer has supplied brand-voice samples. Read it once at the start of Stage 3 and keep it in mind for every section. The voice notes describe sentence rhythm, vocabulary patterns, POV, and tone signals — match them. They do NOT permit using forbidden words. If a buyer's voice sample uses "comprehensive", you still cannot. Match the rhythm and register, not the banned vocabulary.

Section dependencies: each section is drafted independently, but receives the brief, the full outline, and any previously drafted sections so the writing stays consistent. If a section turns out wrong, you can rewrite just that one without regenerating the whole article.

## Writing rules (from rules/seo.md, applied every section)

1. **Primary keyword placement**:
   - In title
   - In first 100 words
   - In at least 2 H2s
   - In conclusion
   - Natural density 0.8%–2.0% (don't stuff)

2. **Paragraph rules**:
   - Max 5 sentences per paragraph
   - Vary sentence length (short, long, short)
   - No passive voice unless grammatically necessary

3. **Voice**:
   - "You" language throughout
   - Contractions (you'll, it's, won't) — not corporate
   - Specific > generic always

4. **Formatting**:
   - Use bullet lists for 3+ parallel items
   - **NO markdown tables.** Use bullet lists for all structured data including pricing, features, pros/cons, and comparisons. Markdown tables render badly in Google Docs and scream "AI wrote this".
   - Bold the first mention of each product name
   - **Zero em dashes.** Replace every em dash with a period, comma, colon, or parentheses.

## Product sections (for roundups / alternatives / reviews)

Each product gets its own **H2** (not H3 — the product_reviews.md template shows H3 for legacy reasons; the binding rule in `rules/article-types.md` is H2 per product for roundup/alternatives).

Structure:

```
## #<Rank>. <Product Name> — <one-sentence verdict>

<Opening paragraph: what it is and who it's for, 2-3 sentences.>

**What it does well** (bulleted list of 4-6 specific features; avoid the heading "Key features" because "key" is a forbidden word in rules/humanizer.md)
- <specific feature — benefit tied to outcome>
- <specific feature>

**Rating block** (use colons only, no em dashes):
- **Best For:** <specific user segment>
- **Standout:** <the one differentiator>
- **Limitation:** <honest con, at least one>
- **Pricing:** <starting price from research.json — do NOT fabricate>

**Pros**
- <specific>
- <specific>
- <specific>

**Cons**
- <specific>
- <specific>

**Bottom line:** <one sentence>
```

**Do NOT fabricate star ratings (e.g., "4.5/5").** If `research.json` does not contain a rating, omit the rating field entirely. Score /10 is mandatory ONLY for `review` type (where you're reviewing one product in depth).

## FAQ section

4–6 questions from `brief.md`. Each answer is **40–60 words** — strict. Use the question verbatim as the H3.

## Optional meta block (default OFF)

By default, do NOT output a meta block. The article ends at `## Verdict ...`.

If the user explicitly asked for meta (or the invocation included `--include-meta`), append this small italic block AFTER the article body, separated by a horizontal rule. It is NOT a section of the article. Do not give it an H2.

```markdown
---

*Meta title: [50–60 chars, primary keyword front-loaded]*
*Meta description: [150–160 chars, primary keyword, value prop, implicit CTA]*
*Slug: [kebab-case, no stop words]*
```

This block exists so the buyer can copy it into their CMS. It does not count toward word count, structure gates, or reading-level checks.

## No images, no internal links, no placeholders

Do NOT insert any of the following anywhere in the article:

- `[IMAGE: ...]` placeholders
- `[INTERNAL_LINK: ...]` placeholders
- `[EXTERNAL_LINK: ...]` placeholders
- Markdown image syntax `![](...)`
- "Insert screenshot here" / "Add image of..." comments
- Alt-text suggestions

The output is clean prose. If the user wants images or internal links, they handle that separately in their CMS — that's not what this skill produces.

## Quality gates (check before Stage 4)

- [ ] Every rule in `rules/seo.md` is satisfied
- [ ] Every section from the type-specific order is present
- [ ] Word count is at or above `brief.md → target_word_count`
- [ ] Every H2 contains at least one entity from `brief.md`
- [ ] FAQ answers are 40–60 words each
- [ ] Final body H2 contains the word "Verdict"
- [ ] Article does NOT contain any image placeholders, internal-link placeholders, or external-link placeholders
- [ ] Article does NOT contain a meta block (unless `--include-meta` was passed)
- [ ] No forbidden words from `rules/humanizer.md` (pre-check; Stage 4 will enforce)

If any gate fails, revise before handing off to Stage 4.
