import { SectionHeading } from "../SectionHeading";

export function ThingsIBuildSection() {
  const items = [
    {
      name: "React Native Apps",
      desc: "Mobile-first products with Expo, biometrics, push notifications, and real-time features.",
      href: "https://github.com/tejasnasr",
    },
    {
      name: "Full Stack Web",
      desc: "End-to-end products with Next.js, Node.js, PostgreSQL and Supabase.",
      href: "https://github.com/tejasnasr",
    },
    {
      name: "Web3 & On-chain",
      desc: "Fintech dApps on Base blockchain with wallet connectivity and on-chain transactions.",
      href: "https://github.com/tejasnasr",
    },
    {
      name: "AI-powered Products",
      desc: "Apps with Google Gemini, AI-SDK, and real-time voice agent interfaces.",
      href: "https://github.com/tejasnasr",
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
            className="flex items-start gap-4 py-3 group"
          >
            <span className="min-w-[150px] text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
              {item.name}
            </span>
            <span className="text-sm text-muted-foreground">{item.desc}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
