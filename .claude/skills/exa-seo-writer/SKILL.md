---
name: exa-seo-writer
description: KEYWORD-FIRST English long-form SEO drafting, powered by live Exa top-10 SERP research. Use when the user names a TARGET KEYWORD and wants a competitive draft — "write an SEO article about <keyword>", "rank these keywords for me", "refresh my article at <url>" — or asks to score/lint an existing draft. Outputs a plain article.md + brief.md + score.json to the current folder. It writes TEXT ONLY — NO images, NO YAML front-matter, NO CMS fields, and it never publishes. NOT the Impulse blog pipeline and NOT for Spanish content: for an Impulse English Academy blog post with real photos and Astro front-matter for the auto-publish pipeline, use seo-blog-writer instead. Also NOT /geo-pages (service/location pages) and NOT /one-shot-website-build (site copy).
---

# exa-seo-writer

> **Which writer am I?** This is the **keyword-first English drafter**. It buys you one thing the
> other writer does not have: **live Exa top-10 SERP research** against the keyword you name, so the
> draft is shaped by what is actually ranking today.
>
> | | **exa-seo-writer** (this skill) | **seo-blog-writer** (the Impulse pipeline) |
> |---|---|---|
> | Trigger | you name a **target keyword** | you ask for a **blog post / article to publish** |
> | Research | **Exa** live top-10 SERP (metered key) | Gemini + DataForSEO + Firecrawl |
> | Language | English | Spanish (Peninsular) / any — per-brand config |
> | Images | **none, ever** | real photos via `source-photos` |
> | Output | bare `article.md` + `brief.md` + `score.json` | Markdown **+ YAML front-matter** for the CMS |
> | Publishing | **never** | feeds `auto-publish-pipeline` |
>
> **Impulse's live blog runs on `seo-blog-writer`.** Nothing this skill produces is publish-ready for
> `impulse-english`: it emits no front-matter, no images, and no Astro content-collection fields.
> Treat its output as a research-backed **draft** that a human (or `seo-blog-writer`) takes onward.
> If the request was "write a blog post for Impulse", you are in the wrong skill — stop and switch.

You are executing the **exa-seo-writer** skill. Your job is to produce a long-form, research-backed SEO article for the user's target keyword that can compete with the top 10 results on Google.

## First-run setup (run this FIRST, every invocation)

Before doing anything else, run two checks. If either fails, walk the user through fixing it conversationally — don't tell them to "run a script". Do the work for them.

The skill is meant to feel as simple as "ask Claude to write an article". Setup happens in-conversation, on first run, then never again.

### Check 1: Python dependencies

Try to import the one library:

```bash
python -c "import exa_py" 2>&1
```

If this fails, the buyer hasn't installed the dependency. Say something like:
*"I need to install one Python package (exa-py) before I can research the SERP. Want me to run `pip install -r requirements.txt` for you?"*

If they say yes, run it from the skill directory. If it succeeds, move on. If pip itself fails (missing pip, permission issue), tell them what's wrong specifically — don't give a generic "setup failed" message.

### Check 2: Exa API key

Look for `EXA_API_KEY` in `.env` (in the skill directory) or in the environment:

```bash
test -f .env && grep -q "^EXA_API_KEY=." .env || echo "missing"
```

If missing, ask conversationally:

*"This skill uses Exa to pull the actual top-10 search results — that's how it knows what to compete against. You'll need a free API key from https://exa.ai (signup takes 2 minutes, 1,000 searches free). Have you got one already? Paste it here, or open exa.ai in a new tab and grab one."*

When they paste the key:
1. Save it to `.env` in the skill directory: append `EXA_API_KEY=<key>` (or update the existing line)
2. Test it with a tiny Exa call: `python -c "from exa_py import Exa; Exa('<key>').search('test', num_results=2)"`
3. If the test passes, confirm: *"Key works. Saved to .env."*
4. If the test fails, show the buyer the actual error and ask them to double-check the key.

### Once both pass

If the buyer is on first-run, briefly confirm you're set up: *"You're all set. Now let's write the article."* Then proceed to Pre-Stage (clarification questions) below.

If both checks already passed silently (returning buyer), don't say anything about setup — just go straight to the article work. They've seen the setup flow once; they don't need to see it again.

### CLI alternative (for buyers who prefer it)

If a buyer asks "how do I set this up without going through Claude?", they can run `python scripts/setup.py` from the skill directory. Same checks, same prompts, but in a terminal. Either path works.

## Approach: SERP-data-driven, not API-driven

This skill does NOT rely on third-party SEO platform APIs (Ahrefs, Semrush, etc.) for keyword data. It pulls the actual top-10 search results via Exa, downloads the full text of each competitor article, and extracts everything we need from that raw text:

- **Primary, secondary, and LSI keywords** — by TF-IDF reasoning on the competitor corpus (Stage 2)
- **Entities** — products, tools, prices, technologies, dates — by NER-style pattern extraction
- **Co-occurrence pairs** — terms that travel together across competitors (signals topical depth)
- **FAQ targets** — pulled from competitor headings and "People Also Ask" patterns
- **Word count + structure** — what the SERP actually rewards right now

This Surfer-style "score against the live SERP" approach is more robust than API-based keyword tools because it reflects today's ranking signals, not a vendor's curated database. It also means the only paid dependency is Exa (much cheaper than a full SEO platform subscription).

The buyer never has to wire up an Ahrefs / Semrush / SEMrush / Moz API key. Just an Exa key.

## Two entry points

This skill has two workflows. Choose based on what the user asks for:

1. **Write a new article** (default) — buyer gives a target keyword. Run optional Stage 0, then stages 1–4: research → brief → write → humanize. Outputs `article.md`. Optionally run Stage 5 to capture brand screenshots.

2. **Refresh an existing article** — buyer gives a published URL (or local file). Use the alternate workflow at `workflows/5-update.md`. Outputs `updated_article.md` + `changes_summary.md`.

## Optional Stage 0: Keyword prioritization (when buyer hasn't picked a keyword yet)

If the buyer dumps a list of candidate keywords (or a CSV) and asks "which one should I write?", run keyword prioritization BEFORE the main pipeline:

```bash
python scripts/prioritize_keywords.py keywords.csv --out ranked.csv
# or
python scripts/prioritize_keywords.py --keywords "kw1, kw2, kw3" --out ranked.csv
```

The script pulls Exa SERP for each candidate, scores each on competitive depth, intent clarity, word-count band, and title saturation, and returns a ranked CSV. The buyer picks the top keyword and feeds it into Stage 1.

Skip this stage if the buyer already knows the target keyword.

## Optional Stage 5: Brand screenshots (after Humanize)

For roundup / alternatives / review / vs articles, the buyer often wants real screenshots of brand homepages or product UIs to embed in their CMS. The article body stays clean prose — screenshots live separately:

```bash
python scripts/install_screenshot_deps.py    # one-time, ~200 MB Playwright + Chromium
python scripts/screenshot.py \
    https://product-a.com https://product-b.com \
    --article article.md --out screenshots/
```

This produces `screenshots/*.png` plus `screenshot_manifest.md` mapping each PNG to the article H2 where it most likely belongs (heuristic match on domain root). The buyer drops the screenshots into their CMS at the indicated sections.

This stage is optional. If the buyer doesn't ask for screenshots, skip it. The article works fine without.

## Optional: HTML preview

After the article passes the gates, the buyer can render it as a styled HTML page to read in a browser before publishing. Catches layout and paragraph-density issues markdown doesn't surface:

```bash
python scripts/preview.py article.md --open
```

This writes `article.html` next to `article.md` and (with `--open`) launches it in the default browser. The HTML is self-contained — no external CSS, no CDN, mobile-friendly. It styles the TL;DR italic block as a callout and the optional meta block as a CMS-handoff stanza so they're visually distinct from the article body. Run this at the very end, after lint/verify/score all pass.

## Inputs

The user provides a target keyword. Optional flags:
- `--include-meta` → append a small italic meta block (title/description/slug) AFTER the article. Default OFF.
- `--context "..."` → user-provided angle, audience, or brand-voice notes the brief and draft should respect.
- `--no-brand-voice` → skip reading `references/brand-voice/`. Use the default voice (concise, clear, grade-7, opinionated).
- `--brand-voice path/to/folder` → use a different brand-voice folder than the default `references/brand-voice/`.

If `references/brand-voice/` contains sample articles (and `--no-brand-voice` was not passed), the brief stage runs `scripts/extract_voice.py` to analyse the samples and produces `voice_notes.md`. The writing stage matches the extracted sentence rhythm, vocabulary, paragraph structure, and POV. See `references/brand-voice/README.md` for setup details. This feature is OPTIONAL — the skill works fine without samples.

Examples:
- `best project management tools 2026`
- `how to start a dropshipping business`
- `notion vs obsidian`
- `what is vector search`

## Pre-Stage: Clarify (ask the user 2–3 questions before running)

The biggest reason an article comes out wrong is missing context the user assumed you knew. BEFORE running Stage 1 (the research call costs ~5 minutes and Exa credits), spend 30 seconds asking the user the questions that will shape every downstream stage.

Always ask, even when the user has just typed `write an SEO article about "X"`:

1. **"Who's the audience?"** — solo founders, marketing teams at SaaS companies, e-commerce owners, etc. Affects tone and what's "obvious" vs needs explaining.
2. **"Is there a product, brand, or angle you want me to feature?"** — if yes, weave it into the brief and the Verdict naturally. If no, write brand-agnostic.
3. **"Any specific things to include or avoid?"** — competitor products to exclude from a roundup, a contrarian angle they want to take, a sub-topic they care about. This is the `--context` field.

If the user is on the refresh workflow (existing article URL), also ask:

4. **"Are there any sections you want to keep verbatim, or specific changes you've already planned?"** — preserves their voice where it's working.

These questions take 30 seconds for the user and save 10+ minutes of revision later. Don't run them as a script-style interrogation; ask conversationally, in one message, and accept "no preference / use your best judgment" for any of them.

If the user explicitly says "skip the questions, just do it" — proceed with sensible defaults and note the assumptions in the brief so they can override later.

## Process

Execute these four stages in order. **Do not skip stages.** Each stage has its own workflow file with detailed instructions. The four stages mirror an experienced editor's workflow: research the SERP, plan the article with claims tied to evidence, draft section-by-section, then humanize and verify.

### Stage 1: Research (`workflows/1-research.md`)
Run `scripts/research.py "<keyword>"` to pull top-10 competitor content via Exa API. The script outputs `research.json` with full competitor text, URLs, word counts, and extracted headings. Read this file before proceeding.

### Stage 2: Brief (`workflows/2-brief.md`)
Build a content brief from the research output. You must:
- Detect the article type (see `rules/article-types.md`)
- Extract entities, primary/secondary/LSI keywords, and co-occurrence pairs from competitor text
- Compute target word count from `research.json → stats → target_word_count`
- Draft an H1 + H2 outline that beats the competitor structure
- Write a one-sentence **BLUF** (Bottom Line Up Front) under each H2 — the thesis the section must prove
- List required FAQs (from "People Also Ask" signals in the competitor content)
- Save the brief to `brief.md` so the user can audit it

### Stage 3: Write (`workflows/3-write.md`)
Write the article one H2 at a time, using the BLUF + entities + word target the brief specifies for each section. Use the section templates in `templates/`. The order of sections depends on the article type. **Every type ends with `## Verdict` (or a Verdict variant — see below).**

**Always: H1 first, intro prose second.** The intro is never preceded by anything. Every article opens with the H1 title, then the intro paragraph(s).

**Snippet capture works two ways, and they're mutually exclusive:**

1. **Roundup / Alternatives → Ranked-list H2.** Right after the intro (position 3), the article has `## [Short Keyword]` (e.g. `## Best AI SEO Tools`) followed by a numbered/bulleted ranked list of products. This is what wins the Google featured snippet for "best X" / "top X" / "X alternatives" queries. **Roundup and alternatives have NO TL;DR** — the ranked-list section serves the snippet role.

2. **Every other type (guide / informational / vs / review) → TL;DR italic block.** A 50–80 word italic paragraph that comes AFTER the intro prose, BEFORE the first H2. Lead with the answer. The TL;DR captures the AI-search snippet (ChatGPT, Perplexity, AI Overviews) and the Google snippet for these types.

The TL;DR is never the first thing in the article. Intro always comes first, then TL;DR.

Section orders:

- **Roundup / Alternatives**: H1 → intro → **`## [Short Keyword]` + ranked list (snippet winner)** → whats_new → how_we_tested → product_reviews (max 7) → buying_guide → faq → verdict
- **Vs (head-to-head)**: H1 → intro → **TL;DR italic block** → whats_new → how_we_tested → product_A_overview → product_B_overview → per-dimension H2s → similar_alternatives → which_fits → verdict
- **Review**: H1 → intro → **TL;DR (with score /10)** → whats_new → how_we_tested → product_deep_dive → pros_cons → pricing → alternatives → faq → verdict
- **Guide**: H1 → intro (with outcome contract) → **TL;DR** → whats_new → main_body (steps) → deep_sections → faq → verdict
- **Informational**: H1 → intro → **TL;DR** → whats_new → main_body → deep_sections → faq → verdict

Default required sections:

- **Intro prose** (always first, every type). Hook + setup. No heading.
- **TL;DR** — italic paragraph AFTER the intro, BEFORE the first H2. 50–80 words. No heading. Required for vs/review/guide/informational. **NOT used in roundup/alternatives.** See `templates/tldr.md`.

Type-conditional default sections:

- **Ranked-list H2** — `## [Short Keyword]` + numbered/bulleted ranked list. Required for roundup/alternatives only. Position 3 (right after intro). See `templates/quick_answer.md` (kept under the legacy filename — content is now specifically the ranked-list pattern).
- **What's New in 2026** — H2 after the snippet section (TL;DR for non-roundup, ranked list for roundup). 100–180 words on dated, specific recent changes pulled from `research.json`. **SKIP if the topic has no meaningful 2025–2026 changes** — in that case the brief should include a `whats_new_skip: <reason>` line, and the lint script will honor it.
- **How We Tested** — H2 right after What's New. Required for any article type that involves testing products: `roundup`, `alternatives`, `vs`, `review`. SKIP for `guide` and `informational`. See `templates/how_we_tested.md`.

The article ends at the Verdict. There is no meta block (unless `--include-meta`), no image placeholders, no internal-link placeholders inside the article.

See `rules/article-types.md` for the full structure, title format, and intro rules per type. Enforce every rule in `rules/seo.md` and `rules/article-types.md` as you write.

### Stage 4: Humanize, verify, and lint (`workflows/4-humanize.md`)
Apply every rule in `rules/humanizer.md`. Then run two scripts that programmatically enforce the gates the agent typically forgets:

```bash
python scripts/verify_claims.py article.md research.json   # flags fabricated stats/prices
python scripts/lint_article.py article.md brief.md         # FK grade, em dashes, paragraph length, keyword placement, forbidden phrases
python scripts/score_content.py article.md brief.md        # produces score.json + content score summary
```

Every script must exit 0 before you output. If any flags an issue, fix the article and rerun.

## Output

Write the final article to `./article.md` in the user's current working directory.

If the user passed `--include-meta`, append the optional meta block as a small italic stanza separated by a horizontal rule. See `templates/meta.md`.

After all gates pass, surface the content score (from `scripts/score_content.py`) to the user as a short summary: primary keyword density, secondary keyword coverage, entity coverage, word count vs target.

If the user has the Google Docs MCP server installed AND passes `--google-doc`, also publish to Google Docs via the MCP (do not use the bundled `scripts/publish.py` unless the MCP is unavailable).

## Rules (load before writing)

Read these files in order before you start Stage 3:

1. `rules/seo.md` — keyword density, placement, word count targets, optional meta block format
2. `rules/humanizer.md` — forbidden words and anti-AI patterns
3. `rules/article-types.md` — type detection + section ordering
4. `rules/excluded-domains.md` — domains to exclude from competitor analysis

## Quality gates

Before outputting the final article, run every check below. **If any gate fails, revise the article and re-run all gates. Do not output until every gate passes.** The `lint_article.py`, `verify_claims.py`, and `score_content.py` scripts automate most of these — run them, do not eyeball.

### Reading level (blocking)

- [ ] **Flesch-Kincaid grade 7 or under** measured by `scripts/lint_article.py`. Eyeballing this is unreliable.
- The script measures FK on **prose only** — it strips headings, bullet items, code blocks, and the optional meta block before scoring.
- **Technical topics**: If the keyword is unavoidably technical (e.g., "what is vector search"), the grade-7 ceiling still applies. Define every jargon term in plain English on first use. If a sentence can't hit grade 7 without butchering accuracy, shorten it until it can.

### Forbidden patterns (blocking, scripted)

- [ ] **Zero forbidden words** from `rules/humanizer.md`. The lint script scans for them.
- [ ] **Zero forbidden phrases** ("In conclusion", "Let's dive in", "In today's...", "Buckle up", etc.).
- [ ] **Zero em dashes** anywhere in the article. The lint script counts every `—`. Replace each with period, comma, colon, or parentheses.
- [ ] **No markdown tables**. All structured data uses bullet lists only.
- [ ] **No sentence starts with** "Moreover,", "Furthermore,", "Additionally,", "In addition,".
- [ ] **Max 1 rhetorical question** in the entire article (in the body — FAQ questions don't count).

### Word count (blocking)

- [ ] Word count is at or above the target from the brief (`research.json → stats → target_word_count`, typically 1,500–3,500 words).

### Primary keyword placement (blocking, scripted)

- [ ] Primary keyword (or a close variant — plural, or with a natural connector word like "in") appears in the **title**.
- [ ] Title includes the year 2026.
- [ ] Primary keyword appears in the **first 100 words**.
- [ ] Primary keyword appears in **at least 2 H2s** — variants count, including the Verdict heading.
- [ ] Primary keyword appears in the **Verdict** section.

### Structure (blocking)

- [ ] **Final body H2 contains the word "Verdict"** — accepted forms include `## Verdict`, `## Our Verdict`, `## Verdict on [secondary keyword]`, `## The Verdict`, `## [secondary keyword] Verdict`. Never `Conclusion`, `Final Thoughts`, or `Summary`.
- [ ] Section ordering matches the article type (see Stage 3 above and `rules/article-types.md`).
- [ ] Roundup/alternatives: **max 7 products**, Quick List H2 appears before product sections.
- [ ] Every paragraph is **5 sentences or fewer** in body prose. (FAQ answers can run slightly over if a 40–60 word answer needs it — the lint script exempts the FAQ section.)
- [ ] New H2 or H3 every 250–300 words.
- [ ] Article body does NOT contain image placeholders, internal-link placeholders, or external-link placeholders.

### Entities & specificity (blocking)

- [ ] Every body H2 contains at least one entity from the brief (product, brand, number, year, or specific example). Structural headings like `## FAQ` and `## Quick Answer` are exempt.
- [ ] No generic filler claims ("SEO is important", "Many teams use X"). Every claim is either specific or deleted.
- [ ] All stats, prices, percentages, and product features come from `research.json` — `verify_claims.py` flags fabrications.

### FAQ (blocking)

- [ ] FAQ has 4–6 questions, each answer 40–60 words, placed immediately before the Verdict.

### Optional meta (only if `--include-meta`)

- [ ] If the user passed `--include-meta`, the meta block appears AFTER the article body, separated by a horizontal rule, formatted as small italic lines. Title is 50–60 chars; description is 150–160 chars; slug is kebab-case.
- [ ] If the user did NOT pass `--include-meta`, no meta block exists.

### Final read-through

- [ ] Read the full article top-to-bottom one more time. Ask: *Could a ChatGPT user with a basic prompt produce this?* If yes, the article fails. Rewrite the weakest sections.

## Why these constraints exist

- **Programmatic gates over eyeballed gates.** Iteration-1 testing showed agents reliably miscount em dashes, mis-measure FK grade, and skip the keyword-in-H2 rule. The lint and verify scripts make those failures impossible.
- **No images / internal links inside the article.** Placeholder syntax pollutes the output, creates AI-tells, and forces the buyer to clean it up. Their CMS handles images and links.
- **Meta is optional.** Most buyers manage meta in their CMS or a Yoast/RankMath equivalent. Including it inline is copy-paste noise. Only output it on request.
- **BLUFs in the brief.** Without a per-section thesis, sections drift into generic SEO filler. With a BLUF, each H2 is forced to prove a specific claim.
- **Verdict heading flexibility.** The original "must be exactly `## Verdict`" rule led agents to ignore the natural opportunity to place a secondary keyword in the final H2. The new rule allows variants like `## Verdict on AI Search` or `## Best AI SEO Tools Verdict`, which gives the article another natural H2 placement for an LSI keyword.

## Do not

- Do not use WebSearch as a substitute for `scripts/research.py`. The Exa research is the core IP of this skill.
- Do not write generic "SEO filler" language. Every sentence must say something specific.
- Do not fabricate statistics, prices, ratings, or product features. If `research.json` doesn't contain a claim, do not invent one. The `verify_claims.py` script will flag fabrications.
- Do not use em dashes. Zero allowed. The lint script counts every one.
- Do not use markdown tables. Bullet lists only.
- Do not insert image placeholders, internal-link placeholders, or external-link placeholders inside the article.
- Do not output a meta section unless the user explicitly asked for it (`--include-meta`).
- Do not end the article with `## Conclusion`, `## Final Thoughts`, or `## Summary`. The final body H2 must contain "Verdict".
- Do not skip the lint, verify, or score scripts. They are the gates.
- Do not output until every quality gate passes.

## If research fails

If `scripts/research.py` errors out (missing `EXA_API_KEY`, rate limit, network failure), stop and ask the user to fix the environment. Do not silently fall back to WebSearch — the user paid for Exa-quality research.
