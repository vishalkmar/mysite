/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import {
  FaPencilRuler, FaShapes, FaLightbulb, FaCogs, FaFont, FaDrawPolygon,
  FaPalette, FaMagic, FaObjectGroup, FaRocket, FaSketch, FaAdjust
} from 'react-icons/fa';
import {
  SiAdobeillustrator, SiAdobexd, SiFigma, SiInkscape
} from 'react-icons/si';
import { SkSkills } from "../../serviceKit/ServiceKit";

const skills = [
    { name: "Creative Concepting", icon: <FaLightbulb size={30} />, color: "#FFD166" },
    { name: "Sketching & Drafting", icon: <FaPencilRuler size={30} />, color: "#EF476F" },
    { name: "Vector Design", icon: <FaDrawPolygon size={30} />, color: "#06D6A0" },
    { name: "Typography", icon: <FaFont size={30} />, color: "#118AB2" },
    { name: "Brand Identity", icon: <FaObjectGroup size={30} />, color: "#073B4C" },
    { name: "Color Theory", icon: <FaPalette size={30} />, color: "#A633FF" },
    { name: "Geometric Logos", icon: <FaShapes size={30} />, color: "#F72585" },
    { name: "Minimalist Logos", icon: <FaAdjust size={30} />, color: "#4361EE" },
    { name: "Logo Refinement", icon: <FaCogs size={30} />, color: "#FB5607" },
    { name: "Figma Design", icon: <SiFigma size={30} />, color: "#0ACF83" },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={30} />, color: "#FF9F1C" },
    { name: "Adobe XD", icon: <SiAdobexd size={30} />, color: "#FF2E63" },
    { name: "Inkscape", icon: <SiInkscape size={30} />, color: "#1E1E1E" },
    { name: "Creative Tools", icon: <FaMagic size={30} />, color: "#8338EC" },
    { name: "Logo Prototypes", icon: <FaSketch size={30} />, color: "#FB8500" },
    { name: "Final Logo Delivery", icon: <FaRocket size={30} />, color: "#219EBC" }
  ];

const LogoDesignExpertise = () => <SkSkills heading={{"eyebrow": "Logo design expertise", "title": "Tools we master.", "accent": "Skills that ship.", "copy": "The platforms, practices and specialist skills behind every logo design project we deliver."}} skills={skills} />;

export default LogoDesignExpertise;
