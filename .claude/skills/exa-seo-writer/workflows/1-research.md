# Stage 1: Research

**Goal:** Pull the top 10 competitor articles for the target keyword via Exa API, extract their full text, and save structured JSON that the next stage can read.

## Execute

Run the research script from the skill directory:

```bash
python scripts/research.py "<keyword>" --output research.json
```

## What the script does

1. Calls Exa API with `type="auto"` for the keyword
2. Requests 30 results and filters down to 10 after excluding:
   - Domains in `rules/excluded-domains.md` (reddit, wikipedia, youtube, etc.)
   - URL patterns like `/forum/`, `/thread/`, `/profile/`, `/user/`
3. Extracts full text for each competitor
4. Pulls H1/H2 structure from each
5. Calculates word counts
6. Writes `research.json` with this shape:

```json
{
  "keyword": "best project management tools",
  "searched_at": "2026-04-11T12:00:00Z",
  "competitors": [
    {
      "rank": 1,
      "url": "https://example.com/article",
      "domain": "example.com",
      "title": "The 15 Best Project Management Tools in 2026",
      "word_count": 3241,
      "headings": ["H1: ...", "H2: ...", "H2: ..."],
      "full_text": "..."
    }
  ],
  "stats": {
    "avg_word_count": 2847,
    "median_word_count": 2650,
    "target_word_count": 3200
  }
}
```

## After the script runs

Read `research.json` carefully. Do NOT proceed to Stage 2 until you have:

- Confirmed at least 5 competitor articles were fetched
- Identified the 3 most-common H2 topics across competitors
- Noted the target word count (stage 2 will use this)
- Flagged any competitor that significantly outperforms the others (high word count + strong structure)

## If the research fails

- **`EXA_API_KEY not set`**: Tell the user to export the key and rerun
- **Rate limit**: Wait 60 seconds and retry once. If it fails again, tell the user
- **Fewer than 3 competitors returned**: The keyword may be too niche. Tell the user and ask if they want to proceed anyway with reduced research
- **Network error**: Tell the user. Do not fall back to WebSearch — the user paid for Exa-grade research

## Do not

- Do not use WebSearch instead of this script
- Do not proceed to Stage 2 if research.json is empty or malformed
- Do not invent competitor data to fill gaps
