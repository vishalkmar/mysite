/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { SkFAQ, SkCTA } from "../../serviceKit/ServiceKit";

const faqs = [
  {
    question: "What is your approach to content marketing?",
    answer: "We develop a strategy based on your brand goals, target audience, and channels. Then we create SEO-optimized content tailored for engagement and conversion."
  },
  {
    question: "What types of content do you create?",
    answer: "We create blogs, articles, social media posts, infographics, videos, email newsletters, and case studies based on your business objectives."
  },
  {
    question: "Do you handle content planning and scheduling?",
    answer: "Yes, we offer complete editorial planning, including content calendars, topic research, and scheduled publishing across platforms."
  },
  {
    question: "Can you optimize content for SEO?",
    answer: "Absolutely. We ensure all content includes relevant keywords, proper structure, and meta tags to improve search engine visibility."
  },
  {
    question: "Do you offer content writing only in English?",
    answer: "While English is our primary language, we can accommodate content in other languages depending on project requirements."
  },
  {
    question: "How do you measure content marketing success?",
    answer: "We track performance through metrics like traffic, engagement, lead generation, and conversions using tools like Google Analytics and social insights."
  }
];

const ContentMarketingFAQ = () => (
  <>
    <SkFAQ heading={{"eyebrow": "Content marketing FAQ", "title": "Good questions.", "accent": "Straight answers.", "copy": "What clients usually ask before starting a content marketing project with us."}} faqs={faqs} />
    <SkCTA />
  </>
);

export default ContentMarketingFAQ;
