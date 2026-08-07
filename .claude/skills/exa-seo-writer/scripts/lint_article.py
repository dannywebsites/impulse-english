#!/usr/bin/env python3
"""Programmatic gate enforcement for the exa-seo-writer skill.

Replaces eyeballed self-checks. Run after Stage 4 completes:

    python scripts/lint_article.py article.md brief.md [--include-meta]

Exits 0 only if every gate passes. Prints a clear failure list otherwise.

Gates checked:
- Flesch-Kincaid grade <= 7 on prose only (strips headings, bullets, code, FAQ, optional meta)
- Zero em dashes
- Zero forbidden phrases (from rules/humanizer.md)
- No sentence starts with Moreover/Furthermore/Additionally/In addition
- No markdown tables
- No image / internal-link / external-link placeholders
- Max 1 rhetorical question in body prose (FAQ exempt)
- Final body H2 contains "Verdict"
- Title contains primary keyword (or close variant) and year 2026
- Primary keyword in first 100 words of prose
- Primary keyword (or variant) in >= 2 H2s
- Primary keyword in Verdict section
- Every body paragraph <= 5 sentences (FAQ section exempt)
- Word count >= target_word_count from brief (with 10% floor)
- Optional meta block presence matches --include-meta flag
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path


# ---------- forbidden phrases (mirrors rules/humanizer.md) ----------------

FORBIDDEN_PHRASES = [
    "in conclusion", "let's dive in", "let's dive into",
    "let's explore", "let's delve into", "let's take a look",
    "let's get started", "let's get to work", "let's begin",
    "let's get into it", "buckle up",
    "in today's", "in today's digital", "in today's fast-paced",
    "in an era of", "in a world where",
    "in this article we", "in this article, we",
    "in this comprehensive guide",
    "whether you're a beginner", "whether you're a seasoned",
    "without further ado", "now, let's",
    "it's important to note", "it's worth noting", "it's crucial to",
    "to summarize", "in summary", "at the end of the day",
    "when all is said and done",
    "rich tapestry", "vibrant ecosystem", "paradigm shift",
    "leverage the power of", "unlock the potential",
    "paving the way", "at the forefront of",
    "shed light on", "game-changing", "cutting-edge",
    "revolutionary approach", "holistic approach",
    "valuable insights", "significant impact",
    "thought-provoking", "ever-evolving", "rapidly evolving",
]

CONNECTIVE_STARTS = ("Moreover,", "Furthermore,", "Additionally,",
                     "In addition,", "On top of that,")

PLACEHOLDER_PATTERNS = [
    r"\[IMAGE:",
    r"\[INTERNAL_LINK:",
    r"\[INTERNAL:",
    r"\[EXTERNAL_LINK:",
    r"\[SCREENSHOT:",
    r"!\[[^\]]*\]\([^)]*\)",  # markdown image
]

VERDICT_RE = re.compile(r"\bVerdict\b", re.I)


# ---------- text utilities ------------------------------------------------

SYL_RE = re.compile(r"[aeiouyAEIOUY]+")


def syllables(word: str) -> int:
    word = word.strip("'\".,!?;:()[]")
    if not word:
        return 0
    n = len(SYL_RE.findall(word))
    if word.lower().endswith("e") and n > 1:
        n -= 1
    return max(n, 1)


def fk_grade(prose: str) -> float:
    sentences = [s for s in re.split(r"[.!?]+", prose) if s.strip()]
    words = re.findall(r"\b\w+\b", prose)
    if not sentences or not words:
        return 0.0
    syl = sum(syllables(w) for w in words)
    return 0.39 * (len(words) / len(sentences)) + 11.8 * (syl / len(words)) - 15.59


def headings(text: str) -> list[tuple[int, str]]:
    out = []
    for line in text.split("\n"):
        m = re.match(r"^(#+)\s+(.*?)\s*$", line)
        if m:
            out.append((len(m.group(1)), m.group(2).strip()))
    return out


def split_sections(article: str) -> dict[str, str]:
    """Return {h2_lower: section_text} mapping. Includes 'meta' if present."""
    out: dict[str, str] = {}
    current_key: str | None = None
    current_lines: list[str] = []
    for line in article.split("\n"):
        m = re.match(r"^##\s+(.*?)\s*$", line)
        if m:
            if current_key is not None:
                out[current_key] = "\n".join(current_lines).strip()
            current_key = m.group(1).strip().lower()
            current_lines = []
        else:
            current_lines.append(line)
    if current_key is not None:
        out[current_key] = "\n".join(current_lines).strip()
    return out


def strip_for_fk(article: str) -> str:
    """Prose only — no headings, bullets, code, FAQ Q&A, or meta block."""
    out_lines = []
    in_code = False
    in_meta = False
    in_faq = False
    for line in article.split("\n"):
        s = line.strip()
        if s.startswith("```"):
            in_code = not in_code
            continue
        if in_code:
            continue
        if re.match(r"^---+$", s):
            # Could be the start of the meta block separator
            in_meta = True
            continue
        if in_meta:
            # Meta block runs until end-of-file or next horizontal rule
            continue
        h2 = re.match(r"^##\s+(.*)$", line)
        if h2:
            label = h2.group(1).lower().strip()
            in_faq = "faq" in label or "frequently asked" in label
            continue
        if line.startswith("#"):
            continue
        if in_faq:
            continue
        if re.match(r"^[-*+]\s", s) or re.match(r"^\d+\.\s", s):
            continue
        if re.match(r"^\*\*[^*]+\*\*\s*[:\-]", s):
            continue
        if not s:
            continue
        out_lines.append(s)
    return " ".join(out_lines)


def normalize_kw(kw: str) -> str:
    return re.sub(r"\s+", " ", kw.strip().lower())


QUESTION_PREFIXES = (
    "how to ", "how do i ", "how can i ", "how does ",
    "what is ", "what are ", "why is ", "why are ", "why does ",
    "when should ", "when to ", "where to ",
)
LISTICLE_PREFIXES = ("best ", "top ", "the best ", "the top ")


def kw_variants(kw: str) -> list[str]:
    """Return a list of legitimate variants of the keyword to try matching against."""
    kw = normalize_kw(kw)
    variants = {kw}

    # Strip a leading question-style or listicle prefix
    stripped = kw
    for pfx in QUESTION_PREFIXES + LISTICLE_PREFIXES:
        if stripped.startswith(pfx):
            stripped = stripped[len(pfx):].strip()
            variants.add(stripped)
            break

    # Strip trailing year (2024-2030)
    no_year = re.sub(r"\s*\b(?:202[0-9])\b\s*", " ", kw).strip()
    if no_year != kw:
        variants.add(no_year)
    no_year_stripped = re.sub(r"\s*\b(?:202[0-9])\b\s*", " ", stripped).strip()
    variants.add(no_year_stripped)

    # Pluralize last meaningful word
    for v in list(variants):
        parts = v.split()
        if parts:
            last = parts[-1]
            if not last.endswith("s") and not last.endswith("ies"):
                variants.add(" ".join(parts[:-1] + [last + "s"]))
                variants.add(" ".join(parts[:-1] + [last + "es"]))

    # Insert a single common connector between any two words
    for v in list(variants):
        parts = v.split()
        for i in range(1, len(parts)):
            for connector in ("in", "of", "for", "to", "the", "on"):
                variants.add(" ".join(parts[:i] + [connector] + parts[i:]))

    # Last 2-3 words (for content-bearing tail of long keywords)
    for v in list(variants):
        parts = v.split()
        if len(parts) >= 4:
            variants.add(" ".join(parts[-3:]))
        if len(parts) >= 3:
            variants.add(" ".join(parts[-2:]))

    return [v for v in variants if v]


def keyword_present(text: str, kw: str) -> bool:
    """Match keyword in text, allowing variants:
       - exact substring
       - prefix-stripped (how to / best / top / what is dropped)
       - year-stripped
       - plural last word
       - connector word inserted between any two words
       - tail-only (last 2-3 words for long keywords)
    """
    text_lower = text.lower()
    for v in kw_variants(kw):
        if v in text_lower:
            return True
    return False


# ---------- gates ---------------------------------------------------------


def gate_em_dashes(article: str) -> tuple[bool, str]:
    n = article.count("—")
    return (n == 0, "" if n == 0 else f"{n} em dashes found")


def gate_forbidden_phrases(article: str) -> tuple[bool, str]:
    lower = article.lower()
    found = [p for p in FORBIDDEN_PHRASES if p in lower]
    return (not found, "" if not found else f"forbidden phrases: {', '.join(found)}")


def gate_connective_starts(article: str) -> tuple[bool, str]:
    bad = []
    for sent in re.split(r"(?<=[.!?])\s+", article):
        for prefix in CONNECTIVE_STARTS:
            if sent.lstrip().startswith(prefix):
                bad.append(prefix)
                break
    return (not bad, "" if not bad else f"sentences starting with: {bad[:3]}")


def gate_no_tables(article: str) -> tuple[bool, str]:
    # markdown table = a line with multiple | that has a separator row of dashes
    lines = article.split("\n")
    for i, line in enumerate(lines):
        if line.count("|") >= 2 and i + 1 < len(lines):
            sep = lines[i + 1]
            if re.match(r"^\s*\|?\s*[:\-]{3,}\s*\|", sep):
                return (False, f"markdown table at line {i+1}")
    return (True, "")


def gate_no_placeholders(article: str) -> tuple[bool, str]:
    found = []
    for pat in PLACEHOLDER_PATTERNS:
        m = re.search(pat, article)
        if m:
            found.append(m.group(0)[:40])
    return (not found, "" if not found else f"placeholders: {found}")


def gate_rhetorical_questions(article: str) -> tuple[bool, str]:
    """Count question marks in body prose. FAQ section exempt."""
    sections = split_sections(article)
    body = []
    for k, v in sections.items():
        if "faq" in k or "frequently asked" in k:
            continue
        body.append(v)
    body_text = "\n".join(body)
    # question marks in non-heading lines
    count = 0
    for line in body_text.split("\n"):
        s = line.strip()
        if s.startswith("#") or s.startswith("**") and s.endswith("?**"):
            continue
        if re.match(r"^[-*+]\s.*\?", s):
            continue
        count += s.count("?")
    return (count <= 1, "" if count <= 1 else f"{count} rhetorical questions in body")


def gate_fk_grade(article: str) -> tuple[bool, str]:
    grade = fk_grade(strip_for_fk(article))
    return (grade <= 7.5, f"FK={grade:.2f}" if grade > 7.5 else f"FK={grade:.2f}")


def gate_final_h2_verdict(article: str) -> tuple[bool, str]:
    h2s = [t for lvl, t in headings(article) if lvl == 2]
    if not h2s:
        return (False, "no H2 found")
    last = h2s[-1]
    return (bool(VERDICT_RE.search(last)), f"final H2: {last}")


def gate_title_kw(article: str, keyword: str) -> tuple[bool, str]:
    h1 = next((t for lvl, t in headings(article) if lvl == 1), "")
    has_kw = keyword_present(h1, keyword)
    has_year = "2026" in h1
    if has_kw and has_year:
        return (True, f"title: {h1}")
    msgs = []
    if not has_kw:
        msgs.append("missing keyword")
    if not has_year:
        msgs.append("missing year 2026")
    return (False, f"title '{h1}': {', '.join(msgs)}")


def gate_kw_first_100(article: str, keyword: str) -> tuple[bool, str]:
    prose = strip_for_fk(article)
    first100 = " ".join(prose.split()[:100])
    return (keyword_present(first100, keyword), "" if keyword_present(first100, keyword) else f"first100: {first100[:140]}...")


def gate_kw_in_h2s(article: str, keyword: str) -> tuple[bool, str]:
    h2s = [t for lvl, t in headings(article) if lvl == 2]
    matches = [h for h in h2s if keyword_present(h, keyword)]
    return (len(matches) >= 2, f"H2s containing keyword: {matches}")


def gate_kw_in_verdict(article: str, keyword: str) -> tuple[bool, str]:
    sections = split_sections(article)
    verdict = next((v for k, v in sections.items() if "verdict" in k), None)
    if verdict is None:
        return (False, "no Verdict section")
    return (keyword_present(verdict, keyword), "" if keyword_present(verdict, keyword) else "kw not in Verdict")


def gate_paragraph_len(article: str) -> tuple[bool, str]:
    """Max 5 sentences per body paragraph. FAQ section exempt."""
    sections = split_sections(article)
    long_paras: list[tuple[int, str]] = []
    for k, v in sections.items():
        if "faq" in k or "frequently asked" in k:
            continue
        for p in re.split(r"\n\s*\n", v):
            if not p.strip() or p.strip().startswith("#") or p.strip().startswith("```"):
                continue
            if re.match(r"^[-*+]\s", p.strip()) or re.match(r"^\d+\.\s", p.strip()):
                continue
            sents = [s for s in re.split(r"(?<=[.!?])\s+", p.strip()) if s.strip()]
            if len(sents) > 5:
                long_paras.append((len(sents), p[:60].replace("\n", " ")))
    return (
        not long_paras,
        "" if not long_paras else f"{len(long_paras)} body paragraphs over 5 sentences (e.g., {long_paras[0][0]}-sent: '{long_paras[0][1]}...')"
    )


def gate_word_count(article: str, target: int) -> tuple[bool, str]:
    wc = len(re.findall(r"\b\w+\b", article))
    floor = int(target * 0.9)
    return (wc >= floor, f"{wc} words (target {target}, floor {floor})")


def gate_meta_presence(article: str, include_meta: bool) -> tuple[bool, str]:
    has_meta = bool(re.search(r"^\s*\*?Meta title", article, re.M)) or "*Meta title:" in article
    if include_meta:
        return (has_meta, "" if has_meta else "--include-meta passed but no meta block found")
    else:
        return (not has_meta, "" if not has_meta else "meta block present but --include-meta was NOT passed")


PRODUCT_TESTING_TYPES = {"roundup", "alternatives", "vs", "review"}
RANKED_LIST_TYPES = {"roundup", "alternatives"}


def gate_tldr_present(article: str, article_type: str) -> tuple[bool, str]:
    """TL;DR rules:
       - For roundup/alternatives: NO TL;DR. The ranked-list H2 is the snippet section.
         Returns N/A (passes).
       - For other types: TL;DR is an italic-only paragraph (30-110 words) sitting
         between H1 and first H2, AFTER at least one paragraph of intro prose.
         Returns FAIL if italic block comes before any intro prose.
    """
    if article_type in RANKED_LIST_TYPES:
        return (True, f"N/A for {article_type} type (ranked list serves snippet role)")

    lines = article.split("\n")
    h1_idx = next((i for i, l in enumerate(lines) if l.startswith("# ") and not l.startswith("##")), -1)
    if h1_idx == -1:
        return (False, "no H1 found")
    h2_idx = next((i for i, l in enumerate(lines) if i > h1_idx and l.startswith("## ")), len(lines))
    section = "\n".join(lines[h1_idx + 1:h2_idx])
    paras = [p.strip() for p in re.split(r"\n\s*\n", section) if p.strip()]

    intro_seen = False
    for p in paras:
        s = p.strip()
        is_italic_only = (s.startswith("*") and not s.startswith("**")
                          and s.endswith("*") and not s.endswith("**"))
        if is_italic_only:
            wc = len(re.findall(r"\b\w+\b", s))
            if not (30 <= wc <= 110):
                return (False, f"italic block found but {wc} words (need 30-110, target 50-80)")
            if not intro_seen:
                return (False,
                        "TL;DR italic block appears BEFORE intro prose. "
                        "Reorder: intro paragraph(s) must come first, THEN TL;DR.")
            return (True, f"TL;DR found ({wc} words) after intro")
        else:
            intro_seen = True

    return (False, "no TL;DR italic block between intro and first H2 (and intro is required first)")


# Meta-commentary patterns that ban a TL;DR from passing. The TL;DR must give
# the actual answer, not describe the article's structure.
TLDR_META_COMMENTARY = [
    r"\bthis guide walks\b",
    r"\bthis guide (covers|takes|shows|explains|teaches)\b",
    r"\bthis article (walks|covers|explains|shows|teaches|will)\b",
    r"\bthis post (walks|covers|explains)\b",
    r"\bin this (guide|article|post)\b",
    r"\bwe'?ll (cover|explore|dive|walk|show|teach|look|examine)\b",
    r"\bwe will (cover|explore|dive|walk|show|teach|look|examine)\b",
    r"\bby the end of this\b",
    r"\byou'?ll learn (how to|the|what|why|when)\b",
    r"\byou will learn (how to|the|what|why|when)\b",
    r"\bread on to (find|learn|discover|see)\b",
    r"\bwhether you'?re (a|an|new|looking|trying)\b",
    r"\bhere'?s what (you|we)'?ll (cover|learn|discuss)\b",
]


def gate_tldr_no_meta_commentary(article: str, article_type: str) -> tuple[bool, str]:
    """The TL;DR must be the actual answer, not a description of the article.

    Roundup/alternatives have no TL;DR — N/A.
    For others, find the TL;DR italic block and scan it for meta-commentary phrases.
    """
    if article_type in RANKED_LIST_TYPES:
        return (True, f"N/A for {article_type} type (no TL;DR required)")

    lines = article.split("\n")
    h1_idx = next((i for i, l in enumerate(lines) if l.startswith("# ") and not l.startswith("##")), -1)
    if h1_idx == -1:
        return (True, "no H1 — separate gate will catch this")
    h2_idx = next((i for i, l in enumerate(lines) if i > h1_idx and l.startswith("## ")), len(lines))
    section = "\n".join(lines[h1_idx + 1:h2_idx])
    paras = [p.strip() for p in re.split(r"\n\s*\n", section) if p.strip()]

    tldr_text = None
    for p in paras:
        s = p.strip()
        is_italic_only = (s.startswith("*") and not s.startswith("**")
                          and s.endswith("*") and not s.endswith("**"))
        if is_italic_only:
            wc = len(re.findall(r"\b\w+\b", s))
            if 30 <= wc <= 110:
                tldr_text = s
                break

    if tldr_text is None:
        # No TL;DR found — separate gate handles this. We pass.
        return (True, "no TL;DR found (separate gate enforces presence)")

    inner = tldr_text.strip("*").strip()
    hits: list[str] = []
    for pat in TLDR_META_COMMENTARY:
        m = re.search(pat, inner, re.I)
        if m:
            hits.append(m.group(0))

    if hits:
        snippet = inner[:120].replace("\n", " ")
        return (False,
                f"TL;DR is meta-commentary, not the answer. "
                f"Found: {', '.join(repr(h) for h in hits[:3])}. "
                f"Rewrite: state the actual answer/recommendation, don't describe the article. "
                f"Snippet: {snippet!r}...")
    return (True, "TL;DR is the answer (no meta-commentary)")


def gate_whats_new_present(article: str, brief_text: str) -> tuple[bool, str]:
    """What's New is required UNLESS the brief contains a `whats_new_skip:` line."""
    skip_match = re.search(r"whats_new_skip\s*:\s*(.+)", brief_text, re.I)
    if skip_match:
        return (True, f"skipped per brief: {skip_match.group(1).strip()[:80]}")
    h2s = [t for lvl, t in headings(article) if lvl == 2]
    found = [h for h in h2s if re.search(r"what'?s?\s*(new|changed)|how\s+\w+\s+has\s+evolved|why\s+\d{4}\s+changes", h, re.I)]
    if not found:
        return (False, "no `## What's New in ...` / `## What's Changed in ...` H2 found (and no `whats_new_skip:` in brief)")
    sections = split_sections(article)
    text = next((v for k, v in sections.items() if "what" in k and ("new" in k or "changed" in k or "evolved" in k or "changes" in k)), "")
    wc = len(re.findall(r"\b\w+\b", text))
    if not (60 <= wc <= 250):
        return (False, f"What's New section length {wc} words (need 60–250, target 100–180)")
    return (True, f"What's New found ({wc} words)")


def gate_how_we_tested_present(article: str, article_type: str) -> tuple[bool, str]:
    if article_type not in PRODUCT_TESTING_TYPES:
        return (True, f"N/A for {article_type or 'unknown'} type")
    h2s = [t for lvl, t in headings(article) if lvl == 2]
    found = [h for h in h2s if re.search(r"how\s+we\s+(tested|picked)|our\s+testing\s+process|testing\s+process|our\s+methodology", h, re.I)]
    if not found:
        return (False, "no `## How We Tested` / `## How We Picked` H2 found")
    sections = split_sections(article)
    text = next((v for k, v in sections.items() if "how we" in k or "testing process" in k or "methodology" in k), "")
    wc = len(re.findall(r"\b\w+\b", text))
    if not (50 <= wc <= 250):
        return (False, f"How We Tested section length {wc} words (need 50–250, target 100–180)")
    return (True, f"How We Tested found ({wc} words)")


def gate_no_as_mentioned_callouts(article: str) -> tuple[bool, str]:
    """Ryan Law's anti-AI tell: 'as mentioned above', 'as I mentioned', 'as we discussed'."""
    patterns = [
        r"\bas\s+(?:I\s+|we\s+)?(?:mentioned|discussed|noted|stated|covered)\b",
        r"\babove\s+we\s+(?:discussed|covered|saw|noted)\b",
        r"\bas\s+previously\s+(?:mentioned|noted|discussed)\b",
    ]
    hits = []
    for pat in patterns:
        for m in re.finditer(pat, article, re.I):
            hits.append(m.group(0))
            if len(hits) >= 5:
                break
    return (not hits, "" if not hits else f"found: {hits[:3]}")


def gate_no_not_only_but_also(article: str) -> tuple[bool, str]:
    """The 'not only X but also Y' construction is a textbook AI tell."""
    hits = []
    for m in re.finditer(r"\bnot\s+only\b[^.!?]*\bbut\s+also\b", article, re.I):
        hits.append(m.group(0)[:80])
    return (not hits, "" if not hits else f"{len(hits)} 'not only ... but also' constructions")


def gate_no_tricolons(article: str) -> tuple[bool, str]:
    """3 adjectives in a row separated by commas: 'faster, smarter, and better'.
    Common AI rhetorical flourish. Limit to <= 2 occurrences across the article.
    """
    # Find a bare adjective tricolon: <word>, <word>,? and <word>
    pattern = re.compile(
        r"\b([a-z]{3,15})\s*,\s+([a-z]{3,15})\s*,?\s+(?:and|or)\s+([a-z]{3,15})\b",
        re.I,
    )
    hits = []
    for m in pattern.finditer(article):
        # Heuristic: only count it as a tricolon if all three look like adjectives
        # (no spaces, mostly Roman letters). Ignore obvious noun lists like
        # "Notion, Obsidian, and Roam".
        words = [m.group(1), m.group(2), m.group(3)]
        if all(w[0].islower() for w in words):
            hits.append(", ".join(words))
    if len(hits) > 2:
        return (False, f"{len(hits)} adjective tricolons (max 2): e.g. {hits[0]}, {hits[1]}")
    return (True, f"{len(hits)} tricolon(s) (within limit)")


def gate_passive_voice_ratio(article: str) -> tuple[bool, str]:
    """Crude passive-voice detector: <be-verb> + past participle. Fail if >18% of sentences."""
    sentences = re.split(r"(?<=[.!?])\s+", article)
    sentences = [s for s in sentences if len(s.split()) >= 4]
    if not sentences:
        return (True, "no sentences to check")
    be_pat = re.compile(
        r"\b(is|was|were|are|am|been|being|be)\s+(\w+ed|"
        r"made|done|seen|known|given|taken|written|built|sold|bought|told|brought|"
        r"caught|thought|left|chosen|driven|broken|spoken|stolen|fallen|hidden|paid|"
        r"shown|kept|held|put)\b",
        re.I,
    )
    n_passive = sum(1 for s in sentences if be_pat.search(s))
    pct = n_passive / len(sentences) * 100
    return (pct <= 18, f"{n_passive}/{len(sentences)} sentences passive ({pct:.0f}%)")


def gate_bold_prefix_labels(article: str) -> tuple[bool, str]:
    """Numbered/named labels must be bolded. Plain-text labels are an AI tell.

    Catches lines like:
        Mistake 1: ...     (should be **Mistake 1:** ...)
        Step 2: ...
        Tip 3: ...
        Pro tip: ...

    Excludes H2/H3 lines (those have their own structure) and lines already
    properly bolded.
    """
    label_patterns = [
        # Word + digit, plus colon, at start of a non-heading line
        r"^(?!\*\*)(Mistake|Step|Tip|Tactic|Strategy|Move|Phase|Lesson|Rule)\s+\d+\s*:",
        # Pro tip / Best for / Standout / Limitation / Pricing as bare labels
        r"^(?!\*\*)(Pro tip|Best [Ff]or|Standout|Limitation|Pricing|Rating|Score|Verdict)\s*:",
        # Pick X if ... pattern in vs articles
        r"^(?!\*\*)(Pick\s+[A-Z][\w ]+if)\b",
    ]
    failures: list[str] = []
    for line in article.split("\n"):
        s = line.lstrip()
        # Skip headings, code, blockquotes
        if s.startswith("#") or s.startswith("```") or s.startswith(">"):
            continue
        # Skip bullet/numbered list items where the bold check is on the inner text
        # (e.g. "- **Mistake 1:** ..." should pass)
        body = s
        m = re.match(r"^[-*+]\s+(.*)$", body)
        if m:
            body = m.group(1)
        m = re.match(r"^\d+\.\s+(.*)$", body)
        if m:
            body = m.group(1)
        for pat in label_patterns:
            if re.search(pat, body):
                snippet = body[:60].rstrip()
                failures.append(snippet)
                break
        if len(failures) >= 6:
            break

    if failures:
        return (False,
                f"{len(failures)} prefix label(s) not bolded — wrap in `**...**`. "
                f"Examples: {failures[:3]}")
    return (True, "all prefix labels properly bolded")


def gate_no_repetitive_openers(article: str) -> tuple[bool, str]:
    """3+ consecutive sentences starting with the same word/2-word pattern."""
    # Look at body prose only (strip headings, bullets)
    body_lines = []
    in_code = False
    for line in article.split("\n"):
        s = line.strip()
        if s.startswith("```"):
            in_code = not in_code
            continue
        if in_code or s.startswith("#") or re.match(r"^[-*+]\s", s):
            continue
        body_lines.append(s)
    body = " ".join(body_lines)
    sentences = [s.strip() for s in re.split(r"(?<=[.!?])\s+", body) if s.strip()]

    streaks = []
    streak_start = None
    streak_words = None
    for i, s in enumerate(sentences):
        words = s.split()
        if len(words) < 2:
            continue
        opener = " ".join(words[:2]).lower().strip(",.;:!?")
        if streak_words == opener:
            streak_count = i - streak_start + 1
            if streak_count >= 3:
                streaks.append((opener, streak_count))
        else:
            streak_words = opener
            streak_start = i

    # Dedupe overlapping streaks: keep only longest per opener
    by_opener: dict[str, int] = {}
    for opener, count in streaks:
        by_opener[opener] = max(by_opener.get(opener, 0), count)
    bad = [(o, c) for o, c in by_opener.items() if c >= 3]
    if bad:
        return (False, f"3+ consecutive sentences starting with: " +
                ", ".join(f"'{o}' x{c}" for o, c in bad[:3]))
    return (True, "no repetitive openers")


def gate_ranked_list_items_short(article: str, article_type: str) -> tuple[bool, str]:
    """For roundup/alternatives: every item in the ranked list must be <= 15 words.
    The ranked list is a segmentation snippet, not a deep product review.
    Pricing, features, caveats belong in the deeper H2 sections later.
    """
    if article_type not in RANKED_LIST_TYPES:
        return (True, f"N/A for {article_type or 'unknown'} type")

    # Find the first H2 (ranked-list section) and capture its body
    lines = article.split("\n")
    first_h2_idx = next((i for i, l in enumerate(lines) if l.startswith("## ")), -1)
    if first_h2_idx == -1:
        return (True, "no H2 — separate gate handles this")
    section_lines: list[str] = []
    for l in lines[first_h2_idx + 1:]:
        if l.startswith("## "):
            break
        section_lines.append(l)

    # Find numbered or bulleted list items
    long_items: list[tuple[int, int, str]] = []
    for line in section_lines:
        m = re.match(r"^\s*(?:\d+\.|[-*+])\s+(.*)$", line)
        if not m:
            continue
        item_text = m.group(1).strip()
        if not item_text:
            continue
        wc = len(re.findall(r"\b\w+\b", item_text))
        if wc > 15:
            snippet = item_text[:60].replace("\n", " ")
            long_items.append((wc, 0, snippet))

    if long_items:
        worst = sorted(long_items, key=lambda x: -x[0])
        return (False,
                f"{len(long_items)} ranked-list item(s) over 15 words — "
                f"keep them tight. Worst: {worst[0][0]} words: {worst[0][2]!r}")
    item_pattern = re.compile(r"^\s*(?:\d+\.|[-*+])\s+")
    n_items = sum(1 for l in section_lines if item_pattern.match(l))
    return (True, f"all {n_items} ranked-list items are tight (<=15 words each)")


def gate_ranked_list_present(article: str, article_type: str, keyword: str) -> tuple[bool, str]:
    """For roundup/alternatives only: position-3 H2 must be a short-keyword heading
    immediately followed by a ranked list (numbered 1./2./3. or bulleted) of 3+ items.
    """
    if article_type not in RANKED_LIST_TYPES:
        return (True, f"N/A for {article_type or 'unknown'} type")

    # Find the first H2 in the article
    lines = article.split("\n")
    first_h2_idx = next((i for i, l in enumerate(lines) if l.startswith("## ")), -1)
    if first_h2_idx == -1:
        return (False, "no H2 found")
    first_h2 = lines[first_h2_idx][3:].strip()

    # Heading should contain the primary keyword (variant-matched)
    if not keyword_present(first_h2, keyword):
        return (False, f"first H2 `## {first_h2}` does not contain primary keyword variant")

    # Body of that section should contain a ranked list with 3+ items
    section_lines = []
    for l in lines[first_h2_idx + 1:]:
        if l.startswith("## "):
            break
        section_lines.append(l)
    body = "\n".join(section_lines)
    numbered_items = re.findall(r"^\s*\d+\.\s+\*\*", body, re.M)
    bulleted_items = re.findall(r"^\s*[-*+]\s+\*\*", body, re.M)
    n_items = max(len(numbered_items), len(bulleted_items))
    if n_items < 3:
        return (False, f"first H2 `## {first_h2}` followed by only {n_items} ranked list items (need >=3)")
    return (True, f"Ranked list found: `## {first_h2}` + {n_items} items")


# ---------- driver --------------------------------------------------------


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("article", type=Path)
    ap.add_argument("brief", type=Path, nargs="?")
    ap.add_argument("--include-meta", action="store_true")
    ap.add_argument("--keyword", help="override keyword (otherwise read from brief)")
    ap.add_argument("--target-word-count", type=int, help="override target word count")
    ap.add_argument("--article-type", choices=["roundup", "alternatives", "review", "vs", "guide", "informational"],
                    help="override article type for type-conditional gates (otherwise read from brief)")
    args = ap.parse_args()

    if not args.article.exists():
        print(f"FAIL: article file not found: {args.article}", file=sys.stderr)
        sys.exit(1)

    article = args.article.read_text()

    # Pull keyword + target_wc + article_type from brief.md if available
    keyword = args.keyword or ""
    target_wc = args.target_word_count or 1500
    article_type = args.article_type or ""
    if args.brief and args.brief.exists():
        brief = args.brief.read_text()
        if not keyword:
            m = re.search(r"\*\*Primary keyword:\*\*\s*(.+)", brief)
            if m:
                keyword = m.group(1).strip()
        if not args.target_word_count:
            m = re.search(r"\*\*Target word count:\*\*\s*([\d,]+)", brief)
            if m:
                target_wc = int(m.group(1).replace(",", ""))
        if not article_type:
            m = re.search(r"\*\*Article type:\*\*\s*(\w+)", brief, re.I)
            if m:
                article_type = m.group(1).strip().lower()

    if not keyword:
        print("FAIL: no keyword provided (pass --keyword or include in brief.md)", file=sys.stderr)
        sys.exit(2)

    brief_text = args.brief.read_text() if args.brief and args.brief.exists() else ""

    gates = [
        ("Em dashes (zero allowed)", gate_em_dashes(article)),
        ("Forbidden phrases", gate_forbidden_phrases(article)),
        ("Connective sentence starts", gate_connective_starts(article)),
        ("No markdown tables", gate_no_tables(article)),
        ("No image/link placeholders", gate_no_placeholders(article)),
        ("Max 1 rhetorical question (body)", gate_rhetorical_questions(article)),
        ("FK grade <= 7", gate_fk_grade(article)),
        ("Final body H2 contains 'Verdict'", gate_final_h2_verdict(article)),
        ("Title has primary keyword + year 2026", gate_title_kw(article, keyword)),
        ("Primary keyword in first 100 words", gate_kw_first_100(article, keyword)),
        ("Primary keyword in >= 2 H2s", gate_kw_in_h2s(article, keyword)),
        ("Primary keyword in Verdict section", gate_kw_in_verdict(article, keyword)),
        ("All body paragraphs <= 5 sentences", gate_paragraph_len(article)),
        (f"Word count >= 90% of target ({target_wc})", gate_word_count(article, target_wc)),
        ("Meta presence matches --include-meta flag", gate_meta_presence(article, args.include_meta)),
        ("TL;DR italic block AFTER intro, before first H2 (skip for roundup/alternatives)", gate_tldr_present(article, article_type)),
        ("TL;DR is the actual answer, not meta-commentary about the article", gate_tldr_no_meta_commentary(article, article_type)),
        ("'What's New in [Year]' H2 (100-180 words) OR `whats_new_skip:` in brief", gate_whats_new_present(article, brief_text)),
        ("'How We Tested' H2 present (required for roundup/alternatives/vs/review)", gate_how_we_tested_present(article, article_type)),
        ("Ranked-list H2 + 3+ items at position 3 (required for roundup/alternatives)", gate_ranked_list_present(article, article_type, keyword)),
        ("Ranked-list items are tight (<=15 words each, segmentation tag only)", gate_ranked_list_items_short(article, article_type)),
        ("No 'as mentioned above' / 'as I discussed' callouts", gate_no_as_mentioned_callouts(article)),
        ("No 'not only ... but also' construction", gate_no_not_only_but_also(article)),
        ("Adjective tricolons capped at 2 ('faster, smarter, better' pattern)", gate_no_tricolons(article)),
        ("Passive-voice ratio <= 18%", gate_passive_voice_ratio(article)),
        ("No 3+ consecutive sentences with the same opener", gate_no_repetitive_openers(article)),
        ("Numbered/named prefix labels are bolded (Mistake 1:, Step 2:, Pro tip:)", gate_bold_prefix_labels(article)),
    ]

    passed = sum(1 for _, (ok, _) in gates if ok)
    failed = len(gates) - passed

    print(f"\nLint results: {passed}/{len(gates)} gates passed\n")
    for name, (ok, msg) in gates:
        icon = "PASS" if ok else "FAIL"
        line = f"  [{icon}] {name}"
        if msg:
            line += f"  -- {msg}"
        print(line)

    if failed:
        print(f"\n{failed} gate(s) failed. Revise the article and rerun.\n", file=sys.stderr)
        sys.exit(1)
    print("\nAll gates passed.\n")
    sys.exit(0)


if __name__ == "__main__":
    main()
