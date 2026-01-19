import React from "react";
import Header from "./header";
import HomeBanner from "./HomeBanner";
import WhoWeAre from "./whoWeAre";
import StatsSection from "./count";
import ServicesSection from "./serviceSection";
import ClientReviews from "./clientReview";
import CompanyIntro from "./compnay";
import Footer from "./footer";
import InfiniteZoomGallery from "./Ui/InfiniteZoomGallery";
import DomeGallery from "./Ui/DomegaGallery";


import ASCIIText from "./Ui/Ascii";


function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NexaTech Innovation",
    alternateName: [
      "NexaTechInnovation",
      "Nexa Tech Innovation",
      "Nexa tech innovation",
      "nexa tech innovation",
      "nexatech innovation",
      "nexatechinnovation",
      "Nexatechinnovation",
      "Nexatech Innovation",
    ],
    url: "https://nexatechinnovation.in/",
    sameAs: [
      "https://www.linkedin.com/....",
      "https://www.instagram.com/....",
    ],
  };

  // cosnt [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <Header />
      <HomeBanner />
      <WhoWeAre />
      <StatsSection />

      <section
  className="py-3"
  style={{
    backgroundColor: "#020617",
    color: "#e5e7eb",
  
  }}
>
  <div className="container">
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "300px",     // fixed space
        minHeight: "300px",
        overflow: "hidden",  // overlap roko
        display: "block",
      }}
    >
      <ASCIIText text="Our Services" enableWaves asciiFontSize={7} />
    </div>
  </div>
</section>

      <ServicesSection />

       <section className="py-5" style={{ backgroundColor: "#020617", color: "#e5e7eb" }}>
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
            Our Portfolios
          </h2>
        </div>
      </section>
   <InfiniteZoomGallery />
     <section className="py-5" style={{ backgroundColor: "#020617", color: "#e5e7eb" }}>
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
            Experties & TechStacks
          </h2>
        </div>
      </section>
   <div style={{ width: '100%', height: '800px', position: 'relative' }}>
     <DomeGallery />
   </div>



      <CompanyIntro />
   
      <ClientReviews />

     
      <Footer />
    </>
  );
}

export default Home;
