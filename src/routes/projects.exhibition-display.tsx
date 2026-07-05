import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/projects/exhibition-display")({
  head: () => ({
    meta: [
      { title: "Exhibition Design — Collapsible Display Structure" },
      {
        name: "description",
        content:
          "A modular kinetic exhibition framework that deploys from a compact form into 2D/3D display configurations — inspired by phyllotaxis and curling spiral geometry.",
      },
      { property: "og:title", content: "Exhibition Design — Collapsible Display Structure" },
      {
        property: "og:description",
        content:
          "Modular, collapsible, kinetic exhibition display — paper to MDF, CAD, joinery, ergonomics, and full-scale fabrication.",
      },
      { property: "og:image", content: "/exhibition/display.png" },
    ],
  }),
  component: ExhibitionPage,
});

const problems = [
  {
    title: "Sustainability & Waste",
    problem: "Exhibition structures are often single-use, generating large amounts of material waste.",
    opportunity: "Reusable, modular, circular design using recyclable materials.",
  },
  {
    title: "Portability & Assembly",
    problem: "Heavy structures requiring tools, setup time, and skilled labor.",
    opportunity: "Flat-pack, lightweight, tool-free deployment.",
  },
  {
    title: "Interaction / Kinetic Hook",
    problem: "Static displays are less engaging.",
    opportunity: "Introduce movement and deployable interactive elements.",
  },
  {
    title: "Flexibility",
    problem: "One fixed layout cannot fit different exhibition spaces.",
    opportunity: "Reconfigurable modular system.",
  },
];

const prototypes = [
  {
    n: "01",
    name: "180 GSM Paper",
    img: "/exhibition/quick_prototyping.png",
    body:
      "Rapid iteration with masking tape. Verified the mathematical curve and served as proof-of-concept.",
  },
  {
    n: "02",
    name: "3 mm Acrylic",
    img: "/exhibition/form_iteration.png",
    body:
      "Required a 3 mm offset at each joint to prevent rigid-edge collision during curling. Too heavy; adhesive joints insufficient — needed a stronger pivot.",
  },
  {
    n: "03",
    name: "3 mm Sunboard",
    img: "/exhibition/Case_study1.png",
    body:
      "Sufficient rigidity, lighter than acrylic, maintained the spiral geometry. Enabled a fluid ‘crawl’ motion — chosen as the most practical material for large-scale deployment.",
  },
];

const layouts = [
  "Compact triangular tower arrangement",
  "Linear wall arrangement",
  "Zig-zag exhibition path",
  "Semi-circular enclosure",
  "Hexagonal arrangement",
  "Multi-segment spatial configuration",
];


function ExhibitionPage() {
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
              <span>Exhibition Design</span>
              <span className="h-px w-6 bg-muted-foreground/60" />
              <span>2026</span>
            </div>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] text-balance">
              Display & Exhibition
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground text-pretty">
              A modular kinetic exhibition framework — deployable, reconfigurable,
              and inspired by the curling spiral and phyllotaxis.
            </p>
          </div>
        </section>

        {/* Cover */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl border border-border/40 shadow-glow">
            <img
              src="/exhibition/display.png"
              alt="Final deployed exhibition display"
              className="block w-full h-auto"
            />
          </div>
        </section>

        {/* Brief */}
        <section className="mx-auto max-w-6xl px-6 py-20 grid gap-12 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-6 text-sm">
            <Field label="Category" value="Exhibition / Kinetic Structure" />
            <Field label="Year" value="2026" />
            <Field label="Role" value="Concept, Prototyping, CAD, Fabrication" />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Tools & Materials</p>
              <ul className="flex flex-wrap gap-2">
                {["Adobe Illustrator", "Laser Cutting", "Model Making", "Sketching", "Exhibition Planning"].map((t) => (
                  <li key={t} className="rounded-full border border-border/60 px-3 py-1 text-xs">{t}</li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p className="text-foreground font-serif text-3xl leading-snug">
              Design a temporary modular kinetic structure that transitions from a compact
              transportable state into a functional shelter, relief unit, or public pavilion
              through mechanical deployment.
            </p>
            <p>
              The brief was adapted into a modular exhibition framework — integrating 2D and 3D
              display capabilities into a single deployable structure, supporting multiple
              configurations and a cohesive viewing journey where information and artifacts
              are seen together.
            </p>
          </div>
        </section>

        {/* Problems */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-8">Problems in Existing Displays</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border/40 p-6">
                <h3 className="font-serif text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground"><span className="text-foreground">Problem — </span>{p.problem}</p>
                <p className="mt-2 text-sm text-muted-foreground"><span className="text-foreground">Opportunity — </span>{p.opportunity}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study */}
        <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Case Study</p>
            <h2 className="mt-3 font-serif text-4xl">Curling Spiral Kinetic Sculpture</h2>
            <p className="mt-5 text-muted-foreground">
              Inspired by John Edmark's <em>Blooms</em> and the principle of <strong>phyllotaxis</strong> —
              the same mathematical logic seen in sunflowers and pinecones. Each shape is slightly
              larger than the previous, approximating the Golden Ratio (1.618), enabling smaller
              units to nest inside larger ones for compact storage and space-efficient deployment.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/40">
            <img src="/exhibition/Case_study1.png" alt="Curling spiral sculpture inspiration" className="block w-full h-auto" />
          </div>
        </section>

        {/* Prototyping */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-8">Prototyping</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {prototypes.map((p) => (
              <div key={p.n} className="rounded-2xl border border-border/40 p-5">
                <p className="text-xs font-mono text-muted-foreground">{p.n}</p>
                <h3 className="font-serif text-xl mt-1">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Form Iteration */}
        <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-10 md:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-2xl border border-border/40">
            <img src="/exhibition/form_iteration.png" alt="Form iteration tests" className="block w-full h-auto" />
          </div>
          <div>
            <h2 className="font-serif text-4xl">Form Iteration</h2>
            <p className="mt-5 text-muted-foreground">
              Tests confirmed the curling behaviour does not depend on the original spiral form.
              Constant <strong>taper angle</strong> and <strong>tension path</strong> are what matter —
              external shape can change freely. Uniform wedge-shaped modules, all the same size,
              force a consistent arc when tension is applied.
            </p>
          </div>
        </section>

        {/* High Fidelity */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-8">High-Fidelity MDF Prototype</h2>
          <div>
            <img src="/exhibition/high_fidelity_prototyping_1.png" alt="MDF prototype iterations" className="block w-full rounded-2xl border border-border/40" />
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-3 text-sm text-muted-foreground">
            <li className="rounded-xl border border-border/40 p-5"><span className="text-foreground block mb-1">Structural Integrity</span>Tension cable moves and locks heavier rigid materials; joints remain functional under load.</li>
            <li className="rounded-xl border border-border/40 p-5"><span className="text-foreground block mb-1">Edge Performance</span>Laser-cut edges reduced friction and improved sliding and locking action.</li>
            <li className="rounded-xl border border-border/40 p-5"><span className="text-foreground block mb-1">Clearance Validation</span>3 mm clearance remains sufficient for thicker, denser materials.</li>
          </ul>
        </section>

        {/* Fabrication Process */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-8">Fabrication Process</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <img src="/exhibition/process_extra.png" alt="Marking MDF panels and laser cutting hinge components" className="block w-full h-auto rounded-2xl border border-border/40 bg-background" />
            <img src="/exhibition/process_2.png" alt="Assembled MDF frame with integrated hinges in the workshop" className="block w-full h-auto rounded-2xl border border-border/40 bg-background object-cover" />
          </div>
          <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
            Panels were marked and routed from 9 mm MDF; interlocking hinge knuckles and grooves were laser-cut and integrated directly into the panel edges before workshop assembly.
          </p>
        </section>

        {/* Layouts */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-8">Layout Configurations</h2>
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="overflow-hidden rounded-2xl border border-border/40 bg-background p-4">
              <img src="/exhibition/layouting.png" alt="Plan view layouts — hexagonal enclosure, modular segments and visitor circulation" className="block w-full h-auto" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/40 bg-background p-4">
              <img src="/exhibition/layouting_2.png" alt="Spatial configurations — radial, linear, zig-zag and semi-circular arrangements" className="block w-full h-auto" />
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {layouts.map((l, i) => (
              <div key={l} className="rounded-xl border border-border/40 p-5">
                <p className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-foreground">{l}</p>
              </div>
            ))}
          </div>
        </section>



        {/* Structural Analysis */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl">Structural Analysis</h2>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground max-w-3xl">
            <li><span className="text-foreground">Structural Integrity — </span>Existing hinges work on 3 mm MDF but not on the 9 mm industrial panels needed for the final structure.</li>
            <li><span className="text-foreground">Aesthetic Disruption — </span>External hinges interrupt the clean visual language and distract from the spiral geometry.</li>
            <li><span className="text-foreground">Unintended Kineticism — </span>Prototype lacked a state-lock and could shift when touched — a safety concern at scale.</li>
            <li><span className="text-foreground">Rejected: Kerf Cutting — </span>9 mm MDF becomes brittle, cannot support a 5.7 ft structure, and offers no state-lock.</li>
          </ul>
        </section>

        {/* Joinery */}
        <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-10 md:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-2xl border border-border/40 bg-background">
            <img src="/exhibition/joinery.png" alt="Hinge knuckle, groove and interlocking knuckle hinge — dimensioned drawings and 3D detail" className="block w-full h-auto" />
          </div>
          <div>
            <h2 className="font-serif text-4xl">Custom Interlocking Hinge</h2>
            <p className="mt-5 text-muted-foreground">
              Modular interlocking knuckle and leaf, integrated directly into the panels.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <Spec k="Width" v="9.00 mm" />
              <Spec k="Bore Diameter" v="3.00 mm" />
              <Spec k="Height" v="15.78 mm" />
              <Spec k="Step Length" v="6.00 mm" />
            </dl>
          </div>
        </section>

        {/* CAD */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-8">CAD Development</h2>
          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            <div className="overflow-hidden rounded-2xl border border-border/40 bg-card flex items-center justify-center p-4">
              <img src="/exhibition/cad_model.png" alt="CAD model — folded, intermediate, fully open states" className="block w-full h-auto max-h-[420px] object-contain" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/40 bg-background flex items-center justify-center p-4">
              <img src="/exhibition/technical_drawing.png" alt="Technical drawing — hinge knuckle and panel dimensions" className="block w-full h-auto max-h-[420px] object-contain" />
            </div>
          </div>
        </section>

        {/* Ergonomics */}
        <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-serif text-4xl">Ergonomics</h2>
            <p className="mt-5 text-muted-foreground">
              Viewing comfort was evaluated for an upright user reading a vertical display.
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-4 text-sm">
              <Spec k="Display Height" v="1650 mm" />
              <Spec k="User Distance" v="1500 mm" />
              <Spec k="Viewing Angle" v="30°" />
            </dl>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/40 bg-background p-4">
            <img src="/exhibition/ergonomics.png" alt="Ergonomics study" className="block w-full h-auto" />
          </div>
        </section>

        {/* Fabrication / Final */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-serif text-4xl mb-8">Fabrication & Final Deployment</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <img src="/exhibition/display_1.png" alt="Assembled frame" className="block w-full rounded-2xl border border-border/40" />
            <img src="/exhibition/display.png" alt="Outdoor exhibition installation with posters" className="block w-full rounded-2xl border border-border/40" />
          </div>
          <p className="mt-8 max-w-3xl text-muted-foreground">
            The final outcome is a modular, collapsible, deployable exhibition system —
            capable of displaying 2D exhibition graphics and reconfigurable into multiple
            spatial layouts, developed through paper, acrylic, sunboard, MDF, CAD, technical
            drawing, ergonomic study, and full-scale fabrication.
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

function Spec({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-border/40 p-4">
      <dt className="text-xs tracking-widest uppercase text-muted-foreground">{k}</dt>
      <dd className="mt-1 font-mono text-foreground">{v}</dd>
    </div>
  );
}
