import FeatureSection from "./features";
import TechnologyExpertise from "./experites";
import HappyClients from "./client";
import WebDevelopmentFAQ from "./webdevfaqs";

export default function DevExperience() {
  return (
    <div style={{ background: "var(--site-bg)", minHeight: "100svh" }}>
      <FeatureSection />
      <TechnologyExpertise />
      <HappyClients />
      <WebDevelopmentFAQ />
    </div>
  );
}
