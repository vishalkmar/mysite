import { Link } from 'react-router-dom';
import { Sparkles, Smartphone, Globe, Play } from 'lucide-react';
import { FaReact } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import GradientBlinds from '../Ui/background/GradientBliend';
import PhonePreview from './PhonePreview';

const colors=['#FF9FFC','#5227FF'];
export default function HeroBanner() {
  return <section className="ap-hero" aria-labelledby="app-title">
    <div className="ap-hero-background" aria-hidden="true"><GradientBlinds gradientColors={colors} blindCount={12} mouseDampening={.15} mixBlendMode="lighten"/></div>
    <div className="ap-hero-copy">
      <p className="ap-eyebrow"><span/> MOBILE PRODUCT STUDIO</p>
      <h1 id="app-title">Big ideas.<br/>Small screens.<br/><em>New possibilities.</em></h1>
      <p className="ap-hero-description">We design and develop mobile apps for the way people live now. AI-powered experiences, thoughtful interfaces and the engineering to bring it all together.</p>
      <div className="ap-actions"><Link className="ap-button" to="/contact">Let's build your app <Sparkles size={17}/></Link><a className="ap-text-link" href="#app-showcase"><Play size={15}/> Explore the experience</a></div>
      <div className="ap-platforms"><span><Smartphone size={15}/> Android & iOS</span><span><Globe size={15}/> Progressive web apps</span></div>
    </div>
    <div className="ap-hero-art" aria-label="AI assistant app concept">
      <div className="ap-orbit ap-orbit-one"/><div className="ap-orbit ap-orbit-two"/>
      <div className="ap-hero-phone"><PhonePreview screen="ai" label="AI assistant · Product concept"/></div>
      <div className="ap-floating-label ap-floating-label--flutter"><SiFlutter size={23}/><span><strong>Flutter</strong><small>One idea. Multiple screens.</small></span></div>
      <div className="ap-floating-label ap-floating-label--react"><FaReact size={26}/><span><strong>React Native</strong><small>Built around real people.</small></span></div>
      <span className="ap-art-caption">DESIGNED TO BE USED. BUILT TO BE LOVED.</span>
    </div>
    <div className="ap-hero-bottom"><span>STRATEGY → DESIGN → DEVELOPMENT → LAUNCH</span><a href="#app-showcase">Scroll to see it in action <span aria-hidden="true">↓</span></a></div>
  </section>;
}
