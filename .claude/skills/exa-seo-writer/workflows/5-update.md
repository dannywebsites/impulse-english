# Stage 5 (alternate path): Update an existing article

**Goal:** Refresh a published article to match the current top-10 SERP. Preserve its URL, structure, and ranking equity. Apply only the changes the brief identifies.

This workflow is the alternative entry point to the skill — buyers use it instead of stages 1–4 when they want to refresh an existing article rather than write a new one.

## When to use this workflow

- An article's rankings have slipped because the SERP has moved on
- Stats in the article are dated (older than 12 months)
- New products / tools have entered the niche since publication
- Year freshness signal is stale ("X in 2024" → needs to become "X in 2026")
- Article was written before the buyer adopted this skill and needs a quality lift

## When NOT to use this workflow

- The article was published less than 6 months ago and still ranks well — leave it alone
- The original keyword no longer matches search intent (you'd be better off retiring the URL or writing a new article on a fresh keyword)
- The buyer wants a tonal rewrite — that's not what this workflow does. It updates content, not voice. Use the brand-voice library for voice changes.

## Inputs

- A live URL OR a local markdown file of the existing article
- (Optional) The target keyword — auto-inferred from H1 if not supplied
- (Optional) `references/brand-voice/` for tone matching during the rewrite

## Process

### Step 1: Run the refresh script

```bash
python scripts/refresh_article.py https://example.com/your-article \
    --keyword "best ai writing tools 2026"
```

Or, if you have the article locally:

```bash
python scripts/refresh_article.py --existing existing.md \
    --keyword "best ai writing tools 2026"
```

The script:
1. Fetches the live URL (or reads the local file) and converts to markdown
2. Runs fresh SERP research via Exa on the target keyword
3. Compares the existing article against the current top-10
4. Writes three files:
   - `existing_article.md` — your article, cleaned
   - `research.json` — fresh SERP data
   - `update_brief.md` — the gap analysis + rewrite plan

### Step 2: Read the update brief carefully

`update_brief.md` lists six categories of change:

1. **Topic gaps** — sections to add or expand (topics now in 2+ top-10 competitors that your article misses)
2. **Product / brand gaps** — tools or brands that have entered the niche since publication
3. **Dated stats** — sentences with years 2020–2024 that may be stale
4. **Word count gap** — how much more content the SERP now expects
5. **Universal updates** — title year refresh, `## What's New in [Year]` section, lint/verify/score gate compliance
6. **What NOT to change** — H1 (unless year), URL slug, sections that still work, product order (with rare exceptions)

Treat the brief as instructions, not suggestions. If the brief says a topic is missing, add it.

### Step 3: Plan the rewrite section by section

For each H2 in the existing article, decide:

- **KEEP** — the section still covers its topic well, the stats are current, the language passes humanizer rules. Leave it untouched.
- **EDIT** — the section's bones are right but stats need refreshing, paragraphs need tightening, em dashes need removing, or new entities need adding from `research.json`.
- **REPLACE** — the section is no longer relevant, or the SERP has fundamentally moved on from this angle. Replace with one of the topic-gap H2s from the brief.

For each topic gap that doesn't fit an existing section, plan a new H2 to insert. Use the section-by-section drafting prompt pattern from `workflows/3-write.md`.

### Step 4: Run all required default sections

Older articles often lack:

- The TL;DR italic block (vs / review / guide / informational types — NOT roundup/alternatives)
- The `## What's New in [Topic] for 2026` H2
- The `## How We Tested` H2 (roundup / alternatives / vs / review)
- A Verdict heading variant (instead of `## Conclusion` or `## Summary`)

The lint script will fail on missing default sections. Add them as part of the update.

### Step 5: Write the updated article

Output: `updated_article.md` in your working directory.

Apply the section-by-section drafting pattern. For each section:
- If KEEP, copy from `existing_article.md` verbatim
- If EDIT, write the revised version against the BLUF the brief implies
- If REPLACE or new H2, draft fresh against the brief's gap analysis and `research.json`

### Step 6: Run the gate scripts

```bash
python scripts/verify_claims.py updated_article.md research.json
python scripts/lint_article.py updated_article.md update_brief.md --article-type <type>
python scripts/score_content.py updated_article.md update_brief.md
```

The lint script reads `update_brief.md` for the keyword and target word count just like it would read a fresh `brief.md`. If something fails, fix and rerun.

### Step 7: Generate the changes summary

Write `changes_summary.md` in this format:

```markdown
# Update Summary

## Source
- URL: <original URL>
- Updated: <today's date>
- Word count: <existing wc> → <updated wc>
- Content score: <new score>/100

## Sections kept (no change)
- ## H2 Title 1
- ## H2 Title 2

## Sections edited
- **## H2 Title 3** — refreshed pricing for Notion, removed em dashes, added 2024 stat update
- **## H2 Title 4** — expanded by 200 words to cover the new top-10 angle on prompt monitoring

## Sections added
- **## How We Tested** — new E-E-A-T trust block, 140 words
- **## What's New in AI SEO for 2026** — names Surfer's answer-engine tracker (March 2025), Ahrefs' Brand Mentions report (late 2025), Semrush's AI Toolkit (Jan 2026)

## Sections removed
- **## H2 Title 5 (legacy)** — topic no longer in any top-10 competitor

## Stats refreshed
- "Notion serves 30M users" → "Notion serves 100M users (Q4 2025 milestone, per Notion blog)"
- (etc.)
```

This summary is what the buyer hands their editor, or keeps for their own records of what changed.

## Hard rules for updates

- **Preserve the H1** unless the year needs updating
- **Preserve the URL slug** — the goal is to keep the existing rankings, not start over
- **Don't rewrite for the sake of rewriting** — sections that still work stay
- **Don't fabricate** — every new stat must trace to `research.json` (verify_claims.py enforces this)
- **Don't over-add products** in a roundup. If the existing article has 5 products and the brief flags 8 new ones, the article doesn't suddenly become a 13-product list. Pick the strongest 1–2 to add (max 7 total products in the final article).
- **Apply the full default-sections rule** — TL;DR / What's New / How We Tested are required per article type just like for new articles. The buyer's old article likely doesn't have them.

## What this workflow does NOT do

- It does NOT republish to the buyer's CMS — that step is manual or via a separate tool
- It does NOT keep the buyer's images / internal links — those live in the CMS, not in the markdown. Review and replace them separately when you paste the updated article into your CMS.
- It does NOT regenerate brand screenshots — if the buyer wants fresh screenshots, run `scripts/screenshot.py` separately
