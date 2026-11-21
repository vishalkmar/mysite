import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Sparkles, Code2, Layers, Mouse, Globe, Smartphone, BarChart3 } from 'lucide-react';
import Scene3D from './Scene3D';
import usePageMotion from './usePageMotion';
import MaskView from '../ApexUI-Kit/MaskView/MaskView';
import './HomeTwo.css';

function ScrollCopy({ text, className = '' }) {
  return <p className={`h2-scroll-copy ${className}`} data-scroll-copy>
    {text.split(' ').map((word, i) => <span data-word key={i}>{word}{' '}</span>)}
  </p>;
}

const services = [
  { name: 'Built to perform.', category: 'Web & software', copy: 'From your first website to your next big platform. Thoughtful interfaces, reliable engineering and the details that make everything feel effortless.', tags: ['Web development', 'Custom software', 'E-commerce'], path: '/webdevelopment', visual: 'web', Icon: Globe },
  { name: 'Made to feel right.', category: 'Apps & experiences', copy: 'Digital products people want to come back to. We connect clear design with intuitive interactions across every screen.', tags: ['Mobile apps', 'UI/UX design', 'Design systems'], path: '/appdevelopment', visual: 'app', Icon: Smartphone },
  { name: 'Ready to go further.', category: 'Brand & growth', copy: 'Make the right impression. Reach the right people. Bring your brand, content and marketing together with a strategy built around your goals.', tags: ['Digital marketing', 'SEO', 'Brand identity'], path: '/digitalmarketing', visual: 'growth', Icon: BarChart3 },
];

function ServiceVisual({ type }) {
  if (type === 'web') return <div className="h2-browser" aria-hidden="true">
    <div className="h2-browser-bar"><i /><i /><i /><span>your next big thing.</span></div>
    <div className="h2-browser-body"><small>MAKE YOUR MARK</small><strong>Beyond<br /><em>ordinary.</em></strong><div className="h2-mini-button">Explore the possibilities</div><div className="h2-browser-orb" /></div>
    <div className="h2-floating-label"><Code2 size={16} /> Designed to stand out. Built to last.</div>
  </div>;
  if (type === 'app') return <div className="h2-phone-scene" aria-hidden="true">
    <div className="h2-phone h2-phone-back"><div className="h2-phone-notch" /><span>Make room<br />for better.</span><div className="h2-phone-orb" /></div>
    <div className="h2-phone"><div className="h2-phone-notch" /><small>YOUR EVERYDAY, UPGRADED</small><strong>Hello,<br />possibility.</strong><div className="h2-app-chart">✦</div><div className="h2-app-line" /><div className="h2-app-line short" /><div className="h2-app-nav"><i /><i /><i /></div></div>
  </div>;
  return <div className="h2-growth-visual" aria-hidden="true"><div className="h2-growth-grid" /><div className="h2-growth-bars">{[25, 40, 35, 58, 68, 83, 100].map((height, i) => <i key={i} style={{ height: `${height}%`, '--bar-delay': `${i * 80}ms` }} />)}</div><div className="h2-growth-title"><Sparkles size={24} /><span>Good strategy.<br /><strong>Real momentum.</strong></span></div></div>;
}

/* Wraps HomeTwo-styled content: scopes the CSS and runs reveal / scroll motion. */
export function HomeTwoScope({ children, className = '', ...rest }) {
  const rootRef = useRef(null);
  usePageMotion(rootRef);
  return <div className={`home-two ${className}`} ref={rootRef} {...rest}>{children}</div>;
}

export function HomeTwoHero({ HeadingTag = 'h1' }) {
  return <>
      <section className="h2-hero">
        <div className="h2-hero-grid" aria-hidden="true" />
        <div className="h2-hero-copy">
          <p className="h2-eyebrow h2-hero-enter">INDEPENDENT THINKING. CONNECTED POSSIBILITIES.</p>
          <HeadingTag className="h2-hero-title"><span>DIGITAL.</span><span>DONE</span><span className="h2-accent">DIFFERENT<span className="h2-period">.</span></span></HeadingTag>
          <p className="h2-hero-description">We turn ambitious ideas into websites, apps and digital experiences that move your business forward.</p>
          <div className="h2-hero-actions"><Link className="h2-button" to="/contact">Build something great <Sparkles size={17} /></Link><a className="h2-text-link" href="#h2-services">Explore what we do</a></div>
        </div>
        <div className="h2-hero-art"><div className="h2-art-glow" /><Scene3D /><span className="h2-art-tag h2-art-tag-top"><Layers size={15} /> Design meets technology</span><span className="h2-art-tag h2-art-tag-bottom"><span className="h2-live-dot" /> A new perspective, in motion.</span><span className="h2-art-coordinates">IDEA → EXPERIENCE</span></div>
        <div className="h2-hero-bottom"><span>NEXATECH INNOVATION<br /><small>Strategy. Design. Development.</small></span><a href="#h2-about"><Mouse size={18} /> Scroll to discover</a><span>BUILT FOR WHAT’S NEXT<br /><small>Made for real people.</small></span></div>
      </section>

      <div className="h2-ticker" aria-label="Think big. Make it real."><div>{[0, 1, 2, 3].map(i => <span key={i} aria-hidden={i > 0}>THINK BIG <i>✦</i> MAKE IT REAL <i>✦</i></span>)}</div></div>

      </>;
}

export function HomeTwoStory({ withProcess = true }) {
  return <><section className="h2-about h2-section" id="h2-about">
        <div className="h2-section-meta" data-reveal><p className="h2-eyebrow">THE STUDIO</p><span>Small details. Bigger possibilities.</span></div>
        <ScrollCopy text="Good ideas deserve more than ordinary. We bring strategy, design and code together to make your next move matter." />
        <div className="h2-about-bottom"><div className="h2-orbit-icon" aria-hidden="true"><i /><i /><span>✦</span></div><div data-reveal><MaskView variant="wipe" text="A sharper identity. A smoother experience. A smarter way to grow. We’re NexaTech Innovation — your team for building what comes next." /><span className="h2-interaction-note">Move across the words. See things differently.</span></div><Link className="h2-text-link" to="/about">Meet NexaTech</Link></div>
        <div className="h2-facts" data-reveal>{[['50+', 'Happy clients'], ['60+', 'Projects completed'], ['Design + code', 'One connected team']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className="h2-services h2-section" id="h2-services">
        <div className="h2-section-meta" data-reveal><p className="h2-eyebrow">WHAT WE DO</p><span>From the first spark to the final pixel.</span></div>
        <div className="h2-services-heading" data-reveal><MaskView as="h2" variant="window" text={'Big thinking.\nBeautifully built.'} image="/hero/web-design-wide.webp" /><p>Everything your next chapter needs.<br />All working together.</p></div>
        <div className="h2-service-stack">{services.map(({ name, category, copy, tags, path, visual, Icon }, i) => <article className={`h2-service h2-service--${visual}`} key={name} style={{ '--stack': i }}>
          <div className="h2-service-copy"><span className="h2-service-category"><Icon size={18} />{category}</span><h3>{name}</h3><p>{copy}</p><div className="h2-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link className="h2-button h2-button-quiet" to={path}>Explore {category.toLowerCase()}</Link></div><div className="h2-service-art" data-parallax><ServiceVisual type={visual} /></div>
        </article>)}</div>
      </section>

      <section className="h2-manifesto" aria-label="Our philosophy"><p className="h2-eyebrow" data-reveal>LESS EXPECTED. MORE EFFECTIVE.</p><h2 data-reveal>NOT JUST<br /><span>A PRETTY</span><br /><em>INTERFACE.</em></h2><div className="h2-manifesto-bottom"><span className="h2-large-star" aria-hidden="true">✦</span><MaskView variant="spotlight" text="Every interaction has a purpose. Every detail earns its place. We create digital experiences that feel as good as they work." /></div></section>

      {withProcess && <section className="h2-process h2-section" id="h2-process">
        <div className="h2-process-intro"><p className="h2-eyebrow">HOW WE GET THERE</p><h2 data-reveal>Great things.<br /><span>Built together.</span></h2><p>A clear process. Open conversations.<br />A team that cares about the outcome.</p><Link className="h2-text-link" to="/contact">Tell us what you have in mind</Link></div>
        <div className="h2-process-steps">{[
          ['Discover the opportunity.', 'We listen first. Your audience, ambitions and challenges give us the direction for everything that follows.', 'Discover'],
          ['Design the difference.', 'We explore, prototype and refine. Turning your goals into a visual language and an experience that feels like you.', 'Design'],
          ['Build with intention.', 'Design meets engineering. We develop, test and polish across screens, with performance and usability in mind.', 'Develop'],
          ['Launch. Learn. Evolve.', 'Go live with confidence. We help you take the next step and keep improving as your business grows.', 'Deliver'],
        ].map(([title, copy, label]) => <article key={label} data-reveal><span className="h2-step-label">{label}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>}

      </>;
}

export function HomeTwoClosing({ withPlayground = true }) {
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = [
    ['What can we build together?', 'Websites, web applications, mobile apps, custom software and complete digital identities. We also support SEO, content and digital marketing, so the experience keeps working after launch.'],
    ['Can you redesign our existing website?', 'Yes. We can rethink the experience, improve the interface and rebuild the parts that are holding you back. We start by understanding what works and what needs to change.'],
    ['How does a project start?', 'Tell us about your business, your idea and your priorities. We discuss the scope, agree on the deliverables and timeline, then move into design and development.'],
    ['Do you work with startups and growing businesses?', 'Yes. We help both new ventures and established teams, shaping the project around your current needs and the next stage of your business.'],
  ];

  return <>{withPlayground && <section className="h2-playground h2-section"><div className="h2-section-meta" data-reveal><p className="h2-eyebrow">BUILT FROM POSSIBILITY</p><span>A few directions your next idea could take.</span></div><div className="h2-work-grid"><Link to="/webdesign" className="h2-work h2-work-wide" data-reveal><div className="h2-work-image"><img src="/hero/web-design-wide.webp" alt="Expressive website design concept" loading="lazy" decoding="async" /><span>EXPRESSIVE<br />BY DESIGN.</span></div><div><h3>Make your brand impossible to miss.</h3><span>Brand experiences / Web design</span></div></Link><Link to="/appdevelopment" className="h2-work" data-reveal><div className="h2-work-image h2-work-blue"><Smartphone size={120} strokeWidth={.7} /><strong>ONE IDEA.<br />EVERY SCREEN.</strong></div><div><h3>Good experiences travel.</h3><span>Digital products / Mobile apps</span></div></Link></div></section>}

      <section className="h2-faq h2-section"><div><p className="h2-eyebrow">A LITTLE MORE CLARITY</p><h2>Good questions.<br /><span>Straight answers.</span></h2></div><div>{faqs.map(([question, answer], i) => <article key={question} className={openFaq === i ? 'is-open' : ''}><h3><button aria-expanded={openFaq === i} aria-controls={`h2-answer-${i}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{question}{openFaq === i ? <Minus size={20} /> : <Plus size={20} />}</button></h3><div id={`h2-answer-${i}`} hidden={openFaq !== i}><p>{answer}</p></div></article>)}</div></section>

      <section className="h2-contact"><p className="h2-eyebrow" data-reveal>YOUR NEXT CHAPTER STARTS HERE</p><h2 data-reveal>HAVE A<br /><span>WHAT IF?</span></h2><div><p>Let’s turn it into something real.</p><Link className="h2-button h2-button-light" to="/contact">Let’s make it happen <Sparkles size={18} /></Link></div></section>
    </>;
}
