export function Navigation() {
  return (
    <nav className="mb-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
      <a
        href="#"
        className="font-medium text-foreground transition-colors hover:text-muted-foreground"
      >
        Home
      </a>
      <a href="#experience" className="transition-colors hover:text-foreground">
        Experience
      </a>
      <a href="#projects" className="transition-colors hover:text-foreground">
        Projects
      </a>
      <a href="#skills" className="transition-colors hover:text-foreground">
        Skills
      </a>
      <a
        href="#achievements"
        className="transition-colors hover:text-foreground"
      >
        Achievements
      </a>
    </nav>
  );
}
