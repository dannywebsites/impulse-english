#!/usr/bin/env python3
"""Flag stats / prices / numbers in article.md that don't appear in research.json.

LLMs reliably fabricate plausible-looking numbers (pricing tiers, star ratings,
"X% of teams use Y"). This script extracts every numeric claim from the article
and verifies it appears verbatim or near-verbatim in at least one competitor's
text from research.json.

Usage:
    python scripts/verify_claims.py article.md research.json [--strict]

Exit codes:
    0 — every claim was found in research.json
    1 — at least one claim could not be verified

In non-strict mode (default), claims that are reasonable approximations of a
research.json value (e.g., "$8/month" matching "$8 per month") still pass.
In strict mode, only exact substring matches pass.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path


# Patterns that look like fabricable claims
CLAIM_PATTERNS = [
    # Prices: $X, $X.YY, $X/mo, $X/month, $X-$Y
    (r"\$\d[\d,]*(?:\.\d+)?(?:\s*[-–]\s*\$?\d[\d,]*(?:\.\d+)?)?(?:\s*/\s*(?:mo|month|year|yr))?", "price"),
    # Star ratings: X.X/5 or X/5 stars or X/10
    (r"\d(?:\.\d+)?\s*/\s*(?:5|10)(?:\s*stars?)?", "rating"),
    # Percentages: X%
    (r"\d{1,3}(?:\.\d+)?\s*%", "percentage"),
    # Big-N stats: "10,000+ users", "250,000 teams"
    (r"\d{1,3}(?:,\d{3})+(?:\+|\s*\w+)?", "big_number"),
    # Years
    (r"\b(?:19|20)\d{2}\b", "year"),
    # Generic dollar amounts under $100 (catch "$49 plan")
    (r"\$\d{1,3}(?!\d)", "small_price"),
]


def extract_claims(text: str) -> list[tuple[str, str, int]]:
    """Return [(matched_text, claim_type, line_no), ...]."""
    claims: list[tuple[str, str, int]] = []
    for line_no, line in enumerate(text.split("\n"), 1):
        for pattern, ctype in CLAIM_PATTERNS:
            for m in re.finditer(pattern, line):
                claim = m.group(0).strip()
                # de-dupe within a line
                if (claim, ctype, line_no) not in claims:
                    claims.append((claim, ctype, line_no))
    return claims


def normalize(s: str) -> str:
    """Loose normalization for fuzzy matching."""
    s = s.lower().strip()
    s = re.sub(r"\s+", " ", s)
    s = s.replace(" per month", "/mo").replace(" per year", "/yr")
    s = s.replace("/month", "/mo").replace("/year", "/yr")
    s = re.sub(r"\s*[-–]\s*", "-", s)
    return s


def verify_claim(claim: str, ctype: str, corpus: str, strict: bool) -> bool:
    """Return True if the claim appears in the corpus."""
    if claim in corpus:
        return True
    if not strict:
        n_claim = normalize(claim)
        n_corpus = normalize(corpus)
        if n_claim in n_corpus:
            return True
        # year: just check the digits
        if ctype == "year":
            return claim in corpus  # already checked
        # rating: try without "stars" / spacing
        if ctype == "rating":
            digits = re.search(r"\d(?:\.\d+)?\s*/\s*(?:5|10)", claim)
            if digits and digits.group(0).replace(" ", "") in n_corpus.replace(" ", ""):
                return True
        # price: strip currency separators
        if ctype in ("price", "small_price"):
            simplified = re.sub(r"[,\s]", "", n_claim)
            if simplified in re.sub(r"[,\s]", "", n_corpus):
                return True
        # percentage: tolerate space differences
        if ctype == "percentage":
            simplified = claim.replace(" ", "")
            if simplified in corpus.replace(" ", ""):
                return True
        # big_number: tolerate comma differences
        if ctype == "big_number":
            simplified = re.sub(r"[,\s]", "", claim)
            if simplified in re.sub(r"[,\s]", "", corpus):
                return True
    return False


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("article", type=Path)
    ap.add_argument("research", type=Path)
    ap.add_argument("--strict", action="store_true",
                    help="require exact substring match")
    args = ap.parse_args()

    if not args.article.exists():
        print(f"FAIL: article not found: {args.article}", file=sys.stderr)
        sys.exit(2)
    if not args.research.exists():
        print(f"FAIL: research.json not found: {args.research}", file=sys.stderr)
        sys.exit(2)

    article = args.article.read_text()
    research = json.loads(args.research.read_text())

    # Build the corpus: full_text of every competitor + titles + headings
    corpus_parts: list[str] = []
    for c in research.get("competitors", []):
        corpus_parts.append(c.get("full_text", ""))
        corpus_parts.append(c.get("title", ""))
        for h in c.get("headings", []):
            corpus_parts.append(h)
    corpus = "\n".join(corpus_parts)

    claims = extract_claims(article)
    if not claims:
        print("No numeric claims found in article. Trivially passes.")
        sys.exit(0)

    fabricated: list[tuple[str, str, int]] = []
    verified: list[tuple[str, str, int]] = []
    for claim, ctype, line_no in claims:
        if verify_claim(claim, ctype, corpus, args.strict):
            verified.append((claim, ctype, line_no))
        else:
            fabricated.append((claim, ctype, line_no))

    print(f"\nClaim verification: {len(verified)}/{len(claims)} verified against research.json\n")

    if verified:
        print(f"Verified ({len(verified)}):")
        for claim, ctype, ln in verified[:10]:
            print(f"  [OK]   line {ln}: {claim} ({ctype})")
        if len(verified) > 10:
            print(f"  ... and {len(verified) - 10} more")

    if fabricated:
        print(f"\nUnverified ({len(fabricated)}):")
        for claim, ctype, ln in fabricated:
            print(f"  [FAIL] line {ln}: {claim} ({ctype})")
        print(f"\nThese claims were not found in any competitor's content.\n"
              "Either:\n"
              "  - Replace them with values that ARE in research.json\n"
              "  - Delete the sentence containing the claim\n"
              "  - If you're sure the claim is correct, hyperlink it to the source URL\n")
        sys.exit(1)

    print("\nEvery numeric claim is supported by research.json.\n")
    sys.exit(0)


if __name__ == "__main__":
    main()
