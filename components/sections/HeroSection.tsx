export function HeroSection() {
  return (
    <section className="mb-8">
      {/* Avatar */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted text-sm font-semibold text-foreground">
        TN
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
          href="tel:+918623981647"
          className="hover:text-foreground transition-colors"
        >
          +91 86239 81647
        </a>
        <a
          href="mailto:tejasnasre.dev@gmail.com"
          className="hover:text-foreground transition-colors"
        >
          tejasnasre.dev@gmail.com
        </a>
        <span>Nagpur, India</span>
      </div>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <a
          href="https://tejasnasre.is-a.dev"
          className="font-medium text-foreground underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/tejasnasr"
          className="font-medium text-foreground underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/tejasnasre"
          className="font-medium text-foreground underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
