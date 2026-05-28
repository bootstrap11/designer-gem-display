export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl italic">Let's make<br/>something honest.</p>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p className="text-foreground">Shyam Hadani</p>
          <p>Product Designer · Ahmedabad</p>
          <p>B.Des, Nirma University · 2023 – 2027</p>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p className="text-foreground">Elsewhere</p>
          <a href="mailto:Hadanishyam@gmail.com" className="block hover:text-foreground">Hadanishyam@gmail.com</a>
          <a href="tel:+919408886632" className="block hover:text-foreground">+91 94088 86632</a>
          <a href="#" className="block hover:text-foreground">Behance · LinkedIn · Instagram</a>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} Shyam Hadani · Designed with care.
      </div>
    </footer>
  );
}
