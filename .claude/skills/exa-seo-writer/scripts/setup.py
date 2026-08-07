#!/usr/bin/env python3
"""Interactive first-run setup for exa-seo-writer.

Walks the buyer through everything they need: dependency check, Exa key,
optional brand-voice setup, optional screenshot setup, and a test article so
they see the skill work end-to-end before relying on it.

Usage:
    python scripts/setup.py

Re-run this any time you want to validate your setup is still healthy or
swap your Exa key. Steps you've already completed will detect that and
offer to skip.
"""

from __future__ import annotations

import os
import shutil
import subprocess
import sys
import textwrap
import time
from pathlib import Path


SKILL_DIR = Path(__file__).resolve().parent.parent
ENV_FILE = SKILL_DIR / ".env"
BRAND_VOICE_DIR = SKILL_DIR / "references" / "brand-voice"


# ---------- terminal helpers ----------------------------------------------

USE_COLOR = sys.stdout.isatty() and os.environ.get("NO_COLOR") != "1"


def c(text: str, color: str) -> str:
    if not USE_COLOR:
        return text
    codes = {
        "bold": "1", "dim": "2",
        "red": "31", "green": "32", "yellow": "33",
        "blue": "34", "cyan": "36", "gray": "90",
    }
    code = codes.get(color, "0")
    return f"\033[{code}m{text}\033[0m"


def header(step: int, total: int, title: str) -> None:
    bar = "─" * 60
    print()
    print(c(bar, "gray"))
    print(c(f"Step {step}/{total}: {title}", "bold"))
    print(c(bar, "gray"))


def info(text: str) -> None:
    for line in textwrap.wrap(text, width=72):
        print(line)


def ok(text: str) -> None:
    print(c(f"  ✓ {text}", "green"))


def warn(text: str) -> None:
    print(c(f"  ! {text}", "yellow"))


def fail(text: str) -> None:
    print(c(f"  ✗ {text}", "red"))


def ask(prompt: str, default: str | None = None) -> str:
    suffix = f" [{default}]" if default else ""
    raw = input(c(f"  {prompt}{suffix}: ", "cyan")).strip()
    return raw or (default or "")


def ask_yn(prompt: str, default: bool = True) -> bool:
    suffix = "[Y/n]" if default else "[y/N]"
    while True:
        raw = input(c(f"  {prompt} {suffix}: ", "cyan")).strip().lower()
        if not raw:
            return default
        if raw in ("y", "yes"):
            return True
        if raw in ("n", "no"):
            return False
        print(c("    please answer y or n", "yellow"))


# ---------- step implementations -------------------------------------------


def step_dependencies() -> bool:
    """Check that exa-py, python-dotenv, and the standard libs are available."""
    required = ["exa_py", "dotenv"]
    missing = []
    for mod in required:
        try:
            __import__(mod)
            ok(f"{mod} installed")
        except ImportError:
            warn(f"{mod} not installed")
            missing.append(mod)

    if not missing:
        return True

    info("")
    info("These packages are listed in requirements.txt. Want me to install them now?")
    if not ask_yn("Install missing dependencies", default=True):
        warn("Skipping. The skill won't run until these are installed.")
        return False

    pkg_map = {"exa_py": "exa-py", "dotenv": "python-dotenv"}
    pkgs = [pkg_map[m] for m in missing]
    cmd = [sys.executable, "-m", "pip", "install"] + pkgs
    print(c(f"  → running: {' '.join(cmd)}", "dim"))
    res = subprocess.run(cmd, capture_output=False)
    if res.returncode != 0:
        fail("pip install failed. Try running it yourself, or use a virtual env.")
        return False
    ok("Dependencies installed")
    return True


def step_exa_key() -> bool:
    """Walk the buyer through getting an Exa key and saving it to .env."""
    existing_key = ""
    if ENV_FILE.exists():
        for line in ENV_FILE.read_text().splitlines():
            if line.startswith("EXA_API_KEY="):
                existing_key = line.split("=", 1)[1].strip()
                break

    if existing_key:
        ok(f"Found EXA_API_KEY in {ENV_FILE.name} (ends in ...{existing_key[-4:]})")
        if not ask_yn("Replace it with a new key", default=False):
            return _test_exa_key(existing_key)

    info("This skill uses Exa to pull the actual top-10 search results for "
         "your target keyword. That's how it knows what to compete against.")
    info("")
    info("If you don't have an Exa key yet, sign up free at https://exa.ai "
         "(1,000 searches included on the free tier — enough to test the skill).")
    info("")

    while True:
        key = ask("Paste your Exa API key (or 'skip')")
        if key.lower() == "skip":
            warn("Skipping. The skill won't be able to research without this.")
            return False
        if not key:
            print(c("    please paste a key or type 'skip'", "yellow"))
            continue
        # Save first
        _save_env_var("EXA_API_KEY", key)
        ok(f"Saved to {ENV_FILE}")
        if _test_exa_key(key):
            return True
        info("")
        if not ask_yn("Want to try a different key", default=True):
            return False


def _save_env_var(name: str, value: str) -> None:
    """Update or append a single var in the .env file."""
    lines = []
    found = False
    if ENV_FILE.exists():
        for line in ENV_FILE.read_text().splitlines():
            if line.startswith(name + "="):
                lines.append(f"{name}={value}")
                found = True
            else:
                lines.append(line)
    if not found:
        lines.append(f"{name}={value}")
    ENV_FILE.write_text("\n".join(lines) + "\n")
    try:
        ENV_FILE.chmod(0o600)
    except Exception:
        pass


def _test_exa_key(key: str) -> bool:
    """Make a tiny Exa call to confirm the key works."""
    try:
        from exa_py import Exa
    except ImportError:
        fail("exa-py not installed — can't test the key. Re-run setup after installing deps.")
        return False
    print(c("    Testing key with a quick Exa search...", "dim"))
    try:
        exa = Exa(api_key=key)
        result = exa.search("test", num_results=2)
        if hasattr(result, "results") and result.results:
            ok("Key works — Exa returned results")
            return True
        warn("Key responded but no results. The key might still work; we'll proceed.")
        return True
    except Exception as e:
        fail(f"Key didn't work: {e}")
        return False


def step_brand_voice() -> bool:
    """Optional: walk through the brand-voice setup."""
    samples = list(BRAND_VOICE_DIR.glob("*.md")) + list(BRAND_VOICE_DIR.glob("*.txt"))
    samples = [s for s in samples if s.name.lower() != "readme.md"]

    if samples:
        ok(f"Found {len(samples)} brand-voice sample(s) already")
        for s in samples[:5]:
            print(f"      • {s.name}")
        info("")
        info("These will be analysed automatically when you write articles. "
             "You can drop more in any time, or remove what's there.")
        return True

    info("Optional: drop your existing published articles into "
         f"{BRAND_VOICE_DIR.relative_to(SKILL_DIR)}/ to teach the skill your voice.")
    info("")
    info("It analyses sentence rhythm, vocabulary, paragraph structure, and "
         "tone from your samples, then mirrors those patterns when writing "
         "new articles. 2–5 sample articles works best.")
    info("")
    info("You can skip this now and add samples later — the skill works fine "
         "with the default voice (concise, clear, grade-7, opinionated).")
    info("")

    if not ask_yn("Want help adding voice samples now", default=False):
        info(f"  → Drop articles into {BRAND_VOICE_DIR} when you're ready. "
             f"They'll be picked up automatically next time you run the skill.")
        return True

    info("")
    info("Paste a path to one of your published articles (markdown or .txt). "
         "Type 'done' when finished.")
    info("")

    BRAND_VOICE_DIR.mkdir(parents=True, exist_ok=True)
    n_added = 0
    while True:
        raw = ask("Path to a sample article (or 'done')")
        if raw.lower() in ("done", "skip", ""):
            break
        src = Path(raw).expanduser()
        if not src.exists():
            warn(f"File not found: {src}")
            continue
        if src.suffix.lower() not in (".md", ".txt"):
            warn(f"Skipping {src.name} — only .md and .txt supported")
            continue
        dst = BRAND_VOICE_DIR / src.name
        shutil.copy(src, dst)
        n_added += 1
        ok(f"Added {dst.name}")

    if n_added:
        ok(f"Saved {n_added} sample(s) to {BRAND_VOICE_DIR}")
    return True


def step_screenshots() -> bool:
    """Optional: ask about Playwright install."""
    try:
        import playwright  # noqa: F401
        ok("Playwright already installed (screenshot capture available)")
        return True
    except ImportError:
        pass

    info("Optional: install Playwright to capture real brand/product screenshots.")
    info("")
    info("If you write roundup or comparison articles, this lets the skill grab "
         "actual PNGs of the products' websites — no AI image generation, just "
         "real screenshots you can drop into your CMS.")
    info("")
    info(c("  Install size: ~200 MB (Chromium browser).", "dim"))
    info("")

    if not ask_yn("Install Playwright now", default=False):
        info("  → You can install later with: python scripts/install_screenshot_deps.py")
        return True

    res = subprocess.run(
        [sys.executable, str(SKILL_DIR / "scripts" / "install_screenshot_deps.py")],
        capture_output=False,
    )
    return res.returncode == 0


def step_test_article() -> bool:
    """Generate a small sample article so the buyer sees it work."""
    info("You're set up. Want to generate a test article right now to confirm "
         "everything is working?")
    info("")

    if not ask_yn("Generate a test article", default=True):
        info("  → Skipping. To test later, open Claude Code and type something like:")
        info("       write an SEO article about \"best AI writing tools 2026\"")
        return True

    info("")
    info("Pick a keyword to test with (or pick 1):")
    info("  1. best AI writing tools 2026  (roundup)")
    info("  2. how to write better headlines  (guide)")
    info("  3. what is RAG  (informational)")
    info("  4. enter your own")
    info("")

    options = {
        "1": "best AI writing tools 2026",
        "2": "how to write better headlines",
        "3": "what is RAG",
    }
    choice = ask("Choice", default="1")
    if choice == "4":
        keyword = ask("Your keyword")
    else:
        keyword = options.get(choice, options["1"])

    if not keyword:
        warn("No keyword. Skipping.")
        return True

    info("")
    info(f"Researching SERP for {keyword!r}...")
    test_dir = SKILL_DIR / "test-output"
    test_dir.mkdir(parents=True, exist_ok=True)

    research_path = test_dir / "research.json"
    res = subprocess.run(
        [sys.executable, str(SKILL_DIR / "scripts" / "research.py"),
         keyword, "--num-results", "5",
         "--output", str(research_path)],
        capture_output=False,
    )
    if res.returncode != 0:
        fail("Research failed. Check your Exa key and try again.")
        return False
    ok(f"Research saved to {research_path}")

    info("")
    info("The full article-writing flow runs inside Claude Code (the skill's "
         "SKILL.md guides Claude through brief → write → humanize → lint → score). "
         "To trigger it, open Claude Code in any folder and type:")
    info("")
    print(c(f'    write an SEO article about "{keyword}"', "bold"))
    info("")
    info("Claude will pick up the exa-seo-writer skill, run the full pipeline, and "
         "drop article.md in your current folder. Takes 5–10 minutes.")
    return True


# ---------- driver ---------------------------------------------------------


def main() -> int:
    print()
    print(c("exa-seo-writer setup", "bold"))
    print()
    info("This walks you through everything you need to get the skill running. "
         "Takes 5–10 minutes for first-time setup, less if you're updating.")
    info("")
    info(c("Press Ctrl+C any time to bail. Re-run this script to resume.", "dim"))

    steps = [
        ("Python dependencies", step_dependencies),
        ("Exa API key", step_exa_key),
        ("Brand voice (optional)", step_brand_voice),
        ("Screenshot tools (optional)", step_screenshots),
        ("Test article (optional)", step_test_article),
    ]

    results: list[tuple[str, bool]] = []
    for i, (name, fn) in enumerate(steps, 1):
        header(i, len(steps), name)
        try:
            success = fn()
        except KeyboardInterrupt:
            print()
            warn("Interrupted. Re-run setup to resume.")
            return 130
        results.append((name, success))

    # Summary
    print()
    print(c("─" * 60, "gray"))
    print(c("Setup summary", "bold"))
    print(c("─" * 60, "gray"))
    for name, success in results:
        if success:
            ok(name)
        else:
            warn(name + " — needs attention")

    blockers = [n for n, s in results[:2] if not s]  # first 2 are required
    if blockers:
        print()
        warn(f"Blocking steps not completed: {', '.join(blockers)}")
        warn("Re-run python scripts/setup.py when you're ready to finish them.")
        return 1

    print()
    print(c("You're ready. ", "green") +
          "Open Claude Code in any project and try:")
    print(c('  write an SEO article about "your keyword here"', "bold"))
    print()
    print("Other things you can do (see README.md for more):")
    print("  • Rank candidate keywords:  python scripts/prioritize_keywords.py keywords.csv")
    print("  • Refresh existing article: python scripts/refresh_article.py <url>")
    print("  • Capture brand shots:      python scripts/screenshot.py <url1> <url2>")
    print("  • Preview as HTML:          python scripts/preview.py article.md --open")
    print()
    return 0


if __name__ == "__main__":
    sys.exit(main())
