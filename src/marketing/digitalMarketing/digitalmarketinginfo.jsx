/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaBullhorn, FaGlobe, FaUsers, FaChartPie } from 'react-icons/fa';
import dmImg from '../../serviceImages/software/digitalmarketingthree.jpg';
import { SkTabs } from "../../serviceKit/ServiceKit";

const content = {
    overview: {
      title: 'What is Digital Marketing?',
      desc: 'Digital Marketing promotes brands through online channels — websites, social media, search engines, email, and mobile apps — to reach and engage your target audience.',
    },
    benefits: {
      title: 'Why Digital Marketing?',
      desc: '• Global reach\n• Real-time results\n• Cost-effective campaigns\n• Better audience targeting\n• Higher ROI and conversions',
    },
    strategies: {
      title: 'Our DM Strategies',
      desc: '• SEO and SEM\n• Social Media Ads\n• Influencer Campaigns\n• Email & Automation\n• Content Marketing',
    },
    tools: {
      title: 'Top Tools We Use',
      desc: '• Google Ads\n• Meta Business Suite\n• HubSpot\n• Mailchimp\n• Canva & Buffer',
    },
  };

const tabs = [
  { key: "overview", label: "Overview", icon: <FaBullhorn />, ...content.overview },
  { key: "benefits", label: "Benefits", icon: <FaGlobe />, ...content.benefits },
  { key: "strategies", label: "Strategies", icon: <FaUsers />, ...content.strategies },
  { key: "tools", label: "Tools", icon: <FaChartPie />, ...content.tools }
];

const DigitalMarketingInfoSection = () => <SkTabs heading={{"eyebrow": "Digital marketing · Deep dive", "title": "Powerful Digital", "accent": "Marketing.", "copy": "Discover how we help your brand thrive online with modern marketing."}} tabs={tabs} image={dmImg} imageAlt="Digital Marketing" />;

export default DigitalMarketingInfoSection;
