import React, { lazy } from "react";
import Header from "./header";
import HomeBanner from "./HomeBanner";
import WhoWeAre from "./whoWeAre";
import StatsSection from "./count";
const ServicesSection = lazy(() => import("./serviceSection"));
import ClientReviews from "./clientReview";
import CompanyIntro from "./compnay";
import Footer from "./footer";
const InfiniteZoomGallery = lazy(() => import("./Ui/InfiniteZoomGallery"));
const DomeGallery = lazy(() => import("./Ui/DomegaGallery"));
import DeferredSection from "./Ui/DeferredSection";


const ASCIIText = lazy(() => import("./Ui/Ascii"));


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
    backgroundColor: "var(--site-bg)",
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
      <DeferredSection component={ASCIIText} minHeight={300} label="Our Services" text="Our Services" enableWaves asciiFontSize={7} />
    </div>
  </div>
</section>

      <DeferredSection component={ServicesSection} minHeight={1400} label="Explore our services" />

       <section className="py-5" style={{ backgroundColor: "var(--site-bg)", color: "#e5e7eb" }}>
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
   <DeferredSection component={InfiniteZoomGallery} minHeight="100svh" label="Our portfolio" />
     <section className="py-5" style={{ backgroundColor: "var(--site-bg)", color: "#e5e7eb" }}>
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
     <DeferredSection component={DomeGallery} minHeight={800} label="Our technologies" />
   </div>



      <CompanyIntro />
   
      <ClientReviews />

     
      <Footer />
    </>
  );
}

export default Home;
