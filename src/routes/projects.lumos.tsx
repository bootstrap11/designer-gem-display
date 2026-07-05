import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/projects/lumos")({
  head: () => ({
    meta: [
      { title: "LUMOS — The Radiating Cage" },
      {
        name: "description",
        content:
          "LUMOS is a table lamp of 25 hand-twisted aluminium rods that turns shadow into form — a study in light, material transformation, and manual making.",
      },
      { property: "og:title", content: "LUMOS — The Radiating Cage" },
      {
        property: "og:description",
        content:
          "A sculptural table lamp exploring light, material, and shadow through hand-twisted aluminium rods.",
      },
      { property: "og:image", content: "/lumos/cover.jpg" },
    ],
  }),
  component: LumosPage,
});

const themes = [
  { title: "Material Transformation", desc: "Industrial aluminium rods manually altered through twisting." },
  { title: "Light Manipulation", desc: "The form is designed specifically to modify and project light." },
  { title: "Shadow Generation", desc: "Shadows become a primary design outcome rather than a secondary effect." },
  { title: "Manual Craftsmanship", desc: "Hand twisting, finishing, and slot-based assembly throughout." },
  { title: "Precision + Hand-Made", desc: "Precision-cut wooden joinery meets hand-deformed aluminium elements." },
  { title: "Shadow as Form", desc: "The visible experience extends beyond the object into the surrounding space." },
];

const materials = [
  { name: "Copper Wire", verdict: "Rejected", reason: "Too structural, too rigid." },
  { name: "Aluminium Sheets", verdict: "Rejected", reason: "Too planar — blocked light excessively." },
  { name: "4.5 mm Aluminium Rods", verdict: "Selected", reason: "Twistable, rhythmic texture, reflective, structural, light-leaking." },
];

const stages = [
  {
    n: "01",
    title: "Torsion",
    body: "Manual twisting of 25 aluminium rods to a uniform spiral pitch — generating the rhythmic, light-breaking surface texture.",
  },
  {
    n: "02",
    title: "Refinement",
    body: "Rods are buffed to a high gloss and ends are sanded flush for a clean finish and accurate fit during assembly.",
  },
  {
    n: "03",
    title: "Joinery",
    body: "A solid wood base is crafted with 25 precision slots for friction-fit installation and accurate radial positioning.",
  },
  {
    n: "04",
    title: "Integration",
    body: "Internal light source wired and aligned with the top cap slots — completing the cage and the lighting system.",
  },
];

function LumosPage() {
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
              <span>Product / Light</span>
              <span className="h-px w-6 bg-muted-foreground/60" />
              <span>2026</span>
              <span className="h-px w-6 bg-muted-foreground/60" />
              <span>Elements of Form & Space III</span>
            </div>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] text-balance">
              LUMOS
            </h1>
            <p className="mt-4 font-serif italic text-2xl md:text-3xl text-foreground/80">
              The Radiating Cage
            </p>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground text-pretty">
              A table lamp investigating the metamorphosis of industrial aluminium into a vessel for light — where shadow becomes the form.
            </p>
          </div>
        </section>

        {/* Cover image */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl border border-border/40 shadow-glow">
            <img
              src="/lumos/cover.jpg"
              alt="LUMOS lamp glowing on a desk, casting radial shadows"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="mx-auto max-w-6xl px-6 py-20 grid gap-12 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-6 text-sm">
            <Field label="Designer" value="Shyam Hadani (23BDP012)" />
            <Field label="Course" value="Elements of Form & Space III" />
            <Field label="Role" value="Material Exploration, Manual Making, Fabrication" />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Tools & Materials</p>
              <ul className="flex flex-wrap gap-2">
                {["Aluminium Wire", "Hand Fabrication", "Model Making", "Sketching", "Lighting Exploration"].map((t) => (
                  <li key={t} className="rounded-full border border-border/60 px-3 py-1 text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p className="text-foreground font-serif text-3xl leading-snug">
              LUMOS explores how industrial aluminium rods can be manually manipulated into a lighting object that projects intricate light and shadow patterns into its surroundings.
            </p>
            <p>
              The brief was to innovate with unconventional materials through manual making — bonding, interlacing, and shaping. The project follows a "metamorphosis of material" idea where the primary form becomes a vessel for manipulating light and projecting radial shadows into the room.
            </p>
            <p>
              The focus is not only on the physical lamp but equally on the shadows it generates — the surrounding surfaces become part of the design.
            </p>
          </div>
        </section>

        {/* Moodboard */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-serif text-4xl">Moodboard</h2>
            <p className="text-sm text-muted-foreground max-w-sm text-right">
              Radial shadow patterns, perforated surfaces, organic lattices and rhythmic linear frameworks.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/40">
            <img src="/lumos/moodboard.png" alt="LUMOS moodboard" className="w-full h-auto block" loading="lazy" />
          </div>
        </section>

        {/* Material exploration */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-6">Material Exploration</h2>
          <div className="overflow-hidden rounded-2xl border border-border/40 mb-8">
            <img src="/lumos/material-exploration.png" alt="Material exploration: copper wire, twisted strands, aluminium sheet forms" className="w-full h-auto block" loading="lazy" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {materials.map((m) => (
              <div key={m.name} className="rounded-2xl border border-border/40 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-2xl">{m.name}</h3>
                  <span
                    className={`text-[10px] tracking-widest uppercase rounded-full px-2 py-1 ${
                      m.verdict === "Selected"
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {m.verdict}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{m.reason}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground italic">
            From sheet to line — a move from planar forms to linear structural elements.
          </p>
        </section>

        {/* Why aluminium */}
        <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-8 md:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-2xl border border-border/40">
            <img src="/lumos/why-aluminium.jpg" alt="Close-up of twisted aluminium rods catching light" className="w-full h-auto block" loading="lazy" />
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-4xl">Why 4.5 mm Aluminium</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>— Can be manually twisted</li>
              <li>— Gains rhythmic texture after twisting</li>
              <li>— Breaks and diffuses light effectively</li>
              <li>— Reflective surface adds visual depth</li>
              <li>— Maintains structural integrity</li>
              <li>— Forms a "light-leaking cage" structure</li>
            </ul>
          </div>
        </section>

        {/* Selected concept */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-border/40 p-10 md:p-14 bg-card/40">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Selected Concept</p>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl">The Radiating Cage</h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              25 hand-twisted aluminium rods arranged in a radial array. The physical object acts as a tool — the larger visual experience is produced by the projected shadows it casts onto desks and walls.
            </p>
            <p className="mt-4 max-w-2xl text-muted-foreground italic">
              A dialogue between precision (wooden slots, controlled placement) and manual deformation (hand-twisted aluminium).
            </p>
          </div>
        </section>

        {/* Technical drawing */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-6">Technical Configuration</h2>
          <div className="overflow-hidden rounded-2xl border border-border/40 bg-background p-6">
            <img src="/lumos/technical-drawing.png" alt="Technical drawing of LUMOS lamp" className="w-full h-auto block" loading="lazy" />
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-6">Manufacturing Process</h2>
          <div className="overflow-hidden rounded-2xl border border-border/40 mb-8">
            <img src="/lumos/process.png" alt="Workshop process — twisting, buffing, joinery" className="w-full h-auto block" loading="lazy" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {stages.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border/40 p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-muted-foreground">{s.n}</span>
                  <h3 className="font-serif text-2xl">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shadow gallery */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-6">Shadow as Form</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border/40">
              <img src="/lumos/shadow.jpg" alt="Radial shadows projected from the base of the lamp" className="w-full h-auto block" loading="lazy" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/40">
              <img src="/lumos/shadow-2.jpg" alt="Hand positioning the lamp as shadows spread across the wall" className="w-full h-auto block" loading="lazy" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/40">
              <img src="/lumos/product-closeup.png" alt="LUMOS lamp close-up next to a plant" className="w-full h-auto block" loading="lazy" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/40">
              <img src="/lumos/product-scene.png" alt="LUMOS in a darkened room casting radial light" className="w-full h-auto block" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Themes */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-serif text-4xl mb-6">Key Themes</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {themes.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border/40 p-6">
                <h3 className="font-serif text-xl">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
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
