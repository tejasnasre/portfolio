import { SectionHeading } from "../SectionHeading";
import { projects } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-8">
      <SectionHeading title="Projects" />
      <div className="space-y-0 divide-y divide-border">
        {projects.map((project) => (
          <div key={project.title} className="py-4">
            <div className="mb-0.5 flex items-start justify-between gap-2">
              <p className="text-sm font-medium text-foreground">
                {project.title}
              </p>
              <p className="text-xs text-muted-foreground">{project.tech}</p>
            </div>
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="flex gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium text-foreground underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
