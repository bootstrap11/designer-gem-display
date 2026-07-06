import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyam Hadani — Product Designer" },
      {
        name: "description",
        content:
          "Portfolio of Shyam Hadani, a product designer based in Ahmedabad working across industrial product, IoT, UI/UX and material-led design.",
      },
      { property: "og:title", content: "Shyam Hadani — Product Designer" },
      {
        property: "og:description",
        content: "Selected work in product, industrial and interaction design.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-36 md:pb-44">
          <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            <span className="h-px w-10 bg-muted-foreground/60" />
            Shyam Hadani · Ahmedabad
          </div>
          <h1 className="mt-8 font-serif text-[3.25rem] sm:text-7xl md:text-[7.5rem] leading-[0.95] text-balance max-w-5xl">
            Designing <em className="text-primary not-italic">objects</em>
            <br />
            that solve <em className="italic font-serif">everyday problems</em> often unnoticed.
          </h1>
          <p className="mt-10 max-w-xl text-lg text-muted-foreground text-pretty">
            I'm Shyam Hadani, a Product and Interaction Designer. I design products, systems, and experiences through research, material exploration, and hands-on prototyping. Alongside design, I'm also exploring project management to better understand how ideas evolve into well-executed products through collaboration and structured execution.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              See the work
            </a>
            <Link
              to="/about"
              className="rounded-full border border-border px-6 py-3 text-sm hover:bg-accent transition"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* Index strip */}
      <section className="border-y border-border/40 bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs tracking-widest uppercase text-muted-foreground">
          <span>Selected Work</span>
          <span>{projects.length} projects</span>
          <span>Physical · Digital · Material</span>
          <span className="hidden md:inline">Scroll ↓</span>
        </div>
      </section>

      {/* Featured — VENA */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <Link
          to="/projects/vena"
          className="group relative block overflow-hidden rounded-3xl border border-border/40"
        >
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <img
              src={venaCoverImg.url}
              alt="VENA — Nature's Flow. Purified."
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-foreground/80">
              <span className="font-mono">01</span>
              <span className="h-px w-6 bg-foreground/40" />
              <span>Product / Air Care</span>
            </div>
            <h3 className="mt-3 font-serif text-3xl md:text-5xl leading-tight sr-only">VENA</h3>
            <p className="sr-only">Nature's Flow. Purified.</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-foreground/70 opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              <span>View project</span>
              <span aria-hidden>→</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Work masonry */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid grid-cols-2 gap-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} uniform />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/50 p-10 md:p-16 bg-aurora">
          <div className="relative max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Open for 2026</p>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-tight text-balance">
              Have a project that deserves real thought?
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Start a conversation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
