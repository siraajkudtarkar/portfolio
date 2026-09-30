import Link from "next/link";
import Image from "next/image";
import SiteFooter from "../SiteFooter";
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

const role = "UX Engineer & Frontend Developer";
const timeline = "January 2026 - May 2026";

const demoLinks = [
  { label: "Project Pitch Video", href: "https://drive.google.com/file/d/17BJfsLLog4mSiyNUqcPTkwzBJLiIofts/view?usp=sharing" },
  { label: "Project Slide Deck", href: "https://docs.google.com/presentation/d/18ARWZVaNEGORFiKSCrK6fc97QlP6dzzzB1V4RKuBdZk/edit?usp=sharing" },
];

const muskegonMobileDemoVimeoUrl = "https://player.vimeo.com/video/1202318773?autoplay=1&muted=1&loop=1&autopause=0&background=1&title=0&byline=0&portrait=0&dnt=1";
const muskegonTabletDemoVimeoUrl = "https://player.vimeo.com/video/1202318788?autoplay=1&muted=1&loop=1&autopause=0&background=1&title=0&byline=0&portrait=0&dnt=1";

const homepagePills = ["React Native", "TypeScript", "Frontend Development", "Expo", "Node", "Cross Collaboration"];

const stackDev = [...homepagePills];

const stackDesign = [
  "Mobile-first layout planning",
  "Tablet breakpoint refinement",
  "Visual storytelling decisions",
];

export default function MuskegonPolishFestivalPage() {
  return (
    <div className="bg-[radial-gradient(circle_at_12%_20%,rgba(182,115,70,0.12),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(217,176,140,0.18),transparent_28%),#f5ede1] text-[#251409] dark:bg-[#221810] dark:text-white">
      <main className="flex min-h-screen flex-col gap-8 px-5 pb-24 pt-6 sm:px-8 sm:pt-8 lg:px-16">
        <ProjectNav />
        {/* <div className="flex flex-wrap items-center justify-between gap-3">
            <a
            className="inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-4 py-2 text-sm font-semibold text-[#4a3222] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#e2cfbb] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
            href="https://github.com/siraajkudtarkar/muskegon-polish-festival"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.43-5.25 5.71.41.35.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            <span>View GitHub</span>
          </a>
        </div> */}

        <section className="p-8">
          <p className="text-2xl text-center font-bold leading-tight text-[#251409] sm:text-3xl dark:text-white">
            How can festival attendees explore Polish heritage through a more engaging digital experience?
          </p>
        </section>

        <header className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-lg shadow-[#251409]/10 backdrop-blur dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">Muskegon Polish Festival Mobile &amp; Tablet Experience</h1>
            <p className="text-sm font-semibold text-[#664834] dark:text-[#c2a88f]">Education</p>
            <p className="text-base leading-7 text-[#4a3222] dark:text-white">
              A festival-focused digital experience that introduces the event, shares Polish heritage, and gives attendees a smoother path through the most important information. It starts with a mobile quiz and leads into a tablet journey with interactive maps and layered cultural content. I was a UX engineer and frontend developer on a five-person team, and I owned the tablet timeline from start to finish.
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="flex items-center justify-center py-2 sm:py-0">
                <IPhoneFrame>
                  <Image src={muskegonMobile} alt="Muskegon mobile screenshot" className="h-full w-full object-cover" />
                </IPhoneFrame>
              </div>

                <div className="hidden sm:flex mt-4 items-center justify-center py-2">
                  <AndroidTabletFrame>
                    <div className="h-full w-full rounded-[1.1rem] bg-[#f7eedf]">
                      <Image
                        src={muskegonTablet}
                        alt="Muskegon tablet screenshot"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </AndroidTabletFrame>
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

        <section className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-md shadow-[#251409]/8 dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <h2 className="text-lg font-semibold">Overview</h2>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Problem Statement</p>
              <p className="text-base text-[#4a3222] dark:text-white">
                Historical information was often presented through static posters that were hard to access, making it difficult for younger visitors to connect with the festival&rsquo;s cultural depth and causing important heritage context to get lost in the event&rsquo;s noise.
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Solution</p>
              <ul className="text-base text-[#4a3222] dark:text-white">
                <li className="flex gap-2">
                  <span>Designed a connected cross-device experience that starts with a mobile quiz and leads into a tablet journey with interactive maps and layered cultural content.</span>
                </li>
                <li className="flex gap-3">
                  <span>Linked playful interaction with deeper exploration so cultural learning feels more intuitive, memorable, and meaningful across generations.</span>
                </li>
              </ul>
            <div className="rounded-2xl">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Experience Flow</h2>
            <Image
              src={muskegonFlow}
              alt="Muskegon festival experience flow"
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>
        </section>

        <section className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-inner shadow-[#251409]/6 dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <h2 className="text-lg font-semibold">Demo</h2>
          <div className="flex flex-col">
            <div className="sm:hidden space-y-4">
                <div className="!max-w-[400px] aspect-[5/3] rounded-2xl overflow-hidden">
                  <VimeoEmbed
                    src={muskegonMobileDemoVimeoUrl}
                    title="Muskegon mobile demo"
                    className="h-full w-full"
                    iframeClassName="h-full w-full"
                    cover
                  />
                </div>
                <div className="w-[min(72vw,380px)] aspect-[5/3] rounded-2xl overflow-hidden">
                  <VimeoEmbed
                    src={muskegonTabletDemoVimeoUrl}
                    title="Muskegon tablet demo"
                    className="h-full w-full"
                    iframeClassName="h-full w-full"
                    cover
                  />
                </div>
            </div>

            <div className="hidden sm:flex sm:flex-wrap sm:items-end sm:justify-center sm:gap-6 mb-12">
              <div className="flex items-end justify-center py-2 sm:py-0">
                <IPhoneFrame className="!h-[600px] !w-auto !max-w-none" screenClassName="bg-[#f7eedf]">
                  <VimeoEmbed
                    src={muskegonMobileDemoVimeoUrl}
                    title="Muskegon mobile demo"
                    className="h-full w-full"
                    iframeClassName="h-full w-full"
                    cover
                  />
                </IPhoneFrame>
              </div>

              <div className="flex items-end justify-center py-2 sm:py-0">
                <AndroidTabletFrame className="!h-[600px] !w-auto !max-w-none" screenClassName="bg-[#f7eedf]">
                  <div className="h-full w-full overflow-hidden rounded-[1.15rem] bg-[#f7eedf]">
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
              Historical information at the Muskegon Polish Festival was often presented through static posters that were hard to access, making it difficult for younger visitors to connect with the festival's cultural depth. Younger visitors came mostly for the food and music, so history was getting lost in the noise. For our client, it was also a memorial project for their father. Our team inherited Figma designs from a previous design team and designed a connected cross-device experience with two parts: a five-question mobile quiz that visitors reach by QR code while waiting in line, which matches them to a "Polish history guide," and an interactive timeline and map on the festival's Android tablets that the guide shapes. We demoed our work to the client every two weeks at the end of each sprint, and their vision grew over the project from basic utility toward high-impact immersion.
            </p>
            <p>
              I focused mainly on the tablet experience, with some work on the mobile version, and I owned the tablet timeline and map page from start to finish. Smoothing out the timeline was one of our client's top priorities at kickoff. The design prototype felt jerky, it split history across four separate sliders that you clicked through with arrows, and it spaced years evenly even though the gaps between them varied. Working from our design meeting with the original designers, I replaced the four sliders with one continuous slider and built the timeline component so users can drag through the experience with an easy, fluid motion, keeping arrows to change which range of years is shown. I also spaced the years proportionally so the distance between them reflects how much time actually passed. The team counted that proportional timeline as one of our breakthroughs. I created the tablet timeline and map page with the year, era, border changes, hotspots, and event descriptions, and linked each point on the timeline to deeper content pages that expand on key moments in Polish history. When I first demoed the timeline, our client loved it.
            </p>
            <p>
              A lot of my work was about building for people who would never touch the code. Our client plans to hire a content writer to fill in the exact events and historical details, so I built the timeline as a flexible content template with a basic starting idea rather than a finished set of information. When era descriptions were missing, I flagged them to the client and kept placeholders in place so development could keep moving. I also turned the team's UI/UX mockups into usable frontend components for the tablet app, with color schemes that support readability and contrast while keeping the experience welcoming. To work in parallel without breaking each other's code, our team built shared global styles first, split the app into modular components, and paired every pull request with a merge partner for review.
            </p>
            <p>
              The sprint reviews shaped a lot of my thinking. When the team discussed adding a timer to end each visitor's journey, I raised a concern about putting time pressure on visitors and suggested a simple reset option that festival staff could use to start the experience over for the next person. Our client worried a button would add clutter, which led to the idea of a small reload icon on the guide page instead. I also suggested pairing the popup that appears when a visitor starts their guide with a help button that brings the same information back up later. Working on a touch device taught me how precious screen space is, since every element on screen had to earn its place.
            </p>
            <p>
              The biggest lesson from the project was about cohesion. We followed our Figma designs closely, and the quiz and the timeline map each worked well on their own, but late in development both our team and our client felt something was missing: they felt like two separate tools. My teammates added transition pages, a guide reveal, and an onboarding step into the map, and our client was thrilled with the result. Seeing that change taught me that cohesion matters as much as any individual screen, and that not limiting ourselves to the original design is what brought the project to life.
            </p>
          </div>
        </section>

        <section className="mt-4 space-y-4 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-8 shadow-md shadow-[#251409]/8 dark:border-[#3e2d20] dark:bg-[#221810]/85">
          <h2 className="text-lg font-semibold">Outcome</h2>
          <div className="space-y-4 text-base leading-7 text-[#4a3222] dark:text-white">
            <p>
              Over five sprints, our team completed 313 story points across 88 tasks and delivered both halves of the experience. The mobile quiz runs as a web app on Vercel that visitors reach by scanning a QR code, and the tablet experience installs directly onto the festival's Android tablets through Expo, without going through the Play Store. Because the app will keep running after our team is gone, we also handed off a step-by-step maintenance guide that lets the festival's non-technical team and a future tech intern update quiz questions, guides, timeline years, maps, and content without rewriting the app.
            </p>
            <p>
              Our client loved the timeline and was thrilled with the final, connected experience. The project won the Final Project Award for User-Centered Agile Development at the UMSI Exposition for "Cultural and Educational Interactive Experience for Polish Festival Visitors," and it is set to debut at the Muskegon Polish Festival in September 2026.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl p-4">
            <div className="mx-auto w-fit overflow-hidden rounded-xl">
              <Image
                src={expositionWinner}
                alt="Exposition Winner"
                className="block h-auto max-w-[800px] object-contain"
              />
            </div>
            <p className="text-sm text-center text-[#4a3222] dark:text-white">
              Team: Samantha Pratt, Boran Yang, Xiwen Cao, Siraaj Kudtarkar, Jonte Taffe (not pictured) <br/> SI 699 User-Centered Agile Development Mastery Course
            </p>
          </div>
        </section>

        <div className="mt-8 mb-8 flex flex-wrap gap-3 text-base font-semibold">
          <Link className="inline-flex items-center gap-2 rounded-full border border-[#6f3f20] bg-[#7a3f22] px-6 py-3 text-white shadow-md shadow-[#251409]/20 transition hover:-translate-y-0.5 hover:bg-[#5c3119] hover:text-white hover:shadow-lg hover:shadow-[#251409]/30 dark:border-[#dfceb6] dark:bg-[#f5e6d6] dark:text-[#251409] dark:hover:bg-[#dfceb6] dark:hover:text-[#251409]" href="/#contact">
            Questions? Contact me
          </Link>
          <Link
            className="ml-auto inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-6 py-3 text-[#4a3222] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#f5e6d6] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
            href="/finalbuzzer"
          >
            Next Project: The Final Buzzer
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
