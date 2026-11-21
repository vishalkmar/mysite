import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import marketing from "../src/serviceImages/marketing.png";
import development from "../src/serviceImages/softwaredevelopment.png";
import mobileapp from "../src/serviceImages/mobileapp.png";
import digitalmarketing from "../src/serviceImages/digitalmarketing.png";
import logodesign from "../src/serviceImages/logodesign.png";
import Seo from "../src/serviceImages/seo.png";
import contentmarketing from "../src/serviceImages/contentmarketing.png";
import webdesign from "../src/serviceImages/webdesign.png";
import softwaredevelopment from "../src/serviceImages/softwaredevelopment.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Ui/SectionHeading.css";
import "./serviceCarousel.css";


import ElectricBorder from "./Ui/ElectricBorder";



const ServicesSection = () => {

  const gridRef = useRef(null);

  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Social Media Marketing",
      description:
        "Social media marketing services to grow your brand on Instagram, Facebook and LinkedIn. We create content, run campaigns and optimize targeting to generate leads and improve conversions.",
      image: marketing,
      color: "#38bdf8",
      url: "socialmediamarketing",
    },
    {
      id: 2,
      title: "Website Development",
      description:
        "Website development services using React, Next.js and modern backend systems. We build fast, responsive and SEO-ready websites for businesses, startups and personal brands.",
      image: development,
      color: "#22d3ee",
      url: "webdevelopment",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Mobile app development for Android and iOS with smooth UI and scalable backend integration. We build high-performance apps that are secure, reliable and easy to use.",
      image: mobileapp,
      color: "#0ea5e9",
      url: "appdevelopment",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "Digital marketing services including paid ads, lead generation, conversion optimization and content strategy. We help you increase visibility, traffic and sales across channels.",
      image: digitalmarketing,
      color: "#38bdf8",
      url: "digitalmarketing",
    },
    {
      id: 5,
      title: "SEO Services",
      description:
        "Improve your search rankings with our data-driven SEO strategies that optimize your website for both users and search engines.",
      image: Seo,
      color: "#22d3ee",
      url: "seo",
    },
    {
      id: 6,
      title: "Software Development",
      description:
        "Custom software development for CRM/ERP, automation tools, internal dashboards and secure backend systems. Scalable solutions tailored to your business workflows.",
      image: softwaredevelopment,
      color: "#0ea5e9",
      url: "softwaredevelopment",
    },
    {
      id: 7,
      title: "Logo Design",
      description:
        "Logo design and brand identity services including modern logo concepts, color systems and typography. Build a consistent brand that looks professional across all platforms.",
      image: logodesign,
      color: "#38bdf8",
      url: "logodesign",
    },
    {
      id: 8,
      title: "Content Marketing",
      description:
        "Content marketing services: blogs, website content, landing pages and SEO content strategy. Build authority, improve rankings and convert visitors into customers.",
      image: contentmarketing,
      color: "#22d3ee",
      url: "contentmarketing",
    },
    {
      id: 9,
      title: "Web Design",
      description:
        "Responsive web design with modern UI/UX, clean layouts and conversion-focused sections. We design user-friendly websites that look premium on every device.",
      image: webdesign,
      color: "#0ea5e9",
      url: "webdesign",
    },
  ];


  /* ---------- carousel state ---------- */
  const n = services.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const drag = useRef(null);
  const suppressClick = useRef(false);

  const go = (dir) => setActive((a) => (a + dir + n) % n);
  // shortest signed distance from the active card, wrapping around (-4..4)
  const offsetOf = (i) => {
    let off = (((i - active) % n) + n) % n;
    if (off > n / 2) off -= n;
    return off;
  };

  // Autoplay: only while the carousel is on screen, not hovered/focused, tab visible, motion allowed.
  useEffect(() => {
    const el = gridRef.current;
    if (!el || paused || matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let onScreen = false;
    const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; }, { threshold: 0.35 });
    io.observe(el);
    const id = setInterval(() => { if (onScreen && !document.hidden) setActive((a) => (a + 1) % n); }, 4200);
    return () => { clearInterval(id); io.disconnect(); };
  }, [paused, n]);

  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    drag.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e) => {
    const start = drag.current;
    drag.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(e.clientY - start.y)) {
      suppressClick.current = true;
      go(dx < 0 ? 1 : -1);
    }
  };
  // A side card click brings it to the front; a swipe never triggers a click.
  const onClickCapture = (e) => {
    if (suppressClick.current) {
      suppressClick.current = false;
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    const slide = e.target.closest?.(".svc-cf__slide");
    if (slide && !slide.classList.contains("is-active")) {
      e.preventDefault();
      e.stopPropagation();
      setActive(Number(slide.dataset.index));
    }
  };
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NexaTech Innovation",
    url: "https://nexatechinnovation.in/",
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        url: `https://nexatechinnovation.in/${s.url}`,
      },
    })),
  };

  return (
    <>
      <section
        className="pb-5 nx-services"
        style={{ backgroundColor: "var(--site-bg)", color: "#e5e7eb" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />

        <div className="container pb-5">
          {/* Services: 3D coverflow carousel (same cards, new showcase) */}
          <div
            className="svc-cf"
            ref={gridRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Our services"
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false); }}
          >
            <div
              className="svc-cf__stage"
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onPointerCancel={() => (drag.current = null)}
              onClickCapture={onClickCapture}
            >
            {services.map((service, i) => {
              const off = offsetOf(i);
              const abs = Math.abs(off);
              return (
              <div
                key={service.id}
                className={`svc-cf__slide${off === 0 ? " is-active" : ""}${abs > 2 ? " is-far" : ""}`}
                data-index={i}
                style={{ "--off": off, "--abs": abs, zIndex: 20 - abs }}
                aria-hidden={off !== 0}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${services.length}: ${service.title}`}
              >
                {/* ElectricBorder wrap */}
                <ElectricBorder
                  color={service.color}      // per-card color
                  speed={0.3}
                  chaos={0.08}
                  displacement={8}
                  lineWidth={10}
                  style={{ borderRadius: 20 }}
                  className="eb-wrap"
                >
                  <div
                    className="card text-center shadow-sm border-0 h-100 position-relative service-card"
                    style={{
                      borderRadius: "20px",
                      overflow: "hidden",
                      background:'transparent'
                    }}
                  >
                    {/* Top Design strip */}
                    <div className="service-card__strip w-100">
                      <span className="service-card__index">{String(i + 1).padStart(2, "0")}</span>
                    </div>

                    {/* Profile image with glow ring */}
                    <div
                      className="position-relative d-flex justify-content-center"
                      style={{ marginTop: "-80px" }}
                    >
                      <div
                        className="service-card__ring"
                        style={{
                          width: "150px",
                          height: "150px",
                          borderRadius: "50%",
                          padding: "4px",
                          background:
                            "conic-gradient(from 180deg, #22d3ee, #38bdf8, #0ea5e9, #22d3ee)",
                          boxShadow: "0 12px 35px rgba(8,47,73,0.9)",
                        }}
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          src={service.image}
                          alt={`${service.title} services by NexaTech Innovation`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "50%",
                            border: "3px solid #020617",
                          }}
                        />
                      </div>
                    </div>

                    <div className="card-body px-4 pb-4 d-flex flex-column">
                      <h3
                        className="service-card__title mb-2 text-white"
                      >
                        {service.title}
                      </h3>

                      <p className="service-card__copy flex-grow-1">
                        {service.description}
                      </p>

                      {/* Animated outline button (smaller) */}
                      <button
                        className="nexa-btn mt-auto mx-auto"
                        tabIndex={off === 0 ? 0 : -1}
                        onClick={() => navigate(`/${service.url}`)}
                      >
                        <svg
                          className="nexa-btn-svg"
                          width="200"
                          height="50"
                          viewBox="0 0 300 80"
                        >
                          <rect
                            className="nexa-btn-line nexa-btn-line--outer"
                            strokeWidth="8"
                            stroke={service.color}
                            strokeLinecap="round"
                            fill="none"
                            x="4"
                            y="4"
                            width="292"
                            height="72"
                            rx="36"
                          />
                          <rect
                            className="nexa-btn-line nexa-btn-line--inner"
                            strokeWidth="4"
                            stroke={service.color}
                            strokeLinecap="round"
                            fill="none"
                            x="4"
                            y="4"
                            width="292"
                            height="72"
                            rx="36"
                          />
                        </svg>
                        <div className="nexa-btn-content">View Details</div>
                      </button>
                    </div>
                  </div>
                </ElectricBorder>
              </div>
              );
            })}
            </div>

            <div className="svc-cf__controls">
              <button type="button" className="svc-cf__arrow" onClick={() => go(-1)} aria-label="Previous service">
                <ChevronLeft size={22} />
              </button>
              <div className="svc-cf__info" aria-live="polite">
                <span className="svc-cf__count">
                  <strong>{String(active + 1).padStart(2, "0")}</strong> / {String(services.length).padStart(2, "0")}
                </span>
                <span className="svc-cf__name">{services[active].title}</span>
                <div className="svc-cf__dots">
                  {services.map((service, i) => (
                    <button
                      type="button"
                      key={service.id}
                      className={i === active ? "is-active" : ""}
                      onClick={() => setActive(i)}
                      aria-label={`Show ${service.title}`}
                      aria-current={i === active}
                    />
                  ))}
                </div>
              </div>
              <button type="button" className="svc-cf__arrow" onClick={() => go(1)} aria-label="Next service">
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 575.98px) {
            .responsive-text {
              font-size: 3.5rem !important;
            }
          }

          /* ElectricBorder wrapper spacing (important) */
          .eb-wrap {
            display: block;
            height: 100%;
          }
          .eb-wrap .eb-content {
            height: 100%;
          }

          .service-card {
            background: linear-gradient(180deg, rgba(17,24,34,.92), rgba(7,10,16,.96)) !important;
            transition: transform 0.45s cubic-bezier(.16,1,.3,1), box-shadow 0.45s ease;
          }
          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 30px 70px rgba(3, 10, 24, 0.9), 0 0 0 1px rgba(130, 216, 255, 0.18);
          }
          .service-card__strip {
            position: relative;
            height: 170px;
            border-bottom-left-radius: 999px;
            border-bottom-right-radius: 999px;
            background:
              radial-gradient(#4f8fd633 1px, transparent 1px) 0 0 / 18px 18px,
              linear-gradient(135deg, #d9efff 0%, #f4f9ff 55%, #b9dcff 100%);
            box-shadow: 0 10px 30px rgba(15,23,42,0.35);
          }
          .service-card__index {
            position: absolute; top: 18px; left: 22px;
            font-family: 'Rubik', sans-serif; font-size: 13px; font-weight: 600;
            letter-spacing: .08em; color: #1d4f86;
          }
          .service-card__ring { transition: transform .8s cubic-bezier(.16,1,.3,1), box-shadow .5s ease; }
          .service-card:hover .service-card__ring {
            transform: rotate(-6deg) scale(1.04);
            box-shadow: 0 18px 45px rgba(54,139,255,.45) !important;
          }
          .service-card__ring img { transition: transform .8s cubic-bezier(.16,1,.3,1); }
          .service-card:hover .service-card__ring img { transform: rotate(6deg); }
          .service-card__title {
            margin-top: 14px;
            font-family: 'Rubik', sans-serif;
            font-size: 1.45rem;
            font-weight: 500;
            letter-spacing: -.03em;
          }
          .service-card__copy { color: #929aaa; font-size: .92rem; line-height: 1.7; }

          /* ---------- Animated SVG Button ---------- */

          .nexa-btn {
            background: none;
            padding: 0;
            margin: 18px auto 0;
            border: none;
            display: block;
            backface-visibility: hidden;
            width: 220px;
            height: 56px;
            position: relative;
            color: #e5e7eb;
            font-size: 14px;
            transition: transform 300ms, color 300ms;
            cursor: pointer;
          }

          .nexa-btn-svg {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
          }

          .nexa-btn-line {
            stroke-dasharray: 336.05 336.05;
            stroke-dashoffset: 0;
          }

          @keyframes nexa-outer-dashoffset {
            0% { stroke-dashoffset: 0; stroke-dasharray: 336.05 336.05; }
            50% { stroke-dasharray: 224.03 448.06; }
            100% { stroke-dashoffset: 672.1; stroke-dasharray: 336.05 336.05; }
          }

          .nexa-btn-line--outer {
            animation: nexa-outer-dashoffset 6s linear infinite;
          }

          @keyframes nexa-inner-dashoffset {
            0% { stroke-dashoffset: 0; stroke-dasharray: 336.05 336.05; }
            50% { stroke-dasharray: 224.03 448.06; }
            100% { stroke-dashoffset: -672.1; stroke-dasharray: 336.05 336.05; }
          }

          .nexa-btn-line--inner {
            animation: nexa-inner-dashoffset 5s linear infinite;
          }

          .nexa-btn-content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
            position: relative;
            z-index: 1;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }

          .nexa-btn:hover,
          .nexa-btn:focus {
            color: #f9fafb;
            transform: scale(1.05);
          }

          .nexa-btn:hover .nexa-btn-line,
          .nexa-btn:focus .nexa-btn-line {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </>
  );
};

export default ServicesSection;
