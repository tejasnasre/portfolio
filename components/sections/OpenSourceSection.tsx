import { SectionHeading } from "../SectionHeading";
import { openSourceContributions } from "@/lib/portfolio-data";

export function OpenSourceSection() {
  return (
    <section id="opensource" className="mb-8">
      <SectionHeading title="Open Source" />
      <div className="space-y-0 divide-y divide-border">
        {openSourceContributions.map((item) => (
          <div key={item.repo} className="py-5">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm font-medium text-foreground underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors"
            >
              {item.repo}
            </a>
            <ul className="list-disc pl-5 space-y-1">
              {item.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
