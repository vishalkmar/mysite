import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check } from 'lucide-react';
import { categories } from './appContent';

const groups=['All industries','AI & work','Health & life','Commerce & community'];
export default function AppDevelopmentServices(){
  const [group,setGroup]=useState(groups[0]);
  const [selected,setSelected]=useState(categories[0]);
  const visible=categories.filter(c=>group===groups[0]||c.group===group);
  const Icon=selected.Icon;
  function filter(value){setGroup(value);if(value!==groups[0]&&selected.group!==value)setSelected(categories.find(c=>c.group===value));}
  return <section className="ap-industries ap-shell" aria-labelledby="industry-title">
    <div className="ap-section-heading"><p className="ap-eyebrow">24 CATEGORIES. ENDLESS STARTING POINTS.</p><h2 id="industry-title">Whatever your world.<br/><em>Let's build for it.</em></h2><p>From AI assistants to gym memberships, medical bookings and social communities. Explore the kinds of products we can design and develop.</p></div>
    <div className="ap-category-filters" aria-label="Filter app categories">{groups.map(item=><button key={item} type="button" aria-pressed={group===item} onClick={()=>filter(item)}>{item}</button>)}</div>
    <div className="ap-category-grid">{visible.map(item=><button key={item.name} type="button" onClick={()=>setSelected(item)} aria-pressed={selected.name===item.name} aria-controls="category-details"><item.Icon size={22}/><span>{item.name}</span><span className="ap-category-plus" aria-hidden="true">{selected.name===item.name?'−':'+'}</span></button>)}</div>
    <div className="ap-category-detail" id="category-details" aria-live="polite"><div className="ap-category-icon"><Icon size={35}/></div><div><p className="ap-eyebrow">YOUR NEXT PRODUCT COULD BE</p><h3>{selected.name}</h3><p>{selected.copy}</p><ul>{selected.features.map(feature=><li key={feature}><Check size={14}/>{feature}</li>)}</ul></div><Link className="ap-button ap-button--quiet" to="/contact">Discuss your idea</Link></div>
    <div className="ap-ai-note"><Sparkles size={20}/><p><strong>AI when it adds value.</strong> Recommendations, search, summaries or assistance—chosen for the job your users need to do, with clear controls over the experience.</p></div>
  </section>;
}
