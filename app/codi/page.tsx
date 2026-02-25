import Image from "next/image";
import Link from "next/link";
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

const overview = [
  "Holistic care: Built a guided chatbot logging flow that made health entries easier for children and parents.",
  "Execution: Led frontend delivery and shipped production ready child and parent experiences from research insights.",
  "Communication impact: Improved family data alignment through mismatch detection and resolution workflows.",
];

const demoLinks: any[] = [
];

const highlightGroups = [
  {
    title: "Key Product Features I Built",
    items: [
      "Chatbot logging UX: Built the conversational logging UI for both children and parents so entries feel guided instead of form heavy.",
      "Cross-domain health logging: Implemented structured capture flows for food, activity, mood, symptoms, sleep, and insulin updates.",
      "Adaptive prompts: Added fallback branches like 'I don't remember time' and 'I'm unsure about carbs' to reduce drop off and incomplete logs.",
      "Usuals plus new entry flow: Implemented fast path selection for recurring behaviors while preserving full custom logging when needed.",
    ],
  },
  {
    title: "Mismatch Resolution Engine",
    items: [
      "Mismatch detection logic: Built type specific comparison rules across child and parent logs (time windows, carb deltas, intensity and quality mismatches, symptom and mood differences).",
      "Escalation design: Implemented urgent routing for symptom and negative mood cases so parent visibility is immediate when risk is higher.",
      "Resolution workflow: Built a decision flow where child and parent choose the correct log, submit rationale, notify each other, and converge on final data.",
      "Confirmation layer: Added keep, edit, and discard handling so data quality improves through explicit reconciliation.",
    ],
  },
  {
    title: "Execution",
    items: [
      "Feature delivery: Built core React Native communication and care coordination flows.",
      "UX translation: Turned usability findings into reusable components and clearer interactions.",
      "Cross functional ownership: Partnered with design and research to iterate quickly.",
    ],
  },
  {
    title: "Leadership",
    items: [
      "Alignment: Ran weekly cross functional reviews across supervisors, design, engineering, and research.",
      "Decision quality: Aligned engineering with UX goals to reduce rework and ship faster.",
      "Adaptability: Expanded frontend ownership while maintaining delivery momentum.",
    ],
  },
];

const homepagePills = ["React Native", "TypeScript", "Firebase", "OpenAI", "Expo", "Node", "Frontend Development", "Full-Stack Development", "UX Design & Research", "Cross Collaboration"];

const stackDev = [...homepagePills];

const stackDesign = [
  "UX research synthesis",
  "Research trial feedback integration",
  "Interaction flow iteration",
  "Cross-functional collaboration",
  "Agile team communication",
];

const outcomes = [
  "Scalability: Established a production ready frontend foundation for continued feature delivery.",
  "Process impact: Tightened feedback loops between research, UX, and engineering.",
  "Business readiness: Positioned Codi for pilot testing with clearer validation milestones.",
  "Learning: Improved how I translate research into product decisions and implementation scope.",
];

const codiDemoVideoUrl = "https://player.vimeo.com/video/1167947118?autoplay=1&muted=1&loop=1&autopause=0&background=1&title=0&byline=0&portrait=0&dnt=1";

const nextSteps = [
  "Release: Ship the next deployment ready candidate.",
  "Validation: Run pilot testing with live CGM workflows.",
  "Prioritization: Convert pilot findings into the next roadmap.",
];

const renderImpactLine = (line: string) => {
  const [lead, ...rest] = line.split(": ");
  if (!rest.length) return <>{line}</>;
  return (
    <>
      <strong>{lead}</strong>
      {rest.length ? `: ${rest.join(": ")}` : ""}
    </>
  );
};

export default function CodiPage() {
  return (
    <div className="bg-[radial-gradient(circle_at_12%_20%,rgba(182,115,70,0.12),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(217,176,140,0.18),transparent_28%),#f9f4ec] text-[#2e1c10] dark:bg-black dark:text-white">
      <main className="mx-auto max-w-4xl px-5 pb-20 pt-14 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full border border-[#e6d8c8] bg-[#fffbf7] px-4 py-2 text-sm font-semibold text-[#5a4030] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:bg-[#1a120c] dark:text-[#e4d4c6] dark:hover:border-[#5a3e2c] dark:hover:bg-[#2a1b12]"
            href="https://github.com/umsi-phig/t1d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.43-5.25 5.71.41.35.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            <span>View GitHub (Privated)</span>
          </a>
        </div>

        <section className="mt-6 rounded-3xl border border-[#e6d8c8] bg-[#fffdf9]/95 p-6 shadow-md shadow-[#2e1c10]/8 dark:border-[#3b2a1f] dark:bg-black">
          <p className="text-2xl font-semibold leading-tight text-[#2e1c10] sm:text-3xl dark:text-white">
            How can families manage Type 1 diabetes more holistically while strengthening parent-child communication day to day?
          </p>
        </section>

        <header className="mt-6 space-y-4 rounded-3xl border border-[#e6d8c8] bg-[#fffbf7]/95 p-8 shadow-lg shadow-[#2e1c10]/10 backdrop-blur dark:border-[#3b2a1f] dark:bg-black">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#5a4030] dark:text-white">
            {homepagePills.map((pill) => (
              <span key={pill} className="rounded-full bg-[#f6ebdf] px-3 py-1 text-[#2e1c10] dark:bg-[#121212] dark:text-white">
                {pill}
              </span>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-[#7a5a42] dark:text-[#d7c4b6]">Project</p>
            <h1 className="text-3xl font-semibold">Codi</h1>
            <p className="text-sm font-semibold text-[#7a5a42] dark:text-[#cbb8aa]">Healthcare</p>
            <p className="text-base leading-7 text-[#5a4030] dark:text-white">
              Codi is a collaborative mobile app for families navigating Type 1 diabetes. It helps children and parents communicate clearly through a research-backed, user-centered experience.
            </p>
            <p className="text-base leading-7 text-[#5a4030] dark:text-white">
              I built a <strong>shared decision system</strong> that helps families capture daily health events, detect conflicts, and resolve them clearly.<br />
              <span className="block mt-2">All of this is powered by Firebase behind the scenes—every log entry and every mismatch resolution is stored securely in the cloud. That means families can always access their data, and the app can instantly sync updates between parents and kids. Firebase made it super easy to keep everyone on the same page, whether they're logging meals or working through a disagreement about what really happened!</span>
            </p>

            <div className="mt-4 grid gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              <div className="flex items-center justify-center">
                <div className="relative aspect-[9/19.5] w-full max-w-[170px] rounded-[2.4rem] border border-[#d8c3b0]/70 bg-[#2b2018] p-[8px] sm:max-w-[220px] dark:border-[#4a3324] dark:bg-[#18110c] -mt-4">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-[#fffdf9] dark:bg-[#111111]">
                    <Image src={codiHome} alt="Codi home screen" className="h-full w-full object-contain" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-[9/19.5] w-full max-w-[170px] rounded-[2.4rem] border border-[#d8c3b0]/70 bg-[#2b2018] p-[8px] sm:max-w-[220px] dark:border-[#4a3324] dark:bg-[#18110c]">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-[#fffdf9] dark:bg-[#111111]">
                    <Image src={codiHistory} alt="Codi history screen" className="h-full w-full object-contain" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-[9/19.5] w-full max-w-[170px] rounded-[2.4rem] border border-[#d8c3b0]/70 bg-[#2b2018] p-[8px] sm:max-w-[220px] dark:border-[#4a3324] dark:bg-[#18110c]">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-[#fffdf9] dark:bg-[#111111]">
                    <Image src={codiSummaryLog} alt="Codi summary log activity screen" className="h-full w-full object-contain" />
                  </div>
                </div>
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
              <p className="text-xs uppercase tracking-[0.2em] text-[#7a5a42] dark:text-[#d7c4b6]">Design & Research</p>
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
            <div className="mx-auto flex items-center justify-center">
              <div className="relative aspect-[9/19] w-full max-w-[300px] rounded-[2.4rem] border border-[#d8c3b0]/70 bg-[#2b2018] p-[8px] shadow-md shadow-[#2e1c10]/20 dark:border-[#4a3324] dark:bg-[#18110c]">
                <div className="relative h-full w-full overflow-hidden rounded-t-[1.9rem] rounded-b-[3.2rem] bg-[#fffdf9] sm:rounded-[1.9rem] dark:bg-[#111111]">
                  <VimeoEmbed
                    src={codiDemoVideoUrl}
                    title="Codi log demo"
                    className="h-full w-full"
                    cover
                  />
                </div>
              </div>
            </div>

            {/* <div className="grid gap-3 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] shadow-sm dark:border-[#3b2a1f] dark:bg-black">
                <Image src={codiLogActivity} alt="Codi log activity screen" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] shadow-sm dark:border-[#3b2a1f] dark:bg-black">
                <Image src={codiLogActivityChatbot} alt="Codi log activity chatbot screen" className="h-full w-full object-cover" />
              </div>
            </div> */}

            <div className="grid gap-3 sm:grid-cols-2">
              {demoLinks.map((link) => (
                <a
                  key={link.label}
                  className="inline-flex items-center justify-between gap-2 rounded-2xl border border-[#e6d8c8] px-4 py-3 text-sm font-semibold text-[#5a4030] transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:text-white dark:hover:border-[#5a3e2c] dark:hover:bg-[#121212]"
                  href={link.href}
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
                      <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b67346]" aria-hidden />
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
                <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#b67346]" aria-hidden />
                <span>{renderImpactLine(item)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl bg-[#f6ebdf] px-4 py-4 text-[#2e1c10] dark:bg-[#121212] dark:text-white">
            <p className="text-xs uppercase tracking-[0.18em] text-[#7a5a42] dark:text-[#d7c4b6]">Next steps</p>
            <ul className="mt-2 space-y-2 text-sm leading-6">
              {nextSteps.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b67346]" aria-hidden />
                  <span>{renderImpactLine(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-3 text-base font-semibold">
          <Link className="inline-flex items-center gap-2 rounded-full border border-[#7f4b28] bg-[#8a4a2b] px-6 py-3 text-white shadow-md shadow-[#2e1c10]/20 transition hover:-translate-y-0.5 hover:bg-[#6f3b22] hover:text-white hover:shadow-lg hover:shadow-[#2e1c10]/30 dark:border-[#e6d8c8] dark:bg-[#f7ede4] dark:text-[#2e1c10] dark:hover:bg-[#e6d8c8] dark:hover:text-[#2e1c10]" href="/#contact">
            Questions? Contact me
          </Link>
        </div>
      </main>
    </div>
  );
}
