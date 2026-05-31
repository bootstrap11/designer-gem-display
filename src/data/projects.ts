export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  year: string;
  role: string;
  tools: string[];
  /** masonry span: tall / wide / regular */
  span: "tall" | "wide" | "regular";
  /** abstract cover gradient */
  cover: string;
};

export const projects: Project[] = [
  {
    slug: "projects-quest",
    title: "Projects Quest",
    tagline: "Interactive social learning board game",
    description:
      "A physical board game that teaches children social behaviour through decisions, actions, and emotional feedback loops.",
    category: "Game Design",
    year: "2024",
    role: "Industrial Design, CAD, Rendering, Electronics & Coding",
    tools: ["SolidWorks", "KeyShot", "Arduino", "Coding"],
    span: "tall",
    cover:
      "linear-gradient(135deg, oklch(0.45 0.20 280) 0%, oklch(0.30 0.15 320) 60%, oklch(0.20 0.10 260) 100%)",
  },
  {
    slug: "krida",
    title: "KRIDA",
    tagline: "Book. Play. Connect.",
    description:
      "A UI/UX design project for a social sports booking and player matchmaking platform.",
    category: "UI / UX",
    year: "2024",
    role: "Research, Wireframes, Visual Design",
    tools: ["Figma", "User Interviews", "Prototyping"],
    span: "wide",
    cover:
      "linear-gradient(120deg, oklch(0.55 0.18 230) 0%, oklch(0.35 0.20 270) 50%, oklch(0.25 0.15 300) 100%)",
  },
  {
    slug: "wingo",
    title: "WINGO",
    tagline: "IoT bird deterrent system",
    description:
      "An IoT-based product system designed to deter pest birds in urban Indian society — quiet, humane, modular. SolidWorks CAD modelling, KeyShot renderings, Arduino prototyping and coding were all done hands-on.",
    category: "Product / IoT",
    year: "2025",
    role: "Industrial Design, CAD, Rendering, Electronics & Coding",
    tools: ["SolidWorks", "KeyShot", "Arduino", "Coding"],
    span: "regular",
    cover:
      "linear-gradient(160deg, oklch(0.40 0.16 260) 0%, oklch(0.25 0.10 290) 100%)",
  },
  {
    slug: "freezease",
    title: "Freezease",
    tagline: "Hands-free cryotherapy",
    description:
      "A hands-free cryotherapy product focused on comfort, ergonomics, and everyday usability.",
    category: "Product Design",
    year: "2023",
    role: "Ergonomics, CMF, Prototyping",
    tools: ["Fusion 360", "KeyShot", "Foam Modelling"],
    span: "regular",
    cover:
      "linear-gradient(135deg, oklch(0.60 0.14 240) 0%, oklch(0.30 0.18 280) 100%)",
  },
  {
    slug: "furniture",
    title: "Furniture Study",
    tagline: "Form, material, hands-on fabrication",
    description:
      "A furniture design project exploring form, material, and the resistance of real materials under the hand.",
    category: "Furniture",
    year: "2023",
    role: "Concept, Fabrication",
    tools: ["Wood, Metal", "Hand Tools", "Workshop"],
    span: "tall",
    cover:
      "linear-gradient(155deg, oklch(0.42 0.12 60) 0%, oklch(0.25 0.10 30) 60%, oklch(0.18 0.08 280) 100%)",
  },
  {
    slug: "mechanisms",
    title: "Simple Mechanical Devices",
    tagline: "Linkages in motion",
    description:
      "An exploration of simple mechanical systems and linkage-based motion — built, broken, and rebuilt.",
    category: "Mechanism",
    year: "2022",
    role: "Engineering Design",
    tools: ["Cardboard", "Wire", "Sketch"],
    span: "regular",
    cover:
      "linear-gradient(120deg, oklch(0.35 0.10 260) 0%, oklch(0.50 0.20 285) 100%)",
  },
  {
    slug: "ceramic-tic-tac-toe",
    title: "Ceramic Tic Tac Toe",
    tagline: "Material study in clay",
    description:
      "A material exploration project using ceramic to design a tactile board game with weight and ritual.",
    category: "Material Study",
    year: "2022",
    role: "Material, Form",
    tools: ["Ceramic", "Slip-casting", "Glazing"],
    span: "wide",
    cover:
      "linear-gradient(140deg, oklch(0.65 0.08 80) 0%, oklch(0.40 0.10 30) 50%, oklch(0.20 0.10 280) 100%)",
  },
  {
    slug: "halo-chair",
    title: "Halo Chair",
    tagline: "Material finishes — plastic",
    description:
      "A material-driven furniture concept exploring plastic and lightweight structures.",
    category: "Furniture",
    year: "2023",
    role: "CMF, Concept",
    tools: ["Plastic", "Rotomold Study", "Rhino"],
    span: "regular",
    cover:
      "linear-gradient(135deg, oklch(0.62 0.16 200) 0%, oklch(0.40 0.18 270) 100%)",
  },
  {
    slug: "rendering",
    title: "Rendering & Visualization",
    tagline: "3D + KeyShot explorations",
    description:
      "A collection of 3D modelling and KeyShot rendering explorations — light, material, and atmosphere.",
    category: "Visualization",
    year: "2023",
    role: "Modelling, Rendering",
    tools: ["Rhino", "KeyShot", "Photoshop"],
    span: "regular",
    cover:
      "linear-gradient(135deg, oklch(0.50 0.22 300) 0%, oklch(0.25 0.15 260) 100%)",
  },
  {
    slug: "paralympics-trophy",
    title: "Paralympics Trophy",
    tagline: "Form semantics study",
    description:
      "A form semantics study translating symbolism into a physical trophy design.",
    category: "Form Study",
    year: "2022",
    role: "Concept, Sculpting",
    tools: ["Clay", "Rhino", "KeyShot"],
    span: "tall",
    cover:
      "linear-gradient(160deg, oklch(0.55 0.18 90) 0%, oklch(0.35 0.12 60) 40%, oklch(0.18 0.08 280) 100%)",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
