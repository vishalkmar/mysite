import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Plus, Monitor, Smartphone } from 'lucide-react';
import { productPages } from '../serviceKit/productContent';
import { byIds } from '../serviceKit/projectData';
import './designExperience.css';

const content=productPages.webdesign;
const studies=byIds(['shriyamuna','cyphermind','devshay','seychelles','mcti']);
const directions=['Editorial & expressive','Clear & intelligent','Product-first','Immersive & inviting','Structured & useful'];
const palettes=[['#997754','#e8dfd0','#222a23'],['#22d3ee','#151d30','#ecf6ff'],['#40accf','#f0f5f5','#183746'],['#275ee8','#fbf5e9','#f6bc5e'],['#315bd7','#dfe8fa','#f9fbff']];

function DesignStudio(){
  const [active,setActive]=useState(0),[phone,setPhone]=useState(false);
  const chapter=content.chapters[active],project=studies[active];
  return <section className="wd-studio wd-wrap" aria-labelledby="design-studio-title">
    <div className="wd-intro"><span className="wd-kicker">01 / THE DESIGN STUDIO</span><h2 id="design-studio-title">A little character.<br/>A lot of <em>intention.</em></h2><div className="wd-intro-note"><span className="wd-asterisk" aria-hidden="true">✳</span><p>{content.intro}</p></div></div>
    <div className="wd-direction-nav" aria-label="Explore design directions">{content.chapters.map((item,i)=><button type="button" key={item.name} aria-pressed={active===i} aria-controls="design-artboard" onClick={()=>setActive(i)}><small>0{i+1}</small>{item.name}<ArrowUpRight size={17}/></button>)}</div>
    <div className="wd-artboard-layout" id="design-artboard">
      <aside className="wd-art-notes"><span className="wd-kicker">ART DIRECTION / 0{active+1}</span><h3>{directions[active]}</h3><div className="wd-palette" aria-label="Illustrative colour direction">{palettes[active].map(color=><span key={color} style={{background:color}} title={color}/>)}</div><p className="wd-note-label">COLOUR / SPACE / HIERARCHY</p><div className="wd-type-study" aria-hidden="true">Aa<span>Clarity has<br/>character.</span></div><p className="wd-note-caption">Palette & type exploration</p></aside>
      <div className="wd-artboard"><div className="wd-artboard-tools"><span>{project.name} / EXISTING WORK</span><div aria-label="Artboard viewport"><button type="button" aria-label="Desktop artboard" aria-pressed={!phone} onClick={()=>setPhone(false)}><Monitor size={15}/></button><button type="button" aria-label="Phone crop preview" aria-pressed={phone} onClick={()=>setPhone(true)}><Smartphone size={15}/></button></div></div><div className={`wd-artboard-frame ${phone?'wd-artboard-phone':''}`}><img key={project.id} src={project.image} alt={`${project.name} website from our existing design portfolio`} loading="lazy" decoding="async" width="1440" height="1000"/></div><span className="wd-artboard-caption">{phone?'Detail crop of the existing website screenshot.':'Existing portfolio screenshot / visual reference'}</span></div>
    </div>
    <div className="wd-study-copy"><span className="wd-study-number">0{active+1}</span><h3>{chapter.title}</h3><div><p>{chapter.copy}</p><ul>{chapter.points.map(point=><li key={point}>{point}</li>)}</ul></div></div>
  </section>;
}

function DesignDirectory(){
  const [group,setGroup]=useState('All'),[selected,setSelected]=useState(content.categories[0]);
  const groups=['All',...new Set(content.categories.map(row=>row[1]))];
  return <section className="wd-directory"><div className="wd-wrap"><div className="wd-section-top"><span className="wd-kicker">02 / MANY KINDS OF WEBSITES</span><span>24 directions + your next idea</span></div><div className="wd-directory-heading"><h2>Different worlds.<br/><em>Different expressions.</em></h2><p>{content.categoryCopy}</p></div><div className="wd-filters" aria-label="Filter website design categories">{groups.map(item=><button type="button" key={item} aria-pressed={group===item} onClick={()=>{setGroup(item);setSelected(content.categories.find(row=>item==='All'||row[1]===item));}}>{item}</button>)}</div><div className="wd-category-list">{content.categories.filter(row=>group==='All'||row[1]===group).map(row=><button type="button" key={row[0]} aria-pressed={selected[0]===row[0]} aria-controls="design-category-detail" onClick={()=>setSelected(row)}><small>{String(content.categories.indexOf(row)+1).padStart(2,'0')}</small><span>{row[0]}</span><ArrowUpRight size={20}/></button>)}</div><div className="wd-category-detail" id="design-category-detail"><span>{selected[1]}</span><h3>{selected[0]}</h3><p>{selected[2]}</p><Link to="/contact">Shape this idea <ArrowUpRight size={19}/></Link></div></div></section>;
}

function DesignWork(){
  return <section className="wd-work wd-wrap"><div className="wd-work-heading"><span className="wd-kicker">03 / SELECTED WORK</span><h2>Each brand,<br/><em>its own world.</em></h2><p>{content.workCopy}</p></div><div className="wd-work-list">{byIds(content.workIds).map((project,i)=><article className="wd-project" key={project.id} style={{'--wd-project':project.accent}}><div className="wd-project-image"><img src={project.image} alt={`${project.name} website design from our portfolio`} loading="lazy" decoding="async" width="1440" height="1000"/><span>0{i+1} / SELECTED DESIGN</span></div><div className="wd-project-caption"><span>{project.category}</span><h3>{project.name}</h3><div>{project.tags.map(tag=><small key={tag}>{tag}</small>)}</div></div></article>)}</div><Link to="/contact" className="wd-more">Your brand could be the next chapter. <ArrowUpRight size={24}/></Link></section>;
}

function DesignToolkit(){
  return <section className="wd-toolkit wd-wrap"><div><span className="wd-kicker">04 / BEHIND THE SCREENS</span><h2>Craft meets<br/><em>the toolkit.</em></h2><p>From an early sketch to the details your development team needs. The tools follow the brief.</p></div><div className="wd-toolkit-board">{content.stacks.map((stack,i)=><article key={stack.name}><span className="wd-kicker">0{i+1} / {stack.name}</span><h3>{stack.title}</h3><p>{stack.copy}</p><ul>{stack.tools.map(tool=><li key={tool}>{tool}</li>)}</ul><small>{stack.deliverable}</small></article>)}</div></section>;
}

export default function DesignExperience(){
  useEffect(()=>{const previous=document.title;document.title='Web Design | NexaTech Innovation';return()=>{document.title=previous;};},[]);
  return <main className="wd-page"><DesignStudio/><DesignDirectory/><DesignWork/><DesignToolkit/>
    <section className="wd-process wd-wrap"><div><span className="wd-kicker">05 / THE PROCESS</span><h2>Good design<br/>is a <em>conversation.</em></h2></div><div>{content.steps.map(([title,copy],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="wd-faq wd-wrap"><span className="wd-kicker">06 / A FEW GOOD QUESTIONS</span>{content.faqs.map(([question,answer],i)=><details key={question}><summary><small>0{i+1}</small>{question}<Plus size={21}/></summary><p>{answer}</p></details>)}</section>
    <section className="wd-contact wd-wrap"><span className="wd-kicker">LET’S MAKE SOMETHING DISTINCTIVE</span><h2>Your story.<br/><em>A new perspective.</em></h2><div><p>{content.ctaCopy}</p><Link to="/contact">Start a conversation <ArrowRight size={24}/></Link></div></section>
  </main>;
}
