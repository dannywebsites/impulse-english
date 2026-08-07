# What's New in [Year] Section Template

## Purpose
A short H2 section near the start of the article that names specific recent changes in the topic. Hits the year-freshness signal Google rewards, and gives readers a reason to trust this article over older top-ranking ones that haven't been updated.

This section is mandatory for any article targeting `[Year]` in the title. Skip it only if the topic genuinely has no meaningful changes in the last 12 months (rare).

## Position in the article

Place RIGHT AFTER the intro, BEFORE the Quick List / Quick Answer / Quick Verdict.

```
# Title (with year 2026)
*[TL;DR italic block]*
[Intro prose]
## What's New in [Topic] for 2026
## Quick Answer (or Quick List / Quick Verdict)
[... rest of article ...]
```

## Heading variants

Pick the one that places a secondary or LSI keyword in the H2:

- `## What's New in [Topic] for 2026` — neutral default
- `## What's Changed in [Topic] in 2026` — slightly more journalistic
- `## How [Topic] Has Evolved in 2026` — for informational topics
- `## Why 2026 Changes [Topic]` — for topics with a single major shift

Do NOT use `## 2026 Updates` (vague) or `## Latest News` (lazy).

## Word count

100–180 words. Tight. This is a freshness anchor, not a deep dive.

## Structure

### Sentence 1: The headline change
- Name the single biggest shift since 2024
- Make it specific. Not "AI is everywhere" but "Google rolled out AI Overviews to 100+ countries by Q1 2026"

### Sentence 2-3: The supporting changes
- 2-3 more specific shifts: tool launches, pricing changes, regulatory moves, behaviour data
- Each shift is 1 sentence, with a date or number where possible

### Sentence 4: What this means for the reader
- One sentence that connects the changes to the reader's decision
- Frames why the article's recommendation differs from older articles

### Closing sentence
- Optional. Bridges into the next section.

## Sourcing rules

- Every change you name must come from `research.json`. If a competitor article mentions it, you can cite it.
- Do NOT fabricate dates, product launches, or version numbers. The `verify_claims.py` script will flag fabricated dates.
- If you can't ground a "what's new" claim in research.json, omit it.

## Example: Roundup ("best AI SEO tools 2026")

```markdown
## What's New in AI SEO for 2026

The AI SEO market has fragmented sharply since 2024. Surfer added an answer-engine tracker in March 2025 and now reports rankings on ChatGPT, Perplexity, and Gemini alongside Google. Ahrefs released its Brand Mentions report for AI search visibility in late 2025. Semrush's AI Toolkit, launched January 2026, bundles content briefs, on-page scoring, and prompt monitoring into one workflow. The result: tools that just track Google rankings are no longer enough. The recommendations below all cover answer engines, not just classic SERPs.
```

## Example: Guide ("how to beat AI search competitors")

```markdown
## What's Changed in AI Search for 2026

Three shifts have rewritten the AI search playbook since 2024. Google AI Overviews now appear above 35% of informational queries, taking clicks that used to flow to position 1. ChatGPT's web search rolled out to all users in October 2025, and Perplexity hit 250 million queries per month by Q1 2026. The old "rank first on Google" strategy is no longer enough. The five steps below treat AI platforms as separate ranking surfaces with their own visibility signals.
```

## Example: Informational ("what is vector search")

```markdown
## How Vector Search Has Evolved in 2026

Vector databases left the experimental tier in 2025. Pinecone passed 10,000 paying customers in mid-2025. pgvector hit version 0.7 with hybrid search in early 2026. The big shift: AWS, GCP, and Azure all now ship native vector services, which means most teams no longer need a separate vendor. Pricing has dropped roughly 40% across the board since 2024. The basics below still hold, but the "do I need this?" calculus has changed.
```

## What NOT to do

- No vague openers ("The world of X has changed dramatically")
- No predictions or speculation ("By 2027, X will be...")
- No filler about "the industry" or "the landscape"
- Every claim has a date, number, or named product
- Do NOT write more than 180 words — this is a freshness anchor, not a chapter
