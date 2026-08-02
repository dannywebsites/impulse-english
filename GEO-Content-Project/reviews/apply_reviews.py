#!/usr/bin/env python3
"""
Write the allocated real reviews into the page files, verbatim.

Reads allocation.json and, for each page, finds the run of testimonial object
literals it already renders and replaces them - keeping whatever key names and
indentation that page already uses, so nothing else about the page changes.

Deliberately dumb about layout: this only swaps the data. Anything visual stays
in the page's own JSX, which is where the layout contract lives.

Usage:
  python3 apply_reviews.py --dry-run
  python3 apply_reviews.py                     # writes, backing up to .bak-reviews
  python3 apply_reviews.py --page LaPazPage.tsx
"""
import argparse, json, os, re, shutil, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ALLOC = os.path.join(HERE, "allocation.json")
SITE = ("/Users/danny/Desktop/backup website Impuls Englisch /"
        "March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97")
PAGES_DIR = os.path.join(SITE, "pages")
BACKUPS = os.path.join(HERE, "backups")

OBJ = re.compile(r"\{[^{}]*?(?:name|author|quote|text)\s*:\s*\"(?:[^\"\\]|\\.)*\"[^{}]*?\}", re.S)


def is_testimonial(obj):
    body = re.search(r"(?:text|quote)\s*:\s*\"((?:[^\"\\]|\\.)*)\"", obj, re.S)
    has_name = re.search(r"(?:name|author)\s*:\s*\"", obj)
    return bool(body and has_name and len(body.group(1)) >= 40)


def keys_of(obj):
    name_k = "author" if re.search(r"\bauthor\s*:", obj) else "name"
    text_k = "quote" if re.search(r"\bquote\s*:", obj) else "text"
    role_k = None
    for k in ("role", "location", "subtitle", "detail"):
        if re.search(r"\b%s\s*:" % k, obj):
            role_k = k
            break
    return name_k, text_k, role_k


def esc(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')


def render(rev, name_k, text_k, role_k, stars_k, indent, one_line):
    # Every review in the pool is 5 stars, so a `stars` field the page renders is
    # carried through as 5 rather than dropped - dropping it breaks the JSX.
    fields = [(name_k, rev["name"])]
    if role_k:
        fields.append((role_k, rev["role"]))
    fields.append((text_k, rev["text"]))
    if one_line:
        parts = ['%s: "%s"' % (k, esc(v)) for k, v in fields]
        if stars_k:
            parts.append("%s: 5" % stars_k)
        return "{ " + ", ".join(parts) + " }"
    inner = indent + "  "
    lines = ['%s%s: "%s",' % (inner, k, esc(v)) for k, v in fields]
    if stars_k:
        lines.append("%s%s: 5," % (inner, stars_k))
    lines[-1] = lines[-1].rstrip(",")
    return "{\n" + "\n".join(lines) + "\n" + indent + "}"


def find_run(src):
    """The contiguous run of testimonial objects in a file, as (start, end)."""
    spans = [m.span() for m in OBJ.finditer(src) if is_testimonial(m.group(0))]
    if not spans:
        return None
    start, end = spans[0][0], spans[-1][1]
    between = src[start:end]
    # everything between the first and last testimonial must be separators only
    stripped = OBJ.sub("", between)
    if re.sub(r"[\s,]", "", stripped):
        return None
    return start, end, [src[a:b] for a, b in spans]


def apply_page(path, page, dry):
    full = os.path.join(PAGES_DIR, path)
    if not os.path.exists(full):
        print("  !! missing file: %s" % path)
        return False
    src = open(full, encoding="utf-8").read()
    found = find_run(src)
    if not found:
        print("  !! %s: could not locate a testimonial array" % path)
        return False
    start, end, objs = found
    want = page["reviews"]
    if len(objs) != len(want):
        print("  .. %s: page renders %d quotes, allocation has %d - using %d"
              % (path, len(objs), len(want), min(len(objs), len(want))))
    name_k, text_k, role_k = keys_of(objs[0])
    stars_k = "stars" if re.search(r"\bstars\s*:", objs[0]) else None
    one_line = "\n" not in objs[0]
    line_start = src.rfind("\n", 0, start) + 1
    indent = re.match(r"[ \t]*", src[line_start:start]).group(0) or "  "
    sep = ",\n" + indent if not one_line else ",\n" + indent

    n = min(len(objs), len(want))
    blocks = [render(want[i], name_k, text_k, role_k, stars_k, indent, one_line)
              for i in range(n)]
    new = sep.join(blocks)
    out = src[:start] + new + src[end:]
    if dry:
        print("  -- %s: would write %d verbatim quotes (%s/%s%s)"
              % (path, n, name_k, text_k, "/" + role_k if role_k else ""))
        return True
    # Backups live outside the site tree on purpose: a .bak twin sitting next to
    # a source file gets swept into commits, and one under public/ would be copied
    # verbatim into dist/ and shipped.
    bak = os.path.join(BACKUPS, path.replace("/", "__"))
    os.makedirs(BACKUPS, exist_ok=True)
    if not os.path.exists(bak):
        # First write only: re-running must not overwrite the pre-change original
        # with an already-processed copy.
        shutil.copy2(full, bak)
    open(full, "w", encoding="utf-8").write(out)
    print("  ok %s: %d verbatim quotes" % (path, n))
    return True


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--page")
    a = ap.parse_args()
    alloc = json.load(open(ALLOC))["pages"]
    ok = True
    for path, page in alloc.items():
        if a.page and not path.endswith(a.page):
            continue
        ok &= apply_page(path, page, a.dry_run)
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
