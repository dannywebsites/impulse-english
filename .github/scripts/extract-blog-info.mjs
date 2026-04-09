/**
 * Extracts blog post title and URL from changed files.
 * Handles two formats:
 *   1. TypeScript data files (seoTitle + url fields)
 *   2. Markdown files with YAML frontmatter (title + slug)
 *
 * Usage: node extract-blog-info.mjs <changed-files-list>
 * Outputs GitHub Actions outputs: title, url
 */

import { readFileSync, appendFileSync } from 'fs';
import { basename } from 'path';

const changedFilesPath = process.argv[2];
if (!changedFilesPath) {
  console.error('Usage: node extract-blog-info.mjs <changed-files-list>');
  process.exit(1);
}

const changedFiles = readFileSync(changedFilesPath, 'utf-8')
  .trim()
  .split('\n')
  .filter(Boolean);

let title = '';
let url = '';

for (const file of changedFiles) {
  let content;
  try {
    content = readFileSync(file, 'utf-8');
  } catch {
    continue;
  }

  if (file.endsWith('.ts') || file.endsWith('.tsx')) {
    // TypeScript data/article files: extract seoTitle and url
    const seoTitleMatch = content.match(/seoTitle:\s*['"](.+?)['"]/);
    const urlMatch = content.match(/url:\s*['"](.+?)['"]/);

    if (seoTitleMatch) title = seoTitleMatch[1];
    if (urlMatch) url = urlMatch[1];

    if (title && url) break;
  } else if (file.endsWith('.md')) {
    // Markdown with YAML frontmatter
    const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m);
    const slugMatch = content.match(/^slug:\s*["']?(.+?)["']?\s*$/m);

    if (titleMatch) title = titleMatch[1];
    if (slugMatch) url = `/blog/${slugMatch[1]}`;

    if (title && url) break;
  }
}

if (!title) {
  // Fallback: use filename as title
  const firstFile = changedFiles[0];
  title = basename(firstFile).replace(/\.(ts|tsx|md)$/, '').replace(/[-_]/g, ' ');
}

if (!url) {
  url = '/blog';
}

// Write to GitHub Actions output
const outputFile = process.env.GITHUB_OUTPUT;
if (outputFile) {
  appendFileSync(outputFile, `title=${title}\n`);
  appendFileSync(outputFile, `url=${url}\n`);
}

console.log(`Title: ${title}`);
console.log(`URL: ${url}`);
