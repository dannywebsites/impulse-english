import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';

const BASE = process.env.BASE ?? 'http://localhost:4321';
const OUT = process.env.OUT ?? './shots';
const routes = (process.env.ROUTES ?? '/').split(',');

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1440, height: 900 },
];

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  channel: 'chrome',
  args: ['--force-prefers-reduced-motion'],
});

for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  });
  const page = await ctx.newPage();
  for (const route of routes) {
    const slug = route === '/' ? 'home' : route.replace(/\//g, '-').replace(/^-|-$/g, '');
    await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 45000 });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(900);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);

    // Horizontal-overflow probe: the page body must never scroll sideways.
    const overflow = await page.evaluate(() => {
      const de = document.documentElement;
      const wide = [...document.querySelectorAll('*')]
        .filter((el) => el.getBoundingClientRect().right > de.clientWidth + 1)
        .slice(0, 4)
        .map((el) => `${el.tagName.toLowerCase()}.${(el.className || '').toString().split(' ').slice(0, 3).join('.')}`);
      return { scrollW: de.scrollWidth, clientW: de.clientWidth, wide };
    });
    const bad = overflow.scrollW > overflow.clientW + 1;
    console.log(
      `${bad ? 'OVERFLOW' : 'ok      '} ${vp.name.padEnd(7)} ${route.padEnd(34)} ${overflow.scrollW}/${overflow.clientW}` +
        (bad ? ` :: ${overflow.wide.join(' | ')}` : '')
    );

    await page.screenshot({ path: `${OUT}/${slug}.${vp.name}.png`, fullPage: true });
  }
  await ctx.close();
}

await browser.close();
