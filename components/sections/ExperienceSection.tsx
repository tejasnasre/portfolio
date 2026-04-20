import { SectionHeading } from "../SectionHeading";
import { experiences } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-8">
      <SectionHeading title="Technical Experience" />
      <div className="space-y-0 divide-y divide-border">
        {experiences.map((exp) => (
          <div key={exp.company} className="py-5">
            <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {exp.title}
                </p>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <div className="mt-1 text-left sm:mt-0 sm:text-right">
                <p className="text-xs text-muted-foreground">{exp.duration}</p>
                <p className="text-xs text-muted-foreground">{exp.location}</p>
              </div>
            </div>
            <ul className="mt-3 space-y-2 pl-1">
              {exp.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-muted-foreground break-words"
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
