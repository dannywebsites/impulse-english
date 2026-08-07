#!/usr/bin/env python3
"""Regenerates data/blog-directory.ts — the master registry of every blog article.

Sources: static wrappers in src/pages/blog/*.astro (title/description/canonical),
collection frontmatter in src/content/articles/*.md (minus slugs shadowed by a
static wrapper), curated titles/categories from pages/BlogPage.tsx cards, and the
GSC query-page export for crown links (split-query winners, book §2: one intent =
one page — losers link the winner with the query as anchor).

Run after adding/removing a static blog article, then review the git diff:
    python3 scripts/seo/gen_blog_directory.py [path/to/query-page-28d.json]
"""
import json, re, sys, pathlib, collections

WEB = pathlib.Path(__file__).resolve().parents[2]
QP = sys.argv[1] if len(sys.argv) > 1 else None

# ---------------------------------------------------------------- universe
wrappers = {}
for f in sorted((WEB / "src/pages/blog").glob("*.astro")):
    if f.name in ("index.astro", "todos.astro", "[slug].astro"):
        continue
    t = f.read_text()
    slug = f.stem
    m_title = re.search(r'\btitle="([^"]+)"', t)
    m_desc = re.search(r'\bdescription="([^"]+)"', t)
    wrappers[slug] = {
        "slug": slug, "url": f"/blog/{slug}/",
        "title": m_title.group(1) if m_title else slug,
        "excerpt": (m_desc.group(1) if m_desc else ""),
        "source": "static",
    }

mds = {}
for f in sorted((WEB / "src/content/articles").glob("*.md")):
    fm = f.read_text().split("---")[1]
    def g(k, fm=fm):
        m = re.search(rf"^{k}: *(.+)$", fm, re.M)
        return m.group(1).strip().strip("\"'") if m else None
    slug = f.stem
    mds[slug] = {
        "slug": slug, "url": (g("url") or f"/blog/{slug}").rstrip("/") + "/",
        "title": g("seoTitle") or g("question") or slug,
        "excerpt": g("metaDescription") or "",
        "mdCategory": g("category") or "",
        "source": "collection",
    }

shadowed = set(wrappers) & set(mds)
collection_only = {s: m for s, m in mds.items() if s not in shadowed}

# ------------------------------------------------- categories + ring groups
bp = (WEB / "pages/BlogPage.tsx").read_text()
cards = {}
for m in re.finditer(r'\{[^{}]*?title: *"([^"]+)"[^{}]*?category: *"([^"]+)"[^{}]*?href: *"([^"]+)"[^{}]*?\}', bp, re.S):
    title, cat, href = m.groups()
    cards[href.rstrip("/") + "/"] = cat

MD_TO_DISPLAY = {
    "Cambridge B2 First": "Exámenes Cambridge", "Cambridge C1 Advanced": "Exámenes Cambridge",
    "Cambridge B1 Preliminary": "Exámenes Cambridge", "Cambridge A2 Key": "Exámenes Cambridge",
    "Linguaskill": "Linguaskill", "Local Madrid": "Academias Madrid", "Price": "Precios",
    "Learning Methods": "Aprender Inglés", "Kids Early Childhood": "Inglés para Niños",
    "Kids Primary": "Inglés para Niños", "Kids Secondary": "Inglés para Niños",
    "Career": "Carrera Profesional", "Skills": "Habilidades", "Comparison": "Comparativas",
    "Definitions": "Exámenes Cambridge",
    "Inglés en el extranjero": "Inglés en el extranjero",
}

# Categories that own their own section and therefore their own related-articles ring.
# ring_group() below is a slug/title regex whose rules are order-sensitive: `academia|madrid`
# and `precio` already swallow two of the study-abroad articles
# (academia-o-agencia-estudiar-extranjero, guia-internados-inglaterra-precios). When the
# markdown declares one of these categories, that declaration wins over the regex.
SELF_RINGED = {"Inglés en el extranjero"}

def ring_group(slug, title):
    s = slug + " " + title.lower()
    rules = [
        ("linguaskill", "Linguaskill"),
        (r"\bb2\b|first", "Cambridge B2"),
        (r"\bc1\b|advanced|cae\b", "Cambridge C1"),
        (r"\bb1\b", "Cambridge B1"),
        (r"nino|hijo|bebes|great-little|jugando|colegio|motivar|confusion|edad|infantil", "Inglés para Niños"),
        (r"academia|madrid", "Academias Madrid"),
        (r"precio", "Precios"),
        (r"trabajo|entrevista|empresas|curriculum|oposiciones|universidad|empresa", "Carrera Profesional"),
        (r"cambridge|escala|examen|ielts|aptis", "Exámenes Cambridge"),
    ]
    for pat, grp in rules:
        if re.search(pat, s):
            return grp
    return "Aprender Inglés"

def display_cat(entry):
    if entry.get("mdCategory") in SELF_RINGED:
        return MD_TO_DISPLAY[entry["mdCategory"]]
    if entry["url"] in cards:
        return cards[entry["url"]]
    if entry.get("mdCategory"):
        return MD_TO_DISPLAY.get(entry["mdCategory"], "Aprender Inglés")
    return ring_group(entry["slug"], entry["title"])

def ring_group_for(entry):
    md = entry.get("mdCategory")
    if md in SELF_RINGED:
        return md
    return ring_group(entry["slug"], entry["title"])

universe = list(wrappers.values()) + list(collection_only.values())
for e in universe:
    e["displayCategory"] = display_cat(e)
    e["ringGroup"] = ring_group_for(e)
universe.sort(key=lambda e: e["slug"])

# ------------------------------------------------------------- crown links
crowns = collections.defaultdict(list)
if QP:
    rows = json.load(open(QP))
    if isinstance(rows, dict):
        rows = rows["rows"]
    byq = collections.defaultdict(list)
    for r in rows:
        q, page = r["keys"]
        if "/blog/" in page:
            byq[q].append((page.replace("https://impulse-english.es", ""), r["position"], r["impressions"]))
    known = {e["url"] for e in universe}
    cand = collections.defaultdict(list)
    for q, pages in byq.items():
        pages = [p for p in pages if p[0] in known]
        if len(pages) < 2 or sum(p[2] for p in pages) < 15:
            continue
        solid = [p for p in pages if p[2] >= 5] or pages
        winner = min(solid, key=lambda p: p[1])[0]
        if len(q) < 12 or "/" in q:
            continue
        for page, pos, imp in pages:
            if page != winner:
                cand[page].append((sum(p[2] for p in pages), winner, q))
    for loser, cs in cand.items():
        cs.sort(reverse=True)
        seen = set()
        for imp, winner, q in cs:
            if winner in seen or len(seen) >= 2:
                continue
            seen.add(winner)
            anchor = q.strip()
            anchor = anchor[0].upper() + anchor[1:]
            crowns[loser.rstrip("/").split("/")[-1]].append({"href": winner, "anchor": anchor})

# ---------------------------------------------------------------- emit TS
def ts_str(s):
    return json.dumps(s, ensure_ascii=False)

lines = []
lines.append("// AUTO-GENERATED by scripts/seo/gen_blog_directory.py — edit that script, not this file.")
lines.append("// Master registry of every blog article (static wrappers + content collection).")
lines.append("// Drives: /blog/ full directory, /blog/todos/, sibling interlinking rings, and")
lines.append("// crown links (split-query winners get the anchor, per SEO-Decisions-Log 2026-07-24).")
lines.append("")
lines.append("export interface BlogDirectoryEntry {")
lines.append("  slug: string;")
lines.append("  url: string;")
lines.append("  title: string;")
lines.append("  excerpt: string;")
lines.append("  displayCategory: string;")
lines.append("  ringGroup: string;")
lines.append("  source: 'static' | 'collection';")
lines.append("}")
lines.append("")
lines.append("export const BLOG_DIRECTORY: BlogDirectoryEntry[] = [")
for e in universe:
    lines.append("  { slug: %s, url: %s, title: %s, excerpt: %s, displayCategory: %s, ringGroup: %s, source: %s }," % (
        ts_str(e["slug"]), ts_str(e["url"]), ts_str(e["title"]), ts_str(e["excerpt"]),
        ts_str(e["displayCategory"]), ts_str(e["ringGroup"]), ts_str(e["source"])))
lines.append("];")
lines.append("")
lines.append("// Split-query crown links: the losing article links the winning article with the")
lines.append("// query as anchor text (GSC 28d data). Rendered first in the sibling block.")
lines.append("export const CROWN_LINKS: Record<string, { href: string; anchor: string }[]> = {")
for slug in sorted(crowns):
    entries = ", ".join("{ href: %s, anchor: %s }" % (ts_str(c["href"]), ts_str(c["anchor"])) for c in crowns[slug])
    lines.append("  %s: [%s]," % (ts_str(slug), entries))
lines.append("};")
lines.append("""
const bySlug = new Map(BLOG_DIRECTORY.map((e) => [e.slug, e]));

export interface SiblingCard {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  href: string;
  priority: 'High' | 'Medium';
}

function toCard(e: BlogDirectoryEntry): SiblingCard {
  return {
    id: e.slug,
    title: e.title,
    excerpt: e.excerpt,
    category: e.displayCategory,
    readTime: '',
    href: e.url,
    priority: 'Medium',
  };
}

/**
 * Sibling articles for interlinking (book §4: every article links siblings, circular).
 * Crown links come first (as cards pointing at the winning article), then the next
 * articles in the alphabetical ring of the same ringGroup, so in-links distribute
 * evenly across the group instead of piling onto the same three articles.
 */
export function getBlogSiblingCards(slug: string, count = 3): SiblingCard[] {
  const self = bySlug.get(slug);
  if (!self) return [];
  const out: SiblingCard[] = [];
  const used = new Set<string>([self.url]);

  for (const crown of CROWN_LINKS[slug] ?? []) {
    const target = BLOG_DIRECTORY.find((e) => e.url === crown.href);
    if (target && !used.has(target.url)) {
      out.push({ ...toCard(target), title: crown.anchor });
      used.add(target.url);
    }
  }

  const ring = BLOG_DIRECTORY.filter((e) => e.ringGroup === self.ringGroup);
  const i = ring.findIndex((e) => e.slug === slug);
  for (let step = 1; step < ring.length && out.length < count; step++) {
    const next = ring[(i + step) % ring.length];
    if (!used.has(next.url)) {
      out.push(toCard(next));
      used.add(next.url);
    }
  }
  return out;
}

/** Directory grouped by display category, for /blog/ and /blog/todos/. */
export function getDirectoryByCategory(): { category: string; entries: BlogDirectoryEntry[] }[] {
  const order = [
    'Exámenes Cambridge', 'Linguaskill', 'Academias Madrid', 'Inglés para Niños',
    'Aprender Inglés', 'Habilidades', 'Carrera Profesional', 'Comparativas',
    'Precios', 'Metodología', 'Consejos', 'Recursos', 'Calendario',
  ];
  const groups = new Map<string, BlogDirectoryEntry[]>();
  for (const e of BLOG_DIRECTORY) {
    const list = groups.get(e.displayCategory) ?? [];
    list.push(e);
    groups.set(e.displayCategory, list);
  }
  for (const list of groups.values()) list.sort((a, b) => a.title.localeCompare(b.title, 'es'));
  const keys = [...order.filter((k) => groups.has(k)), ...[...groups.keys()].filter((k) => !order.includes(k)).sort()];
  return keys.map((k) => ({ category: k, entries: groups.get(k)! }));
}
""")
out = WEB / "data/blog-directory.ts"
out.write_text("\n".join(lines))
print(f"wrote {out} — {len(universe)} entries ({len(wrappers)} static + {len(collection_only)} collection), {len(crowns)} articles with crown links")
