'use strict';
// Ambient motion uses the same 2D sprites as the portfolio's game projects.
// It stays separate from the terrain projection and fragment-game logic.
(() => {
  const canvas=document.getElementById('ambient');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  if(!ctx)return;
  const world=document.getElementById('world');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const colors=['#8cae50','#b7de72','#ce926f','#83a2b7'];
  const motes=[],sparks=[];
  let width=1,height=1,time=0,last=0,raf=0,paused=reduced.matches,playing=false;
  let measured=false,zones=[],worldBox=null,lastPointer=null,hovered=null;
  const pointer={x:-1000,y:-1000};
  const textures={};
  for(const [name,src] of Object.entries({tiles:'./assets/motion/skytiles.png',prairie:'./assets/motion/prairie-tiles.png',wolf:'./assets/motion/wolf.png'})){
    const im=new Image();im.onload=()=>{textures[name]=im;if(paused)paint();};im.src=src;
  }
  const rand=(a,b)=>a+Math.random()*(b-a);
  const blocked=(x,y)=>zones.some(r=>x>r.left&&x<r.right&&y>r.top&&y<r.bottom);
  function measure(){
    zones=[...document.querySelectorAll('.hero-copy,.hero-footer,.section-heading,.project-copy,.project-group-heading,.about-copy,.about-visual,.contact-main,.contact-bottom,.header,.footer,.filters,.work-bottom,.scene-top,.scene-controls,.scene-sticker,.scene-hud,.scene-message.visible,.playground figcaption')]
      .filter(el=>el.getClientRects().length)
      .map(el=>{const r=el.getBoundingClientRect();return {left:r.left-12,top:r.top-10,right:r.right+12,bottom:r.bottom+10};});
    worldBox=world?.getBoundingClientRect();measured=true;
  }
  function seed(){
    motes.length=0;
    const count=width<600?34:76;
    for(let i=0;i<count;i++)motes.push({x:rand(8,width-8),y:rand(8,height-8),phase:rand(0,Math.PI*2),speed:rand(3,12),size:rand(1.5,3.5),color:colors[i%4],kind:i%5});
  }
  function resize(){
    width=innerWidth;height=innerHeight;
    const dpr=Math.min(devicePixelRatio||1,2);
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);seed();measured=false;paint();
  }
  function emit(x,y,count=12,strength=1){
    if(paused||reduced.matches)return;
    for(let i=0;i<count;i++){
      const a=rand(0,Math.PI*2),speed=rand(12,60)*strength;
      const life=rand(.45,1.25);
      sparks.push({x,y,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,life,total:life,size:rand(1.5,3.5),color:colors[i%4]});
    }
    if(sparks.length>160)sparks.splice(0,sparks.length-160);
  }
  function sprite(image,sx,sy,sw,sh,x,y,w,h,flip=false){
    if(!image||blocked(x,y))return;
    ctx.save();ctx.translate(Math.round(x),Math.round(y));if(flip)ctx.scale(-1,1);
    ctx.imageSmoothingEnabled=false;ctx.drawImage(image,sx,sy,sw,sh,-w/2,-h/2,w,h);ctx.restore();
  }
  function label(text,x,y){
    if(blocked(x,y)||worldBox.width<420)return;
    ctx.fillStyle='#7d856c';ctx.font='8px ui-monospace,monospace';ctx.textAlign='center';ctx.fillText(text,x,y);
  }
  function projectFragments(){
    if(!worldBox||worldBox.bottom<0||worldBox.top>height||playing)return;
    const k=Math.min(1,worldBox.width/620);
    const origin={x:worldBox.left+worldBox.width*.22,y:worldBox.top+worldBox.height*.105};
    const tiles=[[0,0],[16,0],[32,0],[80,0],[64,16],[112,32]];
    for(let i=0;i<tiles.length;i++){
      const a=i*Math.PI/3+time*.12,r=(i%2?34:24)*k;
      let x=origin.x+Math.cos(a)*r,y=origin.y+Math.sin(a)*r*.48+Math.sin(time*.8+i)*4;
      const dx=x-pointer.x,dy=y-pointer.y,d=Math.hypot(dx,dy);
      if(d<90&&d>1){const push=(1-d/90)*12;x+=dx/d*push;y+=dy/d*push;}
      ctx.globalAlpha=.72;
      sprite(textures.tiles,...tiles[i],16,16,x,y,15*k,15*k);
    }
    ctx.globalAlpha=1;label('SkyTiles',origin.x,origin.y+36*k);

    const center={x:worldBox.left+worldBox.width*.65,y:worldBox.top+worldBox.height*.17};
    const route=t=>({x:center.x+Math.cos(t*.45)*51*k,y:center.y+Math.sin(t*.9)*10*k});
    // A small route, two sheep, and a following wolf echo the actual AI project.
    ctx.beginPath();for(let i=0;i<36;i++){const p=route(i*Math.PI/8);i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y);}
    ctx.strokeStyle='#a5b98d55';ctx.setLineDash([2,5]);ctx.lineWidth=.8;ctx.stroke();ctx.setLineDash([]);
    const sheep=route(time),other=route(time+3.5),wolf=route(time-2.5);
    ctx.globalAlpha=.86;
    sprite(textures.prairie,0,60,50,30,sheep.x,sheep.y-4*k,29*k,17.4*k,Math.sin(time*.45)<0);
    sprite(textures.prairie,50,60,50,30,other.x,other.y+5*k,24*k,14.4*k,Math.sin((time+3.5)*.45)<0);
    sprite(textures.wolf,0,0,50,30,wolf.x,wolf.y+13*k,29*k,17.4*k,Math.sin((time-2.5)*.45)<0);
    ctx.globalAlpha=1;label('AI Prairie',center.x,center.y+37*k);
  }
  function paint(){
    if(!measured)measure();
    ctx.clearRect(0,0,width,height);
    if(reduced.matches)return;
    for(const p of motes){
      if(blocked(p.x,p.y))continue;
      const alpha=.22+.24*(.5+.5*Math.sin(time*.7+p.phase));
      ctx.globalAlpha=alpha;ctx.fillStyle=p.color;ctx.strokeStyle=p.color;
      const x=Math.round(p.x),y=Math.round(p.y);
      if(p.kind===0){ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(x-3,y);ctx.lineTo(x+3,y);ctx.moveTo(x,y-3);ctx.lineTo(x,y+3);ctx.stroke();}
      else{ctx.fillRect(x,y,p.size,p.size);if(p.kind===2){ctx.globalAlpha=alpha*.3;ctx.fillRect(x-5,y+3,2,2);}}
    }
    ctx.globalAlpha=1;projectFragments();
    for(const p of sparks){
      if(blocked(p.x,p.y))continue;
      ctx.globalAlpha=Math.max(0,p.life/p.total)*.7;ctx.fillStyle=p.color;
      ctx.fillRect(Math.round(p.x),Math.round(p.y),p.size,p.size);
    }
    ctx.globalAlpha=1;
  }
  function update(dt){
    time+=dt;
    for(const p of motes){
      p.x+=Math.sin(time*.2+p.phase)*dt*4;p.y-=p.speed*dt;
      if(p.y<-8){p.y=height+8;p.x=rand(5,width-5);}
      if(p.x<-8)p.x=width+8;if(p.x>width+8)p.x=-8;
      const dx=p.x-pointer.x,dy=p.y-pointer.y,d=Math.hypot(dx,dy);
      if(d<75&&d>1){const push=(1-d/75)*dt*28;p.x+=dx/d*push;p.y+=dy/d*push;}
    }
    for(let i=sparks.length-1;i>=0;i--){const p=sparks[i];p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=18*dt;if(p.life<=0)sparks.splice(i,1);}
  }
  function frame(now){
    raf=0;if(paused||document.hidden||reduced.matches)return;
    const elapsed=now-last;
    if(elapsed>=1000/30){update(Math.min(elapsed/1000,.05));paint();last=now;}
    raf=requestAnimationFrame(frame);
  }
  function run(){if(!raf&&!paused&&!document.hidden&&!reduced.matches){last=performance.now();raf=requestAnimationFrame(frame);}}
  function motion(value){
    paused=value;canvas.dataset.motion=paused?'paused':'running';
    if(paused&&raf){cancelAnimationFrame(raf);raf=0;}
    paint();run();
  }
  window.addEventListener('pointermove',e=>{
    if(e.pointerType==='touch')return;
    pointer.x=e.clientX;pointer.y=e.clientY;
    if(lastPointer&&Math.hypot(pointer.x-lastPointer.x,pointer.y-lastPointer.y)>12){
      if(!blocked(pointer.x,pointer.y))emit(pointer.x,pointer.y,2,.25);
      lastPointer={...pointer};
    }else if(!lastPointer)lastPointer={...pointer};
    const card=e.target instanceof Element?e.target.closest('.project-image'):null;
    if(card!==hovered){hovered=card;if(card){const r=card.getBoundingClientRect();emit(r.right+5,r.top+12,10,.7);}}
  },{passive:true});
  document.addEventListener('pointerleave',()=>{pointer.x=-1000;pointer.y=-1000;lastPointer=null;});
  window.addEventListener('pointerdown',e=>{
    if(e.button!==0||!(e.target instanceof Element)||e.target.closest('#world'))return;
    emit(e.clientX,e.clientY,14,.8);
  },{passive:true});
  window.addEventListener('world-collect',e=>emit(e.detail.x,e.detail.y,32,1.5));
  window.addEventListener('world-touch',e=>emit(e.detail.x,e.detail.y,18,1));
  window.addEventListener('portfolio-motion',e=>{playing=e.detail.playing;motion(e.detail.paused);});
  window.addEventListener('portfolio-language',()=>{measured=false;});
  window.addEventListener('scroll',()=>{measured=false;},{passive:true});
  window.addEventListener('resize',resize);
  document.addEventListener('visibilitychange',()=>{if(document.hidden){if(raf)cancelAnimationFrame(raf);raf=0;}else run();});
  reduced.addEventListener('change',()=>motion(reduced.matches));
  const grid=document.getElementById('project-grid');
  if(grid)new MutationObserver(()=>{measured=false;}).observe(grid,{childList:true});
  resize();motion(paused);
})();
