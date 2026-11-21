/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { SkFAQ, SkCTA } from "../serviceKit/ServiceKit";

const faqs = [
    {
      question: "What's the difference between native and cross-platform app development?",
      answer: "Native apps are built specifically for one platform (iOS or Android) using platform-specific languages (Swift/Objective-C for iOS, Java/Kotlin for Android). Cross-platform apps use frameworks like React Native or Flutter to build for multiple platforms with a single codebase, offering faster development but sometimes with performance trade-offs."
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer: "App development timelines vary based on complexity. A simple app may take 2-3 months, medium complexity 4-6 months, and complex apps with backend systems 6+ months. Factors include features, platforms, design complexity, and testing requirements."
    },
    {
      question: "What's the cost range for developing a mobile app?",
      answer: "Costs range from $10,000 for basic apps to $100,000+ for complex solutions. Factors affecting cost include platform choice, features, design complexity, developer rates, and maintenance. We provide detailed quotes after understanding your specific requirements."
    },
    {
      question: "Which is better: React Native or Flutter?",
      answer: "React Native (JavaScript) has a larger community and more third-party libraries, while Flutter (Dart) offers better performance and more consistent UI across platforms. The choice depends on your team's expertise, project requirements, and long-term maintenance plans."
    },
    {
      question: "Do you provide app maintenance after launch?",
      answer: "Yes, we offer comprehensive maintenance packages including bug fixes, performance optimization, OS updates compatibility, and feature enhancements. We recommend at least 3-6 months of post-launch support to ensure app stability."
    },
    {
      question: "How do you ensure app security?",
      answer: "We implement multiple security layers: data encryption, secure API communication, OAuth for authentication, regular security audits, and compliance with platform-specific security guidelines. We also conduct penetration testing before launch."
    }
  ];

const AppDevelopmentFAQ = () => (
  <>
    <SkFAQ heading={{"eyebrow": "App development FAQ", "title": "Good questions.", "accent": "Straight answers.", "copy": "What clients usually ask before starting a app development project with us."}} faqs={faqs} />
    <SkCTA />
  </>
);

export default AppDevelopmentFAQ;
