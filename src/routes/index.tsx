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
            Portfolio · 2022 — 2026
          </div>
          <h1 className="mt-8 font-serif text-[3.25rem] sm:text-7xl md:text-[7.5rem] leading-[0.95] text-balance max-w-5xl">
            Designing <em className="text-primary not-italic">objects</em>,
            <br />
            interfaces and the <em className="italic font-serif">quiet systems</em> between.
          </h1>
          <p className="mt-10 max-w-xl text-lg text-muted-foreground text-pretty">
            I'm a product designer working across physical product, IoT, UI/UX
            and material-led concepts. A decade-curious approach, ten selected
            projects below.
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

      {/* Work masonry */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 auto-rows-[minmax(0,1fr)]">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
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
