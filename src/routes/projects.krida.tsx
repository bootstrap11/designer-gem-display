import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import screen09 from "@/assets/krida/krida-0009.jpg.asset.json";
import screen10 from "@/assets/krida/krida-0010.jpg.asset.json";
import screen11 from "@/assets/krida/krida-0011.jpg.asset.json";
import screen12 from "@/assets/krida/krida-0012.jpg.asset.json";
import screen13 from "@/assets/krida/krida-0013.jpg.asset.json";
import screen14 from "@/assets/krida/krida-0014.jpg.asset.json";
import screen15 from "@/assets/krida/krida-0015.jpg.asset.json";
import screen16 from "@/assets/krida/krida-0016.jpg.asset.json";
import screen17 from "@/assets/krida/krida-0017.jpg.asset.json";
import screen18 from "@/assets/krida/krida-0018.jpg.asset.json";
import screen19 from "@/assets/krida/krida-0019.jpg.asset.json";
import screen20 from "@/assets/krida/krida-0020.jpg.asset.json";
import screen21 from "@/assets/krida/krida-0021.jpg.asset.json";
import screen22 from "@/assets/krida/krida-0022.jpg.asset.json";
import screen23 from "@/assets/krida/krida-0023.jpg.asset.json";
import screen24 from "@/assets/krida/krida-0024.jpg.asset.json";

const appScreens = [
  { src: screen09.url, caption: "Splash" },
  { src: screen10.url, caption: "Sign Up" },
  { src: screen11.url, caption: "Login" },
  { src: screen12.url, caption: "Enter Details" },
  { src: screen13.url, caption: "Fill Credentials" },
  { src: screen14.url, caption: "Confirm Account" },
  { src: screen15.url, caption: "Home" },
  { src: screen16.url, caption: "Book a Venue" },
  { src: screen17.url, caption: "Venue Details" },
  { src: screen18.url, caption: "Booking Confirmation" },
  { src: screen19.url, caption: "Search & Filters" },
  { src: screen20.url, caption: "Select Date & Slot" },
  { src: screen21.url, caption: "Choose Courts" },
  { src: screen22.url, caption: "Cart & Summary" },
  { src: screen23.url, caption: "Payment Method" },
  { src: screen24.url, caption: "Payment Success" },
];

export const Route = createFileRoute("/projects/krida")({
  head: () => ({
    meta: [
      { title: "KRIDA — Book. Play. Connect." },
      {
        name: "description",
        content:
          "KRIDA is a sports ecosystem app combining venue booking, skill-based matchmaking, community, gear sharing, and rewards — designed to go beyond turf booking.",
      },
      { property: "og:title", content: "KRIDA — Book. Play. Connect." },
      {
        property: "og:description",
        content:
          "A UI/UX project reimagining the sports ecosystem — booking, matchmaking, community, and rewards in one platform.",
      },
    ],
  }),
  component: KridaPage,
});

const coverGradient =
  "linear-gradient(120deg, oklch(0.55 0.18 230) 0%, oklch(0.35 0.20 270) 50%, oklch(0.25 0.15 300) 100%)";

const challenges = [
  {
    title: "Finding Suitable Players",
    desc: "Users struggle to find players with similar skill levels, which affects match quality and overall enjoyment.",
  },
  {
    title: "Fragmented Communication",
    desc: "Players coordinate across WhatsApp, calls, and other external channels — creating a disconnected experience.",
  },
  {
    title: "Turf Availability Issues",
    desc: "Availability information is unclear and inconsistent, making bookings more difficult than they should be.",
  },
  {
    title: "Lack of Motivation",
    desc: "Existing apps do not encourage regular participation, habit formation, or continued engagement.",
  },
  {
    title: "Equipment Barriers",
    desc: "Forgotten or unavailable gear can prevent participation entirely.",
  },
  {
    title: "Trust Issues",
    desc: "There is no trust layer between players who do not already know each other.",
  },
];

const objectives = [
  { title: "Simplify Booking", desc: "Reserve turfs and courts with easier scheduling." },
  { title: "Complete Ecosystem", desc: "An all-in-one platform for sports enthusiasts — not a standalone booking service." },
  { title: "Skill Matchmaking", desc: "Pair users based on skill levels to improve playing experience." },
  { title: "Marketplace", desc: "A micro-economy around sports equipment through sharing and lending of gear." },
  { title: "Streaks & Rewards", desc: "Encourage users to play consistently through rewards and streak systems." },
];

const userGroups = [
  { title: "Regular Players", desc: "Weekly players who regularly organise or join games." },
  { title: "Casual Players", desc: "Play occasionally and want opportunities to join friendly matches." },
  { title: "Amateur Enthusiasts", desc: "Players seeking more competitive or higher-level games." },
  { title: "Clubs", desc: "Student groups, society clubs, and sports startups." },
  { title: "Owners", desc: "Turf owners and session organisers." },
];

const qualitative = [
  {
    insight: "Players struggle to coordinate people and timing.",
    quote: "Half our time goes in messaging and confirming who's coming.",
  },
  {
    insight: "Different skill levels reduce enjoyment.",
    quote: "It's boring when the other team is too strong.",
  },
  {
    insight: "Most players rely on WhatsApp and manual calls.",
    quote: "We don't use apps — too many steps, it's easier to call.",
  },
  {
    insight: "Frequent players want recognition.",
    quote: "It'd be fun to have badges or streaks for consistency.",
  },
];

const features = [
  {
    title: "Book Turfs & Courts",
    desc: "Reserve facilities filtered by location, sport, and time.",
    value: "Simplifies scheduling and payments.",
  },
  {
    title: "Player Matchmaking",
    desc: "Join existing games or host new ones — matched by skill level and distance.",
    value: "Helps users find suitable teammates.",
  },
  {
    title: "Skill-Based Ratings",
    desc: "Rate skill and sportsmanship after matches. Averages form each player's Game Level.",
    value: "Creates fairer, better-balanced competition.",
  },
  {
    title: "Community & Chat",
    desc: "Session-based chats, group creation, and player discussions in one place.",
    value: "Supports bonding and coordination.",
  },
  {
    title: "Gear Swap & Lending",
    desc: "Buy, sell, or lend sports equipment within the community.",
    value: "Reduces equipment-related barriers to play.",
  },
  {
    title: "Streaks & Rewards",
    desc: "Participation streaks, leaderboards, and badges for consistency.",
    value: "Encourages consistent participation.",
  },
  {
    title: "Smart Reminders",
    desc: "Notifications for upcoming matches, missing players, and gear requests.",
    value: "Keeps users prepared and engaged.",
  },
];

const homeSections = [
  { title: "My Bookings", desc: "List bookings, view details, cancel or modify, leave a review." },
  { title: "Play", desc: "Search sportmates, view venue details, book." },
  { title: "Book", desc: "Sort by sport or category, view venue, book." },
  { title: "Discover", desc: "Search, nearby events, upcoming events." },
];

function KridaPage() {
  const others = projects.filter((p) => p.slug !== "krida").slice(0, 3);

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
              <span>UI / UX</span>
              <span className="h-px w-6 bg-muted-foreground/60" />
              <span>2024</span>
            </div>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] text-balance">
              KRIDA
            </h1>
            <p className="mt-4 font-serif text-2xl md:text-3xl text-muted-foreground italic">
              Book. Play. Connect.
            </p>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground text-pretty">
              A sports ecosystem app that goes beyond turf booking — combining matchmaking, community, gear sharing, and rewards into one connected experience.
            </p>
          </div>
        </section>

        {/* Big cover */}
        <section className="mx-auto max-w-6xl px-6">
          <div
            className="aspect-[16/9] rounded-3xl border border-border/40 relative overflow-hidden shadow-glow"
            style={{ background: coverGradient }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            <div className="absolute inset-0 grid place-items-center">
              <p className="font-serif text-5xl md:text-7xl text-foreground/90 tracking-tight">
                KRIDA
              </p>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs tracking-widest uppercase text-foreground/80">
              <span>KRIDA</span>
              <span>2024</span>
            </div>
          </div>
        </section>

        {/* Intro grid */}
        <section className="mx-auto max-w-6xl px-6 py-24 grid gap-16 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-8 text-sm">
            <Field label="Role" value="Research, Wireframes, Visual Design" />
            <Field label="Year" value="2024" />
            <Field label="Category" value="UI / UX" />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Tools</p>
              <ul className="flex flex-wrap gap-2">
                {["Figma", "User Interviews", "Prototyping"].map((t) => (
                  <li key={t} className="rounded-full border border-border/60 px-3 py-1 text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p className="text-foreground font-serif text-3xl leading-snug">
              KRIDA is a sports-focused digital platform combining venue booking, player matchmaking, community interaction, equipment sharing, and rewards.
            </p>
            <p>
              The project addresses social and coordination challenges that occur before and after sports sessions — challenges that traditional turf-booking apps ignore.
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Problem Statement</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance max-w-4xl mb-14">
            Current sports apps solve reservations — not the ecosystem around them.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((c, i) => (
              <div key={c.title} className="rounded-2xl border border-border/40 bg-card/50 p-6">
                <p className="text-xs tracking-widest text-muted-foreground mb-3">0{i + 1}</p>
                <h3 className="font-serif text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border/40" />
        </div>

        {/* Objectives */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Project Objectives</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-14">
            Five goals that shape the platform
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((o) => (
              <div key={o.title} className="rounded-2xl border border-border/40 p-6">
                <h3 className="font-serif text-2xl">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Target Users */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-aurora pointer-events-none opacity-60" />
          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Target Users</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-14">
              Built for every kind of player
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {userGroups.map((u) => (
                <div
                  key={u.title}
                  className="rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="font-serif text-2xl">{u.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Research</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-14">
            Grounded in primary user research
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { stat: "8", label: "Open-ended user interviews" },
              { stat: "30+", label: "Survey responses from active players" },
              { stat: "18–35", label: "Age range of participants" },
            ].map((r) => (
              <div key={r.label} className="rounded-2xl border border-border/40 p-8">
                <p className="font-serif text-5xl md:text-6xl">{r.stat}</p>
                <p className="mt-4 text-sm text-muted-foreground">{r.label}</p>
              </div>
            ))}
          </div>

          {/* Quant findings */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border/40 bg-card/40 p-10">
              <p className="font-serif text-7xl md:text-8xl text-foreground">75%</p>
              <p className="mt-4 text-lg font-serif">Coordination Inefficiency</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Time-consuming coordination negatively affects player experience — organising sessions is one of the largest pain points.
              </p>
            </div>
            <div className="rounded-3xl border border-border/40 bg-card/40 p-10">
              <p className="font-serif text-7xl md:text-8xl text-foreground">60%</p>
              <p className="mt-4 text-lg font-serif">Skill Mismatch</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Users experience dissatisfaction because teams or opponents have significantly different skill levels — validating the need for matchmaking.
              </p>
            </div>
          </div>
        </section>

        {/* Qualitative Findings */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Qualitative Findings</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-14">
            In their own words
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {qualitative.map((q, i) => (
              <div key={i} className="rounded-2xl border border-border/40 p-8">
                <p className="text-sm text-muted-foreground mb-4">{q.insight}</p>
                <p className="font-serif text-2xl leading-snug text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border/40" />
        </div>

        {/* Core Features */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Core Features</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-14">
            Seven features, one ecosystem
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {features.map((f, i) => (
              <div key={f.title} className="rounded-2xl border border-border/40 bg-card/50 p-8">
                <p className="text-xs tracking-widest text-muted-foreground mb-3">0{i + 1}</p>
                <h3 className="font-serif text-2xl">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                <p className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">User Value</p>
                <p className="mt-1 text-sm text-foreground">{f.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Information Architecture */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-aurora pointer-events-none opacity-60" />
          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Information Architecture</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-14">
              From first launch to playing the game
            </h2>

            {/* Entry flow */}
            <div className="rounded-3xl border border-border/40 bg-card/50 p-8 md:p-10 backdrop-blur-sm mb-10">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Entry Flow</p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                {[
                  "App Start",
                  "Login / Register",
                  "User Details",
                  "Select Interests",
                  "Location",
                  "Home",
                ].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full border border-border/60 px-4 py-2 text-foreground">
                      {step}
                    </span>
                    {i < arr.length - 1 && <span className="text-muted-foreground">→</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Home sections */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {homeSections.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                  <h3 className="font-serif text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Across the app, users can search by interest, sport, and availability.
            </p>
          </div>
        </section>

        {/* Final Summary */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-3xl border border-border/40 bg-card/40 p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-aurora pointer-events-none opacity-30" />
            <div className="relative max-w-3xl">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Concept Summary</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight text-balance mb-6">
                A sports ecosystem — not just a booking app
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                KRIDA combines venue booking, player discovery, skill-based matchmaking, community communication, and equipment sharing — reinforced by ratings, streaks, rewards, and smart notifications.
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                Every proposed feature is mapped to a real research finding: coordination difficulty, skill mismatch, reliance on external communication tools, and the need for recognition among active players.
              </p>
            </div>
          </div>
        </section>

        {/* App Screens */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">App Screens</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance mb-14">
            A walk through the app
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {appScreens.map((s, i) => (
              <figure key={i} className="space-y-3">
                <div className="aspect-[9/19] rounded-3xl overflow-hidden border border-border/40 bg-card/40">
                  <img
                    src={s.src}
                    alt={`KRIDA app screen — ${s.caption}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  <span className="text-foreground/60">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s.caption}</span>
                </figcaption>
              </figure>
            ))}
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
