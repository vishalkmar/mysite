/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { SkFAQ, SkCTA } from "../../serviceKit/ServiceKit";

const faqs = [
  {
    question: "What is SEO and why is it important for my business?",
    answer: "SEO (Search Engine Optimization) improves your website’s visibility in search engines like Google, helping potential customers find you organically and increasing traffic without paid ads."
  },
  {
    question: "What’s the difference between on-page and off-page SEO?",
    answer: "On-page SEO focuses on optimizing your website content, meta tags, and structure. Off-page SEO involves building backlinks, social signals, and improving your site’s authority externally."
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term strategy. Typically, noticeable improvements in rankings and traffic appear within 3–6 months, depending on competition and effort."
  },
  {
    question: "Do you perform keyword research?",
    answer: "Yes, we conduct thorough keyword research using tools like SEMrush and Google Keyword Planner to target terms your audience is actively searching for."
  },
  {
    question: "Will you optimize my website's speed and mobile usability?",
    answer: "Absolutely. We optimize load speed, mobile responsiveness, and Core Web Vitals to enhance both user experience and SEO rankings."
  },
  {
    question: "Do you provide SEO reports and analytics?",
    answer: "Yes, we provide monthly SEO reports showing keyword rankings, traffic, backlinks, technical issues, and suggested improvements."
  }
];

const SeoFAQ = () => (
  <>
    <SkFAQ heading={{"eyebrow": "SEO FAQ", "title": "Good questions.", "accent": "Straight answers.", "copy": "What clients usually ask before starting a SEO project with us."}} faqs={faqs} />
    <SkCTA />
  </>
);

export default SeoFAQ;
