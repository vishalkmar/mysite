/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaPaintBrush, FaStar, FaEye, FaFeatherAlt } from 'react-icons/fa';
import logoImg from '../../serviceImages/software/logodesignthree.jpg';
import { SkTabs } from "../../serviceKit/ServiceKit";

const content = {
    overview: {
      title: 'What is Logo Design?',
      desc: 'Logo design is the art of creating a unique symbol or mark that represents your brand’s identity, values, and mission in a memorable visual form.',
    },
    importance: {
      title: 'Why Logo Design Matters',
      desc: '• Builds strong brand identity\n• Creates first impressions\n• Improves brand recognition\n• Establishes trust & professionalism',
    },
    styles: {
      title: 'Design Styles We Offer',
      desc: '• Minimalist Logos\n• Typography-based Logos\n• Abstract & Geometric\n• Mascot or Illustrated Logos',
    },
    features: {
      title: 'What Sets Us Apart',
      desc: '• 100% custom designs\n• High-resolution formats\n• Multiple concepts\n• Unlimited revisions',
    },
  };

const tabs = [
  { key: "overview", label: "Overview", icon: <FaPaintBrush />, ...content.overview },
  { key: "importance", label: "Importance", icon: <FaStar />, ...content.importance },
  { key: "styles", label: "Styles", icon: <FaFeatherAlt />, ...content.styles },
  { key: "features", label: "Features", icon: <FaEye />, ...content.features }
];

const LogoDesignInfoSection = () => <SkTabs heading={{"eyebrow": "Logo design · Deep dive", "title": "Creative Logo Design", "accent": "Services.", "copy": "Make your brand stand out with memorable, professional logo designs."}} tabs={tabs} image={logoImg} imageAlt="Logo Design" />;

export default LogoDesignInfoSection;
