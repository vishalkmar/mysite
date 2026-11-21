/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaLaptopCode, FaCogs, FaNetworkWired, FaBug } from 'react-icons/fa';
import showcase from '../serviceImages/software/softwaretwo.jpg';
import { SkShowcase } from "../serviceKit/ServiceKit";

const features = [
  { title: "Full-Stack Development", desc: "Frontend and backend excellence with modern tech stacks.", icon: <FaLaptopCode />, color: "#007bff" },
  { title: "Custom Solutions", desc: "Tailored software to solve your specific business challenges.", icon: <FaCogs />, color: "#6610f2" },
  { title: "System Integration", desc: "Smooth integration across platforms and APIs.", icon: <FaNetworkWired />, color: "#20c997" },
  { title: "QA & Testing", desc: "Rigorous testing ensures quality and reliability at every step.", icon: <FaBug />, color: "#dc3545" }
];

const SoftwareDevelopmentShowcase = () => (
  <SkShowcase heading={{"eyebrow": "How we deliver", "title": "Custom Software", "accent": "Development.", "copy": "Scalable, secure, and high-performance software solutions tailored to your business needs."}} image={showcase} imageAlt="Software Development Showcase" tag="Software Development Showcase" features={features} />
);

export default SoftwareDevelopmentShowcase;
