/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { SkFAQ, SkCTA } from "../../serviceKit/ServiceKit";

const faqs = [
  {
    question: "Why is a professional logo important for my brand?",
    answer: "A professional logo builds trust, reflects your brand identity, and helps create a strong, memorable impression in the minds of your customers."
  },
  {
    question: "What is your logo design process?",
    answer: "We start with a design brief and competitor analysis, followed by multiple concept drafts, revisions based on feedback, and final delivery in multiple formats."
  },
  {
    question: "How many logo concepts will I receive?",
    answer: "We typically provide 2–4 initial logo concepts depending on your package, and then refine the one you like best through revision rounds."
  },
  {
    question: "Do I get full ownership of the logo after it’s designed?",
    answer: "Yes, once the project is completed, you’ll receive full ownership rights and source files for the final logo design."
  },
  {
    question: "What file formats will I get?",
    answer: "You’ll receive your logo in various formats including AI, EPS, SVG, PNG, and JPG, suitable for both print and digital use."
  },
  {
    question: "Can you design logos for specific industries or niches?",
    answer: "Yes, we customize each logo based on your industry, target audience, and brand tone to ensure it aligns perfectly with your business."
  }
];

const LogoDesignFAQ = () => (
  <>
    <SkFAQ heading={{"eyebrow": "Logo design FAQ", "title": "Good questions.", "accent": "Straight answers.", "copy": "What clients usually ask before starting a logo design project with us."}} faqs={faqs} />
    <SkCTA />
  </>
);

export default LogoDesignFAQ;
