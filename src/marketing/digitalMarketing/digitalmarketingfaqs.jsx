/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { SkFAQ, SkCTA } from "../../serviceKit/ServiceKit";

const faqs = [
  {
    question: "What services are included in your digital marketing package?",
    answer: "Our digital marketing services include SEO, social media marketing, email marketing, PPC campaigns, and analytics tracking."
  },
  {
    question: "How do you develop a digital marketing strategy?",
    answer: "We analyze your business, competitors, and target audience to create a tailored digital strategy that aligns with your goals."
  },
  {
    question: "Do you manage social media accounts?",
    answer: "Yes, we handle content creation, posting schedules, audience engagement, and performance monitoring across all major platforms."
  },
  {
    question: "Can you help with paid ad campaigns?",
    answer: "Definitely. We manage PPC campaigns on Google Ads, Facebook, Instagram, and LinkedIn to drive targeted traffic and conversions."
  },
  {
    question: "How often do you report campaign performance?",
    answer: "We provide detailed monthly reports with insights on traffic, engagement, ad performance, and actionable recommendations."
  },
  {
    question: "Will I have access to campaign data?",
    answer: "Yes, we ensure full transparency. You’ll have access to dashboards and data, and we walk you through the results regularly."
  }
];

const DigitalFAQ = () => (
  <>
    <SkFAQ heading={{"eyebrow": "Digital marketing FAQ", "title": "Good questions.", "accent": "Straight answers.", "copy": "What clients usually ask before starting a digital marketing project with us."}} faqs={faqs} />
    <SkCTA />
  </>
);

export default DigitalFAQ;
