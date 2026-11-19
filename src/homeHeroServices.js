import { Code, Palette, Smartphone, Globe, TrendingUp, Monitor, Database } from "lucide-react";
const dev = "/hero/web-development";
const design = "/hero/web-design";
const digital = "/hero/digital-marketing";
const appdev = "/hero/app-development";
const seo = "/hero/seo";
const one = "/hero/software-development";
const uiux = "/hero/ui-ux";

export const SERVICES = [
  {
    id: 1,
    category: "WEB DEVELOPMENT",
    title: "Web Development",
    description:
      "We build robust, scalable, and high-performance websites using modern technologies like React, Next.js, and Node.js. From custom web applications to complex enterprise solutions, we turn your vision into code.",
    seoTitle: "Web Development Company | NexaTech Innovation",
    seoDescription:
      "We build fast, secure, and scalable websites and web applications using React, Next.js, and Node.js. From business websites to custom dashboards and portals, we deliver performance-focused development with modern UI.",
    image: dev,
    path: "/webdevelopment",
    icon: Code,
  },
  {
    id: 2,
    category: "DESIGN",
    title: "Web Design",
    description:
      "Our creative team designs stunning, responsive, and user-friendly websites that capture your brand identity. We focus on aesthetics, functionality, and providing an intuitive user experience across all devices.",
    seoTitle: "Website Design Services | Modern Responsive Web Design",
    seoDescription:
      "Get premium, responsive website design that matches your brand. We create mobile-first layouts, clean UI, and conversion-focused sections to improve user experience and generate more leads.",
    image: design,
    path: "/webdesign",
    icon: Palette,
  },
  {
    id: 3,
    category: "MOBILE",
    title: "App Development",
    description:
      "Transform your ideas into powerful mobile applications for iOS and Android. We develop native and cross-platform apps that offer seamless performance and engaging user interfaces for your customers.",
    seoTitle: "Mobile App Development | Android & iOS Apps",
    seoDescription:
      "Turn your idea into a high-performance Android and iOS app. We build user-friendly mobile apps with smooth UI, reliable backend integration, and scalable architecture for startups and businesses.",
    image: appdev,
    path: "/appdevelopment",
    icon: Smartphone,
  },
  {
    id: 4,
    category: "MARKETING",
    title: "Digital Marketing",
    description:
      "Accelerate your growth with our data-driven digital marketing strategies. From social media campaigns to content marketing, we help you reach your target audience and convert leads into loyal customers.",
    seoTitle: "Digital Marketing Services | Growth & Lead Generation",
    seoDescription:
      "Grow your business with result-driven digital marketing: social media, content strategy, paid campaigns, and lead generation. We target the right audience, improve conversions, and build strong online visibility.",
    image: digital,
    path: "/digitalmarketing",
    icon: Globe,
  },
  {
    id: 5,
    category: "GROWTH",
    title: "SEO Optimization",
    description:
      "Improve your visibility on search engines and drive organic traffic to your site. Our SEO experts use proven strategies to rank your website higher, ensuring your business gets found by the right people.",
    seoTitle: "SEO Services | Rank Higher on Google",
    seoDescription:
      "Improve Google rankings with technical SEO, on-page SEO, speed optimization, keyword research, and content improvements. Get more organic traffic, better visibility, and qualified leads from search engines.",
    image: seo,
    path: "/seo",
    icon: TrendingUp,
  },
  {
    id: 6,
    category: "EXPERIENCE",
    title: "UI/UX Design",
    description:
      "We craft user-centric interfaces that are both beautiful and functional. Our design process involves deep user research and prototyping to ensure every interaction is intuitive and delightful.",
    seoTitle: "UI/UX Design Services | Website & App UI/UX",
    seoDescription:
      "We design user-centric UI/UX for websites and mobile apps—wireframes, prototypes, and clean interfaces that improve usability, engagement, and conversions with intuitive user journeys.",
    image: uiux,
    path: "/uiuxdesign",
    icon: Monitor,
  },
  {
    id: 7,
    category: "ENGINEERING",
    title: "Software Development",
    description:
      "Custom software solutions tailored to your specific business needs. We engineer reliable, secure, and scalable software systems that streamline your operations and drive efficiency.",
    seoTitle: "Custom Software Development",
    seoDescription:
      "We build custom software solutions like CRM/ERP modules, automation tools, and secure backend systems. Reliable, scalable software that improves efficiency, reduces manual work, and supports business growth.",
    image: one,
    path: "/softwaredevelopment",
    icon: Database,
  },
];


