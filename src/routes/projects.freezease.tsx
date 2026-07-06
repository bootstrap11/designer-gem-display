import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import posterImg from "@/assets/freezease/Cold_Pack_Poster.png.asset.json";
import materialImg from "@/assets/freezease/Material_And_Sizing.png.asset.json";
import photo1 from "@/assets/freezease/Product_photography_1.png.asset.json";
import photo2 from "@/assets/freezease/Product_photography_2.png.asset.json";
import photo3 from "@/assets/freezease/Product_photography_3.png.asset.json";

export const Route = createFileRoute("/projects/freezease")({
  head: () => ({
    meta: [
      { title: "FREEZEASE — Hands-Free Modular Cryotherapy Sleeve" },
      {
        name: "description",
        content:
          "FREEZEASE is a hands-free modular cryotherapy sleeve designed for treating musculoskeletal injuries of the upper and lower extremities — ergonomic, wearable, adaptable.",
      },
      { property: "og:title", content: "FREEZEASE — Hands-Free Cryotherapy" },
      {
        property: "og:description",
        content:
          "A modular wearable cryotherapy sleeve for musculoskeletal recovery — comfort, mobility, and continuous cold application.",
      },
      { property: "og:image", content: photo1.url },
    ],
  }),
  component: FreezeasePage,
});

const problems = [
  { title: "Hands occupied", body: "Users must continuously hold the ice pack against the affected area." },
  { title: "Restricted movement", body: "Existing solutions limit mobility during therapy sessions." },
  { title: "Poor limb fit", body: "Products aren't optimized for upper and lower extremities." },
  { title: "Ineffective contact", body: "Conventional ice pack shapes don't deliver focused therapeutic contact." },
];

const trends = [
  "Increasing focus on self-care and wellness",
  "Technological improvements in therapy products",
  "Growing preference for traditional recovery methods",
  "Easy accessibility of reusable heating and cooling packs globally",
];

const conditions: [string, string][] = [
  ["Joint stiffness", "27.8%"],
  ["Muscle cramps", "26.6%"],
  ["Period cramps", "20.3%"],
  ["Sports injuries", "17.7%"],
  ["Cold-related discomfort", "7.6%"],
];

const bodyAreas: [string, string][] = [
  ["Back", "25.6%"],
  ["Neck", "18.9%"],
  ["Legs", "15.6%"],
  ["Fingers", "14.4%"],
  ["Arms", "11.1%"],
  ["Stomach", "7.8%"],
  ["Chest", "4.4%"],
  ["Shoulders", "2.2%"],
];

const duration: [string, string][] = [
  ["~30 minutes", "36.1%"],
  ["~15 minutes", "34.4%"],
  ["~45 minutes", "18.0%"],
  ["~60 minutes", "11.5%"],
];

const personas = [
  {
    n: "01",
    age: "76",
    gender: "Female",
    role: "Homemaker",
    location: "Vadodara",
    pains: [
      "Ice pack too cold for direct contact",
      "Movement restriction",
      "Continuous occupation of hands",
      "Back pain from holding the ice pack for extended periods",
    ],
  },
  {
    n: "02",
    age: "45",
    gender: "Male",
    role: "Businessman",
    location: "Ahmedabad",
    pains: [
      "Excessive cold on skin",
      "Restricted mobility",
      "Reduced therapeutic effectiveness",
      "Frequent need to refreeze the ice pack during treatment",
    ],
  },
];

const competitors = [
  {
    name: "Sunbeam Corporation",
    strengths: ["Adjustable heat modes", "Flexible body contact", "Weighted bead construction"],
    weakness: "Declining product durability",
  },
  {
    name: "Carex Health Brands",
    strengths: ["Flexible construction", "Natural grain filling", "Better conformity to body"],
    weakness: "Limited innovation",
  },
  {
    name: "Flamingo Health",
    strengths: ["Hook-loop fastening", "Leak-proof construction", "Long heat retention"],
    weakness: "Rigid, non-modular form",
  },
];

const evaluation: [string, string][] = [
  ["Hands-free capability", "50%"],
  ["Safety", "35%"],
  ["Ease of use", "10%"],
  ["Leakage prevention", "5%"],
];

const process = [
  "Problem Identification",
  "User Survey",
  "Task Analysis",
  "User Research",
  "User Personas",
  "Market Research",
  "Competitive Audit",
  "Concept Ideation",
  "Concept Evaluation",
  "3D Development",
  "Component Development",
  "Prototype Documentation",
];

const components: [string, string][] = [
  ["Purple fabric", '7" × 5.5"'],
  ["Mesh fabric", '7" × 5.5"'],
  ["Zipper", '5.2"'],
  ["Elastic", '3"'],
  ["Gel Pack", '1.9" × 2.4"'],
];

const contributions = [
  "Conducted user research and survey analysis",
  "Performed task analysis and user journey mapping",
  "Participated in market and competitor research",
  "Generated and evaluated concept directions",
  "Contributed to ergonomic wearable solution development",
  "Developed 3D visualizations of the selected concept",
  "Prepared component specifications and dimensional layouts",
  "Participated in prototype fabrication and documentation",
  "Assisted in final product presentation and photography",
];

function FreezeasePage() {
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
              <span>Product / Wearable Therapy</span>
              <span className="h-px w-6 bg-muted-foreground/60" />
              <span>2024</span>
              <span className="h-px w-6 bg-muted-foreground/60" />
              <span>Academic Project</span>
            </div>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] text-balance">
              FREEZEASE
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground text-pretty">
              Hands-free modular cryotherapy sleeve for musculoskeletal recovery — comfort,
              mobility, and continuous cold application on any limb.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Faculty Guides — Dr. Ranjit Konkar · Prof. Ajay Goyal
            </p>
          </div>
        </section>

        {/* Cover photo */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="aspect-[16/10] rounded-3xl border border-border/40 overflow-hidden shadow-glow">
            <img src={photo1.url} alt="FREEZEASE cryotherapy sleeve — worn on arm" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Meta */}
        <section className="mx-auto max-w-6xl px-6 py-20 grid gap-16 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-8 text-sm">
            <Field label="Role" value="Research, Ergonomics, CAD, Prototyping" />
            <Field label="Year" value="2024" />
            <Field label="Category" value="Product / Wearable Therapy" />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Tools</p>
              <ul className="flex flex-wrap gap-2">
                {[
                  "User Research",
                  "Task Analysis",
                  "SolidWorks",
                  "KeyShot",
                  "Sketching",
                  "Pattern Making",
                  "Stitching",
                  "Prototyping",
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
              Cold therapy shouldn't cost you your hands or your mobility.
            </p>
            <p>
              FREEZEASE is a hands-free cryotherapy solution designed for treating musculoskeletal
              injuries affecting the upper and lower extremities. The project addresses the
              inconvenience of conventional ice packs by enabling users to receive cold therapy
              while maintaining mobility — improving comfort, reducing dependency on holding the
              ice pack, and enhancing therapeutic efficiency through an ergonomic modular sleeve
              system.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Problem Space</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Where conventional cryotherapy falls short</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border/50 p-6 bg-card/40">
                <p className="font-serif text-2xl">{p.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why it matters */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Why It Matters</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">The wellness landscape today</h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {trends.map((t) => (
              <li key={t} className="rounded-2xl border border-border/50 p-5 text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Design brief */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Design Brief</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">A hands-free ergonomic device for every limb</h2>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Engineered for the upper and lower extremities to treat musculoskeletal injuries,
            muscle soreness, sprains and strains — allowing free movement, integrating into
            everyday activities, reducing inflammation, and improving recovery through continuous
            cold application.
          </p>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Research Process</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">A structured design methodology</h2>
          <ol className="mt-8 grid gap-3 md:grid-cols-3">
            {process.map((step, i) => (
              <li key={step} className="rounded-2xl border border-border/50 p-5 flex gap-4">
                <span className="font-mono text-xs text-muted-foreground pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Primary research */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Primary Research</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">A survey of 50 participants</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <StatBlock title="Conditions requiring therapy" rows={conditions} />
            <StatBlock title="Common application areas" rows={bodyAreas} />
            <StatBlock title="Average therapy duration" rows={duration} />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Participants belonged to five age groups. The majority were 19–24 (33.3%) and 37–52
            (33.3%), followed by above 52 (19%), 13–18 (9.5%) and 25–36 (4.8%) — indicating strong
            use among young adults and middle-aged users, while the elderly remain underrepresented.
          </p>
        </section>

        {/* Task analysis */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Task Analysis</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Mapping the conventional workflow</h2>
          <ol className="mt-8 space-y-3">
            {[
              "Freeze reusable ice pack or prepare crushed ice.",
              "Wrap ice pack in cloth or towel.",
              "Apply to affected area.",
              "Monitor skin condition after around 10 minutes.",
              "Repeat several times daily for 48–72 hours after injury.",
            ].map((s, i) => (
              <li key={s} className="rounded-2xl border border-border/50 p-5 flex gap-4">
                <span className="font-mono text-xs text-muted-foreground pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">{s}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Personas */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">User Personas</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Who we designed for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {personas.map((p) => (
              <div key={p.n} className="rounded-2xl border border-border/50 p-6">
                <p className="font-mono text-xs text-muted-foreground">PERSONA {p.n}</p>
                <p className="mt-2 font-serif text-2xl">{p.role}, {p.age}</p>
                <p className="text-sm text-muted-foreground">{p.gender} · {p.location}</p>
                <p className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">Pain Points</p>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
                  {p.pains.map((pain) => (
                    <li key={pain}>{pain}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Market research */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Market Research</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Opportunities & benchmarking</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/50 p-6">
              <p className="font-serif text-2xl">Opportunities</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
                <li>Sustainable materials</li>
                <li>Eco-friendly manufacturing</li>
                <li>Smart therapy products with IoT</li>
                <li>Expansion into healthcare applications</li>
                <li>Diversification into new markets</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border/50 p-6">
              <p className="font-serif text-2xl">Market Trends</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
                <li>Increasing dominance of electric heating wraps</li>
                <li>Growing popularity of microwaveable heat bags</li>
                <li>Rising sales of heated blankets and wraps</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {competitors.map((c) => (
              <div key={c.name} className="rounded-2xl border border-border/50 p-6">
                <p className="font-serif text-xl">{c.name}</p>
                <p className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">Strengths</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  {c.strengths.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">Weakness</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.weakness}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ideation & Evaluation */}
        <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Ideation</p>
            <h2 className="mt-3 font-serif text-4xl">Concepts explored</h2>
            <ul className="mt-6 space-y-2 text-muted-foreground list-disc list-inside">
              <li>Belt-based modular gel pack system</li>
              <li>Therapy jacket with internal gel pack slots</li>
              <li>Flexible wearable arm wrap</li>
              <li>Ergonomic strap-based body support</li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Concept Evaluation</p>
            <h2 className="mt-3 font-serif text-4xl">Weighted criteria</h2>
            <ul className="mt-6 space-y-2">
              {evaluation.map(([k, v]) => (
                <li key={k} className="flex justify-between border-b border-border/40 py-2">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-mono text-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Design Language */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Design Language</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Calm, healing, healthcare-oriented</h2>
          <p className="mt-6 max-w-3xl text-muted-foreground">
            The visual identity draws from a lavender colour palette, ice, crystal textures, soft
            textiles, and the sensory qualities of therapeutic healing, comfort and rejuvenation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Lavender", "Ice", "Crystal", "Soft Textiles", "Healing", "Comfort", "Rejuvenation"].map((tag) => (
              <span key={tag} className="rounded-full border border-border/60 px-4 py-1.5 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Poster + Material side-by-side */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Final Design</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">A modular wearable cryotherapy sleeve</h2>
          <p className="mt-6 max-w-3xl text-muted-foreground">
            The final solution is a cylindrical wearable sleeve with a zipper opening, multiple
            internal gel pack compartments, elastic integration, mesh and fabric construction, and
            expandable modular extensions — letting users position multiple gel packs around the
            affected body part while keeping both hands free.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border/40 overflow-hidden bg-black">
              <img src={posterImg.url} alt="FREEZEASE — adaptive therapy for every limb poster" className="w-full h-auto" />
            </div>
            <div className="rounded-3xl border border-border/40 overflow-hidden bg-black">
              <img src={materialImg.url} alt="About the FREEZEASE — materials and sizing" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Component Development</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Specifications (Extension 1)</h2>
          <div className="mt-8 rounded-2xl border border-border/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-card/60">
                <tr>
                  <th className="text-left px-6 py-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">Component</th>
                  <th className="text-left px-6 py-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">Specification</th>
                </tr>
              </thead>
              <tbody>
                {components.map(([k, v]) => (
                  <tr key={k} className="border-t border-border/40">
                    <td className="px-6 py-3">{k}</td>
                    <td className="px-6 py-3 text-muted-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Product photography */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Product Photography</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">In use, outdoors</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border/40 overflow-hidden">
              <img src={photo2.url} alt="FREEZEASE — worn on the knee" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl border border-border/40 overflow-hidden">
              <img src={photo3.url} alt="FREEZEASE — modular sleeve on the thigh" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Contributions */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">My Contributions</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">What I did on this project</h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {contributions.map((c) => (
              <li key={c} className="rounded-2xl border border-border/50 p-5 text-muted-foreground">
                {c}
              </li>
            ))}
          </ul>
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

function StatBlock({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <div className="rounded-2xl border border-border/50 p-6">
      <p className="font-serif text-xl">{title}</p>
      <ul className="mt-4 space-y-2">
        {rows.map(([k, v]) => (
          <li key={k} className="flex justify-between text-sm">
            <span className="text-muted-foreground">{k}</span>
            <span className="font-mono text-foreground">{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
