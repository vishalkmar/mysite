import SoftwareDevelopmentExpertise from "./softwaredevexperties";
import SoftwareDevelopmentShowcase from "./softwaredevelopmentshaowcase";
import SoftwareDevFAQ from "./softwaredevfaqs";

export default function SoftwareExperience() {
  return (
    <div style={{ background: "var(--site-bg)", minHeight: "100svh" }}>
      <SoftwareDevelopmentShowcase />
      <SoftwareDevelopmentExpertise />
      <SoftwareDevFAQ />
    </div>
  );
}
