import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Studio" },
      {
        name: "description",
        content:
          "A product designer working across physical product, IoT, UI/UX and material studies.",
      },
      { property: "og:title", content: "About — Studio" },
      {
        property: "og:description",
        content: "Background, approach and tools.",
      },
    ],
  }),
  component: About,
});

const capabilities = [
  "Product & Industrial Design",
  "UI / UX Design",
  "IoT Systems",
  "Material Studies",
  "Form & Semantics",
  "Rendering & Visualization",
];

const tools = ["Figma", "Rhino", "Fusion 360", "SolidWorks", "KeyShot", "Illustrator", "Arduino", "Workshop"];

function About() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative">
        <div className="absolute inset-0 bg-aurora pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-12 md:pt-32">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">About</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-balance">
            I design <em className="text-primary not-italic">things</em> with weight,
            warmth and a clear reason to exist.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 grid gap-16 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
          <p>
            My practice moves between physical product, IoT and digital
            interfaces — the through-line is care for the human at the other
            end. I sketch a lot, prototype faster than I'd like to admit, and
            think with my hands.
          </p>
          <p>
            Recent work spans a humane bird-deterrent system for Indian
            cities, a cryotherapy product designed for one-handed use, a
            social sports platform, and a children's board game about
            empathy. Different mediums, the same question — does it actually
            help?
          </p>
          <p>
            I studied industrial design, kept the workshop habits, and
            collect old objects to understand why they survived.
          </p>
        </div>
        <aside className="space-y-10 text-sm">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Practice
            </p>
            <ul className="space-y-1.5">
              {capabilities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Tools</p>
            <ul className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <li key={t} className="rounded-full border border-border/60 px-3 py-1 text-xs">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  );
}
