import React, { lazy } from "react";
import Header from "./header";
import HomeBanner from "./HomeBanner";
import ServicesSection from "./serviceSection";
import ClientReviews from "./clientReview";
import CompanyIntro from "./compnay";
import Footer from "./footer";
const InfiniteZoomGallery = lazy(() => import("./Ui/InfiniteZoomGallery"));
const DomeGallery = lazy(() => import("./Ui/DomegaGallery"));
import DeferredSection from "./Ui/DeferredSection";
import ParticleText from "./ApexUI-Kit/ParticleText/ParticleText";
import SectionHeading from "./Ui/SectionHeading";
import {
  HomeTwoScope,
  HomeTwoHero,
  HomeTwoStory,
  HomeTwoClosing,
} from "./homeTwo/HomeTwoSections";
import useHomeTwoDocument from "./homeTwo/useHomeTwoDocument";




function Home() {
  useHomeTwoDocument();
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
      <section className="home-particle-brand" aria-label="NexaTech Innovation" data-pause-pointer-effects>
        <p className="home-particle-brand__eyebrow">Imagine. Build. Evolve.</p>
        <ParticleText text="NEXATECH" intro="assemble" replayOn="hover"
          accentColor="#00e0ff" particleSize={2} gap={4}
          height="clamp(12rem, 25vw, 24rem)" />
        <p className="home-particle-brand__caption">Ideas into digital experiences. Built for what comes next.</p>
      </section>
      <HomeTwoScope>
        <HomeTwoHero HeadingTag="h2" />
        <HomeTwoStory withProcess={false} />
      </HomeTwoScope>

      <SectionHeading
        id="services"
        eyebrow="Our services"
        index="09 disciplines"
        title="Everything you need"
        accent="to go digital."
        copy="Web development, mobile apps, backend systems and APIs, backed by SEO, UI/UX design, automation and marketing. Built for startups and brands that want to launch, scale and grow with confidence."
      />
      <ServicesSection />

      <SectionHeading
        eyebrow="Selected work"
        index="Portfolio"
        title="Our portfolio."
        accent="Work in motion."
        copy="Websites, apps and brands we have designed and shipped. Scroll in and explore the details."
      />
   <DeferredSection component={InfiniteZoomGallery} minHeight="100svh" label="Our portfolio" />
      <SectionHeading
        eyebrow="Expertise & tech stack"
        index="Tools we trust"
        title="Modern stack."
        accent="Proven expertise."
        copy="React, Next.js, Node, mobile frameworks, cloud and the design tools behind them. Drag the dome to explore what we build with."
      />
   <div style={{ width: '100%', height: '800px', position: 'relative' }}>
     <DeferredSection component={DomeGallery} minHeight={800} label="Our technologies" />
   </div>



      <CompanyIntro />
   
      <ClientReviews />

      <HomeTwoScope>
        <HomeTwoClosing withPlayground={false} />
      </HomeTwoScope>

     
      <Footer />
    </>
  );
}

export default Home;
