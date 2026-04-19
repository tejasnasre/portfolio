import { SectionHeading } from "../SectionHeading";

export function ThingsIBuildSection() {
  const items = [
    {
      name: "React Native Apps",
      desc: "Mobile-first products with Expo, biometrics, push notifications, and real-time features.",
      href: "https://github.com/tejasnasre",
    },
    {
      name: "Full Stack Web",
      desc: "End-to-end products with Next.js, Node.js, PostgreSQL and Supabase.",
      href: "https://github.com/tejasnasre",
    },
    {
      name: "Web3 & On-chain",
      desc: "Fintech dApps on Base blockchain with wallet connectivity and on-chain transactions.",
      href: "https://github.com/tejasnasre",
    },
    {
      name: "AI-powered Products",
      desc: "Apps with Google Gemini, AI-SDK, and real-time voice agent interfaces.",
      href: "https://github.com/tejasnasre",
    },
  ];

  return (
    <section className="mb-8">
      <SectionHeading title="Things I build" />
      <div className="space-y-0 divide-y divide-border">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group flex flex-col gap-1.5 py-3 sm:flex-row sm:items-start sm:gap-4"
          >
            <span className="w-full min-w-0 text-sm font-medium text-foreground transition-colors group-hover:text-muted-foreground sm:w-37.5 sm:shrink-0">
              {item.name}
            </span>
            <span className="text-sm text-muted-foreground wrap-break-word">
              {item.desc}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
