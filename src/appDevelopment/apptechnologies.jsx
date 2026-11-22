import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
const FrameworkScene=lazy(()=>import('./FrameworkScene'));

export default function AppTechnologies(){
  const host=useRef(null);
  const [ready,setReady]=useState(false);
  const [active,setActive]=useState(false);
  const [framework,setFramework]=useState('flutter');
  useEffect(()=>{
    let nearby=false;
    const sync=()=>setActive(nearby&&!document.hidden);
    const observer=new IntersectionObserver(([entry])=>{nearby=entry.isIntersecting;if(nearby)setReady(true);sync();},{rootMargin:'150px'});
    observer.observe(host.current);document.addEventListener('visibilitychange',sync);
    return ()=>{observer.disconnect();document.removeEventListener('visibilitychange',sync);};
  },[]);
  function preview(value) {
    setFramework(value);
    if(matchMedia('(max-width: 760px)').matches) host.current.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }
  return <section className="ap-frameworks ap-shell" aria-labelledby="framework-title">
    <div className="ap-section-heading"><p className="ap-eyebrow">THE CRAFT BEHIND THE SCREEN</p><h2 id="framework-title">Two powerful foundations.<br/><em>Your kind of experience.</em></h2><p>We choose the stack around your product, integrations and team—not a one-size-fits-all promise.</p></div>
    <div className="ap-framework-layout">
      <div className="ap-framework-cards">
        <article className={`ap-framework-card ${framework==='flutter'?'is-selected':''}`}><SiFlutter className="ap-framework-logo"/><div><span className="ap-eyebrow">DART · CROSS-PLATFORM</span><h3>Flutter</h3><p>A cohesive visual language, custom widgets and expressive motion across your mobile experience.</p><ul><li>Brand-led UI & interactive experiences</li><li>A shared foundation for Android and iOS</li><li>Native integrations for your product's needs</li></ul><div className="ap-framework-actions"><button type="button" onClick={()=>preview('flutter')} aria-pressed={framework==='flutter'}>Preview Flutter</button><a href="https://docs.flutter.dev/platform-integration" target="_blank" rel="noreferrer">Explore Flutter</a></div></div></article>
        <article className={`ap-framework-card ${framework==='react'?'is-selected':''}`}><FaReact className="ap-framework-logo"/><div><span className="ap-eyebrow">REACT · NATIVE COMPONENTS</span><h3>React Native</h3><p>Familiar React thinking, native platform components and thoughtful details for each operating system.</p><ul><li>React & TypeScript product development</li><li>Shared logic, platform-aware interfaces</li><li>Native modules and connected services</li></ul><div className="ap-framework-actions"><button type="button" onClick={()=>preview('react')} aria-pressed={framework==='react'}>Preview React Native</button><a href="https://reactnative.dev/docs/intro-react-native-components" target="_blank" rel="noreferrer">Explore React Native</a></div></div></article>
      </div>
      <div className="ap-framework-visual" ref={host}><span className="ap-visual-heading">ONE IDEA. MANY DIMENSIONS.</span>{ready&&<Suspense fallback={null}><FrameworkScene active={active} framework={framework}/></Suspense>}<div className="ap-framework-fallback" aria-hidden="true"><FaReact/><SiFlutter/></div><div className="ap-visual-caption"><strong>{framework==='flutter'?'Flutter':'React Native'}</strong><span>Product concept · move your pointer to explore</span></div></div>
    </div>
    <div className="ap-stack-strip"><span>CONNECTED TO YOUR WORLD</span>{['APIs & backend','Authentication','Payments','Notifications','Analytics','AI integrations'].map(t=><span key={t}>{t}</span>)}</div>
  </section>;
}
