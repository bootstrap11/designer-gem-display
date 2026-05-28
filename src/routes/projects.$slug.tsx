import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Studio` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: `${loaderData.project.title} — Studio` },
          { property: "og:description", content: loaderData.project.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 grid place-items-center px-6">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">404</p>
          <h1 className="mt-4 font-serif text-5xl">Project not found</h1>
          <Link to="/" className="mt-6 inline-block underline text-primary">Back to work</Link>
        </div>
      </div>
      <Footer />
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen grid place-items-center px-6">
      <button onClick={reset} className="underline">Try again</button>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />

      <article>
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0 bg-aurora pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-10">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              ← All work
            </Link>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">
              <span>{project.category}</span>
              <span className="h-px w-6 bg-muted-foreground/60" />
              <span>{project.year}</span>
            </div>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] text-balance">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground text-pretty">
              {project.tagline}
            </p>
          </div>
        </section>

        {/* Big cover */}
        <section className="mx-auto max-w-6xl px-6">
          <div
            className="aspect-[16/9] rounded-3xl border border-border/40 bg-noise relative overflow-hidden shadow-glow"
            style={{ background: project.cover }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs tracking-widest uppercase text-foreground/80">
              <span>{project.title}</span>
              <span>{project.year}</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="mx-auto max-w-6xl px-6 py-20 grid gap-16 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-8 text-sm">
            <Field label="Role" value={project.role} />
            <Field label="Year" value={project.year} />
            <Field label="Category" value={project.category} />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Tools</p>
              <ul className="flex flex-wrap gap-2">
                {project.tools.map((t: string) => (
                  <li key={t} className="rounded-full border border-border/60 px-3 py-1 text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p className="text-foreground font-serif text-3xl leading-snug">
              {project.description}
            </p>
            <p>
              This case study is a work-in-progress narrative — process
              imagery, sketches, prototypes and final renders will live here
              once the full write-up is published. For now, reach out if
              you'd like to see the deck.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-accent transition"
            >
              Request the full case study
            </Link>
          </div>
        </section>

        {/* More work */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-4xl">More work</h2>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              All projects →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/40"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: p.cover }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[11px] tracking-widest uppercase text-muted-foreground">
                    {p.category}
                  </p>
                  <p className="mt-1 font-serif text-2xl">{p.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">{label}</p>
      <p className="text-foreground">{value}</p>
    </div>
  );
}
