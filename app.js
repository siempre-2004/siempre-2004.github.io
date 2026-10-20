'use strict';
(() => {
  const data=window.PORTFOLIO;
  let lang='en',filter='all',currentProject=null,lastFocus=null;
  try{if(localStorage.getItem('zh-portfolio-language')==='zh')lang='zh';}catch{}
  const $=s=>document.querySelector(s);
  const tr=k=>data.translations[lang][k]||k;
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const assetURL=path=>path.startsWith('data:')?path:'./'+path;
  const tags=p=>p.tags.map(s=>`<span class="tag">${escape(s==='Team project'&&lang==='zh'?'团队项目':s)}</span>`).join('');
  function meshArt(){
    let paths='';
    const pt=(x,y)=>{const z=1.1*Math.exp(-1.6*x*x-.8*y*y);return[300+(x*.85+y*.48)*105,178+(y*.32-x*.22-z*.7)*105];};
    for(let i=0;i<=22;i++){
      const q=-1.8+i*3.6/22;let a='',b='';
      for(let j=0;j<=40;j++){let u=-1.8+j*3.6/40,p=pt(q,u),r=pt(u,q);a+=(j?'L':'M')+p[0].toFixed(2)+' '+p[1].toFixed(2);b+=(j?'L':'M')+r[0].toFixed(2)+' '+r[1].toFixed(2);}
      paths+=`<path d="${a}"/><path d="${b}"/>`;
    }
    let curve='';for(let j=0;j<=60;j++){const p=pt(0,-1.8+j*3.6/60);curve+=(j?'L':'M')+p[0]+' '+p[1];}
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" role="img" aria-label="${escape(data.projects[6].alt[lang])}"><rect width="600" height="360" fill="#dfe6d4"/><g fill="none" stroke="#6c826552" stroke-width=".9">${paths}</g><path d="${curve}" fill="none" stroke="#45622a" stroke-width="3"/><circle cx="300" cy="97" r="5" fill="#c1f66b" stroke="#45622a"/><text x="28" y="330" font-family="monospace" font-size="9" fill="#6c7a60" letter-spacing="1.5">LOCAL DEFORMATION / ANALYTIC STUDY</text></svg>`;
  }
  const external=(url,label)=>`<a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
  function renderProjects(){
    $('#project-grid').innerHTML=data.projects.filter(p=>filter==='all'||p.category===filter).map(p=>`<article class="project ${p.featured?'featured':''}"><button class="project-image ${p.art?'mesh-art':''}" data-project="${p.id}" aria-label="${tr('viewProject')}: ${escape(p.title[lang])}" ${p.art?'':'data-label="'+escape(p.title[lang])+'"'}>${p.art?meshArt():`<img src="${assetURL(p.image)}" alt="${escape(p.alt[lang])}" loading="lazy" width="900" height="600"><span class="image-fade"></span>`}<span class="image-number">${p.n}</span><span class="image-action" aria-hidden="true">↗</span></button><div class="project-copy"><div class="project-meta"><span>${escape(p.type[lang])}</span>${p.featured?'<span>'+ (lang==='zh'?'重点项目':'FEATURED') +'</span>':''}</div><h3>${escape(p.title[lang])}</h3><p class="project-description">${escape(p.description[lang])}</p><div class="tags">${tags(p)}</div><div class="project-links"><button type="button" data-project="${p.id}">${tr('details')} ↗</button>${p.caseStudy?external(p.caseStudy,tr('caseStudy')):''}${p.repo?external(p.repo,tr('code')):''}</div></div></article>`).join('');
    $('#project-grid').querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>img.parentElement.classList.add('photo-fallback'),{once:true}));
  }
  function openProject(id){
    const p=data.projects.find(p=>p.id===id);if(!p)return;
    currentProject=id;lastFocus=document.activeElement;
    $('#dialog-content').innerHTML=`${p.art?`<div class="dialog-image mesh-art">${meshArt()}</div>`:`<img class="dialog-image" src="${assetURL(p.image)}" alt="${escape(p.alt[lang])}">`}<div class="dialog-body"><div class="eyebrow">${p.n} / ${escape(p.type[lang])}</div><h2 id="dialog-title">${escape(p.title[lang])}</h2><p>${escape(p.notes[lang])}</p><div class="dialog-label">${tr('focus')}</div><ul>${p.bullets[lang].map(b=>'<li>'+escape(b)+'</li>').join('')}</ul><div class="tags">${tags(p)}</div><div class="project-links">${p.caseStudy?external(p.caseStudy,tr('caseStudy')):''}${p.repo?external(p.repo,tr('code')):''}</div></div>`;
    const d=$('#project-dialog');if(!d.open)d.showModal();
    document.body.classList.add('dialog-open');$('#dialog-close').focus();
  }
  function applyLanguage(){
    document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    document.querySelectorAll('[data-i18n]').forEach(el=>{const t=data.translations[lang][el.dataset.i18n];if(t!==undefined)el.innerHTML=t;});
    $('#language').textContent=lang==='en'?'中文':'EN';$('#language').setAttribute('aria-label',lang==='en'?'切换至中文':'Switch to English');
    $('#world').setAttribute('aria-label',tr('playAria'));$('#dialog-close').setAttribute('aria-label',lang==='zh'?'关闭项目':'Close project');
    renderProjects();if(currentProject&&$('#project-dialog').open)openProject(currentProject);
    window.dispatchEvent(new CustomEvent('portfolio-language',{detail:{lang,strings:data.translations[lang]}}));
  }
  $('#language').addEventListener('click',()=>{lang=lang==='en'?'zh':'en';try{localStorage.setItem('zh-portfolio-language',lang);}catch{}applyLanguage();});
  document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{const on=b===button;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});renderProjects();}));
  $('#project-grid').addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(b)openProject(b.dataset.project);});
  $('#dialog-close').addEventListener('click',()=>$('#project-dialog').close());
  $('#project-dialog').addEventListener('click',e=>{if(e.target===$('#project-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
  $('#project-dialog').addEventListener('close',()=>{currentProject=null;document.body.classList.remove('dialog-open');if(lastFocus?.isConnected)lastFocus.focus();});
  $('#portrait').addEventListener('error',()=>{const f=$('#portrait').parentElement;f.classList.add('photo-fallback');f.dataset.label='Zhehan Hu';},{once:true});
  $('#year').textContent=String(new Date().getFullYear());
  applyLanguage();
  if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target);}},{threshold:.08});document.querySelectorAll('.section-heading,.about-copy,.about-visual,.contact-main').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}
})();
