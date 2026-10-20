'use strict';
(() => {
  const canvas=document.getElementById('world');
  const ctx=canvas.getContext('2d');
  if(!ctx)return;
  const $=id=>document.getElementById(id);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let strings=window.PORTFOLIO.translations.en,playing=false,wireframe=false,paused=reduced.matches;
  let width=600,height=425,scale=52,yaw=.66,time=0,lastTime=0,raf=0,visible=true;
  let pointer={x:0,z:0,active:false},goal=null,score=0,finished=false,messageTimer=null;
  const keys=new Set(),ripples=[],particles=[],trail=[];
  const player={x:0,z:.9,dash:0,cooldown:0,moving:false};
  const crystalPositions=[[-2.4,-1.9],[1.9,-2.25],[2.7,.7],[-2.15,2.25],[.15,2.6]];
  let crystals=crystalPositions.map(([x,z],i)=>({x,z,i,collected:false}));
  const limit=3.52,N=22,vertices=[],faces=[];
  for(let iz=0;iz<=N;iz++)for(let ix=0;ix<=N;ix++)vertices.push({x:-3.8+7.6*ix/N,z:-3.8+7.6*iz/N,y:0,p:[0,0]});
  for(let iz=0;iz<N;iz++)for(let ix=0;ix<N;ix++){
    const a=iz*(N+1)+ix,b=a+1,c=a+N+1,d=c+1;
    if((ix+iz)%2){faces.push([a,b,c],[b,d,c]);}else{faces.push([a,b,d],[a,d,c]);}
  }
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  function elevation(x,z){
    let y=.08+.78*Math.exp(-.52*((x+1.5)**2+(z+.8)**2))+.56*Math.exp(-.9*((x-1.8)**2+(z-1.2)**2));
    y+=.14*Math.sin(x*.85+z*.4)+.10*Math.cos(z*.95-x*.35);
    y+=.055*Math.sin(x*1.4+time*.7)*Math.cos(z*1.4+time*.3);
    if(pointer.active&&!playing)y+=.8*Math.exp(-1.25*((x-pointer.x)**2+(z-pointer.z)**2));
    for(const r of ripples){const dist=Math.hypot(x-r.x,z-r.z);y+=Math.sin(dist*5-r.age*6)*Math.exp(-dist*.7-r.age*1.8)*r.power;}
    return y;
  }
  function project(x,y,z){
    const c=Math.cos(yaw),s=Math.sin(yaw),rx=x*c-z*s,rz=x*s+z*c;
    return [width*.5+rx*scale,height*.57+rz*scale*.48-y*scale*.9];
  }
  function path(points,fill,stroke,lineWidth=1){
    ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();
    if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lineWidth;ctx.stroke();}
  }
  function line(points,color,lineWidth=1){ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.strokeStyle=color;ctx.lineWidth=lineWidth;ctx.stroke();}
  function ellipse(x,y,rx,ry,color){ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fillStyle=color;ctx.fill();}
  function resize(){
    const box=canvas.getBoundingClientRect();width=Math.max(1,box.width);height=Math.max(1,box.height);
    const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    scale=Math.min(width/10.6,height/6.5);draw();
  }
  function drawCube(x,y,z,size,lift=0){
    const a=project(x-size,y+lift,z-size),b=project(x+size,y+lift,z-size),c=project(x+size,y+lift,z+size),d=project(x-size,y+lift,z+size);
    const A=project(x-size,y+lift+size*2,z-size),B=project(x+size,y+lift+size*2,z-size),C=project(x+size,y+lift+size*2,z+size),D=project(x-size,y+lift+size*2,z+size);
    path([d,c,C,D],'#e4edda','#66795a80',.8);path([b,c,C,B],'#afc598','#66795a80',.8);path([A,B,C,D],'#e9f4d8','#66795a80',.8);
    line([A,c],'#6f87583b',.6);
  }
  function drawCrystal(crystal){
    const y=elevation(crystal.x,crystal.z),ground=project(crystal.x,y+.02,crystal.z);
    const p=project(crystal.x,y+.48+Math.sin(time*2+crystal.i)*.08,crystal.z),r=scale*.115;
    ellipse(ground[0],ground[1],scale*.15,scale*.065,'#3b5c2220');
    const glow=ctx.createRadialGradient(p[0],p[1],0,p[0],p[1],r*5);glow.addColorStop(0,'#b9ec6b50');glow.addColorStop(1,'#b9ec6b00');ellipse(p[0],p[1],r*5,r*5,glow);
    const top=[p[0],p[1]-r*1.9],bottom=[p[0],p[1]+r*1.6],left=[p[0]-r,p[1]],right=[p[0]+r,p[1]];
    path([top,right,bottom],'#a6d94d','#6a923c',.8);path([top,left,bottom],'#d0f996','#6a923c',.8);line([top,p,bottom],'#eaffcd',.7);
    if(playing){ctx.fillStyle='#71845b';ctx.font='7px monospace';ctx.textAlign='center';ctx.fillText(String(crystal.i+1).padStart(2,'0'),ground[0],ground[1]+scale*.24);}
  }
  function drawPlayer(){
    const y=elevation(player.x,player.z),bob=player.moving?Math.sin(time*16)*.025:Math.sin(time*2)*.025;
    const p=project(player.x,y+.03,player.z);ellipse(p[0],p[1],scale*.21,scale*.08,'#29311b28');
    const bottom=project(player.x,y+.13+bob,player.z),top=project(player.x,y+.55+bob,player.z),w=scale*.18,h=bottom[1]-top[1];
    ctx.fillStyle='#303a28';ctx.beginPath();ctx.roundRect(top[0]-w,top[1],w*2,h,Math.min(w*.6,4));ctx.fill();
    ctx.fillStyle='#c1f66b';ctx.beginPath();ctx.roundRect(top[0]-w*.8,top[1]+h*.16,w*1.6,h*.29,2);ctx.fill();
    ellipse(top[0]-w*.3,top[1]+h*.3,scale*.022,scale*.032,'#344421');ellipse(top[0]+w*.3,top[1]+h*.3,scale*.022,scale*.032,'#344421');
    const step=player.moving?Math.sin(time*16)*scale*.035:0;
    line([[bottom[0]-w*.5,bottom[1]-1],[bottom[0]-w*.6,bottom[1]+scale*.1+step]],'#303a28',scale*.06);
    line([[bottom[0]+w*.5,bottom[1]-1],[bottom[0]+w*.6,bottom[1]+scale*.1-step]],'#303a28',scale*.06);
    line([[top[0],top[1]],[top[0],top[1]-scale*.09]],'#303a28',1);ellipse(top[0],top[1]-scale*.1,scale*.035,scale*.035,'#8fb64a');
  }
  function draw(){
    ctx.clearRect(0,0,width,height);
    yaw=playing?.66:.66+Math.sin(time*.1)*.045;
    const shadow=project(0,-.54,.2);ellipse(shadow[0],shadow[1],scale*4.1,scale*1.25,'#56603d08');
    // Small orientation marks keep the landscape grounded without a large UI.
    ctx.strokeStyle='#b7bfa833';ctx.lineWidth=.7;
    for(let x=-5;x<=5;x+=1)for(let z=-5;z<=5;z+=1){const p=project(x,-.5,z);ctx.beginPath();ctx.moveTo(p[0]-1.8,p[1]);ctx.lineTo(p[0]+1.8,p[1]);ctx.moveTo(p[0],p[1]-1.8);ctx.lineTo(p[0],p[1]+1.8);ctx.stroke();}
    for(const v of vertices){v.y=elevation(v.x,v.z);v.p=project(v.x,v.y,v.z);v.depth=v.x*Math.sin(yaw)+v.z*Math.cos(yaw);}
    const ordered=faces.map(f=>({f,depth:(vertices[f[0]].depth+vertices[f[1]].depth+vertices[f[2]].depth)/3})).sort((a,b)=>a.depth-b.depth);
    // A shallow cut edge makes the triangulated patch read like a floating island.
    const sides=[];
    for(let i=0;i<N;i++){
      sides.push([vertices[N*(N+1)+i],vertices[N*(N+1)+i+1]]);
      sides.push([vertices[i*(N+1)+N],vertices[(i+1)*(N+1)+N]]);
    }
    for(const [a,b]of sides)path([a.p,b.p,project(b.x,-.35,b.z),project(a.x,-.35,a.z)],'#dce4ce', '#a9b79a35',.5);
    for(const {f}of ordered){
      const a=vertices[f[0]],b=vertices[f[1]],c=vertices[f[2]],avg=(a.y+b.y+c.y)/3;
      const light=clamp(88-avg*5+(a.y-c.y)*11,77,93),sat=clamp(16+avg*12,13,36);
      path([a.p,b.p,c.p],wireframe?'#f5f5efc4':`hsl(83 ${sat}% ${light}%)`,wireframe?'#778c6260':'#74896240',.6);
    }
    // A green path across the surface echoes curve-guided geometric editing.
    const curve=[];for(let i=0;i<=80;i++){const z=-3.8+7.6*i/80,x=Math.sin(z*.8)*.65;curve.push(project(x,elevation(x,z)+.012,z));}
    line(curve,'#8cad60a6',1.25);
    if(!playing){drawCube(-3.0,elevation(-3,-1.7),-1.7,.19,.13+Math.sin(time*.7)*.09);drawCube(2.65,elevation(2.65,2.7),2.7,.13,.08);}
    if(goal&&playing){const p=project(goal.x,elevation(goal.x,goal.z)+.04,goal.z);ctx.beginPath();ctx.ellipse(p[0],p[1],scale*.15,scale*.07,0,0,Math.PI*2);ctx.strokeStyle='#698b3c';ctx.lineWidth=1;ctx.stroke();line([[p[0]-4,p[1]],[p[0]+4,p[1]]],'#698b3c',.8);}
    for(const t of trail){const p=project(t.x,elevation(t.x,t.z)+.05,t.z);ellipse(p[0],p[1],scale*.07,scale*.03,`rgba(112,153,56,${t.life*.3})`);}
    const objects=crystals.filter(c=>!c.collected).map(c=>({depth:c.x*Math.sin(yaw)+c.z*Math.cos(yaw),draw:()=>drawCrystal(c)}));
    objects.push({depth:player.x*Math.sin(yaw)+player.z*Math.cos(yaw),draw:drawPlayer});objects.sort((a,b)=>a.depth-b.depth).forEach(o=>o.draw());
    for(const p of particles){const q=project(p.x,p.y,p.z);ctx.globalAlpha=clamp(p.life,0,1);ctx.fillStyle=p.color;ctx.fillRect(q[0],q[1],p.size,p.size);}ctx.globalAlpha=1;
    const pole=project(-3.8,elevation(-3.8,3.8),3.8),poleTop=project(-3.8,elevation(-3.8,3.8)+.7,3.8);
    line([pole,poleTop],'#71815f',1);path([poleTop,[poleTop[0]+scale*.35,poleTop[1]+3],[poleTop[0],poleTop[1]+scale*.19]],'#b3d67b');
  }
  function message(text,duration=3300){
    clearTimeout(messageTimer);$('scene-message').innerHTML=text;$('scene-message').classList.add('visible');
    messageTimer=setTimeout(()=>$('scene-message').classList.remove('visible'),duration);
  }
  function updateText(){
    $('play').querySelector('[data-i18n]').textContent=playing?strings.exit:strings.play;
    $('world-mode').textContent=playing?strings.playMode:strings.surfaceMode;
    $('scene-hint').textContent=playing?strings.playHint:strings.sceneHint;
    $('motion-toggle').setAttribute('aria-label',paused?strings.resume:strings.pause);
    $('motion-toggle').setAttribute('aria-pressed',String(paused));$('motion-toggle').textContent=paused?'▶':'Ⅱ';
  }
  function burst(x,z){
    const y=elevation(x,z)+.45;
    for(let i=0;i<24;i++){const a=i*Math.PI*2/24;particles.push({x,y,z,vx:Math.cos(a)*(.6+Math.random()),vz:Math.sin(a)*(.6+Math.random()),vy:1+Math.random()*2,life:.8+Math.random()*.5,color:i%3?'#9ec958':'#d0efa4',size:1.5+Math.random()*2});}
    ripples.push({x,z,age:0,power:.14});
  }
  function restart(){
    crystals=crystalPositions.map(([x,z],i)=>({x,z,i,collected:false}));score=0;finished=false;goal=null;player.x=0;player.z=.9;player.dash=0;player.cooldown=0;keys.clear();particles.length=0;trail.length=0;$('score').textContent='0 / 5';
    message(strings.startMessage);draw();
  }
  function update(dt){
    time+=dt;
    if(playing){
      let sx=(keys.has('ArrowRight')||keys.has('d')?1:0)-(keys.has('ArrowLeft')||keys.has('a')?1:0),sz=(keys.has('ArrowDown')||keys.has('s')?1:0)-(keys.has('ArrowUp')||keys.has('w')?1:0);
      let dx=0,dz=0;
      if(sx||sz){const mag=Math.hypot(sx,sz);sx/=mag;sz/=mag;dx=sx*Math.cos(yaw)+sz*Math.sin(yaw);dz=-sx*Math.sin(yaw)+sz*Math.cos(yaw);goal=null;}
      else if(goal){const dist=Math.hypot(goal.x-player.x,goal.z-player.z);if(dist<.07)goal=null;else{dx=(goal.x-player.x)/dist;dz=(goal.z-player.z)/dist;}}
      player.moving=!!(dx||dz);player.cooldown=Math.max(0,player.cooldown-dt);player.dash=Math.max(0,player.dash-dt);
      const speed=player.dash>0?6.2:2.2,step=speed*dt;
      if(goal){const dist=Math.hypot(goal.x-player.x,goal.z-player.z);if(dist<step){player.x=goal.x;player.z=goal.z;goal=null;dx=0;dz=0;}}
      player.x=clamp(player.x+dx*step,-limit,limit);player.z=clamp(player.z+dz*step,-limit,limit);
      if(player.moving&&Math.random()<.5)trail.push({x:player.x,z:player.z,life:.7});
      for(const c of crystals)if(!c.collected&&Math.hypot(player.x-c.x,player.z-c.z)<.4){c.collected=true;score++;$('score').textContent=score+' / 5';burst(c.x,c.z);if(score<5)message(strings.collected+' · '+score+'/5',1000);}
      if(score===5&&!finished){finished=true;message(strings.finishMessage,6500);for(const pos of crystalPositions)burst(...pos);}
    }
    for(let i=ripples.length-1;i>=0;i--){ripples[i].age+=dt;if(ripples[i].age>3)ripples.splice(i,1);}
    for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.life-=dt;p.x+=p.vx*dt;p.z+=p.vz*dt;p.y+=p.vy*dt;p.vy-=4*dt;if(p.life<=0)particles.splice(i,1);}
    for(let i=trail.length-1;i>=0;i--){trail[i].life-=dt;if(trail[i].life<=0)trail.splice(i,1);}
  }
  function frame(now){
    raf=0;if(!visible||document.hidden)return;
    const dt=Math.min((now-lastTime)/1000||0,.04);lastTime=now;
    if(!paused){update(dt);draw();}
    if(!paused)raf=requestAnimationFrame(frame);
  }
  function run(){if(!raf&&visible&&!document.hidden&&!paused){lastTime=performance.now();raf=requestAnimationFrame(frame);}}
  function destination(event){
    const r=canvas.getBoundingClientRect(),px=event.clientX-r.left,py=event.clientY-r.top;
    // Invert the projected height field, then refine against the displayed mesh.
    let best=null,dist=Infinity;
    for(let x=-limit;x<=limit;x+=.13)for(let z=-limit;z<=limit;z+=.13){const p=project(x,elevation(x,z),z),d=(p[0]-px)**2+(p[1]-py)**2;if(d<dist){dist=d;best={x,z};}}
    return best;
  }
  canvas.addEventListener('pointermove',e=>{
    if(e.pointerType==='touch'&&!playing)return;
    const p=destination(e);if(p){pointer={...p,active:true};$('coordinates').textContent=`x ${p.x.toFixed(2)} · y ${p.z.toFixed(2)}`;if(paused)draw();}
  });
  canvas.addEventListener('pointerleave',()=>{pointer.active=false;if(paused)draw();});
  canvas.addEventListener('pointerdown',e=>{
    if(e.button!==0)return;
    const p=destination(e);if(!p)return;
    canvas.focus({preventScroll:true});
    if(playing){e.preventDefault();goal=p;if(paused){paused=false;updateText();run();}}
    else{pointer={...p,active:true};ripples.push({...p,age:0,power:.36});if(paused)draw();}
  });
  canvas.addEventListener('keydown',e=>{
    if(!playing)return;
    const k=e.key.length===1?e.key.toLowerCase():e.key;
    if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','w','a','s','d',' '].includes(k)){
      e.preventDefault();keys.add(k);
      if(k===' '&&player.cooldown<=0){player.dash=.22;player.cooldown=.8;ripples.push({x:player.x,z:player.z,age:0,power:.18});}
      if(paused){paused=false;updateText();run();}
    }
    if(k==='Escape')setPlaying(false);
  });
  window.addEventListener('keyup',e=>keys.delete(e.key.length===1?e.key.toLowerCase():e.key));
  canvas.addEventListener('blur',()=>keys.clear());window.addEventListener('blur',()=>keys.clear());
  function setPlaying(value){
    playing=value;goal=null;keys.clear();player.moving=false;pointer.active=false;
    $('playground').classList.toggle('is-playing',playing);$('scene-hud').hidden=!playing;
    $('play').querySelector('.play-icon').textContent=playing?'↶':'▶';
    if(playing){paused=false;restart();canvas.focus({preventScroll:true});}else{$('scene-message').classList.remove('visible');paused=reduced.matches;}
    updateText();draw();run();
  }
  $('play').addEventListener('click',()=>setPlaying(!playing));
  $('restart').addEventListener('click',()=>{restart();canvas.focus({preventScroll:true});if(paused){paused=false;updateText();run();}});
  $('mesh-toggle').addEventListener('click',()=>{wireframe=!wireframe;$('mesh-toggle').setAttribute('aria-pressed',String(wireframe));draw();});
  $('motion-toggle').addEventListener('click',()=>{paused=!paused;keys.clear();updateText();if(paused&&raf){cancelAnimationFrame(raf);raf=0;}run();});
  window.addEventListener('portfolio-language',e=>{strings=e.detail.strings;updateText();$('scene-message').classList.remove('visible');});
  document.addEventListener('visibilitychange',()=>{keys.clear();if(document.hidden){if(raf)cancelAnimationFrame(raf);raf=0;}else run();});
  if('IntersectionObserver'in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)run();else{keys.clear();if(raf)cancelAnimationFrame(raf);raf=0;}},{rootMargin:'100px'}).observe(canvas);
  reduced.addEventListener('change',()=>{if(!playing){paused=reduced.matches;updateText();draw();run();}});
  new ResizeObserver(resize).observe(canvas);resize();updateText();run();
})();
