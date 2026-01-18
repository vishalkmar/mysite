import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import one from '../src/serviceImages/office/one.jpg';
import two from '../src/serviceImages/office/two.jpg';
import three from '../src/serviceImages/office/three.jpg';
import four from '../src/serviceImages/office/four.jpg';

import ParagraphText3 from './Ui/ParagraphTextThree';

const CompanyIntro = () => {
  const wrapRef = useRef(null);

  const companyIntroSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NexaTech Innovation",
    "url": "https://nexatechinnovation.in/",
    "description":
      "IT service provider offering web development, mobile app development, UI/UX design, SEO, digital marketing and branding.",
    "knowsAbout": [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "SEO",
      "Digital Marketing",
      "Logo Design",
      "Brand Identity",
    ],
  };

  const images = [one, two, three, four];

  return (
    <>
      <section className="py-5" style={{ backgroundColor: "#020617", color: "#e5e7eb" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(companyIntroSchema) }}
        />

        <div className="container">
          <h2
            className="py-5 text-center responsive-text"
            style={{
              fontWeight: "bold",
              fontFamily: "orbitron",
              fontSize: "3.5rem",
              background: "linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Empowering Brands with Digital Excellence
          </h2>

          <div className="row align-items-center">
            {/* Image Grid */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="row g-3">
                {images.map((src, index) => (
                  <div key={index} className="col-6">
                    <img
                      src={src}
                      alt={`NexaTech Innovation workspace - team culture and digital services (${index + 1})`}
                      className="img-fluid rounded shadow-sm"
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="col-lg-6 text-white">
              <h3
                className="fw-bold text-uppercase mb-3"
                style={{ fontSize: "2rem", fontFamily: "orbitron" }}
              >
                BUILDING DIGITAL FUTURES WITH CREATIVE INNOVATION
              </h3>

              <div ref={wrapRef}>
                <div
                  style={{
                    height: "5px",
                    width: "120px",
                    background: "linear-gradient(to right, #facc15, #8b5cf6)",
                    marginBottom: "1.5rem",
                  }}
                />

                {/* Paragraph 1 */}
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  <ParagraphText3
                    label="We help businesses grow with "
                    containerRef={wrapRef}
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 900"
                    radius={110}
                    scrollEffect={true}
                    style={{ display: "inline" }}
                  />

                  <strong style={{ fontFamily: "orbitron" }}>Web Development</strong>,{" "}
                  <strong style={{ fontFamily: "orbitron" }}>Mobile App Development</strong>,{" "}
                  <strong style={{ fontFamily: "orbitron" }}>UI/UX Design</strong>,{" "}
                  <strong style={{ fontFamily: "orbitron" }}>SEO</strong>,{" "}
                  <strong style={{ fontFamily: "orbitron" }}>Digital Marketing</strong>,{" "}

                  <ParagraphText3
                    label="and "
                    containerRef={wrapRef}
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 900"
                    radius={110}
                    scrollEffect={true}
                    style={{ display: "inline" }}
                  />

                  <strong style={{ fontFamily: "orbitron" }}>Brand Identity & Logo Design</strong>

                  <ParagraphText3
                    label=". Our team delivers tailored solutions that combine creativity with modern technology to build fast, scalable and conversion-focused digital experiences."
                    containerRef={wrapRef}
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 900"
                    radius={110}
                    scrollEffect={true}
                    style={{ display: "inline" }}
                  />
                </p>

                {/* Paragraph 2 */}
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  <ParagraphText3
                    label="Whether you're launching a startup or scaling an enterprise, we deliver reliable software and marketing execution that improves visibility, user experience, and lead generation."
                    containerRef={wrapRef}
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 900"
                    radius={110}
                    scrollEffect={true}
                    style={{ display: "inline" }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 575.98px) {
          .responsive-text {
            font-size: 2.8rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default CompanyIntro;
