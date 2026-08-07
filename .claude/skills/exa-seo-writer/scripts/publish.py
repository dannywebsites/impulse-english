#!/usr/bin/env python3
"""
exa-seo-writer: Optional Google Docs publisher (fallback).

Prefer the Google Docs MCP server if the user has it installed.
This script is only used when --google-doc is passed AND no MCP is available.

Usage:
    python scripts/publish.py article.md --title "Best Project Management Tools 2026"

Env:
    GOOGLE_SERVICE_ACCOUNT_PATH — path to service account JSON
    GOOGLE_DOC_FOLDER_ID        — Drive folder ID to create the doc in (optional)
"""

import argparse
import os
import sys
from pathlib import Path

try:
    from google.oauth2 import service_account
    from googleapiclient.discovery import build
except ImportError:
    print("ERROR: Google API libraries not installed.", file=sys.stderr)
    print("Run: pip install google-api-python-client google-auth", file=sys.stderr)
    sys.exit(1)

try:
    from dotenv import load_dotenv
    skill_dir = Path(__file__).parent.parent
    load_dotenv(skill_dir / ".env")
except ImportError:
    pass

SCOPES = [
    "https://www.googleapis.com/auth/documents",
    "https://www.googleapis.com/auth/drive.file",
]


def get_credentials():
    path = os.getenv("GOOGLE_SERVICE_ACCOUNT_PATH")
    if not path or not Path(path).exists():
        print("ERROR: GOOGLE_SERVICE_ACCOUNT_PATH not set or file missing.", file=sys.stderr)
        print("Alternatively, install the Google Docs MCP server:", file=sys.stderr)
        print("  https://modelcontextprotocol.io/servers/google-docs", file=sys.stderr)
        sys.exit(1)
    return service_account.Credentials.from_service_account_file(path, scopes=SCOPES)


def create_doc(title: str, markdown_content: str) -> str:
    """Create a Google Doc and return its URL.

    NOTE: This is a minimal implementation. It creates a doc and inserts the
    markdown as plain text. A richer version would convert headings, bold,
    lists, etc. into proper Google Docs structure via batchUpdate requests.
    For a production setup, use the Google Docs MCP server which handles
    rich conversion automatically.
    """
    creds = get_credentials()
    docs_service = build("docs", "v1", credentials=creds)
    drive_service = build("drive", "v3", credentials=creds)

    # Create empty doc
    doc = docs_service.documents().create(body={"title": title}).execute()
    doc_id = doc["documentId"]

    # Move to folder if specified
    folder_id = os.getenv("GOOGLE_DOC_FOLDER_ID")
    if folder_id:
        drive_service.files().update(
            fileId=doc_id,
            addParents=folder_id,
            fields="id, parents",
        ).execute()

    # Insert content as plain text
    docs_service.documents().batchUpdate(
        documentId=doc_id,
        body={
            "requests": [
                {
                    "insertText": {
                        "location": {"index": 1},
                        "text": markdown_content,
                    }
                }
            ]
        },
    ).execute()

    return f"https://docs.google.com/document/d/{doc_id}/edit"


def main():
    parser = argparse.ArgumentParser(description="exa-seo-writer Google Docs publisher (fallback)")
    parser.add_argument("article", help="Path to article.md")
    parser.add_argument("--title", required=True, help="Google Doc title")
    args = parser.parse_args()

    article_path = Path(args.article)
    if not article_path.exists():
        print(f"ERROR: Article file not found: {article_path}", file=sys.stderr)
        sys.exit(1)

    content = article_path.read_text()
    url = create_doc(args.title, content)
    print(f"Published: {url}")


if __name__ == "__main__":
    main()
