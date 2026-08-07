# Main Body Template

## Purpose
The core content that delivers on the promise made in the introduction.
Format varies by article type.

---

## Format: Roundup / Listicle

### Structure
1. Featured snippet list (see quick_answer.md)
2. Individual product reviews (see product_reviews.md)
3. "How we tested" section (builds trust)
4. Buying guide / "How to choose" section

### "How We Tested" Section
- 100-200 words explaining methodology
- Specific criteria: features tested, time spent, team size
- This section builds E-E-A-T signals (Experience, Expertise)

**No markdown tables.** Structured data (pricing, features, pros/cons) goes in bullet lists — tables render badly in Google Docs and scream "AI wrote this".

---

## Format: How-To Guide

### Structure
1. Quick overview of what they'll achieve
2. Prerequisites / what they'll need
3. Step-by-step instructions (H2 per major step, H3 for sub-steps)
4. Common mistakes section
5. Tips and best practices
6. Expected results / timeline

### Step Writing Rules
- Each step gets an H2: `## Step [N]: [Action Verb] [What]`
- Start with the action, not background
- Include expected time per step if applicable
- Add "Pro tip" callouts for experienced readers

### Transitions Between Steps
- End each step with what the reader should have accomplished
- Start next step with what they'll do next
- Don't use "Next, let's..." — just move to the action

---

## Format: Comparison (X vs Y)

### Structure
1. Quick verdict (who should choose which)
2. Overview of Product A
3. Overview of Product B
4. Feature-by-feature comparison (H2 per feature category)
5. Pricing comparison
6. Final recommendation by use case

### Feature Comparison Sections
```markdown
## [Feature Category]: [Product A] vs [Product B]

**[Product A]:** [Specific description of how A handles this]

**[Product B]:** [Specific description of how B handles this]

**Winner:** [Product] — [one-sentence reason]
```

### Scoring (Optional)
- Use a simple 1-5 or 1-10 scale per category
- Summarize scores with a bullet list (NO markdown tables)
- Be decisive — ties feel wishy-washy

---

## Format: Informational / Educational

### Structure
1. Definition / "What is [topic]?"
2. How it works (mechanism/process)
3. Key benefits / why it matters
4. Potential drawbacks / risks
5. Real-world examples or case studies
6. Getting started / next steps

### Writing Rules for Informational Content
- Lead with the simplest explanation, then go deeper
- Use analogies for complex topics
- Include at least one real example for every concept
- Break technical jargon into plain English
- Link to authoritative sources for claims

---

## Universal Body Rules

### Paragraph Length
- Maximum 5 sentences per paragraph
- Ideal: 2-3 sentences
- One-sentence paragraphs for emphasis (use sparingly)

### Transitions
- Don't use: "Furthermore", "Moreover", "Additionally", "Let's dive into"
- Do use: Direct statements, questions, or just start the next point
- The heading itself serves as the transition

### Data and Evidence
- Every major claim needs support (competitor data, statistic, example)
- Use numbers from the SERP research when available
- Cite sources naturally: "According to [Source], ..." or "[Source] found that..."
- Every stat, price, percentage, or rating in the article must come from `research.json`. Never fabricate. If you can't trace a number to a competitor, delete the claim.

### No images, no internal links, no placeholders
- Do NOT insert `[IMAGE: ...]`, `[INTERNAL_LINK: ...]`, or `[EXTERNAL_LINK: ...]`
- Do NOT use markdown image syntax `![](...)`
- Do NOT add "screenshot here" / "add image of..." comments
- The article is clean prose only

### Keyword Placement
- Primary keyword: H2 headings (2-3 times), naturally in body
- Secondary keywords: H3 headings, body paragraphs
- LSI keywords: Sprinkled naturally — never forced
- Don't cluster keywords in one section — spread them out
