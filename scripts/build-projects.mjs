import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const context={window:{}};vm.createContext(context);
for(const file of ['project-data.js','project.js'])vm.runInContext(await readFile(path.join(root,file),'utf8'),context);
const e=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ps=context.window.PROJECT_DETAILS;await mkdir(path.join(root,'projects'),{recursive:true});
for(let i=0;i<ps.length;i++){
 const p=ps[i];const html=`<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f5f5ef"><meta name="description" content="${e(p.intro.zh)}"><meta property="og:title" content="${e(p.title.zh)} · 胡哲瀚"><meta property="og:description" content="${e(p.summary.zh)}"><title>${e(p.title.zh)} · 胡哲瀚的作品集</title><link rel="icon" type="image/svg+xml" href="../assets/icon.svg"><link rel="stylesheet" href="../style.css"><link rel="stylesheet" href="../project.css"></head>
<body data-project="${e(p.id)}"><div id="case-app">${context.window.renderProject(p,ps[(i+1)%ps.length],'zh')}</div><dialog id="image-dialog" class="image-dialog" aria-labelledby="lightbox-caption"><div class="lightbox-toolbar"><span id="lightbox-count"></span><button type="button" id="lightbox-close" aria-label="关闭图片">×</button></div><img id="lightbox-image" alt=""><p id="lightbox-caption"></p><div class="lightbox-nav"><button id="lightbox-prev" type="button" aria-label="上一张图片">←</button><button id="lightbox-next" type="button" aria-label="下一张图片">→</button></div></dialog><script src="../project-data.js" defer></script><script src="../project.js" defer></script></body></html>`;
 await writeFile(path.join(root,'projects',p.slug+'.html'),html);
}
console.log(`Generated ${ps.length} static case-study pages.`);
