import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import usePageMotion from './usePageMotion';
import ParticleText from '../ApexUI-Kit/ParticleText/ParticleText';
import { HomeTwoHero, HomeTwoStory, HomeTwoClosing } from './HomeTwoSections';
import './HomeTwo.css';

export default function HomeTwo() {
  const rootRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  usePageMotion(rootRef);
  useEffect(() => {
    const title = document.title;
    document.title = 'NexaTech — Digital. Done Different.';
    document.documentElement.classList.add('hometwo-active');
    return () => { document.title = title; document.documentElement.classList.remove('hometwo-active'); };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = event => { if (event.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [menuOpen]);


  return <div className="home-two" ref={rootRef}>
    <a className="h2-skip" href="#h2-main">Skip to content</a>
    <header className="h2-nav">
      <Link className="h2-logo" to="/hometwo" aria-label="NexaTech home"><span className="h2-logo-symbol">n<span>✦</span></span>nexa<span>tech.</span></Link>
      <nav className={menuOpen ? 'is-open' : ''} aria-label="Main navigation" id="h2-navigation">
        <a href="#h2-about" onClick={() => setMenuOpen(false)}>The studio</a><a href="#h2-services" onClick={() => setMenuOpen(false)}>What we do</a><a href="#h2-process" onClick={() => setMenuOpen(false)}>Our approach</a><Link to="/" onClick={() => setMenuOpen(false)}>Home one</Link>
      </nav>
      <Link className="h2-button h2-button-small" to="/contact">Let’s talk</Link>
      <button className="h2-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="h2-navigation">{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main id="h2-main">
      <HomeTwoHero />
      <HomeTwoStory />
      <HomeTwoClosing />
    </main>

    <footer className="h2-footer"><div className="h2-footer-top"><Link className="h2-logo" to="/hometwo">nexa<span>tech.</span></Link><a href="mailto:info@nexatechinnovation.in">info@nexatechinnovation.in</a><a href="tel:+919540792427">+91 95407 92427</a></div><ParticleText text="NEXATECH" fontFamily="Rubik, sans-serif" accentColor="#4baaff" height="clamp(9rem, 22vw, 22rem)" /><div className="h2-footer-bottom"><span>© {new Date().getFullYear()} NexaTech Innovation</span><span>Thoughtfully designed. Purposefully built.</span><div><Link to="/privacy">Privacy</Link><Link to="/termsandconditions">Terms</Link><a href="#h2-main">Back to top</a></div></div></footer>
  </div>;
}
