---
name: GitHub Actions Publisher
description: >
  Build and maintain the GitHub Actions CI/CD workflows that automate blog publishing for Impulse
  English Academy. Use this skill when creating or modifying the publish-blog.yml cron workflow,
  the notification workflow, the blog queue system, or the extract-blog-info script. Also use when
  debugging failed GitHub Actions runs, adjusting the publishing schedule, or adding new automation
  triggers. Covers the complete publish, commit, deploy, and notify pipeline orchestration.
---

# GitHub Actions Publisher

Orchestrates the fully autonomous blog publishing system. A cron job runs Mon-Thu at 10:00 Madrid
time, picks the next pending article from a YAML queue, runs the auto-publish pipeline, commits
the result, and sends an email notification. No human intervention required.

## When to Use

- Creating or modifying GitHub Actions workflows
- Adjusting the publishing schedule
- Debugging failed pipeline runs
- Managing the blog-queue.yaml article queue
- Setting up email notifications for new posts
- Adding new automation triggers

---

## 1. publish-blog.yml

**File:** `.github/workflows/publish-blog.yml`

### Triggers
```yaml
on:
  schedule:
    - cron: '0 8 * * 1-4'   # Mon-Thu 08:00 UTC = 10:00 Madrid
  workflow_dispatch:
    inputs:
      topic_override:
        description: 'Override topic (skips queue)'
        required: false
        type: string
```

### Permissions
```yaml
permissions:
  contents: write    # Needed to push commits
```

### Steps

**1. Checkout** — `actions/checkout@v4` with `token: ${{ secrets.GITHUB_TOKEN }}`

**2. Read queue** — Inline Node.js script parses `blog-queue.yaml`:
- If `topic_override` provided, uses that directly
- Otherwise finds first article with `status: pending`
- Outputs: `topic`, `keywords`, `category`, `queue_index`

**3. Setup Node.js** — `actions/setup-node@v4` with `node-version: '20'`

**4. Install deps** — `npm ci` in `seo-writer/scripts/`

**5. Debug API key** — Validates Anthropic key format and tests with curl

**6. Run pipeline** — `node auto-publish.js "$TOPIC" "$KEYWORDS" "$CATEGORY"`
- Stdout captured to `/tmp/slug-raw.txt`
- Slug extracted via: `grep -E '^[a-z0-9][a-z0-9-]+[a-z0-9]$' /tmp/slug-raw.txt | tail -1`

**7. Update queue** — Inline Python script changes `status: pending` → `status: published` and adds `publishedDate`

**8. Commit and push** — Git commit with specific files only:
```bash
git add "March-Impulse-Web-.../src/content/articles/${SLUG}.md"
git add "March-Impulse-Web-.../blog-queue.yaml"

# SAFETY CHECK: verify only blog files are staged
for file in $STAGED; do
  case "$file" in
    March-Impulse-Web-*/src/content/articles/*.md|March-Impulse-Web-*/blog-queue.yaml) ;;
    *) echo "SAFETY: Unexpected file staged: $file"; exit 1 ;;
  esac
done
```

**9. Failure handler** — If pipeline fails, marks article as `status: failed` in queue and commits.

### Git Identity
```bash
git config user.name "Impulse Blog Bot"
git config user.email "blog-bot@impulseenglish.es"
```

### Environment Variables
```yaml
env:
  ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
  GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
  DATAFORSEO_LOGIN: ${{ secrets.DATAFORSEO_LOGIN }}
  DATAFORSEO_PASSWORD: ${{ secrets.DATAFORSEO_PASSWORD }}
  APIFY_API_TOKEN: ${{ secrets.APIFY_API_TOKEN }}
```

---

## 2. notify-new-blog-post.yml

**File:** `.github/workflows/notify-new-blog-post.yml`

### Trigger
```yaml
on:
  push:
    branches: [main]
    paths:
      - 'March-Impulse-Web-*/pages/blog/**'
      - 'March-Impulse-Web-*/data/articles/**'
      - 'March-Impulse-Web-*/seo-system/site/pages/blog/**'
```

### Steps
1. **Checkout** with `fetch-depth: 2` (for git diff)
2. **Find new posts** — `git diff --name-only --diff-filter=A HEAD~1 HEAD` on blog paths
3. **Extract blog info** — `node .github/scripts/extract-blog-info.mjs /tmp/changed-files.txt`
   - Reads article file, extracts title from YAML frontmatter (`seoTitle` or `question`)
   - Extracts URL from frontmatter
   - Outputs via `GITHUB_OUTPUT`: `title`, `url`
4. **Send email** — curl to Resend API:
```bash
curl -s -X POST 'https://api.resend.com/emails' \
  -H "Authorization: Bearer ${{ secrets.RESEND_API_KEY }}" \
  -d '{
    "from": "Impulse Blog <onboarding@resend.dev>",
    "to": ["${{ secrets.NOTIFICATION_EMAIL }}"],
    "subject": "New Blog Post: $TITLE",
    "html": "<h2>New Blog Post Published</h2>..."
  }'
```

---

## 3. extract-blog-info.mjs

**File:** `.github/scripts/extract-blog-info.mjs`

Reads changed file paths, opens the article file, and extracts:
- `title` — from `seoTitle` or `question` in YAML frontmatter
- `url` — from `url` field in frontmatter

Supports both `.ts` data files and `.md` Content Collection files.

---

## 4. blog-queue.yaml Format

**File:** `March-Impulse-Web-.../blog-queue.yaml`

```yaml
schedule:
  days: [monday, tuesday, wednesday, thursday]
  timezone: Europe/Madrid
  time: "10:00"

articles:
  - topic: "Es dificil el B2 First"
    category: "Cambridge B2 First"
    keywords: "dificultad b2 first cambridge"
    status: published
    publishedDate: "2026-03-25"

  - topic: "Cuanto tiempo preparar B2 First"
    category: "Cambridge B2 First"
    keywords: "tiempo preparacion b2 first"
    status: pending

  - topic: "Mejores academias ingles Madrid"
    category: "Local Madrid"
    status: pending
```

### Status Flow
```
pending → published  (success: pipeline ran, article committed)
pending → failed     (error: pipeline crashed, marked for investigation)
```

### Fields
| Field | Required | Description |
|---|---|---|
| topic | Yes | Article topic (passed to auto-publish.js) |
| category | No | Auto-detected from topic if omitted |
| keywords | No | Target keywords (defaults to topic) |
| status | Yes | `pending`, `published`, or `failed` |
| publishedDate | Auto | Added when status changes to published |

---

## 5. Safety Checks

1. **Staged file allowlist** — Only `*.md` in articles/ and `blog-queue.yaml` may be committed
2. **Unexpected file abort** — Any other staged file causes immediate `exit 1`
3. **Queue isolation** — Only the FIRST pending article is processed per run
4. **Failure isolation** — Failed articles are marked but don't block the next day's run
5. **API key pre-validation** — Anthropic key tested before spending research credits
6. **Empty queue graceful exit** — If no pending articles exist in the queue, the workflow exits with success (`exit 0`), not failure. Use GitHub Actions step conditionals (`if: steps.read-queue.outputs.topic != ''`) to skip pipeline steps when the queue is empty. This prevents false failure notifications.

---

## 6. Modifying the Schedule

Change the cron expression in `publish-blog.yml`:
```yaml
cron: '0 8 * * 1-4'   # Mon-Thu at 08:00 UTC
```
- UTC offset for Madrid: +1 (winter) or +2 (summer/CEST)
- Current: 08:00 UTC = 10:00 Madrid (CEST)
- To publish daily: `'0 8 * * 1-5'` (add Friday)
- To publish twice daily: add a second cron entry

---

## Related Skills

- **auto-publish-pipeline** — the script this workflow orchestrates
- **api-integrations** — env vars and GitHub Secrets setup
- **vercel-deployer** — the git push triggers Vercel auto-deploy
