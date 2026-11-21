/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaPencilRuler, FaProjectDiagram, FaAccessibleIcon, FaLayerGroup } from 'react-icons/fa';
import showcase from '../serviceImages/software/uiuxtwo.jpg';
import { SkShowcase } from "../serviceKit/ServiceKit";

const features = [
  { title: "Creative Interfaces", desc: "Visually stunning and interactive user interfaces that engage users.", icon: <FaPencilRuler />, color: "#e83e8c" },
  { title: "User Flows", desc: "Thoughtful journey mapping and intuitive user flow architecture.", icon: <FaProjectDiagram />, color: "#6610f2" },
  { title: "Accessibility", desc: "Inclusive designs that are accessible for everyone, everywhere.", icon: <FaAccessibleIcon />, color: "#20c997" },
  { title: "Wireframes & Prototypes", desc: "Rapid prototyping with high-fidelity wireframes for faster testing.", icon: <FaLayerGroup />, color: "#fd7e14" }
];

const UIUXShowcase = () => (
  <SkShowcase heading={{"eyebrow": "How we deliver", "title": "Human-Centered UI/UX", "accent": "Design.", "copy": "We design delightful digital experiences that are intuitive, engaging, and user-focused."}} image={showcase} imageAlt="UI/UX Design Showcase" tag="UI/UX Design Showcase" features={features} />
);

export default UIUXShowcase;
