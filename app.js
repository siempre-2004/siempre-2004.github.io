'use strict';
(() => {
  const data=window.PORTFOLIO;
  let lang='zh',filter='all';
  try{if(localStorage.getItem('zh-portfolio-language')==='en')lang='en';}catch{}
  const $=s=>document.querySelector(s);
  const tr=k=>data.translations[lang][k]||k;
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const tagNames={'Team project':'团队项目','Level design':'关卡设计','Camera systems':'相机系统','Board game':'桌游','Game systems':'游戏系统','Cooperation':'合作机制','Geometry':'几何处理'};
  const tags=p=>p.tags.map(s=>`<span class="tag">${escape(lang==='zh'?(tagNames[s]||s):s)}</span>`).join('');
  function meshArt(){
    let paths='';
    const pt=(x,y)=>{const z=1.1*Math.exp(-1.6*x*x-.8*y*y);return[300+(x*.85+y*.48)*105,178+(y*.32-x*.22-z*.7)*105];};
    for(let i=0;i<=22;i++){
      const q=-1.8+i*3.6/22;let a='',b='';
      for(let j=0;j<=40;j++){let u=-1.8+j*3.6/40,p=pt(q,u),r=pt(u,q);a+=(j?'L':'M')+p[0].toFixed(2)+' '+p[1].toFixed(2);b+=(j?'L':'M')+r[0].toFixed(2)+' '+r[1].toFixed(2);}
      paths+=`<path d="${a}"/><path d="${b}"/>`;
    }
    let curve='';for(let j=0;j<=60;j++){const p=pt(0,-1.8+j*3.6/60);curve+=(j?'L':'M')+p[0]+' '+p[1];}
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" role="img" aria-label="${escape(data.projects.find(p=>p.id==='mesh').alt[lang])}"><rect width="600" height="360" fill="#dfe6d4"/><g fill="none" stroke="#6c826552" stroke-width=".9">${paths}</g><path d="${curve}" fill="none" stroke="#45622a" stroke-width="3"/><circle cx="300" cy="97" r="5" fill="#c1f66b" stroke="#45622a"/><text x="28" y="330" font-family="monospace" font-size="9" fill="#6c7a60" letter-spacing="1.5">${lang==='zh'?'局部变形 / 解析示意':'LOCAL DEFORMATION / ANALYTIC STUDY'}</text></svg>`;
  }
  const external=(url,label)=>`<a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
  function renderProjects(){
    let additionalStarted=false;
    $('#project-grid').innerHTML=data.projects.filter(p=>filter==='all'||p.category===filter).map(p=>{
      const group=p.additional&&!additionalStarted?`<div class="project-group-heading"><span class="eyebrow">${lang==='zh'?'更多作品 / ADDITIONAL WORK':'ADDITIONAL WORK'}</span><p>${lang==='zh'?'桌游规则、碰撞实验与几何处理。':'Tabletop rules, collision studies, and geometry.'}</p></div>`:'';
      if(p.additional)additionalStarted=true;
      return `${group}<article class="project ${p.featured?'featured':''}" data-project="${p.id}"><a class="project-image ${p.art?'mesh-art':''} ${p.cover?'project-cover':''}" href="${escape(p.caseStudy)}" aria-label="${tr('viewProject')}: ${escape(p.title[lang])}" ${p.art?'':'data-label="'+escape(p.title[lang])+'"'}>${p.art?meshArt():`<img src="./${escape(p.image)}" alt="${escape(p.alt[lang])}" loading="lazy" width="900" height="600"><span class="image-fade"></span>`}<span class="image-number">${p.n}</span><span class="image-action" aria-hidden="true">↗</span></a><div class="project-copy"><div class="project-meta"><span>${escape(p.type[lang])}</span>${p.featured?'<span>'+ (lang==='zh'?'重点项目':'FEATURED') +'</span>':''}</div><h3><a href="${escape(p.caseStudy)}">${escape(p.title[lang])}</a></h3><p class="project-description">${escape(p.description[lang])}</p><div class="tags">${tags(p)}</div><div class="project-links"><a href="${escape(p.caseStudy)}">${tr('caseStudy')} ↗</a>${p.originalSite?external(p.originalSite,tr('projectWebsite')):''}${p.repo?external(p.repo,tr('code')):''}</div></div></article>`;}).join('');
    $('#project-grid').querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>img.parentElement.classList.add('photo-fallback'),{once:true}));
  }
  function applyLanguage(){
    document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    document.title=lang==='zh'?'胡哲瀚 · 游戏设计与开发作品集':'Zhehan Hu — Worlds you can play';
    document.querySelector('meta[name=description]').content=lang==='zh'?'胡哲瀚的游戏设计与开发作品集：Unity 关卡、Unreal 叙事解谜、Arduino 街机、C++ 游戏 AI 与图形技术原型。':'Zhehan Hu — game design, gameplay programming, and graphics prototypes.';
    document.querySelectorAll('[data-i18n]').forEach(el=>{const t=data.translations[lang][el.dataset.i18n];if(t!==undefined)el.innerHTML=t;});
    $('#language').textContent=lang==='en'?'中文':'EN';$('#language').setAttribute('aria-label',lang==='en'?'切换至中文':'Switch to English');
    $('#world').setAttribute('aria-label',tr('playAria'));
    $('#portrait').alt=lang==='zh'?'胡哲瀚':'Zhehan Hu';
    $('header nav').setAttribute('aria-label',lang==='zh'?'主导航':'Main navigation');
    $('.filters').setAttribute('aria-label',lang==='zh'?'按项目方向筛选':'Filter projects');
    renderProjects();
    window.dispatchEvent(new CustomEvent('portfolio-language',{detail:{lang,strings:data.translations[lang]}}));
  }
  $('#language').addEventListener('click',()=>{lang=lang==='en'?'zh':'en';try{localStorage.setItem('zh-portfolio-language',lang);}catch{}applyLanguage();});
  document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{const on=b===button;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});renderProjects();}));
  $('#portrait').addEventListener('error',()=>{const f=$('#portrait').parentElement;f.classList.add('photo-fallback');f.dataset.label=lang==='zh'?'胡哲瀚':'Zhehan Hu';},{once:true});
  $('#year').textContent=String(new Date().getFullYear());
  applyLanguage();
  if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target);}},{threshold:.08});document.querySelectorAll('.section-heading,.about-copy,.about-visual,.contact-main').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}
})();
