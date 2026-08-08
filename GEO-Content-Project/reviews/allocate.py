#!/usr/bin/env python3
"""
Allocate real Google reviews to pages: two per barrio page, no review twice.

Reads  review-pool.json
Writes allocation.json  + rewrites ../review-allocation.md

The old allocation was built from 19 reviews that someone had transcribed by
hand, which is why it ran out at Barrio del Pilar. The pool is now every eligible
review on the profile, so nothing is blocked for lack of material.

Matching is by theme, not at random: family barrios get parent reviews, commuter
barrios get career reviews, exam pages get Cambridge reviews. A review used on
one page is never offered to another - duplicate testimonials across a location
cluster read as templated and are the single clearest "these pages are the same
page" signal to Google.

The `role` line under each quote is written by us, not by the customer, so it is
derived only from what the review itself states. If the text doesn't say, it gets
the neutral label.
"""
import json, os, re, unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
POOL = os.path.join(HERE, "review-pool.json")
OUT = os.path.join(HERE, "allocation.json")
MD = os.path.abspath(os.path.join(HERE, "..", "review-allocation.md"))

# page file, display name, how many quotes it renders, themes that fit its audience
PAGES = [
    ("ubicaciones/BarrioDelPilarPage.tsx",       "Barrio del Pilar", 4, ["parent", "atmosphere", "progress", "cambridge"]),
    ("ubicaciones/LaVaguadaPage.tsx",            "La Vaguada",       4, ["atmosphere", "method", "parent", "recommend"]),
    ("ubicaciones/LaVentillaPage.tsx",           "La Ventilla",      2, ["cambridge", "progress"]),
    ("ubicaciones/TetuanPage.tsx",               "Tetuán",           2, ["adult", "method"]),
    ("ubicaciones/LaPazPage.tsx",                "La Paz",           2, ["parent", "kids"]),
    ("ubicaciones/CuatroTorresPage.tsx",         "Cuatro Torres",    2, ["adult", "cambridge"]),
    ("ubicaciones/PlazaCastillaPage.tsx",        "Plaza Castilla",   2, ["adult", "method"]),
    # 2026-08-08: the combined Montecarmelo/Las Tablas page was split in two.
    # Renamed in place, at its original index, so the pick order of every page
    # after it is unchanged. The matching key in allocation.json was renamed too:
    # rename one without the other and load_pins() strands these three reviews in
    # `pins` with no page to belong to, and they vanish from the site silently.
    ("ubicaciones/MontecarmeloPage.tsx",         "Montecarmelo",    3, ["parent", "kids", "teens"]),
    ("ubicaciones/MirasierraPage.tsx",           "Mirasierra",       3, ["parent", "teens", "atmosphere"]),
    ("ubicaciones/PenagrandePage.tsx",           "Peñagrande",       3, ["parent", "progress", "atmosphere"]),
    # The homepage carries the most weight, so it gets its picks straight after the
    # location pages have taken the ones matched to their barrio.
    ("../components/TestimonialsSection.tsx", "Home · testimonios", 26,
     ["cambridge", "adult", "parent", "method", "progress", "atmosphere", "kids", "teens"]),
    ("../components/PartnersSection.tsx",     "Home · rail",         6,
     ["recommend", "atmosphere", "progress"]),
    ("TestimonialsPage.tsx",                     "Testimonios",     12, ["cambridge", "adult", "parent", "kids", "method", "atmosphere", "progress", "teens"]),
    ("MetodologiaPage.tsx",                      "Metodología",      4, ["method", "progress"]),
    ("blog/PreparacionB2FirstMadridPage.tsx",    "Blog · B2 First",  3, ["cambridge"]),
    # New barrio pages, 2026-08-03. Appended deliberately: PAGES is consumed in
    # order and each page takes from what is left, so adding at the end cannot
    # disturb the 78 quotes already placed and verified on the existing pages.
    ("ubicaciones/ArroyoDelFresnoPage.tsx",      "Arroyo del Fresno", 2, ["parent", "kids"]),
    ("ubicaciones/SanchinarroPage.tsx",          "Sanchinarro",       2, ["parent", "teens"]),
    ("ubicaciones/ValdezarzaPage.tsx",           "Valdezarza",        2, ["adult", "progress"]),
    ("ubicaciones/ChamartinPage.tsx",            "Chamartín",         2, ["adult", "cambridge"]),
    # The study-abroad pages, registered 2026-08-08. They were publishing verified
    # quotes that PAGES had never heard of, so the allocator counted those reviews
    # as spare and offered them again: all three of Las Tablas' first picks came
    # back already live on pages/extranjero/. Registering them is the fix — an
    # unregistered page does not stop consuming reviews, it just stops being
    # counted. Their current picks were seeded into allocation.json as pins, so
    # this reserves what is live rather than reshuffling it.
    #
    # Antonio Pérez Blázquez is deliberately NOT reserved here. He is allocated to
    # Montecarmelo and also appears on AnoEscolarIrlandaPage.tsx — a duplicate
    # authorised by Danny and documented at the top of that file. That is why this
    # entry asks for 1 and not 2.
    ("extranjero/AnoEscolarIrlandaPage.tsx",     "Año escolar Irlanda", 1, ["parent", "kids"]),
    ("extranjero/CanadaPage.tsx",                "Canadá",              1, ["parent", "recommend"]),
    ("extranjero/IrlandaPage.tsx",               "Irlanda",             1, ["progress"]),
    ("extranjero/ExtranjeroHubPage.tsx",         "Extranjero · hub",    3, ["recommend", "atmosphere", "parent"]),
    # Las Tablas, 2026-08-08. Split out of the Montecarmelo page, which keeps its
    # three. Appended for the same reason as the 2026-08-03 batch above: taking
    # from what is left cannot disturb a quote already placed and verified.
    # Themes lean adult because Las Tablas is the office-park half of the pair.
    # Listed last so it draws only from what nothing else is already publishing.
    ("ubicaciones/LasTablasPage.tsx",            "Las Tablas",        3, ["adult", "progress", "cambridge"]),
    # /ingles-para-empresas/, 2026-08-08. Last in the list because it draws from
    # what nothing else publishes. Worth recording plainly: the pool has no
    # corporate reviews at all — nobody has ever reviewed us as a company client —
    # so this page's social proof is one professional who needed English for work
    # (RAUL SAN SEGUNDO, who also carries the case study) plus two short adult
    # reviews. That is the honest ceiling until a company writes one.
    ("cursos/EmpresasPage.tsx",                  "Inglés para empresas", 3, ["adult", "recommend", "progress"]),
]

IDEAL_MIN, IDEAL_MAX = 140, 330


def sa(s):
    return "".join(c for c in unicodedata.normalize("NFD", s)
                   if unicodedata.category(c) != "Mn").lower()


def role_for(text):
    """A label we can defend from the review's own wording, or nothing specific."""
    t = sa(text)
    if re.search(r"mi hij[ao]|mis hij[ao]s|mi peque|mi ni[nñ]a|mi ni[nñ]o", t):
        return "Madre/padre de alumno"
    if re.search(r"mi mujer|mi marido|mi hermana|mi hermano", t):
        return "Familiar de alumno"
    if re.search(r"c1|advanced|cae\b", t):
        return "Alumno/a · preparación C1"
    if re.search(r"b2|first certificate|fce\b", t):
        return "Alumno/a · preparación B2"
    if re.search(r"trabajo|laboral|entrevista|empresa|profesional mente|curr[ií]cul", t):
        return "Alumno/a adulto"
    if re.search(r"clases particulares|clase particular", t):
        return "Clases particulares"
    if re.search(r"intensiv", t):
        return "Curso intensivo"
    if re.search(r"conversaci[oó]n", t):
        return "Clases de conversación"
    return "Reseña verificada en Google"


def display_name(name):
    """Capitalisation is presentation, not content: a byline that Google renders
    as 'hugo antonio' or 'Edixon MUÑOZ' is the same person either way. The words
    of the review are never touched."""
    toks = name.split()
    fixed = []
    for t in toks:
        if t.islower() or t.isupper():
            if len(t) <= 2 and t.isupper():
                fixed.append(t)            # initials: "CJ", "OM", "RC"
            else:
                fixed.append(t[0].upper() + t[1:].lower())
        else:
            fixed.append(t)
    return " ".join(fixed)


def score(rev, themes):
    s = 0.0
    for i, th in enumerate(themes):
        if th in rev["themes"]:
            s += 10 - i          # earlier themes in the page's list matter more
    n = len(rev["text"])
    if IDEAL_MIN <= n <= IDEAL_MAX:
        s += 4
    elif n < IDEAL_MIN:
        s -= (IDEAL_MIN - n) / 40.0
    if rev.get("local_guide"):
        s += 1                   # Local Guide accounts are the hardest to fake
    if (rev.get("timestamp") or "") >= "2025":
        s += 2                   # recent reviews carry more weight with readers
    return s


def load_pins():
    """review_id -> page path, from the allocation already published.

    A quote that is live and verified stays where it is. Without this, widening
    the eligibility rules re-ranks the whole pool and silently reshuffles pages
    that were already correct — the first run after MIN_CHARS dropped to 43 tried
    to swap a 353-character review off the homepage rail for a 65-character one.
    Re-churning verified live testimonials to no benefit is the opposite of what
    the verbatim gate is protecting.
    """
    if not os.path.exists(OUT):
        return {}
    try:
        prev = json.load(open(OUT))
    except (ValueError, OSError):
        return {}
    # Keep the published order too, so a re-run produces an identical artifact
    # rather than the same reviews shuffled into pool order.
    return {r["review_id"]: (path, i)
            for path, page in prev.get("pages", {}).items()
            for i, r in enumerate(page.get("reviews", []))}


def allocate():
    pool = [r for r in json.load(open(POOL))["reviews"] if r["eligible"]]
    live = {r["review_id"] for r in pool}
    pins = {rid: v for rid, v in load_pins().items() if rid in live}
    used = set()
    alloc = {}
    for path, label, need, themes in PAGES:
        # Anything this page already publishes keeps its slot, in its published order.
        picks = sorted((r for r in pool if pins.get(r["review_id"], (None,))[0] == path),
                       key=lambda r: pins[r["review_id"]][1])[:need]
        used.update(r["review_id"] for r in picks)
        ranked = sorted(
            (r for r in pool
             if r["review_id"] not in used and r["review_id"] not in pins),
            key=lambda r: (-score(r, themes), r["review_id"]))
        for r in ranked:
            if len(picks) >= need:
                break
            picks.append(r)
            used.add(r["review_id"])
        if len(picks) < need:
            raise SystemExit("pool exhausted on %s: wanted %d, got %d"
                             % (label, need, len(picks)))
        alloc[path] = {
            "label": label,
            "reviews": [{
                "review_id": r["review_id"],
                "name": display_name(r["author"].strip()),
                "role": role_for(r["text"]),
                "text": r["text"],
                "review_url": r["review_url"],
                "timestamp": r["timestamp"],
                "themes": r["themes"],
            } for r in picks],
        }
    json.dump({"meta": {"pool_eligible": len(pool), "allocated": len(used)},
               "pages": alloc}, open(OUT, "w"), ensure_ascii=False, indent=2)
    print("allocated %d unique reviews across %d pages (pool %d) -> %s"
          % (len(used), len(alloc), len(pool), OUT))
    write_md(alloc, len(pool), len(used))
    return alloc


def write_md(alloc, pool_n, used_n):
    lines = [
        "# Review allocation — one pass, no repeats anywhere on the site",
        "",
        "Generated by `reviews/allocate.py` from `reviews/review-pool.json`.",
        "Do not edit by hand: re-run `pull_reviews.py && build_pool.py && allocate.py`.",
        "",
        "Source of truth is the live Google Business Profile (place_id "
        "`ChIJG7G2oAkpQg0Re7iLuuLzbr4`), pulled in full — all 180 reviews, not a",
        "hand-transcribed subset. **No review appears on two pages.** Every quote on the",
        "site is verbatim; `verify_quotes.py` fails the build if a single character drifts.",
        "",
        f"Pool: **{pool_n} eligible** of 180. Allocated: **{used_n}**. "
        f"Spare: **{pool_n - used_n}**.",
        "",
        "| Page | Reviews |",
        "|---|---|",
    ]
    for path, page in alloc.items():
        names = " · ".join(r["name"] for r in page["reviews"])
        lines.append(f"| {page['label']} | {names} |")
    lines += [
        "",
        "## Eligibility rules (`build_pool.py`)",
        "5 stars · 90–420 characters · a real full name · no teacher named outside",
        "{JP, Danny} · written in Spanish or English. Reviews that name another teacher",
        "are genuine but unusable — we never edit a customer's words, we just place a",
        "different review.",
        "",
        "## Why the old allocation ran out",
        "It was built from 19 reviews someone had transcribed by hand. The profile has",
        "180. Nothing was ever short of material — the pool was just never pulled.",
        "",
    ]
    open(MD, "w").write("\n".join(lines))
    print("wrote %s" % MD)


if __name__ == "__main__":
    allocate()
