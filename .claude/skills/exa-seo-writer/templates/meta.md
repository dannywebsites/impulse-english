# Optional Meta Block (default OFF)

The skill does NOT output meta tags by default. The article ends at the Verdict section.

If the user explicitly asks for meta (or invokes with `--include-meta`), append this small italic block to the END of `article.md`, separated by a horizontal rule. It is NOT a section of the article. Do not give it an `## H2`. Do not count it toward word count, structure gates, or reading-level checks.

## Output format

```markdown
---

*Meta title: [50–60 chars, primary keyword front-loaded]*
*Meta description: [150–160 chars, primary keyword once, value prop, implicit CTA]*
*Slug: [kebab-case, no stop words]*
```

## Rules when present

### Meta title
- 50–60 characters (never over 60)
- Primary keyword as close to the front as possible
- Include a number, year, or modifier when natural
- Match the dominant title pattern from SERP research
- Do NOT stuff multiple keywords

### Meta description
- 150–160 characters
- Include primary keyword once, naturally
- Include a specific benefit or number
- End with implicit or explicit CTA
- Do NOT start with "This article..." / "Learn about..." / "Discover..."

### Slug
- All lowercase, hyphens between words
- 3–5 words maximum
- Include primary keyword
- Remove stop words (the, a, an, in, for, on)

## When to NOT include meta

Default to omitting the block unless the user has explicitly requested it. Many publishing workflows manage meta separately in the CMS or a Yoast/RankMath equivalent, and including it inside the article file just creates copy-paste noise.

## Examples (only output if requested)

```markdown
---

*Meta title: Best Project Management Tools 2026 (Tested & Ranked)*
*Meta description: We tested 12 project management tools over 6 months. See which save time, which waste it, and the one we'd pick for a 5-person team.*
*Slug: best-project-management-tools*
```
