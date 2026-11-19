import { useRef } from "react";
import { Link } from "react-router-dom";
import MarketingStream from "../../Ui/background/MarketingStream";
import "./digitalmarketingbanner.css";

export default function DigitalMarketingHeroBanner() {
  const heroRef = useRef(null);

  return (
    <section className="dm-hero" ref={heroRef} aria-labelledby="dm-hero-title" data-pause-pointer-effects>
      <MarketingStream interactionRef={heroRef} />
      <div className="dm-hero__shade" aria-hidden="true" />
      <div className="dm-hero__content">
        <h1 id="dm-hero-title" className="dm-hero__title">
          Digital Marketing That
          <span>Drives Real Business Growth</span>
        </h1>
        <p className="dm-hero__description">
          Data-driven strategies, high-impact campaigns, and measurable results
          across SEO, social media, and paid advertising.
        </p>
        <Link className="dm-hero__cta" to="/contact">
          Grow Your Brand
        </Link>
      </div>
    </section>
  );
}
