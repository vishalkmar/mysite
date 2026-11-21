/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaMobileAlt, FaCode, FaRocket, FaShieldAlt } from 'react-icons/fa';
import showcase from '../serviceImages/app/apptwo.jpg';
import { SkShowcase } from "../serviceKit/ServiceKit";

const features = [
  { title: "Cross-Platform Apps", desc: "Build once, deploy everywhere with React Native and Flutter.", icon: <FaMobileAlt />, color: "#6f42c1" },
  { title: "Clean Code", desc: "Maintainable, scalable code following best practices.", icon: <FaCode />, color: "#6610f2" },
  { title: "Fast Performance", desc: "Optimized apps that load quickly and run smoothly.", icon: <FaRocket />, color: "#20c997" },
  { title: "Security", desc: "Enterprise-grade security and data protection.", icon: <FaShieldAlt />, color: "#dc3545" }
];

const AppDevelopmentShowcase = () => (
  <SkShowcase heading={{"eyebrow": "How we deliver", "title": "Premium App Development", "accent": "Services.", "copy": "We craft high-performance mobile applications that drive engagement and business growth."}} image={showcase} imageAlt="App Development Process" tag="App Development Process" features={features} />
);

export default AppDevelopmentShowcase;
