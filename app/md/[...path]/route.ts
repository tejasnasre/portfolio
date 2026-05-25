import { createDualmarkRouteHandler } from "@dualmark/nextjs";
import { projects, skills, experiences, openSourceContributions } from "@/lib/portfolio-data";

const handler = createDualmarkRouteHandler({
  siteUrl: "https://tejasnasre.is-a.dev",
  staticPages: [
    {
      pattern: "/",
      render: () =>
        [
          "# Tejas Nasre — Full Stack Engineer",
          "",
          "Product-focused developer who takes ownership and enjoys building scalable applications from end to end. Looking for opportunities to work on large-scale mobile products within a team that values growth, strong peer mindset, and sustainable work culture.",
          "",
          "- **Email**: tejasnasre.dev@gmail.com",
          "- **Location**: Nagpur, India",
          "- **Portfolio**: https://tejasnasre.is-a.dev",
          "- **GitHub**: https://github.com/tejasnasre",
          "- **LinkedIn**: https://linkedin.com/in/tejasnasre",
          "- **YouTube**: https://www.youtube.com/@tejasnasre",
          "- **X**: https://x.com/tejasnasre",
          "",
          "## Experience",
          "",
          ...experiences.flatMap((exp) => [
            `### ${exp.title} @ ${exp.company}`,
            `**${exp.duration}** — ${exp.location}`,
            "",
            ...exp.highlights.map((h) => `- ${h}`),
            "",
          ]),
          "## Projects",
          "",
          ...projects.map((p) =>
            [
              `### ${p.title}`,
              `**Tech**: ${p.tech}`,
              "",
              p.description,
              "",
              ...p.links.map((l) => `- [${l.label}](${l.href})`),
              "",
            ].join("\n"),
          ),
          "## Open Source",
          "",
          ...openSourceContributions.flatMap((item) => [
            `### ${item.repo}`,
            "",
            ...item.highlights.map((h) => `- ${h}`),
            `- [Pull Request](${item.link})`,
            "",
          ]),
          "## Skills",
          "",
          ...skills.flatMap((s) => [
            `### ${s.title}`,
            "",
            s.items.join(", "),
            "",
          ]),
          "## Activities & Achievements",
          "",
          "- Supabase Launch Week Organiser (13 & 14)",
          "- Codehunt Winner (24 Hours Hackathon)",
          "- Code Crush Winner (8 Hours Hackathon)",
          "- Two Time Hackathon Organiser",
          "- Open Source Contributor & Maintainer (GSSoC'24 | Dodo Payments)",
          "- Web3 Student Advocate At Outdefine",
        ].join("\n"),
    },
    {
      pattern: "/linktree",
      render: () =>
        [
          "# Tejas Nasre — Links",
          "",
          "Quick access to all of Tejas Nasre's professional links and social profiles.",
          "",
          "- [Portfolio](https://tejasnasre.is-a.dev)",
          "- [GitHub](https://github.com/tejasnasre)",
          "- [LinkedIn](https://linkedin.com/in/tejasnasre)",
          "- [YouTube](https://www.youtube.com/@tejasnasre)",
          "- [X](https://x.com/tejasnasre)",
          "- [Email](mailto:tejasnasre.dev@gmail.com)",
        ].join("\n"),
    },
  ],
});

export const dynamic = "force-static";
export const GET = handler.GET;
export const generateStaticParams = handler.generateStaticParams;
