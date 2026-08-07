# Stage 4: Humanize

**Goal:** Apply the full anti-AI ruleset to the draft from Stage 3. Make it sound like a human SME wrote it.

## Inputs

- The draft article from Stage 3
- `rules/humanizer.md` — forbidden words and patterns

## Process

### 1. Forbidden word scan

Scan the full draft for every word in `rules/humanizer.md` → forbidden list. For each match:

- **First choice**: rewrite the sentence entirely to avoid the word
- **Second choice**: replace with a specific synonym (see suggestions in `rules/humanizer.md`)
- **Never**: just delete the word and leave the sentence limping

### 2. AI pattern scan

Read the draft looking for these patterns and fix them:

- **"In today's digital landscape..."** / "In the fast-paced world of..." → Delete entirely, start with a specific hook
- **"Whether you're a beginner or expert..."** → Delete, pick one audience and write to them
- **"It's important to note that..."** → Delete, state the thing directly
- **"Let's dive in"** / "Let's explore" → Delete, no meta-commentary
- **Tricolons** ("faster, smarter, better") → Use one specific adjective instead
- **"Not only... but also..."** → Rewrite as two short sentences
- **"Moreover"** / "Furthermore" / "Additionally" at sentence start → Delete, use a period
- **"In conclusion"** → Delete, just write the conclusion
- **Em dashes** — delete every single one. Zero allowed. Replace with periods, commas, colons, or parentheses.

### 3. Pacing check

Read each paragraph aloud (mentally). Fix:

- Paragraphs over 5 sentences → split
- 5+ sentences in a row of the same length → vary by splitting or merging
- Passive voice outside grammatically-necessary contexts → active
- Any paragraph that says nothing specific → rewrite with a concrete detail from `research.json`

### 4. Specificity pass

For every generic claim, ask "can I cite a number, brand, or example?" If yes, add it. If no, delete the claim.

Examples:
- **Generic**: "Many teams use project management tools."
- **Specific**: "Atlassian reports over 250,000 teams use Jira as of Q3 2025."

- **Generic**: "It's widely known that SEO is important."
- **Specific**: Delete. Nobody needs a statement that SEO is important in an SEO article.

### 5. Voice check

- "You" language throughout (not "users" or "people")
- Contractions (you'll, it's, won't, don't)
- First person singular is fine if the article has a distinctive POV — but not "we" unless it's a brand article

### 6. Em-dash purge

AI writing overuses em dashes as a tonal crutch. Rule:

- **Zero em dashes.** Not one. Not ever.
- Search the draft for every `—` character and replace it. Options in order of preference: period, comma, colon, parentheses. If none fit, the sentence is broken — rewrite it from scratch.
- En dashes in number ranges ($10–$15, 2–3 sentences) are fine but prefer hyphens where possible.

### 7. Final read

Read the whole article top to bottom. Ask:

- "Would a human subject-matter expert write this paragraph?"
- "Does this sentence earn its place?"
- "Is there a single sentence that could be deleted without losing meaning?"

If the answer to the last question is yes, delete the sentence.

## Quality gates (run the scripts — do NOT eyeball)

After your humanize pass is done, run all three scripts in order. The article is NOT done until every script exits 0.

```bash
# 1. Verify every numeric claim (price, rating, percentage, big-N stat) is in research.json
python scripts/verify_claims.py article.md research.json

# 2. Programmatic gate enforcement (FK grade, em dashes, forbidden phrases, paragraph length, keyword placement, etc.)
python scripts/lint_article.py article.md brief.md
# Pass --include-meta if the user requested it

# 3. Surfer-style content score (primary kw density, secondaries, LSIs, entities, word count)
python scripts/score_content.py article.md brief.md
```

If any script reports failures:

1. Read the failure messages carefully — they tell you exactly what to fix.
2. Revise the article (or the brief, if the brief was wrong).
3. Rerun ALL THREE scripts. Don't skip ahead just because one passed earlier.

The lint script accepts variants of the primary keyword (plurals, the same phrase with a connector word like "in" inserted) so the title `Best AI SEO Tools in 2026` will match keyword `best AI SEO tools 2026`. If the script rejects something you think should pass, the keyword on the brief is probably wrong.

The verify_claims script catches the one failure mode that's hardest to spot by eye: fabricated stats. LLMs invent confident-sounding pricing tiers ("starts at $39/month") and ratings ("4.7/5 stars") all the time. If verify_claims flags a claim, either replace it with a value from `research.json` or delete the sentence.

## Manual gates (still required)

The scripts catch the mechanical stuff. The final read-through is still on you:

- [ ] No section that reads as generic — every H2 should defend its BLUF
- [ ] No paragraph that says nothing specific
- [ ] Every H2 contains at least one entity from the brief
- [ ] Tone matches the article-type (see `rules/article-types.md`)
- [ ] Article would not be plausibly produced by ChatGPT with a basic prompt

## Output

Write the final article to `./article.md` in the user's current working directory.

The article ends at `## Verdict ...` (or whichever Verdict variant you chose). No meta block unless the user passed `--include-meta`. No image or internal-link placeholders.

If `--google-doc` was passed AND the user has the Google Docs MCP server, publish via MCP. Otherwise, if `--google-doc` was passed but no MCP, use `scripts/publish.py` as a fallback.

Report to the user:
- Final word count
- Final FK grade (from lint_article.py output)
- Content score (from score_content.py output) and which categories scored low
- File path where the article was saved
- Any verify_claims warnings you couldn't resolve

## Optional Stage 5: Brand screenshots

For roundup / alternatives / review / vs articles, the user often wants screenshots of the brands or products discussed. If they ask, OR if it's clear from context they'll need them (the article reviews 5+ named products, for example), suggest running:

```bash
# One-time setup (skip if already installed)
python scripts/install_screenshot_deps.py

# Capture screenshots
python scripts/screenshot.py \
    https://product-a.com https://product-b.com https://product-c.com \
    --article article.md --out screenshots/
```

This generates real PNG screenshots plus `screenshot_manifest.md` mapping each PNG to the article H2 where it fits. The article body itself stays clean prose — no `[IMAGE: ...]` placeholders, no markdown image syntax. The buyer drops the PNGs into their CMS at the indicated sections.

Do NOT run this automatically — only when the user asks for screenshots or it's clear they need them. Capturing screenshots takes ~3 seconds per URL and requires Playwright + Chromium installed (one-time setup).
