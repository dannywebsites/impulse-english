#!/bin/bash
# Pre-assemble gate for one run dir. Usage: gate.sh <runDir>
# Checks the things that fail SILENTLY: too few sections (drops an image), wrong
# images (rotation not applied), dashes, banned words, duplicate links.
R="$1"; A="$R/article.md"; I="$R/images.json"
[ -f "$A" ] || { echo "❌ no article.md in $R"; exit 1; }
fail=0
say() { printf "  %-26s %s\n" "$1" "$2"; }

secs=$(grep -c '^## ' "$A")
[ "$secs" -ge 4 ] && say "## sections" "✅ $secs" || { say "## sections" "❌ $secs (need 4+, 2nd inline image would vanish)"; fail=1; }

words=$(wc -w < "$A" | tr -d ' ')
[ "$words" -ge 2200 ] && say "words" "✅ $words" || { say "words" "⚠️  $words (target ~2500)"; }

d=$(grep -c '[—–]' "$A")
[ "$d" -eq 0 ] && say "em/en dashes" "✅ 0" || { say "em/en dashes" "❌ $d"; fail=1; }

faq=$(grep -c '^### ' "$A")
grep -q '^## Preguntas frecuentes' "$A" || { say "FAQ heading" "❌ missing exact heading"; fail=1; }
[ "$faq" -ge 5 ] && [ "$faq" -le 8 ] && say "FAQ questions" "✅ $faq" || { say "FAQ questions" "❌ $faq (need 5-8)"; fail=1; }

# every inline image in images.json must appear in the body, and nothing else may
inline=$(grep -o '"src": "[^"]*"' "$I" | sed 's/.*: "//;s/"//' | tail -n +2)
missing=0
for s in $inline; do grep -q "($s)" "$A" || { say "image missing" "❌ $s"; missing=1; fail=1; }; done
[ "$missing" -eq 0 ] && say "inline images" "✅ all present"
hero=$(grep -o '"src": "[^"]*"' "$I" | sed 's/.*: "//;s/"//' | head -1)
grep -q "($hero)" "$A" && { say "hero in body" "❌ $hero must NOT be in body"; fail=1; } || say "hero not in body" "✅"
stray=$(grep -o '](/images/[^)]*)' "$A" | sed 's|^](||; s|)$||' | while read -r p; do echo "$inline" | grep -qF "$p" || echo "$p"; done)
[ -z "$stray" ] && say "no stray images" "✅" || { say "stray images" "❌ $stray"; fail=1; }

dup=$(grep -o '](/[^)]*)' "$A" | grep -v '/images/' | sort | uniq -d)
[ -z "$dup" ] && say "no duplicate links" "✅" || { say "duplicate links" "❌ $dup"; fail=1; }
links=$(grep -o '](/[^)]*)' "$A" | grep -vc '/images/')
[ "$links" -ge 8 ] && [ "$links" -le 12 ] && say "internal links" "✅ $links" || say "internal links" "⚠️  $links (want 8-12)"

for w in delve tapestry realm robust transformative pivotal crucial compelling seamless leverage harness unveil facilitate synergy unlock unleash elevate utilize holistic paradigm empower; do
  grep -qi "\b$w" "$A" && { say "banned word" "❌ $w"; fail=1; }
done

# Cannibalisation: terms the pillar pages own. A pillar term in an H2 means the article
# is competing with our own page and fails. In an FAQ (###) it is usually a legitimate
# comparison question, so warn instead of failing and let a human judge.
while IFS= read -r t; do
  grep -qi "^#\{1,2\} .*$t" "$A" && { say "cannibalisation" "❌ H2 targets pillar term: $t"; fail=1; }
  grep -qi "^### .*$t" "$A" && say "cannibalisation" "⚠️  FAQ mentions pillar term: $t (check it links out, not competes)"
done <<'TERMS'
año escolar en irlanda
colegios en irlanda
internado en irlanda
curso de inglés en irlanda
curso escolar en irlanda
estudiar en canadá
TERMS

[ "$fail" -eq 0 ] && echo "  ✅ GATE PASS" || echo "  ❌ GATE FAIL"
exit $fail
