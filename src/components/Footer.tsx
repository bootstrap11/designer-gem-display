export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl italic">Let's make<br/>something honest.</p>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p className="text-foreground">Studio</p>
          <p>Product & Industrial Design</p>
          <p>Available for select projects · 2026</p>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p className="text-foreground">Elsewhere</p>
          <a href="mailto:hello@studio.com" className="block hover:text-foreground">hello@studio.com</a>
          <a href="#" className="block hover:text-foreground">Behance</a>
          <a href="#" className="block hover:text-foreground">LinkedIn</a>
          <a href="#" className="block hover:text-foreground">Instagram</a>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} · Designed with care.
      </div>
    </footer>
  );
}
