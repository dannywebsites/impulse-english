#!/bin/bash
# Monthly tracking safety net — runs the double-tick click matrix against the
# LIVE site (clicks only: no test leads created in GHL; forms are tested
# manually / after code changes). Installed in crontab on Danny's Mac.
# On FAILURE: macOS notification + an unmissable alert file on the Desktop.
set -u
SITE_DIR="/Users/danny/Desktop/backup website Impuls Englisch /March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97"
LOG_DIR="$SITE_DIR/scripts/verify-tracking/logs"
mkdir -p "$LOG_DIR"
STAMP="$(date +%Y-%m-%d)"
LOG="$LOG_DIR/monthly-$STAMP.log"

export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"  # cron has a bare PATH; node+gcloud live here

cd "$SITE_DIR" || exit 1
node scripts/verify-tracking/run.mjs > "$LOG" 2>&1
RESULT=$?

if [ $RESULT -eq 0 ]; then
  echo "[$STAMP] ALL PASS" >> "$LOG_DIR/history.log"
  /usr/bin/osascript -e 'display notification "All conversion tracking PASS ✅" with title "Impulse tracking check"' 2>/dev/null
else
  echo "[$STAMP] FAILURES — see $LOG" >> "$LOG_DIR/history.log"
  /usr/bin/osascript -e 'display notification "Tracking check FAILED — see Desktop alert" with title "⚠️ Impulse tracking BROKEN"' 2>/dev/null
  {
    echo "The monthly tracking check FAILED on $STAMP."
    echo "Some conversion events are no longer recording in GA4."
    echo ""
    echo "Full log: $LOG"
    echo "Evidence table: $SITE_DIR/scripts/verify-tracking/last-audit.md"
    echo ""
    echo "Fix: open Claude Code in the project and say:"
    echo "  \"the monthly tracking check failed — investigate and fix per TRACKING.md\""
  } > "/Users/danny/Desktop/TRACKING-BROKEN-$STAMP.txt"
fi
exit $RESULT
