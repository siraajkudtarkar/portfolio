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

const role = "Lead Web Developer & UI/UX Designer";
const timeline = "2022 - 2023 (Designathon/Capstone Project)";

const demoLinks = [
  {label: "Winning Submission: UC Riverside Blackstone Ideas Competition (Slide Deck)", href: "https://docs.google.com/presentation/d/1yJm4KiYncZGCTazTPlBiWSp4LNDkFr_AYqwEy5Hp1lc/edit?usp=sharing"},
  { label: "Winning Submission: BU Catalyst Designathon (Devpost Submission)", href: "https://devpost.com/software/untitled-project-0qj8pu" },
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

const meTimeDemoVimeoUrl = "https://player.vimeo.com/video/1167950147?autoplay=1&muted=1&loop=1&autopause=0&background=1&title=0&byline=0&portrait=0&dnt=1";

export default function MeTimePage() {
  return (
    <div className="bg-[radial-gradient(circle_at_12%_20%,rgba(182,115,70,0.12),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(217,176,140,0.18),transparent_28%),#f5ede1] text-[#251409] dark:bg-[#221810] dark:text-white">
      <main className="flex min-h-screen flex-col gap-8 px-5 pb-24 pt-6 sm:px-8 sm:pt-8 lg:px-16">
        <ProjectNav />
        {/* <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-4 py-2 text-sm font-semibold text-[#4a3222] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#e2cfbb] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
            href="https://github.com/siraajkudtarkar/metime-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.43-5.25 5.71.41.35.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            <span>View Repository</span>
          </a>
        </div> */}
        <section className="p-8">
          <p className="text-2xl text-center font-bold leading-tight text-[#251409] sm:text-3xl dark:text-white">
            How can busy students turn small open windows in their schedule into meaningful self care?
          </p>
        </section>

        <header className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-lg shadow-[#251409]/10 backdrop-blur dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <div className="space-y-3">
            {/* <p className="text-sm uppercase tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Project</p> */}
            <h1 className="text-3xl font-semibold">MeTime</h1>
            <p className="text-sm font-semibold text-[#664834] dark:text-[#c2a88f]">Health &amp; Wellness</p>
            <p className="text-base leading-7 text-[#4a3222] dark:text-white">
              A digital solution that helps reduce burnout by using Google Calendar in a smarter way. It guides users toward activities that support better habits and mental health. MeTime turns intention into action: I focused on helping users turn "I should take care of myself" into clear next steps they can do today.
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
              <p className="text-xs uppercase font-semibold tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Development</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#4a3222] dark:text-white">
                {stackDev.map((tech) => (
                  <span key={tech} className="rounded-full bg-[#f0e4d1] px-3 py-1 text-[#251409] dark:bg-[#2d2116] dark:text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase font-semibold tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Design & Research</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#4a3222] dark:text-white">
                {stackDesign.map((tool) => (
                  <span key={tool} className="rounded-full bg-[#f0e4d1] px-3 py-1 text-[#251409] dark:bg-[#2d2116] dark:text-white">
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
                  className="inline-flex items-center justify-between gap-2 rounded-2xl border border-[#dfceb6] px-4 py-3 text-sm font-semibold text-[#4a3222] transition hover:-translate-y-0.5 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:text-white dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span>{link.label}</span>
                  <span aria-hidden className="text-[#7a3f22] dark:text-white">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-md shadow-[#251409]/8 dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <h2 className="text-lg font-semibold">My Work</h2>
          <div className="space-y-4 text-base leading-7 text-[#4a3222] dark:text-white">
            <p>
              MeTime began at Catalyst 2021, a UI/UX designathon hosted by Boston University, in the Health & Wellness track. College students were struggling more than ever with time management, getting involved, and staying motivated, and an NIH survey found that 71% of students reported increased stress and anxiety during the COVID-19 pandemic. Our team of three asked: how can busy students turn small open windows in their schedule into meaningful self care?
            </p>
            <p>
              We started by running interviews and social outreach to validate burnout pain points. We surveyed college students through Instagram polls and got 51 responses. School was by far the biggest source of stress, named by 36 of 51 students, and when asked how they manage their schedule, more students chose "other" or no calendar at all than Google Calendar, Apple Calendar, or a planner. Students described self care as alone time, working out, and personal hobbies, and said what held them back was lack of motivation, emotional distress, and poor time management. From those results, we built two personas in Miro: Jane, a first-year student who wants more time for her own interests like painting, and John, a graduating senior facing academic burnout and spending too much free time on social media.
            </p>
            <p>
              Next, I helped study the landscape of calendar, productivity, self-care, and mental health apps, including Stoic, Ladder, Headspace, Co-Star, Picky, and Flo. Apps like Stoic and Ladder focused on journaling, reflection, and routines, so we differentiated MeTime from wellness and productivity alternatives around what they lacked: a friendly, low-text interface, a priority on users' interests and discovering new hobbies, mood tracking to guide suggestions, and calendar events built around short, medium, and long activities. Following a define, ideate, prototype, test, and refine process, we produced lo fi to hi fi flows, personas, and clickable prototypes. We mapped user flows, sketched early screens in Adobe Illustrator, and moved from lo-fi to hi-fi clickable prototypes in Figma, including the sign-up, home feed, and add-activity screens. Working across time zones with no designated roles was a real challenge, and it taught me that communication and trust are what hold a remote team together.
            </p>
            <p>
              After the designathon, my co-founder Karanvir Chima and I, both computer science students at UC Riverside, pitched MeTime at the UCR Blackstone LaunchPad Ideas Competition. We sharpened the concept: users import their calendar and city, pick their interests during onboarding, and whenever a 30-minute to 1-hour gap opens up, a MeTime block appears with nearby activities that match their interests. We also built a business model around a free app with a $4.99 per month subscription for premium recommendations and group events, plus ads from event holders and local businesses, and sized MeTime at the intersection of the mental health and personal development markets.
            </p>
            <p>
              Finally, we converted the concept into a Senior Design MVP with production style integrations, where I served as Scrum Master and Lead Developer across sprint delivery. I led frontend implementation in Next.js and shipped MVP flows, and connected Google Calendar read and write with activity recommendations, so MeTime converts open calendar time into actionable wellness suggestions that reduce decision fatigue.
            </p>
          </div>
        </section>

        <section className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-md shadow-[#251409]/8 dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <h2 className="text-lg font-semibold">Outcome</h2>
          <div className="space-y-4 text-base leading-7 text-[#4a3222] dark:text-white">
            <p>
              MeTime won two university competitions for product value and execution: first place in the Health & Wellness track at Catalyst 2021 in the Experienced category, and the UCR Blackstone LaunchPad Ideas Competition in 2022. Through our Senior Design capstone, we delivered an MVP that converts free calendar time into activity suggestions, and I implemented auth, calendar sync, and the recommendation workflow. The project strengthened my Agile execution under tight deadlines.
            </p>
          </div>
        </section>

        <div className="mt-8 mb-8 flex flex-wrap gap-3 text-base font-semibold">
          <Link className="inline-flex items-center gap-2 rounded-full border border-[#6f3f20] bg-[#7a3f22] px-6 py-3 text-white shadow-md shadow-[#251409]/20 transition hover:-translate-y-0.5 hover:bg-[#5c3119] hover:text-white hover:shadow-lg hover:shadow-[#251409]/30 dark:border-[#dfceb6] dark:bg-[#f5e6d6] dark:text-[#251409] dark:hover:bg-[#dfceb6] dark:hover:text-[#251409]" href="/#contact">
            Questions? Contact me
          </Link>
          <Link
            className="ml-auto inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-6 py-3 text-[#4a3222] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#f5e6d6] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
            href="/codi"
          >
            Next Project: Codi
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
