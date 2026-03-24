"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type FormEvent, type MouseEvent } from "react";
import SiteFooter from "./SiteFooter";
import IPhoneFrame from "./IPhoneFrame";
import { useTheme } from "./ThemeProvider";
import VimeoEmbed from "./VimeoEmbed";

const codiDemoUrl = "https://player.vimeo.com/video/1167947118?autoplay=1&muted=1&loop=1&autopause=0&background=1";
const finalBuzzerDemoUrl = "https://player.vimeo.com/video/1167948538?autoplay=1&muted=1&loop=1&autopause=0&background=1";
const wildcatDemoUrl = "https://player.vimeo.com/video/1167948725?autoplay=1&muted=1&loop=1&autopause=0&background=1";
const meTimeDemoUrl = "https://player.vimeo.com/video/1167950147?autoplay=1&muted=1&loop=1&autopause=0&background=1";

type ProjectOverlayState = {
  href: string;
  title: string;
};

const projects = [
  {
    title: "Codi",
    productType: "healthcare",
    summary: "Designed a collaborative mobile application for children with diabetes and parents supported by a University of Michigan-backed research study.",
    stack: ["React Native", "TypeScript", "Firebase", "OpenAI", "Expo", "Node", "Frontend Development", "Full-Stack Development", "UX Design & Research", "Cross Collaboration"],
    link: "/codi",
  },
  {
    title: "The Final Buzzer",
    productType: "Education",
    summary: "Built a web application with a real-time exam countdown and dashboard so students can compare planned vs. actual study time and stay on track.",
    stack: ["React", "Node", "JavaScript", "HTML/CSS", "Frontend Development", "Web Accessibility"],
    link: "/finalbuzzer",
  },
  {
    title: "Wildcat Fantasy Football",
    productType: "Sports & Entertainment",
    summary: "Created a fantasy football mobile application with a unique and unpredictable twist: betting on your players to win big or lose big, adding creativity, strategy, and risk-taking.",
    stack: ["React Native", "JavaScript", "Express", "Expo", "MongoDB", "Node", "REST APIs", "Frontend Development", "Full-Stack Development"],
    link: "/wildcat",
  },
  {
    title: "MeTime",
    productType: "health & wellness",
    summary: "Developed a solution for sustainable wellness habits among busy students — won Boston University's Catalyst Designathon and the UCR Blackstone Launchpad Ideas Competition.",
    stack: ["Figma", "UI/UX Design", "UX Research", "Next.js", "JavaScript", "HTML/CSS", "Google Cloud API", "MongoDB", "Cross Collaboration"],
    link: "/metime",
  },
];

const skills = [
  "Frontend Development",
  "Full-Stack Development",
  "UI/UX Design",
  "UX Research",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Next.js",
  "Node",
  "HTML/CSS",
  "Express",
  "C/C++",
  "REST APIs",
  "Python",
  "Firebase",
  "MongoDB",
  "Cross Collaboration",
  "Web Accessibility",
];

const topRowSkills = skills.slice(0, 6);
const bottomRowSkills = skills.slice(6);

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("home");
  const [isProfessional, setIsProfessional] = useState(true);
  const [projectOverlay, setProjectOverlay] = useState<ProjectOverlayState | null>(null);
  const [tappedProjectCard, setTappedProjectCard] = useState<"wildcat" | "metime" | null>(null);
  const [isTouchPreviewDevice, setIsTouchPreviewDevice] = useState(false);
  const [activeSkills, setActiveSkills] = useState<string[]>([]);
  const [contactSubmitState, setContactSubmitState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const ids = ["home", "work", "about", "contact"];

    const updateActiveSection = () => {
      const offset = window.innerWidth < 640 ? 150 : 180;
      let currentSection = ids[0];

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top - offset;
        if (top <= 0) currentSection = id;
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const navItemBaseClass = "inline-flex w-full items-center justify-center rounded-full px-4 py-2 transition hover:-translate-y-0.5 hover:bg-[#f6ebdf] dark:hover:bg-[#2a1b12]";

  const navLinkClass = (id: string) =>
    [
      navItemBaseClass,
      activeSection === id ? "border border-[#c9a988] bg-[#f6ebdf] dark:border-[#5a3e2c] dark:bg-[#2a1b12]" : "border border-transparent",
    ].join(" ");

  useEffect(() => {
    if (!projectOverlay) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProjectOverlay(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [projectOverlay]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");

    const updateTouchPreviewMode = () => {
      const enabled = mediaQuery.matches;
      setIsTouchPreviewDevice(enabled);
      if (!enabled) {
        setTappedProjectCard(null);
      }
    };

    updateTouchPreviewMode();
    mediaQuery.addEventListener("change", updateTouchPreviewMode);

    return () => {
      mediaQuery.removeEventListener("change", updateTouchPreviewMode);
    };
  }, []);

  const handleProjectNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string, title: string) => {
    const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouchDevice) {
      return;
    }

    event.preventDefault();
    if (projectOverlay) return;

    setProjectOverlay({
      href,
      title,
    });
  };

  const toggleActiveSkill = (skill: string) => {
    setActiveSkills((current) =>
      current.includes(skill) ? current.filter((item) => item !== skill) : [...current, skill],
    );
  };

  const clearActiveSkills = () => {
    setActiveSkills([]);
  };

  const isSkillHighlighted = (skill: string) => activeSkills.includes(skill);

  const getProjectSkillPillClass = (tech: string) => {
    if (isSkillHighlighted(tech)) {
      return "bg-[#9d5e34] text-white dark:bg-[#f7ede4] dark:text-[#2e1c10]";
    }

    if (activeSkills.length > 0) {
      return "bg-[#f6ebdf]/55 text-[#7a5a42] dark:bg-[#2a1b12]/55 dark:text-[#cbb8aa]";
    }

    return "bg-[#f6ebdf] text-[#2e1c10] dark:bg-[#2a1b12] dark:text-[#f7ede4]";
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (contactSubmitState === "sending") return;

    setContactSubmitState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      form.reset();
      setContactSubmitState("sent");
      window.setTimeout(() => setContactSubmitState("idle"), 3200);
    } catch {
      setContactSubmitState("error");
      window.setTimeout(() => setContactSubmitState("idle"), 4000);
    }
  };

  const codiProject = projects[0];
  const finalBuzzerProject = projects[1];
  const wildcatProject = projects[2];
  const meTimeProject = projects[3];

  return (
    <div id="top" className="bg-[radial-gradient(circle_at_12%_20%,rgba(182,115,70,0.12),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(217,176,140,0.18),transparent_28%),#f9f4ec] text-[#2e1c10] dark:bg-[#110b07] dark:text-[#f7ede4]">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-5 pb-24 pt-6 sm:px-8 sm:pt-8 lg:px-16">
        <nav className="sticky top-4 z-30 flex flex-col gap-3 rounded-2xl border border-[#e6d8c8] bg-[#fffbf7]/90 px-4 py-3 shadow-md shadow-[#2e1c10]/10 backdrop-blur dark:border-[#3b2a1f] dark:bg-[#1a120c]/85 dark:text-[#f7ede4]">
          <div className="flex items-center justify-between gap-3">
            <a className="text-lg font-semibold tracking-tight" href="#top">
              Siraaj Kudtarkar
            </a>
            <div className="flex items-center gap-2">
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#e6d8c8] bg-[#fffbf7] p-2 text-[#5a4030] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:bg-[#1a120c] dark:text-[#f7ede4] dark:hover:border-[#5a3e2c] dark:hover:bg-[#2a1b12]"
                href="https://github.com/siraajkudtarkar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.43-5.25 5.71.41.35.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#e6d8c8] bg-[#fffbf7] p-2 text-[#5a4030] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:bg-[#1a120c] dark:text-[#f7ede4] dark:hover:border-[#5a3e2c] dark:hover:bg-[#2a1b12]"
                href="https://www.linkedin.com/in/siraaj-kudtarkar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.98h3.96V21H3V8.98Zm6.74 0H14v1.65h.06c.42-.8 1.44-1.65 2.96-1.65C20.12 8.98 21 11 21 14.13V21h-3.96v-6.06c0-1.45-.03-3.3-2.01-3.3-2.02 0-2.33 1.58-2.33 3.2V21H8.74V8.98Z" />
                </svg>
              </a>
              <div className="flex items-center gap-1 rounded-full border border-[#e6d8c8] bg-[#fffbf7] px-1.5 py-1 shadow-sm dark:border-[#3b2a1f] dark:bg-[#1a120c]">
                {(["light", "dark", "system"] as const).map((mode) => {
                  const active = theme === mode;
                  const label = mode === "light" ? "Light mode" : mode === "dark" ? "Dark mode" : "System setting";
                  const icon = mode === "light"
                    ? (
                        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                          <circle cx="12" cy="12" r="4.2" />
                          <path d="M12 3v2.1M12 18.9V21M4.5 12H6.6M17.4 12h2.1M6.05 6.05l1.49 1.49M16.46 16.46l1.49 1.49M6.05 17.95l1.49-1.49M16.46 7.54l1.49-1.49" />
                        </svg>
                      )
                    : mode === "dark"
                    ? (
                        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19.5 15.5A7.5 7.5 0 0 1 9 5a7.5 7.5 0 1 0 10.5 10.5Z" />
                        </svg>
                      )
                    : (
                        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                          <rect x="4" y="5" width="16" height="12" rx="1.6" />
                          <path d="M9.5 19h5M12 17v2" />
                        </svg>
                      );
                  return (
                    <button
                      key={mode}
                      type="button"
                      className={`flex items-center justify-center rounded-full p-2 transition ${
                        active
                          ? "bg-[#9d5e34] text-white shadow-inner shadow-[#2e1c10]/15"
                          : "text-[#5a4030] hover:bg-[#f6ebdf] dark:text-[#f7ede4] dark:hover:bg-[#2a1b12]"
                      }`}
                      aria-label={label}
                      title={label}
                      onClick={() => setTheme(mode)}
                    >
                      {icon}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 text-sm font-semibold">
            <a className={navLinkClass("home")} href="#top">
              Home
            </a>
            <a className={navLinkClass("work")} href="#work">
              Work
            </a>
            <a className={navLinkClass("about")} href="#about">
              About
            </a>
            <a className={navLinkClass("contact")} href="#contact">
              Contact
            </a>
            <a
              className={`${navItemBaseClass} border border-transparent`}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </nav>

        <header
          id="home"
          className="flex flex-col gap-6 rounded-3xl border border-[#e6d8c8] bg-[#fffbf7]/90 p-8 shadow-lg shadow-[#2e1c10]/8 backdrop-blur sm:gap-10 dark:border-[#3b2a1f] dark:bg-[#1a120c]/85 dark:text-[#f7ede4]"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e6d8c8] bg-[#f6ebdf] px-3 py-1 text-xs font-semibold text-[#5a4030] dark:border-[#3b2a1f] dark:bg-[#2a1b12] dark:text-[#e4d4c6]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-6-5.6-6-10a6 6 0 1 1 12 0c0 4.4-6 10-6 10Z" />
                <circle cx="12" cy="11" r="2.2" />
              </svg>
              Ann Arbor, MI <span aria-hidden>•</span> Willing to Relocate
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
              <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center" aria-hidden>
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full border border-emerald-400/70"
                  initial={{ opacity: 0.22, scale: 0.88 }}
                  animate={{ opacity: [0.22, 0.68, 0.22], scale: [0.88, 1.2, 0.88] }}
                  transition={{ duration: 2.2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.span
                  className="relative h-2 w-2 rounded-full bg-emerald-500"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
                />
              </span>
              Open to Work
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-6">
              <div className="h-80 w-80 rounded-3xl border border-[#e6d8c8] bg-[#fffdf9] p-2 shadow-inner shadow-[#2e1c10]/6 sm:h-[22rem] sm:w-[22rem] dark:border-[#3b2a1f] dark:bg-[#24160d]">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/headshot_edited.png"
                    alt="Portrait of Siraaj Kudtarkar"
                    fill
                    sizes="(max-width: 640px) 320px, 352px"
                    className="object-cover object-top scale-110"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#7a5a42] dark:text-[#d7c4b6]">Hi there! 👋🏾</p>
                </div>
                <h1 className="text-3xl font-semibold sm:text-4xl">Siraaj Kudtarkar</h1>
                <p className="text-lg text-[#5a4030] dark:text-[#e4d4c6]">
                  I’m a UX Engineer focused on educational and health software technologies, and I am open to roles in UX, product, and software engineering.
                </p>
                <div className="pt-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a5a42] dark:text-[#d7c4b6]">Education</p>
                  <div className="mt-2 space-y-2.5">
                    <div className="flex items-start gap-2">
                      <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#8a4a2b]" aria-hidden />
                      <p>M.S. in Information Science at University of Michigan, specializing in User-Centric Agile Development (Expected May 2026)</p>
                    </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#b36b3f]" aria-hidden />
                    <p>B.S. in Computer Science at UC Riverside (Graduated Sept. 2023)</p>
                  </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto inline-grid w-fit grid-cols-2 gap-2 text-sm font-semibold text-[#5a4030] dark:text-[#e4d4c6]">
                <a className="col-span-2 inline-flex w-full items-center justify-center rounded-full bg-[#9d5e34] px-5 py-2 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#7f4b28] hover:text-white hover:shadow-lg hover:shadow-[#2e1c10]/20 dark:bg-[#f7ede4] dark:text-[#2e1c10] dark:hover:bg-[#e6d8c8] dark:hover:text-[#2e1c10]" href="#work">
                  View Work
                </a>
                <a className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e6d8c8] px-4 py-2 transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:hover:border-[#5a3e2c] dark:hover:bg-[#2a1b12]" href="https://github.com/siraajkudtarkar" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.43-5.25 5.71.41.35.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
                  <span>GitHub</span>
                </a>
                <a className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e6d8c8] px-4 py-2 transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:hover:border-[#5a3e2c] dark:hover:bg-[#2a1b12]" href="https://www.linkedin.com/in/siraaj-kudtarkar" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.98h3.96V21H3V8.98Zm6.74 0H14v1.65h.06c.42-.8 1.44-1.65 2.96-1.65C20.12 8.98 21 11 21 14.13V21h-3.96v-6.06c0-1.45-.03-3.3-2.01-3.3-2.02 0-2.33 1.58-2.33 3.2V21H8.74V8.98Z"/></svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#e6d8c8] bg-[#fffcf8]/95 p-6 shadow-inner shadow-[#2e1c10]/6 dark:border-[#3b2a1f] dark:bg-[#1f130c]">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5a42] dark:text-[#d7c4b6]">Skills</p>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-medium text-[#8b6a54] dark:text-[#cbb8aa]">Click to Highlight Skills in Projects</span>
                {activeSkills.length > 0 ? (
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full border border-[#d7c2ad] bg-[#fffbf7] px-3 py-1 text-xs font-semibold text-[#6b4b35] transition hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#5a3e2c] dark:bg-[#1a120c] dark:text-[#e4d4c6] dark:hover:bg-[#2a1b12]"
                    onClick={clearActiveSkills}
                  >
                    Clear
                  </button>
                ) : null}
              </div>
            </div>
            <div className="space-y-3 text-sm text-[#5a4030] dark:text-[#e4d4c6]">
              <div className="overflow-hidden">
                <motion.div
                  className="flex w-max items-center gap-3 pr-3"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { x: ["0%", "-50%"] }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 32,
                          ease: "linear",
                          repeat: Number.POSITIVE_INFINITY,
                        }
                  }
                >
                  {[...topRowSkills, ...topRowSkills].map((skill, index) => (
                    <button
                      key={`top-${skill}-${index}`}
                      type="button"
                      aria-pressed={isSkillHighlighted(skill)}
                      onClick={() => toggleActiveSkill(skill)}
                      className={`whitespace-nowrap rounded-full px-3 py-1 font-medium transition ${
                        isSkillHighlighted(skill)
                          ? "bg-[#9d5e34] text-white dark:bg-[#f7ede4] dark:text-[#2e1c10]"
                          : "bg-[#f6ebdf] text-[#2e1c10] hover:bg-[#ead9c8] dark:bg-[#2a1b12] dark:text-[#f7ede4] dark:hover:bg-[#3a2618]"
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  className="flex w-max items-center gap-3 pr-3"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { x: ["-50%", "0%"] }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 32,
                          ease: "linear",
                          repeat: Number.POSITIVE_INFINITY,
                        }
                  }
                >
                  {[...bottomRowSkills, ...bottomRowSkills].map((skill, index) => (
                    <button
                      key={`bottom-${skill}-${index}`}
                      type="button"
                      aria-pressed={isSkillHighlighted(skill)}
                      onClick={() => toggleActiveSkill(skill)}
                      className={`whitespace-nowrap rounded-full px-3 py-1 font-medium transition ${
                        isSkillHighlighted(skill)
                          ? "bg-[#9d5e34] text-white dark:bg-[#f7ede4] dark:text-[#2e1c10]"
                          : "bg-[#f6ebdf] text-[#2e1c10] hover:bg-[#ead9c8] dark:bg-[#2a1b12] dark:text-[#f7ede4] dark:hover:bg-[#3a2618]"
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </header>

        <section id="work" className="scroll-mt-24 space-y-8 rounded-3xl border border-[#e6d8c8] bg-[#fffbf7]/95 p-10 shadow-lg shadow-[#2e1c10]/8 backdrop-blur dark:border-[#3b2a1f] dark:bg-[#1a120c]/85 dark:text-[#f7ede4]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base uppercase tracking-[0.24em] text-[#7a5a42] dark:text-[#d7c4b6]">Work</p>
              <h2 className="mt-2 text-3xl font-semibold">Featured Projects</h2>
            </div>
          </div>

          <div className="space-y-8">
            <article className="group rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2e1c10]/15 dark:border-[#3b2a1f] dark:bg-[#24160d]">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="mx-auto flex min-h-[446px] max-w-[760px] items-center justify-center p-2 pb-3 pt-2 sm:min-h-[460px] sm:p-4 sm:pb-16 sm:pt-4">
                  <IPhoneFrame className="max-w-[196px] sm:max-w-[190px]">
                    <VimeoEmbed
                      src={codiDemoUrl}
                      title="Codi demo"
                      className="h-full w-full"
                      iframeClassName="h-full w-full"
                      cover
                    />
                  </IPhoneFrame>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#2e1c10] transition group-hover:text-[#8a4a2b] dark:text-[#f7ede4] dark:group-hover:text-[#c58c5c]">{codiProject.title}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7a5a42] dark:text-[#cbb8aa]">{codiProject.productType}</p>
                  <p className="text-base leading-7 text-[#5a4030] dark:text-[#e4d4c6]">{codiProject.summary}</p>
                  <div className="flex flex-wrap gap-2.5 text-sm font-semibold text-[#5a4030] dark:text-[#e4d4c6]">
                    {codiProject.stack.map((tech) => (
                      <span key={tech} className={`rounded-full px-3.5 py-1.5 ${getProjectSkillPillClass(tech)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-end text-base font-semibold text-[#8a4a2b] dark:text-[#c58c5c]">
                    <a className="inline-flex items-center gap-2 rounded-full px-3 py-2 transition group-hover:translate-x-1" href={codiProject.link} onClick={(event) => handleProjectNavigation(event, codiProject.link, codiProject.title)}>
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article className="group rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2e1c10]/15 dark:border-[#3b2a1f] dark:bg-[#24160d]">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="mx-auto flex min-h-[446px] max-w-[760px] items-center justify-center p-2 pb-3 pt-2 sm:min-h-[460px] sm:p-4 sm:pb-16 sm:pt-4">
                  <IPhoneFrame className="max-w-[196px] sm:max-w-[190px]">
                    <VimeoEmbed
                      src={finalBuzzerDemoUrl}
                      title="The Final Buzzer mobile demo"
                      className="h-full w-full"
                      iframeClassName="h-full w-full"
                      cover
                    />
                  </IPhoneFrame>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#2e1c10] transition group-hover:text-[#8a4a2b] dark:text-[#f7ede4] dark:group-hover:text-[#c58c5c]">{finalBuzzerProject.title}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7a5a42] dark:text-[#cbb8aa]">{finalBuzzerProject.productType}</p>
                  <p className="text-base leading-7 text-[#5a4030] dark:text-[#e4d4c6]">{finalBuzzerProject.summary}</p>
                  <div className="flex flex-wrap gap-2.5 text-sm font-semibold text-[#5a4030] dark:text-[#e4d4c6]">
                    {finalBuzzerProject.stack.map((tech) => (
                      <span key={tech} className={`rounded-full px-3.5 py-1.5 ${getProjectSkillPillClass(tech)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-end text-base font-semibold text-[#8a4a2b] dark:text-[#c58c5c]">
                    <a className="inline-flex items-center gap-2 rounded-full px-3 py-2 transition group-hover:translate-x-1" href={finalBuzzerProject.link} onClick={(event) => handleProjectNavigation(event, finalBuzzerProject.link, finalBuzzerProject.title)}>
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-8 lg:grid-cols-2">
              <article
                className="group relative cursor-pointer overflow-visible rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2e1c10]/15 sm:overflow-hidden dark:border-[#3b2a1f] dark:bg-[#24160d]"
                onClick={() => {
                  if (!isTouchPreviewDevice) return;
                  setTappedProjectCard((current) => (current === "wildcat" ? null : "wildcat"));
                }}
              >
                <div
                  className={`relative z-10 flex min-h-[560px] flex-col p-8 pb-24 transition duration-300 group-hover:opacity-0 sm:min-h-[480px] ${
                    isTouchPreviewDevice && tappedProjectCard === "wildcat" ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-[#2e1c10] dark:text-[#f7ede4]">{wildcatProject.title}</h3>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7a5a42] dark:text-[#cbb8aa]">{wildcatProject.productType}</p>
                    <p className="text-base leading-7 text-[#5a4030] dark:text-[#e4d4c6]">{wildcatProject.summary}</p>
                    <div className="flex flex-wrap gap-2.5 text-sm font-semibold text-[#5a4030] dark:text-[#e4d4c6]">
                      {wildcatProject.stack.map((tech) => (
                        <span key={tech} className={`rounded-full px-3.5 py-1.5 ${getProjectSkillPillClass(tech)}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-end gap-3 p-6 text-base font-semibold text-[#8a4a2b] dark:text-[#c58c5c]">
                    <p className="mr-auto text-xs font-medium text-[#7a5a42] dark:text-[#d7c4b6] sm:hidden">Tap to preview</p>
                    <a className="pointer-events-auto inline-flex items-center gap-2 rounded-full px-3 py-2 transition hover:translate-x-1" href={wildcatProject.link} onClick={(event) => {
                      event.stopPropagation();
                      handleProjectNavigation(event, wildcatProject.link, wildcatProject.title);
                    }}>
                      Read more
                    </a>
                  </div>
                </div>
                <div className={`pointer-events-none absolute inset-0 flex items-center justify-center p-4 transition duration-300 group-hover:opacity-100 sm:p-6 ${
                  isTouchPreviewDevice && tappedProjectCard === "wildcat" ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="flex h-full w-full items-center justify-center pb-24 pt-6 sm:pb-16 sm:pt-0">
                    <IPhoneFrame className="max-w-[196px] sm:max-w-[190px]">
                      <VimeoEmbed
                        src={wildcatDemoUrl}
                        title="Wildcat Fantasy Football demo"
                        className="h-full w-full"
                        iframeClassName="h-full w-full"
                        cover
                      />
                    </IPhoneFrame>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center justify-end text-base font-semibold text-[#8a4a2b] dark:text-[#c58c5c]">
                      <p className="mr-auto text-xs font-medium text-[#7a5a42] dark:text-[#d7c4b6] sm:hidden">Tap for details</p>
                      <a className="pointer-events-auto inline-flex items-center gap-2 rounded-full px-3 py-2 transition hover:translate-x-1" href={wildcatProject.link} onClick={(event) => {
                        event.stopPropagation();
                        handleProjectNavigation(event, wildcatProject.link, wildcatProject.title);
                      }}>
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              <article
                className="group relative cursor-pointer overflow-visible rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2e1c10]/15 sm:overflow-hidden dark:border-[#3b2a1f] dark:bg-[#24160d]"
                onClick={() => {
                  if (!isTouchPreviewDevice) return;
                  setTappedProjectCard((current) => (current === "metime" ? null : "metime"));
                }}
              >
                <div
                  className={`relative z-10 flex min-h-[560px] flex-col p-8 pb-24 transition duration-300 group-hover:opacity-0 sm:min-h-[480px] ${
                    isTouchPreviewDevice && tappedProjectCard === "metime" ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-[#2e1c10] dark:text-[#f7ede4]">{meTimeProject.title}</h3>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7a5a42] dark:text-[#cbb8aa]">{meTimeProject.productType}</p>
                    <p className="text-base leading-7 text-[#5a4030] dark:text-[#e4d4c6]">{meTimeProject.summary}</p>
                    <div className="flex flex-wrap gap-2.5 text-sm font-semibold text-[#5a4030] dark:text-[#e4d4c6]">
                      {meTimeProject.stack.map((tech) => (
                        <span key={tech} className={`rounded-full px-3.5 py-1.5 ${getProjectSkillPillClass(tech)}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-end gap-3 p-6 text-base font-semibold text-[#8a4a2b] dark:text-[#c58c5c]">
                    <p className="mr-auto text-xs font-medium text-[#7a5a42] dark:text-[#d7c4b6] sm:hidden">Tap to preview</p>
                    <a className="pointer-events-auto inline-flex items-center gap-2 rounded-full px-3 py-2 transition hover:translate-x-1" href={meTimeProject.link} onClick={(event) => {
                      event.stopPropagation();
                      handleProjectNavigation(event, meTimeProject.link, meTimeProject.title);
                    }}>
                      Read more
                    </a>
                  </div>
                </div>
                <div className={`pointer-events-none absolute inset-0 flex items-center justify-center p-4 transition duration-300 group-hover:opacity-100 sm:p-6 ${
                  isTouchPreviewDevice && tappedProjectCard === "metime" ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="flex h-full w-full items-center justify-center pb-24 pt-6 sm:pb-16 sm:pt-0">
                    <IPhoneFrame className="max-w-[196px] sm:max-w-[190px]">
                      <VimeoEmbed
                        src={meTimeDemoUrl}
                        title="MeTime demo"
                        className="h-full w-full"
                        iframeClassName="h-full w-full"
                        cover
                      />
                    </IPhoneFrame>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center justify-end text-base font-semibold text-[#8a4a2b] dark:text-[#c58c5c]">
                      <p className="mr-auto text-xs font-medium text-[#7a5a42] dark:text-[#d7c4b6] sm:hidden">Tap for info</p>
                      <a className="pointer-events-auto inline-flex items-center gap-2 rounded-full px-3 py-2 transition hover:translate-x-1" href={meTimeProject.link} onClick={(event) => {
                        event.stopPropagation();
                        handleProjectNavigation(event, meTimeProject.link, meTimeProject.title);
                      }}>
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 rounded-3xl border border-[#e6d8c8] bg-[#fffbf7]/90 p-8 shadow-lg shadow-[#2e1c10]/8 backdrop-blur dark:border-[#3b2a1f] dark:bg-[#1a120c]/85 dark:text-[#f7ede4]">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-[#7a5a42] dark:text-[#d7c4b6]">About</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="order-1 grid w-full grid-cols-2 overflow-hidden rounded-full border border-[#e6d8c8] bg-[#fffbf7] text-xs font-semibold text-[#5a4030] shadow-sm dark:border-[#3b2a1f] dark:bg-[#1a120c] dark:text-[#f7ede4] sm:order-2 sm:inline-flex sm:w-auto">
                <button
                  type="button"
                  aria-pressed={isProfessional}
                  className={`flex w-full items-center justify-center gap-2 whitespace-nowrap px-4 py-2 transition ${
                    isProfessional
                      ? "bg-[#9d5e34] text-white shadow-inner shadow-[#2e1c10]/20 dark:bg-[#9d5e34] dark:text-white"
                      : "text-[#5a4030] hover:bg-[#f6ebdf] dark:text-[#d7c4b6] dark:hover:bg-[#2a1b12]"
                  }`}
                  onClick={() => setIsProfessional(true)}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M9 5c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1h3.5A1.5 1.5 0 0 1 20 7.5v1.88l-8 3.2-8-3.2V7.5A1.5 1.5 0 0 1 4.5 6H8V5Zm2 1h2V6h-2v.01ZM4 10.46l7.65 3.06a1.5 1.5 0 0 0 1.1 0L20 10.46V16.5A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5v-6.04Z"/></svg>
                  <span>Professional</span>
                </button>
                <button
                  type="button"
                  aria-pressed={!isProfessional}
                  className={`flex w-full items-center justify-center gap-2 whitespace-nowrap px-4 py-2 transition ${
                    !isProfessional
                      ? "bg-[#2e1c10] text-[#f7ede4] shadow-inner shadow-[#000]/20 dark:bg-[#f7ede4] dark:text-[#2e1c10]"
                      : "text-[#5a4030] hover:bg-[#f6ebdf] dark:text-[#d7c4b6] dark:hover:bg-[#2a1b12]"
                  }`}
                  onClick={() => setIsProfessional(false)}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 12.75a3.75 3.75 0 1 0-3.75-3.75A3.75 3.75 0 0 0 12 12.75Zm0 2.25c-3 0-5.5 1.68-5.5 3.75 0 .55.45 1 1 1h9c.55 0 1-.45 1-1 0-2.07-2.5-3.75-5.5-3.75Z"/></svg>
                  <span>Personal</span>
                </button>
              </div>
              <h2 className="order-2 flex items-center gap-2 text-2xl font-semibold sm:order-1">
                {isProfessional ? (
                  "Design-oriented engineer 👨‍💻"
                ) : (
                  <>
                    <span>Just a chill guy</span>
                      <Image
                        src="/chillguy_nobg.png"
                        alt="Chill guy"
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full border border-[#c9a988] bg-[#fff7ef] p-1 object-contain shadow-sm dark:border-[#c58c5c] dark:bg-white"
                      />
                  </>
                )}
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="space-y-3">
              {/* <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a5a42] dark:text-[#d7c4b6]">Who I am:</p> */}
              <p className="text-base leading-7 text-[#5a4030] dark:text-[#e4d4c6]">
                {isProfessional
                  ? "I enjoy building research-driven, accessible digital products that bridge design and engineering."
                  : "In my spare time, I love reading, weight lifting, and playing tennis. I also express my creative side through cooking and music. If you're reading this, feel free to reach out and send me a message!"}
              </p>
            </div>
            <div className="space-y-3 text-sm text-[#5a4030] dark:text-[#e4d4c6]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a5a42] dark:text-[#d7c4b6]">{isProfessional ? "What I do for work" : "What I do for fun"}</p>
              {isProfessional ? (
                <>
                  <div className="flex items-start gap-2">
                    <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#8a4a2b]" aria-hidden />
                    <p>UX Engineering & Front-End Development (React, React Native, JavaScript)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#b36b3f]" aria-hidden />
                    <p>Web & Mobile Application Development</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#d6a05a]" aria-hidden />
                    <p>UI/UX Design & Research (usability testing, prototyping, wireframing)</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-2">
                    <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#8a4a2b]" aria-hidden />
                    <p>I am a huge foodie and have an endless list of restaurants in my &quot;Want to Go&quot; on Google Maps</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#b36b3f]" aria-hidden />
                    <p>All I need are my headphones and freshly made masala chai</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#d6a05a]" aria-hidden />
                    <p>At any point, I am likely playing sports videogames or watching live sports</p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#9d5e34] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#2e1c10]/15 transition hover:-translate-y-0.5 hover:bg-[#7f4b28] hover:text-white hover:shadow-lg hover:shadow-[#2e1c10]/20 dark:bg-[#f7ede4] dark:text-[#2e1c10] dark:hover:bg-[#e6d8c8] dark:hover:text-[#2e1c10]"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-[#e6d8c8] bg-[#fffbf7] px-5 py-3 text-sm font-semibold text-[#5a4030] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:bg-[#1a120c] dark:text-[#e4d4c6] dark:hover:border-[#5a3e2c] dark:hover:bg-[#2a1b12]"
              href="#contact"
            >
              Send Message
            </a>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 rounded-3xl border border-[#e6d8c8] bg-gradient-to-r from-[#9d5e34] via-[#8a4a2b] to-[#7f4b28] p-8 text-white shadow-lg shadow-[#2e1c10]/25 dark:border-[#3b2a1f]">
          <div className="mb-6 flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.24em] text-[#fff0df]">Contact</p>
            <h2 className="text-2xl font-semibold">Let&apos;s chat!</h2>
            <p className="text-sm text-zinc-300">Open to roles, project-based work, or new connections.</p>
          </div>
          <form
            className="space-y-4 rounded-2xl bg-white/5 p-6 shadow-inner shadow-black/10"
            action="https://formspree.io/f/xgoyoqka"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleContactSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-zinc-100">
                Name
                <input
                  className="rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-base text-white placeholder:text-[#f6ebdf] focus:border-white focus:outline-none"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-zinc-100">
                Email
                <input
                  className="rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-base text-white placeholder:text-[#f6ebdf] focus:border-white focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-100">
              Message
              <textarea
                className="min-h-[160px] rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-base text-white placeholder:text-[#f6ebdf] focus:border-white focus:outline-none"
                name="message"
                placeholder="What would you like to collaborate on?"
                required
              />
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={contactSubmitState === "sending"}
                className={`inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-80 ${
                  contactSubmitState === "sent"
                    ? "text-emerald-700 shadow-emerald-500/35"
                    : "text-[#2e1c10] shadow-black/20"
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {contactSubmitState === "sending" ? (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="inline-flex items-center gap-2"
                    >
                      <motion.span
                        aria-hidden
                        className="inline-block h-3.5 w-3.5 rounded-full border-2 border-[#2e1c10]/30 border-t-[#2e1c10]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.85, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                      />
                      Sending...
                    </motion.span>
                  ) : contactSubmitState === "sent" ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="inline-flex items-center gap-2 text-emerald-700"
                    >
                      <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                      Sent!
                    </motion.span>
                  ) : contactSubmitState === "error" ? (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="inline-flex items-center gap-2"
                    >
                      Try again
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="inline-flex items-center gap-2"
                    >
                      Send message
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <p aria-live="polite" className="text-xs text-[#fff0df]">
                {contactSubmitState === "sending"
                  ? "Submitting your message..."
                  : contactSubmitState === "sent"
                  ? "Message sent successfully."
                  : contactSubmitState === "error"
                  ? "Could not send the message. Please try again."
                  : "This sends a message directly to Siraaj."}
              </p>
            </div>
          </form>
        </section>
        <SiteFooter />
      </main>

      <AnimatePresence>
        {projectOverlay ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#2e1c10]/35 p-4 backdrop-blur-[3px] dark:bg-[#110b07]/50 sm:p-6"
            onClick={() => setProjectOverlay(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${projectOverlay.title} preview`}
              className="relative flex h-[calc(100dvh-2rem)] w-[min(1100px,94vw)] flex-col overflow-hidden rounded-[1.75rem] border border-[#e6d8c8] bg-[#fffbf7] shadow-2xl shadow-[#2e1c10]/35 sm:h-[min(860px,90vh)] dark:border-[#3b2a1f] dark:bg-[#1a120c]"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-[#e6d8c8] px-4 py-3 dark:border-[#3b2a1f] sm:px-5">
                <p className="text-sm font-semibold tracking-[0.08em] text-[#5a4030] dark:text-[#e4d4c6]">{projectOverlay.title}</p>
                <button
                  type="button"
                  aria-label="Close project preview"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e6d8c8] text-[#5a4030] transition hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:text-[#e4d4c6] dark:hover:bg-[#2a1b12]"
                  onClick={() => setProjectOverlay(null)}
                >
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>
              <div className="min-h-0 flex-1 bg-[#fffdf9] dark:bg-[#110b07]">
                <iframe
                  title={`${projectOverlay.title} project page`}
                  src={projectOverlay.href}
                  className="h-full w-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
