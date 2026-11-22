import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

// Static route entry documents let a Google/direct visit discover the correct
// JS + CSS immediately, without downloading/evaluating Home first. React Router
// still handles all in-app navigation. Keep entries in sync with src/App.jsx.
const routes = [
  ['', 'src/Home.jsx', 'Web, App, Software Development & Digital Marketing'],
  ['hometwo', 'src/homeTwo/HomeTwo.jsx', 'Digital Experiences'],
  ['about', 'src/AboutComponents/About.jsx', 'About Us'],
  ['webdevelopment', 'src/webDevelopment/webDevelopment.jsx', 'Web Development'],
  ['webdesign', 'src/WebDesign/webDesign.jsx', 'Web Design'],
  ['appdevelopment', 'src/appDevelopment/AppDevelopment.jsx', 'App Development'],
  ['softwaredevelopment', 'src/SoftwareDevelopment/softwareDevelopment.jsx', 'Software Development'],
  ['uiuxdesign', 'src/UiUxDesign/UiUxDevelopment.jsx', 'UI/UX Design'],
  ['contact', 'src/contactComponents/contact.jsx', 'Contact Us'],
  ['seo', 'src/marketing/SEO/SEO.jsx', 'SEO Services'],
  ['socialmediamarketing', 'src/marketing/socialMediaMarketing/socialMediaMarketing.jsx', 'Social Media Marketing'],
  ['contentmarketing', 'src/marketing/contentMarketing/contentMarketing.jsx', 'Content Marketing'],
  ['digitalmarketing', 'src/marketing/digitalMarketing/digitalMarketing.jsx', 'Digital Marketing'],
  ['faqs', 'src/pages/faqs.jsx', 'Frequently Asked Questions'],
  ['privacy', 'src/pages/privacypolacy.jsx', 'Privacy Policy'],
  ['termsandconditions', 'src/pages/termsandconditions.jsx', 'Terms and Conditions'],
];
const dist=path.resolve('dist');
const manifest=JSON.parse(await readFile(path.join(dist,'.vite/manifest.json'),'utf8'));
const template=await readFile(path.join(dist,'index.html'),'utf8');
const escape=value=>value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for(const [route,source,title] of routes){
  // Rollup may represent a shared dynamic facade (e.g. Home) by its chunk name.
  const candidates=Object.keys(manifest).filter(key=>manifest[key].isDynamicEntry&&manifest[key].name===path.basename(source,'.jsx'));
  const entry=manifest[source]?source:candidates.length===1?candidates[0]:null;
  if(!entry) throw new Error(`Missing or ambiguous route build entry: ${source}`);
  const visited=new Set(),scripts=new Set(),styles=new Set();
  function collect(key){
    if(visited.has(key))return;
    visited.add(key);
    const chunk=manifest[key];
    if(!chunk)throw new Error(`Missing chunk: ${key}`);
    scripts.add(chunk.file);
    (chunk.css||[]).forEach(file=>styles.add(file));
    (chunk.imports||[]).forEach(collect);
    // Never walk dynamicImports: these include deferred 3D and other routes.
  }
  collect(entry);
  const tags=[...scripts].filter(file=>!template.includes(`href="/${file}"`)).map(file=>`<link rel="modulepreload" crossorigin href="/${escape(file)}">`);
  tags.push(...[...styles].filter(file=>!template.includes(`href="/${file}"`)).map(file=>`<link rel="stylesheet" crossorigin href="/${escape(file)}">`));
  const url=`https://nexatechinnovation.in/${route}`;
  const fullTitle=route?`${title} | NexaTech Innovation`:`NexaTech Innovation | ${title}`;
  let html=template.replace('</head>',`${tags.join('\n    ')}\n  </head>`)
    .replace(/<title>[^<]*<\/title>/,`<title>${escape(fullTitle)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*/,`$1${url}`)
    .replace(/(<meta property="og:url" content=")[^"]*/,`$1${url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/,`$1${escape(fullTitle)}`);
  const directory=path.join(dist,route);
  await mkdir(directory,{recursive:true});
  await writeFile(path.join(directory,'index.html'),html);
}
// Netlify reads _redirects before netlify.toml, so each route is rewritten (200, no extra
// round trip) to its own document instead of falling through to the Home-preloading SPA fallback.
const rewrites=routes.filter(([route])=>route).flatMap(([route])=>[`/${route}  /${route}/index.html  200`,`/${route}/  /${route}/index.html  200`]);
await writeFile(path.join(dist,'_redirects'),rewrites.join('\n')+'\n');
console.log(`Prepared ${routes.length} route documents with targeted JS/CSS preloads.`);
