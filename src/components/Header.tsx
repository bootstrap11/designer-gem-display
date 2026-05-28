import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-serif text-2xl italic">Studio</span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow transition-transform group-hover:scale-150" />
        </Link>
        <ul className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <li>
            <Link
              to="/"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
              className="hover:text-foreground transition-colors"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              activeProps={{ className: "text-foreground" }}
              className="hover:text-foreground transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              activeProps={{ className: "text-foreground" }}
              className="hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link
          to="/contact"
          className="rounded-full border border-border/60 px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
        >
          Let's talk
        </Link>
      </nav>
    </header>
  );
}
