#!/usr/bin/env node
// Double-tick tracking verification for impulse-english.es
//
//   Tick 1 (sent):     network hit captured with tid=G-KNMS5YW69T + expected en=
//   Tick 2 (recorded): GA4 Realtime API count increased vs pre-run baseline
//   Forms add Tick 3:  GHL webhook responds HTTP 200
//
// Usage:
//   node scripts/verify-tracking/run.mjs              # clicks only (no CRM writes)
//   node scripts/verify-tracking/run.mjs --forms      # + real marked test-lead submits
//   node scripts/verify-tracking/run.mjs --popup      # + 41s CoursePopup submit test
//
// Requirements: Google Chrome installed; GA4 service-account env at
// ~/.config/gcloud/impulse-ga4-reporter.env (see README). Test sessions carry
// ?tt=test → traffic_type=internal, excluded from reports by the GA4 filter.
import { chromium } from 'playwright-core';
import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { SITE, MEASUREMENT_ID, PROPERTY, TEST_QUERY, MATRIX, POPUP_PAGE, TEST_LEAD, WA, TEL } from './config.mjs';

const DO_FORMS = process.argv.includes('--forms');
const DO_POPUP = process.argv.includes('--popup');
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
const TRACKED_EVENTS = ['whatsapp_click', 'phone_click', 'email_click', 'generate_lead'];

function ga4Token() {
  return execSync(
    `bash -lc 'source "$HOME/.config/gcloud/impulse-ga4-reporter.env" && gcloud auth activate-service-account --key-file="$KEY_PATH" >/dev/null 2>&1 && gcloud auth print-access-token --scopes=https://www.googleapis.com/auth/analytics.readonly'`,
    { encoding: 'utf8' }
  ).trim();
}

async function realtimeCounts(token) {
  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/${PROPERTY}:runRealtimeReport`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      dimensions: [{ name: 'eventName' }],
      metrics: [{ name: 'eventCount' }],
      dimensionFilter: { filter: { fieldName: 'eventName', inListFilter: { values: TRACKED_EVENTS } } },
    }),
  });
  const d = await res.json();
  const out = Object.fromEntries(TRACKED_EVENTS.map((e) => [e, 0]));
  for (const r of d.rows || []) out[r.dimensionValues[0].value] = Number(r.metricValues[0].value);
  return out;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  console.log(`verify-tracking — forms:${DO_FORMS} popup:${DO_POPUP}`);
  const token = ga4Token();
  const baseline = await realtimeCounts(token);
  console.log('realtime baseline:', JSON.stringify(baseline));

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const results = []; // {page, label, expect, sent, tid, ghl, status}
  const sentTotals = Object.fromEntries(TRACKED_EVENTS.map((e) => [e, 0]));

  async function newPage() {
    const ctx = await browser.newContext({ userAgent: UA });
    const page = await ctx.newPage();
    await page.addInitScript(() => localStorage.setItem('impulse_cookie_consent', 'accepted'));
    const hits = [];
    const ghl = [];
    page.on('request', (req) => {
      if (/google-analytics\.com\/g\/collect/.test(req.url())) {
        const u = new URL(req.url());
        const tid = u.searchParams.get('tid');
        const ens = [u.searchParams.get('en'), ...[...(req.postData() || '').matchAll(/(?:^|&|\n)en=([^&\n]+)/g)].map((m) => m[1])].filter(Boolean);
        for (const en of ens) hits.push({ en, tid });
      }
    });
    page.on('response', (res) => {
      if (/leadconnectorhq\.com/.test(res.url())) ghl.push(res.status());
    });
    await ctx.route('**/wa.me/**', (r) => r.abort());
    return { ctx, page, hits, ghl };
  }

  const clickVisible = (page, selector) =>
    page.evaluate((sel) => {
      const el = [...document.querySelectorAll(sel)].find((e) => {
        const r = e.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      });
      if (!el) return false;
      const stop = (ev) => ev.preventDefault();
      window.addEventListener('click', stop);
      el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      window.removeEventListener('click', stop);
      return true;
    }, selector);

  for (const spec of MATRIX) {
    const { ctx, page, hits, ghl } = await newPage();
    const url = SITE + spec.path + TEST_QUERY;
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    } catch (e) {
      results.push({ page: spec.path, label: 'PAGE LOAD', expect: '-', status: 'FAIL', note: String(e).slice(0, 80) });
      await ctx.close();
      continue;
    }
    await page.waitForTimeout(2500); // hydration + consent update; deferred gtag not yet loaded

    for (const t of spec.tests) {
      // race clicks happen NOW (first interaction, pre-gtag.js); others after full load
      if (!t.raceClick && !spec._loaded) {
        await page.waitForTimeout(4000); // let deferred gtag.js load
        spec._loaded = true;
      }
      const before = hits.length;
      const clicked = await clickVisible(page, t.find);
      if (!clicked) {
        results.push({ page: spec.path, label: t.label, expect: t.expect, status: t.required ? 'FAIL' : 'SKIP', note: 'selector not found/visible' });
        continue;
      }
      // wait for the hit (race clicks need gtag.js to load first: up to 10s)
      let sent = null;
      for (let i = 0; i < (t.raceClick ? 24 : 10); i++) {
        await sleep(500);
        sent = hits.slice(before).find((h) => h.en === t.expect);
        if (sent) break;
      }
      if (sent) sentTotals[t.expect]++;
      results.push({
        page: spec.path, label: t.label, expect: t.expect,
        sent: !!sent, tid: sent?.tid || '-',
        status: sent && sent.tid === MEASUREMENT_ID ? 'sent✓' : 'FAIL',
        note: sent ? '' : 'no hit captured',
      });
    }

    if (spec.form && DO_FORMS && spec.form.submit) {
      const before = hits.length;
      const ghlBefore = ghl.length;
      const filled = await page.evaluate((lead) => {
        const form = [...document.querySelectorAll('form')].find((f) => f.querySelector('input[type="email"]'));
        if (!form) return false;
        const set = (el, v) => {
          if (!el) return;
          const proto = el.tagName === 'SELECT' ? window.HTMLSelectElement.prototype : window.HTMLInputElement.prototype;
          const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
          setter.call(el, v);
          el.dispatchEvent(new Event('input', { bubbles: true }));
          el.dispatchEvent(new Event('change', { bubbles: true }));
        };
        set(form.querySelector('input[type="text"]'), lead.name);
        set(form.querySelector('input[type="email"]'), lead.email);
        set(form.querySelector('input[type="tel"]'), lead.phone);
        const sel = form.querySelector('select');
        if (sel) set(sel, lead.level);
        const cb = form.querySelector('input[type="checkbox"]');
        if (cb && !cb.checked) cb.click();
        return true;
      }, TEST_LEAD);
      if (filled) {
        await page.evaluate(() => {
          const form = [...document.querySelectorAll('form')].find((f) => f.querySelector('input[type="email"]'));
          form.querySelector('button[type="submit"]')?.click();
        });
        await sleep(8000);
        const sent = hits.slice(before).find((h) => h.en === 'generate_lead');
        if (sent) sentTotals.generate_lead++;
        const ghlOk = ghl.slice(ghlBefore).some((s) => s === 200);
        results.push({
          page: spec.path, label: `LeadForm submit (${spec.form.source})`, expect: 'generate_lead',
          sent: !!sent, tid: sent?.tid || '-', ghl: ghlOk ? '200✓' : 'FAIL',
          status: sent && sent.tid === MEASUREMENT_ID && ghlOk ? 'sent✓' : 'FAIL',
        });
      } else {
        results.push({ page: spec.path, label: 'LeadForm submit', expect: 'generate_lead', status: 'FAIL', note: 'form not found' });
      }
    }
    await ctx.close();
  }

  if (DO_POPUP) {
    const { ctx, page, hits, ghl } = await newPage();
    await page.goto(SITE + POPUP_PAGE + TEST_QUERY, { waitUntil: 'domcontentloaded' });
    console.log('popup test: waiting 42s for the time-on-page popup…');
    await page.waitForTimeout(42000);
    const popupVisible = await page.evaluate((lead) => {
      const dialog = document.querySelector('[role="dialog"], .fixed.inset-0');
      if (!dialog) return false;
      const set = (el, v) => {
        if (!el) return;
        const proto = el.tagName === 'SELECT' ? window.HTMLSelectElement.prototype : window.HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, v);
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      };
      set(dialog.querySelector('input[type="text"]'), lead.name);
      set(dialog.querySelector('input[type="email"]'), lead.email);
      set(dialog.querySelector('input[type="tel"]'), lead.phone);
      const sel = dialog.querySelector('select');
      if (sel) set(sel, sel.querySelector('option[value]:not([value=""])')?.value || '');
      dialog.querySelector('button[type="submit"]')?.click();
      return true;
    }, TEST_LEAD);
    await sleep(8000);
    const sent = hits.find((h) => h.en === 'generate_lead');
    if (sent) sentTotals.generate_lead++;
    const ghlOk = ghl.some((s) => s === 200);
    results.push({
      page: POPUP_PAGE, label: 'CoursePopup submit (41s)', expect: 'generate_lead',
      sent: !!sent, tid: sent?.tid || '-', ghl: ghlOk ? '200✓' : 'FAIL',
      status: popupVisible && sent && sent.tid === MEASUREMENT_ID && ghlOk ? 'sent✓' : 'FAIL',
      note: popupVisible ? '' : 'popup never appeared',
    });
    await ctx.close();
  }

  await browser.close();

  // ---- Tick 2: destination recorded (GA4 Realtime, vs baseline) ----
  console.log('\nTick 2 — polling GA4 Realtime for recorded deltas…');
  const expected = Object.fromEntries(Object.entries(sentTotals).filter(([, n]) => n > 0));
  let recorded = {};
  for (let i = 0; i < 10; i++) {
    await sleep(40000);
    const now = await realtimeCounts(ga4Token());
    recorded = Object.fromEntries(Object.keys(expected).map((e) => [e, now[e] - baseline[e]]));
    console.log(`  poll ${i + 1}:`, JSON.stringify(recorded), 'need:', JSON.stringify(expected));
    if (Object.entries(expected).every(([e, n]) => recorded[e] >= n)) break;
  }

  for (const r of results) {
    if (r.status === 'sent✓') {
      r.status = recorded[r.expect] >= expected[r.expect] ? 'PASS' : 'FAIL(tick2)';
    }
  }

  // ---- Report ----
  const lines = [
    `# Tracking audit — ${new Date().toISOString()}`,
    '', `Site: ${SITE} · property ${PROPERTY} · stream ${MEASUREMENT_ID}`,
    `Modes: forms=${DO_FORMS} popup=${DO_POPUP}. Test traffic tagged internal via ${TEST_QUERY}.`,
    '', '| Page | CTA | Event | Tick1 sent (tid) | GHL | Verdict |', '|---|---|---|---|---|---|',
  ];
  for (const r of results) {
    lines.push(`| ${r.page} | ${r.label} | ${r.expect} | ${r.sent ? `✓ (${r.tid})` : '✗'} | ${r.ghl || '-'} | **${r.status}**${r.note ? ` — ${r.note}` : ''} |`);
  }
  lines.push('', `Tick 2 (GA4 Realtime recorded deltas vs baseline): \`${JSON.stringify(recorded)}\` vs needed \`${JSON.stringify(expected)}\``);
  const report = lines.join('\n');
  writeFileSync(new URL('./last-audit.md', import.meta.url), report);
  console.log('\n' + report);

  const fails = results.filter((r) => r.status.startsWith('FAIL'));
  console.log(`\n${fails.length === 0 ? 'ALL PASS ✅' : `${fails.length} FAILURES ❌`}`);
  process.exit(fails.length === 0 ? 0 : 1);
}

main().catch((e) => { console.error(e); process.exit(1); });
