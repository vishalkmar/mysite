import dev from "./New folder/web development.png";
import design from "./New folder/webdesign.png";
import digital from "./New folder/digitalmarket.png";
import appdev from "./New folder/mobileapp.jpeg";
import seo from "./New folder/seo.jpeg";
import one from "./New folder/one.png";
import uiux from "./New folder/Uiux.jpeg";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Code,
  Palette,
  Smartphone,
  Globe,
  TrendingUp,
  Monitor,
  Database,
} from "lucide-react";

const SERVICES = [
  {
    id: 1,
    category: "WEB DEVELOPMENT",
    title: "Web Development",
    description:
      "We build robust, scalable, and high-performance websites using modern technologies like React, Next.js, and Node.js. From custom web applications to complex enterprise solutions, we turn your vision into code.",
    seoTitle: "Web Development Company | NexaTech Innovation",
    seoDescription:
      "We build fast, secure, and scalable websites and web applications using React, Next.js, and Node.js. From business websites to custom dashboards and portals, we deliver performance-focused development with modern UI.",
    image: dev,
    icon: Code,
  },
  {
    id: 2,
    category: "DESIGN",
    title: "Web Design",
    description:
      "Our creative team designs stunning, responsive, and user-friendly websites that capture your brand identity. We focus on aesthetics, functionality, and providing an intuitive user experience across all devices.",
    seoTitle: "Website Design Services | Modern Responsive Web Design",
    seoDescription:
      "Get premium, responsive website design that matches your brand. We create mobile-first layouts, clean UI, and conversion-focused sections to improve user experience and generate more leads.",
    image: design,
    icon: Palette,
  },
  {
    id: 3,
    category: "MOBILE",
    title: "App Development",
    description:
      "Transform your ideas into powerful mobile applications for iOS and Android. We develop native and cross-platform apps that offer seamless performance and engaging user interfaces for your customers.",
    seoTitle: "Mobile App Development | Android & iOS Apps",
    seoDescription:
      "Turn your idea into a high-performance Android and iOS app. We build user-friendly mobile apps with smooth UI, reliable backend integration, and scalable architecture for startups and businesses.",
    image: appdev,
    icon: Smartphone,
  },
  {
    id: 4,
    category: "MARKETING",
    title: "Digital Marketing",
    description:
      "Accelerate your growth with our data-driven digital marketing strategies. From social media campaigns to content marketing, we help you reach your target audience and convert leads into loyal customers.",
    seoTitle: "Digital Marketing Services | Growth & Lead Generation",
    seoDescription:
      "Grow your business with result-driven digital marketing: social media, content strategy, paid campaigns, and lead generation. We target the right audience, improve conversions, and build strong online visibility.",
    image: digital,
    icon: Globe,
  },
  {
    id: 5,
    category: "GROWTH",
    title: "SEO Optimization",
    description:
      "Improve your visibility on search engines and drive organic traffic to your site. Our SEO experts use proven strategies to rank your website higher, ensuring your business gets found by the right people.",
    seoTitle: "SEO Services | Rank Higher on Google",
    seoDescription:
      "Improve Google rankings with technical SEO, on-page SEO, speed optimization, keyword research, and content improvements. Get more organic traffic, better visibility, and qualified leads from search engines.",
    image: seo,
    icon: TrendingUp,
  },
  {
    id: 6,
    category: "EXPERIENCE",
    title: "UI/UX Design",
    description:
      "We craft user-centric interfaces that are both beautiful and functional. Our design process involves deep user research and prototyping to ensure every interaction is intuitive and delightful.",
    seoTitle: "UI/UX Design Services | Website & App UI/UX",
    seoDescription:
      "We design user-centric UI/UX for websites and mobile apps—wireframes, prototypes, and clean interfaces that improve usability, engagement, and conversions with intuitive user journeys.",
    image: uiux,
    icon: Monitor,
  },
  {
    id: 7,
    category: "ENGINEERING",
    title: "Software Development",
    description:
      "Custom software solutions tailored to your specific business needs. We engineer reliable, secure, and scalable software systems that streamline your operations and drive efficiency.",
    seoTitle: "Custom Software Development",
    seoDescription:
      "We build custom software solutions like CRM/ERP modules, automation tools, and secure backend systems. Reliable, scalable software that improves efficiency, reduces manual work, and supports business growth.",
    image: one,
    icon: Database,
  },
];


export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const len = SERVICES.length;
  const currentData = SERVICES[currentIndex];
  const CurrentIcon = currentData.icon;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % len);
    }, 6000);
    return () => clearInterval(id);
  }, [len]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % len);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + len) % len);
  };

  const getNextItems = () => {
    const items = [];
    for (let i = 1; i <= 3; i++) {
      const index = (currentIndex + i) % len;
      items.push(SERVICES[index]);
    }
    return items;
  };

  const previewItems = getNextItems();

  return (
    <div className="hero-wrapper" style={{marginTop:'80px'}}>
      {/* Background */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="hero-bg"
        >
          <img
            src={currentData.image}
            alt={currentData.title}
            className="hero-bg-img"
          />
          <div className="hero-bg-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="hero-inner container">
        <div className="row align-items-center h-100">
          {/* LEFT TEXT */}
          <div className="col-lg-7 pt-5 pt-lg-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="hero-text-block"
              >
                <div className="hero-meta-row">
                  <motion.span
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="hero-meta-counter"
                  >
                    <CurrentIcon size={16} />
                    {String(currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(len).padStart(2, "0")}
                  </motion.span>
                  <div className="hero-meta-line" />
                  <motion.span
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="hero-meta-brand"
                  >
                    NexaTechInnovation.in
                  </motion.span>
                </div>

                {/* MAIN HEADING – responsive now */}
               <h1 className="hero-title">{currentData.seoTitle}</h1>
<p className="hero-description">{currentData.seoDescription}</p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <button className="hero-btn">
                    View Service
                    <ArrowRight className="hero-btn-icon" />
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT PREVIEW CARDS */}
          <div className="col-lg-5 position-relative d-flex justify-content-lg-end justify-content-start mt-4 mt-lg-0">
            <div className="hero-preview-area">
              <AnimatePresence initial={false}>
                {previewItems.slice(0, 2).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: 120 + index * 220, opacity: 0, scale: 0.8 }}
                    animate={{
                      x: index * 240,
                      y: 0,
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      x: -200,
                      opacity: 0,
                      scale: 0.8,
                      transition: { duration: 0.5 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                    }}
                    className="hero-preview-card"
                    onClick={() => {
                      const newIndex = SERVICES.findIndex(
                        (s) => s.id === item.id
                      );
                      setCurrentIndex(newIndex);
                    }}
                  >
                    <div className="hero-preview-overlay" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="hero-preview-img"
                    />

                    <div className="hero-preview-content">
                      <p className="hero-preview-category">{item.category}</p>
                      <h3 className="hero-preview-title">{item.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* NAV BUTTONS - bottom center */}
        <div className="hero-nav">
          <button onClick={prevSlide} className="hero-nav-btn">
            <ArrowLeft size={22} />
          </button>
          <button onClick={nextSlide} className="hero-nav-btn">
            <ArrowRight size={22} />
          </button>
        </div>
      </div>

      {/* INLINE CSS */}
      <style>{`
        .hero-wrapper {
          position: relative;
          width: 100%;
          min-height: 75vh;
          max-height: 80vh;
          color: #fff;
          background: #000;
          overflow: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.35), transparent 55%),
                      rgba(0, 0, 0, 0.7);
        }

        .hero-inner {
          position: relative;
          z-index: 10;
          height: 100%;
          padding-top: 40px;
          padding-bottom: 40px;
        }

        .hero-text-block {
          max-width: 640px;
        }

        .hero-meta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 0.9rem;
          margin-bottom: 18px;
        }

        .hero-meta-counter {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #60a5fa;
        }

        .hero-meta-line {
          width: 48px;
          height: 1px;
          background: rgba(255, 255, 255, 0.6);
        }

        .hero-meta-brand {
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(229, 231, 235, 0.9);
          font-size: 0.75rem;
        }

        /* MAIN HEADING – fully responsive */
        .hero-title {
          font-family: "Orbitron", system-ui, sans-serif;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 18px;
          line-height: 1.1;
          /* Responsive size */
          font-size: clamp(2rem, 3vw, 2.5rem);
          /* Gradient text */
          background: linear-gradient(90deg, rgb(242, 244, 247) 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          word-break: break-word;
        }

        .hero-description {
          font-size: 1rem;
          line-height: 1.7;
          max-width: 520px;
          color: #e5e7eb;
          border-left: 4px solid #3b82f6;
          padding-left: 18px;
          margin-bottom: 28px;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 32px;
          border-radius: 999px;
          border: none;
          background-image: linear-gradient(135deg, #2563eb, #38bdf8);
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 22px 60px rgba(37, 99, 235, 0.6);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .hero-btn-icon {
          margin-left: 8px;
          transition: transform 0.2s ease;
        }

        .hero-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 26px 72px rgba(37, 99, 235, 0.9);
        }

        .hero-btn:hover .hero-btn-icon {
          transform: translateX(3px);
        }

        .hero-preview-area {
          position: relative;
          width: 100%;
          height: 320px;
          display: flex;
          align-items: center;
        }

        .hero-preview-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 220px;
          height: 320px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 24px 55px rgba(15, 23, 42, 0.9);
          border: 4px solid rgba(255, 255, 255, 0.08);
          cursor: pointer;
          background: #020617;
        }

        .hero-preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease, opacity 0.5s ease;
          opacity: 0.85;
        }

        .hero-preview-card:hover .hero-preview-img {
          transform: scale(1.08);
          opacity: 1;
        }

        .hero-preview-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
          transition: background 0.3s ease;
          z-index: 5;
        }

        .hero-preview-card:hover .hero-preview-overlay {
          background: rgba(0, 0, 0, 0);
        }

        .hero-preview-content {
          position: absolute;
          inset-inline: 0;
          bottom: 0;
          padding: 16px 18px 18px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.88),
            rgba(0, 0, 0, 0.6),
            transparent
          );
          z-index: 10;
        }

        .hero-preview-category {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #60a5fa;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .hero-preview-title {
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }

        /* NAV bottom center */
        .hero-nav {
          position: absolute;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          display: flex;
          gap: 14px;
          z-index: 20;
        }

        .hero-nav-btn {
          width: 54px;
          height: 54px;
          border-radius: 999px;
          border: 1px solid rgba(248, 250, 252, 0.2);
          background: rgba(15, 23, 42, 0.7);
          color: #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.2s ease;
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.9);
        }

        .hero-nav-btn:hover {
          background: rgba(248, 250, 252, 0.16);
          transform: translateY(-2px);
          border-color: rgba(248, 250, 252, 0.4);
        }

        /* TABLET */
        @media (max-width: 991.98px) {
          .hero-wrapper {
            max-height: none;
            min-height: 80vh;
          }
          .hero-inner {
            padding-top: 32px;
            padding-bottom: 32px;
          }
          .hero-title {
            font-size: clamp(1.8rem, 5vw, 3.2rem);
            line-height: 1.15;
          }
          .hero-preview-area {
            height: 260px;
          }
          .hero-preview-card {
            width: 190px;
            height: 260px;
          }
        }

        /* MOBILE */
        @media (max-width: 767.98px) {
          .hero-inner {
            padding-top: 28px;
            padding-bottom: 28px;
          }
          .hero-meta-row {
            font-size: 0.75rem;
            gap: 10px;
          }
          .hero-title {
            font-size: clamp(1.6rem, 8vw, 2.4rem);
            letter-spacing: 0.06em;
          }
          .hero-description {
            font-size: 0.95rem;
            max-width: 100%;
          }
          .hero-preview-area {
            margin-top: 16px;
            height: 230px;
          }
          .hero-preview-card {
            width: 170px;
            height: 230px;
          }
          .hero-nav-btn {
            width: 46px;
            height: 46px;
          }
        }

        /* Very small devices */
        @media (max-width: 480px) {
          .hero-title {
            font-size: clamp(1.4rem, 9vw, 2.1rem);
          }
          .hero-description {
            border-left-width: 3px;
            padding-left: 12px;
          }
        }
      `}</style>
    </div>
  );
}
