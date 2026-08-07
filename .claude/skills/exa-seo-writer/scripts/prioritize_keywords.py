#!/usr/bin/env python3
"""Score and rank a list of candidate keywords by SEO opportunity.

Use BEFORE running the full article-writing pipeline to pick which keywords
are worth targeting. Pulls SERP data via Exa for each candidate, scores based
on competitive depth, intent clarity, and target word count, and returns a
ranked CSV the buyer can use to plan their content calendar.

Usage:
    python scripts/prioritize_keywords.py keywords.csv
    python scripts/prioritize_keywords.py --keywords "best ai writing tools, notion vs obsidian, what is rag"
    python scripts/prioritize_keywords.py keywords.txt --out ranked.csv

Input formats accepted:
- CSV with header `keyword` (other columns ignored, preserved in output)
- TXT, one keyword per line
- --keywords flag with comma-separated keywords

Output: CSV with columns
    keyword, opportunity_score, suggested_article_type, target_word_count,
    competitor_count, dominant_intent, top_competitors, notes

opportunity_score is 0-100. Higher = better opportunity.
- 80+ : low-hanging fruit, write this
- 60-79 : solid opportunity, write if it fits your content plan
- 40-59 : doable but competitive, only if you have a strong angle
- 0-39 : skip — either too competitive or too thin a SERP
"""

from __future__ import annotations

import argparse
import csv
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from statistics import mean
from typing import Any
from urllib.parse import urlparse

try:
    from exa_py import Exa
except ImportError:
    print("ERROR: exa_py not installed. Run: pip install exa-py", file=sys.stderr)
    sys.exit(1)

try:
    from dotenv import load_dotenv
    skill_dir = Path(__file__).parent.parent
    load_dotenv(skill_dir / ".env")
except ImportError:
    pass


EXCLUDED_DOMAINS = [
    "reddit.com", "wikipedia.org", "quora.com", "pinterest.com",
    "youtube.com", "facebook.com", "twitter.com", "x.com",
    "instagram.com", "tiktok.com", "amazon.com", "ebay.com",
    "linkedin.com", "substack.com", "github.com",
]


def detect_article_type(keyword: str) -> str:
    kw = keyword.lower().strip()
    if " vs " in kw or " versus " in kw or kw.endswith(" vs"):
        return "vs"
    if "alternatives" in kw or "alternative to" in kw:
        return "alternatives"
    if (kw.endswith(" review") or " review " in kw or kw.startswith("review of ")):
        return "review"
    if kw.startswith("best ") or kw.startswith("top "):
        return "roundup"
    if (kw.startswith("how to ") or kw.startswith("how do i ")
            or kw.startswith("how can i ") or kw.endswith(" tutorial")
            or kw.endswith(" step by step")):
        return "guide"
    if (kw.startswith("what is") or kw.startswith("why is") or kw.startswith("why does")
            or kw.startswith("when should") or kw.endswith("?")):
        return "informational"
    return "informational"


def detect_intent(article_type: str) -> str:
    return {
        "roundup": "commercial",
        "alternatives": "commercial",
        "vs": "commercial",
        "review": "commercial",
        "guide": "informational",
        "informational": "informational",
    }.get(article_type, "informational")


def extract_domain(url: str) -> str:
    try:
        return urlparse(url).netloc.lower().replace("www.", "")
    except Exception:
        return ""


def is_excluded(url: str) -> bool:
    d = extract_domain(url)
    return any(d == e or d.endswith("." + e) for e in EXCLUDED_DOMAINS)


def word_count(text: str) -> int:
    return len(re.findall(r"\b\w+\b", text))


def fetch_serp(exa: Exa, keyword: str, num_results: int = 10) -> list[dict]:
    """Pull top-N from Exa, filtered. Return list of {url, domain, title, word_count}."""
    try:
        result = exa.search(
            keyword,
            type="auto",
            num_results=num_results * 3,
            exclude_domains=EXCLUDED_DOMAINS,
            contents={"text": True},
        )
    except TypeError:
        result = exa.search(
            keyword,
            type="auto",
            num_results=num_results * 3,
            contents={"text": True},
        )

    competitors = []
    for res in getattr(result, "results", []):
        if is_excluded(res.url):
            continue
        text = getattr(res, "text", "") or ""
        wc = word_count(text)
        if wc < 400:
            continue  # too short to be a real competitor
        competitors.append({
            "url": res.url,
            "domain": extract_domain(res.url),
            "title": getattr(res, "title", "") or "",
            "word_count": wc,
        })
        if len(competitors) >= num_results:
            break
    return competitors


def score_keyword(keyword: str, competitors: list[dict]) -> dict[str, Any]:
    """Compute opportunity score 0-100.

    Heuristic blend:
    - SERP depth: 5+ usable competitors = good; <3 = thin SERP, lower confidence
    - Avg word count: 1500-3500 = sweet spot for content; <800 or >5000 = harder
    - Domain diversity: more diverse top-10 = more opportunity (less locked-up)
    - Intent clarity: keyword pattern matches a clear article type
    """
    article_type = detect_article_type(keyword)
    intent = detect_intent(article_type)

    if not competitors:
        return {
            "keyword": keyword,
            "opportunity_score": 0,
            "suggested_article_type": article_type,
            "target_word_count": 0,
            "competitor_count": 0,
            "dominant_intent": intent,
            "top_competitors": "",
            "notes": "no usable SERP results — too niche or excluded all results",
        }

    wcs = [c["word_count"] for c in competitors]
    avg_wc = mean(wcs)
    target_wc = int(avg_wc * 1.1)

    # SERP depth (0-30 pts)
    n = len(competitors)
    if n >= 8:
        depth_pts = 30
    elif n >= 5:
        depth_pts = 25
    elif n >= 3:
        depth_pts = 18
    else:
        depth_pts = 10

    # Word count band (0-25 pts) — articles 1500-3500 words are easier to outrank with quality
    if 1500 <= avg_wc <= 3500:
        wc_pts = 25
    elif 800 <= avg_wc < 1500:
        wc_pts = 18  # short SERP — beatable with depth
    elif 3500 < avg_wc <= 5000:
        wc_pts = 15  # long SERP — harder to outdo
    elif avg_wc > 5000:
        wc_pts = 8   # very long — heavy lift
    else:
        wc_pts = 5   # tiny SERP — possibly low-intent

    # Domain diversity (0-20 pts) — more diverse = more opportunity to rank
    domains = {c["domain"] for c in competitors}
    diversity_ratio = len(domains) / max(n, 1)
    diversity_pts = int(diversity_ratio * 20)

    # Intent clarity (0-15 pts) — keyword pattern detected = clear intent
    if article_type in ("roundup", "alternatives", "vs", "review"):
        intent_pts = 15  # commercial intent, clear plan
    elif article_type == "guide":
        intent_pts = 13
    elif article_type == "informational":
        intent_pts = 10
    else:
        intent_pts = 5

    # Title overlap (0-10 pts) — if all top-10 use the exact keyword in title, harder to differentiate
    overlap = sum(1 for c in competitors if keyword.lower() in c["title"].lower())
    overlap_ratio = overlap / max(n, 1)
    if overlap_ratio < 0.4:
        overlap_pts = 10  # plenty of differentiation room
    elif overlap_ratio < 0.7:
        overlap_pts = 7
    elif overlap_ratio < 0.9:
        overlap_pts = 4
    else:
        overlap_pts = 2  # everyone uses the keyword in title — saturated

    total = depth_pts + wc_pts + diversity_pts + intent_pts + overlap_pts

    # Build notes
    notes_parts = []
    if n < 5:
        notes_parts.append(f"thin SERP ({n} competitors)")
    if avg_wc > 4000:
        notes_parts.append(f"long-form SERP (~{int(avg_wc)} avg)")
    if avg_wc < 1000:
        notes_parts.append("short SERP — possibly low-intent")
    if overlap_ratio >= 0.8:
        notes_parts.append("title saturation high")
    if not notes_parts:
        notes_parts.append("clean opportunity")

    top_3 = ", ".join(c["domain"] for c in competitors[:3])

    return {
        "keyword": keyword,
        "opportunity_score": total,
        "suggested_article_type": article_type,
        "target_word_count": target_wc,
        "competitor_count": n,
        "dominant_intent": intent,
        "top_competitors": top_3,
        "notes": "; ".join(notes_parts),
    }


def load_keywords(path: Path | None, keywords_arg: str | None) -> list[str]:
    if keywords_arg:
        return [k.strip() for k in keywords_arg.split(",") if k.strip()]
    if path is None:
        print("ERROR: provide either keywords.csv/.txt or --keywords flag", file=sys.stderr)
        sys.exit(1)
    if not path.exists():
        print(f"ERROR: file not found: {path}", file=sys.stderr)
        sys.exit(1)

    suffix = path.suffix.lower()
    if suffix == ".csv":
        out = []
        with path.open() as f:
            reader = csv.DictReader(f)
            for row in reader:
                kw = row.get("keyword") or row.get("Keyword") or row.get("KEYWORD")
                if kw and kw.strip():
                    out.append(kw.strip())
        return out
    else:  # .txt or other
        with path.open() as f:
            return [line.strip() for line in f if line.strip() and not line.startswith("#")]


def main():
    ap = argparse.ArgumentParser(description="Rank candidate keywords by SEO opportunity.")
    ap.add_argument("input", type=Path, nargs="?", help="CSV with `keyword` column or TXT one-per-line")
    ap.add_argument("--keywords", help="Comma-separated keywords (alternative to file input)")
    ap.add_argument("--out", type=Path, default=Path("ranked_keywords.csv"))
    ap.add_argument("--num-results", type=int, default=10, help="SERP depth to fetch per keyword")
    ap.add_argument("--quiet", action="store_true")
    args = ap.parse_args()

    api_key = os.getenv("EXA_API_KEY")
    if not api_key:
        print("ERROR: EXA_API_KEY not set. Export it or put it in .env.", file=sys.stderr)
        sys.exit(1)

    keywords = load_keywords(args.input, args.keywords)
    if not keywords:
        print("ERROR: no keywords loaded.", file=sys.stderr)
        sys.exit(1)

    if not args.quiet:
        print(f"Scoring {len(keywords)} keyword(s) via Exa...", file=sys.stderr)

    exa = Exa(api_key=api_key)
    rows = []
    for i, kw in enumerate(keywords, 1):
        if not args.quiet:
            print(f"  [{i}/{len(keywords)}] {kw}", file=sys.stderr)
        try:
            comps = fetch_serp(exa, kw, args.num_results)
            row = score_keyword(kw, comps)
        except Exception as e:
            row = {
                "keyword": kw,
                "opportunity_score": 0,
                "suggested_article_type": "unknown",
                "target_word_count": 0,
                "competitor_count": 0,
                "dominant_intent": "unknown",
                "top_competitors": "",
                "notes": f"error: {e}",
            }
        rows.append(row)

    rows.sort(key=lambda r: r["opportunity_score"], reverse=True)

    fieldnames = [
        "keyword", "opportunity_score", "suggested_article_type",
        "target_word_count", "competitor_count", "dominant_intent",
        "top_competitors", "notes",
    ]
    with args.out.open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames)
        w.writeheader()
        w.writerows(rows)

    print(f"\nWrote {args.out}\n")

    # Pretty-print top 10 to stdout
    print("Top opportunities:\n")
    print(f"{'Score':>5}  {'Type':<14}  {'WC target':>9}  {'#':>2}  Keyword")
    print(f"{'─' * 5}  {'─' * 14}  {'─' * 9}  {'─' * 2}  {'─' * 40}")
    for r in rows[:15]:
        print(f"{r['opportunity_score']:>5}  {r['suggested_article_type']:<14}  "
              f"{r['target_word_count']:>9}  {r['competitor_count']:>2}  {r['keyword']}")
    if len(rows) > 15:
        print(f"... and {len(rows) - 15} more (see {args.out})")


if __name__ == "__main__":
    main()
