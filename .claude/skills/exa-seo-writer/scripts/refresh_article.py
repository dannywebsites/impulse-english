#!/usr/bin/env python3
"""Refresh / update an existing published article.

Extracts the live article from a URL, runs fresh SERP research on its target
keyword, and produces an `update_brief.md` listing exactly what to change:

- Topics now in the top-10 SERP that the article misses
- Statistics with dates older than 12 months that may be stale
- Products / tools mentioned in fresh SERP that the article doesn't cover
- Sections that are now thin vs. the current SERP norm
- Word count gap vs. current SERP target

The agent (or buyer) reads `update_brief.md` and rewrites the article preserving
its existing structure where it still works. The same lint / verify / score
gates from `workflows/4-humanize.md` apply to the updated article.

Usage:
    # Extract + analyze a live URL, infer keyword from H1
    python scripts/refresh_article.py https://example.com/best-tools

    # Specify the target keyword explicitly (recommended)
    python scripts/refresh_article.py https://example.com/best-tools \\
        --keyword "best AI writing tools 2026"

    # Already extracted (skip fetch, point at local copy)
    python scripts/refresh_article.py --existing existing_article.md \\
        --keyword "best AI writing tools 2026"

Outputs to current directory:
    existing_article.md     — the live article fetched and cleaned
    research.json           — fresh SERP data
    update_brief.md         — gap analysis + rewrite plan
"""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import urllib.request
from datetime import datetime
from pathlib import Path
from statistics import mean
from urllib.parse import urlparse


def fetch_article(url: str) -> str:
    """Best-effort HTML fetch + boilerplate strip. Returns markdown-ish text."""
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                           "AppleWebKit/537.36 (KHTML, like Gecko) "
                           "Chrome/120.0 Safari/537.36"),
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            html = resp.read().decode("utf-8", errors="ignore")
    except Exception as e:
        print(f"ERROR fetching {url}: {e}", file=sys.stderr)
        sys.exit(1)
    return html_to_markdown(html)


def html_to_markdown(html: str) -> str:
    """Minimal HTML -> markdown extraction. Strips nav/footer/script/style.

    Not perfect — meant to give the agent enough structure to reason over,
    not preserve every detail. The buyer or agent can spot-check.
    """
    # Remove script, style, nav, footer, header, aside
    for tag in ("script", "style", "noscript", "nav", "footer", "header", "aside",
                "form", "iframe"):
        html = re.sub(rf"<{tag}\b[^>]*>.*?</{tag}>", "", html,
                      flags=re.S | re.I)

    # Try to isolate <article> or <main> if present
    article_match = re.search(r"<article\b[^>]*>(.*?)</article>", html, re.S | re.I)
    main_match = re.search(r"<main\b[^>]*>(.*?)</main>", html, re.S | re.I)
    body = article_match.group(1) if article_match else (main_match.group(1) if main_match else html)

    # Convert headings
    body = re.sub(r"<h1\b[^>]*>(.*?)</h1>", r"\n# \1\n", body, flags=re.S | re.I)
    body = re.sub(r"<h2\b[^>]*>(.*?)</h2>", r"\n## \1\n", body, flags=re.S | re.I)
    body = re.sub(r"<h3\b[^>]*>(.*?)</h3>", r"\n### \1\n", body, flags=re.S | re.I)
    body = re.sub(r"<h4\b[^>]*>(.*?)</h4>", r"\n#### \1\n", body, flags=re.S | re.I)

    # Lists
    body = re.sub(r"<li\b[^>]*>(.*?)</li>", r"- \1\n", body, flags=re.S | re.I)

    # Bold / italic
    body = re.sub(r"<(?:strong|b)\b[^>]*>(.*?)</(?:strong|b)>", r"**\1**", body,
                  flags=re.S | re.I)
    body = re.sub(r"<(?:em|i)\b[^>]*>(.*?)</(?:em|i)>", r"*\1*", body,
                  flags=re.S | re.I)

    # Paragraphs
    body = re.sub(r"<br\s*/?>", "\n", body, flags=re.I)
    body = re.sub(r"</p>", "\n\n", body, flags=re.I)

    # Strip remaining tags
    body = re.sub(r"<[^>]+>", "", body)

    # Decode common entities
    entities = {
        "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"',
        "&apos;": "'", "&nbsp;": " ", "&#39;": "'", "&mdash;": "—",
        "&ndash;": "–", "&hellip;": "…", "&rsquo;": "’", "&lsquo;": "‘",
        "&rdquo;": "”", "&ldquo;": "“",
    }
    for k, v in entities.items():
        body = body.replace(k, v)

    # Collapse whitespace
    body = re.sub(r"[ \t]+", " ", body)
    body = re.sub(r"\n{3,}", "\n\n", body)
    return body.strip()


def extract_h1(article: str) -> str:
    m = re.search(r"^#\s+(.+)$", article, re.M)
    return m.group(1).strip() if m else ""


def extract_headings(article: str) -> list[tuple[int, str]]:
    out = []
    for line in article.split("\n"):
        m = re.match(r"^(#+)\s+(.*?)\s*$", line)
        if m:
            out.append((len(m.group(1)), m.group(2).strip()))
    return out


def word_count(text: str) -> int:
    return len(re.findall(r"\b\w+\b", text))


def find_dated_stats(article: str) -> list[str]:
    """Return claims that include years 2020-2024 (potentially stale)."""
    out = set()
    for m in re.finditer(
        r"([^.!?]*\b(20[12][0-4])\b[^.!?]*[.!?])", article
    ):
        sent = m.group(1).strip()
        if len(sent) <= 220:
            out.add(sent)
    return sorted(out)


def keyword_from_h1(h1: str) -> str:
    """Strip year suffixes / parenthetical modifiers from an H1 to recover the keyword."""
    kw = h1
    kw = re.sub(r"\s*\(.*?\)\s*", " ", kw).strip()
    kw = re.sub(r"\s+(in\s+)?20\d{2}\s*$", "", kw).strip()
    return kw


def analyze_gaps(existing_article: str, research: dict) -> dict:
    """Compare existing article to fresh SERP. Return a structured gap report."""
    existing_h2s = [t.lower() for lvl, t in extract_headings(existing_article) if lvl == 2]
    existing_lower = existing_article.lower()
    existing_wc = word_count(existing_article)
    target_wc = research.get("stats", {}).get("target_word_count", 0)

    # Topic gaps: H2s appearing in 2+ competitors that the existing article doesn't cover
    topic_counter: dict[str, int] = {}
    for c in research.get("competitors", []):
        for h in c.get("headings", []):
            key = h.lower().strip()
            if not key or len(key) < 5 or len(key) > 80:
                continue
            topic_counter[key] = topic_counter.get(key, 0) + 1

    topic_gaps = []
    for topic, count in topic_counter.items():
        if count < 2:
            continue
        # already covered if any existing H2 has substantial overlap
        topic_words = set(re.findall(r"\w+", topic))
        if len(topic_words) < 2:
            continue
        covered = False
        for h2 in existing_h2s:
            h2_words = set(re.findall(r"\w+", h2))
            if topic_words & h2_words and len(topic_words & h2_words) >= 2:
                covered = True
                break
        if not covered:
            topic_gaps.append({"topic": topic, "competitor_count": count})

    topic_gaps.sort(key=lambda x: -x["competitor_count"])
    topic_gaps = topic_gaps[:15]

    # Product / brand gaps
    product_counter: dict[str, int] = {}
    for c in research.get("competitors", []):
        text = c.get("full_text", "")
        # crude proper-noun extraction: capitalized 2-3 word sequences
        for m in re.finditer(r"\b([A-Z][a-zA-Z]{2,}(?:\s+[A-Z][a-zA-Z]{2,}){0,2})\b", text):
            cand = m.group(1).strip()
            if len(cand) < 4 or cand.split()[0] in {"The", "This", "That", "These",
                                                     "Best", "Top", "How", "Why", "What", "When",
                                                     "Source", "Read", "More", "Click", "Sign"}:
                continue
            product_counter[cand] = product_counter.get(cand, 0) + 1

    product_gaps = []
    for product, count in product_counter.items():
        if count < 3:
            continue
        if product.lower() not in existing_lower:
            product_gaps.append({"product": product, "competitor_mentions": count})
    product_gaps.sort(key=lambda x: -x["competitor_mentions"])
    product_gaps = product_gaps[:12]

    # Word-count gap
    wc_gap = max(0, target_wc - existing_wc)

    # Dated stats
    dated_stats = find_dated_stats(existing_article)[:20]

    return {
        "existing_word_count": existing_wc,
        "fresh_target_word_count": target_wc,
        "word_count_gap": wc_gap,
        "topic_gaps": topic_gaps,
        "product_gaps": product_gaps,
        "dated_stats": dated_stats,
    }


def render_brief(url: str, keyword: str, gap_report: dict, research: dict) -> str:
    today = datetime.now().strftime("%Y-%m-%d")
    lines = [
        "# Update Brief",
        "",
        f"**Source URL:** {url}",
        f"**Target keyword:** `{keyword}`",
        f"**Generated:** {today}",
        f"**Existing word count:** {gap_report['existing_word_count']}",
        f"**Fresh SERP target word count:** {gap_report['fresh_target_word_count']}",
        f"**Word-count gap to close:** {gap_report['word_count_gap']}",
        "",
        "## Update goals",
        "",
        "Rewrite the article preserving its existing structure WHERE IT STILL WORKS. Apply the changes below. The updated article must pass the same quality gates as a freshly-written one (`scripts/lint_article.py`, `scripts/verify_claims.py`, `scripts/score_content.py`).",
        "",
        "## 1. Topic gaps (sections to add or expand)",
        "",
    ]
    if gap_report["topic_gaps"]:
        lines.append("These topics appear in 2+ current top-10 competitors but are missing or thin in your article. Consider adding H2s or expanding existing sections to cover them.")
        lines.append("")
        for g in gap_report["topic_gaps"]:
            lines.append(f"- **{g['topic']}** — covered by {g['competitor_count']} of the current top-10")
    else:
        lines.append("_No major topic gaps detected. Existing structure aligns with the current SERP._")
    lines.append("")
    lines.append("## 2. Products / tools / brands to consider mentioning")
    lines.append("")
    if gap_report["product_gaps"]:
        lines.append("These appear in current SERP competitors 3+ times but not in your article. They may be new tools/products that have entered the conversation since you last updated:")
        lines.append("")
        for g in gap_report["product_gaps"]:
            lines.append(f"- **{g['product']}** ({g['competitor_mentions']} competitor mentions)")
        lines.append("")
        lines.append("Only add a product if it genuinely belongs in your article and you can write specifically about it from `research.json`. Do NOT pad your roundup just to match the SERP.")
    else:
        lines.append("_No new products to flag — your article's product coverage matches current SERP._")
    lines.append("")
    lines.append("## 3. Stats and claims to verify (potentially stale)")
    lines.append("")
    if gap_report["dated_stats"]:
        lines.append("Sentences in your article that reference years 2020–2024. Check each: is the number still accurate, or has the data moved on? Replace with current figures from `research.json` if available, or rewrite without the year.")
        lines.append("")
        for s in gap_report["dated_stats"]:
            lines.append(f"- {s}")
    else:
        lines.append("_No dated stats detected._")
    lines.append("")
    lines.append("## 4. Word count")
    lines.append("")
    if gap_report["word_count_gap"] > 0:
        lines.append(f"Your article is {gap_report['word_count_gap']} words below the current SERP target. Expand the weakest sections rather than padding evenly. The topic gaps above are good candidates for the new word count.")
    else:
        lines.append("Your article meets or exceeds the current SERP target word count. No need to add length unless topic gaps require it.")
    lines.append("")
    lines.append("## 5. Universal updates")
    lines.append("")
    lines.append("Apply these regardless of gap analysis:")
    lines.append("")
    lines.append("- Update the title's year (e.g., `... in 2024` → `... in 2026`)")
    lines.append("- Refresh the `## What's New in [Topic] for 2026` section if present, OR add it if missing")
    lines.append("- Re-run the lint / verify / score scripts after the rewrite — older articles may have em dashes, forbidden phrases, or paragraph-length issues that the updated rules catch")
    lines.append("- Verify the Verdict heading uses a Verdict variant (`## Verdict on [secondary keyword]`) and isn't `## Conclusion` / `## Summary`")
    lines.append("")
    lines.append("## 6. What NOT to change")
    lines.append("")
    lines.append("- The H1 (unless the year needs updating)")
    lines.append("- The URL slug (preserves backlinks and rankings)")
    lines.append("- Sections that already cover their topic well — don't rewrite for the sake of rewriting")
    lines.append("- The product order in roundups, unless one of the top picks has been clearly outclassed by a new entrant from the SERP")
    lines.append("")
    lines.append("## Process")
    lines.append("")
    lines.append("1. Read this brief, then read `existing_article.md`, then read `research.json` for fresh SERP context")
    lines.append("2. Plan the rewrite section-by-section. Note which sections are KEEP, EDIT, or REPLACE")
    lines.append("3. Write the updated article to `updated_article.md`")
    lines.append("4. Run all three gate scripts. Fix until they pass.")
    lines.append("5. Generate `changes_summary.md` listing what you added, edited, and removed.")
    return "\n".join(lines)


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("url", nargs="?", help="URL of the existing article to update")
    ap.add_argument("--existing", type=Path,
                    help="Path to a local file with the existing article (skips URL fetch)")
    ap.add_argument("--keyword", help="Target keyword (otherwise inferred from H1)")
    ap.add_argument("--out-dir", type=Path, default=Path("."),
                    help="Output directory (default: cwd)")
    args = ap.parse_args()

    if not args.url and not args.existing:
        print("ERROR: provide either a URL or --existing path.", file=sys.stderr)
        sys.exit(1)

    out_dir = args.out_dir
    out_dir.mkdir(parents=True, exist_ok=True)

    # Step 1: get existing article
    if args.existing:
        existing_article = args.existing.read_text()
        url = args.url or f"file://{args.existing.resolve()}"
    else:
        print(f"Fetching {args.url}...", file=sys.stderr)
        existing_article = fetch_article(args.url)
        url = args.url
    (out_dir / "existing_article.md").write_text(existing_article)

    # Step 2: figure out the keyword
    keyword = args.keyword or keyword_from_h1(extract_h1(existing_article))
    if not keyword:
        print("ERROR: could not infer keyword from H1. Pass --keyword.", file=sys.stderr)
        sys.exit(1)
    print(f"Target keyword: {keyword}", file=sys.stderr)

    # Step 3: fresh research (calls scripts/research.py)
    skill_dir = Path(__file__).resolve().parent.parent
    research_path = out_dir / "research.json"
    print("Running fresh SERP research via Exa...", file=sys.stderr)
    res = subprocess.run(
        [sys.executable, str(skill_dir / "scripts" / "research.py"),
         keyword, "--output", str(research_path)],
        env={**os.environ},
    )
    if res.returncode != 0:
        print("ERROR: research.py failed.", file=sys.stderr)
        sys.exit(1)
    research = json.loads(research_path.read_text())

    # Step 4: gap analysis
    print("Analyzing gaps...", file=sys.stderr)
    gap_report = analyze_gaps(existing_article, research)

    # Step 5: write update brief
    brief = render_brief(url, keyword, gap_report, research)
    brief_path = out_dir / "update_brief.md"
    brief_path.write_text(brief)

    print(f"\nWrote:\n  {out_dir/'existing_article.md'}\n  {research_path}\n  {brief_path}\n")
    print("Topic gaps:", len(gap_report["topic_gaps"]))
    print("Product gaps:", len(gap_report["product_gaps"]))
    print("Dated stats flagged:", len(gap_report["dated_stats"]))
    print(f"Word count: {gap_report['existing_word_count']} -> target {gap_report['fresh_target_word_count']}"
          f" (gap: {gap_report['word_count_gap']})")
    print(f"\nNext: read {brief_path}, then rewrite to updated_article.md following workflows/5-update.md")


if __name__ == "__main__":
    main()
