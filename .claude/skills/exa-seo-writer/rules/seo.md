# SEO Rules

These rules are non-negotiable. Every article produced by this skill must satisfy all of them.

## Word count strategy

**Target: `research.json → stats → target_word_count`**. The research script has already computed this as `avg × 1.1` (10% above the top-10 average). Use this value directly — do not recalculate.

- Absolute minimum floor: 700 words (if computed target is below, use 700)
- Absolute maximum ceiling: 5,000 words (if above, use 5,000)
- Typical roundup: 2,500–4,000 words
- Typical guide: 1,800–3,200 words
- Typical informational: 1,200–2,500 words

## Primary keyword placement

| Location | Required | Notes |
|---|---|---|
| Title (H1) | ✅ | At the front if natural |
| First 100 words | ✅ | In a natural sentence, not shoehorned |
| At least 2 H2s | ✅ | Variations count (plural, synonym, secondary keyword) |
| Verdict section | ✅ | Once, in a natural wrap-up |

## Keyword density

- **Minimum**: 0.8%
- **Maximum**: 2.0%
- **Target**: 1.0–1.5%

Count exact matches only. Do not stuff. If density is at 2.0% already, use synonyms.

## Semantic coverage

- **LSI keywords**: 15–100 from the brief must appear in the article
- **Entities**: at least 10 entities from `brief.md` must appear
- **Co-occurrence pairs**: 5+ of the identified pairs must appear

## Heading structure

- 1 H1 (the title)
- H2s for main sections
- H3s for sub-sections within H2s
- Maximum 2 levels of nesting (H2 → H3, not H3 → H4)
- Every H2 must contain at least one entity from the brief

## Paragraph rules

- **Max 5 sentences per paragraph** (was 4 — loosened slightly to give grade-7 writing room to breathe. At ~15 words/sentence × 5 sentences that's 75 words per paragraph ceiling, which lets complex ideas develop without becoming walls of text.)
- Vary sentence length across adjacent sentences (short, long, short, medium)
- No wall-of-text — break into sub-headings every 250–300 words
- Bullet lists allowed; use them for 3+ parallel items
- **No markdown tables** — bullet lists only, for every kind of structured data

## FAQ section rules

- 4–6 questions per article
- Each question is an H3
- Each answer is 40–60 words (strict)
- Use the question verbatim (same wording as "People Also Ask")
- FAQ placement: near the end, before the conclusion

## Optional meta block (off by default)

The article itself does not include meta tags. If the user explicitly asks for meta (or passes `--include-meta`), append a small italic block AFTER the article ends, clearly separated by a horizontal rule. It is NOT a section of the article and never counts toward the article's word count, structure, or quality gates.

Format:

```markdown
---

*Meta title: [50–60 chars, primary keyword front-loaded]*
*Meta description: [150–160 chars, primary keyword, value prop, implicit CTA]*
*Slug: [kebab-case, no stop words]*
```

If the user did not ask for meta, do not output this block at all. The article ends at the Verdict section.

## No internal links, external links, or images

This skill produces clean prose only. Do NOT insert:

- `[IMAGE: ...]` placeholders or any image references
- `[INTERNAL_LINK: ...]` / `[EXTERNAL_LINK: ...]` placeholders
- Alt-text suggestions
- Screenshot callouts
- Markdown image syntax `![alt](url)`
- Any "place an image here" / "add a screenshot here" comments

If the user wants images or links, that's a separate workflow they handle in their CMS or editor. Adding placeholder syntax pollutes the output and creates AI-tells.

## Bolded prefix labels (mandatory)

Whenever you introduce an item with a numbered or named label, the label MUST be bolded. The convention applies to:

- `**Mistake 1:** ...`, `**Mistake 2:** ...` (Common Mistakes sections)
- `**Step 1:** ...` (when used inline as a label, not as an H2)
- `**Tip 1:** ...`, `**Pro tip:** ...`
- `**Best For:**`, `**Standout:**`, `**Limitation:**`, `**Pricing:**`, `**Rating:**` (product rating blocks)
- `**Pros**` / `**Cons**` (review pros/cons headers)
- `**Pick [Product] if...**` (vs articles)
- `**Best overall:**`, `**Best for [use case]:**` (head-to-head bullet summaries)

The bold label visually anchors the item, makes the list scannable, and signals to readers that the content after the colon is the substance. Plain-text labels look like ChatGPT default output.

```markdown
WRONG:
Mistake 1: Assuming traditional SEO fixes will improve AI visibility.
Mistake 2: Ignoring niche AI platforms.

RIGHT:
**Mistake 1:** Assuming traditional SEO fixes will improve AI visibility.
**Mistake 2:** Ignoring niche AI platforms.
```

## Readability

- **Flesch-Kincaid grade level: 7 or under** (non-negotiable)
- Flesch Reading Ease target: 70+
- Prefer one-syllable words; Anglo-Saxon over Latinate
- Sentences average 15 words or fewer
- No jargon unless immediately defined
- Active voice default

See `rules/humanizer.md` for the full reading-level rationale and forbidden word list.
