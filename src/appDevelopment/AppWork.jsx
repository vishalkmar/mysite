import { Link } from 'react-router-dom';
import { byIds } from '../serviceKit/projectData';
const projects=byIds(['callingkaro','talklink','reconnct','seychelles','cyphermind','mcti']);
export default function AppWork(){
  return <section className="ap-work ap-shell" id="app-work" aria-labelledby="work-title">
    <div className="ap-section-heading"><p className="ap-eyebrow">SELECTED WORK / EXISTING PORTFOLIO</p><h2 id="work-title">Ideas we've helped<br/><em>bring to life.</em></h2><p>Calling, conversations, travel, AI and education. A selection of the product websites and digital experiences already in our portfolio.</p></div>
    <div className="ap-work-grid">{projects.map((project,i)=><article key={project.id} className="ap-work-card"><div className="ap-work-browser"><span/><span/><span/><small>{project.name}</small></div><div className="ap-work-image"><img src={project.image} alt={`${project.name} — existing project website`} loading="lazy" decoding="async" width="720" height="450"/></div><div className="ap-work-info"><span className="ap-work-index">{String(i+1).padStart(2,'0')}</span><div><h3>{project.name}</h3><p>{project.category}</p><ul>{project.tags.map(tag=><li key={tag}>{tag}</li>)}</ul></div></div></article>)}</div>
    <div className="ap-more-work"><span>And there's more.<small>Have something similar—or completely different—in mind?</small></span><Link className="ap-button ap-button--quiet" to="/contact">Talk about your project</Link></div>
  </section>;
}
