import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import boardImg from "@/assets/quest/board.jpeg";
import appImg from "@/assets/quest/app.jpeg";
import cardsImg from "@/assets/quest/cards.jpeg";
import cardsBacksImg from "@/assets/quest/cards-backs.jpeg";
import cardsChallengeImg from "@/assets/quest/cards-challenge.jpeg";
import kidsPlayingImg from "@/assets/quest/kids-playing.jpeg";
import zonesImg from "@/assets/quest/zones.jpeg";
import robotEmotionImg from "@/assets/quest/robot-emotion.jpeg";
import robotIdeationsImg from "@/assets/quest/robot-ideations.jpeg";
import robotViewImg from "@/assets/quest/robot-view.jpeg";

export const Route = createFileRoute("/projects/projects-quest")({
  head: () => ({
    meta: [
      { title: "Quest — Soft Skill Learning Board Game" },
      {
        name: "description",
        content:
          "Quest is an interactive learning system that helps children develop essential soft skills through a physical board game, companion robot, and mobile application.",
      },
      { property: "og:title", content: "Quest — Soft Skill Learning Board Game" },
      {
        property: "og:description",
        content:
          "An interactive board game system teaching children communication, empathy, patience, and emotional regulation through play.",
      },
    ],
  }),
  component: QuestPage,
});

const coverGradient =
  "linear-gradient(135deg, oklch(0.45 0.20 280) 0%, oklch(0.30 0.15 320) 60%, oklch(0.20 0.10 260) 100%)";

const skills = [
  { title: "Communication", desc: "Learning how to express thoughts, needs, and feelings effectively." },
  { title: "Patience", desc: "Understanding the importance of waiting and self-control." },
  { title: "Emotional Regulation", desc: "Recognising and managing emotions appropriately." },
  { title: "Impulse Control", desc: "Thinking before acting and making thoughtful decisions." },
  { title: "Turn Taking", desc: "Learning fairness, cooperation, and social participation." },
  { title: "Empathy", desc: "Understanding and respecting the feelings of others." },
  { title: "Responsibility", desc: "Taking ownership of actions and decisions." },
];

const components = [
  {
    title: "Interactive Board Game",
    desc: "The primary physical interface where players explore a world filled with familiar environments and social situations. The board encourages movement, exploration, and interaction between players.",
  },
  {
    title: "Companion Robot",
    desc: "A learning companion that narrates situations, responds to decisions, displays emotions, provides verbal feedback, and encourages reflection. It serves as an emotional mirror.",
  },
  {
    title: "Mobile Application",
    desc: "Supports gameplay by managing scenarios, adjusting difficulty levels, tracking progress, selecting themes, and customising emotional and behavioural goals.",
  },
];

const gameplaySteps = [
  { num: "01", title: "Roll and Move", desc: "The player rolls the dice and moves across the board." },
  {
    num: "02",
    title: "Discover a Situation",
    desc: "When landing on a situation tile, a real-life scenario appears — sharing toys, waiting in line, helping someone, following instructions, handling disappointment.",
  },
  {
    num: "03",
    title: "Make a Choice",
    desc: "The player selects how they would respond to the situation. Multiple response options are presented.",
  },
  {
    num: "04",
    title: "Hear the Outcome",
    desc: "The system narrates the consequence of the selected choice, explaining how the decision affects the situation and the people involved.",
  },
  {
    num: "05",
    title: "Robot Reacts",
    desc: "The companion robot immediately responds emotionally. Its facial expression, body language, and voice reflect the outcome — happy and proud for positive choices, concerned or reflective for negative ones.",
  },
  {
    num: "06",
    title: "Continue the Journey",
    desc: "The player continues exploring the board and encounters new situations throughout the game.",
  },
];

const zones = [
  { title: "School", desc: "Learning, cooperation, and classroom situations." },
  { title: "Home", desc: "Family interactions and daily responsibilities." },
  { title: "Playground", desc: "Friendships, sharing, teamwork, and conflict resolution." },
  { title: "Bus Stop", desc: "Patience, safety, and public behaviour." },
  { title: "Supermarket", desc: "Decision-making, responsibility, and social awareness." },
];

const cards = [
  { title: "Challenge Cards", desc: "Introduce tasks, mini-activities, or behavioural challenges." },
  { title: "Fortune Cards", desc: "Introduce unexpected events that influence gameplay." },
  { title: "Surprise Cards", desc: "Provide random interactions, rewards, or unexpected situations." },
];

const themes = ["Classic World", "Underwater World", "Outer Space"];

const learningFocus = ["Communication", "Patience", "Empathy", "Emotional Regulation", "Responsibility"];

function QuestPage() {
  const others = projects.filter((p) => p.slug !== "projects-quest").slice(0, 3);

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
              <span>Game Design</span>
              <span className="h-px w-6 bg-muted-foreground/60" />
              <span>2024</span>
            </div>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] text-balance">
              Quest
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground text-pretty">
              A soft skill learning board game system for children — combining physical play, a companion robot, and a mobile app to teach empathy, patience, and communication.
            </p>
          </div>
        </section>

        {/* Big cover */}
        <section className="mx-auto max-w-6xl px-6">
          <div
            className="aspect-[16/9] rounded-3xl border border-border/40 relative overflow-hidden shadow-glow"
            style={{ background: coverGradient }}
          >
            <img
              src={kidsPlayingImg}
              alt="Two children laughing while playing Quest at home with the board, robot and cards spread around"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs tracking-widest uppercase text-foreground/90">
              <span>Quest</span>
              <span>2024</span>
            </div>
          </div>
        </section>

        {/* Intro grid */}
        <section className="mx-auto max-w-6xl px-6 py-24 grid gap-16 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-8 text-sm">
            <Field label="Role" value="Concept, System Design, Prototyping" />
            <Field label="Year" value="2024" />
            <Field label="Category" value="Game Design" />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Tools</p>
              <ul className="flex flex-wrap gap-2">
                {["Illustrator", "Paper Prototyping", "User Testing"].map((t) => (
                  <li key={t} className="rounded-full border border-border/60 px-3 py-1 text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p className="text-foreground font-serif text-3xl leading-snug">
              An interactive learning system designed to help children develop essential soft skills through play — combining a physical board game, a companion robot, and a supporting mobile application.
            </p>
            <p>
              Quest transforms everyday situations into engaging learning experiences where children explore choices, understand consequences, and practice positive social behaviours in a safe, collaborative environment.
            </p>
          </div>
        </section>

        {/* Vision & Context */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Project Vision</p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Quest transforms everyday situations into engaging learning experiences where children can explore choices, understand consequences, and practice positive social behaviours. By combining physical play with digital feedback, it creates meaningful parent-child interaction while making learning enjoyable and relatable.
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Project Context</p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                A significant portion of a child&apos;s learning happens outside the classroom, especially at home. While parents play an important role, they often lack structured tools to teach behavioural and emotional skills effectively. Quest bridges the gap between formal education and home learning.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border/40" />
        </div>

        {/* Design Brief */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Design Brief</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance max-w-4xl">
            Design an interactive learning system that enables children to develop essential soft skills through playful, real-world situations.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              "Encourage meaningful parent-child interaction.",
              "Transform everyday experiences into engaging gameplay.",
              "Support behavioural learning through guided decision-making.",
              "Provide immediate and understandable feedback.",
              "Make learning collaborative, enjoyable, and relevant.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-aurora pointer-events-none opacity-60" />
          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Soft Skills Targeted</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-14">
              Seven essential skills for life
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="font-serif text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Components */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">System Components</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-14">
            Three connected pieces, one ecosystem
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {components.map((c, i) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border/40 p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 font-serif text-6xl text-foreground/5 group-hover:text-foreground/10 transition">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-2xl relative">{c.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed relative">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gameplay Flow */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Gameplay Flow</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-14">
            How a turn unfolds
          </h2>
          <div className="space-y-0">
            {gameplaySteps.map((step, i) => (
              <div key={step.num} className="flex gap-6 md:gap-10 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center text-sm font-mono text-muted-foreground group-hover:border-primary group-hover:text-primary transition">
                    {step.num}
                  </div>
                  {i < gameplaySteps.length - 1 && (
                    <div className="w-px flex-1 bg-border/40 my-2" />
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="font-serif text-2xl">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground max-w-xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Game Rules */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-3xl border border-border/40 bg-card/40 p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-aurora pointer-events-none opacity-30" />
            <div className="relative">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Game Rules</p>
              <div className="grid gap-10 md:grid-cols-3">
                <div>
                  <h3 className="font-serif text-2xl">Starting Locations</h3>
                  <p className="mt-3 text-muted-foreground">
                    Players can begin from either <em>School</em> or <em>Bus Stop</em>.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl">Exploration Requirement</h3>
                  <p className="mt-3 text-muted-foreground">
                    Before finishing, players must visit at least three different zones and experience situations within them.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl">End Locations</h3>
                  <p className="mt-3 text-muted-foreground">
                    The game concludes when a player reaches <em>Home</em> or <em>Supermarket</em>, providing an opportunity to reflect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Game World */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Game World</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-14">
            Familiar environments, real lessons
          </h2>
          <div className="rounded-3xl overflow-hidden border border-border/40 bg-card/40 mb-10">
            <img
              src={zonesImg}
              alt="Illustrated Quest world zones — school, home, playground, bus stop and supermarket"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((z) => (
              <div
                key={z.title}
                className="rounded-2xl border border-border/40 p-6 hover:bg-card/30 transition"
              >
                <h3 className="font-serif text-2xl">{z.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{z.desc}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-border/40 p-6 flex items-center justify-center">
              <p className="text-sm text-muted-foreground text-center">
                The board contains connected movement paths, multiple routes, coloured action tiles, interactive scenario locations, and recognisable landmarks.
              </p>
            </div>
          </div>
        </section>

        {/* Robot Design */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="h-px bg-border/40 mb-24" />
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="rounded-3xl overflow-hidden border border-border/40 bg-card/40 aspect-[4/3]">
              <img
                src={robotEmotionImg}
                alt="Companion robot beside the board, smiling and reacting to player decisions"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Companion Robot Design</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                A friend, not a teacher
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  The robot is intentionally designed to feel friendly, approachable, and playful rather than technological.
                </p>
                <ul className="space-y-2">
                  {[
                    "Soft and rounded form",
                    "Expressive digital face",
                    "Simple body language",
                    "Child-friendly appearance",
                    "Clear emotional expressions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="pt-2">
                  Its purpose is not to teach directly, but to guide, react, and support learning through emotional feedback.
                </p>
              </div>
            </div>
          </div>

          {/* Ideation + final views */}
          <div className="mt-16 grid gap-6 md:grid-cols-5">
            <div className="md:col-span-2 rounded-3xl overflow-hidden border border-border/40 bg-card/40 aspect-[3/4]">
              <img
                src={robotIdeationsImg}
                alt="Sketchbook page with dozens of early robot character ideations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-3 rounded-3xl overflow-hidden border border-border/40 bg-card/40 aspect-[4/3] md:aspect-auto">
              <img
                src={robotViewImg}
                alt="Three final robot pawns rendered in yellow, teal and coral colourways"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-2xl">
            From dozens of sketched character directions to a final form language — soft, rounded, expressive, and unmistakably a friend.
          </p>
        </section>

        {/* Card System */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="h-px bg-border/40 mb-24" />
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Card System</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-14">
            Dynamic experiences through chance
          </h2>
          <div className="grid gap-4 sm:grid-cols-3 mb-12">
            {[
              { src: cardsBacksImg, alt: "Exchange and Fortune card decks with patterned stamp-style backs" },
              { src: cardsChallengeImg, alt: "Challenge card deck with illustrated robot front" },
              { src: cardsImg, alt: "Three Quest cards fanned out — challenge, fortune and surprise" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden border border-border/40 bg-card/40 aspect-[4/3]">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border/40 bg-card/40 p-8"
              >
                <h3 className="font-serif text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground max-w-2xl">
            These cards create dynamic experiences and encourage repeated play, ensuring no two sessions feel exactly the same.
          </p>
        </section>

        {/* Mobile App */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="h-px bg-border/40 mb-24" />
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Mobile Application Features</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-14">
            Customise every session
          </h2>
          <div className="rounded-3xl overflow-hidden border border-border/40 bg-card/40 mb-12">
            <img
              src={appImg}
              alt="Three screens of the Quest companion app — calendar home, set emotions, and set environment"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-2xl mb-3">Difficulty Selection</h3>
              <p className="text-muted-foreground">
                Parents can adjust complexity according to the child&apos;s age and understanding.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-3">Theme Selection</h3>
              <p className="text-muted-foreground">
                Players can experience different themed environments such as:
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {themes.map((t) => (
                  <li key={t} className="rounded-full border border-border/60 px-3 py-1 text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-3">Learning Focus</h3>
              <p className="text-muted-foreground">
                Parents can choose specific behavioural goals for a session. The game then prioritises situations related to those skills.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {learningFocus.map((t) => (
                  <li key={t} className="rounded-full border border-border/60 px-3 py-1 text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Approach */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-aurora pointer-events-none opacity-50" />
          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Learning Approach</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-8">
              Experiential learning
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-12">
              Rather than telling children what is right or wrong, Quest encourages them to understand how choices affect themselves and others. Children learn by experiencing situations, making decisions, observing consequences, receiving emotional feedback, and reflecting on outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Experience", "Decide", "Observe", "Feel", "Reflect"].map((word) => (
                <span
                  key={word}
                  className="rounded-full border border-border/60 px-5 py-2 text-sm text-muted-foreground"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Final Experience */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-3xl border border-border/40 bg-card/40 p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-aurora pointer-events-none opacity-30" />
            <div className="relative max-w-3xl">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Final Experience</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight text-balance mb-6">
                A learning experience that extends beyond academics
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Quest transforms behavioural learning into an engaging family activity. Through physical play, guided scenarios, emotional feedback from the companion robot, and meaningful conversations, children develop important life skills in a safe, interactive, and enjoyable environment.
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                The result is socially aware, emotionally intelligent, and responsible individuals — equipped not just for school, but for life.
              </p>
            </div>
          </div>
        </section>

        {/* More work */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-4xl">More work</h2>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              All projects →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/40"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: p.cover }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[11px] tracking-widest uppercase text-muted-foreground">
                    {p.category}
                  </p>
                  <p className="mt-1 font-serif text-2xl">{p.title}</p>
                </div>
              </Link>
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
