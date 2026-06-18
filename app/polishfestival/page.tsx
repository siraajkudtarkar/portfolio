import Link from "next/link";
import Image from "next/image";
import IPhoneFrame from "../IPhoneFrame";
import AndroidTabletFrame from "../AndroidTabletFrame";
import VimeoEmbed from "../VimeoEmbed";
import ProjectNav from "../ProjectNav";
import muskegonMobile from "../polishfestival/Muskegon Mobile Screenshot.jpeg"
import muskegonTablet from "../polishfestival/Muskegon Tablet Screenshot.png"
import muskegonFlow from "../polishfestival/Muskegon Experience Flow.png"
import expositionWinner from "../polishfestival/ExpositionWinner.png"

export const metadata = {
  title: "Muskegon Polish Festival | Siraaj Kudtarkar",
  description:
    "A mobile and tablet experience that helps festival attendees explore Polish history, event details, and the festival story.",
};

const overview = [
  "Heritage storytelling: Turned the festival narrative into a friendly digital experience that highlights Polish culture and local history.",
];

const problemStatement =
  "Historical information was often presented through static posters that were hard to access, making it difficult for younger visitors to connect with the festival’s cultural depth and causing important heritage context to get lost in the event’s noise.";

const solutionSummary = [
  "Designed a connected cross-device experience that starts with a mobile quiz and leads into a tablet journey with interactive maps and layered cultural content.",
  "Linked playful interaction with deeper exploration so cultural learning feels more intuitive, memorable, and meaningful across generations.",
];

const role = "UX Engineer & Frontend Developer";
const timeline = "January 2026 - May 2026";

const demoLinks = [
  { label: "Project Pitch Video", href: "https://drive.google.com/file/d/17BJfsLLog4mSiyNUqcPTkwzBJLiIofts/view?usp=sharing" },
  { label: "Project Slide Deck", href: "https://docs.google.com/presentation/d/18ARWZVaNEGORFiKSCrK6fc97QlP6dzzzB1V4RKuBdZk/edit?usp=sharing" },
];

const muskegonMobileDemoVimeoUrl = "https://player.vimeo.com/video/1202318773?autoplay=1&muted=1&loop=1&autopause=0&background=1&title=0&byline=0&portrait=0&dnt=1";
const muskegonTabletDemoVimeoUrl = "https://player.vimeo.com/video/1202318788?autoplay=1&muted=1&loop=1&autopause=0&background=1&title=0&byline=0&portrait=0&dnt=1";

const highlightGroups = [
  {
    title: "Storytelling & Content",
    items: [
      "Timeline/map flow: Created the tablet timeline and map page with the year, era, border changes, hotspots, and event descriptions.",
      "Content progression: Linked each timeline state into deeper content pages that expand on key moments in Polish history.",
      "Template delivery: Delivered a flexible template for Polish history content rather than a fully finalized information set.",
    ],
  },
  {
    title: "Responsive UX",
    items: [
      "Smooth dragging: Built the timeline component so users can drag through the experience with an easy, fluid motion.",
      "Phone-to-tablet UX: Worked on the transition between phone and tablet layouts so the experience stays intuitive across devices.",
      "Accessible color systems: Used thoughtful color schemes to support readability, contrast, and a welcoming visual experience.",
    ],
  },
  {
    title: "Delivery",
    items: [
      "Mockup translation: Turned UI/UX mockups into usable frontend components for the tablet application.",
      "Historical context: Built the structure to provide layered cultural and historical information across time periods.",
      "Extended engagement: Designed the experience to extend interest beyond the festival and into deeper exploration.",
    ],
  },
];

const homepagePills = ["React Native", "TypeScript", "Frontend Development", "Expo", "Node", "Cross Collaboration"];

const stackDev = [...homepagePills];

const stackDesign = [
  "Mobile-first layout planning",
  "Tablet breakpoint refinement",
  "Visual storytelling decisions",
];

const outcomes = [
  "Clarity: Presented the festival in a way that feels welcoming, informative, and easy to scan.",
  "Accessibility: Improved readability and touch interaction for attendees using phones or tablets.",
  "Story: Connected event details, history, and visuals into a cohesive narrative.",
];

const nextSteps = [
  "Interactions: Add more hotspots and deeper interactions, like audio.",
  "Accessibility: Keep the experience usable across ages, abilities, and contexts.",
  "Reach: Extend the experience beyond the event through web access and continued exploration.",
  "Launch: Debut the project at the Muskegon Polish Festival for festival goers later in September 2026.",
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

export default function MuskegonPolishFestivalPage() {
  return (
    <div className="bg-[radial-gradient(circle_at_12%_20%,rgba(182,115,70,0.12),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(217,176,140,0.18),transparent_28%),#f9f4ec] text-[#2e1c10] dark:bg-black dark:text-white">
      <main className="mx-auto max-w-4xl px-5 pb-20 pt-14 sm:px-8 lg:px-12">
        <div className="sm:hidden">
          <ProjectNav />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
            <a
            className="inline-flex items-center gap-2 rounded-full border border-[#e6d8c8] bg-[#fffbf7] px-4 py-2 text-sm font-semibold text-[#5a4030] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:bg-[#1a120c] dark:text-[#e4d4c6] dark:hover:border-[#5a3e2c] dark:hover:bg-[#2a1b12]"
            href="https://github.com/siraajkudtarkar/muskegon-polish-festival"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.43-5.25 5.71.41.35.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            <span>View GitHub</span>
          </a>
        </div>

        <section className="mt-6 rounded-3xl border border-[#e6d8c8] bg-[#fffdf9]/95 p-6 shadow-md shadow-[#2e1c10]/8 dark:border-[#3b2a1f] dark:bg-black">
          <p className="text-2xl font-semibold leading-tight text-[#2e1c10] sm:text-3xl dark:text-white">
            How can festival attendees explore Polish heritage through a more engaging digital experience?
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
            <h1 className="text-3xl font-semibold">Muskegon Polish Festival Mobile &amp; Tablet Experience</h1>
            <p className="text-sm font-semibold text-[#7a5a42] dark:text-[#cbb8aa]">Education</p>
            <p className="text-base leading-7 text-[#5a4030] dark:text-white">
              A festival-focused digital experience that introduces the event, shares Polish heritage, and gives attendees a smoother path through the most important information.
            </p>
            <p className="text-base leading-7 text-[#5a4030] dark:text-white">
              I focused mainly on the <strong>tablet experience</strong> with some work on the mobile version, making sure the project feels welcoming, readable, and easy to navigate while still giving the festival enough room to tell its story.
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="flex items-center justify-center py-2 sm:py-0">
                <IPhoneFrame className="max-w-[220px]" screenClassName="bg-gradient-to-b from-[#f7ebdf] via-[#fff7ef] to-[#f4e0cf]">
                  {/* <div className="flex h-full flex-col justify-between p-4 text-[#2e1c10]">
                    <div className="space-y-3">
                      <span className="inline-flex rounded-full bg-[#f6ebdf] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a5a42]">
                        Project Video
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-lg font-semibold leading-tight">Meet our Polish History Guides!</h2>
                        <p className="text-sm leading-6 text-[#5a4030]">
                          Discover the stories, traditions, and community moments that make the Muskegon Polish Festival feel alive.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#8a4a2b] p-4 text-white shadow-md shadow-[#2e1c10]/20">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#f4dfcf]">Start Journey</p>
                      <p className="mt-2 text-sm leading-6 text-[#fff8f2]">
                        A guided entry point for mobile visitors who want a fast introduction to the festival.
                      </p>
                    </div>
                  </div> */}
                  <Image src={muskegonMobile} alt="Muskegon mobile screenshot" className="h-full w-full object-contain" />
                </IPhoneFrame>
              </div>

                <div className="mt-4 flex items-center justify-center py-2">
                  <AndroidTabletFrame className="max-w-[950px]" screenClassName="bg-[#fffdf9]">
                    <div className="h-full w-full overflow-hidden rounded-[1.15rem] bg-[#fffdf9]">
                      <Image
                        src={muskegonTablet}
                        alt="Muskegon tablet screenshot"
                        className="h-full w-full object-cover scale-[1] object-top"
                      />
                    </div>
                  </AndroidTabletFrame>
                </div>
              </div>
            </div>
        </header>

        <section className="mt-6 space-y-4 rounded-3xl border border-[#e6d8c8] bg-[#fffdf9]/95 p-8 shadow-md shadow-[#2e1c10]/8 dark:border-[#3b2a1f] dark:bg-black">
          <h2 className="text-lg font-semibold">Overview</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#e6d8c8] bg-[#fffbf7] px-4 py-3 dark:border-[#3b2a1f] dark:bg-[#121212]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5a42] dark:text-[#d7c4b6]">Role</p>
              <p className="mt-1 text-sm font-semibold text-[#2e1c10] dark:text-white">{role}</p>
            </div>
            <div className="rounded-2xl border border-[#e6d8c8] bg-[#fffbf7] px-4 py-3 dark:border-[#3b2a1f] dark:bg-[#121212]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5a42] dark:text-[#d7c4b6]">Timeline</p>
              <p className="mt-1 text-sm font-semibold text-[#2e1c10] dark:text-white">{timeline}</p>
            </div>
          </div>
          <div className="space-y-3 rounded-2xl border border-[#e6d8c8] bg-[#fffaf4] p-4 dark:border-[#3b2a1f] dark:bg-[#111111]">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5a42] dark:text-[#d7c4b6]">Problem Statement</p>
              <p className="text-sm leading-6 text-[#5a4030] dark:text-white">{problemStatement}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5a42] dark:text-[#d7c4b6]">Solution</p>
              <ul className="space-y-2 text-sm leading-6 text-[#5a4030] dark:text-white">
                {solutionSummary.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b67346]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
            <div className="overflow-hidden rounded-2xl border border-[#e6d8c8] bg-[#fffaf4] p-3 dark:border-[#3b2a1f] dark:bg-[#111111]">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5a42] dark:text-[#d7c4b6]">Experience Flow</h2>
            <Image
              src={muskegonFlow}
              alt="Muskegon festival experience flow"
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>
          {/* <div className="space-y-3 text-sm leading-6 text-[#5a4030] dark:text-white">
            {overview.map((line) => (
              <p key={line}>{renderImpactLine(line)}</p>
            ))}
          </div> */}
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
            <div className="grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
              <div className="flex items-center justify-center py-2 sm:py-0">
                <IPhoneFrame className="max-w-[220px]" screenClassName="bg-[#fffdf9]">
                  <VimeoEmbed
                    src={muskegonMobileDemoVimeoUrl}
                    title="Muskegon mobile demo"
                    className="h-full w-full"
                    iframeClassName="h-full w-full"
                    cover
                  />
                </IPhoneFrame>
              </div>

              <div className="flex items-center justify-center py-2 sm:py-0">
                <AndroidTabletFrame className="!w-full sm:!w-[460px] sm:!max-w-[460px]" screenClassName="bg-[#fffdf9]">
                  <div className="h-full w-full overflow-hidden rounded-[1.15rem] bg-[#fffdf9]">
                    <VimeoEmbed
                      src={muskegonTabletDemoVimeoUrl}
                      title="Muskegon tablet demo"
                      className="h-full w-full"
                      iframeClassName="h-full w-full object-cover object-top"
                      cover
                    />
                  </div>
                </AndroidTabletFrame>
              </div>
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
          {/* <ul className="space-y-2 text-sm leading-6 text-[#5a4030] dark:text-white">
            {outcomes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#b67346]" aria-hidden />
                <span>{renderImpactLine(item)}</span>
              </li>
            ))}
          </ul> */}

          <div className="space-y-3 rounded-2xl border border-[#e6d8c8] bg-[#fffaf4] p-4 dark:border-[#3b2a1f] dark:bg-[#111111]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5a42] dark:text-[#d7c4b6]">UMSI Exposition Award</p>
            <p className="text-sm leading-6 text-[#5a4030] dark:text-white">
              <strong> Won Final Project Award for User-Centered Agile Development</strong> at the UMSI Exposition for “Cultural and Educational Interactive Experience for Polish Festival Visitors.”
            </p>
            <div className="overflow-hidden rounded-xl border border-[#e6d8c8] bg-[#fffdf9] dark:border-[#3b2a1f] dark:bg-[#121212]">
              <Image
                src={expositionWinner}
                alt="Exposition Winner"
                className="h-auto w-full object-contain"
              />
            </div>
            <p className="text-sm leading-6 text-[#5a4030] dark:text-white">
              Team: Samantha Pratt, Boran Yang, Xiwen Cao, Siraaj Kudtarkar, Jonte Taffe (not pictured) <br/> SI 699 User-Centered Agile Development Mastery Course
            </p>
          </div>

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
