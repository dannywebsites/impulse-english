#!/usr/bin/env python3
"""Extract voice patterns from brand-voice sample articles.

Reads every .md and .txt file in references/brand-voice/ (or a folder passed
via --folder), runs lightweight statistical analysis, and writes a
voice_notes.md that the brief stage can paste into the writing prompts.

Usage:
    python scripts/extract_voice.py
    python scripts/extract_voice.py --folder /path/to/voice/samples
    python scripts/extract_voice.py --out /tmp/voice_notes.md

The output is a structured markdown summary the agent can read at draft time:

    # Brand Voice Notes

    ## Sentence rhythm
    - average sentence length: 14 words
    - 18% of sentences are short (<= 8 words)
    - 12% one-sentence paragraphs (used for emphasis)

    ## Vocabulary
    - contractions: heavy (you'll, it's, don't appear in 80% of paragraphs)
    - Anglo-Saxon over Latinate: yes
    - technical jargon comfort: medium

    ...etc.
"""

from __future__ import annotations

import argparse
import json
import re
import statistics
from collections import Counter
from pathlib import Path


CONTRACTIONS = ["'s", "'re", "'ll", "'ve", "'d", "n't", "'m"]
HEDGE_WORDS = ["might", "perhaps", "possibly", "maybe", "tends to", "in some cases", "depending on"]
COMMIT_WORDS = ["is", "use", "pick", "choose", "go with", "skip", "avoid", "always", "never"]


def read_samples(folder: Path) -> list[tuple[str, str]]:
    """Return [(filename, text), ...] for each .md/.txt in folder."""
    out = []
    for path in sorted(folder.glob("*")):
        if path.suffix.lower() not in (".md", ".txt"):
            continue
        if path.name.lower() == "readme.md":
            continue
        try:
            text = path.read_text()
        except UnicodeDecodeError:
            text = path.read_text(encoding="latin-1", errors="ignore")
        out.append((path.name, text))
    return out


def strip_markup(text: str) -> str:
    """Remove headings, code blocks, tables, link targets — leave prose."""
    out = []
    in_code = False
    for line in text.split("\n"):
        s = line.rstrip()
        if s.lstrip().startswith("```"):
            in_code = not in_code
            continue
        if in_code:
            continue
        if s.lstrip().startswith("#"):
            continue
        if re.match(r"^\s*\|.*\|", s):
            continue
        # strip link [text](url) -> text
        s = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s)
        # strip bold/italic markers but keep content
        s = re.sub(r"\*\*([^*]+)\*\*", r"\1", s)
        s = re.sub(r"\*([^*]+)\*", r"\1", s)
        out.append(s)
    return "\n".join(out)


def split_sentences(prose: str) -> list[str]:
    return [s.strip() for s in re.split(r"(?<=[.!?])\s+", prose) if s.strip()]


def split_paragraphs(prose: str) -> list[str]:
    return [p.strip() for p in re.split(r"\n\s*\n", prose) if p.strip()]


def syllables(word: str) -> int:
    word = word.strip("'\".,!?;:()[]")
    if not word:
        return 0
    n = len(re.findall(r"[aeiouyAEIOUY]+", word))
    if word.lower().endswith("e") and n > 1:
        n -= 1
    return max(n, 1)


def analyze(samples: list[tuple[str, str]]) -> dict:
    if not samples:
        return {"sample_count": 0}

    all_prose = []
    all_paras = []
    all_sentences = []
    pov_first = 0  # I, my
    pov_second = 0  # you, your
    pov_third = 0  # they, them
    contraction_hits = 0
    contraction_paragraphs = 0
    hedge_hits = 0
    commit_hits = 0
    one_sentence_paragraphs = 0
    short_sentences = 0  # <= 8 words
    long_sentences = 0  # >= 25 words
    question_count = 0

    for name, text in samples:
        prose = strip_markup(text)
        all_prose.append(prose)
        paras = split_paragraphs(prose)
        all_paras.extend(paras)
        for p in paras:
            sents = split_sentences(p)
            if len(sents) == 1:
                one_sentence_paragraphs += 1
            all_sentences.extend(sents)
            has_contraction = False
            for c in CONTRACTIONS:
                if c in p:
                    has_contraction = True
                    contraction_hits += p.count(c)
            if has_contraction:
                contraction_paragraphs += 1

        for s in split_sentences(prose):
            wc = len(re.findall(r"\b\w+\b", s))
            if wc <= 8:
                short_sentences += 1
            if wc >= 25:
                long_sentences += 1
            if s.endswith("?"):
                question_count += 1
            lower = s.lower()
            for h in HEDGE_WORDS:
                if h in lower:
                    hedge_hits += 1
            for c in COMMIT_WORDS:
                if re.search(r"\b" + re.escape(c) + r"\b", lower):
                    commit_hits += 1

        # POV
        for m in re.finditer(r"\b(i|me|my|mine|myself)\b", prose, re.I):
            pov_first += 1
        for m in re.finditer(r"\b(you|your|yours|yourself)\b", prose, re.I):
            pov_second += 1
        for m in re.finditer(r"\b(they|them|their|theirs)\b", prose, re.I):
            pov_third += 1

    sentence_lengths = [len(re.findall(r"\b\w+\b", s)) for s in all_sentences if s.strip()]
    avg_sent = statistics.mean(sentence_lengths) if sentence_lengths else 0
    median_sent = statistics.median(sentence_lengths) if sentence_lengths else 0
    stdev_sent = statistics.pstdev(sentence_lengths) if len(sentence_lengths) > 1 else 0

    # Syllable distribution
    all_words = []
    for s in all_sentences:
        all_words.extend(re.findall(r"\b[a-zA-Z]+\b", s))
    syl_counts = [syllables(w) for w in all_words]
    avg_syl = statistics.mean(syl_counts) if syl_counts else 0
    pct_one_syl = sum(1 for s in syl_counts if s == 1) / len(syl_counts) if syl_counts else 0
    pct_three_plus = sum(1 for s in syl_counts if s >= 3) / len(syl_counts) if syl_counts else 0

    # Most common opening words for paragraphs
    opener_counter = Counter()
    for p in all_paras:
        first_words = " ".join(p.split()[:2]).lower()
        opener_counter[first_words] += 1
    top_openers = opener_counter.most_common(8)

    # Connector phrases (sentences starting with a single transition word)
    connectors = Counter()
    transition_pattern = re.compile(r"^(but|so|and|because|that's|the|here|now|still|also|even|in|when)\b", re.I)
    for s in all_sentences:
        m = transition_pattern.match(s)
        if m:
            connectors[m.group(1).lower()] += 1
    top_connectors = connectors.most_common(6)

    return {
        "sample_count": len(samples),
        "sample_filenames": [name for name, _ in samples],
        "total_paragraphs": len(all_paras),
        "total_sentences": len(all_sentences),
        "sentence_length": {
            "mean": round(avg_sent, 1),
            "median": round(median_sent, 1),
            "stdev": round(stdev_sent, 1),
            "pct_short": round(short_sentences / len(all_sentences), 2) if all_sentences else 0,
            "pct_long": round(long_sentences / len(all_sentences), 2) if all_sentences else 0,
        },
        "syllables": {
            "mean": round(avg_syl, 2),
            "pct_one_syllable": round(pct_one_syl, 2),
            "pct_three_plus": round(pct_three_plus, 2),
        },
        "paragraphs": {
            "one_sentence_pct": round(one_sentence_paragraphs / len(all_paras), 2) if all_paras else 0,
            "with_contraction_pct": round(contraction_paragraphs / len(all_paras), 2) if all_paras else 0,
        },
        "pov": {
            "first_person": pov_first,
            "second_person": pov_second,
            "third_person": pov_third,
            "dominant": "second" if pov_second > max(pov_first, pov_third) else
                        "first" if pov_first > pov_third else "third",
        },
        "tone_signals": {
            "hedges": hedge_hits,
            "commits": commit_hits,
            "ratio_commit_to_hedge": round(commit_hits / max(hedge_hits, 1), 2),
            "rhetorical_questions": question_count,
        },
        "top_paragraph_openers": top_openers,
        "top_sentence_connectors": top_connectors,
    }


def render_notes(stats: dict) -> str:
    if stats.get("sample_count", 0) == 0:
        return ("# Brand Voice Notes\n\n"
                "No samples found in the brand-voice folder. Skipping voice extraction. "
                "Articles will be written in the default voice (concise, clear, grade-7, opinionated).\n")

    sl = stats["sentence_length"]
    syl = stats["syllables"]
    para = stats["paragraphs"]
    pov = stats["pov"]
    tone = stats["tone_signals"]

    rhythm_note = (f"average sentence length is {sl['mean']} words. "
                   f"{int(sl['pct_short']*100)}% of sentences are short (<=8 words), "
                   f"{int(sl['pct_long']*100)}% are long (>=25 words). "
                   f"sentence length variance (stdev {sl['stdev']}) "
                   + ("indicates strong rhythm variation." if sl['stdev'] >= 7 else "indicates fairly even pacing."))

    vocab_note = (f"average syllables per word is {syl['mean']}. "
                  f"{int(syl['pct_one_syllable']*100)}% of words are one syllable, "
                  f"{int(syl['pct_three_plus']*100)}% are three or more. "
                  + ("Anglo-Saxon-leaning, plain-English voice." if syl['pct_one_syllable'] >= 0.55
                     else "More Latinate / formal vocabulary."))

    contraction_note = ("Contractions appear in the majority of paragraphs (you'll, it's, don't): conversational tone."
                        if para["with_contraction_pct"] >= 0.5
                        else "Contractions are rare: more formal register.")

    para_note = (f"{int(para['one_sentence_pct']*100)}% one-sentence paragraphs"
                 + (" (used for emphasis)" if para['one_sentence_pct'] >= 0.08 else ""))

    pov_note = {"first": "first-person dominant (I, my)",
                "second": "second-person dominant (you, your) — direct reader address",
                "third": "third-person dominant (they, them)"}[pov["dominant"]]

    tone_note = (f"commit/hedge ratio is {tone['ratio_commit_to_hedge']:.1f}. "
                 + ("Strongly opinionated voice — commits more than it hedges." if tone['ratio_commit_to_hedge'] >= 3
                    else "Balanced voice between commitment and qualification." if tone['ratio_commit_to_hedge'] >= 1.5
                    else "Hedging is common — softer / more cautious voice."))

    openers = ", ".join(f"`{op}` ({n})" for op, n in stats["top_paragraph_openers"][:5])
    connectors = ", ".join(f"`{c}` ({n})" for c, n in stats["top_sentence_connectors"][:4])

    out = f"""# Brand Voice Notes

Extracted from {stats['sample_count']} sample article(s) in `references/brand-voice/`:
{', '.join(stats['sample_filenames'])}

The writing stage should mirror these patterns where possible, while still respecting `rules/humanizer.md` (forbidden words and AI-tells). Voice ≠ permission to use banned vocabulary.

## Sentence rhythm
- {rhythm_note}
- Target the same average length (~{sl['mean']} words) and variance.

## Vocabulary
- {vocab_note}
- {contraction_note}

## Paragraph structure
- average paragraph: ~{round(stats['total_sentences'] / max(stats['total_paragraphs'], 1), 1)} sentences
- {para_note}

## Voice register
- {pov_note}
- {tone_note}

## Top paragraph openers (mirror these instead of generic AI patterns)
{openers}

## Top sentence-start connectors
{connectors}

## When writing
- Match average sentence length and variance
- Use contractions if the brand uses them (most likely)
- Open paragraphs with the patterns above, not "In today's...", "When it comes to...", "It's important to note that..."
- Keep the same commit/hedge ratio — if the brand commits, you commit
- Use the dominant POV across the article (don't mix you / I / they unnecessarily)
"""
    return out


def main():
    ap = argparse.ArgumentParser(description="Extract brand voice patterns from sample articles.")
    skill_dir = Path(__file__).resolve().parent.parent
    ap.add_argument("--folder", type=Path,
                    default=skill_dir / "references" / "brand-voice",
                    help="Folder containing sample articles (default: references/brand-voice/)")
    ap.add_argument("--out", type=Path, default=None,
                    help="Output path for voice_notes.md (default: <cwd>/voice_notes.md)")
    ap.add_argument("--json", action="store_true",
                    help="Also print raw JSON stats to stdout")
    args = ap.parse_args()

    if not args.folder.exists():
        print(f"Brand-voice folder not found: {args.folder}\n"
              f"Skipping voice extraction. Articles will use default voice.")
        return 0

    samples = read_samples(args.folder)
    stats = analyze(samples)

    if args.json:
        print(json.dumps(stats, indent=2))

    notes = render_notes(stats)
    out_path = args.out or Path.cwd() / "voice_notes.md"
    out_path.write_text(notes)
    print(f"Wrote {out_path}")

    if stats["sample_count"] == 0:
        print("(No samples found — voice_notes.md is empty. Drop articles in the folder and rerun.)")
    else:
        print(f"Analyzed {stats['sample_count']} sample(s), "
              f"{stats['total_sentences']} sentences, "
              f"{stats['total_paragraphs']} paragraphs.")


if __name__ == "__main__":
    main()
