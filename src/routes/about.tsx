import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shyam Hadani" },
      {
        name: "description",
        content:
          "Shyam Hadani — third-year B.Des student at Nirma University, Ahmedabad. Product, furniture and UI/UX design.",
      },
      { property: "og:title", content: "About — Shyam Hadani" },
      {
        property: "og:description",
        content: "Background, experience and tools.",
      },
    ],
  }),
  component: About,
});

const skills = [
  "Design Research",
  "Product Thinking",
  "Material Handling",
  "Prototyping",
  "CAD",
  "UI/UX Design",
];

const tools = ["Adobe Suite", "KeyShot", "Rhino", "Figma", "SolidWorks"];

const languages = ["English", "Hindi", "Gujarati"];

const experience = [
  {
    role: "Product Design Intern",
    org: "Makers Asylum, Goa",
    period: "May – June 2026",
  },
  {
    role: "PR Head",
    org: "REDO Design Fest, IDNU, Nirma University",
    period: "March 2026",
  },
  {
    role: "Furniture Design Intern",
    org: "Parin Furniture Limited, Rajkot",
    period: "May – June 2025",
  },
  {
    role: "Student Sports Coordinator (SAC)",
    org: "Institute of Design, Nirma University",
    period: "2024 – Present",
  },
  {
    role: "Logistics Head",
    org: "REDO Design Fest, IDNU, Nirma University",
    period: "March 2025",
  },
  {
    role: "Product Design Intern",
    org: "ASK – Art and Design Collective, Rajkot",
    period: "June 2024",
  },
  {
    role: "Content Intern",
    org: "Navjeevan Trust, Rajkot",
    period: "July 2023",
  },
];

function About() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative">
        <div className="absolute inset-0 bg-aurora pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-12 md:pt-32">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">About</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-balance">
            I design <em className="text-primary not-italic">things</em> that solve
            problems often unnoticed.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 grid gap-16 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
          <p>
            I'm Shyam Hadani, a Product and Interaction Designer with an interest in designing products and systems that solve meaningful, real-world problems.
          </p>
          <p>
            My work combines user research, material exploration, prototyping, and iterative development to transform ideas into functional experiences. I enjoy working across physical products, interaction design, furniture, and material-driven explorations, believing that the best solutions emerge through continuous experimentation and making.
          </p>
          <p>
            I believe design is a process of learning through observation, iteration, and hands-on exploration. Every project begins with understanding people and context, followed by sketching, testing, building, and refining until the solution feels intuitive and purposeful. Working across different scales and disciplines has helped me develop a flexible approach to problem-solving.
          </p>
          <p>
            Alongside design, I am actively exploring project management and the collaborative processes that bring ideas from concept to reality. I am interested in understanding how multidisciplinary teams work together, how projects are planned and executed, and how thoughtful coordination can elevate both the design process and the final outcome. My goal is to develop as a designer who can contribute creatively while also understanding the broader product development journey.
          </p>
        </div>
        <aside className="space-y-10 text-sm">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Skills
            </p>
            <ul className="space-y-1.5">
              {skills.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Software
            </p>
            <ul className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <li key={t} className="rounded-full border border-border/60 px-3 py-1 text-xs">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Languages
            </p>
            <p>{languages.join(" · ")}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Education
            </p>
            <p className="text-foreground">Bachelor of Design</p>
            <p>Nirma University, Ahmedabad</p>
            <p className="text-muted-foreground">2023 — 2027</p>
          </div>
        </aside>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-serif text-4xl md:text-5xl">Experience</h2>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            2023 → Now
          </p>
        </div>
        <ol className="divide-y divide-border/40 border-y border-border/40">
          {experience.map((e) => (
            <li
              key={e.role + e.period}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-3 md:gap-8 py-5 group"
            >
              <p className="text-foreground font-serif text-xl">{e.role}</p>
              <p className="text-muted-foreground">{e.org}</p>
              <p className="text-sm text-muted-foreground md:text-right">{e.period}</p>
            </li>
          ))}
        </ol>
      </section>

      <Footer />
    </div>
  );
}
