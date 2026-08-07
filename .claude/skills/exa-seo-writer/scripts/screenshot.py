#!/usr/bin/env python3
"""Capture real screenshots of brand websites or product pages.

This is NOT an AI image generator. It captures actual screenshots of live
URLs so the buyer can drop them into their CMS as supporting visuals for an
article. The article body itself stays clean prose — the screenshots live in
a separate folder, and a manifest file maps each screenshot to a suggested
article section.

Usage:
    # Single URL
    python scripts/screenshot.py https://surferseo.com

    # Multiple URLs (one PNG each)
    python scripts/screenshot.py \\
        https://surferseo.com \\
        https://ahrefs.com \\
        https://semrush.com \\
        --out screenshots/

    # From a file
    python scripts/screenshot.py --urls-file urls.txt --out screenshots/

    # Tied to a written article — generates manifest mapping
    python scripts/screenshot.py \\
        https://surferseo.com https://ahrefs.com \\
        --article article.md \\
        --out screenshots/

Output:
    screenshots/<slug>.png            — one PNG per URL
    screenshots/screenshot_manifest.md — list of screenshots with suggested
                                          article sections (when --article passed)

Setup (one-time):
    python scripts/install_screenshot_deps.py

    This installs Playwright and the Chromium browser (~200 MB download).
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from urllib.parse import urlparse


def slugify(url: str) -> str:
    """Turn a URL into a safe filename slug."""
    parsed = urlparse(url)
    host = parsed.netloc.lower().replace("www.", "")
    path = parsed.path.strip("/").replace("/", "-")
    base = host + ("-" + path if path else "")
    base = re.sub(r"[^a-z0-9\-]", "-", base.lower())
    base = re.sub(r"-+", "-", base).strip("-")
    return base[:80] or "screenshot"


def capture_screenshots(urls: list[str], out_dir: Path,
                        full_page: bool = False,
                        viewport_width: int = 1280,
                        viewport_height: int = 800) -> list[dict]:
    """Capture each URL, save PNG to out_dir, return [{url, path, ok, error}]."""
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print("ERROR: playwright not installed. Run:\n"
              "    python scripts/install_screenshot_deps.py", file=sys.stderr)
        sys.exit(1)

    out_dir.mkdir(parents=True, exist_ok=True)
    results: list[dict] = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        try:
            for i, url in enumerate(urls, 1):
                slug = slugify(url)
                # Avoid filename collisions
                path = out_dir / f"{i:02d}-{slug}.png"
                print(f"  [{i}/{len(urls)}] {url} -> {path.name}", file=sys.stderr)
                try:
                    context = browser.new_context(
                        viewport={"width": viewport_width, "height": viewport_height},
                        user_agent=("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                                    "AppleWebKit/537.36 (KHTML, like Gecko) "
                                    "Chrome/120.0 Safari/537.36"),
                    )
                    page = context.new_page()
                    page.goto(url, wait_until="domcontentloaded", timeout=30000)
                    # Give lazy-loaded images and animations a moment
                    page.wait_for_timeout(2000)
                    page.screenshot(path=str(path), full_page=full_page)
                    context.close()
                    results.append({"url": url, "path": str(path.relative_to(out_dir.parent)),
                                    "ok": True, "error": None})
                except Exception as e:
                    results.append({"url": url, "path": None, "ok": False, "error": str(e)})
        finally:
            browser.close()
    return results


COMMON_BRAND_SUFFIXES = ("seo", "app", "io", "ai", "hq", "labs", "tech", "soft", "ware")


def brand_name_candidates(domain_root: str) -> list[str]:
    """Generate plausible brand-name variants from a domain root.

    surferseo -> [surferseo, surfer]
    notion-so -> [notion-so, notion]
    chatgpt -> [chatgpt, chat-gpt, gpt]
    """
    variants = {domain_root}
    # Strip common suffixes
    for suffix in COMMON_BRAND_SUFFIXES:
        if domain_root.endswith(suffix) and len(domain_root) > len(suffix) + 2:
            variants.add(domain_root[:-len(suffix)])
    # Take first segment if hyphenated
    if "-" in domain_root:
        first = domain_root.split("-")[0]
        if len(first) >= 3:
            variants.add(first)
    return [v for v in variants if len(v) >= 3]


def suggest_article_section(url: str, article_text: str) -> str | None:
    """Best-effort heuristic: which H2 most likely benefits from this screenshot.

    Tries multiple variants of the URL's domain root against each H2 body and
    title. Returns the first matching H2 title, or None if no match.
    """
    domain = urlparse(url).netloc.lower().replace("www.", "")
    domain_root = domain.split(".")[0] if domain else ""
    if not domain_root or len(domain_root) < 3:
        return None

    candidates = brand_name_candidates(domain_root)

    # Split article by H2
    sections = []
    current_title = None
    current_body: list[str] = []
    for line in article_text.split("\n"):
        m = re.match(r"^##\s+(.+)$", line)
        if m:
            if current_title is not None:
                sections.append((current_title, "\n".join(current_body)))
            current_title = m.group(1).strip()
            current_body = []
        else:
            current_body.append(line)
    if current_title is not None:
        sections.append((current_title, "\n".join(current_body)))

    # Try each variant against each section's title and body
    for variant in candidates:
        pattern = re.compile(r"\b" + re.escape(variant) + r"\b", re.I)
        for title, body in sections:
            if pattern.search(body) or pattern.search(title):
                return title
    return None


def write_manifest(results: list[dict], out_path: Path,
                   article_path: Path | None) -> None:
    article_text = ""
    if article_path and article_path.exists():
        article_text = article_path.read_text()

    lines = ["# Screenshot Manifest", ""]
    if article_path:
        lines.append(f"For article: `{article_path.name}`")
        lines.append("")
    lines.append("Drop these screenshots into your CMS at the section indicated below. "
                 "The article markdown does NOT include image placeholders — that keeps "
                 "the prose clean and avoids AI-tells. Insert images in your CMS instead.")
    lines.append("")
    lines.append("| # | Screenshot | URL | Suggested section |")
    lines.append("|---|---|---|---|")

    for i, r in enumerate(results, 1):
        if not r["ok"]:
            lines.append(f"| {i} | _failed_ | {r['url']} | (capture failed: {r['error']}) |")
            continue
        section = (suggest_article_section(r["url"], article_text)
                   if article_text else None) or "—"
        lines.append(f"| {i} | `{r['path']}` | {r['url']} | {section} |")

    failed = [r for r in results if not r["ok"]]
    if failed:
        lines.append("")
        lines.append(f"## Failed captures ({len(failed)})")
        for r in failed:
            lines.append(f"- {r['url']} → {r['error']}")

    out_path.write_text("\n".join(lines))


def load_urls(args) -> list[str]:
    urls = list(args.urls or [])
    if args.urls_file:
        path = Path(args.urls_file)
        if not path.exists():
            print(f"ERROR: urls file not found: {path}", file=sys.stderr)
            sys.exit(1)
        for line in path.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#"):
                urls.append(line)
    return urls


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("urls", nargs="*", help="URLs to capture")
    ap.add_argument("--urls-file", help="File with one URL per line")
    ap.add_argument("--out", type=Path, default=Path("screenshots"),
                    help="Output directory (default: ./screenshots)")
    ap.add_argument("--article", type=Path, default=None,
                    help="Path to article.md — generates a manifest mapping screenshots to sections")
    ap.add_argument("--full-page", action="store_true",
                    help="Capture full scrollable page, not just viewport")
    ap.add_argument("--width", type=int, default=1280, help="Viewport width")
    ap.add_argument("--height", type=int, default=800, help="Viewport height")
    args = ap.parse_args()

    urls = load_urls(args)
    if not urls:
        print("ERROR: no URLs provided. Pass URLs as positional args or use --urls-file.",
              file=sys.stderr)
        sys.exit(1)

    print(f"Capturing {len(urls)} screenshot(s) to {args.out}/", file=sys.stderr)
    results = capture_screenshots(
        urls, args.out,
        full_page=args.full_page,
        viewport_width=args.width,
        viewport_height=args.height,
    )

    manifest_path = args.out / "screenshot_manifest.md"
    write_manifest(results, manifest_path, args.article)

    successes = sum(1 for r in results if r["ok"])
    print(f"\n{successes}/{len(results)} captures succeeded", file=sys.stderr)
    print(f"Manifest: {manifest_path}", file=sys.stderr)
    if successes < len(results):
        sys.exit(1)


if __name__ == "__main__":
    main()
