import { SectionHeading } from "../SectionHeading";
import { skills } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <section id="skills" className="mb-8">
      <SectionHeading title="Skills" />
      <div className="space-y-0 divide-y divide-border">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-start sm:gap-4"
          >
            <span className="w-full min-w-0 text-sm font-medium text-foreground sm:w-37.5 sm:shrink-0">
              {skill.title}
            </span>
            <span className="text-sm text-muted-foreground break-words">
              {skill.items.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
