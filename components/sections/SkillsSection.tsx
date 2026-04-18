import { SectionHeading } from "../SectionHeading";
import { skills } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <section id="skills" className="mb-8">
      <SectionHeading title="Skills" />
      <div className="space-y-0 divide-y divide-border">
        {skills.map((skill) => (
          <div key={skill.title} className="flex items-start gap-4 py-3">
            <span className="min-w-[150px] text-sm font-medium text-foreground">
              {skill.title}
            </span>
            <span className="text-sm text-muted-foreground">
              {skill.items.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
