/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { SkFAQ, SkCTA } from "../serviceKit/ServiceKit";

const faqs = [
  {
    question: "What’s your approach to UI/UX design?",
    answer: "We focus on user-centered design, beginning with research, wireframes, and prototypes, then final UI using modern design systems."
  },
  {
    question: "Which tools do you use for designing?",
    answer: "We use Figma, Adobe XD, Sketch, and InVision for UI/UX design and collaboration."
  },
  {
    question: "Do you conduct user testing?",
    answer: "Yes, we conduct usability testing sessions to ensure the design meets user expectations before finalizing."
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer: "Definitely. We incorporate your branding, color schemes, and fonts to ensure consistency across all platforms."
  },
  {
    question: "Will the design be responsive and mobile-friendly?",
    answer: "Yes, we design mobile-first and ensure responsiveness across all devices using grids and adaptive layouts."
  },
  {
    question: "Do you provide interactive prototypes?",
    answer: "Yes, our designs are shared as interactive prototypes so stakeholders can review and give feedback before development."
  }
];

const UiUxFAQ = () => (
  <>
    <SkFAQ heading={{"eyebrow": "UI/UX design FAQ", "title": "Good questions.", "accent": "Straight answers.", "copy": "What clients usually ask before starting a ui/ux design project with us."}} faqs={faqs} />
    <SkCTA />
  </>
);

export default UiUxFAQ;
