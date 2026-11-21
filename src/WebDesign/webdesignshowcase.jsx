/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaPalette, FaDesktop, FaUserAlt, FaCogs } from 'react-icons/fa';
import showcase from '.././serviceImages/software/webdesigntwo.jpg';
import { SkShowcase } from "../serviceKit/ServiceKit";

const features = [
  { title: "Modern Aesthetics", desc: "Trendy and visually captivating designs that stand out.", icon: <FaPalette />, color: "#e83e8c" },
  { title: "Responsive Design", desc: "Flawless experience across desktops, tablets, and mobiles.", icon: <FaDesktop />, color: "#6610f2" },
  { title: "User Experience", desc: "Intuitive layouts focused on engaging user journeys.", icon: <FaUserAlt />, color: "#20c997" },
  { title: "Custom Features", desc: "Tailored functionality built to fit your business needs.", icon: <FaCogs />, color: "#fd7e14" }
];

const WebDesignShowcase = () => (
  <SkShowcase heading={{"eyebrow": "How we deliver", "title": "Creative Web Design", "accent": "Solutions.", "copy": "We create visually stunning, user-friendly websites that convert visitors into customers."}} image={showcase} imageAlt="Web Design Showcase" tag="Web Design Showcase" features={features} />
);

export default WebDesignShowcase;
