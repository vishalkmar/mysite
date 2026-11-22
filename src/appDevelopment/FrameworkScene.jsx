import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function screenTexture(name, accent) {
  const canvas=document.createElement('canvas');canvas.width=512;canvas.height=1024;
  const c=canvas.getContext('2d');
  c.fillStyle='#0b1525';c.fillRect(0,0,512,1024);
  const card=(x,y,w,h,color,r=20)=>{c.fillStyle=color;c.beginPath();c.roundRect(x,y,w,h,r);c.fill();};
  const text=(value,x,y,size,color='#edf6ff',weight=500)=>{c.fillStyle=color;c.font=`${weight} ${size}px system-ui`;c.fillText(value,x,y);};
  text('9:41',35,48,22);card(196,23,120,30,'#030710',18);
  text(name.toUpperCase(),35,125,23,accent,700);
  const flutter=name==='Flutter';
  text(flutter?'Move with intent.':'Find your people.',35,192,39,'#edf6ff',700);
  text(flutter?'A stronger everyday.':'A space to be yourself.',35,232,24,'#9eabc2');
  card(30,275,452,290,'#132b3c');
  if(flutter) {
    c.lineWidth=20;c.strokeStyle='#263f50';c.beginPath();c.arc(256,411,100,0,Math.PI*2);c.stroke();
    c.strokeStyle=accent;c.beginPath();c.arc(256,411,100,-Math.PI/2,Math.PI*.96);c.stroke();
    text('78%',200,425,49,accent,700);text('Weekly goal',192,464,22,'#bbcbd7');
  } else {
    const gradient=c.createLinearGradient(30,275,482,565);gradient.addColorStop(0,'#8494ef');gradient.addColorStop(1,'#d2c0ff');c.fillStyle=gradient;c.fillRect(50,295,412,250);
    text('MAKE',75,367,49,'#111e37',800);text('SOMETHING',75,425,40,'#111e37',800);text('MATTER.',75,490,49,'#111e37',800);
  }
  text(flutter?'Your next session':'From your circle',35,624,28,'#edf6ff',700);
  for(let i=0;i<3;i++){card(30,655+i*78,452,65,'#162235');card(48,670+i*78,35,35,accent,10);text((flutter?['Full body flow','Recovery & mobility','A moment to reset']:['Maya shared a new idea','Your design community','Continue the conversation'])[i],101,696+i*78,21);}
  card(30,916,452,55,accent);text(flutter?'Start your session':'Explore your feed',130,953,24,'#081222',700);
  card(185,995,142,6,'#cad9ea',4);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.minFilter=THREE.LinearFilter;return texture;
}

export default function FrameworkScene({active,framework}) {
  const hostRef=useRef(null), settings=useRef({active,framework}), controls=useRef(null);
  useEffect(()=>{settings.current={active,framework};controls.current?.();},[active,framework]);
  useEffect(()=>{
    const host=hostRef.current;
    let renderer;
    try {renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});} catch {return;}
    renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));
    renderer.outputColorSpace=THREE.SRGBColorSpace;host.appendChild(renderer.domElement);
    const scene=new THREE.Scene(), camera=new THREE.PerspectiveCamera(35,1,.1,100);camera.position.set(0,.3,11);
    const assembly=new THREE.Group();scene.add(assembly);
    const shape=new THREE.Shape();const w=2,h=4,r=.23;
    shape.moveTo(-w/2+r,-h/2);shape.lineTo(w/2-r,-h/2);shape.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);shape.lineTo(w/2,h/2-r);shape.quadraticCurveTo(w/2,h/2,w/2-r,h/2);shape.lineTo(-w/2+r,h/2);shape.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);shape.lineTo(-w/2,-h/2+r);shape.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
    const geometry=new THREE.ExtrudeGeometry(shape,{depth:.16,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:.035,bevelThickness:.035,curveSegments:8});
    const phones=[];
    for(const [i,name] of ['Flutter','React Native'].entries()) {
      const phone=new THREE.Group();
      const body=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color:i?'#5d6587':'#497784',metalness:.7,roughness:.3}));
      phone.add(body);
      const texture=screenTexture(name,i?'#acb8ff':'#78e7de');
      const screen=new THREE.Mesh(new THREE.PlaneGeometry(1.87,3.83),new THREE.MeshBasicMaterial({map:texture}));screen.position.z=.205;phone.add(screen);
      phone.position.set(i?.95:-1.05,i?-.25:.3,i?-.3:.2);phone.rotation.set(-.05,i?-.24:.2,i?-.12:.1);assembly.add(phone);phones.push(phone);
    }
    const ring=new THREE.Mesh(new THREE.TorusGeometry(2.9,.009,6,100),new THREE.MeshBasicMaterial({color:'#377e93',transparent:true,opacity:.5}));ring.rotation.x=1.15;ring.position.y=-1.7;scene.add(ring);
    scene.add(new THREE.HemisphereLight('#d9efff','#142031',3));const light=new THREE.DirectionalLight('#c9e8ff',4);light.position.set(3,5,5);scene.add(light);
    let frame=0,last=0,time=0,x=0,y=0,lost=false;
    const motion=matchMedia('(prefers-reduced-motion: reduce)');
    function draw(){
      const target=settings.current.framework==='flutter'?-.18:.18;
      assembly.rotation.y+=(target+x*.16-assembly.rotation.y)*.12;
      assembly.rotation.x+=(y*.08-assembly.rotation.x)*.12;
      phones.forEach((p,i)=>{p.position.y=(i?-.25:.3)+(motion.matches?0:Math.sin(time+i)*.045);});
      renderer.render(scene,camera);host.dataset.ready='true';
    }
    function tick(now){frame=0;if(!settings.current.active||document.hidden||lost)return;if(now-last>1000/30){time+=Math.min(now-last,80)/1000;last=now;draw();}frame=requestAnimationFrame(tick);}
    function sync(){cancelAnimationFrame(frame);frame=0;if(lost||!settings.current.active||document.hidden)return;last=performance.now();draw();if(!motion.matches)frame=requestAnimationFrame(tick);}
    function resize(){if(lost||!host.clientWidth||!host.clientHeight)return;camera.aspect=host.clientWidth/host.clientHeight;camera.updateProjectionMatrix();renderer.setSize(host.clientWidth,host.clientHeight);draw();}
    function move(e){if(e.pointerType==='touch'||motion.matches)return;const b=host.getBoundingClientRect();x=(e.clientX-b.left)/b.width-.5;y=(e.clientY-b.top)/b.height-.5;}
    function leave(){x=0;y=0;}
    function contextLost(e){e.preventDefault();lost=true;delete host.dataset.ready;sync();}
    const observer=new ResizeObserver(resize);observer.observe(host);controls.current=sync;
    host.addEventListener('pointermove',move,{passive:true});host.addEventListener('pointerleave',leave);document.addEventListener('visibilitychange',sync);motion.addEventListener('change',sync);renderer.domElement.addEventListener('webglcontextlost',contextLost);
    resize();sync();
    return ()=>{cancelAnimationFrame(frame);controls.current=null;observer.disconnect();host.removeEventListener('pointermove',move);host.removeEventListener('pointerleave',leave);document.removeEventListener('visibilitychange',sync);motion.removeEventListener('change',sync);renderer.domElement.removeEventListener('webglcontextlost',contextLost);const geometries=new Set(),materials=new Set();scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);});geometries.forEach(g=>g.dispose());materials.forEach(m=>{m.map?.dispose();m.dispose();});renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();delete host.dataset.ready;};
  },[]);
  return <div className="ap-three-scene" ref={hostRef} aria-hidden="true" data-framework={framework}/>;
}
