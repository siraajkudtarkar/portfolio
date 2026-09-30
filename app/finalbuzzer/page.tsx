import Link from "next/link";
import HeroMediaPicker from "./HeroMediaPicker";
import ProjectNav from "../ProjectNav";
import SiteFooter from "../SiteFooter";
import finalBuzzerDashboard from "./The Final Buzzer.jpeg";
import finalBuzzerMobile from "./The Final Buzzer Mobile.png";

export const metadata = {
  title: "The Final Buzzer | Siraaj Kudtarkar",
  description:
    "A React-based study dashboard with an exam countdown and planned vs actual time tracking.",
};

const role = "Frontend React Developer";
const timeline = "February 2025 - April 2025";

const demoLinks = [
  { label: "Live Site", href: "https://siraajkudtarkar.github.io/the-final-buzzer/" },
];

const homepagePills = ["React", "Node", "JavaScript", "HTML/CSS", "Frontend Development", "Web Accessibility"];

const stackDev = [...homepagePills];

const stackDesign = [
  "Accessibility audit (manual testing)",
  "Keyboard navigation testing",
  "Screen reader testing",
  "Responsive layout testing",
  "WCAG-informed improvements",
];

const finalBuzzerDesktopDemoVimeoUrl = "https://player.vimeo.com/video/1167950430?autoplay=1&muted=1&loop=1&autopause=0&background=1&title=0&byline=0&portrait=0&dnt=1";
const finalBuzzerMobileDemoVimeoUrl = "https://player.vimeo.com/video/1167948538?autoplay=1&muted=1&loop=1&autopause=0&background=1&title=0&byline=0&portrait=0&dnt=1";

export default function FinalBuzzerPage() {
  return (
    <div className="bg-[radial-gradient(circle_at_12%_20%,rgba(182,115,70,0.12),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(217,176,140,0.18),transparent_28%),#f5ede1] text-[#251409] dark:bg-[#221810] dark:text-white">
      <main className="flex min-h-screen flex-col gap-8 px-5 pb-24 pt-6 sm:px-8 sm:pt-8 lg:px-16">
        <ProjectNav />
        {/* <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-4 py-2 text-sm font-semibold text-[#4a3222] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#e2cfbb] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
              href="https://siraajkudtarkar.github.io/the-final-buzzer/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
              <span>View Live Site</span>
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-4 py-2 text-sm font-semibold text-[#4a3222] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#e2cfbb] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
              href="https://github.com/siraajkudtarkar/the-final-buzzer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.43-5.25 5.71.41.35.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              <span>View Repository</span>
            </a>
          </div>
        </div> */}

        <section className="p-8">
          <p className="text-2xl text-center font-bold leading-tight text-[#251409] sm:text-3xl dark:text-white">
            How can students see in real time whether they are actually following their exam prep plan?
          </p>
        </section>

        <header className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-lg shadow-[#251409]/10 backdrop-blur dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">The Final Buzzer</h1>
            <p className="text-sm font-semibold text-[#664834] dark:text-[#c2a88f]">Education</p>
            <p className="text-base leading-7 text-[#4a3222] dark:text-white">
              A React web app that helps students prep for exams with a real-time countdown and a dashboard that compares planned versus actual study time. This project focuses on behavior change: students get constant visual feedback on whether they are executing their plan. I built it on my own for one course, then ran a full accessibility audit on it for a second course.
            </p>

            <HeroMediaPicker
              desktopImage={finalBuzzerDashboard}
              mobileImage={finalBuzzerMobile}
              desktopAlt="The Final Buzzer desktop screenshot"
              mobileAlt="The Final Buzzer mobile screenshot"
              mobileIphoneFrame
            />
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
            <HeroMediaPicker
              desktopImage={finalBuzzerDashboard}
              mobileImage={finalBuzzerMobile}
              desktopAlt="The Final Buzzer desktop demo"
              mobileAlt="The Final Buzzer mobile demo"
              desktopVimeoUrl={finalBuzzerDesktopDemoVimeoUrl}
              mobileVimeoUrl={finalBuzzerMobileDemoVimeoUrl}
              mobileIphoneFrame
            />

            <div className={`grid gap-3 ${demoLinks.length === 1 ? "mx-auto w-full max-w-sm" : "sm:grid-cols-2"}`}>
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
              The project started from one question: how can students see in real time whether they are actually following their exam prep plan? I wanted one project to satisfy two courses: SI 579, which asked for an interactive JavaScript application, and SI 539, which focused on accessibility audits and semantic HTML. The Final Buzzer became both, built for university students who want a visual reminder of their exam deadline and a structured way to track their time, including students who rely on keyboard navigation or screen readers.
            </p>
            <p>
              For SI 579, I built a real time loop so students can compare plan versus actual effort instantly. I shipped the countdown timer, task CRUD, and time tracking controls. A large exam countdown shows the days, hours, and minutes left and updates in real time, students can add, edit, and delete study tasks with a planned time estimate, and every task has Record and Stop buttons that log the actual time spent with timestamps. I added local persistence to preserve study history across sessions and built a dashboard that summarizes workload and real progress, showing each task's planned versus actual time and the total time studied. I deployed the finished app on GitHub Pages.
            </p>
            <p>
              For SI 539, I ran an in-depth accessibility audit of the deployed site using WAVE, axe DevTools, and Chrome, along with manual testing through VoiceOver and keyboard-only navigation. The audit uncovered real problems. VoiceOver could not read anything beyond the logo, and I could not reach everything with just a keyboard, because the page was missing the tab order needed for navigation. The task time fields were missing labels and ARIA attributes, the checkbox and delete icon were nested inside another interactive control, a list used a div instead of a proper list item, and on mobile the button and timer text was too small. Color contrast and image alt text passed.
            </p>
            <p>
              The hardest part was understanding how React interacts with accessibility standards. Unlike static HTML, React builds the page dynamically through JavaScript components, so some problems were not visible until I tested with assistive technology. I spent most of my time researching accessible React development, especially how attributes like aria-label work in components, and then testing my changes by hand. Over the last two weeks of the project, I put in about 19 hours, working through aria-labels, keyboard navigation, VoiceOver support, color contrast, and mobile layout testing. That hands-on testing showed me firsthand the barriers users face and how technical changes translate into real-world usability.
            </p>
          </div>
        </section>

        <section className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-md shadow-[#251409]/8 dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <h2 className="text-lg font-semibold">Outcome</h2>
            <div className="space-y-4 text-base leading-7 text-[#4a3222] dark:text-white">
            <p>
              I shipped timer and workload workflows that convert intention into measurable execution, from planning to time tracking, with the app live on GitHub Pages. I then used my audit to improve labels and structure for assistive technology support, validated keyboard navigation and baseline screen reader behavior, and tested color contrast and the mobile layout. The site is more accessible but not fully accessible yet, and the audit gives me a clear, documented list of what remains. The project strengthened my real time state management and timer architecture and improved how I design for accessibility while shipping quickly.
            </p>
            </div>
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
            href="/wildcat"
          >
            Next Project: Wildcat Fantasy Football
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