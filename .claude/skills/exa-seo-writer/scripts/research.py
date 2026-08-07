#!/usr/bin/env python3
"""
exa-seo-writer: Stage 1 — SERP Research via Exa API

Pulls top-10 competitor content for a target keyword, filters excluded domains,
extracts structured data, and writes research.json for Stage 2.

Usage:
    python scripts/research.py "best project management tools 2026"
    python scripts/research.py "how to start a blog" --output custom.json
    python scripts/research.py "notion vs obsidian" --num-results 15

Env:
    EXA_API_KEY — required. Get one at https://exa.ai
"""

import argparse
import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from statistics import mean, median
from typing import Any
from urllib.parse import urlparse

try:
    from exa_py import Exa
except ImportError:
    print("ERROR: exa_py not installed. Run: pip install exa-py", file=sys.stderr)
    sys.exit(1)

# Optional: load .env from skill directory
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

EXCLUDED_URL_PATTERNS = [
    "/forum/", "/thread/", "/profile/", "/user/",
    "/community/", "/discussions/", "/comments/",
    "/tag/", "/category/", "/author/",
]


def extract_domain(url: str) -> str:
    try:
        return urlparse(url).netloc.lower().replace("www.", "")
    except Exception:
        return ""


def is_excluded(url: str) -> bool:
    domain = extract_domain(url)
    if any(domain == d or domain.endswith("." + d) for d in EXCLUDED_DOMAINS):
        return True
    if any(pattern in url.lower() for pattern in EXCLUDED_URL_PATTERNS):
        return True
    return False


def extract_headings(text: str) -> list[str]:
    """Extract H1/H2/H3-style headings from scraped text.

    Exa returns plain text; we look for patterns that suggest headings:
    - Lines in ALL CAPS
    - Lines that are short (under 80 chars) and followed by a blank line
    - Markdown-style headings if the source was markdown
    """
    headings = []
    lines = text.split("\n")
    for i, line in enumerate(lines):
        line = line.strip()
        if not line or len(line) > 120:
            continue
        # Markdown heading
        if line.startswith("#"):
            headings.append(line.lstrip("#").strip())
            continue
        # All caps (at least 3 words)
        words = line.split()
        if len(words) >= 3 and line.isupper():
            headings.append(line.title())
            continue
        # Short line followed by blank
        if i + 1 < len(lines) and not lines[i + 1].strip() and len(words) >= 2 and len(words) <= 12:
            # Heuristic: starts with capital, ends without period
            if line[0].isupper() and not line.endswith((".", "!", "?", ",")):
                headings.append(line)
    return headings[:20]  # cap


def word_count(text: str) -> int:
    return len(re.findall(r"\b\w+\b", text))


def research(keyword: str, num_results: int = 10) -> dict[str, Any]:
    api_key = os.getenv("EXA_API_KEY")
    if not api_key:
        print("ERROR: EXA_API_KEY not set in environment.", file=sys.stderr)
        print("Get one at https://exa.ai and export it:", file=sys.stderr)
        print("  export EXA_API_KEY=your_key", file=sys.stderr)
        sys.exit(1)

    exa = Exa(api_key=api_key)
    request_count = min(50, num_results * 3)

    print(f"Researching: '{keyword}'", file=sys.stderr)
    print(f"Requesting {request_count} results from Exa...", file=sys.stderr)

    try:
        result = exa.search(
            keyword,
            type="auto",
            num_results=request_count,
            exclude_domains=EXCLUDED_DOMAINS,
            contents={"text": True},
        )
    except TypeError:
        # Older exa_py may not support exclude_domains
        result = exa.search(
            keyword,
            type="auto",
            num_results=request_count,
            contents={"text": True},
        )
    except Exception as e:
        print(f"ERROR: Exa API call failed: {e}", file=sys.stderr)
        sys.exit(2)

    competitors = []
    for res in result.results:
        if is_excluded(res.url):
            continue
        text = getattr(res, "text", "") or ""
        if word_count(text) < 400:
            continue  # too short to be a real competitor article
        competitors.append({
            "rank": len(competitors) + 1,
            "url": res.url,
            "domain": extract_domain(res.url),
            "title": getattr(res, "title", "") or "",
            "word_count": word_count(text),
            "headings": extract_headings(text),
            "full_text": text,
        })
        if len(competitors) >= num_results:
            break

    if not competitors:
        print("ERROR: No usable competitors found after filtering.", file=sys.stderr)
        print("Try a different keyword or increase --num-results.", file=sys.stderr)
        sys.exit(3)

    word_counts = [c["word_count"] for c in competitors]
    avg_wc = int(mean(word_counts))
    median_wc = int(median(word_counts))
    target_wc = int(avg_wc * 1.1)  # 10% above average

    print(f"Found {len(competitors)} competitors. Avg WC: {avg_wc}. Target: {target_wc}.", file=sys.stderr)

    return {
        "keyword": keyword,
        "searched_at": datetime.now(timezone.utc).isoformat(),
        "competitors": competitors,
        "stats": {
            "competitor_count": len(competitors),
            "avg_word_count": avg_wc,
            "median_word_count": median_wc,
            "target_word_count": target_wc,
            "min_word_count": min(word_counts),
            "max_word_count": max(word_counts),
        },
    }


def main():
    parser = argparse.ArgumentParser(description="exa-seo-writer research stage")
    parser.add_argument("keyword", help="Target keyword")
    parser.add_argument("--output", default="research.json", help="Output file path")
    parser.add_argument("--num-results", type=int, default=10, help="Number of competitors to fetch")
    args = parser.parse_args()

    data = research(args.keyword, args.num_results)

    output_path = Path(args.output)
    output_path.write_text(json.dumps(data, indent=2, ensure_ascii=False))
    print(f"Wrote {output_path} ({len(data['competitors'])} competitors)", file=sys.stderr)


if __name__ == "__main__":
    main()
