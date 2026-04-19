import { SectionHeading } from "../SectionHeading";
import { experiences } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-8">
      <SectionHeading title="Technical Experience" />
      <div className="space-y-0 divide-y divide-border">
        {experiences.map((exp) => (
          <div key={exp.company} className="py-4">
            <div className="mb-1 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {exp.title}
                </p>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-xs text-muted-foreground">{exp.duration}</p>
                <p className="text-xs text-muted-foreground">{exp.location}</p>
              </div>
            </div>
            <ul className="mt-2 space-y-1">
              {exp.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-muted-foreground wrap-break-word"
                >
                  – {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
