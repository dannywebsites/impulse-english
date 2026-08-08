#!/usr/bin/env python3
"""De-slop gate for the non-blog routes.

Counts only what a visitor actually sees or what ships as a class attribute:
<script>, <style> and HTML comments are stripped first, so tracking-script
prose and build comments never inflate the numbers.

The dash check runs against <body> only. <title> and <meta> are SEO surfaces,
out of scope for a design pass, and a visitor never reads them as page text --
counting them made every route with an en dash in its title look like a design
failure. The class-attribute checks are unaffected: <head> carries no class="".
"""
import html
import re
import sys
from pathlib import Path

ROOT = Path("/Users/danny/Desktop/backup website Impuls Englisch /March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97")
ROUTES = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("in-scope-routes.txt")

SCRIPT = re.compile(r"<script\b.*?</script>", re.S | re.I)
STYLE = re.compile(r"<style\b.*?</style>", re.S | re.I)
COMMENT = re.compile(r"<!--.*?-->", re.S)
TAG = re.compile(r"<[^>]+>")
CLASSES = re.compile(r'class="([^"]*)"')
BODY = re.compile(r"<body\b[^>]*>(.*)</body>", re.S | re.I)

GENERIC_SHADOW = re.compile(r"\bshadow-(?:md|lg|xl|2xl)\b")
GRADIENT = re.compile(r"\bbg-gradient\b|\bfrom-\[")
PURE_BLACK = re.compile(r"\btext-black\b|#000000\b")
DASH = re.compile(r"[—–]")

totals = {"gradient": 0, "shadow": 0, "dash": 0, "black": 0}
offenders = {k: [] for k in totals}

routes = [r.strip() for r in ROUTES.read_text().splitlines() if r.strip()]
missing = []

for rel in routes:
    p = ROOT / rel
    if not p.exists():
        missing.append(rel)
        continue
    raw = p.read_text(encoding="utf-8")
    body = COMMENT.sub("", STYLE.sub("", SCRIPT.sub("", raw)))

    markup = " ".join(CLASSES.findall(body))
    inner = BODY.search(body)
    text = html.unescape(TAG.sub(" ", inner.group(1) if inner else body))

    counts = {
        "gradient": len(GRADIENT.findall(markup)),
        "shadow": len(GENERIC_SHADOW.findall(markup)),
        "black": len(PURE_BLACK.findall(markup)),
        "dash": len(DASH.findall(text)),
    }
    for k, v in counts.items():
        totals[k] += v
        if v:
            offenders[k].append(f"{rel} ({v})")

print(f"routes checked: {len(routes) - len(missing)}/{len(routes)}")
if missing:
    print("  MISSING: " + ", ".join(missing))
print()
label = {
    "gradient": "bg-gradient / from-[",
    "shadow": "generic shadow-md|lg|xl|2xl",
    "dash": "em/en dash in visible text",
    "black": "pure black (text-black/#000000)",
}
ok = True
for k in ("gradient", "shadow", "dash", "black"):
    status = "PASS" if totals[k] == 0 else "FAIL"
    ok = ok and totals[k] == 0
    print(f"[{status}] {label[k]}: {totals[k]}")
    for o in offenders[k][:12]:
        print(f"         {o}")
    if len(offenders[k]) > 12:
        print(f"         ... +{len(offenders[k]) - 12} more routes")
print()
print("GATE:", "ALL PASS" if ok else "FAILURES ABOVE")
sys.exit(0 if ok else 1)
