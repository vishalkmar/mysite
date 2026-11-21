/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { 
  FaBullhorn, FaChartLine, FaEnvelopeOpenText, FaUsers, FaComments,
  FaGlobe, FaPenNib, FaEye, FaHandHoldingUsd, FaSearchDollar
} from 'react-icons/fa';
import {
  SiGoogleanalytics, SiGoogletagmanager, SiFacebook, SiInstagram,
  SiLinkedin, SiMailchimp, SiSemrush, SiHubspot
} from 'react-icons/si';
import { SkSkills } from "../../serviceKit/ServiceKit";

const skills = [
    { name: "SEO", icon: <FaSearchDollar size={30} />, color: "#0A9396" },
    { name: "Social Media Marketing", icon: <FaComments size={30} />, color: "#3B5998" },
    { name: "Email Marketing", icon: <FaEnvelopeOpenText size={30} />, color: "#F4A261" },
    { name: "PPC Advertising", icon: <FaBullhorn size={30} />, color: "#E63946" },
    { name: "Lead Generation", icon: <FaHandHoldingUsd size={30} />, color: "#2A9D8F" },
    { name: "Audience Targeting", icon: <FaUsers size={30} />, color: "#6D597A" },
    { name: "Google Analytics", icon: <SiGoogleanalytics size={30} />, color: "#F57C00" },
    { name: "Google Tag Manager", icon: <SiGoogletagmanager size={30} />, color: "#1A73E8" },
    { name: "Facebook Ads", icon: <SiFacebook size={30} />, color: "#4267B2" },
    { name: "Instagram Strategy", icon: <SiInstagram size={30} />, color: "#E1306C" },
    { name: "LinkedIn Campaigns", icon: <SiLinkedin size={30} />, color: "#0077B5" },
    { name: "Content Marketing", icon: <FaPenNib size={30} />, color: "#FF6B6B" },
    { name: "Performance Tracking", icon: <FaChartLine size={30} />, color: "#5C4D7D" },
    { name: "Web Traffic Optimization", icon: <FaGlobe size={30} />, color: "#1D3557" },
    { name: "Campaign Analytics", icon: <SiSemrush size={30} />, color: "#FF5722" },
    { name: "Marketing Automation", icon: <SiHubspot size={30} />, color: "#FF7A59" },
    { name: "Email Automation", icon: <SiMailchimp size={30} />, color: "#FFE01B" },
    { name: "Conversion Rate Optimization", icon: <FaEye size={30} />, color: "#7209B7" }
  ];

const DigitalMarketingExpertise = () => <SkSkills heading={{"eyebrow": "Digital marketing expertise", "title": "Tools we master.", "accent": "Skills that ship.", "copy": "The platforms, practices and specialist skills behind every digital marketing project we deliver."}} skills={skills} />;

export default DigitalMarketingExpertise;
