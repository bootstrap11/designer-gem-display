import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroAsset from "@/assets/lucent/beer-pixel-wall.png.asset.json";

const hero = heroAsset.url;

export const Route = createFileRoute("/projects/lucent")({
  head: () => ({
    meta: [
      { title: "LUCENT — Beer Pixel Wall Installation" },
      {
        name: "description",
        content:
          "LUCENT is an interactive pixel display built from discarded beer bottles — an upcycled, programmable light installation for hospitality spaces.",
      },
      { property: "og:title", content: "LUCENT — Beer Pixel Wall Installation" },
      {
        property: "og:description",
        content:
          "An upcycled, programmable beer-bottle pixel wall combining modular construction and digital interaction.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LucentPage,
});

const facts = [
  { label: "Type", value: "Installation" },
  { label: "Time", value: "3 weeks" },
  { label: "Team", value: "Collaborative Project — Makers Asylum" },
  { label: "Year", value: "2026" },
];

const pillars = [
  {
    n: "01",
    title: "Upcycling",
    body: "Discarded beer bottles are collected, cleaned and reframed as the optical unit of the display — waste becomes the pixel.",
  },
  {
    n: "02",
    title: "Modular Construction",
    body: "A repeatable bottle-and-rack module allows the wall to scale in rows and columns, and to be dismantled and rebuilt on site.",
  },
  {
    n: "03",
    title: "Digital Interaction",
    body: "Addressable LEDs sit behind each bottle base, driven as a low-resolution matrix so patterns, text and animations can be programmed.",
  },
  {
    n: "04",
    title: "Branding Experience",
    body: "Designed for hospitality spaces — bars and taprooms get a sustainable, ownable light feature built from their own waste stream.",
  },
];

const process = [
  {
    title: "Collection & Preparation",
    body: "Bottles sourced from local waste, de-labelled, washed and sorted by glass tint so the colour field reads evenly across the grid.",
  },
  {
    title: "Rack & Frame",
    body: "A plywood back panel with timber rails holds each bottle neck-inward, keeping the bases flush at the viewing face and the light chamber sealed behind.",
  },
  {
    title: "Light Matrix",
    body: "Individually addressable LED strips are mapped one-per-bottle, turning the wall into a controllable pixel grid.",
  },
  {
    title: "Programming",
    body: "Colour gradients, waves and pattern sequences were written and tuned live against the physical wall to account for glass diffusion.",
  },
];

function LucentPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <article>
        <section className="relative">
          <div className="absolute inset-0 bg-aurora pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-10">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              ← All work
            </Link>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">
              <span>Installation / Light</span>
              <span className="h-px w-6 bg-muted-foreground/60" />
              <span>2026</span>
            </div>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] text-balance">
              LUCENT
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground text-pretty">
              Beer Pixel Wall — an interactive pixel display that transforms discarded
              beer bottles into a programmable visual installation.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl border border-border/40 shadow-glow">
            <img
              src={hero}
              alt="LUCENT beer pixel wall — a grid of illuminated beer bottle bases forming a colour gradient"
              className="w-full object-cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 grid gap-16 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-8 text-sm">
            {facts.map((f) => (
              <div key={f.label}>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  {f.label}
                </p>
                <p className="text-foreground">{f.value}</p>
              </div>
            ))}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Tools</p>
              <ul className="flex flex-wrap gap-2">
                {[
                  "Upcycling",
                  "Modular Fabrication",
                  "Arduino",
                  "Addressable LEDs",
                  "Woodworking",
                  "Coding",
                ].map((t) => (
                  <li key={t} className="rounded-full border border-border/60 px-3 py-1 text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p className="text-foreground font-serif text-3xl leading-snug">
              The project combines upcycling, modular construction and digital
              interaction to create a sustainable branding experience for
              hospitality spaces.
            </p>
            <p>
              Bars generate a constant stream of empty glass. LUCENT takes that waste
              and re-reads it as an optical material: the thick, moulded base of a beer
              bottle behaves like a lens, so a single LED behind it blooms into a soft,
              round pixel. Stacked into a grid, the bottles become a low-resolution
              screen with a texture no display panel can imitate.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-10">Design Approach</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.n} className="rounded-2xl border border-border/40 p-7">
                <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
                <h3 className="mt-3 font-serif text-2xl">{p.title}</h3>
                <p className="mt-3 text-muted-foreground text-pretty">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-serif text-4xl mb-10">Process</h2>
          <div className="space-y-px">
            {process.map((s, i) => (
              <div
                key={s.title}
                className="grid gap-4 md:grid-cols-[auto_1fr_2fr] items-start border-t border-border/40 py-7"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <p className="text-muted-foreground text-pretty">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Link
            to="/contact"
            className="inline-block rounded-full border border-border px-5 py-2.5 text-sm hover:bg-accent transition"
          >
            Get in touch about this project
          </Link>
        </section>
      </article>

      <Footer />
    </div>
  );
}
