import { useEffect, useRef, useState } from 'react';
import { Check, Mouse } from 'lucide-react';
import { chapters } from './appContent';
import PhonePreview from './PhonePreview';

export default function AppDevelopmentShowcase() {
  const track=useRef(null);
  const tabs=useRef(null);
  const [active,setActive]=useState(0);
  const chapter=chapters[active];
  useEffect(()=>{
    const rail=tabs.current;
    const selected=rail.querySelector('[aria-pressed="true"]');
    const offset=selected.getBoundingClientRect().left-rail.getBoundingClientRect().left;
    if(offset<0||offset+selected.offsetWidth>rail.clientWidth) {
      rail.scrollTo({left:rail.scrollLeft+offset-(rail.clientWidth-selected.offsetWidth)/2,behavior:'instant'});
    }
  },[active]);
  useEffect(()=>{
    const host=track.current;
    const motion=matchMedia('(prefers-reduced-motion: reduce), (max-height: 650px)');
    let frame=0, visible=false;
    function paint(){
      frame=0;
      if(!visible || motion.matches) return;
      const bounds=host.getBoundingClientRect();
      const top=parseFloat(getComputedStyle(host).getPropertyValue('--stage-top')) || 100;
      const travel=Math.max(1,host.offsetHeight-(innerHeight-top));
      const progress=Math.max(0,Math.min(1,(top-bounds.top)/travel));
      setActive(Math.min(chapters.length-1,Math.floor(progress*chapters.length)));
    }
    const schedule=()=>{if(visible&&!frame) frame=requestAnimationFrame(paint);};
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)schedule();});
    observer.observe(host);
    window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);motion.addEventListener('change',schedule);
    return ()=>{observer.disconnect();cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);motion.removeEventListener('change',schedule);};
  },[]);
  function select(index){
    setActive(index);
    if(matchMedia('(prefers-reduced-motion: reduce), (max-height: 650px)').matches) return;
    const host=track.current;
    const top=parseFloat(getComputedStyle(host).getPropertyValue('--stage-top')) || 100;
    const travel=Math.max(1,host.offsetHeight-(innerHeight-top));
    window.scrollTo({top:scrollY+host.getBoundingClientRect().top-top+travel*((index+.25)/chapters.length),behavior:'instant'});
  }
  return <section className="ap-showcase" id="app-showcase" aria-labelledby="showcase-title">
    <div className="ap-section-heading ap-shell"><p className="ap-eyebrow">THE APP EXPERIENCE</p><h2 id="showcase-title">Don't just imagine it.<br/><em>See it take shape.</em></h2><p>Scroll through five ways to bring your product to life. Each screen is an illustrative product concept.</p></div>
    <div className="ap-scroll-track" ref={track}>
      <div className="ap-sticky-stage" style={{'--chapter-color':chapter.color}}>
        <div className="ap-showcase-tabs" ref={tabs} aria-label="Choose an app experience">{chapters.map((item,i)=><button key={item.id} type="button" aria-pressed={active===i} aria-controls="app-preview" onClick={()=>select(i)}><span>{String(i+1).padStart(2,'0')}</span>{item.name}</button>)}</div>
        <div className="ap-showcase-layout ap-shell" id="app-preview">
          <div className="ap-chapter-copy" key={chapter.id}><p className="ap-eyebrow">{chapter.tag}</p><h3>{chapter.title}</h3><p>{chapter.copy}</p><ul>{chapter.points.map(point=><li key={point}><Check size={16}/>{point}</li>)}</ul><div className="ap-scroll-hint"><Mouse size={17}/> Keep scrolling to explore <span>{String(active+1).padStart(2,'0')} / 05</span></div></div>
          <div className="ap-showcase-phone-stage"><div className="ap-stage-halo"/><div className="ap-phone-floor"/><PhonePreview screen={chapter.screen} label={chapter.screenLabel}/><span className="ap-concept-label">INTERFACE CONCEPT / {chapter.name.toUpperCase()}</span></div>
        </div>
      </div>
    </div>
  </section>;
}
