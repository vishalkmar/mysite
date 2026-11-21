/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaPenNib, FaBullhorn, FaChartBar, FaLightbulb } from 'react-icons/fa';
import cmImg from '../../serviceImages/software/contentmarketingthree.jpg';
import { SkTabs } from "../../serviceKit/ServiceKit";

const content = {
    overview: {
      title: 'What is Content Marketing?',
      desc: 'Content Marketing focuses on creating, publishing, and distributing valuable content to attract, engage, and retain your audience — ultimately driving profitable customer action.',
    },
    benefits: {
      title: 'Key Benefits of Content Marketing',
      desc: '• Build trust & authority\n• Boost SEO & visibility\n• Generate quality leads\n• Support every stage of the funnel\n• Long-term ROI',
    },
    strategies: {
      title: 'Our Content Strategies',
      desc: '• Blogging & Articles\n• Video Scripts & Reels\n• Infographics & Visuals\n• Case Studies & Whitepapers\n• E-books & Guides',
    },
    formats: {
      title: 'Formats We Deliver',
      desc: '• Web Content\n• Email Sequences\n• Social Media Posts\n• Landing Page Copy\n• Press Releases',
    },
  };

const tabs = [
  { key: "overview", label: "Overview", icon: <FaPenNib />, ...content.overview },
  { key: "benefits", label: "Benefits", icon: <FaBullhorn />, ...content.benefits },
  { key: "strategies", label: "Strategies", icon: <FaChartBar />, ...content.strategies },
  { key: "formats", label: "Formats", icon: <FaLightbulb />, ...content.formats }
];

const ContentMarketingInfoSection = () => <SkTabs heading={{"eyebrow": "Content marketing · Deep dive", "title": "Strategic Content", "accent": "Marketing.", "copy": "Empower your brand with storytelling that drives results."}} tabs={tabs} image={cmImg} imageAlt="Content Marketing" />;

export default ContentMarketingInfoSection;
