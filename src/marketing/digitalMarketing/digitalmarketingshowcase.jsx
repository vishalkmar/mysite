/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaBullseye, FaGlobe, FaEnvelopeOpenText, FaPoll } from 'react-icons/fa';
import showcase from '../../serviceImages/software/digitalmarketingtwo.jpg';
import { SkShowcase } from "../../serviceKit/ServiceKit";

const features = [
  { title: "Targeted Campaigns", desc: "Reach your ideal audience through data-driven targeting.", icon: <FaBullseye />, color: "#6f42c1" },
  { title: "SEO & SEM", desc: "Boost organic traffic and manage Google Ads effectively.", icon: <FaGlobe />, color: "#28a745" },
  { title: "Email Marketing", desc: "Engage your audience with compelling and personalized email campaigns.", icon: <FaEnvelopeOpenText />, color: "#ff5722" },
  { title: "Analytics & Reporting", desc: "Track, measure, and optimize campaign performance in real time.", icon: <FaPoll />, color: "#17a2b8" }
];

const DigitalMarketingShowcase = () => (
  <SkShowcase heading={{"eyebrow": "How we deliver", "title": "Result-Driven Digital", "accent": "Marketing.", "copy": "Maximize your online visibility and ROI with targeted marketing strategies."}} image={showcase} imageAlt="Digital Marketing" tag="Digital Marketing" features={features} />
);

export default DigitalMarketingShowcase;
