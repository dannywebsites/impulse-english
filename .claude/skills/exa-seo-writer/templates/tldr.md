# TL;DR / Quick Take Template

## Where it goes
**After the intro, before the first H2.** Not before the intro. The intro always comes first — the TL;DR is the punchy answer summary that follows the intro hook.

## When to use it
- **Vs (head-to-head)**: yes — must name the overall winner
- **Review**: yes — must include the score /10
- **Guide**: yes — compresses the outcome for skim readers
- **Informational**: yes — gives the definition / core answer
- **Roundup / Alternatives**: NO. These types use the `## [Short Keyword]` ranked-list H2 as their snippet section instead. Adding a TL;DR on top would just duplicate the snippet role.

## Purpose
A 1-paragraph, italic, 50–80 word summary that sits AFTER the intro prose and BEFORE the first H2. It is NOT an H2 section, has no heading, and reads as a tight executive summary that follows the intro setup.

Two reasons it earns its place:
1. **Skim readers.** People reading on phones often skip after the intro hook. Giving them the answer immediately after the intro keeps them on the page.
2. **AI search snippet extraction.** Google AI Overviews, Perplexity, and ChatGPT all preferentially extract from the first 200–300 words. A tight, claim-first italic paragraph after the intro is what gets quoted.

## Format

```markdown
# [Article Title]

[Intro prose: hook + setup. 1–2 short paragraphs, no heading.]

*[TL;DR: 50–80 words. State the answer in the first sentence. Name the top pick or the core takeaway. End with one specific reason or detail.]*

## [First H2]
...
```

## Rules

- **Always italic.** Wrap the entire paragraph in `*` markers.
- **No heading.** Do NOT prefix with "TL;DR:" or "Quick Take:" or `## TL;DR`. The italics are the signal.
- **Word count: 50–80.** A hard ceiling. Anything longer is no longer a quick read.
- **Lead with the answer.** First sentence states the recommendation, the core conclusion, or the verdict in compressed form.
- **Include the primary keyword once.** Naturally — don't shoehorn.
- **No em dashes** (skill-wide rule).
- **NO META-COMMENTARY.** This is the most important rule and the one most often broken. The TL;DR is NOT a description of what the article covers. It IS the actual answer compressed.

## The meta-commentary trap (BANNED)

A TL;DR that describes the article's structure instead of giving the answer is a hard fail. The lint script will reject it. **Never** use phrases like:

- "This guide walks you through..."
- "This article covers..."
- "We'll cover..." / "We'll explore..." / "We'll dive into..."
- "By the end of this you'll know..." (that's an outcome contract — belongs in the intro, NOT the TL;DR)
- "In this guide..."
- "You'll learn how to..."
- "Read on to find out..."

The TL;DR replaces "what the article will tell you" with "the actual answer the article gives." Compress the article's conclusion into 50–80 words. If a reader stopped after the TL;DR, they should walk away with the core takeaway, not a list of upcoming sections.

### Concrete contrast

**WRONG (meta-commentary):**
*"This guide walks you through the audit, competitive analysis, and the specific fixes that work for beating AI search competitors in every major platform."*

(Fail: doesn't tell the reader anything. Just describes the article.)

**RIGHT (the actual answer):**
*"Beat AI search competitors with three moves. Audit your visibility on ChatGPT, Perplexity, Gemini, and Google AI Overviews using the same prompt set. Build topical authority around three to five entity clusters in your niche. Earn brand citations from sources those platforms already trust. Most sites skip step one and stay invisible."*

(Pass: a reader who stops here knows exactly what to do.)

## Examples

### Roundup
*Notion is the best project management tool in 2026 for teams under 50. It replaces a wiki, a task tracker, and a doc tool with one platform. Free up to 10 members, then $8 per member per month. Skip it only if you need Gantt charts. Most teams won't.*

### Guide
*Beating AI search competitors comes down to three moves. Audit your current AI visibility on ChatGPT, Perplexity, and Gemini. Build topical authority around 3-5 entity clusters. Earn brand citations from sources the AI platforms already trust. Most sites skip step 1.*

### Vs
*Pick Notion for collaborative docs and lightweight tasks. Pick Obsidian for solo knowledge management and deep linking. The two products solve different problems. Notion is the team tool. Obsidian is the personal one. Cost is similar. Choosing wrong wastes 6 months.*

### Informational
*Vector search retrieves results by meaning instead of keyword match. It uses embeddings, numerical fingerprints of text, to find conceptually similar items. Companies use it for semantic search, recommendation engines, and RAG-powered AI. The tradeoff is compute cost. Pinecone, Weaviate, and pgvector are the three main options in 2026.*

## What NOT to do

Do not start with "In this article, we'll cover..."
Do not start with "If you're looking for..."
Do not list what's coming up — that's the intro's job
Do not exceed 80 words
Do not break it into multiple paragraphs
Do not include questions
