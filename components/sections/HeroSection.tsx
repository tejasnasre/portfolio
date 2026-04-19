"use client";

import Image from "next/image";
import {
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  Globe,
  LinkedinLogo,
  MapPin,
} from "@phosphor-icons/react";

const PROFILE_IMAGE_SRC = "/profile.jpg";
const RESUME_FILE_PATH = "/tejasnewfsd.pdf";

export function HeroSection() {
  return (
    <section className="mb-8">
      {/* Avatar */}
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
        Tejas Nasre aka Builder
      </h1>

      <p className="mb-4 leading-relaxed text-muted-foreground">
        I&apos;m a full stack engineer at heart, building mobile and web
        products almost 90% of the time. I focus on writing clean, scalable code
        with strong attention to product experience and performance.
      </p>

      <p className="mb-6 leading-relaxed text-muted-foreground">
        Product-focused developer who takes ownership and enjoys building
        scalable applications from end to end. Looking for opportunities to work
        on large-scale mobile products within a team that values growth, strong
        peer mindset, and sustainable work culture.
      </p>

      {/* Contact */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <a
          href="mailto:tejasnasre.dev@gmail.com"
          className="inline-flex min-w-0 items-center gap-1.5 break-all transition-colors hover:text-foreground sm:break-normal"
        >
          <EnvelopeSimple size={14} weight="regular" />
          tejasnasre.dev@gmail.com
        </a>
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={14} weight="regular" />
          Nagpur, India
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm sm:gap-x-4 sm:gap-y-2">
        <a
          href="https://tejasnasre.is-a.dev"
          className="inline-flex shrink-0 items-center gap-1.5 font-medium text-foreground underline decoration-muted-foreground underline-offset-4 transition-colors hover:decoration-foreground"
        >
          <Globe size={14} weight="regular" />
          Portfolio
        </a>
        <a
          href="https://github.com/tejasnasre"
          className="inline-flex shrink-0 items-center gap-1.5 font-medium text-foreground underline decoration-muted-foreground underline-offset-4 transition-colors hover:decoration-foreground"
        >
          <GithubLogo size={14} weight="regular" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/tejasnasre"
          className="inline-flex shrink-0 items-center gap-1.5 font-medium text-foreground underline decoration-muted-foreground underline-offset-4 transition-colors hover:decoration-foreground"
        >
          <LinkedinLogo size={14} weight="regular" />
          LinkedIn
        </a>
        <a
          href={RESUME_FILE_PATH}
          download="tejasnewfsd.pdf"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-300 hover:border-foreground/20 hover:bg-muted active:scale-[0.98] sm:ml-auto sm:w-auto"
        >
          <DownloadSimple size={14} weight="regular" />
          Resume
        </a>
      </div>
    </section>
  );
}
