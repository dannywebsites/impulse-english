# exa-seo-writer

A Claude Code skill that researches, briefs, writes, and humanizes long-form SEO articles that compete with top-10 Google results.

Built on a production pipeline that has generated hundreds of ranked articles.

## What makes it different

Most "AI SEO writers" are glorified prompts. This one is a full research pipeline:

1. **Real SERP research** — pulls top-10 competitors via Exa API, not just WebSearch
2. **Type-aware structure** — detects roundup / guide / informational / alternatives / review / vs and changes section order accordingly
3. **Entity extraction** — identifies products, tools, people, prices, and technologies from competitor content so your article has topical depth
4. **BLUF-driven outline** — every H2 in the brief gets a one-sentence thesis (Bottom Line Up Front) the writing stage must defend, so sections never drift into generic filler
5. **LSI + secondary keyword targeting** — above-average keyword coverage vs your top-10 competition
6. **Anti-AI humanizer** — strips ~260 forbidden words, fixes pacing, kills corporate jargon
7. **Programmatic quality gates** — three Python scripts enforce every rule the SKILL.md lists. The article does not output until they all pass:
   - `lint_article.py` — FK grade, em dashes, paragraph length, forbidden phrases, keyword placement, required sections
   - `verify_claims.py` — flags any stat, price, percentage, or rating not present in `research.json`
   - `score_content.py` — Surfer-style content score (0–100), with the missing keywords/entities listed
8. **Default sections that earn their place** — every article includes:
   - **TL;DR** italic block right after the title (50–80 words, optimized for AI-search snippet extraction)
   - **What's New in [Year]** H2 right after the intro (freshness signal, names specific recent shifts)
   - **How We Tested** H2 for roundup / alternatives / review / vs (E-E-A-T trust block)
   - Type-appropriate body sections, FAQ, and a Verdict that places a secondary keyword in the heading
9. **Clean output** — no image placeholders, no internal-link placeholders, no meta block by default. The article is ready to paste into a CMS.

## Quick start (5 minutes)

```bash
mkdir -p ~/.claude/skills && unzip exa-seo-writer.zip -d ~/.claude/skills/
cd ~/.claude/skills/exa-seo-writer
python scripts/setup.py
```

`setup.py` walks you through everything: dependency install, Exa API key, optional brand-voice samples, optional screenshot setup, and a test article so you see the skill work end-to-end.

If something fails or you bail, re-run `setup.py` — it picks up where you left off.

For a manual install (no walkthrough), see [INSTALL.md](INSTALL.md).

### What you'll need

- [Claude Code](https://claude.com/claude-code) installed
- Python 3.10+
- An [Exa API key](https://exa.ai) — sign up free, 1,000 searches included

## First run

After setup, open Claude Code in any project folder and just describe what you want:

> write an SEO article about "best ai writing tools 2026"

Claude picks up the skill, asks 2-3 quick clarifying questions (audience? angle? any brand to mention?), runs the full pipeline (research → brief → write → humanize → lint → score), and drops `article.md` in the folder you're in. Takes 6-10 minutes wall-clock for a typical article. The terminal shows progress and the final content score.

If the lint script flags issues, Claude fixes them and re-runs the gates until everything passes. You don't need to babysit it.

## Things you can ask the skill to do

| What you say | What the skill does |
|---|---|
| `write an article about "<keyword>"` | Full new-article pipeline → article.md + score.json |
| `refresh my article at <url>` | Pull live article, re-research, rewrite preserving structure → updated_article.md + changes_summary.md |
| `rank these keywords for me: <kw1>, <kw2>, <kw3>` | Score candidates by SEO opportunity → ranked_keywords.csv |
| `take screenshots of these brands: <url1>, <url2>` | Capture real PNGs (no AI images) → screenshots/ folder + manifest |
| `preview the article` | Render article.md as styled HTML in your browser |

The skill figures out which tool to run from how you phrase it. You don't need to remember exact commands.

## What the skill does on a "write me an article" request

1. **Asks you 2-3 clarifying questions** — audience, brand to mention, any specific angle you want
2. **Pulls real top-10 SERP** via Exa
3. **Builds a brief** with BLUFs per H2, primary/secondary/LSI keyword targets, entity targets, FAQ targets
4. **Writes the article** one section at a time, matching brand voice if you've set up samples
5. **Humanizes** — strips ~260 forbidden words and AI patterns
6. **Verifies claims** — every stat/price/rating must appear in research.json (kills hallucination)
7. **Lints** — 24 programmatic gates (FK grade ≤ 7, zero em dashes, keyword placement, structure, paragraph length, no AI-tells like "not only…but also" or repetitive openers)
8. **Scores** — Surfer-style content score 0-100 with breakdown by primary keyword density, secondary coverage, LSI coverage, entity coverage
9. **Outputs** `article.md` plus `score.json` and `brief.md` for audit trail

### Optional flags

- `--include-meta` — append a small italic meta block (title/description/slug) AFTER the article. Default OFF.
- `--context "..."` — pass an angle, audience note, or brand voice direction the brief and draft must respect. Example: `--context "Audience is solo founders. Heavy on quick wins, light on theory."`
- `--no-brand-voice` — skip reading `references/brand-voice/` for this run.
- `--brand-voice path/to/folder` — point at a non-default brand-voice folder.
- `--google-doc` — publish to Google Docs via the MCP if installed

### Companion commands

```bash
# Score a list of candidate keywords before writing
python scripts/prioritize_keywords.py keywords.csv --out ranked.csv

# Capture real brand screenshots for an article you wrote
python scripts/install_screenshot_deps.py   # one-time setup
python scripts/screenshot.py https://surferseo.com https://ahrefs.com \
    --article article.md --out screenshots/

# Refresh an existing published article (alternate workflow)
python scripts/refresh_article.py https://example.com/your-article \
    --keyword "best ai writing tools 2026"
# → produces existing_article.md, research.json, update_brief.md
# → then follow workflows/5-update.md to do the rewrite

# Preview the finished article in your browser
python scripts/preview.py article.md --open
```

## Included

- `SKILL.md` — orchestration logic for the new-article and refresh workflows
- `workflows/` — 5 playbooks: research, brief (with BLUFs), write (section-by-section), humanize (lint/verify/score gates), and update (refresh existing articles)
- `rules/` — SEO rules, humanizer word lists, article type routing, excluded domains
- `templates/` — section templates (introduction, ranked-list/quick_answer, tldr, whats_new, how_we_tested, main_body, deep_sections, product_reviews, faq, conclusion (Verdict), optional meta)
- `references/brand-voice/` — drop your published articles here to teach the skill your voice (optional)
- `scripts/research.py` — Exa-based SERP research
- `scripts/lint_article.py` — programmatic gate enforcement (FK grade, em dashes, keyword placement, section presence)
- `scripts/verify_claims.py` — flags fabricated stats / prices / ratings against research.json
- `scripts/score_content.py` — Surfer-style content score (primary kw density, secondary coverage, LSI coverage, entity coverage)
- `scripts/extract_voice.py` — analyse brand-voice samples and produce voice notes for Stage 3
- `scripts/prioritize_keywords.py` — rank candidate keywords by SEO opportunity (use BEFORE writing)
- `scripts/screenshot.py` — capture real brand screenshots (no AI images) and map them to article sections
- `scripts/install_screenshot_deps.py` — one-time setup for the screenshot feature
- `scripts/refresh_article.py` — kick off the refresh workflow on an existing published article
- `scripts/preview.py` — render `article.md` as a styled HTML preview for browser reading
- `scripts/publish.py` — Optional Google Doc publisher fallback

## Article types supported

| Type | Trigger keywords | Structure |
|---|---|---|
| Roundup | "best X", "top X", "X comparison" | Quick pick → product reviews → buying guide → FAQ |
| Alternatives | "X alternatives", "X vs Y" | Quick pick → alternative products → comparison → FAQ |
| Guide | "how to X", "X tutorial", "X for beginners" | Quick answer → step-by-step → deep sections → FAQ |
| Informational | "what is X", "why does X" | Quick answer → definition → deep sections → FAQ |
| Review | "X review", "is X worth it" | Quick verdict → product review → pros/cons → FAQ |

## Support

Updates are free for life. New article types, new templates, and new humanizer rules are pushed to all buyers.

Issues or suggestions: [your-email@domain.com]
