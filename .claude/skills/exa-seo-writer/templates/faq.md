# FAQ Section Template

## Purpose
Target People Also Ask (PAA) boxes and featured snippets.
FAQs also add keyword density naturally and increase time on page.

## Schema Format
Every FAQ must be schema-ready. Use this exact structure:

```markdown
## Frequently Asked Questions

### [Question in natural language]?

[Answer: 2-4 sentences. Direct, specific, authoritative.]

### [Question]?

[Answer]
```

This maps directly to FAQ Schema (JSON-LD) for rich results.

## Question Generation Strategy

### Method 1: Extract from SERP research
Use questions already found in competitor content (research.json → faqs section).
These are proven to match user intent.

### Method 2: Buyer decision questions
Generate questions a real buyer would ask before purchasing:

**Core prompt:**
"You're thinking about buying {product/service}. What questions would you ask before making a decision?"

This produces questions like:
- "Does [product] integrate with my existing tools?"
- "What happens if I outgrow the free plan?"
- "How long does setup actually take?"
- "Can I migrate my data from [competitor]?"

**For deeper/unique questions:**
"You're thinking about buying {product/service}. What are some less common questions you might have before buying?"

This produces questions competitors never cover:
- "What does the cancellation process look like?"
- "How often do they raise prices on existing customers?"
- "What's their track record on shipping data privacy?"
- "Do they have a public product roadmap?"

### Method 3: People Also Ask patterns
- "What is [keyword]?"
- "How does [keyword] work?"
- "Is [keyword] worth it?"
- "How much does [keyword] cost?"
- "What is the best [keyword] for [segment]?"
- "[Keyword] vs [alternative]: which is better?"

### Method 4: Conversion questions
- "Can I try [keyword] for free?"
- "What's the cheapest [keyword]?"
- "Is [keyword] safe/legitimate?"
- "How do I get started with [keyword]?"

### Priority order
1. SERP-extracted questions (proven demand)
2. Buyer decision questions (unique, high-intent)
3. PAA patterns (broad coverage)
4. Conversion questions (bottom-of-funnel)

Mix from all four. The buyer decision questions are your edge — competitors rarely include them.

## Answer Writing Rules

### Length
- **Ideal:** 40-60 words per answer
- **Maximum:** 80 words (longer gets truncated in SERP)
- **Minimum:** 25 words (too short looks thin)

### Structure
- **Sentence 1:** Direct answer to the question. No preamble.
- **Sentence 2:** Supporting detail, evidence, or context.
- **Sentence 3 (optional):** Specific example, number, or recommendation.

### Keyword Integration
- Include the primary keyword in at least 30% of answers
- Use secondary keywords naturally in the rest
- Never force a keyword where it doesn't fit

### What Makes a Great FAQ Answer

**Good:**
"Notion's free plan supports up to 10 team members with unlimited pages. For most small teams, this is enough to replace both a wiki and a task manager. Paid plans start at $8/member/month and add features like advanced permissions and API access."

**Bad:**
"Yes, Notion has a free plan. It's great for small teams. You should definitely try it out if you're looking for a project management tool. Many people love it."

### What to Avoid
- Never start with "Great question!"
- Never start with "Yes" or "No" alone — include context
- Never give vague answers: "It depends on your needs" without specifying WHAT needs
- Never repeat the question back in the answer
- Never use more than one link per answer

## Number of FAQs
- **Minimum:** 5 questions
- **Ideal:** 6-8 questions
- **Maximum:** 10 questions (more starts to feel like filler)

## FAQ Placement
- Place AFTER the main content, immediately BEFORE the Verdict
- Use H2 for "Frequently Asked Questions" (or shorter `## FAQ`)
- Use H3 for each individual question
- Do NOT add internal-link placeholders inside FAQ answers — the article is clean prose only
