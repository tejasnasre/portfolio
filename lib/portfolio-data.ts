export type Skill = {
  title: string;
  items: string[];
};

export type Experience = {
  title: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
};

export type Project = {
  title: string;
  tech: string;
  description: string;
  links: { label: string; href: string }[];
};

export type OpenSourceContribution = {
  repo: string;
  highlights: string[];
  link: string;
};

export type Achievement = {
  title: string;
};

export type ProfessionalLink = {
  title: string;
  description: string;
  url: string;
  category: string;
};

export const professionalLinks: ProfessionalLink[] = [
  {
    title: "Portfolio",
    description: "My full portfolio with detailed projects and experience",
    url: "https://tejasnasre.is-a.dev",
    category: "Portfolio",
  },
  {
    title: "GitHub",
    description: "Check out my open source projects and code contributions",
    url: "https://github.com/tejasnasre",
    category: "Code",
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally",
    url: "https://linkedin.com/in/tejasnasre",
    category: "Social",
  },
  {
    title: "YouTube",
    description: "Check out my videos and tutorials",
    url: "https://www.youtube.com/@tejasnasre",
    category: "Social",
  },
  {
    title: "X",
    description: "Follow me on X for updates and insights",
    url: "https://x.com/tejasnasre",
    category: "Social",
  },
  {
    title: "Email",
    description: "Get in touch for opportunities and collaborations",
    url: "mailto:tejasnasre.dev@gmail.com",
    category: "Contact",
  },
];

export const skills: Skill[] = [
  {
    title: "Languages",
    items: ["Javascript", "Typescript"],
  },
  {
    title: "Frameworks",
    items: [
      "React Native",
      "Expo",
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "TailwindCSS",
      "Zustand",
      "TanStack Query",
      "Reanimated",
    ],
  },
  {
    title: "Database & Backend",
    items: ["PostgreSQL", "Supabase", "Neon", "Drizzle ORM", "Prisma", "Redis", "WebSockets", "Socket.IO", "BullMQ", "Better Auth"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Github", "Vercel", "AI-SDK", "Docker", "Cursor", "EAS Build", "CodePush", "Sentry", "AWS S3"],
  },
];

export const experiences: Experience[] = [
  {
    title: "Mobile Engineer (T-Shaped Full Stack)",
    company: "Blosical",
    duration: "June 2026 — Present",
    location: "Remote",
    highlights: [
      "Own the React Native/Expo app end-to-end as sole mobile engineer (iOS + Android) — expo-router, Zustand, TanStack Query, and Reanimated/Gesture Handler for 60fps UI",
      "Shipped native Apple Sign-In and Google Sign-In (native ID token flows), OTP email auth, and an AES-256 encrypted MMKV store for tokens separate from general cache",
      "Own OTA releases end-to-end: CodePush bundle/deploy pipeline via Bitrise, in-app update UI, and EAS Build profiles across dev/preview/production",
      "Built push notifications on FCM + APNs via Expo Notifications — token registration, Android channels, server-side delivery, and cold-start deep-link routing to in-app screens; plus Universal Links/App Links and a notification inbox",
      "Wired Sentry crash reporting with a custom fallback screen and session replay, and expo-observe for performance metrics",
      "Built real-time chat (Socket.IO — presence, @mentions, unread sync) and the product/order/storefront flows with Stripe Connect payouts",
      "Also contribute to the web (Next.js) and backend (Express + Prisma + Redis) side of the same features",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "RewiPay — FinBridge Innovations",
    duration: "Jan 2026 — Present",
    location: "Bangalore, India",
    highlights: [
      "Architected and built a full-stack Web3 fintech platform with React Native (Expo) mobile app and Node.js backend",
      "Integrated Reown AppKit for Web3 wallet connectivity and on-chain transactions on Base blockchain",
      "Implemented native mobile features: biometric auth, push notifications, speech recognition, and real-time voice agent interface",
      "Built backend with Node.js, Express, PostgreSQL (Drizzle ORM), AWS S3, AWS SES, and Redis WebSockets",
    ],
  },
  {
    title: "Founding Engineer",
    company: "Tap In LLC",
    duration: "Nov 2025 — Feb 2026",
    location: "Chicago, US",
    highlights: [
      "Designed and implemented scalable backend systems with Row Level Security (RLS) and Supabase storage",
      "Built core features: notes/journal system, user onboarding, streak tracking, gym posts, and multi-language support",
      "Improved app performance by optimizing UI, fixing critical bugs, and enhancing navigation",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Research Internship — IIT Madras",
    duration: "July 2024 — Sep 2024",
    location: "Chennai, India",
    highlights: [
      "Developed a carbon credit marketplace using Next.js, TypeScript, and Supabase",
      "Implemented secure authentication and responsive user-friendly interface",
      "Collaborated in agile environment with sprint planning and iterative delivery",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Mini Music App",
    tech: "React Native · Expo · Node.js (Bun) · HLS",
    description:
      "Music streaming app with HLS adaptive streaming, React Native frontend, and Node.js backend with artist discovery",
    links: [
      {
        label: "APK",
        href: "https://github.com/tejasnasre/Mini-Music-App/releases/download/apk/application-8e3953b9-1576-4817-8e7a-f2f224e699b9.apk",
      },
      {
        label: "Code",
        href: "https://github.com/tejasnasre/Mini-Music-App",
      },
      {
        label: "Demo",
        href: "https://drive.google.com/file/d/10OKeSHLMlXPyfaHLYxBGllhsxfGG7vdy/view",
      },
    ],
  },
  {
    title: "Communex",
    tech: "Next.js · Supabase",
    description:
      "Community discovery and networking platform connecting fragmented tech communities into one discoverable ecosystem",
    links: [
      {
        label: "Live",
        href: "https://communex.online",
      },
      {
        label: "Code",
        href: "https://github.com/tejasnasre",
      },
    ],
  },
  {
    title: "Aevus",
    tech: "React Native · Supabase",
    description:
      "Multi-role attendance platform with OTP codes, biometric verification, and GPS-based proximity validation",
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "https://github.com/tejasnasre" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "Payplate",
    tech: "React Native · Expo · Supabase",
    description:
      "Restaurant management app with real-time menu features, image uploads, and UPI payment integration",
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "https://github.com/tejasnasre" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "Food Lens",
    tech: "React Native · Google Gemini",
    description:
      "AI-powered nutrition analysis app using Google Gemini to analyze food images with instant health scoring",
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "https://github.com/tejasnasre" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "Drink Me",
    tech: "React Native · Expo",
    description:
      "Hydration tracking app with personalized daily goals, animated UI, and smart push notifications",
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "https://github.com/tejasnasre" },
      { label: "Demo", href: "#" },
    ],
  },
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    repo: "dodopayments/billingsdk",
    highlights: [
      "Dodo Payment billing SDK bug fixes",
      "Added support for 180+ currencies in BillingSettings2 component",
    ],
    link: "https://github.com/dodopayments/billingsdk/pull/287",
  },
  {
    repo: "HITK-TECH-Community/Community-Website",
    highlights: [
      "Integrate GET Questions in Frontend",
    ],
    link: "https://github.com/HITK-TECH-Community/Community-Website/pull/882",
  },
];

export const achievements: Achievement[] = [
  { title: "Supabase Launch Week Organiser (13 & 14)" },
  { title: "Codehunt Winner (24 Hours Hackathon)" },
  { title: "Code Crush Winner (8 Hours Hackathon)" },
  { title: "Two Time Hackathon Organiser" },
  { title: "Open Source Contributor & Maintainer (GSSoC'24 | Dodo Payments)" },
  { title: "Web3 Student Advocate At Outdefine" },
  { title: "Shipathon IRL Nagpur — August 9, 2026" },
  { title: "Clerk Buildstation Nagpur — September 5, 2026" },
];
