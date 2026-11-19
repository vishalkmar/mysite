import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { SERVICES } from "./homeHeroServices";
import "./HomeBanner.css";

const images = new Map();
function prepareImage(url) {
  if (!images.has(url)) {
    const image = new Image();
    image.decoding = "async";
    const ready = new Promise(resolve => {
      image.onload = () => image.decode().catch(() => {}).then(() => resolve(true));
      image.onerror = () => { images.delete(url); resolve(false); };
      image.src = url;
    });
    images.set(url, ready);
  }
  return images.get(url);
}

export default function HeroCarousel() {
  const heroRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState(null);
  const [changed, setChanged] = useState(false);
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [interacting, setInteracting] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [mobile, setMobile] = useState(() => matchMedia("(max-width: 767px)").matches);
  const activeBackground = useRef(0);
  const variant = mobile ? "mobile" : "wide";
  const currentData = SERVICES[currentIndex];
  const CurrentIcon = currentData.icon;
  const previews = [1, 2].map(offset => SERVICES[(currentIndex + offset) % SERVICES.length]);
  const selectSlide = useCallback(index => {
    setChanged(true);
    setCurrentIndex((index + SERVICES.length) % SERVICES.length);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(heroRef.current);
    const visibility = () => setPageVisible(!document.hidden);
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const screen = matchMedia("(max-width: 767px)");
    const preferences = () => { setReducedMotion(motion.matches); setMobile(screen.matches); };
    document.addEventListener("visibilitychange", visibility);
    motion.addEventListener("change", preferences);
    screen.addEventListener("change", preferences);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      motion.removeEventListener("change", preferences);
      screen.removeEventListener("change", preferences);
    };
  }, []);

  useEffect(() => {
    if (!visible || !pageVisible || paused || interacting || reducedMotion) return;
    const timer = setTimeout(() => selectSlide(currentIndex + 1), 6000);
    return () => clearTimeout(timer);
  }, [currentIndex, visible, pageVisible, paused, interacting, reducedMotion, selectSlide]);

  useEffect(() => {
    let cancelled = false;
    // Keep the previous picture until the new image is decoded. Copy and
    // controls respond immediately, even on a slow connection.
    prepareImage(`${SERVICES[currentIndex].image}-${variant}.webp`).then(loaded => {
      if (cancelled || !loaded || activeBackground.current === currentIndex) return;
      setOutgoingIndex(reducedMotion ? null : activeBackground.current);
      activeBackground.current = currentIndex;
      setBackgroundIndex(currentIndex);
    });
    return () => { cancelled = true; };
  }, [currentIndex, variant, reducedMotion]);

  useEffect(() => {
    // Card thumbnails are tiny; decode all of them once so preview cards never
    // pop in blank when the slide changes.
    const warm = () => SERVICES.forEach(item => prepareImage(`${item.image}-card.webp`));
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(warm, { timeout: 1500 })
      : setTimeout(warm, 600);
    return () => (window.cancelIdleCallback ? window.cancelIdleCallback(idle) : clearTimeout(idle));
  }, []);

  useEffect(() => {
    if (outgoingIndex === null) return;
    const timer = setTimeout(() => setOutgoingIndex(null), 700);
    return () => clearTimeout(timer);
  }, [outgoingIndex, backgroundIndex]);

  useEffect(() => {
    if (!visible || !pageVisible || navigator.connection?.saveData || /(^|-)2g$/.test(navigator.connection?.effectiveType || "")) return;
    // Warm only the next slide, after the first frame and preview images.
    const timer = setTimeout(() => {
      prepareImage(`${SERVICES[(currentIndex + 1) % SERVICES.length].image}-${variant}.webp`);
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentIndex, variant, visible, pageVisible]);

  return (
    <section className="hero-wrapper" ref={heroRef} data-pause-pointer-effects
      aria-label="Our services" aria-roledescription="carousel"
      onPointerEnter={event => { if (event.pointerType === "mouse") setInteracting(true); }}
      onPointerLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
      <div className="hero-bg" aria-hidden="true">
        {outgoingIndex !== null && <img className="hero-bg-img hero-bg-outgoing"
          src={`${SERVICES[outgoingIndex].image}-${variant}.webp`} alt="" decoding="async" />}
        <img key={`${backgroundIndex}-${variant}`} className={`hero-bg-img${outgoingIndex !== null ? " hero-bg-enter" : ""}`}
          src={`${SERVICES[backgroundIndex].image}-${variant}.webp`} alt=""
          fetchPriority={backgroundIndex === 0 ? "high" : "auto"} loading="eager" decoding="async" />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-inner container">
        <div className="hero-copy-slot">
          <div key={currentIndex} className="hero-text-block" data-animate={changed && !reducedMotion}>
            <div className="hero-meta-row">
              <span className="hero-meta-counter"><CurrentIcon size={16} />
                {String(currentIndex + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
              </span>
              <span className="hero-meta-line" />
              <span className="hero-meta-brand">NexaTechInnovation.in</span>
            </div>
            <h1 className="hero-title">{currentData.seoTitle}</h1>
            <p className="hero-description">{currentData.seoDescription}</p>
            <Link className="hero-btn" to={currentData.path}>View Service</Link>
          </div>
        </div>

        <div className="hero-preview-area" key={`cards-${currentIndex}`} data-animate={changed && !reducedMotion}>
          {previews.map(item => <button key={item.id} type="button" className="hero-preview-card"
            aria-label={`Show ${item.title}`} onClick={() => selectSlide(SERVICES.indexOf(item))}>
            <img src={`${item.image}-card.webp`} alt="" className="hero-preview-img"
              width="360" height="360" loading="eager" decoding="async" fetchPriority="low" />
            <span className="hero-preview-content">
              <span className="hero-preview-category">{item.category}</span>
              <span className="hero-preview-title">{item.title}</span>
            </span>
          </button>)}
        </div>

        <div className="hero-nav">
          <button type="button" onClick={() => selectSlide(currentIndex - 1)} className="hero-nav-btn" aria-label="Previous service"><ArrowLeft size={22} /></button>
          <button type="button" onClick={() => setPaused(value => !value)} className="hero-nav-btn"
            aria-label={paused ? "Play slideshow" : "Pause slideshow"} aria-pressed={paused} disabled={reducedMotion}>
            {paused || reducedMotion ? <Play size={18} /> : <Pause size={18} />}
          </button>
          <button type="button" onClick={() => selectSlide(currentIndex + 1)} className="hero-nav-btn" aria-label="Next service"><ArrowRight size={22} /></button>
        </div>
      </div>
    </section>
  );
}
