/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaSearch, FaChartLine, FaLink, FaBullseye } from 'react-icons/fa';
import seoImg from '../../serviceImages/software/seothree.png';
import { SkTabs } from "../../serviceKit/ServiceKit";

const content = {
    overview: {
      title: 'What is SEO?',
      desc: 'SEO (Search Engine Optimization) improves your website visibility in search engines like Google. Higher visibility leads to more traffic, leads, and growth.',
    },
    benefits: {
      title: 'Benefits of SEO',
      desc: '• Increased organic traffic\n• Better user experience\n• Higher brand credibility\n• Long-term marketing strategy',
    },
    techniques: {
      title: 'Our SEO Techniques',
      desc: '• On-Page Optimization\n• Technical SEO\n• Link Building\n• Content Strategy\n• Mobile Optimization',
    },
    tools: {
      title: 'Tools We Use',
      desc: '• Google Search Console\n• Ahrefs\n• SEMrush\n• Yoast SEO\n• Screaming Frog',
    },
  };

const tabs = [
  { key: "overview", label: "Overview", icon: <FaSearch />, ...content.overview },
  { key: "benefits", label: "Benefits", icon: <FaChartLine />, ...content.benefits },
  { key: "techniques", label: "Techniques", icon: <FaLink />, ...content.techniques },
  { key: "tools", label: "Tools", icon: <FaBullseye />, ...content.tools }
];

const SEOInfoSection = () => <SkTabs heading={{"eyebrow": "SEO · Deep dive", "title": "In-Depth SEO", "accent": "Insights.", "copy": "Explore everything about SEO — benefits, methods, and tools we use."}} tabs={tabs} image={seoImg} imageAlt="SEO Information" />;

export default SEOInfoSection;
