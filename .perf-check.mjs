import { chromium } from 'file:///C:/Users/DELL/AppData/Local/npm-cache/_npx/5c6d8c4f680fcd0a/node_modules/playwright/index.mjs';
import fs from 'node:fs';
const browser = await chromium.launch({channel:'chrome',headless:true});
const results=[];
for(const path of ['/','/webdevelopment','/webdesign','/softwaredevelopment']) {
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const page=await context.newPage();
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:4173'+(path==='/'?path:path+'/'),{waitUntil:'load'});
  await page.locator('h1').first().waitFor();
  await page.waitForTimeout(1200);
  results.push({path,...await page.evaluate(()=>({js:performance.getEntriesByType('resource').filter(r=>r.name.endsWith('.js')).reduce((s,r)=>s+r.decodedBodySize,0),css:performance.getEntriesByType('resource').filter(r=>r.name.endsWith('.css')).reduce((s,r)=>s+r.decodedBodySize,0),scripts:performance.getEntriesByType('resource').filter(r=>r.name.endsWith('.js')).map(r=>r.name.split('/').pop()),overflow:document.documentElement.scrollWidth>innerWidth})),errors});
  await context.close();
}
fs.writeFileSync(process.argv[2]||'.perf-results.json',JSON.stringify(results,null,2));
console.log(JSON.stringify(results));
await browser.close();
