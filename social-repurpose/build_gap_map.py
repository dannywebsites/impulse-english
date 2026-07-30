#!/usr/bin/env python3
"""
build_gap_map.py — rank the barrios inside a 5-6 km radius of Barrio del Pilar by
how much traffic we are actually leaving on the table, and emit gap-map.json.

Why this exists
---------------
Raw GSC impressions are a trap here. Four barrios (Valdeacederas, Valverde,
Castillejos, Berruguete) show 100-600 impressions each, which looks like demand
until you notice every one of those impressions comes from the same synthetic
"mejor academia de inglés para niños en X, madrid" template, at position 1.4-4.8,
with zero clicks. It is a scraped/AI query set, not people. Meanwhile Las Tablas
has real Google Ads volume and sits on page 2.

So the ranking is: estimated monthly clicks left on the table
    = search volume x (CTR at target position - CTR at our current position)
which is interpretable, and which ignores impressions entirely.

Inputs
------
  * Newest GSC snapshot under impulse-seo-ops/data/gsc/<YYYY-MM-DD>/Queries.full.csv
  * volumes.json — cached Google Ads volumes (Spain/es) pulled via DataForSEO.
    Cached on purpose so this script re-runs offline and the numbers behind a
    targeting decision stay auditable.

Output
------
  gap-map.json — ranked targets, consumed by build_captions.py.

Usage
  python3 build_gap_map.py
  python3 build_gap_map.py --snapshot /path/to/gsc/2026-07-28
"""

from __future__ import annotations  # system python3 is 3.9

import argparse
import csv
import json
import re
import unicodedata
from pathlib import Path

HERE = Path(__file__).resolve().parent
GSC_ROOT = Path("/Users/danny/Desktop/impulse-seo-ops/data/gsc")
VOLUMES_FILE = HERE / "volumes.json"
OUT_FILE = HERE / "gap-map.json"

# Where we would like to rank. 3 is honest: top-3 is winnable for a local
# business with 179 reviews; #1 in a pack led by a 15-year-old competitor is not
# a planning assumption.
TARGET_POSITION = 3

# Organic CTR by position. Rough industry curve — used only to *rank* targets
# against each other, so its absolute accuracy matters far less than its shape.
CTR_CURVE = {1: 0.280, 2: 0.150, 3: 0.110, 4: 0.080, 5: 0.060,
             6: 0.048, 7: 0.040, 8: 0.033, 9: 0.028, 10: 0.025}


def ctr_at(position: float) -> float:
    """Expected organic CTR at a given average position."""
    p = int(round(position))
    if p in CTR_CURVE:
        return CTR_CURVE[p]
    if p <= 20:
        return 0.010
    if p <= 50:
        return 0.003
    return 0.001


def strip_accents(s: str) -> str:
    """Fold accents so 'peñagrande' and 'penagrande' match the same barrio."""
    return "".join(c for c in unicodedata.normalize("NFD", s.lower())
                   if unicodedata.category(c) != "Mn")


# The 5-6 km radius around the GBP pin (40.4743948, -3.7059009). Barrio list is
# NAP.areaServed from March-Impulse-Web-.../utils/napData.ts, plus the barrios that
# show up in GSC without a page of their own.
#   page  = the site page that should rank, or None if we have never built one
#   kw    = the Google Ads keyword this barrio's volume is measured on
BARRIOS = [
    {"name": "Las Tablas",        "aliases": ["las tablas"],
     "page": "academia-ingles-montecarmelo-las-tablas", "kw": "academia ingles las tablas"},
    {"name": "Sanchinarro",       "aliases": ["sanchinarro"],
     "page": None,                                      "kw": "academia ingles sanchinarro"},
    {"name": "Barrio del Pilar",  "aliases": ["barrio del pilar", "el pilar"],
     "page": "academia-ingles-barrio-del-pilar",        "kw": "academia ingles barrio del pilar"},
    {"name": "Montecarmelo",      "aliases": ["montecarmelo"],
     "page": "academia-ingles-montecarmelo-las-tablas", "kw": "academia ingles montecarmelo"},
    {"name": "La Vaguada",        "aliases": ["la vaguada", "vaguada"],
     "page": "academia-ingles-la-vaguada",              "kw": "academia ingles la vaguada"},
    {"name": "Mirasierra",        "aliases": ["mirasierra"],
     "page": "academia-ingles-mirasierra",              "kw": "academia ingles mirasierra"},
    {"name": "Tetuán",            "aliases": ["tetuan"],
     "page": "academia-ingles-tetuan",                  "kw": "academia ingles tetuan"},
    {"name": "Peñagrande",        "aliases": ["penagrande"],
     "page": "academia-ingles-penagrande",              "kw": "academia ingles penagrande"},
    {"name": "Plaza de Castilla", "aliases": ["plaza de castilla", "plaza castilla"],
     "page": "academia-ingles-plaza-castilla",          "kw": "academia ingles plaza castilla"},
    {"name": "La Paz",            "aliases": ["la paz"],
     "page": "academia-ingles-la-paz",                  "kw": "academia ingles la paz"},
    {"name": "La Ventilla",       "aliases": ["la ventilla", "ventilla"],
     "page": "academia-ingles-la-ventilla",             "kw": "academia ingles la ventilla"},
    {"name": "Cuatro Torres",     "aliases": ["cuatro torres"],
     "page": "academia-ingles-cuatro-torres",           "kw": "academia ingles cuatro torres"},
    {"name": "Valdeacederas",     "aliases": ["valdeacederas"],
     "page": None,                                      "kw": "academia ingles valdeacederas"},
    {"name": "Valverde",          "aliases": ["valverde"],
     "page": None,                                      "kw": "academia ingles valverde madrid"},
    {"name": "Castillejos",       "aliases": ["castillejos"],
     "page": None,                                      "kw": "academia ingles castillejos"},
    {"name": "Berruguete",        "aliases": ["berruguete"],
     "page": None,                                      "kw": "academia ingles berruguete"},
    {"name": "Bellas Vistas",     "aliases": ["bellas vistas"],
     "page": None,                                      "kw": "academia ingles bellas vistas"},
    {"name": "Cuatro Caminos",    "aliases": ["cuatro caminos"],
     "page": None,                                      "kw": "academia ingles cuatro caminos"},
    {"name": "Arroyo del Fresno", "aliases": ["arroyo del fresno"],
     "page": None,                                      "kw": "academia ingles arroyo del fresno"},
    {"name": "Valdezarza",        "aliases": ["valdezarza"],
     "page": None,                                      "kw": "academia ingles valdezarza"},
]

# The proximity cluster. Not a barrio, but it is the only high-volume term that is
# intrinsically bound to a radius, so it is the anchor on every caption.
PROXIMITY_KEYWORDS = ["academia de ingles cerca de mi", "clases de ingles cerca de mi"]

# Scraped/AI query template. Ranks 1.4-4.8 with zero clicks across every barrio —
# counted separately so it can never inflate a target's score.
SYNTHETIC_RE = re.compile(r"mejor academia de ingl[eé]s para ni[nñ]os en ", re.I)


def newest_snapshot() -> Path:
    dirs = [d for d in GSC_ROOT.iterdir()
            if d.is_dir() and re.fullmatch(r"\d{4}-\d{2}-\d{2}", d.name)
            and (d / "Queries.full.csv").exists()]
    if not dirs:
        raise SystemExit(f"No GSC snapshot with Queries.full.csv under {GSC_ROOT}.\n"
                         f"Run: python3 gsc_pull.py --days 28")
    return max(dirs, key=lambda d: d.name)


def load_queries(snapshot: Path) -> list:
    with (snapshot / "Queries.full.csv").open(encoding="utf-8-sig") as fh:
        return [{"query": r["Top queries"],
                 "clicks": int(r["Clicks"]),
                 "impressions": int(r["Impressions"]),
                 "position": float(r["Position"])} for r in csv.DictReader(fh)]


def aggregate(rows: list, aliases: list) -> dict:
    """Impression-weighted stats for every query mentioning this barrio."""
    real, synthetic = [], []
    for r in rows:
        folded = strip_accents(r["query"])
        if not any(strip_accents(a) in folded for a in aliases):
            continue
        (synthetic if SYNTHETIC_RE.search(r["query"]) else real).append(r)

    def stats(bucket):
        imp = sum(r["impressions"] for r in bucket)
        if not imp:
            return {"queries": len(bucket), "impressions": 0, "clicks": 0, "position": None}
        return {
            "queries": len(bucket),
            "impressions": imp,
            "clicks": sum(r["clicks"] for r in bucket),
            "position": round(sum(r["position"] * r["impressions"] for r in bucket) / imp, 1),
        }

    return {"real": stats(real), "synthetic": stats(synthetic),
            "top_real_queries": [r["query"] for r in
                                 sorted(real, key=lambda r: -r["impressions"])[:5]]}


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--snapshot", type=Path, default=None,
                    help="GSC snapshot dir (default: newest under impulse-seo-ops)")
    args = ap.parse_args()

    snapshot = args.snapshot or newest_snapshot()
    rows = load_queries(snapshot)
    volumes = json.loads(VOLUMES_FILE.read_text(encoding="utf-8"))["keywords"]

    targets = []
    for b in BARRIOS:
        agg = aggregate(rows, b["aliases"])
        vol = volumes.get(b["kw"], 0)
        pos = agg["real"]["position"]

        # No measured position means we do not rank for it at all -> assume deep.
        effective_pos = pos if pos is not None else 60.0
        upside = max(0.0, ctr_at(TARGET_POSITION) - ctr_at(effective_pos))
        score = round(vol * upside, 2)

        if vol == 0:
            verdict = "skip — no registered search volume"
        elif pos is not None and pos <= TARGET_POSITION:
            verdict = "defend — already at or above target"
        elif effective_pos > 20:
            verdict = "PRIORITY — real volume, effectively unranked"
        elif effective_pos > 10:
            verdict = "PRIORITY — real volume, stuck on page 2"
        else:
            verdict = "improve — page 1, below target"

        targets.append({
            "barrio": b["name"], "keyword": b["kw"], "volume_per_month": vol,
            "has_page": b["page"], "position": pos,
            "real_impressions": agg["real"]["impressions"],
            "real_clicks": agg["real"]["clicks"],
            "synthetic_impressions": agg["synthetic"]["impressions"],
            "est_monthly_clicks_left": score, "verdict": verdict,
            "top_real_queries": agg["top_real_queries"],
        })

    targets.sort(key=lambda t: (-t["est_monthly_clicks_left"], -t["volume_per_month"]))

    proximity = []
    for kw in PROXIMITY_KEYWORDS:
        matched = [r for r in rows if strip_accents(kw)[:20] in strip_accents(r["query"])]
        imp = sum(r["impressions"] for r in matched)
        pos = round(sum(r["position"] * r["impressions"] for r in matched) / imp, 1) if imp else None
        proximity.append({
            "keyword": kw, "volume_per_month": volumes.get(kw, 0),
            "position": pos, "impressions": imp,
            "clicks": sum(r["clicks"] for r in matched),
            "est_monthly_clicks_left": round(
                volumes.get(kw, 0) * max(0.0, ctr_at(TARGET_POSITION) - ctr_at(pos or 60.0)), 2),
        })

    total_imp = sum(r["impressions"] for r in rows)
    # July-August is the Spanish academy trough — families are on holiday and nobody
    # is shopping for classes. Positions stay meaningful; impression counts do not.
    thin = total_imp < 40000

    out = {
        "generated_from": str(snapshot),
        "target_position": TARGET_POSITION,
        "window_total_impressions": total_imp,
        "seasonality_caveat": (
            "Jul-Aug is the Spanish academy seasonal trough. This window carries "
            f"{total_imp:,} impressions, so per-barrio impression counts are thin and "
            "positions are averaged over few queries. The RANKING is driven by Google Ads "
            "volume (a 12-month average) and is stable; the impression columns are not. "
            "Re-run in September before treating any of this as a trend."
        ) if thin else None,
        "anchor": {
            "note": "Every caption carries this. The only high-volume term that is "
                    "intrinsically radius-bound.",
            "keywords": proximity,
        },
        "rotation": [t for t in targets if t["verdict"].startswith(("PRIORITY", "improve"))],
        "defend": [t for t in targets if t["verdict"].startswith("defend")],
        "excluded": [t for t in targets if t["verdict"].startswith("skip")],
        "all_targets": targets,
    }
    OUT_FILE.write_text(json.dumps(out, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(f"Snapshot: {snapshot.name}   ({len(rows)} queries, {total_imp:,} impressions)")
    if thin:
        print("  ⚠ Jul-Aug trough: impression columns are thin. Ranking is volume-driven "
              "and stable; re-run in September before reading trends.")
    print()
    print("ANCHOR — proximity cluster")
    for p in proximity:
        print(f"  {p['keyword']:34} vol {p['volume_per_month']:>6}/mo  "
              f"pos {p['position'] if p['position'] is not None else '—':>5}  "
              f"~{p['est_monthly_clicks_left']:>6.0f} clicks left")

    print(f"\n{'BARRIO':20} {'VOL':>5} {'POS':>6} {'PAGE':>5} {'SYNTH':>6} {'LEFT':>6}  VERDICT")
    for t in targets:
        pos = f"{t['position']:.1f}" if t["position"] is not None else "—"
        print(f"  {t['barrio']:18} {t['volume_per_month']:>5} {pos:>6} "
              f"{'yes' if t['has_page'] else 'NO':>5} {t['synthetic_impressions']:>6} "
              f"{t['est_monthly_clicks_left']:>6.1f}  {t['verdict']}")
    print(f"\nWrote {OUT_FILE}")


if __name__ == "__main__":
    main()
