/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { SkFAQ, SkCTA } from "../serviceKit/ServiceKit";

const faqs = [
  {
    question: "What type of websites do you design?",
    answer: "We design corporate websites, landing pages, e-commerce platforms, blogs, and custom web portals tailored to your goals."
  },
  {
    question: "Are your websites SEO-friendly?",
    answer: "Yes, we follow SEO best practices such as semantic HTML, fast loading speeds, mobile responsiveness, and clean URLs."
  },
  {
    question: "Can you redesign our old website?",
    answer: "Absolutely. We offer complete website revamps that improve both visuals and performance metrics."
  },
  {
    question: "Do you provide custom or template-based designs?",
    answer: "We offer both options — fully custom designs as well as faster, cost-effective template-based solutions."
  },
  {
    question: "Will the design be responsive?",
    answer: "Yes, we follow mobile-first design and ensure full responsiveness using Bootstrap or Tailwind CSS."
  },
  {
    question: "How long does it take to design a website?",
    answer: "Typical design projects take 2-4 weeks depending on complexity and number of pages."
  }
];

const WebDesignFAQ = () => (
  <>
    <SkFAQ heading={{"eyebrow": "Web design FAQ", "title": "Good questions.", "accent": "Straight answers.", "copy": "What clients usually ask before starting a web design project with us."}} faqs={faqs} />
    <SkCTA />
  </>
);

export default WebDesignFAQ;
