import Image from "next/image";
import Link from "next/link";
import IPhoneFrame from "../IPhoneFrame";
import ProjectNav from "../ProjectNav";
import SiteFooter from "../SiteFooter";
import VimeoEmbed from "../VimeoEmbed";
import codiHome from "./Codi Home.png";
import codiHistory from "./Codi History.png";
import codiSummaryLog from "./Codi Summary Log Activity.png";
import codiLogActivity from "./Codi Log Activity.png";
import codiLogActivityChatbot from "./Codi Log Activity Chatbot.png";

export const metadata = {
  title: "Codi | Siraaj Kudtarkar",
  description:
    "Research-driven React Native app improving parent-child communication for Type 1 diabetes care.",
};

const role = "UX Engineer & Full-Stack Mobile Developer";
const timeline = "November 2025 - May 2026";

const demoLinks: any[] = [
];

const homepagePills = ["React Native", "TypeScript", "Firebase", "OpenAI", "Expo", "Node", "Frontend Development", "Full-Stack Development", "UX Design & Research", "Cross Collaboration"];

const stackDev = [...homepagePills];

const stackDesign = [
  "UX Research",
  "Research trial feedback integration",
  "Interaction flow iteration",
  "Cross-collaboration",
  "Agile team communication",
];

const codiDemoVideoUrl = "https://player.vimeo.com/video/1167947118?autoplay=1&muted=1&loop=1&autopause=0&background=1&title=0&byline=0&portrait=0&dnt=1";

export default function CodiPage() {
  return (
    <div className="bg-[radial-gradient(circle_at_12%_20%,rgba(182,115,70,0.12),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(217,176,140,0.18),transparent_28%),#f5ede1] text-[#251409] dark:bg-[#221810] dark:text-white">
      <main className="flex min-h-screen flex-col gap-8 px-5 pb-24 pt-6 sm:px-8 sm:pt-8 lg:px-16">
        <ProjectNav />
        <section className="p-8">
          <p className="text-2xl text-center font-bold leading-tight text-[#251409] sm:text-3xl dark:text-white">
            How can families manage Type 1 diabetes more holistically while strengthening parent-child communication day to day?
          </p>
        </section>

        <header className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-lg shadow-[#251409]/10 backdrop-blur dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <div className="space-y-3">
            {/* <p className="text-sm uppercase tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Project</p> */}
            <h1 className="text-3xl font-semibold">Codi</h1>
            <p className="text-sm font-semibold text-[#664834] dark:text-[#c2a88f]">Healthcare</p>
            <p className="text-base leading-7 text-[#4a3222] dark:text-white">
              Codi is a collaborative mobile app for families navigating Type 1 diabetes. It helps children and parents communicate clearly through a research-backed, user-centered experience, supported by a University of Michigan-backed research study.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              <div className="flex items-center justify-center py-2 sm:py-0">
                <IPhoneFrame className="max-w-[196px] sm:max-w-[190px]">
                  <Image src={codiHome} alt="Codi home screen" className="h-full w-full object-contain" />
                </IPhoneFrame>
              </div>
              <div className="flex items-center justify-center py-2 sm:py-0">
                <IPhoneFrame className="max-w-[196px] sm:max-w-[190px]">
                  <Image src={codiHistory} alt="Codi history screen" className="h-full w-full object-contain" />
                </IPhoneFrame>
              </div>
              <div className="flex items-center justify-center py-2 sm:py-0">
                <IPhoneFrame className="max-w-[196px] sm:max-w-[190px]">
                  <Image src={codiSummaryLog} alt="Codi summary log activity screen" className="h-full w-full object-contain" />
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
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Design & Research</p>
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
              <IPhoneFrame className="!max-w-[400px]">
                <VimeoEmbed
                  src={codiDemoVideoUrl}
                  title="Codi log demo"
                  className="h-full w-full"
                  iframeClassName="h-full w-full"
                  cover
                />
              </IPhoneFrame>
            </div>

            {/* <div className="grid gap-3 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-[#dfceb6] bg-[#f7eedf] shadow-sm dark:border-[#3e2d20] dark:bg-[#221810]">
                <Image src={codiLogActivity} alt="Codi log activity screen" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-[#dfceb6] bg-[#f7eedf] shadow-sm dark:border-[#3e2d20] dark:bg-[#221810]">
                <Image src={codiLogActivityChatbot} alt="Codi log activity chatbot screen" className="h-full w-full object-cover" />
              </div>
            </div> */}

            <div className="grid gap-3 sm:grid-cols-2">
              {demoLinks.map((link) => (
                <a
                  key={link.label}
                  className="inline-flex items-center justify-between gap-2 rounded-2xl border border-[#dfceb6] px-4 py-3 text-sm font-semibold text-[#4a3222] transition hover:-translate-y-0.5 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:text-white dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
                  href={link.href}
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
              I joined the Codi team when the PhD student leading the research was looking for a developer, and I fulfilled the needs the team had while adding my own contributions. Together, we built a shared decision system that helps families capture daily health events, detect conflicts, and resolve them clearly.
            </p>
            <p>
              I built the conversational logging UI for both children and parents so entries feel guided instead of form heavy. I implemented structured capture flows for food, activity, mood, symptoms, sleep, and insulin updates, and added fallback branches like "I don't remember time" and "I'm unsure about carbs" to reduce drop off and incomplete logs. I also implemented fast path selection for recurring behaviors while preserving full custom logging when needed.
            </p>
            <p>
              I then built the mismatch resolution engine. I built type specific comparison rules across child and parent logs (time windows, carb deltas, intensity and quality mismatches, symptom and mood differences), and implemented urgent routing for symptom and negative mood cases so parent visibility is immediate when risk is higher. I built a decision flow where child and parent choose the correct log, submit rationale, notify each other, and converge on final data, and added keep, edit, and discard handling so data quality improves through explicit reconciliation. The toughest part to build was the database schema for logging events and handling mismatch resolutions synchronously.
            </p>
            <p>
              Beyond these features, I built core React Native communication and care coordination flows, turned usability findings into reusable components and clearer interactions, and partnered with design and research to iterate quickly. I ran weekly cross functional reviews across supervisors, design, engineering, and research, aligned engineering with UX goals to reduce rework and ship faster, and expanded frontend ownership while maintaining delivery momentum.
            </p>
          </div>
        </section>

        <section className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-md shadow-[#251409]/8 dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <h2 className="text-lg font-semibold">Outcome</h2>
          <div className="space-y-4 text-base leading-7 text-[#4a3222] dark:text-white">
            <p>
              I led frontend delivery and shipped production ready child and parent experiences from research insights, which established a production ready frontend foundation for continued feature delivery. Our mismatch detection and resolution workflows improved family data alignment, and our weekly reviews tightened feedback loops between research, UX, and engineering. Codi is now positioned for pilot testing with clearer validation milestones. Working on Codi improved how I translate research into product decisions and implementation scope.
            </p>
            <p>
              Looking ahead, I&apos;m focused on running pilot testing with research trial participants to see how the app holds up outside a controlled environment. Whatever we learn from that pilot will directly shape the sprints ahead.
            </p>
          </div>
        </section>

        <div className="mt-8 mb-8 flex flex-wrap gap-4 text-base font-semibold">
          <Link className="inline-flex items-center gap-2 rounded-full border border-[#6f3f20] bg-[#7a3f22] px-6 py-3 text-white shadow-md shadow-[#251409]/20 transition hover:-translate-y-0.5 hover:bg-[#5c3119] hover:text-white hover:shadow-lg hover:shadow-[#251409]/30 dark:border-[#dfceb6] dark:bg-[#f5e6d6] dark:text-[#251409] dark:hover:bg-[#dfceb6] dark:hover:text-[#251409]" href="/#contact">
            Questions? Contact me
          </Link>
          <Link
            className="ml-auto inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-6 py-3 text-[#4a3222] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#f5e6d6] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
            href="/polishfestival"
          >
            Next Project: Muskegon Polish Festival
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
