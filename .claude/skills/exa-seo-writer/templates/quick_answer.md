# Ranked List Section Template

> **Filename note:** this file is named `quick_answer.md` for legacy reasons. It used to cover four different patterns (paragraph snippet, ranked list, comparison, definition). All of those except the ranked list have been removed: the TL;DR italic block at the top of every article now handles the snippet capture for guide / informational / vs / review. This file now describes the **Ranked List** pattern only — used by **roundup** and **alternatives** article types.

## Purpose

The Ranked List section is THE Google featured snippet target for "best X" / "top X" / "X alternatives" queries. It sits at position 3 of the article (right after the intro), and it's a short heading + bulleted ranked list of every product reviewed below. Search engines extract this as the snippet because the bulleted format and short H2 match what Google's snippet box renders.

The TL;DR italic block at the top of the article handles the AI-search snippet (ChatGPT, Perplexity, AI Overviews). The Ranked List handles Google's classic featured snippet. Both layer together — neither replaces the other.

## When to use this section

Only for `roundup` and `alternatives` article types. For every other type (`guide`, `informational`, `vs`, `review`), the TL;DR alone handles snippet capture and there is no Ranked List section.

## Format — keep it SHORT

The ranked list is segmentation only. Each item is the product name + ONE short tag stating who that product is best for. **Maximum 12 words per item.** No pricing. No feature lists. No caveats. No "learning curve" notes. Those belong in the deeper product-review H2s later in the article — not here.

```markdown
## [Short Keyword Heading]

1. **[Product Name #1]**: best overall for [audience]
2. **[Product Name #2]**: best for [use case]
3. **[Product Name #3]**: best budget pick
4. **[Product Name #4]**: best for [different use case]
5. **[Product Name #5]**: best [Product #1] alternative
6. **[Product Name #6]**: best for [niche audience]
7. **[Product Name #7]**: best free option
```

Notes:
- The H2 is the **short version of the title**. Drop "the [N] best", drop the year, drop modifiers like "(Tested & Ranked)". Keep the core noun phrase.
  - Title: `9 Best AI Writing Tools in 2026 (Tested & Ranked)` → H2: `## Best AI Writing Tools`
  - Title: `7 Best ChatGPT Alternatives in 2026 (Ranked & Tested)` → H2: `## Best ChatGPT Alternatives`
- Use a numbered list (`1. 2. 3.`) — search engines pick numbered ranked lists more reliably than bulleted ones for ranking-intent queries.
- Bold the product name. Use a colon to separate name from verdict (don't use em dashes anywhere).
- Every product reviewed in the body H2s below MUST appear in this list.

## Segmentation tags to use

Pick ONE segmentation tag per item from this pool. Don't invent overlapping tags ("best for X" / "best when X" / "ideal for X" pile up; pick one phrasing and stick with it):

- `best overall for [audience]` — the #1 pick
- `best for [use case]` — e.g., content optimization, keyword research, backlink analysis
- `best for [audience size]` — e.g., solo creators, mid-market teams, enterprise
- `best [Product] alternative on a budget` — preferred budget framing **only when the #1 product is verifiably expensive**. The framing maps to real search queries like "budget Ahrefs alternative" because Ahrefs starts at $99+/month. It does NOT work for products with strong free tiers — "cheap Notion alternative" isn't a real search pattern because Notion is mostly free. Use this tag only when the incumbent costs ~$50+/month with no free tier. If you can't verify the price from `research.json`, fall back to `best budget pick`.
- `best budget pick` — the safe default. Use whenever you can't verify the #1 is expensive enough to anchor a "budget alternative" framing against.
- `best free option` — if there's a viable free tier
- `best [Product] alternative` — when positioning vs a baseline product
- `best for [specific feature]` — e.g., AI content briefs, real-time scoring

## Required coverage in any roundup

Every roundup ranked list should include BOTH:

1. **A premium / "best overall" pick** — usually the most-feature-rich or most-respected option in the niche, often the priciest
2. **A budget pick** — the cheap alternative, ideally tagged as `best [Product] alternative on a budget` if there's an obvious incumbent in slot #1

These two anchors cover the two biggest search intents in any "best X" query: "what's the gold standard?" and "what's the cheap version?". Without both, the roundup loses about half its search volume because it can't capture "[product] alternative" or "best cheap [category]" queries.

If the roundup is structured around a non-price axis (e.g., a niche category where price isn't the differentiator), pick another natural duality instead — e.g., "best for solo creators" + "best for teams", or "best for beginners" + "best for advanced users". The point is that the ranked list should serve more than one searcher segment.

## Examples — GOOD vs BAD

### GOOD (segmentation only, tight)

```markdown
## Best AI SEO Tools

1. **Ahrefs**: best overall for serious SEO teams
2. **SEMrush**: best for mid-market all-in-one
3. **Surfer**: best for on-page content optimization
4. **ChatGPT**: best budget pick
5. **Writesonic**: best for content at scale
6. **Perplexity**: best for live research
7. **SE Ranking**: best Ahrefs alternative on a budget
```

### BAD (bloated with pricing, features, caveats)

```markdown
1. **Ahrefs** ($25+/month, best for serious SEO teams. Backlinks, rank tracker, content gap analysis. Learn curve: 2-3 days, but worth it.
2. **SEMrush** ($39–$189/month, best for mid-market. All-in-one: SEO, content, analytics, PPC insights. Easier than Ahrefs out of the box.
```

The bad version belongs in the deep product H2 sections later, not in the ranked list. The ranked list is a snippet target — Google pulls it as a featured snippet only if it's tight and scannable. Bloated lines kill snippet eligibility.

## Em dash replacement

The skill bans em dashes. The legacy template used `**Product** — verdict` but that was an em dash. Use one of these instead:

- `**Notion** for collaborative docs and lightweight tasks` (no separator at all, just a connecting word)
- `**Notion**: collaborative docs with task tracking` (colon)
- `**Notion** is the best for collaborative docs` (linking verb)

## Word count

The whole section is short. The H2 is one line. The ranked list is 7 lines × ~12 words = ~84 words. Total section: ~100 words. Keep it tight — this is a snippet anchor, not a section to expand.

## Examples

### Roundup ("best AI SEO tools 2026")

```markdown
## Best AI SEO Tools

1. **Surfer SEO**: best overall for content teams (real-time scoring, answer-engine tracking)
2. **Ahrefs** for the deepest competitive analysis (backlink data, keyword universe)
3. **Semrush** for marketing teams that need everything in one platform
4. **Frase** for solo creators who want fast briefs
5. **Clearscope** for agencies that hand briefs to writers
6. **Rankability** for fast on-page wins on existing pages
7. **Diib** for small businesses that want a one-click audit
```

### Alternatives ("best chatgpt alternatives")

```markdown
## Best ChatGPT Alternatives

1. **Claude** for longer documents and more careful reasoning
2. **Gemini** for Google Workspace integration and live web access
3. **Perplexity** when you want sourced answers, not just generated ones
4. **Llama 3.1** if you need a strong open model you can self-host
5. **Mistral Large** for European data residency
6. **Copilot** if you live in Microsoft 365
7. **DeepSeek** for the best price-to-quality ratio at API scale
```

## Rules

- Position 3 in the article. Right after the intro. Before What's New.
- Cap at **7 products**. Engagement drops sharply after 7 in roundups.
- Every product in the Ranked List has a corresponding H2 deeper in the article (the detailed product review).
- The product order here = the rank order. #1 is the one a smart reader should pick.
- Primary keyword (or close variant — see `scripts/lint_article.py` variant rules) appears in the H2.
- No em dashes. No markdown tables. No image placeholders. No internal-link placeholders.

## What this template does NOT cover anymore

The legacy version had patterns for:
- Paragraph snippets (definitions / "what is X" answers) — handled by TL;DR now
- Comparison bullets (vs articles) — handled by TL;DR now
- Process step snippets (how-to guides) — handled by TL;DR now

For those article types, the article goes: H1 → TL;DR → intro → What's New → body. No early Ranked List H2.
