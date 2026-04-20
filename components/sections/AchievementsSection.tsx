import { SectionHeading } from "../SectionHeading";
import { achievements } from "@/lib/portfolio-data";

export function AchievementsSection() {
  return (
    <section id="achievements" className="mb-8">
      <SectionHeading title="Activities & Achievements" />
      <div className="space-y-0 divide-y divide-border">
        {achievements.map((a) => (
          <p
            key={a.title}
            className="py-5 text-sm leading-relaxed text-muted-foreground break-words"
          >
            {a.title}
          </p>
        ))}
      </div>
    </section>
  );
}
