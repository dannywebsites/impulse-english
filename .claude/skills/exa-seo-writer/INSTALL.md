# Install exa-seo-writer

Thanks for buying. This is a Claude Code skill — it runs inside your Claude Code sessions, not as a standalone app. Download, unzip, use.

## The fast path: unzip + ask Claude

```bash
mkdir -p ~/.claude/skills && unzip -o exa-seo-writer.zip -d ~/.claude/skills/
```

That's the only manual step. Now open Claude Code in any project folder and type:

> write an SEO article about "best ai writing tools 2026"

The skill detects this is your first run and walks you through everything:

- Installs the one Python dependency for you
- Asks for your Exa API key (with the link to exa.ai if you don't have one yet)
- Then writes the article

You don't need to remember any commands, edit any config files, or run any setup scripts. Claude handles it conversationally on first run, then never asks again.

## What you'll need

- [Claude Code](https://claude.com/claude-code) installed
- Python 3.10+
- An [Exa API key](https://exa.ai) — free, 1,000 searches/month included

## What happens on first run

The first time you ask the skill to write something, you'll see a conversation like this:

> **You:** write an SEO article about "best ai writing tools 2026"
>
> **Claude:** Looks like this is your first time using exa-seo-writer. I need to install one Python package (exa-py). Want me to run `pip install -r requirements.txt`? — Yes
>
> **Claude:** Done. Now I need your Exa API key. Exa pulls real top-10 SERP data so the article competes with what's actually ranking. Free signup at exa.ai if you don't have one. Paste your key here. — `<your key>`
>
> **Claude:** Key works. Saved. Before I start writing, who's the audience for this article? Any specific brand or angle you want to feature? Anything to include or avoid?

After you answer the clarifying questions, Claude runs the full pipeline (research → brief → write → humanize → gate). Takes 6-10 minutes per article. Drops `article.md` in your folder along with `score.json` and `brief.md`.

## Other things you can ask the skill to do

- `rank these keywords for me: kw1, kw2, kw3` — scores candidates by SERP opportunity
- `refresh my article at <url>` — pulls live article, re-researches, rewrites against current SERP
- `take screenshots of these brands for my article: <url1>, <url2>` — real PNGs (no AI images)
- `preview the article in my browser` — renders article.md as styled HTML
- `set up brand voice` — walks you through dropping your articles into references/brand-voice/

## Manual install (if you don't want to use the conversational setup)

If you prefer doing everything in your terminal:

```bash
cd ~/.claude/skills/exa-seo-writer
pip install -r requirements.txt
echo "EXA_API_KEY=your-key-here" > .env
```

Or run the interactive walkthrough script:

```bash
cd ~/.claude/skills/exa-seo-writer
python scripts/setup.py
```

Either works — same checks, same outcome. The conversational path through Claude Code is just less to remember.

## Help

- Stuck on first run? Tell Claude what error you saw — it has the context to suggest a fix.
- Setup got into a weird state? Run `python scripts/setup.py` — it's idempotent.
- Other issues? Email the address on your purchase receipt.
