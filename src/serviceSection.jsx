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


import ElectricBorder from "./Ui/ElectricBorder";



const ServicesSection = () => {

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
        className="py-5"
        style={{ backgroundColor: "#020617", color: "#e5e7eb" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />

        <div className="container py-5">
          {/* ASCII Heading - Top Center */}
          

          {/* Description Text */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <p className="mb-1">
                <span className="fw-semibold">NexaTech Innovation</span>{" "}
                delivers everything you need to go digital — web development,
                mobile apps, backend systems, API engineering, and secure
                database management.
              </p>
              <p className="mb-0">
                We build reliable, high-performing software backed with SEO,
                UI/UX design, automation, and optimization — helping startups
                and brands launch, scale, and grow with confidence.
              </p>
            </div>
          </div>

          {/* Services Cards Grid */}
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-12 col-md-4">
                {/* ElectricBorder wrap */}
                <ElectricBorder
                  color={service.color}      // per-card color
                  speed={0.3}
                  chaos={0.08}
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
                    <div
                      className="w-100"
                      style={{
                        height: "170px",
                        background:
                          "linear-gradient(135deg, #e0f2fe, #f9fafb)",
                        borderBottomLeftRadius: "999px",
                        borderBottomRightRadius: "999px",
                        boxShadow: "0 10px 30px rgba(15,23,42,0.35)",
                      }}
                    />

                    {/* Profile image with glow ring */}
                    <div
                      className="position-relative d-flex justify-content-center"
                      style={{ marginTop: "-80px" }}
                    >
                      <div
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
                        className="h5 mb-2 text-white"
                        style={{
                          fontFamily: "orbitron",
                          letterSpacing: "0.03em",
                          marginTop: "12px",
                        }}
                      >
                        {service.title}
                      </h3>

                      <p
                        className="text-white-50 small flex-grow-1"
                        style={{ lineHeight: 1.6 }}
                      >
                        {service.description}
                      </p>

                      {/* Animated outline button (smaller) */}
                      <button
                        className="nexa-btn mt-auto mx-auto"
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
            ))}
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
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          }

          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 26px 60px rgba(15, 23, 42, 0.95);
            border-color: rgba(56, 189, 248, 0.7);
          }

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
