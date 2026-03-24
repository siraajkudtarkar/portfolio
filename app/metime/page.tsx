import Image from "next/image";
import Link from "next/link";
import IPhoneFrame from "../IPhoneFrame";
import ProjectNav from "../ProjectNav";
import SiteFooter from "../SiteFooter";
import VimeoEmbed from "../VimeoEmbed";

import addActivityImg from "./MeTime Screen Add Activity.png";
import homeFeedImg from "./MeTime Screen Home Feed.png";
import authImg from "./MeTime Screen Sign Up Login.png";

export const metadata = {
  title: "MeTime | Siraaj Kudtarkar",
  description: "Reducing burnout by pairing Google Calendar availability with meaningful activities",
};

const overview = [
  "Wellness focus: Converts open calendar time into actionable wellness suggestions that reduce decision fatigue.",
  "Validation: Won BU Catalyst Designathon (2021) and UCR Blackstone Launchpad (2022).",
  "Execution: Converted the concept into a Senior Design MVP with production style integrations.",
];

const demoLinks = [
  {label: "Winning Submission: UC Riverside Blackstone Ideas Competition (Slide Deck)", href: "https://docs.google.com/presentation/d/1yJm4KiYncZGCTazTPlBiWSp4LNDkFr_AYqwEy5Hp1lc/edit?usp=sharing"},
  { label: "Winning Submission: BU Catalyst Designathon (Devpost Submission)", href: "https://devpost.com/software/untitled-project-0qj8pu" },
];

const highlightGroups = [
  {
    title: "Discovery & Design",
    items: [
      "Research: Ran interviews and social outreach to validate burnout pain points.",
      "Design system: Produced lo fi to hi fi flows, personas, and clickable prototypes.",
      "Positioning: Differentiated MeTime from wellness and productivity alternatives.",
    ],
  },
  {
    title: "Product Delivery",
    items: [
      "Engineering: Led frontend implementation in Next.js and shipped MVP flows.",
      "Integration: Connected Google Calendar read and write with activity recommendations.",
      "Leadership: Served as Scrum Master and Lead Developer across sprint delivery.",
    ],
  },
];

const homepagePills = ["Figma", "UI/UX Design", "UX Research", "Next.js", "JavaScript", "HTML/CSS", "Google Cloud API", "MongoDB", "Cross Collaboration"];

const stackDev = homepagePills.filter((pill) => pill !== "UI/UX Design" && pill !== "UX Research");

const stackDesign = [
  "UX Design & Research",
  "Figma (lo-fi, hi-fi, prototyping)",
  "Miro (personas, user flows, ideation)",
  "Adobe Illustrator (initial sketches)",
  "Instagram Polls (quick user research)",
  "Google Slides (pitch deck)",
];

const outcomes = [
  "Recognition: Won two university competitions for product value and execution.",
  "Product impact: Delivered an MVP that converts free calendar time into activity suggestions.",
  "System coverage: Implemented auth, calendar sync, and recommendation workflow.",
  "Learning: Strengthened Agile execution under tight deadlines.",
];

const meTimeDemoVimeoUrl = "https://player.vimeo.com/video/1167950147?autoplay=1&muted=1&loop=1&autopause=0&background=1&title=0&byline=0&portrait=0&dnt=1";

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

export default function MeTimePage() {
  return (
    <div className="bg-[radial-gradient(circle_at_12%_20%,rgba(182,115,70,0.12),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(217,176,140,0.18),transparent_28%),#f9f4ec] text-[#2e1c10] dark:bg-black dark:text-white">
      <main className="mx-auto max-w-4xl px-5 pb-20 pt-14 sm:px-8 lg:px-12">
        <div className="sm:hidden">
          <ProjectNav />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full border border-[#e6d8c8] bg-[#fffbf7] px-4 py-2 text-sm font-semibold text-[#5a4030] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:bg-[#1a120c] dark:text-[#e4d4c6] dark:hover:border-[#5a3e2c] dark:hover:bg-[#2a1b12]"
            href="https://github.com/siraajkudtarkar/metime-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.43-5.25 5.71.41.35.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            <span>View Repository</span>
          </a>
        </div>
        <section className="mt-6 rounded-3xl border border-[#e6d8c8] bg-[#fffdf9]/95 p-6 shadow-md shadow-[#2e1c10]/8 dark:border-[#3b2a1f] dark:bg-black">
          <p className="text-2xl font-semibold leading-tight text-[#2e1c10] sm:text-3xl dark:text-white">
            How can busy students turn small open windows in their schedule into meaningful self care?
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
            <h1 className="text-3xl font-semibold">MeTime</h1>
            <p className="text-sm font-semibold text-[#7a5a42] dark:text-[#cbb8aa]">Health &amp; Wellness</p>
            <p className="text-base leading-7 text-[#5a4030] dark:text-white">
              A digital solution that helps reduce burnout by using Google Calendar in a smarter way. It guides users toward activities that support better habits and mental health.
            </p>
            <p className="text-base leading-7 text-[#5a4030] dark:text-white">
              MeTime turns intention into action. I focused on helping users turn "I should take care of myself" into clear next steps they can do today.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              <div className="flex items-center justify-center py-2 sm:py-0">
                <IPhoneFrame className="max-w-[196px] sm:max-w-[190px]">
                  <Image src={authImg} alt="MeTime sign up and login wireframe" className="h-full w-full object-contain" placeholder="blur" />
                </IPhoneFrame>
              </div>
              <div className="flex items-center justify-center py-2 sm:py-0">
                <IPhoneFrame className="max-w-[196px] sm:max-w-[190px]">
                  <Image src={homeFeedImg} alt="MeTime home feed wireframe" className="h-full w-full object-contain" placeholder="blur" />
                </IPhoneFrame>
              </div>
              <div className="flex items-center justify-center py-2 sm:py-0">
                <IPhoneFrame className="max-w-[196px] sm:max-w-[190px]">
                  <Image src={addActivityImg} alt="MeTime add activity wireframe" className="h-full w-full object-contain" placeholder="blur" />
                </IPhoneFrame>
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
                  <span key={tech} className="rounded-full bg-[#f6ebdf] px-3 py-1 text-[#2e1c10] dark:bg-[#121212] dark:text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7a5a42] dark:text-[#d7c4b6]">Design & Research</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#5a4030] dark:text-white">
                {stackDesign.map((tool) => (
                  <span key={tool} className="rounded-full bg-[#f6ebdf] px-3 py-1 text-[#2e1c10] dark:bg-[#121212] dark:text-white">
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
            <div className="mx-auto flex items-center justify-center py-3 sm:py-0">
              <IPhoneFrame className="max-w-[300px]">
                <VimeoEmbed
                  src={meTimeDemoVimeoUrl}
                  title="MeTime prototype preview"
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
                  className="inline-flex items-center justify-between gap-2 rounded-2xl border border-[#e6d8c8] px-4 py-3 text-sm font-semibold text-[#5a4030] transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:text-white dark:hover:border-[#5a3e2c] dark:hover:bg-[#121212]"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span>{link.label}</span>
                  <span aria-hidden className="text-[#8a4a2b] dark:text-white">↗</span>
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
