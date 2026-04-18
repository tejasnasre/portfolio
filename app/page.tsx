type Skill = {
  title: string;
  items: string[];
  badge: string;
  color: string;
};

type Experience = {
  title: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
};

type Project = {
  title: string;
  tech: string;
  description: string;
  links: { label: string; href: string }[];
  color: string;
};

type Achievement = {
  title: string;
  date?: string;
  href?: string;
};

const skills: Skill[] = [
  {
    title: "Languages",
    items: ["Javascript", "Typescript"],
    badge: "LNG",
    color: "bg-blue-500",
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
    ],
    badge: "FWK",
    color: "bg-purple-500",
  },
  {
    title: "Database & Backend",
    items: ["PostgreSQL", "Supabase", "Neon", "Drizzle ORM", "Better Auth"],
    badge: "DB",
    color: "bg-green-600",
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Github", "Vercel", "AI-SDK", "Docker", "Cursor"],
    badge: "TOOLS",
    color: "bg-orange-500",
  },
];

const experiences: Experience[] = [
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

const projects: Project[] = [
  {
    title: "Aevus",
    tech: "React Native · Supabase",
    description:
      "Multi-role attendance platform with OTP codes, biometric verification, and GPS-based proximity validation",
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "https://github.com/tejasnasr" },
      { label: "Demo", href: "#" },
    ],
    color: "bg-blue-500",
  },
  {
    title: "Payplate",
    tech: "React Native · Expo · Supabase",
    description:
      "Restaurant management app with real-time menu features, image uploads, and UPI payment integration",
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "https://github.com/tejasnasr" },
      { label: "Demo", href: "#" },
    ],
    color: "bg-orange-500",
  },
  {
    title: "Food Lens",
    tech: "React Native · Google Gemini",
    description:
      "AI-powered nutrition analysis app using Google Gemini to analyze food images with instant health scoring",
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "https://github.com/tejasnasr" },
      { label: "Demo", href: "#" },
    ],
    color: "bg-green-600",
  },
  {
    title: "Drink Me",
    tech: "React Native · Expo",
    description:
      "Hydration tracking app with personalized daily goals, animated UI, and smart push notifications",
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "https://github.com/tejasnasr" },
      { label: "Demo", href: "#" },
    ],
    color: "bg-teal-500",
  },
];

const achievements: Achievement[] = [
  { title: "Supabase Launch Week Organiser (13 & 14)" },
  { title: "Codehunt Winner (24 Hours Hackathon)" },
  { title: "Code Crush Winner (8 Hours Hackathon)" },
  { title: "Two Time Hackathon Organiser" },
  { title: "Open Source Contributor & Maintainer (GSSoC'24 | Dodo Payments)" },
  { title: "Web3 Student Advocate At Outdefine" },
];

function SectionHeading({ title }: { title: string }) {
  return (
    <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-widest text-gray-500">
      {title}
    </h3>
  );
}

export default function Home() {
  return (
    <main className="min-h-dvh bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        {/* Navigation */}
        <nav className="mb-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
          <a
            href="#"
            className="font-medium text-gray-900 transition-colors hover:text-gray-600"
          >
            Home
          </a>
          <span className="text-gray-300">•</span>
          <a href="#skills" className="transition-colors hover:text-gray-900">
            Skills
          </a>
          <span className="text-gray-300">•</span>
          <a
            href="#experience"
            className="transition-colors hover:text-gray-900"
          >
            Experience
          </a>
          <span className="text-gray-300">•</span>
          <a href="#projects" className="transition-colors hover:text-gray-900">
            Projects
          </a>
          <span className="text-gray-300">•</span>
          <a
            href="#achievements"
            className="transition-colors hover:text-gray-900"
          >
            Achievements
          </a>
        </nav>

        {/* Hero Section */}
        <section className="mb-16 space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Tejas Nasre
          </h1>
          <p className="text-lg text-gray-600">Full Stack Engineer</p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2 text-sm text-gray-600">
            <a href="tel:+918623981647" className="hover:text-gray-900">
              +918623981647
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="mailto:tejasnasre.dev@gmail.com"
              className="hover:text-gray-900"
            >
              tejasnasre.dev@gmail.com
            </a>
            <span className="text-gray-300">•</span>
            <span>Nagpur, India</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2 text-sm">
            <a
              href="https://tejasnasre.is-a.dev"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Portfolio
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="https://github.com/tejasnasr"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              GitHub
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="https://linkedin.com/in/tejasnasre"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              LinkedIn
            </a>
          </div>

          <div className="mx-auto max-w-2xl space-y-3 pt-4 text-base leading-relaxed text-gray-600">
            <p>
              Builder at heart, turning ideas into real, impactful products. I
              focus on writing clean, scalable code with strong attention to
              product experience and performance.
            </p>
            <p>
              Product-focused developer who takes ownership and enjoys building
              scalable applications from end to end. Looking for opportunities
              to work on large-scale mobile products within a team that values
              growth, strong peer mindset, and sustainable work culture.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-16">
          <SectionHeading title="Skills" />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <li
                key={skill.title}
                className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`${skill.color} inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-bold text-white text-xs`}
                  >
                    {skill.badge}
                  </div>
                  <p className="font-semibold text-gray-900">{skill.title}</p>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {skill.items.join(", ")}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16">
          <SectionHeading title="Technical Experience" />
          <ul className="space-y-4">
            {experiences.map((exp) => (
              <li
                key={exp.company}
                className="rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-gray-200 hover:bg-gray-50"
              >
                <div className="mb-2 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">{exp.title}</p>
                    <p className="text-sm text-gray-600">{exp.company}</p>
                  </div>
                  <p className="shrink-0 text-right text-xs text-gray-500">
                    {exp.duration}
                  </p>
                </div>
                <p className="mb-3 text-xs text-gray-500">{exp.location}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-sm leading-relaxed text-gray-600"
                    >
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16">
          <SectionHeading title="Projects" />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <li
                key={project.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-gray-200 hover:bg-gray-50"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {project.title}
                    </p>
                    <p className="text-xs text-gray-600">{project.tech}</p>
                  </div>
                  <div
                    className={`${project.color} inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-bold text-white text-xs`}
                  >
                    {project.title[0]}
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-xs font-medium text-blue-600 hover:text-blue-700"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section id="achievements" className="mb-16">
          <SectionHeading title="Activities & Achievements" />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {achievements.map((achievement) => (
              <li
                key={achievement.title}
                className="rounded-2xl border border-gray-100 bg-gray-50/50 p-4"
              >
                <p className="text-sm font-medium text-gray-900">
                  {achievement.title}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="mb-16">
          <SectionHeading title="Education" />
          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <p className="font-semibold text-gray-900">
              G H Raisoni College of Engineering and Management, Nagpur
            </p>
            <p className="mt-1 text-sm text-gray-600">
              B.Tech - Artificial Intelligence
            </p>
            <p className="mt-1 text-sm text-gray-600">
              CGPA - 7.94 • Graduation: June 2026
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="space-y-4 border-t border-gray-200 py-8 text-center text-sm text-gray-600">
          <p>
            Built by yours truly. Check out my{" "}
            <a
              href="https://github.com/tejasnasr"
              className="font-medium text-gray-900 hover:text-gray-600"
            >
              code
            </a>{" "}
            and{" "}
            <a
              href="https://tejasnasre.is-a.dev"
              className="font-medium text-gray-900 hover:text-gray-600"
            >
              portfolio
            </a>
          </p>
          <p>
            Reach out at{" "}
            <a
              href="mailto:tejasnasre.dev@gmail.com"
              className="font-medium text-gray-900 hover:text-gray-600"
            >
              tejasnasre.dev@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
