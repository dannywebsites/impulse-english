# Reviews pipeline — real Google reviews, verbatim, on the site

The academy has **180 five-star Google reviews**. Until now the site used about 20 of
them, transcribed by hand, and invented the rest. This directory replaces that with a
pull from the live Business Profile plus a gate that fails the build if a single
published character drifts from what the customer actually wrote.

## The four steps

```bash
python3 pull_reviews.py       # Google → reviews-raw.json + reviews.json   (~$0.015)
python3 build_pool.py         # reviews.json → review-pool.json (eligible + why not)
python3 allocate.py           # pool → allocation.json + ../review-allocation.md
python3 apply_reviews.py      # allocation → the page files, verbatim
python3 verify_quotes.py --dist   # the gate: source AND built output
```

`verify_quotes.py` exits non-zero on any failure. Run it before every push; the GEO
audit (`../geo-audit.py`) imports it, so a page with a drifted quote scores 0 on
Testimonials and cannot reach grade A.

## Where the reviews come from

DataForSEO's Business Data → Google Reviews endpoint, reading the public profile
`place_id ChIJG7G2oAkpQg0Re7iLuuLzbr4` (CID 13722173269762357371). No OAuth, no
approval queue, no scraping — it returns all 180 with author, text, rating, timestamp
and a permalink to each review on Google.

The alternative is the official Google Business Profile API, which needs an access
request approved by Google plus OAuth as the profile owner. Worth applying for as the
long-term channel — it also lets you reply to reviews programmatically — but it is not
needed for this and would have blocked the work for days.

Re-run `pull_reviews.py` monthly. New reviews land in the pool automatically.

## What "verbatim" means here

After collapsing whitespace and normalising the quote characters Google and JSX
disagree about, a published quote must be a **contiguous span of one real review**.
That rule fails, on purpose:

- inventing a sentence and attaching a real customer's name to it
- stitching two distant halves of a review into one quote
- publishing Google's machine translation as if the customer wrote it (8 reviews were
  written in English; both their own words and Google's translation are carried, and
  either may be quoted — but not a hand-written third version)
- fixing a customer's typo
- trimming a teacher's name out of a list they wrote

If a review can't be published as written, publish a different one. There are 79
eligible.

## Eligibility (`build_pool.py`)

5 stars · 70–600 characters · a real full name · no teacher named outside {JP, Danny} ·
Spanish or English. Bylines that are usernames, duplicated handles or business accounts
are dropped automatically; aliases go in `excluded-names.txt` by hand.

The teacher rule is the one that costs the most material — 25 genuine reviews name
someone outside the approved set. They stay on Google; they just don't go on the site.

## Allocation

`allocate.py` gives every page its own reviews, theme-matched to its audience, and
**never places the same review twice anywhere on the site**. Two pages carrying the
same testimonial is the clearest "these are the same page" signal a location cluster
can send.

Current state: **78 of 79 eligible reviews are placed.** There is one spare. The
homepage rail alone takes 26. Adding pages, or giving any page more quotes, needs more
reviews first — which is a good thing to be short of, and the fix is asking for them.

## Files

| File | What it is |
|---|---|
| `reviews-raw.json` | untouched API payload — the audit trail, never hand-edited |
| `reviews.json` | one normalised record per review, newest first |
| `review-pool.json` | every review + eligible/blocked + reason + theme tags |
| `allocation.json` | which review goes on which page |
| `excluded-names.txt` | real reviews whose byline would not read as a real customer |
| `backups/` | pre-change copy of each page, first write only (git-ignored) |
