// QA for the three redesigned service pages. Needs `npx vite preview --port 4173` running.
import { chromium } from 'file:///C:/Users/DELL/AppData/Local/npm-cache/_npx/5c6d8c4f680fcd0a/node_modules/playwright/index.mjs';
import assert from 'node:assert/strict';
const out = process.argv[2] || '.';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const viewports = [{ width: 1440, height: 1000 }, { width: 820, height: 1180 }, { width: 390, height: 844 }, { width: 360, height: 740 }];
const pages = {
  webdevelopment: async (page) => {
    await page.locator('.dv-page').waitFor();
    for (let i = 0; i < 5; i++) { await page.locator('.dv-files button').nth(i).click(); assert.equal(await page.locator('.dv-files button').nth(i).getAttribute('aria-pressed'), 'true'); }
    await page.locator('.dv-view-toggle button').nth(1).click(); assert.ok(await page.locator('.dv-device.is-phone').count());
    assert.equal(await page.locator('.dv-route-list button').count(), 24);
    await page.locator('.dv-filter button').nth(2).click(); const n = await page.locator('.dv-route-list button').count(); assert.ok(n > 0 && n < 24);
    await page.locator('.dv-route-list button').last().click(); assert.ok((await page.locator('.dv-response h3').innerText()).length > 2);
    await page.locator('.dv-layer>button').nth(2).click(); assert.equal(await page.locator('.dv-layer.is-open').count(), 1);
    await page.locator('.dv-tabs button').nth(3).click(); assert.equal(await page.locator('.dv-tabs button').nth(3).getAttribute('aria-selected'), 'true');
    await page.locator('.dv-urlbar button').nth(1).click(); assert.equal(await page.locator('.dv-tabs button').nth(4).getAttribute('aria-selected'), 'true');
    await page.locator('.dv-faq summary').first().click();
  },
  softwaredevelopment: async (page) => {
    await page.locator('.sw-page').waitFor();
    for (let i = 0; i < 5; i++) { await page.locator('.sw-modules button').nth(i).click(); assert.equal(await page.locator('.sw-nodes li').count(), 4); }
    assert.equal(await page.locator('.sw-card').count(), 24);
    await page.locator('.sw-card').nth(7).scrollIntoViewIfNeeded(); await page.locator('.sw-card').nth(7).click();
    assert.equal(await page.locator('.sw-detail h3').innerText(), (await page.locator('.sw-card').nth(7).locator('b').innerText()));
    for (let i = 0; i < 4; i++) { await page.locator('.sw-map-node').nth(i).click(); assert.equal(await page.locator('.sw-map-node').nth(i).getAttribute('aria-pressed'), 'true'); }
    await page.locator('.sw-case-list button').nth(2).click(); assert.equal(await page.locator('.sw-case-list button').nth(2).getAttribute('aria-pressed'), 'true');
    await page.locator('.sw-faq summary').first().click();
  },
  webdesign: async (page) => {
    await page.locator('.wd-page').waitFor();
    await page.locator('.wd-direction-nav button').nth(2).click();
    assert.equal(await page.locator('.wd-category-list button').count(), 24);
  },
};
for (const [route, check] of Object.entries(pages)) {
  for (const viewport of viewports) {
    const ctx = await browser.newContext({ viewport, isMobile: viewport.width < 768, hasTouch: viewport.width < 768 });
    const page = await ctx.newPage(), errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(`http://127.0.0.1:4173/${route}`, { waitUntil: 'load' });
    assert.equal(await page.locator('h1').count(), 1, 'hero h1 kept');
    await check(page);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${route} ${viewport.width} horizontal overflow`);
    if (viewport.width === 1440 || viewport.width === 390) {
      const main = page.locator('main').last();
      await main.scrollIntoViewIfNeeded();
      await page.evaluate(() => document.querySelectorAll('main img').forEach((i) => { i.loading = 'eager'; }));
      await page.waitForTimeout(900);
      await main.screenshot({ path: `${out}/qa-${route}-${viewport.width}.png` });
    }
    assert.deepEqual(errors, []);
    console.log(`${route} ${viewport.width}: pass`);
    await ctx.close();
  }
}
await browser.close();
