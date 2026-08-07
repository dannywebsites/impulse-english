#!/usr/bin/env python3
"""One-time setup for the screenshot capture feature.

Installs Playwright (Python) plus the Chromium browser. Buyers run this once
after purchasing the skill. After this completes, `scripts/screenshot.py`
will work.

Usage:
    python scripts/install_screenshot_deps.py

Total download is ~200 MB (the Chromium browser). Skip this if you don't
plan to use the screenshot feature — the rest of the skill works without it.
"""

import shutil
import subprocess
import sys


def main():
    print("Installing Playwright Python package...")
    res = subprocess.run(
        [sys.executable, "-m", "pip", "install", "playwright"],
        capture_output=False,
    )
    if res.returncode != 0:
        print("\nFailed to install playwright. Try running with --user or in a virtualenv.",
              file=sys.stderr)
        sys.exit(res.returncode)

    print("\nInstalling Chromium browser (one-time, ~200 MB download)...")
    res = subprocess.run(
        [sys.executable, "-m", "playwright", "install", "chromium"],
        capture_output=False,
    )
    if res.returncode != 0:
        print("\nFailed to install Chromium. You can retry later with:\n"
              "    playwright install chromium", file=sys.stderr)
        sys.exit(res.returncode)

    print("\nDone. Test it with:\n"
          "    python scripts/screenshot.py https://example.com --out /tmp/test_shot/")


if __name__ == "__main__":
    main()
