#!/usr/bin/env python3
"""Compute a Surfer-style content score for the article.

The score reports how well the article covers the keyword/entity targets the
brief defined. Mirrors Surfer SEO's actual approach: each keyword has a
frequency BAND (under-coverage AND over-stuffing both penalize), placement
matters (heading > body > none), and the final score is interpreted in three
bands matching Surfer's published guidance.

Usage:
    python scripts/score_content.py article.md brief.md [--out score.json]

Score formula (0-100):
    primary_kw       = 40 points
        - density in 0.8-2.0% target band (linear falloff outside)
        - placement: title, first 100 words, >=2 H2s, Verdict
        - over-stuffing penalty if density > 2.5%
    secondary_kws    = 25 points
        - per-term frequency band (0.7x to 1.5x target_count = full credit)
        - placement bonus: appears in any heading = +5%
        - over-stuffing penalty per-term
    lsi_kws          = 15 points
        - per-term presence (binary)
        - bonus for placement in first 500 words (Surfer-style "true density")
    entities         = 15 points
        - per-entity presence
        - extra weight for must-include vs should-include
    word_count       =  5 points  (article_wc / target_wc capped at 1.0)

Score interpretation (matches Surfer's bands):
    0-33   : Not optimized — major gaps. Rewrite needed.
    34-66  : Optimized OK — ship-able with caveats.
    67-100 : Well optimized — ready to publish.

For comparison, Surfer's docs state: "A score below 33 means your content is
not optimized enough. A score between 33 and 66 means your content is
optimized quite well. A score over 66 means your content is ready to go."
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path


def word_count(text: str) -> int:
    return len(re.findall(r"\b\w+\b", text))


def count_occurrences(text: str, term: str) -> int:
    """Case-insensitive count of `term` in `text` as a whole-word match."""
    pattern = r"\b" + re.escape(term) + r"\b"
    return len(re.findall(pattern, text, re.I))


_QUESTION_PFX = ("how to ", "how do i ", "how do you ", "what is ", "what are ",
                 "why is ", "why does ", "when should ")
_LIST_PFX = ("best ", "top ", "the best ", "the top ")


def count_keyword_with_variants(text: str, kw: str) -> tuple[int, int]:
    """Returns (exact_count, total_with_variants).

    For long-tail keywords where the exact phrase rarely appears verbatim,
    we also count: prefix-stripped (drop "how to ", "best ", "what is "),
    year-stripped, plural last-word, and tail-only (last 2-3 content words).
    Each occurrence counts at most once.
    """
    if not kw:
        return (0, 0)
    text_lower = text.lower()
    kw = kw.lower().strip()
    exact = count_occurrences(text, kw)

    variants: set[str] = set()
    for pfx in _QUESTION_PFX + _LIST_PFX:
        if kw.startswith(pfx):
            stripped = kw[len(pfx):].strip()
            variants.add(stripped)
            break
    no_year = re.sub(r"\s*\b(?:202[0-9])\b\s*", " ", kw).strip()
    if no_year != kw:
        variants.add(no_year)
    # Tail (last 2-3 content words)
    parts = kw.split()
    if len(parts) >= 4:
        variants.add(" ".join(parts[-3:]))
    if len(parts) >= 3:
        variants.add(" ".join(parts[-2:]))
    # Pluralized last word
    if parts and not parts[-1].endswith("s"):
        variants.add(" ".join(parts[:-1] + [parts[-1] + "s"]))

    # Count variant matches that are NOT already counted by the exact match
    # (avoid double-counting where the exact phrase contains a variant)
    variant_total = 0
    for v in variants:
        if not v or v == kw:
            continue
        # Only count occurrences of v that are NOT inside the exact kw match
        # Simple heuristic: count v, subtract co-occurrences with kw
        v_count = count_occurrences(text, v)
        # Rough subtraction: if exact kw appears N times, that consumes N variants
        # Take max(0, v_count - exact)
        variant_total += max(0, v_count - exact)
    return (exact, exact + variant_total)


def parse_brief_keywords(brief: str) -> dict:
    """Pull primary, secondary, lsi keywords + entities + target_wc out of brief.md.

    Brief format produced by workflow 2-brief.md uses markdown tables:
        | Term | Presence | Frequency | Target count | Placement |

    For each term, we want both the name AND the target_count (used for
    Surfer-style frequency-band scoring). If the brief uses a bullet list
    instead of a table, target_count is left None and we fall back to a
    sensible default (1 for LSI, 2 for secondary, 3 for primary).

    Returns:
        {
          "primary_keyword": str,
          "target_word_count": int,
          "primary_terms": [{"term": str, "target_count": int|None}, ...],
          "secondary": [...same shape...],
          "lsi": [...same shape...],
          "entities": [{"name": str, "priority": "must"|"should"|"consider"}, ...],
        }
    """
    out = {
        "primary_keyword": "",
        "primary_terms": [],
        "secondary": [],
        "lsi": [],
        "entities": [],
        "target_word_count": 0,
    }
    m = re.search(r"\*\*Primary keyword:\*\*\s*(.+)", brief)
    if m:
        out["primary_keyword"] = m.group(1).strip()
    m = re.search(r"\*\*Target word count:\*\*\s*([\d,]+)", brief)
    if m:
        out["target_word_count"] = int(m.group(1).replace(",", ""))

    section_patterns = {
        "primary_terms": [r"###\s*Primary"],
        "secondary": [r"###\s*Secondary"],
        "lsi": [r"###\s*LSI"],
        "entities": [r"##\s*Entity targets", r"###\s*Must include"],
    }

    def extract_after(heading_patterns: list[str], default_target: int) -> list[dict]:
        for pat in heading_patterns:
            m = re.search(pat, brief, re.I)
            if not m:
                continue
            chunk = brief[m.end():]
            stop = re.search(r"\n##\s|\n###\s", chunk)
            if stop:
                chunk = chunk[:stop.start()]
            terms: list[dict] = []
            seen: set[str] = set()
            # markdown table rows: | term | presence | frequency | target | placement |
            for line in chunk.split("\n"):
                cells = [c.strip() for c in line.split("|") if c.strip() != ""]
                if len(cells) >= 2:
                    term = cells[0].strip("`*")
                    if term.lower() in ("term", "entity", "name", "---") or "---" in term:
                        continue
                    if not term or len(term) > 80:
                        continue
                    target_count = default_target
                    # Look for the target_count cell — usually 4th column
                    if len(cells) >= 4:
                        m_tc = re.search(r"\d+", cells[3])
                        if m_tc:
                            target_count = int(m_tc.group(0))
                    if term not in seen:
                        terms.append({"term": term, "target_count": target_count})
                        seen.add(term)
                    continue
                # bullet rows: - **term** — verdict / placeholder
                bm = re.match(r"^[-*+]\s+\*?\*?([^*\n]+?)\*?\*?\s*(?:[-—:]|$)", line)
                if bm:
                    term = bm.group(1).strip().strip("`*")
                    if term and len(term) <= 80 and term not in seen:
                        terms.append({"term": term, "target_count": default_target})
                        seen.add(term)
            return terms
        return []

    out["primary_terms"] = extract_after(section_patterns["primary_terms"], default_target=3)
    out["secondary"] = extract_after(section_patterns["secondary"], default_target=2)
    out["lsi"] = extract_after(section_patterns["lsi"], default_target=1)

    # Entities — extract with a priority hint
    ent_chunks = []
    for pat in section_patterns["entities"]:
        m = re.search(pat, brief, re.I)
        if m:
            ent_chunks.append(brief[m.start():])
    if ent_chunks:
        ent_text = "\n".join(ent_chunks)
        current_priority = "must"
        for line in ent_text.split("\n"):
            stripped = line.strip()
            # Skip headings — but use them to update the current priority bucket
            if stripped.startswith("#"):
                low = stripped.lower()
                if "should include" in low or "should-include" in low:
                    current_priority = "should"
                elif "consider" in low:
                    current_priority = "consider"
                elif "must include" in low or "must-include" in low:
                    current_priority = "must"
                continue
            # Skip empty lines, table separators, prose paragraphs
            if not stripped or "---" in stripped:
                continue
            # Only accept bullets or table rows
            cells = [c.strip() for c in line.split("|") if c.strip() != ""]
            term = None
            if line.lstrip().startswith("|") and len(cells) >= 2:
                term = cells[0].strip("`*")
                if term.lower() in ("term", "entity", "name"):
                    continue
            else:
                bm = re.match(r"^\s*[-*+]\s+\*?\*?([^*:—\-\n]+?)\*?\*?\s*(?:[-—:]|$|\()",
                              line)
                if bm:
                    term = bm.group(1).strip().strip("`*")
            if not term:
                continue
            # If the bullet contains a comma-separated list of short names,
            # split it (e.g., "Semrush, Ahrefs, Perplexity, Gemini")
            candidates = [term]
            if "," in term and len(term) <= 120:
                parts = [p.strip().strip("`*") for p in term.split(",")]
                if all(2 <= len(p) <= 40 for p in parts):
                    candidates = parts
            for cand in candidates:
                if not cand or len(cand) > 60:
                    continue
                # Skip obvious non-entity strings (sentences, generic words)
                if cand.lower() in {"more", "less", "etc", "and", "or", "the"}:
                    continue
                if cand.endswith("...") or cand.startswith("(") or cand.endswith(")"):
                    continue
                if not any(e["name"] == cand for e in out["entities"]):
                    out["entities"].append({"name": cand, "priority": current_priority})

    return out


def frequency_band_score(actual: int, target: int) -> float:
    """Surfer-style frequency band scoring.

    Returns 0-1 score based on how close `actual` is to `target`.
    - 0.7x to 1.5x of target = full credit (1.0)
    - 0.4x to 0.7x = partial (linear ramp 0 -> 1)
    - 1.5x to 2.5x = penalized (linear falloff 1 -> 0.5) — over-coverage is OK but not free
    - >2.5x = keyword stuffing (linear falloff 0.5 -> 0)
    - <0.4x = under-coverage (linear ramp 0 -> 1 from 0 to 0.4x)

    `target` of 0 always returns 1.0 (no target = trivially met).
    """
    if target <= 0:
        return 1.0
    ratio = actual / target
    if 0.7 <= ratio <= 1.5:
        return 1.0
    if ratio < 0.7:
        # Below ideal: linear ramp from 0 -> 1 across [0, 0.7]
        return max(0.0, ratio / 0.7)
    if 1.5 < ratio <= 2.5:
        # Slight over: 1.5x = 1.0, 2.5x = 0.5
        return 1.0 - (ratio - 1.5) * 0.5
    # Stuffing: 2.5x = 0.5, beyond -> 0
    return max(0.0, 0.5 - (ratio - 2.5) * 0.25)


def appears_in_any_heading(article: str, term: str) -> bool:
    pattern = r"^#+\s+.*\b" + re.escape(term) + r"\b"
    return bool(re.search(pattern, article, re.M | re.I))


def appears_in_first_n(article: str, term: str, n: int) -> bool:
    """Whether term appears in the first N words of the article (prose-only)."""
    words = article.split()
    first_n = " ".join(words[:n]).lower()
    return term.lower() in first_n


def keyword_variants(kw: str) -> list[str]:
    """All variants we'll accept for placement matching. Mirrors lint_article.py."""
    if not kw:
        return []
    kw = kw.lower().strip()
    variants = {kw}
    for pfx in _QUESTION_PFX + _LIST_PFX:
        if kw.startswith(pfx):
            variants.add(kw[len(pfx):].strip())
            break
    no_year = re.sub(r"\s*\b(?:202[0-9])\b\s*", " ", kw).strip()
    if no_year != kw:
        variants.add(no_year)
    parts = kw.split()
    if len(parts) >= 4:
        variants.add(" ".join(parts[-3:]))
    if len(parts) >= 3:
        variants.add(" ".join(parts[-2:]))
    if parts and not parts[-1].endswith("s"):
        variants.add(" ".join(parts[:-1] + [parts[-1] + "s"]))
    return [v for v in variants if v and len(v) >= 3]


def keyword_in_text(text: str, kw: str) -> bool:
    """True if kw or any common variant appears in text."""
    text_lower = text.lower()
    return any(v in text_lower for v in keyword_variants(kw))


def score(article: str, brief_data: dict) -> dict:
    article_wc = word_count(article)
    primary_kw = brief_data["primary_keyword"]
    target_wc = brief_data["target_word_count"] or 1500

    # ---- Primary keyword (40 points) ----
    if primary_kw:
        primary_exact, primary_count = count_keyword_with_variants(article, primary_kw)
    else:
        primary_exact, primary_count = 0, 0
    primary_density = (primary_count / article_wc * 100) if article_wc else 0
    # density target band: 0.8% to 2.0% (skill rule)
    if 0.8 <= primary_density <= 2.0:
        density_score = 1.0
    elif 0.4 <= primary_density < 0.8:
        density_score = 0.4 + (primary_density - 0.4) * 1.5  # ramp 0.4 -> 1.0
    elif 2.0 < primary_density <= 2.5:
        density_score = 1.0 - (primary_density - 2.0) * 1.0  # ramp 1.0 -> 0.5
    elif primary_density > 2.5:
        density_score = max(0.0, 0.5 - (primary_density - 2.5) * 0.4)  # stuffing penalty
    else:
        density_score = max(0.0, primary_density / 0.4 * 0.4)  # under-coverage

    # Placement (uses variant matching — same as lint_article.py)
    h1 = next((m.group(1) for m in re.finditer(r"^#\s+(.+)$", article, re.M)), "")
    in_title = keyword_in_text(h1, primary_kw) if primary_kw else False
    if primary_kw:
        first_100 = " ".join(article.split()[:100])
        in_first_100 = keyword_in_text(first_100, primary_kw)
    else:
        in_first_100 = False
    h2s = re.findall(r"^##\s+(.+)$", article, re.M)
    h2_count = sum(1 for h in h2s if keyword_in_text(h, primary_kw)) if primary_kw else 0
    verdict_section = ""
    in_verdict_block = False
    for line in article.split("\n"):
        m = re.match(r"^##\s+(.*Verdict.*)$", line)
        if m:
            in_verdict_block = True
            continue
        if in_verdict_block:
            if line.startswith("##"):
                break
            verdict_section += line + "\n"
    in_verdict_section = keyword_in_text(verdict_section, primary_kw) if primary_kw else False

    placement_score = (
        (0.25 if in_title else 0)
        + (0.25 if in_first_100 else 0)
        + (0.25 if h2_count >= 2 else 0.10 if h2_count == 1 else 0)
        + (0.25 if in_verdict_section else 0)
    )
    primary_points = 40 * (0.5 * density_score + 0.5 * placement_score)

    # ---- Secondary keywords (25 points, per-keyword frequency-band scoring) ----
    secondaries = brief_data["secondary"]
    sec_breakdown: list[dict] = []
    if secondaries:
        per_kw = 25.0 / len(secondaries)
        sec_total = 0.0
        for entry in secondaries:
            term = entry["term"]
            target_count = entry["target_count"] or 2
            actual = count_occurrences(article, term)
            band = frequency_band_score(actual, target_count)
            in_heading = appears_in_any_heading(article, term)
            placement_bonus = 0.05 if in_heading else 0.0
            kw_score = min(1.0, band + placement_bonus)
            sec_total += per_kw * kw_score
            sec_breakdown.append({
                "term": term,
                "target": target_count,
                "actual": actual,
                "band_score": round(band, 2),
                "in_heading": in_heading,
                "score_pct": round(kw_score * 100),
                "status": "OK" if band >= 0.9 else
                          "low" if band < 0.7 and actual < target_count else
                          "over" if actual > target_count * 1.5 else "borderline",
            })
        secondary_points = sec_total
    else:
        secondary_points = 25.0
        sec_breakdown = []

    # ---- LSI (15 points, presence-based with placement bonus) ----
    lsis = brief_data["lsi"]
    if lsis:
        per_lsi = 15.0 / len(lsis)
        lsi_total = 0.0
        lsi_breakdown: list[dict] = []
        for entry in lsis:
            term = entry["term"]
            actual = count_occurrences(article, term)
            if actual >= 1:
                # Bonus if it appears in the first 500 words (Surfer-style "true density")
                in_top = appears_in_first_n(article, term, 500)
                lsi_total += per_lsi * (1.05 if in_top else 1.0)
                lsi_breakdown.append({"term": term, "actual": actual, "status": "covered",
                                      "in_top_500": in_top})
            else:
                lsi_breakdown.append({"term": term, "actual": 0, "status": "missing",
                                      "in_top_500": False})
        lsi_points = min(15.0, lsi_total)
    else:
        lsi_points = 15.0
        lsi_breakdown = []

    # ---- Entities (15 points, weighted by priority) ----
    entities = brief_data["entities"]
    if entities:
        # must = 1.0, should = 0.7, consider = 0.4
        weights = {"must": 1.0, "should": 0.7, "consider": 0.4}
        total_weight = sum(weights[e.get("priority", "must")] for e in entities)
        ent_score = 0.0
        ent_breakdown: list[dict] = []
        for e in entities:
            name = e["name"]
            priority = e.get("priority", "must")
            actual = count_occurrences(article, name)
            covered = actual >= 1
            if covered:
                ent_score += weights[priority]
            ent_breakdown.append({
                "name": name, "priority": priority, "actual": actual,
                "status": "covered" if covered else "missing",
            })
        entity_points = (ent_score / total_weight) * 15.0 if total_weight > 0 else 15.0
    else:
        entity_points = 15.0
        ent_breakdown = []

    # ---- Word count (5 points) ----
    wc_ratio = min(1.0, article_wc / target_wc) if target_wc else 1.0
    wc_points = 5 * wc_ratio

    total = primary_points + secondary_points + lsi_points + entity_points + wc_points

    return {
        "total_score": round(total, 1),
        "interpretation": (
            "Well optimized — ready to publish" if total >= 67
            else "Optimized OK — ship-able with caveats" if total >= 34
            else "Not optimized — major gaps, rewrite needed"
        ),
        "components": {
            "primary_keyword": {
                "points": round(primary_points, 1),
                "max": 40,
                "keyword": primary_kw,
                "count": primary_count,
                "exact_count": primary_exact,
                "variant_count": primary_count - primary_exact,
                "density_pct": round(primary_density, 2),
                "density_target_band": "0.8 - 2.0%",
                "density_score": round(density_score, 2),
                "in_title": in_title,
                "in_first_100": in_first_100,
                "in_h2s_count": h2_count,
                "in_verdict": in_verdict_section,
                "placement_score": round(placement_score, 2),
            },
            "secondary_keywords": {
                "points": round(secondary_points, 1),
                "max": 25,
                "total": len(secondaries),
                "fully_covered": sum(1 for s in sec_breakdown if s.get("status") == "OK"),
                "under_covered": sum(1 for s in sec_breakdown if s.get("status") == "low"),
                "over_stuffed": sum(1 for s in sec_breakdown if s.get("status") == "over"),
                "in_headings": sum(1 for s in sec_breakdown if s.get("in_heading")),
                "breakdown": sec_breakdown,
            },
            "lsi_keywords": {
                "points": round(lsi_points, 1),
                "max": 15,
                "total": len(lsis),
                "covered": sum(1 for l in lsi_breakdown if l.get("status") == "covered"),
                "in_top_500": sum(1 for l in lsi_breakdown if l.get("in_top_500")),
                "missing": [l["term"] for l in lsi_breakdown if l.get("status") == "missing"][:20],
            },
            "entities": {
                "points": round(entity_points, 1),
                "max": 15,
                "total": len(entities),
                "covered": sum(1 for e in ent_breakdown if e.get("status") == "covered"),
                "missing_must_include": [
                    e["name"] for e in ent_breakdown
                    if e.get("status") == "missing" and e.get("priority") == "must"
                ][:20],
                "breakdown": ent_breakdown[:30],
            },
            "word_count": {
                "points": round(wc_points, 1),
                "max": 5,
                "actual": article_wc,
                "target": target_wc,
                "ratio": round(wc_ratio, 2),
            },
        },
    }


def render_summary(s: dict) -> str:
    out = []
    total = s["total_score"]
    out.append(f"\nContent Score: {total}/100")
    out.append(f"Verdict: {s['interpretation']}\n")

    pk = s["components"]["primary_keyword"]
    out.append(f"Primary keyword: {pk['keyword']!r}  ({pk['points']}/{pk['max']} pts)")
    out.append(f"  density: {pk['density_pct']}% (target band {pk['density_target_band']}, score {pk['density_score']})")
    out.append(f"  count: {pk['count']}")
    placements = []
    placements.append(f"title {'OK' if pk['in_title'] else 'MISSING'}")
    placements.append(f"first 100 {'OK' if pk['in_first_100'] else 'MISSING'}")
    placements.append(f"H2s {pk['in_h2s_count']}")
    placements.append(f"Verdict {'OK' if pk['in_verdict'] else 'MISSING'}")
    out.append(f"  placement: " + ", ".join(placements))

    sec = s["components"]["secondary_keywords"]
    out.append(f"\nSecondary keywords  ({sec['points']}/{sec['max']} pts)")
    out.append(f"  fully covered: {sec['fully_covered']}/{sec['total']}")
    if sec.get("under_covered"):
        out.append(f"  under-covered: {sec['under_covered']} (need more mentions)")
    if sec.get("over_stuffed"):
        out.append(f"  over-stuffed: {sec['over_stuffed']} (too many mentions — penalty)")
    out.append(f"  in headings: {sec['in_headings']}")
    # Show worst offenders (by status)
    bad = [b for b in sec.get("breakdown", []) if b.get("status") in ("low", "over")]
    if bad:
        out.append(f"  needs attention:")
        for b in bad[:6]:
            out.append(f"    - {b['term']}: {b['actual']}/{b['target']} ({b['status']})")

    lsi = s["components"]["lsi_keywords"]
    out.append(f"\nLSI keywords  ({lsi['points']}/{lsi['max']} pts)")
    out.append(f"  covered: {lsi['covered']}/{lsi['total']}")
    if lsi.get("in_top_500"):
        out.append(f"  in top 500 words (true-density bonus): {lsi['in_top_500']}")
    if lsi.get("missing"):
        out.append(f"  missing (first 8): {', '.join(lsi['missing'][:8])}")

    ent = s["components"]["entities"]
    out.append(f"\nEntities  ({ent['points']}/{ent['max']} pts)")
    out.append(f"  covered: {ent['covered']}/{ent['total']}")
    if ent.get("missing_must_include"):
        out.append(f"  missing must-include: {', '.join(ent['missing_must_include'][:8])}")

    wc = s["components"]["word_count"]
    out.append(f"\nWord count  ({wc['points']}/{wc['max']} pts)")
    out.append(f"  {wc['actual']} / target {wc['target']} (ratio {wc['ratio']})")

    out.append("")
    return "\n".join(out)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("article", type=Path)
    ap.add_argument("brief", type=Path)
    ap.add_argument("--out", type=Path, default=None,
                    help="Write score.json here (default: alongside article)")
    args = ap.parse_args()

    if not args.article.exists():
        print(f"FAIL: article not found: {args.article}", file=sys.stderr)
        sys.exit(2)
    if not args.brief.exists():
        print(f"FAIL: brief not found: {args.brief}", file=sys.stderr)
        sys.exit(2)

    article = args.article.read_text()
    brief_data = parse_brief_keywords(args.brief.read_text())
    s = score(article, brief_data)

    out_path = args.out or args.article.parent / "score.json"
    out_path.write_text(json.dumps(s, indent=2))

    print(render_summary(s))
    print(f"Wrote {out_path}")


if __name__ == "__main__":
    main()
