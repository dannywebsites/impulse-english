# Brand Voice Library

This folder is OPTIONAL. The skill works fine without it — articles will be written in the default voice (concise, clear, grade-7, opinionated). Drop your own published articles here when you want every article the skill produces to sound like your brand.

## How it works

When the skill runs, the brief stage (`workflows/2-brief.md`) reads the files in this folder and extracts voice notes: sentence rhythm, vocabulary you reach for, the connector phrases you use, the way you open and close sections, your level of formality. Those notes get pasted into the brief and feed every section-by-section writing prompt in Stage 3, so each H2 is drafted to match your tone.

The skill does NOT copy specific facts, products, or claims from these samples. Voice only.

## What to drop in

Save 2-5 of your best published articles as `.md` or `.txt` files in this folder. Include the body prose only — drop boilerplate (nav, footer, share buttons, comment threads).

Bigger sample size = sharper voice match, but diminishing returns past 5. Pick the ones that best represent how you actually want every future article to read.

## Naming

Any filename works. The skill reads every `.md` and `.txt` in this folder. Suggested:

```
references/brand-voice/
├── article-1-best-tools-roundup.md
├── article-2-vs-comparison.md
├── article-3-how-to-guide.md
└── article-4-product-review.md
```

Mixing article types in your samples is good — the skill picks up voice patterns that are consistent across types (sentence length, vocabulary, openness about opinions) rather than copying type-specific structures.

## What gets extracted

The brief stage looks for:

- **Sentence rhythm** — average length, variation, how often you use one-sentence paragraphs for emphasis
- **Voice register** — formal vs casual, journalistic vs marketing, first-person vs second-person dominant
- **Vocabulary preferences** — short Anglo-Saxon words vs longer Latinate words, technical jargon comfort, contractions
- **Opener and closer patterns** — how you start sections (with a claim, a question, a story?), how you end them (with a bullet, a takeaway, a transition?)
- **Connector phrases** — how you move between ideas without using the forbidden words from `rules/humanizer.md`
- **Specificity ratio** — do you cite numbers, names, dates? How often?
- **Opinion strength** — do you hedge or commit? "X is the better choice" vs "X might be a fit for some teams"

## Things this folder does NOT do

- It does NOT pull specific products, brands, or statistics from your samples into new articles. That stays governed by `research.json` and the `verify_claims.py` script.
- It does NOT override the humanizer rules in `rules/humanizer.md`. If your published articles use forbidden words ("comprehensive", "robust", "delve into"), the skill still won't use them. Voice ≠ vocabulary licence.
- It does NOT do internal linking or replicate your CMS formatting.

## To turn it off for one article

Pass `--no-brand-voice` to the skill invocation. It'll skip reading this folder for that run. Useful if you're writing on a topic that needs a different voice than your usual.

## To point to a different folder

Pass `--brand-voice path/to/other/folder`. Useful if you maintain multiple brand voices on the same machine (e.g., one for a B2B blog, one for a personal newsletter).

## Privacy

These files stay on your machine. The skill reads them locally and includes them in the prompts it sends to Claude. They are NOT uploaded to a third-party service or stored outside your skill folder.
