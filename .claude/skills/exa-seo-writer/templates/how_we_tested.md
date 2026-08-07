# How We Tested Section Template

## Purpose
A trust-building H2 that states the testing methodology. Mandatory for **roundup**, **alternatives**, **review**, and **vs** article types. Skip for **guide** and **informational**.

This section serves Google's E-E-A-T signal (Experience, Expertise, Authoritativeness, Trust). Articles that demonstrate first-hand experience consistently outrank articles that don't, especially after the 2024 helpful-content updates.

## Position in the article

| Article type | Position |
|---|---|
| Roundup | After Quick List, BEFORE the first product H2 |
| Alternatives | After Quick List, BEFORE the first alternative H2 |
| Review | After Quick Verdict, BEFORE the product deep-dive |
| Vs | After Quick Verdict, BEFORE Product A overview |

For guides and informational types, this section does NOT apply. Do not insert one.

## Heading

`## How We Tested` (preferred)
or `## How We Picked` (slightly weaker but acceptable)
or `## Our Testing Process`

Do NOT use `## Methodology` (too academic), `## About This Roundup` (too vague), or anything starting with "Our Process for".

## Word count

100–180 words. One paragraph or two short paragraphs. The reader wants to know you did the work, not read your dissertation.

## Structure

### Sentence 1: Time + scale
- "We spent X weeks/months testing Y tools."
- Use a real, plausible number. Don't say "thousands of hours." Be specific.

### Sentence 2-3: The criteria
- 3–5 specific criteria you used to judge
- Each criterion is concrete: "ease of setup (measured in minutes from signup to first useful output)" not "we looked at usability"

### Sentence 4-5: What disqualified contenders
- Which tools you considered but cut, and the rule that cut them
- Builds credibility — you're not just listing every option

### Closing sentence
- Optional. Sometimes a one-line statement of bias ("We use Notion ourselves; we tried not to let that bias the ranking") earns trust.

## Examples

### Roundup ("best AI SEO tools 2026")

```markdown
## How We Tested

We spent six weeks testing 14 AI SEO platforms. Each tool ran on the same target keyword set: 10 commercial and 10 informational queries across SaaS, finance, and fitness. We scored each on five criteria: research depth (how many competitor signals it pulled), brief usefulness (how close to a publishable outline), in-editor scoring accuracy (vs the actual SERP), AI-platform tracking (ChatGPT, Perplexity, Gemini), and price per published article. Tools that lacked answer-engine tracking were cut. Tools that required a 12-month contract to access core features were also cut. We pay for Surfer and Frase out of our own pocket. We don't take affiliate revenue from any vendor on this list.
```

### Review ("ahrefs review")

```markdown
## How We Tested Ahrefs

We used Ahrefs for nine months across three sites. Two were SaaS blogs in competitive niches, one was a small e-commerce store. We tracked the same 50 keywords across all three sites, used the Site Explorer for 200+ competitor checks, and ran 40+ content briefs through Site Audit and the AI Content Helper. We compared against Semrush and Moz on the same keyword set. Pricing data is from Ahrefs' public site as of March 2026.
```

## Sourcing rules

- The numbers you use (weeks, tools tested, criteria count) must be plausible and consistent with the article's claims
- Do NOT fabricate testing data the article can't back up. If you don't actually have testing data, write the section as a "How We Picked" framing and reference research methodology instead
- If `--context` from the user includes their own testing notes, use those verbatim where possible

## What NOT to do

- "We thoroughly evaluated each tool" — vague, no specifics
- "After extensive research" — same problem
- Lists of fluff criteria ("user-friendly", "feature-rich", "powerful")
- Anything that sounds like ChatGPT default writing
- Em dashes (skill-wide rule)
- Forbidden words from `rules/humanizer.md` ("comprehensive", "thoroughly", "robust", etc.)
