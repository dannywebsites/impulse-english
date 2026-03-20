/**
 * Migration script: Converts PAA article TypeScript data objects
 * into Astro Content Collection .md files with YAML frontmatter.
 *
 * Usage: npx tsx scripts/migrate-articles.ts
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { cambridgeB2FirstArticles } from '../data/articles/cambridge-b2-first';
import { cambridgeC1AdvancedArticles } from '../data/articles/cambridge-c1-advanced';
import type { PAAArticle } from '../data/articles/types';

const OUTPUT_DIR = join(import.meta.dirname, '..', 'src', 'content', 'articles');

// Ensure output directory exists
mkdirSync(OUTPUT_DIR, { recursive: true });

const allArticles: PAAArticle[] = [
  ...cambridgeB2FirstArticles,
  ...cambridgeC1AdvancedArticles,
];

/**
 * Escape a string for YAML. Uses block scalar (|) for multiline/HTML content,
 * double-quoted strings for values with special characters, plain otherwise.
 */
function yamlString(value: string, indent: number = 0): string {
  // If it contains HTML tags or newlines, use block scalar
  if (value.includes('<') || value.includes('\n')) {
    const pad = ' '.repeat(indent);
    const lines = value.split('\n');
    return `|\n${lines.map(l => `${pad}${l}`).join('\n')}`;
  }
  // If it looks like a YAML date (YYYY-MM-DD), quote it to keep as string
  if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
    return `"${value}"`;
  }
  // If it contains YAML-special characters, quote it
  if (/[:#\[\]{}|>!&*?,'"`@%]/.test(value) || value.startsWith('-') || value.startsWith(' ') || value.endsWith(' ')) {
    // Escape internal double quotes and backslashes
    const escaped = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `"${escaped}"`;
  }
  return value;
}

function serializeArticle(article: PAAArticle): string {
  const lines: string[] = ['---'];

  // Note: 'slug' is omitted — Astro 5 derives it from the filename (entry.id).
  // The slug value equals the filename stem, which matches article.slug.
  lines.push(`url: ${yamlString(article.url)}`);
  lines.push(`category: ${yamlString(article.category)}`);
  lines.push(`priority: ${yamlString(article.priority)}`);
  lines.push(`question: ${yamlString(article.question)}`);
  lines.push(`seoTitle: ${yamlString(article.seoTitle)}`);
  lines.push(`metaDescription: ${yamlString(article.metaDescription)}`);
  lines.push(`paaAnswer: ${yamlString(article.paaAnswer)}`);

  // contextSections
  lines.push('contextSections:');
  for (const section of article.contextSections) {
    lines.push(`  - heading: ${yamlString(section.heading)}`);
    lines.push(`    content: ${yamlString(section.content, 6)}`);
  }

  // impulseSection
  lines.push('impulseSection:');
  lines.push(`  heading: ${yamlString(article.impulseSection.heading)}`);
  lines.push(`  content: ${yamlString(article.impulseSection.content, 4)}`);
  lines.push('  ctaLinks:');
  for (const link of article.impulseSection.ctaLinks) {
    lines.push(`    - text: ${yamlString(link.text)}`);
    lines.push(`      href: ${yamlString(link.href)}`);
  }

  // faqItems
  lines.push('faqItems:');
  for (const faq of article.faqItems) {
    lines.push(`  - question: ${yamlString(faq.question)}`);
    lines.push(`    answer: ${yamlString(faq.answer)}`);
  }

  // internalLinkRefs
  lines.push('internalLinkRefs:');
  for (const ref of article.internalLinkRefs) {
    lines.push(`  - ${yamlString(ref)}`);
  }

  // breadcrumbs
  lines.push('breadcrumbs:');
  for (const bc of article.breadcrumbs) {
    lines.push(`  - label: ${yamlString(bc.label)}`);
    if (bc.href) {
      lines.push(`    href: ${yamlString(bc.href)}`);
    }
  }

  lines.push(`publishedDate: ${yamlString(article.publishedDate)}`);
  lines.push(`modifiedDate: ${yamlString(article.modifiedDate)}`);
  lines.push(`readTime: ${yamlString(article.readTime)}`);
  lines.push(`imageKey: ${yamlString(article.imageKey)}`);
  lines.push('---');
  lines.push('');
  lines.push(article.paaAnswer);
  lines.push('');

  return lines.join('\n');
}

// Generate all .md files
let count = 0;
for (const article of allArticles) {
  const filename = `${article.slug}.md`;
  const filepath = join(OUTPUT_DIR, filename);
  const content = serializeArticle(article);
  writeFileSync(filepath, content, 'utf-8');
  count++;
  console.log(`  ✓ ${filename}`);
}

console.log(`\nMigrated ${count} articles to ${OUTPUT_DIR}`);
