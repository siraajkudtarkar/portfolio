import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../SiteFooter";
import demoGif from "./Wildcat Demo.gif";
import wildcatHome from "./Wildcat Home.png";
import wildcatLeaderboard from "./Wildcat Leaderboard.png"
import wildcatMatchup from "./Wildcat Matchups.png";

export const metadata = {
  title: "Wildcat Fantasy Football | Siraaj Kudtarkar",
  description:
    "A React Native Expo fantasy football app that adds a bet-based multiplier system to weekly matchups, backed by a MongoDB API.",
};

const overview = [
  "Product — Built a mobile fantasy app with a bet-based multiplier system for weekly matchups.",
  "Architecture — Delivered React Native frontend with secure auth and MongoDB-backed APIs.",
];

const demoLinks = [
  // Update these as you want.
  { label: "View Repository", href: "https://github.com/siraajkudtarkar/wildcat" },
  // If you have a hosted API, TestFlight, or Expo publish link, add it here.
  { label: "View Demo Walkthrough", href: "https://drive.google.com/file/d/1QKyx9x4PvjuNYRLGT25ObCLNkpieI5Gk/view?usp=sharing" },
];

const highlightGroups = [
  {
    title: "Execution",
    items: [
      "Core app — Built fast matchup flows in React Native Expo.",
      "Gameplay UX — Added lineup control, standings, and multiplier-based scoring visibility.",
      "Testing — Created demo mode with seeded accounts and stable weekly test data.",
    ],
  },
  {
    title: "Backend Impact",
    items: [
      "Security — Implemented authentication with bcrypt + JWT.",
      "Scoring engine — Built multiplier logic and weekly result computation.",
      "Integrations — Pulled live NFL data via Sleeper API and exposed team/matchup endpoints.",
    ],
  },
];

const stackDev = [
  "React Native",
  "JavaScript",
  "Express",
  "Expo",
  "REST APIs",
  "MongoDB",
  "JWT Authentication",
  "bcrypt",
  "Jest",
];

const stackDesign = [
  "Mobile-first UX (weekly matchup flows)",
  "Demo mode and test data for grading",
  "Risk and reward gameplay design",
  "Iteration based on feature scope and feasibility",
];

const outcomes = [
  "Delivery — Shipped a playable fantasy experience with differentiated multiplier mechanics.",
  "Coverage — Completed auth, matchup flow, standings, scoring, and backend setup.",
  "Scalability — Established a base for multi-team league expansion.",
  "Technical growth — Strengthened full-stack integration across mobile client and API.",
];

const nextSteps = [
  "Data depth — Expand player and weekly coverage beyond current API source.",
  "League scale — Support more teams per league.",
  "Game strategy — Integrate betting-odds data for richer multiplier logic.",
  "Onboarding — Improve league creation and invite reliability.",
];

const renderImpactLine = (line: string) => {
  const [lead, ...rest] = line.split(" — ");
  return (
    <>
      <strong>{lead}</strong>
      {rest.length ? ` — ${rest.join(" — ")}` : ""}
    </>
  );
};

export default function WildcatPage() {
  return (
    <div className="bg-[radial-gradient(circle_at_12%_20%,rgba(182,115,70,0.12),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(217,176,140,0.18),transparent_28%),#f9f4ec] text-[#2e1c10] dark:bg-black dark:text-white">
      <main className="mx-auto max-w-4xl px-5 pb-20 pt-14 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {/* Optional: if you have a live demo link (Expo, TestFlight, hosted web demo), put it here */}
            <a
              className="inline-flex items-center gap-2 rounded-full border border-[#e6d8c8] bg-[#fffbf7] px-4 py-2 text-sm font-semibold text-[#5a4030] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:bg-[#1a120c] dark:text-[#e4d4c6] dark:hover:border-[#5a3e2c] dark:hover:bg-[#2a1b12]"
              href="https://expo.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* external-link icon */}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-none stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 3h7v7" />
                <path d="M10 14 21 3" />
                <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
              </svg>
              <span>View Live Demo</span>
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-full border border-[#e6d8c8] bg-[#fffbf7] px-4 py-2 text-sm font-semibold text-[#5a4030] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:bg-[#1a120c] dark:text-[#e4d4c6] dark:hover:border-[#5a3e2c] dark:hover:bg-[#2a1b12]"
              href="https://github.com/siraajkudtarkar/wildcat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.43-5.25 5.71.41.35.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              <span>View Repository</span>
            </a>
          </div>
        </div>

        <header className="mt-6 space-y-4 rounded-3xl border border-[#e6d8c8] bg-[#fffbf7]/95 p-8 shadow-lg shadow-[#2e1c10]/10 backdrop-blur dark:border-[#3b2a1f] dark:bg-black">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#5a4030] dark:text-white">
            <span className="rounded-full bg-[#f6ebdf] px-3 py-1 text-[#2e1c10] dark:bg-[#121212] dark:text-white">
              Mobile app
            </span>
            <span className="rounded-full bg-[#f6ebdf] px-3 py-1 text-[#2e1c10] dark:bg-[#121212] dark:text-white">
              Fantasy football
            </span>
            <span className="rounded-full bg-[#f6ebdf] px-3 py-1 text-[#2e1c10] dark:bg-[#121212] dark:text-white">
              Betting-style gameplay
            </span>
            <span className="rounded-full bg-[#f6ebdf] px-3 py-1 text-[#2e1c10] dark:bg-[#121212] dark:text-white">
              Full stack
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-[#7a5a42] dark:text-[#d7c4b6]">Project</p>
            <h1 className="text-3xl font-semibold">Wildcat Fantasy Football</h1>
            <p className="text-sm font-semibold text-[#7a5a42] dark:text-[#cbb8aa]">Sports &amp; Entertainment</p>
            <p className="text-base leading-7 text-[#5a4030] dark:text-white">
              A fantasy football mobile app for players who want a more unpredictable experience, with a bet-based
              multiplier system that adds risk and reward into weekly matchups.
            </p>

            {/* Optional: swap placeholders for real screenshots like MeTime */}
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex aspect-[9/19.5] items-center justify-center overflow-hidden rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] p-2 text-sm text-[#7a5a42] shadow-sm dark:border-[#3b2a1f] dark:bg-black dark:text-[#cbb8aa]">
                <Image src={wildcatHome} alt="Wildcat Fantasy Football Home Screen" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-[9/19.5] items-center justify-center overflow-hidden rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] p-2 text-sm text-[#7a5a42] shadow-sm dark:border-[#3b2a1f] dark:bg-black dark:text-[#cbb8aa]">
                <Image src={wildcatLeaderboard} alt="Wildcat Fantasy Football Leaderboard" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-[9/19.5] items-center justify-center overflow-hidden rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] p-2 text-sm text-[#7a5a42] shadow-sm dark:border-[#3b2a1f] dark:bg-black dark:text-[#cbb8aa]">
                <Image src={wildcatMatchup} alt="Wildcat Fantasy Football Matchup Screen" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        <section className="mt-6 space-y-4 rounded-3xl border border-[#e6d8c8] bg-[#fffdf9]/95 p-8 shadow-md shadow-[#2e1c10]/8 dark:border-[#3b2a1f] dark:bg-black">
          <h2 className="text-lg font-semibold">Overview</h2>
          <div className="space-y-3 text-sm leading-6 text-[#5a4030] dark:text-white">
            {overview.map((line) => (
              <p key={line}>{renderImpactLine(line)}</p>
            ))}
          </div>
        </section>

        <section className="mt-6 space-y-4 rounded-3xl border border-[#e6d8c8] bg-[#fffbf7]/95 p-8 shadow-inner shadow-[#2e1c10]/6 dark:border-[#3b2a1f] dark:bg-black">
          <h2 className="text-lg font-semibold">Stack / Tools</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7a5a42] dark:text-[#d7c4b6]">Development</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#5a4030] dark:text-white">
                {stackDev.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#f6ebdf] px-3 py-1 text-[#2e1c10] dark:bg-[#121212] dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7a5a42] dark:text-[#d7c4b6]">Design & Product</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#5a4030] dark:text-white">
                {stackDesign.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-[#f6ebdf] px-3 py-1 text-[#2e1c10] dark:bg-[#121212] dark:text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 space-y-4 rounded-3xl border border-[#e6d8c8] bg-[#fffbf7]/95 p-8 shadow-inner shadow-[#2e1c10]/6 dark:border-[#3b2a1f] dark:bg-black">
          <h2 className="text-lg font-semibold">Demo</h2>
          <div className="space-y-4">
            <div className="mx-auto flex aspect-[9/19.5] w-full max-w-[360px] items-center justify-center overflow-hidden rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] p-2 text-sm text-[#7a5a42] shadow-sm dark:border-[#3b2a1f] dark:bg-black dark:text-[#cbb8aa]">
              <Image src={demoGif} alt="Wildcat Fantasy Football demo" unoptimized className="h-full w-full object-cover" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {demoLinks.map((link) => (
                <a
                  key={link.label}
                  className="inline-flex items-center justify-between gap-2 rounded-2xl border border-[#e6d8c8] px-4 py-3 text-sm font-semibold text-[#5a4030] transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:text-white dark:hover:border-[#5a3e2c] dark:hover:bg-[#121212]"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span>{link.label}</span>
                  <span aria-hidden className="text-[#8a4a2b] dark:text-white">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 space-y-4 rounded-3xl border border-[#e6d8c8] bg-[#fffdf9]/95 p-8 shadow-md shadow-[#2e1c10]/8 dark:border-[#3b2a1f] dark:bg-black">
          <h2 className="text-lg font-semibold">Highlights (My Key Contributions)</h2>
          <div className="space-y-6">
            {highlightGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#f6ebdf] px-3 py-1 text-xs font-semibold text-[#2e1c10] dark:bg-[#121212] dark:text-white">
                  <span>⭐</span>
                  <span>{group.title}</span>
                </div>
                <ul className="space-y-2 text-sm leading-6 text-[#5a4030] dark:text-white">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b67346]" aria-hidden />
                      <span>{renderImpactLine(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 space-y-4 rounded-3xl border border-[#e6d8c8] bg-[#fffdf9]/95 p-8 shadow-md shadow-[#2e1c10]/8 dark:border-[#3b2a1f] dark:bg-black">
          <h2 className="text-lg font-semibold">Outcome</h2>
          <ul className="space-y-2 text-sm leading-6 text-[#5a4030] dark:text-white">
            {outcomes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b67346]" aria-hidden />
                <span>{renderImpactLine(item)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl bg-[#f6ebdf] px-4 py-4 text-[#2e1c10] dark:bg-[#121212] dark:text-white">
            <p className="text-xs uppercase tracking-[0.18em] text-[#7a5a42] dark:text-[#d7c4b6]">Next steps</p>
            <ul className="mt-2 space-y-2 text-sm leading-6">
              {nextSteps.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b67346]" aria-hidden />
                  <span>{renderImpactLine(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-[#9d5e34] px-5 py-2 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#7f4b28] hover:text-white hover:shadow-lg hover:shadow-[#2e1c10]/20 dark:bg-[#f7ede4] dark:text-[#2e1c10] dark:hover:bg-[#e6d8c8] dark:hover:text-[#2e1c10]"
            href="/#contact"
          >
            Contact me about this
          </Link>
        </div>

        <SiteFooter projectPage />
      </main>
    </div>
  );
}