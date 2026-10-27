'use strict';
// A page-wide field of fine particles. The terrain and game keep their own canvas.
(() => {
  const canvas = document.getElementById('ambient');
  const ctx = canvas?.getContext('2d');
  if (!ctx) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = { x: -1000, y: -1000 };
  const motes = [], sparks = [], rings = [];
  let width = 1, height = 1, time = 0, last = 0, raf = 0;
  let paused = reduced.matches, measured = false, zones = [], lastTrail = 0;
  let dark = document.documentElement.dataset.theme === 'dark';
  const rand = (a, b) => a + Math.random() * (b - a);
  const blocked = (x, y) => zones.some(r => x > r.left && x < r.right && y > r.top && y < r.bottom);
  function measure() {
    // Leave the artwork and reading areas clear; particles occupy the spaces between them.
    zones = [...document.querySelectorAll('.header,.footer,.hero h1,.hero-intro,.hero-actions,.eyebrow,.hero-footer,.section-heading,.project-image,.project-copy,.project-group-heading,.about-visual,.about-copy,.contact-main,.contact-bottom,.filters,.work-bottom,.scene-top,.scene-controls,.scene-sticker,.scene-hud,.scene-message.visible,.playground figcaption,.case-top,.case-figure,.case-sidebar,.case-intro,.case-facts,.case-cards,.case-section h2,.case-lead,.case-flow,.case-code,.case-table-wrap,.case-resources,.case-next')]
      .filter(el => el.getClientRects().length)
      .map(el => { const r = el.getBoundingClientRect(); return {left:r.left-7, top:r.top-5, right:r.right+7, bottom:r.bottom+5}; });
    measured = true;
  }
  function resize() {
    width = innerWidth; height = innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    motes.length = 0;
    const count = Math.min(width < 600 ? 60 : 145, Math.round(width * height / 7800));
    for (let i = 0; i < count; i++) motes.push({ x:rand(0,width), y:rand(0,height), phase:rand(0,Math.PI*2), speed:rand(3,11), radius:rand(.6,1.6), accent:i%5===0 });
    measured = false; paint();
  }
  function dot(x, y, radius, alpha, accent = false) {
    ctx.globalAlpha = alpha;
    ctx.fillStyle = dark ? (accent ? '#c1f66b' : '#b4c3ac') : (accent ? '#789c43' : '#788675');
    ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
  }
  function emit(x, y, count = 12, power = 1) {
    if (paused || reduced.matches) return;
    for (let i = 0; i < count; i++) {
      const a = rand(0,Math.PI*2), speed = rand(9,40)*power, life = rand(.5,1.2);
      sparks.push({x,y,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,life,total:life,radius:rand(.6,1.3)});
    }
    if (sparks.length > 100) sparks.splice(0,sparks.length-100);
  }
  function paint() {
    ctx.clearRect(0,0,width,height);
    if (reduced.matches) return;
    if (!measured) measure();
    for (const p of motes) {
      if (blocked(p.x,p.y)) continue;
      const near = Math.max(0,1-Math.hypot(p.x-pointer.x,p.y-pointer.y)/170);
      const alpha = (dark?.26:.22)+(.18+.16*near)*(.5+.5*Math.sin(time*.65+p.phase));
      if (dark && p.accent) {
        const glow = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,7);
        glow.addColorStop(0,'#c1f66b16'); glow.addColorStop(1,'#c1f66b00');
        ctx.globalAlpha = 1; ctx.fillStyle = glow; ctx.fillRect(p.x-7,p.y-7,14,14);
      }
      dot(p.x,p.y,p.radius,alpha,p.accent);
      if (near > .2 && Math.hypot(p.x-pointer.x,p.y-pointer.y) < 100 && !blocked(pointer.x,pointer.y)) {
        ctx.globalAlpha = near * (dark?.12:.09); ctx.strokeStyle = dark ? '#c1f66b' : '#6c8654'; ctx.lineWidth = .65;
        ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(pointer.x,pointer.y); ctx.stroke();
      }
    }
    for (const p of sparks) if (!blocked(p.x,p.y)) dot(p.x,p.y,p.radius,(p.life/p.total)*.6,true);
    for (const r of rings) {
      ctx.globalAlpha = Math.max(0,r.life)*.2; ctx.strokeStyle = dark ? '#c1f66b' : '#73974c'; ctx.lineWidth = .75;
      ctx.beginPath(); ctx.arc(r.x,r.y,8+(1-r.life)*30,0,Math.PI*2); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  function update(dt) {
    time += dt;
    for (const p of motes) {
      p.x += Math.sin(time*.18+p.phase)*dt*3; p.y -= p.speed*dt;
      const dx=p.x-pointer.x,dy=p.y-pointer.y,d=Math.hypot(dx,dy);
      if (d<100 && d>1) { const push=(1-d/100)*dt*14; p.x+=dx/d*push; p.y+=dy/d*push; }
      if (p.y < -8) {p.y=height+8;p.x=rand(0,width);}
      if (p.x < -8) p.x=width+8; if (p.x > width+8) p.x=-8;
    }
    for (let i=sparks.length-1;i>=0;i--) {const p=sparks[i];p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.life<=0)sparks.splice(i,1);}
    for (let i=rings.length-1;i>=0;i--) {rings[i].life-=dt*1.5;if(rings[i].life<=0)rings.splice(i,1);}
  }
  function frame(now) {
    raf=0; if(paused || document.hidden || reduced.matches)return;
    const elapsed=now-last;
    if(elapsed>=1000/30){update(Math.min(elapsed/1000,.05));paint();last=now;}
    raf=requestAnimationFrame(frame);
  }
  function run() {if(!raf&&!paused&&!document.hidden&&!reduced.matches){last=performance.now();raf=requestAnimationFrame(frame);}}
  function motion(value) {
    paused=value;measured=false;canvas.dataset.motion=paused?'paused':'running';
    if(paused&&raf){cancelAnimationFrame(raf);raf=0;}
    paint();run();
  }
  window.addEventListener('pointermove',e=>{
    if(e.pointerType==='touch')return;
    pointer.x=e.clientX;pointer.y=e.clientY;
    const now=performance.now();
    if(now-lastTrail>55&&!blocked(pointer.x,pointer.y)){emit(pointer.x,pointer.y,1,.2);lastTrail=now;}
  },{passive:true});
  document.addEventListener('pointerleave',()=>{pointer.x=-1000;pointer.y=-1000;});
  window.addEventListener('pointerdown',e=>{
    if(e.button!==0||!(e.target instanceof Element)||e.target.closest('#world'))return;
    emit(e.clientX,e.clientY,10,.8);
    if(!paused&&!reduced.matches&&!blocked(e.clientX,e.clientY))rings.push({x:e.clientX,y:e.clientY,life:1});
  },{passive:true});
  window.addEventListener('world-collect',e=>emit(e.detail.x,e.detail.y,24,1.4));
  window.addEventListener('world-touch',e=>emit(e.detail.x,e.detail.y,12,.8));
  window.addEventListener('portfolio-motion',e=>motion(e.detail.paused));
  window.addEventListener('portfolio-theme',()=>{dark=document.documentElement.dataset.theme==='dark';paint();});
  window.addEventListener('portfolio-language',()=>{measured=false;if(paused)paint();});
  window.addEventListener('scroll',()=>{measured=false;if(paused)paint();},{passive:true});
  window.addEventListener('resize',resize);
  window.addEventListener('blur',()=>{pointer.x=-1000;pointer.y=-1000;});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){if(raf)cancelAnimationFrame(raf);raf=0;}else run();});
  reduced.addEventListener('change',()=>motion(reduced.matches));
  const content=document.getElementById('project-grid')||document.getElementById('case-app');
  if(content){new MutationObserver(()=>{measured=false;}).observe(content,{childList:true});new ResizeObserver(()=>{measured=false;}).observe(content);}
  resize();motion(paused);
})();
