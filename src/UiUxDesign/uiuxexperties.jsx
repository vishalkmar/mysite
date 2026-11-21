/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { 
  FaUserFriends, FaSitemap, FaMousePointer, FaEye, FaProjectDiagram,
  FaMobileAlt, FaTabletAlt, FaLaptop, FaLightbulb, FaPencilRuler
} from 'react-icons/fa';
import {
  SiFigma, SiAdobe, SiSketch, SiInvision,SiFramer
} from 'react-icons/si';
import { SkSkills } from "../serviceKit/ServiceKit";

const skills = [
    { name: "User Research", icon: <FaUserFriends size={30} />, color: "#FF6B6B" },
    { name: "Information Architecture", icon: <FaSitemap size={30} />, color: "#4ECDC4" },
    { name: "Wireframing", icon: <FaProjectDiagram size={30} />, color: "#1A535C" },
    { name: "Interactive Prototypes", icon: <FaEye size={30} />, color: "#5C4D7D" },
    { name: "Usability Testing", icon: <FaMousePointer size={30} />, color: "#FF9F1C" },
    { name: "Mobile UX Design", icon: <FaMobileAlt size={30} />, color: "#06B6D4" },
    { name: "Tablet UX Design", icon: <FaTabletAlt size={30} />, color: "#3A86FF" },
    { name: "Web UX Design", icon: <FaLaptop size={30} />, color: "#7209B7" },
    { name: "Creative Direction", icon: <FaLightbulb size={30} />, color: "#F72585" },
    { name: "Design Systems", icon: <FaPencilRuler size={30} />, color: "#FFBE0B" },
    { name: "Figma", icon: <SiFigma size={30} />, color: "#0ACF83" },
    // { name: "Adobe XD", icon: <SiXd size={30} />, color: "#FF61F6" },
    { name: "Sketch", icon: <SiSketch size={30} />, color: "#F7B500" },
    { name: "InVision", icon: <SiInvision size={30} />, color: "#FF3366" },
    { name: "Framer", icon: <SiFramer size={30} />, color: "#0055FF" },
    { name: "Adobe Creative Suite", icon: <SiAdobe size={30} />, color: "#FF0000" }
  ];

const UIUXExpertise = () => <SkSkills heading={{"eyebrow": "UI/UX design expertise", "title": "Tools we master.", "accent": "Skills that ship.", "copy": "The platforms, practices and specialist skills behind every ui/ux design project we deliver."}} skills={skills} />;

export default UIUXExpertise;
