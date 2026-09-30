import Image from "next/image";
import Link from "next/link";
import IPhoneFrame from "../IPhoneFrame";
import ProjectNav from "../ProjectNav";
import SiteFooter from "../SiteFooter";
import VimeoEmbed from "../VimeoEmbed";
import wildcatHome from "./Wildcat Home.png";
import wildcatLeaderboard from "./Wildcat Leaderboard.png"
import wildcatMatchup from "./Wildcat Matchups.png";

export const metadata = {
  title: "Wildcat Fantasy Football | Siraaj Kudtarkar",
  description:
    "A React Native Expo fantasy football app that adds a bet-based multiplier system to weekly matchups, backed by a MongoDB API.",
};

const role = "Full-Stack Mobile Developer";
const timeline = "October - December 2025 (SI679/SI669 Course Project)";

const demoLinks = [
  { label: "View Repository", href: "https://github.com/siraajkudtarkar/wildcat" },
  { label: "View Demo Walkthrough", href: "https://drive.google.com/file/d/1QKyx9x4PvjuNYRLGT25ObCLNkpieI5Gk/view?usp=sharing" },
];

const homepagePills = ["React Native", "JavaScript", "Express", "Expo", "MongoDB", "Node", "REST APIs", "Frontend Development", "Full-Stack Development"];

const stackDev = [...homepagePills];

const stackDesign = [
  "Mobile-first UX (weekly matchup flows)",
  "Demo mode and test data for grading",
  "Risk and reward gameplay design",
];

const wildcatDemoVimeoUrl = "https://player.vimeo.com/video/1167948725?autoplay=1&muted=1&loop=1&autopause=0&background=1&title=0&byline=0&portrait=0&dnt=1";

export default function WildcatPage() {
  return (
    <div className="bg-[radial-gradient(circle_at_12%_20%,rgba(182,115,70,0.12),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(217,176,140,0.18),transparent_28%),#f5ede1] text-[#251409] dark:bg-[#221810] dark:text-white">
      <main className="flex min-h-screen flex-col gap-8 px-5 pb-24 pt-6 sm:px-8 sm:pt-8 lg:px-16">
        <ProjectNav />
        {/* <div className="flex flex-wrap items-center justify-between gap-3"> */}
          {/* <div className="flex flex-wrap items-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-4 py-2 text-sm font-semibold text-[#4a3222] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#e2cfbb] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
              href="https://github.com/siraajkudtarkar/wildcat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.43-5.25 5.71.41.35.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              <span>View Repository</span>
            </a>
          </div> */}
        {/* </div> */}

        <section className="p-8">
          <p className="text-2xl text-center font-bold leading-tight text-[#251409] sm:text-3xl dark:text-white">
            How can fantasy football feel less predictable and reward better strategy each week?
          </p>
        </section>

        <header className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-lg shadow-[#251409]/10 backdrop-blur dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <div className="space-y-3">
            {/* <p className="text-sm uppercase tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Project</p> */}
            <h1 className="text-3xl font-semibold">Wildcat Fantasy Football</h1>
            <p className="text-sm font-semibold text-[#664834] dark:text-[#c2a88f]">Sports &amp; Entertainment</p>
            <p className="text-base leading-7 text-[#4a3222] dark:text-white">
             A fantasy football mobile app for players who want a less predictable experience, with a bet-based multiplier system that brings real risk and reward to weekly matchups. I built Wildcat on my own for players who think standard fantasy is predictable, from a React Native frontend to secure auth and MongoDB backed APIs.


            </p>

            {/* Optional: swap placeholders for real screenshots like MeTime */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              <div className="flex items-center justify-center py-2 sm:py-0">
                <IPhoneFrame className="max-w-[196px] sm:max-w-[190px]">
                  <Image src={wildcatHome} alt="Wildcat Fantasy Football Home Screen" className="h-full w-full object-contain" />
                </IPhoneFrame>
              </div>
              <div className="flex items-center justify-center py-2 sm:py-0">
                <IPhoneFrame className="max-w-[196px] sm:max-w-[190px]">
                  <Image src={wildcatLeaderboard} alt="Wildcat Fantasy Football Leaderboard" className="h-full w-full object-contain" />
                </IPhoneFrame>
              </div>
              <div className="flex items-center justify-center py-2 sm:py-0">
                <IPhoneFrame className="max-w-[196px] sm:max-w-[190px]">
                  <Image src={wildcatMatchup} alt="Wildcat Fantasy Football Matchup Screen" className="h-full w-full object-contain" />
                </IPhoneFrame>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-2 sm:grid-cols-2">
        <section className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-md shadow-[#251409]/8 dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <h2 className="text-lg font-semibold">Role</h2>
              <p className="mt-1 text-sm font-medium text-[#251409] dark:text-white">{role}</p>
        </section>

        <section className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-md shadow-[#251409]/8 dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <h2 className="text-lg font-semibold">Timeline</h2>
          <p className="mt-1 text-sm font-medium text-[#251409] dark:text-white">{timeline}</p>
        </section>
        </div>

        <section className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-inner shadow-[#251409]/6 dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <h2 className="text-lg font-semibold">Stack & Methods</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Development</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#4a3222] dark:text-white">
                {stackDev.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#f0e4d1] px-3 py-1 text-[#251409] dark:bg-[#2d2116] dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase font-semibold tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Design & Research</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#4a3222] dark:text-white">
                {stackDesign.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-[#f0e4d1] px-3 py-1 text-[#251409] dark:bg-[#2d2116] dark:text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-inner shadow-[#251409]/6 dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <h2 className="text-lg font-semibold">Demo</h2>
          <div className="space-y-4">
            <div className="mx-auto flex items-center justify-center py-3 sm:py-0">
              <IPhoneFrame className="max-w-[300px]">
                <VimeoEmbed
                  src={wildcatDemoVimeoUrl}
                  title="Wildcat Fantasy Football demo preview"
                  className="h-full w-full"
                  iframeClassName="h-full w-full"
                  cover
                />
              </IPhoneFrame>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {demoLinks.map((link) => (
                <a
                  key={link.label}
                  className="inline-flex items-center justify-between gap-2 rounded-2xl border border-[#dfceb6] px-4 py-3 text-sm font-semibold text-[#4a3222] transition hover:-translate-y-0.5 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:text-white dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span>{link.label}</span>
                  <span aria-hidden className="text-[#7a3f22] dark:text-white">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-md shadow-[#251409]/8 dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <h2 className="text-lg font-semibold">My Work</h2>
          <div className="space-y-4 text-base leading-7 text-[#4a3222] dark:text-white">
            <p>
              Fantasy football players on apps like ESPN and Sleeper love the competition, but many find the game becomes repetitive over time. I asked how fantasy football could feel less predictable and reward better strategy each week, and designed Wildcat for players who want to add creativity, strategy, and risk-taking to their weekly matchups while keeping the core structure of fantasy football. Every user drafts a six-player roster, starts three players each week, and before each matchup places "More," "Less," or "None" bets on their players' performances. Each bet attaches a multiplier to that player's fantasy points, boosting the score if the prediction is right and penalizing it if it is wrong, which makes fantasy decisions meaningfully higher stakes.
            </p>
            <p>
              I started by studying two existing apps. Sleeper gave me a model for clean navigation between Team, Matchup, and League tabs, and its "Picks" feature directly inspired the multiplier system, including how successful and unsuccessful bets are shown. SquadBlitz gave me a leaderboard structure for standings and an easy way to rearrange a lineup, which I extended with a visible bench section so users can clearly tell starters from benched players. From there, I sketched the three core screens: a Matchup screen comparing both teams' lineups, scores, and active multipliers side by side, a Team screen for choosing starters and placing bets, and a Standings screen that ranks teams by win-loss record, with total points as the tiebreaker. I then took those sketches into Figma mockups with a consistent bottom navigation bar for Matchup, Team, Standings, and Settings. On the Matchup mockup, each player row shows the math behind the score, such as 15.50 points times a 4.00 multiplier for 62 points, so users can see exactly how their bets paid off or backfired, with starters on top and the bench listed below. The Standings mockup ranks each team with its total points and win-loss record, and simple Login and Sign Up screens set up the authentication flow.
            </p>
            <p>
              The design changed as I scoped it. My original proposal included league variants like all-quarterback and all-tight-end leagues, with rosters of three to five players. In my project plan, I narrowed the focus to a six-player roster and turned league variants, live score updates, bet history, and other extras into nice-to-have features, so I could deliver the core betting experience first. Because the project combined two courses, I built both halves: the React Native and Expo mobile app for SI 669, and a MongoDB backend with authentication for SI 679.
            </p>
            <p>
              On the mobile side, I built fast matchup flows in React Native Expo and added lineup control, standings, and multiplier based scoring visibility, folding team management directly into the Matchup screen. On the backend, I modeled leagues, users, and players, implemented authentication with bcrypt and JWT, and built multiplier logic and weekly result computation. I pulled live NFL data via the Sleeper API and exposed team and matchup endpoints, and wrote tests with Jest. Because the app depends on live weekly data, I also created demo mode with seeded accounts and stable weekly test data, so it could be reviewed and graded consistently.
            </p>
            <p>
              The hardest part to build was league creation and management. Looking back, I wish I could have supported more teams and more selected players, which would have made the app more dynamic and exciting. If I did it again, I would design my own system for calculating odds to set the bet multipliers instead of using random numbers, and I would make the UI more compact and organized.
            </p>
          </div>
        </section>

        <section className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-md shadow-[#251409]/8 dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <h2 className="text-lg font-semibold">Outcome</h2>
          <div className="space-y-4 text-base leading-7 text-[#4a3222] dark:text-white"></div>
          <p>
            By the end of the semester, I shipped a playable fantasy experience with differentiated multiplier mechanics. I completed auth, matchup flow, standings, scoring, and backend setup, which covered nine of the ten core features in my plan, and league creation was partially completed, which established a base for multi team league expansion. I presented the project in both courses, including a knowledge-sharing segment on how Socket.io could power real-time matchup updates. Building Wildcat on my own strengthened my full stack integration across mobile client and API.
          </p>
          <p>
            To take Wildcat toward a real release, my top priorities are to expand player and weekly coverage beyond the current API source and support more teams per league. After that, I want to integrate betting odds data for richer multiplier logic and improve league creation and invite reliability.
          </p>
        </section>

        <div className="mt-8 mb-8 flex flex-wrap gap-3 text-base font-semibold">
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-[#6f3f20] bg-[#7a3f22] px-6 py-3 text-white shadow-md shadow-[#251409]/20 transition hover:-translate-y-0.5 hover:bg-[#5c3119] hover:text-white hover:shadow-lg hover:shadow-[#251409]/30 dark:border-[#dfceb6] dark:bg-[#f5e6d6] dark:text-[#251409] dark:hover:bg-[#dfceb6] dark:hover:text-[#251409]"
            href="/#contact"
          >
            Questions? Contact me
          </Link>
          <Link
            className="ml-auto inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-6 py-3 text-[#4a3222] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#f5e6d6] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
            href="/metime"
          >
            Next Project: MeTime
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
        <SiteFooter />
      </main>
    </div>
  );
}