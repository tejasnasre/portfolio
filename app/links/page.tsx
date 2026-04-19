"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  EnvelopeSimple,
  GithubLogo,
  Globe,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Navigation } from "@/components/Navigation";
import { Divider } from "@/components/Divider";
import { professionalLinks } from "@/lib/portfolio-data";

const PROFILE_IMAGE_SRC = "/profile.jpg";

export default function LinksPage() {
  const getLinkIcon = (title: string, url: string) => {
    if (title === "Portfolio") return <Globe size={16} weight="regular" />;
    if (title === "GitHub") return <GithubLogo size={16} weight="regular" />;
    if (title === "LinkedIn")
      return <LinkedinLogo size={16} weight="regular" />;
    if (url.startsWith("mailto:"))
      return <EnvelopeSimple size={16} weight="regular" />;

    return <Globe size={16} weight="regular" />;
  };

  const categories = Array.from(
    new Set(professionalLinks.map((link) => link.category)),
  );

  return (
    <main className="min-h-dvh bg-background px-4 py-10 sm:px-6">
      <div className="mx-auto w-full max-w-xl">
        <Navigation />

        {/* Header */}
        <section className="mb-8">
          <div className="mb-4 h-12 w-12 overflow-hidden rounded-full border border-border bg-muted">
            <Image
              src={PROFILE_IMAGE_SRC}
              alt="Tejas Nasre"
              width={48}
              height={48}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <h1 className="mb-1 text-xl font-semibold text-foreground">
            Tejas Nasre
          </h1>
          <p className="text-sm text-muted-foreground">
            Full Stack Engineer · Building at scale
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Connect with me across the web. Find my work, code, socials, and
            more.
          </p>
        </section>

        <Divider />

        {/* Links */}
        <div className="py-6 space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                {category}
              </p>

              <div className="divide-y divide-border">
                {professionalLinks
                  .filter((link) => link.category === category)
                  .map((link) => (
                    <a
                      key={link.title}
                      href={link.url}
                      target={
                        link.url.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-start justify-between gap-4 py-3 transition-colors hover:text-foreground"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors">
                          {getLinkIcon(link.title, link.url)}
                        </span>

                        <div>
                          <p className="text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                            {link.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={14}
                        weight="regular"
                        className="mt-0.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* Footer */}
        <div className="py-6">
          <p className="text-sm text-muted-foreground">
            Want to see my full story?{" "}
            <Link
              href="/"
              className="font-medium text-foreground underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors"
            >
              Portfolio
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
