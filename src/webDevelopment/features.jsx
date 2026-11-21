/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import responsive from "../serviceImages/webdevelopment/reponsive.png";
import chat from "../serviceImages/webdevelopment/chat-social-integration.png";
import seo from "../serviceImages/webdevelopment/seo-friendly.png";
import payment from "../serviceImages/webdevelopment/payment.webp";
import speed from "../serviceImages/webdevelopment/speed.png";
import security from "../serviceImages/webdevelopment/security.webp";
import { SkFeatures } from "../serviceKit/ServiceKit";

const services = [
      {
        id: 1,
        title: "Responsive Design",
        description:
          "Pixel-perfect layouts that adapt seamlessly across mobile, tablet, and desktop for a consistently premium experience.",
        image: responsive,
      },
      {
        id: 2,
        title: "SEO Optimization",
        description:
          "Search-first architecture with on-page and technical SEO that improves crawlability, indexing, and visibility on Google.",
        image: seo,
      },
      {
        id: 3,
        title: "Live Chat Integration",
        description:
          "Real-time chat and smart automation to convert visitors faster and provide instant support without friction.",
        image: chat,
      },
      {
        id: 4,
        title: "Payment Gateway Setup",
        description:
          "Secure payment integrations with trusted gateways, smooth checkout flows, and proper transaction handling end-to-end.",
        image: payment,
      },
      {
        id: 5,
        title: "Site Speed Optimization",
        description:
          "Performance tuning for faster load times, better Core Web Vitals, and a smoother user journey that ranks better.",
        image: speed,
      },
      {
        id: 6,
        title: "Advanced Security",
        description:
          "Hardened security layers including SSL, best-practice headers, malware protection, and proactive safeguards.",
        image: security,
      },
    ];

const items = services.map(({ title, description, image }) => ({ title, desc: description, image }));

const FeatureSection = () => (
  <SkFeatures
    heading={{
      eyebrow: "What every build includes",
      title: "Built in,",
      accent: "not bolted on.",
      copy: "Every website we ship comes with the essentials that make it fast, findable, secure and ready to convert.",
    }}
    items={items}
  />
);

export default FeatureSection;
