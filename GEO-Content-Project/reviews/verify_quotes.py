#!/usr/bin/env python3
"""
Gate: every testimonial on the site must be a REAL person's REAL words.

Checks each quote rendered on the site against reviews.json (pulled live from
the Google Business Profile) and fails on any of:

  MISSING_AUTHOR  the name doesn't match any real Google reviewer
  NOT_VERBATIM    the name is real but the words aren't the words they wrote
  BLOCKED_TEACHER the quote names a teacher outside the approved {JP, Danny} set

NOT_VERBATIM is the one that matters most and the one a name-allowlist can
never catch: a real reviewer's name attached to a sentence they never wrote is
still a fabricated testimonial, and it is the harder kind to spot by eye.

What counts as verbatim: after collapsing whitespace, normalising the quote
characters Google and JSX disagree about, and dropping a trailing ellipsis, the
published text must be a contiguous span of the original review. Fixing a
customer's typo, stitching two halves together, translating them, or trimming a
name out of a list all fail - correctly. If a review can't be published as
written, publish a different review.

Usage:
  python3 verify_quotes.py                 # scan page sources
  python3 verify_quotes.py --dist          # also scan built HTML in dist/
  python3 verify_quotes.py --page LaPazPage.tsx
"""
import argparse, difflib, glob, json, os, re, sys, unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
REVIEWS = os.path.join(HERE, "reviews.json")
SITE = ("/Users/danny/Desktop/backup website Impuls Englisch /"
        "March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97")

APPROVED_TEACHERS = {"jp", "j.p", "j.p.", "pj", "danny", "dani", "daniel", "fitzpatrick"}
# People named in real reviews who are NOT in the approved set. Publishing a
# quote that names them breaks the standing "only JP and Danny" rule, so those
# reviews are unusable even though they are genuine. Unknown names fail closed
# via the candidate scan in build_pool.py.
BLOCKED_TEACHERS = {"ahu", "chesca", "katie", "thomas", "stephan", "stephen",
                    "philip", "philippe"}


def norm(s):
    """Whitespace- and punctuation-insensitive form for comparison only."""
    s = s.replace("’", "'").replace("‘", "'")
    s = s.replace("“", '"').replace("”", '"')
    s = s.replace(" ", " ").replace("&nbsp;", " ")
    s = re.sub(r"[…]|\.{3,}", "", s)          # ellipsis is an allowed trim marker
    s = re.sub(r"\s+", " ", s)
    return s.strip().lower()


def key(s):
    return "".join(c for c in unicodedata.normalize("NFD", norm(s))
                   if unicodedata.category(c) != "Mn")


def load_reviews():
    doc = json.load(open(REVIEWS))
    by_author = {}
    for r in doc["reviews"]:
        by_author.setdefault(key(r["author"]), []).append(r)
    return doc, by_author


# Matches a {name, text} testimonial object in either key order and in either
# JS string style.
#
# The single-quote half is NOT optional politeness. Until 2026-08-06 this pattern
# only accepted double-quoted strings, and every review object written with '...'
# was silently skipped -- the gate printed "0 FAIL" without ever having looked at
# them. That hid all six testimonials in pages/extranjero/ (the whole study-abroad
# cluster), two of which were already live. A verifier that quietly checks less
# than you think is worse than no verifier, because it is trusted.
def _obj_pattern(quote, idx):
    e = re.escape(quote)
    ch = rf"(?:[^{e}\\]|\\.)"     # any char except the delimiter, or an escape
    return (
        rf"\{{[^{{}}]*?(?:name|author)\s*:\s*{e}(?P<name{idx}>{ch}+){e}[^{{}}]*?"
        rf"(?:text|quote)\s*:\s*{e}(?P<text{idx}>{ch}*){e}[^{{}}]*?\}}"
        rf"|\{{[^{{}}]*?(?:text|quote)\s*:\s*{e}(?P<text{idx}b>{ch}*){e}[^{{}}]*?"
        rf"(?:name|author)\s*:\s*{e}(?P<name{idx}b>{ch}+){e}[^{{}}]*?\}}"
    )


QUOTE_OBJ = re.compile(
    "|".join(_obj_pattern(q, i) for i, q in enumerate(['"', "'"])), re.S)


def extract(src):
    out = []
    for m in QUOTE_OBJ.finditer(src):
        g = m.groupdict()
        name = next((v for k, v in g.items() if k.startswith("name") and v), None)
        text = next((v for k, v in g.items() if k.startswith("text") and v), None)
        if not name or not text:
            continue
        if len(text) < 40:          # course names, nav labels - not testimonials
            continue
        out.append((name, text.replace('\\"', '"').replace("\\'", "'")))
    return out


def variants(r):
    """Both texts a reviewer can legitimately be quoted from: what they typed,
    and - for the 8 English reviews - Google's own displayed translation."""
    return [t for t in (r.get("text"), r.get("original_text")) if t]


def coverage(pub, real):
    """(total, longest) share of the published quote found in the real review.

    Both numbers are needed. Total alone calls a quote stitched together from two
    distant halves of a review "100% real" - every character is real, the
    sentence they form is not. The longest single run is what separates a fixed
    typo from a rewrite.
    """
    sm = difflib.SequenceMatcher(None, pub, real, autojunk=False)
    blocks = sm.get_matching_blocks()
    n = max(1, len(pub))
    return sum(b.size for b in blocks) / n, max([b.size for b in blocks] or [0]) / n


def check(name, text, by_author):
    cands = by_author.get(key(name))
    if not cands:
        return "MISSING_AUTHOR", "no Google review by that name"
    pub = norm(text)
    best = (0.0, 0.0, None)
    for r in cands:
        for real in variants(r):
            if pub in norm(real):
                named = [t for t in BLOCKED_TEACHERS
                         if re.search(r"\b" + t + r"\b", text, re.I)]
                if named:
                    return "BLOCKED_TEACHER", "quote names " + ", ".join(named)
                return "OK", r["review_url"] or ""
            total, longest = coverage(pub, norm(real))
            if total > best[0]:
                best = (total, longest, norm(real))
    total, longest, real = best
    i = 0
    while i < min(len(real or ""), len(pub)) and real[i] == pub[i]:
        i += 1
    where = "diverges at char %d: published %r / real %r" % (
        i, pub[max(0, i - 10):i + 55], (real or "")[max(0, i - 10):i + 55])
    # One long run with a couple of characters changed is a fixed typo. Anything
    # else - a stitched quote, a translation, an added clause - is a rewrite.
    kind = "EDITED_MINOR" if longest >= 0.95 else "NOT_VERBATIM"
    return kind, "%d%% real, longest true run %d%% - %s" % (
        round(total * 100), round(longest * 100), where)


DIST = os.path.join(SITE, "dist")
# Bylines from the fabricated testimonial blocks. None of them is a real Google
# reviewer. Kept as a standing tripwire: the last incident shipped invented
# quotes because a third markup variant slipped past a source-only check, so the
# built HTML gets read too.
FABRICATED = [
    "Sandra Moreno", "Fernando Torres", "Cristina R.", "Rosa María V.", "Roberto Sánchez",
    "Patricia López", "Miguel Ángel R.", "Miguel Fernández", "María Marcos", "María José L.",
    "Marta Díaz", "Lucía Gómez", "Laura Martín P.", "Jesús Hernández", "Javier Rodríguez",
    "Inmaculada Soto", "Elena Sánchez R.", "Elena Martín", "David Fernández",
    "Cristina López M.", "Carlos Ruiz", "Carlos M.", "Antonio Castillo", "Ana García R.",
    "Ana Belén P.", "Alejandro Ruiz", "Rosa E.", "Chus Zuazo", "Alejandro M.", "Carmen L.",
    "Laura Cid Moreno", "Aurora Jiménez Solano",
]


def check_dist(verified):
    """Read what actually shipped, not just what the source says."""
    files = glob.glob(os.path.join(DIST, "**", "*.html"), recursive=True)
    if not files:
        print("\ndist/ is empty - run `npm run build` before the dist check")
        return 1
    # Hydrated islands (client:visible) never render into the HTML, so their
    # quotes live in the JS bundle. Both count as shipped.
    bundles = glob.glob(os.path.join(DIST, "**", "*.js"), recursive=True)
    blobs = {f: open(f, encoding="utf-8", errors="ignore").read()
             for f in files + bundles}
    fails = 0
    for name in FABRICATED:
        where = [f for f, s in blobs.items() if ">%s<" % name in s or '"%s"' % name in s]
        if where:
            fails += 1
            print("  ** FABRICATED BYLINE RENDERED: %s -> %s"
                  % (name, os.path.relpath(where[0], DIST)))
    for name, text in verified:
        probe = norm(text)[:60]
        if not any(probe in norm(s) for s in blobs.values()):
            fails += 1
            print("  ** verified quote never reached dist: %s" % name)
    print("\ndist: %d html files, %d verified quotes, %d bylines on the tripwire - %d FAIL"
          % (len(files), len(verified), len(FABRICATED), fails))
    return fails


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--page", help="check a single page file")
    ap.add_argument("--dist", action="store_true", help="also scan built HTML")
    a = ap.parse_args()

    doc, by_author = load_reviews()
    files = []
    if a.page:
        files = glob.glob(os.path.join(SITE, "pages", "**", a.page), recursive=True)
    else:
        files = sorted(glob.glob(os.path.join(SITE, "pages", "**", "*.tsx"), recursive=True)
                       + glob.glob(os.path.join(SITE, "components", "**", "*.tsx"), recursive=True))
        files = [f for f in files if "seo-system" not in f and " 2." not in f]

    fails = 0
    total = 0
    verified = []
    for f in files:
        src = open(f, encoding="utf-8").read()
        quotes = extract(src)
        if not quotes:
            continue
        rows = []
        for name, text in quotes:
            total += 1
            status, detail = check(name, text, by_author)
            if status != "OK":
                fails += 1
            else:
                verified.append((name, text))
            rows.append((status, name, detail))
        if any(r[0] != "OK" for r in rows) or os.environ.get("VERBOSE"):
            print("\n%s" % os.path.relpath(f, SITE))
            for status, name, detail in rows:
                mark = "  ok " if status == "OK" else "  ** "
                print("%s%-16s %-32s %s" % (mark, status, name, detail if status != "OK" else ""))

    print("\n%d quotes checked against %d real Google reviews - %d FAIL"
          % (total, len(doc["reviews"]), fails))
    if a.dist:
        fails += check_dist(verified)
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
