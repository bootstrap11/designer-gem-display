import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import explodedImg from "@/assets/furniture/iteration_one_exploded.png.asset.json";
import iter1Photo1 from "@/assets/furniture/Iteration_one_photo_1.png.asset.json";
import iter1Photo2 from "@/assets/furniture/iteration_one_photo_2.png.asset.json";
import iter2Render from "@/assets/furniture/iteration_2_render.jpg.asset.json";
import lifestyle from "@/assets/furniture/AI_generated_people_gathered_and_seating.jpg.asset.json";
import sketch from "@/assets/furniture/Sketch.png.asset.json";
import iter2Real from "@/assets/furniture/iteration_2_in_real.jpg.asset.json";
import iter2Real2 from "@/assets/furniture/iteration_2_in_real_2.jpg.asset.json";
import iter2Real3 from "@/assets/furniture/iteration_2_in_real_3.jpg.asset.json";

export const Route = createFileRoute("/projects/furniture")({
  head: () => ({
    meta: [
      { title: "Furniture Design — Compact Seating for Small Homes" },
      {
        name: "description",
        content:
          "A compact, multifunctional, flat-pack interlocking stool designed for small Indian households — two iterations exploring form, material, and manufacturing.",
      },
      { property: "og:title", content: "Furniture Design — Compact Seating" },
      {
        property: "og:description",
        content:
          "Space-efficient, tool-less interlocking stool for small Indian homes. Two iterations, from plywood to CNC-cut MDF.",
      },
      { property: "og:image", content: iter2Render.url },
    ],
  }),
  component: FurniturePage,
});

const problems = [
  { title: "Permanent floor space", body: "Conventional stools and chairs occupy space even when unused." },
  { title: "Bulky to store", body: "Existing furniture is difficult to tuck away in compact homes." },
  { title: "Lack of flexibility", body: "Rigid, non-modular pieces don't adapt to changing daily use." },
];

const useCases = [
  "Guests visiting",
  "Card games",
  "Festivals",
  "Daily informal use",
];

const opportunity = [
  "Compact stool",
  "Easy to store",
  "Lightweight in appearance",
  "Warm in material expression",
  "Practical for everyday Indian living",
];

const iter1Features = [
  "Three-part construction",
  "Legs locked through central slit",
  "Top sliding into rectangular slots",
  "Stable triangular footprint",
  "Flat-packable construction",
];

const circularRationale = [
  { title: "Softens geometry", body: "The circular profile reduces the visual harshness of straight edges." },
  { title: "Safer edges", body: "Rounded edges improve usability in tight spaces." },
  { title: "Visually lighter", body: "The circular form makes the stool feel lighter in small rooms." },
];

const iter2Changes = [
  { title: "Square top", body: "A square seat provides a clearer orientation." },
  { title: "X-shaped legs", body: "The leg structure evolves into an X-shaped configuration." },
  { title: "Grounded stance", body: "The new geometry gives the stool a stronger visual presence." },
  { title: "Same interlocking logic", body: "Retains the tool-less interlocking assembly principle." },
];

function FurniturePage() {
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
              <span>Furniture</span>
              <span className="h-px w-6 bg-muted-foreground/60" />
              <span>2025</span>
            </div>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] text-balance">
              Furniture Design
            </h1>
            <p className="mt-4 font-serif italic text-2xl md:text-3xl text-foreground/80">
              Compact Seating for Small Homes
            </p>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground text-pretty">
              A compact, multifunctional, flat-pack interlocking stool designed for small Indian households — two iterations refining form, stability, material, and manufacturing.
            </p>
          </div>
        </section>

        {/* Cover */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl border border-border/40 shadow-glow">
            <img src={iter2Render.url} alt="Final X-leg stool render" className="w-full h-auto block" loading="eager" />
          </div>
        </section>

        {/* Overview */}
        <section className="mx-auto max-w-6xl px-6 py-20 grid gap-12 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-6 text-sm">
            <Field label="Project Type" value="Furniture Design" />
            <Field label="Year" value="2025" />
            <Field label="Role" value="Concept, CAD, Fabrication" />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Tools</p>
              <ul className="flex flex-wrap gap-2">
                {["SolidWorks", "KeyShot", "Model Making", "Material Exploration", "Woodworking", "Prototyping"].map((t) => (
                  <li key={t} className="rounded-full border border-border/60 px-3 py-1 text-xs">{t}</li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p className="text-foreground font-serif text-3xl leading-snug">
              A compact, multifunctional seating solution intended for small Indian households — space-efficient, easy to assemble, and practical for everyday use while occupying minimal storage space.
            </p>
            <p>
              The project explores two stool iterations built on the same interlocking construction principle, gradually refining the form, stability, manufacturing process, and visual language.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Problem Statement</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Extra seating, no extra space</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground text-lg">
            Indian urban homes are space constrained, yet extra seating is frequently required for guests, card games, festivals, and daily informal use.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border/40 p-6">
                <h3 className="font-serif text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {useCases.map((u) => (
              <span key={u} className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                {u}
              </span>
            ))}
          </div>
        </section>

        {/* Opportunity */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-border/40 p-10 md:p-14 bg-card/40">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Design Opportunity</p>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl">A stool that steps back when unused</h2>
            <ul className="mt-6 grid gap-2 md:grid-cols-2 text-muted-foreground">
              {opportunity.map((o) => (
                <li key={o}>— {o}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sketch / Ideation */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-serif text-4xl">Ideation</h2>
            <p className="text-sm text-muted-foreground max-w-sm text-right">
              Form studies exploring interlocking legs and a lifted square top.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/40 bg-background">
            <img src={sketch.url} alt="Concept sketches of X-leg stool iterations" className="w-full h-auto block" loading="lazy" />
          </div>
        </section>

        {/* Iteration 1 */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Iteration 01</p>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl">Circular Top Stool</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            A three-part interlocking stool — a circular seat and two legs that mechanically slot into one another. Tool-less, flat-packable, hand-fabricated in plywood.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border/40 bg-background">
              <img src={explodedImg.url} alt="Exploded assembly of the circular top stool" className="w-full h-auto block" loading="lazy" />
            </div>
            <div className="grid grid-rows-2 gap-5">
              <div className="overflow-hidden rounded-2xl border border-border/40">
                <img src={iter1Photo1.url} alt="Iteration one — front view" className="w-full h-full object-cover block" loading="lazy" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-border/40">
                <img src={iter1Photo2.url} alt="Iteration one — three-quarter view" className="w-full h-full object-cover block" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border/40 p-6">
              <h3 className="font-serif text-2xl">Construction System</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {iter1Features.map((f) => (
                  <li key={f}>— {f}</li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Material</p>
                  <p>Plywood</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Process</p>
                  <p>Manually cut, hand finished</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Finish</p>
                  <p>Oil-rubbed</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Footprint</p>
                  <p>Triangular, stable</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <h3 className="font-serif text-2xl">Why a circular top</h3>
              {circularRationale.map((r) => (
                <div key={r.title} className="rounded-2xl border border-border/40 p-5">
                  <h4 className="font-serif text-xl">{r.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{r.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Usage lifestyle */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-border/40">
            <img src={lifestyle.url} alt="Multiple stools used around a table during a card game" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="mt-3 text-sm text-muted-foreground italic">
            Lifestyle scenario — additional seating pulled out for a card game in an Indian home.
          </p>
        </section>

        {/* Iteration 2 */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Iteration 02</p>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl">Square Top · X-Leg Stool</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            The same interlocking logic — refined into a sharper architectural form with a square seat and an X-shaped leg configuration.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border/40 shadow-glow">
            <img src={iter2Render.url} alt="Iteration 2 CAD render — X-leg stool" className="w-full h-auto block" loading="lazy" />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {iter2Changes.map((c) => (
              <div key={c.title} className="rounded-2xl border border-border/40 p-6">
                <h3 className="font-serif text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>

          {/* Real photos */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-border/40 md:col-span-2 md:row-span-2">
              <img src={iter2Real.url} alt="Iteration 2 prototype — front view" className="w-full h-full object-cover block" loading="lazy" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/40">
              <img src={iter2Real3.url} alt="Iteration 2 prototype — three-quarter view" className="w-full h-full object-cover block" loading="lazy" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/40">
              <img src={iter2Real2.url} alt="Iteration 2 prototype — corner joint detail" className="w-full h-full object-cover block" loading="lazy" />
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-2xl border border-border/40 p-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Material</p>
              <p>18 mm pre-laminated MDF</p>
            </div>
            <div className="rounded-2xl border border-border/40 p-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Process</p>
              <p>CAD-designed, CNC-cut</p>
            </div>
            <div className="rounded-2xl border border-border/40 p-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Finish</p>
              <p>Manual edge banding</p>
            </div>
          </div>
        </section>

        {/* Manufacturing Evolution */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-serif text-4xl mb-8">Manufacturing Evolution</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border/40 p-8">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Iteration 01</p>
              <h3 className="mt-2 font-serif text-3xl">Handcrafted</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>— Manual fabrication</li>
                <li>— Hand finishing</li>
                <li>— Plywood construction</li>
                <li>— Oil-rubbed finish</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border/40 p-8 bg-card/40">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Iteration 02</p>
              <h3 className="mt-2 font-serif text-3xl">Digitally Fabricated</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>— CAD modelling</li>
                <li>— CNC machining</li>
                <li>— Pre-laminated MDF</li>
                <li>— Manual edge banding</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground italic max-w-2xl">
            A progression from handcrafted fabrication to digitally manufactured production while retaining the same tool-less interlocking assembly concept.
          </p>
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
