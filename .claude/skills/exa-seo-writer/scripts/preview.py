#!/usr/bin/env python3
"""Render article.md as a styled HTML preview.

Per Ryan Law's content-engineering process, reading the article in a styled
HTML preview catches layout / readability issues that markdown doesn't surface.
This script converts article.md into a self-contained HTML file with embedded
CSS — no external dependencies, no CDN, opens in any browser.

Usage:
    python scripts/preview.py article.md
    python scripts/preview.py article.md --out preview.html
    python scripts/preview.py article.md --open    # auto-open in default browser

The output is intentionally generic: clean blog typography, readable line
length, basic syntax highlighting, mobile-friendly. It's a draft preview, not
a production CMS render.
"""

from __future__ import annotations

import argparse
import html
import re
import sys
import webbrowser
from pathlib import Path


CSS = """
:root {
  --fg: #1a1a1a;
  --bg: #ffffff;
  --muted: #6b7280;
  --accent: #2563eb;
  --rule: #e5e7eb;
  --code-bg: #f3f4f6;
  --tldr-bg: #fef3c7;
  --tldr-border: #fbbf24;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: var(--fg);
  background: var(--bg);
}
.wrap {
  max-width: 720px;
  margin: 0 auto;
  padding: 60px 24px 80px;
}
h1 {
  font-size: 2.4em;
  line-height: 1.2;
  margin: 0 0 24px;
  letter-spacing: -0.02em;
}
h2 {
  font-size: 1.6em;
  line-height: 1.3;
  margin: 56px 0 16px;
  border-top: 1px solid var(--rule);
  padding-top: 32px;
  letter-spacing: -0.01em;
}
h2:first-of-type {
  border-top: none;
  padding-top: 0;
}
h3 {
  font-size: 1.2em;
  margin: 32px 0 12px;
}
h4, h5, h6 {
  margin: 24px 0 8px;
}
p {
  margin: 0 0 16px;
}
ul, ol {
  margin: 0 0 16px;
  padding-left: 24px;
}
li {
  margin-bottom: 6px;
}
strong { font-weight: 700; }
em { font-style: italic; }
hr {
  border: 0;
  height: 1px;
  background: var(--rule);
  margin: 40px 0;
}
.tldr {
  background: var(--tldr-bg);
  border-left: 4px solid var(--tldr-border);
  padding: 16px 20px;
  margin: 0 0 32px;
  border-radius: 4px;
  font-style: italic;
  color: #57534e;
}
.tldr::before {
  content: "TL;DR";
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 0.7em;
  letter-spacing: 0.08em;
  color: #92400e;
  margin-bottom: 4px;
}
.tldr p {
  margin: 0;
}
.meta-block {
  margin-top: 56px;
  padding: 16px 20px;
  background: var(--code-bg);
  border-radius: 4px;
  color: var(--muted);
  font-size: 0.92em;
  font-style: italic;
}
.meta-block::before {
  content: "Meta (for CMS)";
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 0.7em;
  letter-spacing: 0.08em;
  color: var(--muted);
  margin-bottom: 6px;
}
.meta-block p {
  margin: 0 0 4px;
}
code {
  background: var(--code-bg);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: ui-monospace, "SF Mono", Menlo, Monaco, Consolas, monospace;
  font-size: 0.92em;
}
pre {
  background: var(--code-bg);
  padding: 16px;
  overflow-x: auto;
  border-radius: 4px;
  font-size: 0.92em;
  line-height: 1.45;
}
pre code {
  background: transparent;
  padding: 0;
}
blockquote {
  margin: 0 0 24px;
  padding: 8px 20px;
  border-left: 4px solid var(--rule);
  color: var(--muted);
}
.preview-footer {
  margin-top: 80px;
  padding-top: 24px;
  border-top: 1px solid var(--rule);
  color: var(--muted);
  font-size: 0.85em;
}
@media (max-width: 600px) {
  body { font-size: 17px; }
  .wrap { padding: 32px 20px 60px; }
  h1 { font-size: 1.9em; }
  h2 { font-size: 1.4em; }
}
"""


def escape(text: str) -> str:
    return html.escape(text, quote=False)


def render_inline(text: str) -> str:
    """Convert markdown inline elements to HTML."""
    # Escape first
    text = escape(text)
    # Bold + italic
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<!\*)\*([^*\n]+?)\*(?!\*)", r"<em>\1</em>", text)
    # Inline code
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    # Links — minimal support
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)",
                  lambda m: f'<a href="{m.group(2)}">{m.group(1)}</a>', text)
    return text


def md_to_html(md: str) -> str:
    """Tiny markdown -> HTML renderer. Handles the subset this skill produces."""
    lines = md.split("\n")
    out: list[str] = []
    i = 0
    in_meta = False
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Detect TL;DR italic block (single-line italic between H1 and first H2)
        # Pattern: `*...*` paragraph
        if (stripped.startswith("*") and not stripped.startswith("**")
                and stripped.endswith("*") and not stripped.endswith("**")
                and len(stripped) > 4):
            # Could be inline italic in a paragraph or a TLDR block
            # Heuristic: if no other paragraph elements before/after on this line, treat as TLDR
            inner = stripped[1:-1]
            # Heuristic: TLDR is usually 30+ words
            if len(inner.split()) >= 25 and len(inner.split()) <= 120:
                out.append(f'<div class="tldr"><p>{render_inline(inner)}</p></div>')
                i += 1
                continue

        # Horizontal rule (and end-of-article meta block separator)
        if re.match(r"^---+\s*$", stripped):
            out.append("<hr>")
            i += 1
            # Detect meta block: starts after a horizontal rule with `*Meta title:...*`
            # Look ahead — if the next non-empty line starts with `*Meta`, wrap in meta-block
            j = i
            while j < len(lines) and not lines[j].strip():
                j += 1
            if j < len(lines) and re.match(r"^\s*\*Meta\s+title:", lines[j]):
                in_meta = True
                meta_lines = []
                while j < len(lines):
                    s = lines[j].strip()
                    if s and (s.startswith("*") or "Meta" in s):
                        meta_lines.append(s.strip("*").strip())
                    elif not s and meta_lines:
                        j += 1
                        continue
                    elif not s:
                        j += 1
                        continue
                    else:
                        break
                    j += 1
                out.append('<div class="meta-block">')
                for ml in meta_lines:
                    out.append(f'<p>{escape(ml)}</p>')
                out.append('</div>')
                i = j
                in_meta = False
                continue
            continue

        # Headings
        m = re.match(r"^(#{1,6})\s+(.+)$", stripped)
        if m:
            level = len(m.group(1))
            text = m.group(2).strip()
            out.append(f"<h{level}>{render_inline(text)}</h{level}>")
            i += 1
            continue

        # Code blocks
        if stripped.startswith("```"):
            lang = stripped[3:].strip()
            out.append(f"<pre><code>")
            i += 1
            while i < len(lines) and not lines[i].strip().startswith("```"):
                out.append(escape(lines[i]))
                i += 1
            out.append("</code></pre>")
            i += 1  # skip closing ```
            continue

        # Lists (numbered)
        if re.match(r"^\d+\.\s+", stripped):
            out.append("<ol>")
            while i < len(lines) and re.match(r"^\d+\.\s+", lines[i].strip()):
                item_text = re.sub(r"^\d+\.\s+", "", lines[i].strip())
                out.append(f"<li>{render_inline(item_text)}</li>")
                i += 1
            out.append("</ol>")
            continue

        # Lists (bulleted)
        if re.match(r"^[-*+]\s+", stripped):
            out.append("<ul>")
            while i < len(lines) and re.match(r"^[-*+]\s+", lines[i].strip()):
                item_text = re.sub(r"^[-*+]\s+", "", lines[i].strip())
                out.append(f"<li>{render_inline(item_text)}</li>")
                i += 1
            out.append("</ul>")
            continue

        # Blockquote
        if stripped.startswith(">"):
            out.append("<blockquote>")
            while i < len(lines) and lines[i].strip().startswith(">"):
                qt = re.sub(r"^>\s?", "", lines[i].strip())
                out.append(f"<p>{render_inline(qt)}</p>")
                i += 1
            out.append("</blockquote>")
            continue

        # Paragraph (collect until blank line)
        if stripped:
            para_lines = [stripped]
            i += 1
            while i < len(lines) and lines[i].strip() and not _is_block_start(lines[i].strip()):
                para_lines.append(lines[i].strip())
                i += 1
            para = " ".join(para_lines)
            out.append(f"<p>{render_inline(para)}</p>")
            continue

        i += 1  # blank line

    return "\n".join(out)


def _is_block_start(line: str) -> bool:
    """Whether a line starts a new block element (so we shouldn't merge into prev paragraph)."""
    return (line.startswith("#")
            or line.startswith("```")
            or re.match(r"^\d+\.\s", line) is not None
            or re.match(r"^[-*+]\s", line) is not None
            or line.startswith(">")
            or re.match(r"^---+\s*$", line) is not None)


def render_page(title: str, content_html: str, source_filename: str) -> str:
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{escape(title)}</title>
<style>{CSS}</style>
</head>
<body>
<div class="wrap">
{content_html}
<div class="preview-footer">
<p>Preview rendered by exa-seo-writer from <code>{escape(source_filename)}</code>. This is a draft preview only — your CMS render will look different. Check it for: section flow, paragraph length on mobile, list density, where breaks fall.</p>
</div>
</div>
</body>
</html>
"""


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("article", type=Path, help="Path to article.md")
    ap.add_argument("--out", type=Path, default=None,
                    help="Output HTML path (default: alongside article.md)")
    ap.add_argument("--open", action="store_true",
                    help="Auto-open the rendered HTML in your default browser")
    args = ap.parse_args()

    if not args.article.exists():
        print(f"FAIL: article not found: {args.article}", file=sys.stderr)
        sys.exit(1)

    md = args.article.read_text()
    # Pull title from first H1 if present
    title = "Article preview"
    m = re.match(r"^#\s+(.+)$", md, re.M)
    if m:
        title = m.group(1).strip()

    content_html = md_to_html(md)
    page = render_page(title, content_html, args.article.name)

    out_path = args.out or args.article.with_suffix(".html")
    out_path.write_text(page)

    print(f"Wrote {out_path}")
    if args.open:
        webbrowser.open(f"file://{out_path.resolve()}")


if __name__ == "__main__":
    main()
