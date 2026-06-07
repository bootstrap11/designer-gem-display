import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/projects/wingo")({
  head: () => ({
    meta: [
      { title: "WINGO — IoT Bird Deterrent System" },
      {
        name: "description",
        content:
          "WINGO is an IoT-based bird deterrent system designed to humanely deter nuisance birds in urban Indian environments — built with ESP-32, microwave sensors, LED + acoustic deterrents and a companion mobile app.",
      },
      { property: "og:title", content: "WINGO — IoT Bird Deterrent System" },
      {
        property: "og:description",
        content:
          "Humane, intelligent, scalable IoT system that detects and deters specific nuisance birds in real time.",
      },
      { property: "og:image", content: "/wingo/Renders.png" },
    ],
  }),
  component: WingoPage,
});

const concerns = [
  {
    title: "Public Health Risk",
    body: "Bird droppings are linked to respiratory diseases such as Histoplasmosis and Cryptococcosis.",
  },
  {
    title: "Property Damage",
    body: "Acidic droppings corrode building materials, stain facades and damage infrastructure.",
  },
  {
    title: "Ineffective Existing Solutions",
    body: "Netting, spikes and chemical repellents are costly, inhumane and ineffective over the long term.",
  },
];

const briefPoints = [
  "Design an IoT-based product",
  "Deter pest birds in Indian urban settings",
  "Address overpopulation and health risks",
  "Provide a smart, scalable solution",
  "Provide a responsible and ethical solution",
];

const severity = {
  Severe: ["Noise", "Droppings", "Aggressive behavior"],
  Considerable: ["Overpopulation of certain species", "Mess with food and plants"],
  Moderate: [
    "Damage to property",
    "Health concerns",
    "Odor",
    "Blocked spaces",
    "Cultural / personal preference issues",
  ],
};

const areas = [
  {
    title: "Transport & Parking",
    items: ["Car parks", "Garages", "Bridges", "Flyovers"],
  },
  {
    title: "Food-Related Spaces",
    items: ["Restaurants with outdoor seating", "Cafés", "Markets", "Street food stalls"],
  },
  {
    title: "Public & Open Spaces",
    items: ["Parks", "Gardens", "Monuments", "Heritage buildings", "Schools", "Colleges"],
  },
  {
    title: "Commercial & Public Buildings",
    items: ["Office complexes", "Malls", "Hospitals", "Railway stations", "Bus stations", "Airports"],
  },
  {
    title: "Residential Areas",
    items: ["Balconies", "Terraces", "Window ledges", "AC units", "Rooftops", "Water tanks"],
  },
  {
    title: "Industrial & Utility",
    items: ["Factories", "Warehouses", "Solar panel installations", "Power stations", "Telephone towers"],
  },
];

const competitors = [
  {
    name: "Rentokil PCI",
    tech: "Bioacoustic systems, Electric tracks",
    features: "Pre-recorded distress calls, Predator calls, Bird Track electric strip",
    audience: "Commercial, Industrial, Airports",
  },
  {
    name: "Bird-X",
    tech: "Sonic / Ultrasonic devices",
    features: "BirdXPeller Pro, Audible distress calls, Ultrasonic units",
    audience: "Industrial, Commercial, DIY users",
  },
  {
    name: "Shyam Innovations",
    tech: "Ultrasonic devices",
    features: "Solar-powered & electric repellents",
    audience: "Residential, Small commercial, Agricultural",
  },
  {
    name: "Bird Control Group (NL)",
    tech: "Automated laser systems",
    features: "AVIX Autonomic moving laser beams",
    audience: "Airports, High-value agriculture, Industrial",
  },
];

const personas = [
  {
    name: "Anjali Mehta",
    age: 42,
    location: "Mumbai, India",
    occupation: "Homemaker — apartment with balcony",
    pains: [
      "Balcony dirty from droppings & feathers",
      "Daily cleaning headache",
      "Nets block airflow and darken the balcony",
    ],
    prefs: [
      "Silent / subtle deterrent",
      "Non-disturbing to neighbours",
      "Budget ₹2,000–₹3,000",
      "Removable — may shift houses",
    ],
  },
  {
    name: "Rajiv Shah",
    age: 29,
    location: "Ahmedabad, India",
    occupation: "IT Professional — works from home",
    pains: [
      "Pigeons on window sills",
      "Cooing disturbs work calls",
      "Droppings prevent opening windows",
    ],
    prefs: [
      "Mobile app control",
      "Phone integration",
      "Light deterrents acceptable if not too bright",
      "Compact, easy window install",
    ],
  },
];

function WingoPage() {
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
              <span>Product / IoT</span>
              <span className="h-px w-6 bg-muted-foreground/60" />
              <span>2025</span>
            </div>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] text-balance">
              WINGO
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground text-pretty">
              An IoT-based bird deterrent device — humane, intelligent and scalable, designed for urban Indian environments and supported by a companion mobile app.
            </p>
          </div>
        </section>

        {/* Cover image */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl overflow-hidden border border-border/40 bg-muted">
            <img
              src="/wingo/Renders.png"
              alt="WINGO product renders"
              className="w-full h-auto block"
            />
          </div>
        </section>

        {/* Mission */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Mission</p>
          <p className="mt-4 font-serif text-3xl md:text-4xl leading-snug max-w-4xl text-balance">
            To design and build a humane, intelligent, and scalable IoT system that automatically detects and deters specific nuisance birds in real time — without causing harm.
          </p>
        </section>

        {/* Problem identification */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-3">The Problem</h2>
          <p className="text-muted-foreground max-w-3xl">
            Overpopulation of pest birds — especially pigeons — is a growing challenge in urban India. Three major concerns drive the project:
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {concerns.map((c) => (
              <div key={c.title} className="rounded-2xl border border-border/40 p-6 bg-card">
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Concern</p>
                <h3 className="font-serif text-2xl mt-2">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl overflow-hidden border border-border/40 bg-muted">
              <img src="/wingo/Problems.png" alt="Bird food and pigeons" className="w-full h-auto block" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/40 bg-muted">
              <img src="/wingo/Problems_2.png" alt="Pigeon damage on property" className="w-full h-auto block" />
            </div>
          </div>
        </section>

        {/* Design Brief */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-6">Design Brief</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {briefPoints.map((p, i) => (
              <div key={p} className="flex items-start gap-4 rounded-xl border border-border/40 p-5">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-foreground">{p}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Problem mapping / severity */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-6">Problem Mapping</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {Object.entries(severity).map(([level, items]) => (
              <div key={level} className="rounded-2xl border border-border/40 p-6">
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Severity</p>
                <h3 className="font-serif text-2xl mt-2">{level}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {items.map((it) => (
                    <li key={it}>— {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Areas affected */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-6">Areas Affected</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <div key={a.title} className="rounded-2xl border border-border/40 p-6">
                <h3 className="font-serif text-xl">{a.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {a.items.map((it) => (
                    <li key={it}>— {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Market research */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-3">Market Research</h2>
          <p className="text-muted-foreground max-w-3xl">
            Surveyed existing bird deterrents — physical barriers, sound-based, visual, and chemical treatments — to identify gaps and opportunities for an IoT-driven approach.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden border border-border/40 bg-muted">
            <img src="/wingo/Market_esearch.png" alt="Market research overview" className="w-full h-auto block" />
          </div>
        </section>

        {/* Competitor analysis */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-6">Competitor Analysis</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {competitors.map((c) => (
              <div key={c.name} className="rounded-2xl border border-border/40 p-6">
                <h3 className="font-serif text-2xl">{c.name}</h3>
                <p className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">Technology</p>
                <p className="text-sm">{c.tech}</p>
                <p className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">Features</p>
                <p className="text-sm">{c.features}</p>
                <p className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">Target Audience</p>
                <p className="text-sm">{c.audience}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Indirect competitors include traditional service providers (HiCare, local netting installers, Pigeon Control India, general pest control). Low-cost DIY alternatives include reflective tapes, scare-eye balloons, repellent gels, and plastic owl decoys.
          </p>
        </section>

        {/* Personas */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-6">User Research</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {personas.map((p) => (
              <div key={p.name} className="rounded-2xl border border-border/40 p-6">
                <h3 className="font-serif text-2xl">{p.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {p.age} · {p.location} · {p.occupation}
                </p>
                <p className="mt-4 text-xs tracking-[0.25em] uppercase text-muted-foreground">Pain Points</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {p.pains.map((x) => <li key={x}>— {x}</li>)}
                </ul>
                <p className="mt-4 text-xs tracking-[0.25em] uppercase text-muted-foreground">Preferences</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {p.prefs.map((x) => <li key={x}>— {x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Damage & risk */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-6">Damage & Risk Analysis</h2>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-border/40 p-6">
              <h3 className="font-serif text-xl">Health Risks</h3>
              <p className="mt-2 text-sm text-muted-foreground">Airborne pathogens from dried droppings.</p>
              <ul className="mt-3 space-y-1 text-sm">
                <li>— Cryptococcosis</li>
                <li>— Histoplasmosis</li>
                <li>— Psittacosis</li>
                <li>— Salmonellosis</li>
                <li>— E. coli related illness</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border/40 p-6">
              <h3 className="font-serif text-xl">Infrastructure Damage</h3>
              <ul className="mt-3 space-y-1 text-sm">
                <li>— Corrodes metal</li>
                <li>— Corrodes stone</li>
                <li>— Damages paint</li>
                <li>— Accelerates wear of buildings & heritage structures</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border/40 p-6">
              <h3 className="font-serif text-xl">Nuisance Effects</h3>
              <ul className="mt-3 space-y-1 text-sm">
                <li>— Dirty sidewalks, cars, buildings</li>
                <li>— Clogged drains and vents</li>
                <li>— Structural problems</li>
                <li>— Ticks, mites, home infestations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Form development */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-3">Form Development</h2>
          <p className="text-muted-foreground max-w-3xl">
            Hand-sketched concepts explored compact electronic forms — angular, geometric bodies with multiple mounting possibilities and integrated sensing/deterrent areas.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden border border-border/40 bg-muted">
            <img src="/wingo/Sketces.png" alt="Form sketches" className="w-full h-auto block" />
          </div>
        </section>

        {/* Digital exploration */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-6">Digital Exploration & Evaluation</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border/40 p-6">
              <h3 className="font-serif text-xl">Concept 1</h3>
              <p className="mt-2 text-xs tracking-[0.25em] uppercase text-muted-foreground">Advantages</p>
              <p className="text-sm">Covered all motion sensor angles. Allowed multiple hanging sides.</p>
              <p className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">Issue</p>
              <p className="text-sm">Pigeons could still sit on the product unnoticed.</p>
            </div>
            <div className="rounded-2xl border border-border/40 p-6">
              <h3 className="font-serif text-xl">Concept 2</h3>
              <p className="mt-2 text-xs tracking-[0.25em] uppercase text-muted-foreground">Advantages</p>
              <p className="text-sm">Different angles of coverage.</p>
              <p className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">Issue</p>
              <p className="text-sm">Empty central area allowed pigeons to fly through and sit.</p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl overflow-hidden border border-border/40 bg-muted">
            <img src="/wingo/Form_iteration.png" alt="Form iteration renders" className="w-full h-auto block" />
          </div>
        </section>

        {/* Final renders */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-3">Final Product</h2>
          <p className="text-muted-foreground max-w-3xl">
            A geometric, diamond-profile body with angled symmetrical surfaces, a central circular grille, rectangular sensor windows, indicator lights and mounting-oriented geometry.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden border border-border/40 bg-muted">
            <img src="/wingo/Renders.png" alt="Final WINGO renders" className="w-full h-auto block" />
          </div>
        </section>

        {/* Technical sketch */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-3">Technical Drawing</h2>
          <p className="text-muted-foreground max-w-3xl">
            Symmetrical pyramidal body with a 156 × 156 mm footprint and 73 mm height — rounded edges, tapered top, central grille and side openings for sensors.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden border border-border/40 bg-muted">
            <img src="/wingo/Technical_sketch.png" alt="Technical drawing" className="w-full h-auto block" />
          </div>
        </section>

        {/* Circuit diagram */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-3">Electronics & Circuit</h2>
          <p className="text-muted-foreground max-w-3xl">
            ESP-32 driven system with USB-C charging, 2S Li-ion pack, dual microwave sensors, audio module with speaker, and high-power 3 W red/blue LEDs gated through N-channel MOSFETs.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden border border-border/40 bg-card p-4">
            <img src="/wingo/Circuit_Diagram.png" alt="Circuit diagram" className="w-full h-auto block" />
          </div>
        </section>

        {/* Mobile App */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-serif text-4xl mb-3">Companion Mobile App</h2>
          <p className="text-muted-foreground max-w-3xl">
            Pairing, dashboard, alerts, system controls — LED brightness & flash pattern, audio volume, sensitivity, and account settings — all from the phone.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden border border-border/40 bg-muted">
            <img src="/wingo/app.png" alt="Wingo mobile app screens" className="w-full h-auto block" />
          </div>
        </section>

        {/* Summary */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-serif text-4xl mb-6">Final Project Summary</h2>
          <div className="rounded-2xl border border-border/40 p-8 bg-card">
            <ul className="space-y-2 text-muted-foreground">
              <li>— An IoT-based bird deterrent device.</li>
              <li>— Focused primarily on nuisance birds such as pigeons.</li>
              <li>— Designed for urban Indian environments.</li>
              <li>— Humane and non-harmful approach.</li>
              <li>— Supported by a smartphone application.</li>
              <li>— Built after studying physical, electronic and DIY bird-control methods.</li>
              <li>— Developed through sketches, digital form evaluation, technical detailing and UI design.</li>
              <li>— Targeted at residential, commercial, public, industrial and infrastructure environments.</li>
            </ul>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}
