/* Real NexaTech projects. Screenshots live in /public/projects. */
export const webProjects = [
  { id: "callingkaro", name: "CallingKaro", category: "Product site · Internet calling app", image: "/projects/callingkaro.webp", tags: ["Landing page", "APK distribution", "Motion UI"], accent: "#ff7a3d" },
  { id: "devshay", name: "Devshay Healthcare", category: "Healthcare · Product catalogue", image: "/projects/devshay-healthcare.webp", tags: ["Catalogue", "Enquiry flow", "Brand site"], accent: "#2bb7e6" },
  { id: "shriyamuna", name: "Shri Yamuna Infra", category: "Real estate · Township projects", image: "/projects/shri-yamuna-infra.webp", tags: ["Editorial design", "Project pages", "Lead capture"], accent: "#8a4b1f" },
  { id: "xclusiveoman", name: "Xclusive Oman", category: "Travel · B2B DMC platform", image: "/projects/xclusive-oman.webp", tags: ["B2B portal", "Tours & transfers", "Agent login"], accent: "#e2b23f" },
  { id: "seychelles", name: "Holidays Seychelles", category: "Travel · AI booking system", image: "/projects/holidays-seychelles.webp", tags: ["Hotel search", "AI assistant", "Multi-currency"], accent: "#1655e6" },
  { id: "mcti", name: "MCTI Computer Institute", category: "Education · Admissions & results", image: "/projects/mcti.webp", tags: ["Online apply", "Results portal", "Multi-branch"], accent: "#2f63e8" },
  { id: "reconnct", name: "Reconnct by Traveon", category: "Travel · Experiences marketplace", image: "/projects/reconnct.webp", tags: ["Search", "Experiences", "Booking"], accent: "#ffb703" },
  { id: "cyphermind", name: "CypherMind AI", category: "AI · Security copilot SaaS", image: "/projects/cyphermind-ai.webp", tags: ["SaaS", "Console", "Desktop app"], accent: "#22d3ee" },
  { id: "talklink", name: "TalkLink", category: "Product site · Calling & chat app", image: "/projects/talklink.webp", tags: ["Illustrated UI", "Storytelling", "APK"], accent: "#1f8a8a" },
];

export const byIds = (ids) => ids.map((id) => webProjects.find((p) => p.id === id)).filter(Boolean);
