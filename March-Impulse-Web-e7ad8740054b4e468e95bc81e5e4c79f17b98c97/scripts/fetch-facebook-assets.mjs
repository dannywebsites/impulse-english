#!/usr/bin/env node
/**
 * Pull photos from the Impulse Facebook page via Apify, into a STAGING directory.
 *
 * Staging is deliberate. Many of these photos show minors, and consent to post on a
 * Facebook page is NOT consent to publish on a commercial website under GDPR/LOPDGDD.
 * Nothing here goes near public/ until a human has cleared it — see the manifest this
 * writes, which carries the post text, date and permalink for each image so the
 * clearing decision can actually be made.
 *
 * Usage:
 *   node scripts/fetch-facebook-assets.mjs [--limit 300] [--page <url>] [--out <dir>]
 *
 * Reads APIFY_API_TOKEN from ../seo-writer/.env or ~/.env.
 */

import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ACTOR = 'apify~facebook-photos-scraper';
const DEFAULT_PAGE = 'https://www.facebook.com/impulseenglishlavaguada/';
const REPO_ROOT = path.resolve(import.meta.dirname, '..', '..');
const DEFAULT_OUT = path.join(REPO_ROOT, 'new fotos', 'facebook-scrape');

function arg(flag, fallback) {
  const i = process.argv.indexOf(flag);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

async function readToken() {
  const candidates = [
    path.join(REPO_ROOT, 'seo-writer', '.env'),
    path.join(os.homedir(), '.env'),
  ];
  for (const file of candidates) {
    if (!existsSync(file)) continue;
    const line = (await readFile(file, 'utf8'))
      .split('\n')
      .find((l) => l.startsWith('APIFY_API_TOKEN='));
    if (line) return line.slice('APIFY_API_TOKEN='.length).trim().replace(/^["']|["']$/g, '');
  }
  throw new Error(`APIFY_API_TOKEN not found in: ${candidates.join(', ')}`);
}

async function api(url, token, options = {}) {
  const sep = url.includes('?') ? '&' : '?';
  const res = await fetch(`${url}${sep}token=${token}`, options);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${await res.text()}`);
  return res.json();
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const token = await readToken();
  const page = arg('--page', DEFAULT_PAGE);
  const limit = Number(arg('--limit', '300'));
  const outDir = arg('--out', DEFAULT_OUT);

  console.log(`Page:  ${page}`);
  console.log(`Limit: ${limit}`);
  console.log(`Out:   ${outDir}\n`);

  const { data: run } = await api(
    `https://api.apify.com/v2/acts/${ACTOR}/runs`,
    token,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ startUrls: [{ url: page }], resultsLimit: limit }),
    },
  );

  console.log(`Run ${run.id} started…`);
  let status = run.status;
  const started = Date.now();
  while (['READY', 'RUNNING'].includes(status)) {
    await sleep(5000);
    const { data } = await api(`https://api.apify.com/v2/actor-runs/${run.id}`, token);
    status = data.status;
    process.stdout.write(`\r  ${status}  ${Math.round((Date.now() - started) / 1000)}s   `);
  }
  console.log(`\nRun finished: ${status}`);
  if (status !== 'SUCCEEDED') throw new Error(`Run ended ${status}`);

  const items = await api(
    `https://api.apify.com/v2/datasets/${run.defaultDatasetId}/items?clean=true&format=json`,
    token,
  );
  console.log(`Dataset: ${items.length} items`);

  const imagesDir = path.join(outDir, 'images');
  await mkdir(imagesDir, { recursive: true });

  const manifest = [];
  let n = 0;
  for (const item of items) {
    // Field names confirmed against apify/facebook-photos-scraper output:
    // { image, url, ocrText, id, facebookId, dataType, inputUrl, facebookUrl }
    // Note `facebookUrl` is the *page*, `url` is the individual photo permalink —
    // getting that order wrong makes every manifest row point at the page.
    const src = item.image || item.imageUrl || item.photoUrl;
    if (!src) continue;
    n += 1;

    const ext = (new URL(src).pathname.match(/\.(jpe?g|png|webp)$/i)?.[1] || 'jpg').toLowerCase();
    const file = `fb-${String(n).padStart(3, '0')}.${ext === 'jpeg' ? 'jpg' : ext}`;

    // ocrText is Facebook's own alt text; its "no description" placeholder is noise.
    const ocr = item.ocrText && !/^no photo description/i.test(item.ocrText) ? item.ocrText : null;

    const entry = {
      file,
      sourceUrl: src,
      permalink: item.url || null,
      altText: ocr,
      photoId: item.id || null,
      // This actor returns photos only — no post body, date or reactions. If those are
      // needed to make a consent call, re-run with apify/facebook-posts-scraper instead.
      // Filled in by a human. Nothing ships to public/ until consentCleared is true.
      consentCleared: false,
      showsMinors: null,
      notes: '',
    };

    // fbcdn intermittently refuses requests without a browser UA, and some edge hosts
    // fail transiently — 8 of 20 died on the first run with no retry.
    let lastErr = null;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        const res = await fetch(src, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
            Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        await writeFile(path.join(imagesDir, file), Buffer.from(await res.arrayBuffer()));
        lastErr = null;
        break;
      } catch (err) {
        lastErr = err;
        if (attempt < 3) await sleep(attempt * 1500);
      }
    }
    if (lastErr) entry.downloadError = String(lastErr.message || lastErr);
    manifest.push(entry);
    process.stdout.write(`\r  downloaded ${manifest.filter((m) => !m.downloadError).length}/${items.length}   `);
  }

  await writeFile(
    path.join(outDir, 'manifest.json'),
    JSON.stringify({ page, scrapedFrom: ACTOR, runId: run.id, count: manifest.length, images: manifest }, null, 2),
  );

  const failed = manifest.filter((m) => m.downloadError).length;
  console.log(`\n\nStaged ${manifest.length - failed} images to ${imagesDir}`);
  if (failed) console.log(`${failed} failed to download (see manifest)`);
  console.log(`Manifest: ${path.join(outDir, 'manifest.json')}`);
  console.log(`\nNothing is publishable yet. Set consentCleared:true per image before any of`);
  console.log(`these move into public/images/extranjero/.`);
}

main().catch((err) => {
  console.error(`\nFailed: ${err.message}`);
  process.exit(1);
});
