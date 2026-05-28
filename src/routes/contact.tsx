import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Studio" },
      { name: "description", content: "Get in touch about a product, IoT, or interface project." },
      { property: "og:title", content: "Contact — Studio" },
      { property: "og:description", content: "Available for select projects in 2026." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative">
        <div className="absolute inset-0 bg-aurora pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-32 md:pt-32">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Contact</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-balance">
            Tell me what you're <em className="text-primary not-italic">building</em>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground text-pretty">
            Product, IoT, interfaces, or something stranger. I take on a few
            engagements each quarter — write with what you have, even if it's
            a sentence.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <a
              href="mailto:hello@studio.com"
              className="group rounded-2xl border border-border/60 p-8 hover:bg-card transition"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Email</p>
              <p className="mt-3 font-serif text-3xl">hello@studio.com</p>
              <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground">
                Best for project enquiries →
              </p>
            </a>
            <div className="rounded-2xl border border-border/60 p-8">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Elsewhere</p>
              <ul className="mt-3 space-y-2 text-base">
                <li><a href="#" className="hover:text-primary">Behance ↗</a></li>
                <li><a href="#" className="hover:text-primary">LinkedIn ↗</a></li>
                <li><a href="#" className="hover:text-primary">Instagram ↗</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
