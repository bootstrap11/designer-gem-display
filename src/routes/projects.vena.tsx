import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import coverImg from "@/assets/vena/Cover_page.png.asset.json";
import conceptCoverImg from "@/assets/vena/Concept_coverpage.png.asset.json";
import inspirationImg from "@/assets/vena/Inspiration.png.asset.json";
import ideationImg from "@/assets/vena/Ideation.png.asset.json";
import ideationConceptImg from "@/assets/vena/Ideation_concept.png.asset.json";
import explodedImg from "@/assets/vena/Exploded_view.png.asset.json";
import renderedConceptImg from "@/assets/vena/rendered_concept.png.asset.json";
import productPhotoImg from "@/assets/vena/Product_photography.png.asset.json";
import ergonomicImg from "@/assets/vena/ergonomic_evaluation.png.asset.json";
import aqiImg from "@/assets/vena/AQI_indication.png.asset.json";

export const Route = createFileRoute("/projects/vena")({
  head: () => ({
    meta: [
      { title: "VENA — Personal Air Purifier" },
      {
        name: "description",
        content:
          "VENA is a compact, biomimicry-inspired personal air purifier for modern workspaces — designed for the IOUVA competition with SolidWorks CAD and KeyShot renders.",
      },
      { property: "og:title", content: "VENA — Nature's Flow. Purified." },
      {
        property: "og:description",
        content:
          "A leaf-vein inspired desk air purifier balancing clean air, ergonomics and organic aesthetics.",
      },
    ],
  }),
  component: VenaPage,
});

const problems = [
  { title: "Not personal", body: "Most purifiers are designed for rooms, not desk spaces." },
  { title: "Too loud", body: "Fan noise disturbs concentration during work or study." },
  { title: "Visually intrusive", body: "Appliance-like forms clash with modern desk aesthetics." },
  { title: "Unclear feedback", body: "Users lack real-time information on indoor air quality." },
  { title: "Messy maintenance", body: "Filter replacement feels inconvenient and unintuitive." },
  { title: "High energy, low efficiency", body: "More power than needed, without focused results." },
];

const objectives = [
  { title: "Personal clean air zone", body: "Deliver clean air within the user's immediate environment." },
  { title: "Easy maintenance", body: "Enable quick, tool-free filter replacement." },
  { title: "Nature-inspired design", body: "Translate leaf-vein principles into functional airflow architecture." },
  { title: "Premium aesthetics", body: "A calming product that integrates into modern interiors." },
];

const principles = [
  {
    title: "Efficient Distribution",
    observation: "Leaf veins transport nutrients over large areas with minimal energy.",
    application: "Inspired the airflow distribution system.",
  },
  {
    title: "Interconnected Networks",
    observation: "Primary and secondary veins work together.",
    application: "Inspired the intake and outlet architecture.",
  },
  {
    title: "Lightweight Structure",
    observation: "Leaves achieve strength without excess material.",
    application: "Inspired a minimal yet durable product form.",
  },
  {
    title: "Maximum Coverage",
    observation: "Vein networks efficiently reach every part of the leaf.",
    application: "Inspired 360° air intake and focused air delivery.",
  },
];

const aqi = [
  { color: "#4ade80", label: "Green", meaning: "Excellent" },
  { color: "#facc15", label: "Yellow", meaning: "Good" },
  { color: "#fb923c", label: "Orange", meaning: "Moderate" },
  { color: "#ef4444", label: "Red", meaning: "Poor" },
];

const flow = [
  "Place purifier on a desk or side table.",
  "Press the illuminated power button.",
  "AQI ring displays current air quality.",
  "Air enters through the lower intake grille.",
  "Air passes through Pre-filter → Carbon → HEPA.",
  "Clean air exits through the top outlet.",
  "AQI ring continuously updates in real time.",
];

const specs: [string, string][] = [
  ["Product Type", "Personal Desk Air Purifier"],
  ["Filtration", "HEPA H13 + Activated Carbon"],
  ["Air Intake", "360° Vein-Inspired Pattern"],
  ["Air Delivery", "Vertical Clean Air Outlet"],
  ["Noise Level", "< 25 dB"],
  ["Modes", "Auto · Focus · Silent"],
  ["Power", "USB-C"],
  ["Dimensions", "160 × 220 mm (W × H)"],
];

const cmf = ["Warm Ivory", "Soft Beige", "Frosted White", "Matte Texture"];

export default function VenaPage() {
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
              <span>Product / Air Care</span>
              <span className="h-px w-6 bg-muted-foreground/60" />
              <span>2025</span>
              <span className="h-px w-6 bg-muted-foreground/60" />
              <span>IOUVA Competition</span>
            </div>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] text-balance">
              VENA
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground text-pretty">
              Nature's Flow. Purified. — a compact personal air purifier for modern workspaces,
              inspired by the intricate network of leaf veins.
            </p>
          </div>
        </section>

        {/* Cover placeholder */}
        <section className="mx-auto max-w-6xl px-6">
          <div
            className="aspect-[16/9] rounded-3xl border border-border/40 bg-noise relative overflow-hidden shadow-glow"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.05 90) 0%, oklch(0.55 0.06 80) 50%, oklch(0.30 0.04 60) 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs tracking-widest uppercase text-foreground/80">
              <span>VENA · Personal Air Purifier</span>
              <span>Biomimicry · Leaf Veins</span>
            </div>
          </div>
        </section>

        {/* Meta */}
        <section className="mx-auto max-w-6xl px-6 py-20 grid gap-16 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-8 text-sm">
            <Field label="Role" value="Industrial Design, CAD, Rendering" />
            <Field label="Year" value="2025" />
            <Field label="Context" value="IOUVA Competition" />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Tools</p>
              <ul className="flex flex-wrap gap-2">
                {["SolidWorks", "KeyShot", "Sketching", "Biomimicry Research"].map((t) => (
                  <li key={t} className="rounded-full border border-border/60 px-3 py-1 text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p className="text-foreground font-serif text-3xl leading-snug">
              Humans consume thousands of liters of air every day. Air quality quietly shapes how we
              feel, focus, and function — yet the products meant to fix it feel like appliances.
            </p>
            <p>
              VENA reframes the personal purifier as something calm and considered. Inspired by
              nature's most efficient distribution system — the leaf vein — it combines clean air,
              thoughtful functionality, and an organic form language for healthier, more mindful
              working.
            </p>
          </div>
        </section>

        {/* Problems */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Problem Space</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Where existing purifiers fall short</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border/50 p-6 bg-card/40">
                <p className="font-serif text-2xl">{p.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Objectives */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Design Objectives</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Four guiding intentions</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {objectives.map((o) => (
              <div key={o.title} className="rounded-2xl border border-border/50 p-6">
                <p className="font-serif text-2xl">{o.title}</p>
                <p className="mt-2 text-muted-foreground">{o.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Inspiration */}
        <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Inspiration</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Leaves as an engineering system</h2>
            <p className="mt-6 text-muted-foreground">
              Nature has iterated on efficient systems for millions of years. Leaf veins distribute
              water and nutrients, maximize coverage, and minimize energy — all with a lightweight,
              structural network. VENA borrows this logic as its airflow architecture.
            </p>
          </div>
          <div className="space-y-4">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border/50 p-6">
                <p className="font-serif text-2xl">{p.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="text-foreground">Observation — </span>
                  {p.observation}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="text-foreground">Application — </span>
                  {p.application}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Airflow */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Airflow Architecture</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">360° in, purified up</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border/50 p-6">
              <p className="font-serif text-2xl">Intake & Outlet</p>
              <p className="mt-2 text-muted-foreground">
                Air is drawn in from all sides through the lower vein-patterned grille, passed
                through pre-filter, activated carbon and HEPA H13 media, then released vertically
                through the top outlet as a clean-air column at the user.
              </p>
            </div>
            <div className="rounded-2xl border border-border/50 p-6">
              <p className="font-serif text-2xl">Tool-free Maintenance</p>
              <ol className="mt-3 list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Prepare</li>
                <li>Unlock (20–30° twist)</li>
                <li>Remove sleeve</li>
                <li>Remove cartridge</li>
                <li>Insert new cartridge</li>
                <li>Reassemble</li>
              </ol>
            </div>
          </div>
        </section>

        {/* AQI ring */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">AQI Indicator</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">One button. Instant clarity.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A single illuminated ring around the power button communicates air quality at a glance
            — no app, no numbers. It doubles as a soft ambient glow during operation.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {aqi.map((a) => (
              <div key={a.label} className="rounded-2xl border border-border/50 p-6 flex items-center gap-4">
                <span
                  className="h-10 w-10 rounded-full shadow-glow"
                  style={{ background: a.color, boxShadow: `0 0 24px ${a.color}66` }}
                />
                <div>
                  <p className="font-serif text-xl">{a.label}</p>
                  <p className="text-sm text-muted-foreground">{a.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UX flow */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">User Experience</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">A quiet ritual on the desk</h2>
          <ol className="mt-8 grid gap-3 md:grid-cols-2">
            {flow.map((step, i) => (
              <li key={step} className="rounded-2xl border border-border/50 p-5 flex gap-4">
                <span className="font-mono text-xs text-muted-foreground pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* CMF */}
        <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Materials</p>
            <h2 className="mt-3 font-serif text-4xl">Warm, quiet, residential</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li><span className="text-foreground">Housing</span> — ABS + PC blend, matte finish</li>
              <li><span className="text-foreground">Intake grille</span> — Injection-molded ABS, leaf-vein pattern</li>
              <li><span className="text-foreground">AQI indicator</span> — Frosted polycarbonate</li>
              <li><span className="text-foreground">Filter housing</span> — Polypropylene</li>
              <li><span className="text-foreground">Air outlet grille</span> — ABS + PC blend</li>
              <li><span className="text-foreground">Base ring</span> — Silicone</li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">CMF Direction</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {cmf.map((c, i) => {
                const swatches = ["#f0e6d2", "#e2d3ba", "#f4efe6", "#c9bfae"];
                return (
                  <div key={c} className="rounded-2xl border border-border/50 overflow-hidden">
                    <div className="aspect-[4/3]" style={{ background: swatches[i] }} />
                    <p className="p-4 text-sm">{c}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Specifications</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">At a glance</h2>
          <dl className="mt-8 grid gap-x-8 gap-y-4 md:grid-cols-2 border-t border-border/50 pt-6">
            {specs.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 border-b border-border/40 pb-3">
                <dt className="text-xs tracking-widest uppercase text-muted-foreground">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>
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
