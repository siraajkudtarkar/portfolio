"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import SiteFooter from "./SiteFooter";
import ProjectNav from "./ProjectNav";
import IPhoneFrame from "./IPhoneFrame";
import AndroidTabletFrame from "./AndroidTabletFrame";
import VimeoEmbed from "./VimeoEmbed";

const codiDemoUrl = "https://player.vimeo.com/video/1167947118?autoplay=1&muted=1&loop=1&autopause=0&background=1";
const finalBuzzerDemoUrl = "https://player.vimeo.com/video/1167948538?autoplay=1&muted=1&loop=1&autopause=0&background=1";
const wildcatDemoUrl = "https://player.vimeo.com/video/1167948725?autoplay=1&muted=1&loop=1&autopause=0&background=1";
const meTimeDemoUrl = "https://player.vimeo.com/video/1167950147?autoplay=1&muted=1&loop=1&autopause=0&background=1";
const muskegonDemoUrl = "https://player.vimeo.com/video/1202318788?autoplay=1&muted=1&loop=1&autopause=0&background=1";

const projects = [
  {
    title: "Codi",
    productType: "healthcare",
    summary: "Designed a collaborative mobile application for children with diabetes and parents supported by a University of Michigan-backed research study.",
    stack: ["React Native", "TypeScript", "Firebase", "OpenAI", "Expo", "Node", "Frontend Development", "Full-Stack Development", "UX Design & Research", "Cross Collaboration"],
    link: "/codi",
  },
  {
    title: "Muskegon Polish Festival Mobile & Tablet Experience",
    productType: "Education",
    summary: "Created a responsive mobile and tablet experience that highlights Polish heritage in a modern, interactive way — won the Final Project Award for User-Centered Agile Development at the UMSI Exposition.",
    stack: ["React Native", "TypeScript", "Frontend Development", "Expo", "Node", "Cross Collaboration"],
    link: "/polishfestival",
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

const personalInterestPhotos = {
  food: "/Food.JPG",
  music: "/Headphones.jpg",
  sports: "/Sports.jpg",
} as const;

const personalInterestAlt = {
  food: "Photo of food Siraaj enjoys",
  music: "Photo of Siraaj with headphones on",
  sports: "Photo of Siraaj watching live soccer",
} as const;

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("home");
  const [isProfessional, setIsProfessional] = useState(true);
  const [tappedProjectCard, setTappedProjectCard] = useState<"wildcat" | "metime" | null>(null);
  const [hoveredInterest, setHoveredInterest] = useState<"food" | "music" | "sports" | null>(null);
  const interestLeaveTimeoutRef = useRef<number | null>(null);
  const [isTouchPreviewDevice, setIsTouchPreviewDevice] = useState(false);
  const [activeSkills, setActiveSkills] = useState<string[]>([]);
  const [contactSubmitState, setContactSubmitState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    const ids = ["home", "work", "contact"];

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

  useEffect(() => {
    return () => {
      if (interestLeaveTimeoutRef.current) {
        window.clearTimeout(interestLeaveTimeoutRef.current);
      }
    };
  }, []);

  const clearInterestLeaveTimeout = () => {
    if (interestLeaveTimeoutRef.current) {
      window.clearTimeout(interestLeaveTimeoutRef.current);
      interestLeaveTimeoutRef.current = null;
    }
  };

  const handleInterestEnter = (interest: "food" | "music" | "sports") => {
    clearInterestLeaveTimeout();
    setHoveredInterest(interest);
  };

  const handleInterestLeave = (interest: "food" | "music" | "sports") => {
    clearInterestLeaveTimeout();
    interestLeaveTimeoutRef.current = window.setTimeout(() => {
      setHoveredInterest((current) => (current === interest ? null : current));
      interestLeaveTimeoutRef.current = null;
    }, 2000);
  };

  const handleInterestToggle = (interest: "food" | "music" | "sports") => {
    clearInterestLeaveTimeout();
    setHoveredInterest((current) => (current === interest ? null : interest));
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
      return "bg-[#8a4f2a] text-white dark:bg-[#f5e6d6] dark:text-[#251409]";
    }

    if (activeSkills.length > 0) {
      return "bg-[#f0e4d1]/55 text-[#664834] dark:bg-[#2d2116]/55 dark:text-[#c2a88f]";
    }

    return "bg-[#f0e4d1] text-[#251409] dark:bg-[#2d2116] dark:text-[#f5e6d6]";
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
  const polishFestivalProject = projects[1];
  const finalBuzzerProject = projects[2];
  const wildcatProject = projects[3];
  const meTimeProject = projects[4];

  return (
    <div id="top" className="bg-[radial-gradient(circle_at_12%_20%,rgba(182,115,70,0.12),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(217,176,140,0.18),transparent_28%),#f5ede1] text-[#251409] dark:bg-[#17100a] dark:text-[#f5e6d6]">
      <main className="flex min-h-screen flex-col gap-12 px-5 pb-24 pt-6 sm:px-8 sm:pt-8 lg:px-16">
        <ProjectNav activeSection={activeSection} basePath="" />
        <header
          id="home"
          className="flex flex-col gap-6 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/90 p-8 shadow-lg shadow-[#251409]/8 backdrop-blur sm:gap-10 dark:border-[#3e2d20] dark:bg-[#221810]/85 dark:text-[#f5e6d6]"
        >
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
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

            <div className="grid w-full grid-cols-2 overflow-hidden rounded-full border border-[#dfceb6] bg-[#f7eedf] text-xs font-semibold text-[#4a3222] shadow-sm sm:w-auto sm:shrink-0 dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#f5e6d6]">
              <button
                type="button"
                aria-pressed={isProfessional}
                className={`flex w-full items-center justify-center gap-2 whitespace-nowrap px-4 py-2 transition ${
                  isProfessional
                    ? "bg-[#8a4f2a] text-white shadow-inner shadow-[#251409]/20 dark:bg-[#8a4f2a] dark:text-white"
                    : "text-[#4a3222] hover:bg-[#f0e4d1] dark:text-[#cdb69f] dark:hover:bg-[#2d2116]"
                }`}
                onClick={() => {
                  setIsProfessional(true);
                  clearInterestLeaveTimeout();
                  setHoveredInterest(null);
                }}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M9 5c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1h3.5A1.5 1.5 0 0 1 20 7.5v1.88l-8 3.2-8-3.2V7.5A1.5 1.5 0 0 1 4.5 6H8V5Zm2 1h2V6h-2v.01ZM4 10.46l7.65 3.06a1.5 1.5 0 0 0 1.1 0L20 10.46V16.5A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5v-6.04Z"/></svg>
                <span>Professional</span>
              </button>
              <button
                type="button"
                aria-pressed={!isProfessional}
                className={`flex w-full items-center justify-center gap-2 whitespace-nowrap px-4 py-2 transition ${
                  !isProfessional
                    ? "bg-[#251409] text-[#f5e6d6] shadow-inner shadow-[#000]/20 dark:bg-[#f5e6d6] dark:text-[#251409]"
                    : "text-[#4a3222] hover:bg-[#f0e4d1] dark:text-[#cdb69f] dark:hover:bg-[#2d2116]"
                }`}
                onClick={() => setIsProfessional(false)}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 12.75a3.75 3.75 0 1 0-3.75-3.75A3.75 3.75 0 0 0 12 12.75Zm0 2.25c-3 0-5.5 1.68-5.5 3.75 0 .55.45 1 1 1h9c.55 0 1-.45 1-1 0-2.07-2.5-3.75-5.5-3.75Z"/></svg>
                <span>Personal</span>
              </button>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
              <div className="flex flex-col items-center gap-4">
                <div className="h-80 w-80 rounded-3xl border border-[#dfceb6] bg-[#faf4e1] p-2 shadow-inner shadow-[#251409]/6 sm:h-[22rem] sm:w-[22rem] dark:border-[#3e2d20] dark:bg-[#221810]">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                      src={
                        isProfessional
                          ? "/headshot_edited.png"
                          : hoveredInterest
                          ? personalInterestPhotos[hoveredInterest]
                          : "/personal.jpg"
                      }
                      alt={
                        isProfessional
                          ? "Professional headshot of Siraaj Kudtarkar"
                          : hoveredInterest
                          ? personalInterestAlt[hoveredInterest]
                          : "Personal portrait photo of Siraaj Kudtarkar"
                      }
                      fill
                      sizes="(max-width: 600px) 320px, 352px"
                      className={`object-cover transition duration-300 ${isProfessional ? "object-top scale-110" : "object-[center_55%]"}`}
                      priority
                    />
                  </div>
                </div>
                {!isProfessional && (
                  <div className="flex items-center gap-2.5">
                    {(["food", "music", "sports"] as const).map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a4f2a] ${
                          hoveredInterest === interest
                            ? "border-[#7a3f22] shadow-md shadow-[#251409]/25 dark:border-[#d19a6a]"
                            : "border-[#dfceb6] opacity-80 hover:opacity-100 dark:border-[#3e2d20]"
                        }`}
                        onMouseEnter={() => handleInterestEnter(interest)}
                        onMouseLeave={() => handleInterestLeave(interest)}
                        onFocus={() => handleInterestEnter(interest)}
                        onBlur={() => handleInterestLeave(interest)}
                        onClick={() => handleInterestToggle(interest)}
                        aria-pressed={hoveredInterest === interest}
                        aria-label={personalInterestAlt[interest]}
                      >
                        <Image
                          src={personalInterestPhotos[interest]}
                          alt=""
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div id="about" className="scroll-mt-24 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm uppercase font-medium tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Hi there! 👋🏾</p>
                </div>
                <h1 className="text-3xl font-medium text-[#4a3222] dark:text-[#e2cfbb]">
                  {isProfessional ? (
                    <>
                      I build <strong className="font-extrabold"> accessible digital products</strong> bridging <strong className="font-extrabold">design and engineering</strong>.
                    </>
                  ) : (
                    <>
                      I opt for <strong className="font-extrabold"> simplicity. </strong> 😃
                    </>
                  )}
                </h1>
                <div className="pt-1">
                  <p className="text-base font-semibold uppercase tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">{isProfessional ? "" : ""}</p>
                  {!isProfessional && (
                    <p className="mt-1 flex items-center gap-1.5 text-base italic text-[#664834] dark:text-[#cdb69f]">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                      {isTouchPreviewDevice ? "Tap a line below to see a photo" : "Hover a line below to see a photo"}
                    </p>
                  )}
                  <div className="mt-2 space-y-2.5">
                    {isProfessional ? (
                      <>
                        <div className="flex items-start gap-2">
                          <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#7a3f22]" aria-hidden />
                          <p>Software Engineering & Front-End Development (React, React Native, JavaScript)</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#b36b3f]" aria-hidden />
                          <p>Web & Mobile Full-Stack Application Development</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#d6a05a]" aria-hidden />
                          <p>UI/UX Design & Research (usability testing, prototyping, wireframing)</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className={`flex cursor-pointer items-start gap-2 rounded-lg px-1 py-0.5 -mx-1 transition ${
                            hoveredInterest === "food" ? "bg-[#f0e4d1] dark:bg-[#2d2116]" : ""
                          }`}
                          onMouseEnter={() => handleInterestEnter("food")}
                          onMouseLeave={() => handleInterestLeave("food")}
                          onClick={() => handleInterestToggle("food")}
                        >
                          <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#7a3f22]" aria-hidden />
                          <p
                            className={`underline decoration-dotted decoration-2 underline-offset-4 transition ${
                              hoveredInterest === "food"
                                ? "text-[#7a3f22] decoration-[#7a3f22] dark:text-[#d19a6a] dark:decoration-[#d19a6a]"
                                : "decoration-[#b8956a] dark:decoration-[#6b4c35]"
                            }`}
                          >
                            I am a huge foodie and have an endless list of restaurants in my &quot;Want to Go&quot; on Google Maps
                          </p>
                        </div>
                        <div
                          className={`flex cursor-pointer items-start gap-2 rounded-lg px-1 py-0.5 -mx-1 transition ${
                            hoveredInterest === "music" ? "bg-[#f0e4d1] dark:bg-[#2d2116]" : ""
                          }`}
                          onMouseEnter={() => handleInterestEnter("music")}
                          onMouseLeave={() => handleInterestLeave("music")}
                          onClick={() => handleInterestToggle("music")}
                        >
                          <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#b36b3f]" aria-hidden />
                          <p
                            className={`underline decoration-dotted decoration-2 underline-offset-4 transition ${
                              hoveredInterest === "music"
                                ? "text-[#7a3f22] decoration-[#7a3f22] dark:text-[#d19a6a] dark:decoration-[#d19a6a]"
                                : "decoration-[#b8956a] dark:decoration-[#6b4c35]"
                            }`}
                          >
                            All I need are my headphones and freshly made masala chai
                          </p>
                        </div>
                        <div
                          className={`flex cursor-pointer items-start gap-2 rounded-lg px-1 py-0.5 -mx-1 transition ${
                            hoveredInterest === "sports" ? "bg-[#f0e4d1] dark:bg-[#2d2116]" : ""
                          }`}
                          onMouseEnter={() => handleInterestEnter("sports")}
                          onMouseLeave={() => handleInterestLeave("sports")}
                          onClick={() => handleInterestToggle("sports")}
                        >
                          <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#d6a05a]" aria-hidden />
                          <p
                            className={`underline decoration-dotted decoration-2 underline-offset-4 transition ${
                              hoveredInterest === "sports"
                                ? "text-[#7a3f22] decoration-[#7a3f22] dark:text-[#d19a6a] dark:decoration-[#d19a6a]"
                                : "decoration-[#b8956a] dark:decoration-[#6b4c35]"
                            }`}
                          >
                            At any point, I am likely playing sports videogames or watching live sports
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid w-full grid-cols-2 gap-2 text-sm font-semibold text-[#4a3222] dark:text-[#e2cfbb]">
                <a className="col-span-2 inline-flex w-full items-center justify-center rounded-full bg-[#8a4f2a] px-5 py-2 text-white hover:bg-[#6f3f20] hover:text-white dark:bg-[#f5e6d6] dark:text-[#251409] dark:hover:bg-[#dfceb6] dark:hover:text-[#251409]" href="#contact">
                  Send Message
                </a>
                <a className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dfceb6] px-4 py-2 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]" href="https://github.com/siraajkudtarkar" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.43-5.25 5.71.41.35.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
                  <span>GitHub</span>
                </a>
                <a className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dfceb6] px-4 py-2 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]" href="https://www.linkedin.com/in/siraaj-kudtarkar" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.98h3.96V21H3V8.98Zm6.74 0H14v1.65h.06c.42-.8 1.44-1.65 2.96-1.65C20.12 8.98 21 11 21 14.13V21h-3.96v-6.06c0-1.45-.03-3.3-2.01-3.3-2.02 0-2.33 1.58-2.33 3.2V21H8.74V8.98Z"/></svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#dfceb6] bg-[#f7eedf]/95 p-6 shadow-inner shadow-[#251409]/6 dark:border-[#3e2d20] dark:bg-[#221810]">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Skills</p>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-medium text-[#6b4f39] dark:text-[#c2a88f]">Click to Highlight Skills in Projects</span>
                {activeSkills.length > 0 ? (
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full border border-[#d3bea0] bg-[#f7eedf] px-3 py-1 text-xs font-semibold text-[#5f4532] transition hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#6b4c35] dark:bg-[#221810] dark:text-[#e2cfbb] dark:hover:bg-[#2d2116]"
                    onClick={clearActiveSkills}
                  >
                    Clear
                  </button>
                ) : null}
              </div>
            </div>
            <div className="space-y-3 text-sm text-[#4a3222] dark:text-[#e2cfbb]">
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
                          ? "bg-[#8a4f2a] text-white dark:bg-[#f5e6d6] dark:text-[#251409]"
                          : "bg-[#f0e4d1] text-[#251409] hover:bg-[#e9d9bf] dark:bg-[#2d2116] dark:text-[#f5e6d6] dark:hover:bg-[#3a2a1e]"
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
                          ? "bg-[#8a4f2a] text-white dark:bg-[#f5e6d6] dark:text-[#251409]"
                          : "bg-[#f0e4d1] text-[#251409] hover:bg-[#e9d9bf] dark:bg-[#2d2116] dark:text-[#f5e6d6] dark:hover:bg-[#3a2a1e]"
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

        <section id="work" className="scroll-mt-24 space-y-8 rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/95 p-5 shadow-lg shadow-[#251409]/8 backdrop-blur sm:p-10 dark:border-[#3e2d20] dark:bg-[#221810]/85 dark:text-[#f5e6d6]">
          <div className="flex items-center justify-between">
            <div>
              {/* <p className="text-base uppercase tracking-[0.1em] text-[#664834] dark:text-[#cdb69f]">Work</p> */}
              <h2 className="mt-2 text-3xl font-semibold">Featured Work</h2>
            </div>
          </div>

          <div className="space-y-8">
            <article className="group rounded-none border-0 bg-[#f7eedf]/95 p-4 shadow-none transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#251409]/15 sm:rounded-2xl sm:bg-[#f7eedf] sm:p-8 sm:border sm:border-[#dfceb6] sm:shadow-sm dark:bg-[#221810]/85 dark:sm:rounded-2xl dark:sm:bg-[#221810] dark:sm:border-[#3e2d20]">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="mx-auto flex min-h-[446px] max-w-[760px] items-center justify-center p-2 pb-3 pt-2 sm:min-h-[460px] sm:p-4 sm:pb-16 sm:pt-4">
                  <IPhoneFrame className="!max-w-[250px]">
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
                  <h3 className="text-2xl font-semibold text-[#251409] transition group-hover:text-[#7a3f22] dark:text-[#f5e6d6] dark:group-hover:text-[#d19a6a]">{codiProject.title}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#664834] dark:text-[#c2a88f]">{codiProject.productType}</p>
                  <p className="text-lg leading-7 text-[#4a3222] dark:text-[#e2cfbb]">{codiProject.summary}</p>
                  <div className="flex flex-wrap gap-2.5 text-sm font-semibold text-[#4a3222] dark:text-[#e2cfbb]">
                    {codiProject.stack.map((tech) => (
                      <span key={tech} className={`rounded-full px-2.5 py-1.5 sm:px-3.5 ${getProjectSkillPillClass(tech)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-end text-base font-semibold text-[#7a3f22] dark:text-[#d19a6a]">
                    <a
                      className="inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-4 py-2 hover:border-[#b8956a] hover:bg-[#f0e4d1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a4f2a] dark:border-[#3e2d20] dark:bg-[#221810] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
                      href={codiProject.link}
                      aria-label={`Read more about ${codiProject.title}`}
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article className="group rounded-none border-0 bg-[#f7eedf]/95 p-4 shadow-none transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#251409]/15 sm:rounded-2xl sm:bg-[#f7eedf] sm:p-8 sm:border sm:border-[#dfceb6] sm:shadow-sm dark:bg-[#221810]/85 dark:sm:rounded-2xl dark:sm:bg-[#221810] dark:sm:border-[#3e2d20]">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="mx-auto flex items-center justify-center sm:hidden">
                  <div className="w-[min(82vw,440px)] rounded-2xl bg-[#7a3f22] shadow-md shadow-[#251409]/20 sm:p-48 sm:pb-24 sm:pt-36">
                    <div className="overflow-hidden rounded-2xl bg-[#f7eedf] p-1.5">
                      <VimeoEmbed
                        src={muskegonDemoUrl}
                        title="Muskegon tablet demo"
                        className="aspect-[5/3] w-full"
                        iframeClassName="h-full w-full"
                        cover
                      />
                    </div>
                  </div>
                </div>

                <div className="mx-auto hidden min-h-[446px] max-w-[760px] items-center justify-center p-2 pb-3 pt-2 sm:flex sm:min-h-[460px] sm:p-4 sm:pb-16 sm:pt-4">
                  <div className="flex items-center justify-center">
                    <AndroidTabletFrame className="!w-[440px] !max-w-[440px]" screenClassName="bg-[#f7eedf]">
                      <VimeoEmbed
                        src={muskegonDemoUrl}
                        title="Muskegon tablet demo"
                        className="h-full w-full"
                        iframeClassName="h-full w-full"
                        cover
                      />
                    </AndroidTabletFrame>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#251409] transition group-hover:text-[#7a3f22] dark:text-[#f5e6d6] dark:group-hover:text-[#d19a6a]">{polishFestivalProject.title}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#664834] dark:text-[#c2a88f]">{polishFestivalProject.productType}</p>
                  <p className="text-lg leading-7 text-[#4a3222] dark:text-[#e2cfbb]">{polishFestivalProject.summary}</p>
                  <div className="flex flex-wrap gap-2.5 text-sm font-semibold text-[#4a3222] dark:text-[#e2cfbb]">
                    {polishFestivalProject.stack.map((tech) => (
                      <span key={tech} className={`rounded-full px-2.5 py-1.5 sm:px-3.5 ${getProjectSkillPillClass(tech)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-end text-base font-semibold text-[#7a3f22] dark:text-[#d19a6a]">
                    <a
                      className="inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-4 py-2 hover:border-[#b8956a] hover:bg-[#f0e4d1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a4f2a] dark:border-[#3e2d20] dark:bg-[#221810] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
                      href={polishFestivalProject.link}
                      aria-label={`Read more about ${polishFestivalProject.title}`}
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article className="group rounded-none border-0 bg-[#f7eedf]/95 p-4 shadow-none transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#251409]/15 sm:rounded-2xl sm:bg-[#f7eedf] sm:p-8 sm:border sm:border-[#dfceb6] sm:shadow-sm dark:bg-[#221810]/85 dark:sm:rounded-2xl dark:sm:bg-[#221810] dark:sm:border-[#3e2d20]">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="mx-auto flex min-h-[446px] max-w-[760px] items-center justify-center p-2 pb-3 pt-2 sm:min-h-[460px] sm:p-4 sm:pb-16 sm:pt-4">
                  <IPhoneFrame className="!max-w-[250px]">
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
                  <h3 className="text-2xl font-semibold text-[#251409] transition group-hover:text-[#7a3f22] dark:text-[#f5e6d6] dark:group-hover:text-[#d19a6a]">{finalBuzzerProject.title}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#664834] dark:text-[#c2a88f]">{finalBuzzerProject.productType}</p>
                  <p className="text-lg leading-7 text-[#4a3222] dark:text-[#e2cfbb]">{finalBuzzerProject.summary}</p>
                  <div className="flex flex-wrap gap-2.5 text-sm font-semibold text-[#4a3222] dark:text-[#e2cfbb]">
                    {finalBuzzerProject.stack.map((tech) => (
                      <span key={tech} className={`rounded-full px-2.5 py-1.5 sm:px-3.5 ${getProjectSkillPillClass(tech)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-end text-base font-semibold text-[#7a3f22] dark:text-[#d19a6a]">
                    <a
                      className="inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-4 py-2 hover:border-[#b8956a] hover:bg-[#f0e4d1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a4f2a] dark:border-[#3e2d20] dark:bg-[#221810] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
                      href={finalBuzzerProject.link}
                      aria-label={`Read more about ${finalBuzzerProject.title}`}
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-8 lg:grid-cols-2">
              <article
                className="group relative cursor-pointer overflow-visible rounded-none border-0 bg-[#f7eedf]/95 p-4 shadow-none transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#251409]/15 sm:rounded-2xl sm:bg-[#f7eedf] sm:p-8 sm:overflow-hidden sm:border sm:border-[#dfceb6] sm:shadow-sm dark:bg-[#221810]/85 dark:sm:rounded-2xl dark:sm:bg-[#221810] dark:sm:border-[#3e2d20]"
                onClick={() => {
                  if (!isTouchPreviewDevice) return;
                  setTappedProjectCard((current) => (current === "wildcat" ? null : "wildcat"));
                }}
              >
                <div
                  className={`relative z-10 flex min-h-[680px] flex-col px-2 pt-4 pb-24 transition duration-300 group-hover:opacity-0 sm:min-h-[640px] sm:p-8 ${
                    isTouchPreviewDevice && tappedProjectCard === "wildcat" ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-[#251409] dark:text-[#f5e6d6]">{wildcatProject.title}</h3>
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#664834] dark:text-[#c2a88f]">{wildcatProject.productType}</p>
                    <p className="text-lg leading-7 text-[#4a3222] dark:text-[#e2cfbb]">{wildcatProject.summary}</p>
                    <div className="flex flex-wrap gap-2.5 text-sm font-semibold text-[#4a3222] dark:text-[#e2cfbb]">
                      {wildcatProject.stack.map((tech) => (
                          <span key={tech} className={`rounded-full px-2.5 py-1.5 sm:px-3.5 ${getProjectSkillPillClass(tech)}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`pointer-events-none absolute inset-0 flex items-center justify-center p-4 transition duration-300 group-hover:opacity-100 sm:p-6 ${
                  isTouchPreviewDevice && tappedProjectCard === "wildcat" ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="flex h-full w-full items-center justify-center pb-24 pt-6 sm:pb-16 sm:pt-0">
                    <IPhoneFrame className="!max-w-[250px]">
                      <VimeoEmbed
                        src={wildcatDemoUrl}
                        title="Wildcat Fantasy Football demo"
                        className="h-full w-full"
                        iframeClassName="h-full w-full"
                        cover
                      />
                    </IPhoneFrame>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-end gap-3 p-6 text-base font-semibold text-[#7a3f22] dark:text-[#d19a6a]">
                  <p className="mr-auto text-xs font-medium text-[#664834] dark:text-[#cdb69f] sm:hidden">
                    {isTouchPreviewDevice && tappedProjectCard === "wildcat" ? "Tap for details" : "Tap to preview"}
                  </p>
                  <a
                    className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-4 py-2 hover:border-[#b8956a] hover:bg-[#f0e4d1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a4f2a] dark:border-[#3e2d20] dark:bg-[#221810] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
                    href={wildcatProject.link}
                    aria-label={`Read more about ${wildcatProject.title}`}
                    onClick={(event) => event.stopPropagation()}
                  >
                    Read more
                  </a>
                </div>
              </article>

              <article
                className="group relative cursor-pointer overflow-visible rounded-none border-0 bg-[#f7eedf]/95 p-4 shadow-none transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#251409]/15 sm:rounded-2xl sm:bg-[#f7eedf] sm:p-8 sm:overflow-hidden sm:border sm:border-[#dfceb6] sm:shadow-sm dark:bg-[#221810]/85 dark:sm:rounded-2xl dark:sm:bg-[#221810] dark:sm:border-[#3e2d20]"
                onClick={() => {
                  if (!isTouchPreviewDevice) return;
                  setTappedProjectCard((current) => (current === "metime" ? null : "metime"));
                }}
              >
                <div
                  className={`relative z-10 flex min-h-[680px] flex-col px-2 pt-4 pb-24 transition duration-300 group-hover:opacity-0 sm:min-h-[640px] sm:p-8 ${
                    isTouchPreviewDevice && tappedProjectCard === "metime" ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-[#251409] dark:text-[#f5e6d6]">{meTimeProject.title}</h3>
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#664834] dark:text-[#c2a88f]">{meTimeProject.productType}</p>
                    <p className="text-lg leading-7 text-[#4a3222] dark:text-[#e2cfbb]">{meTimeProject.summary}</p>
                    <div className="flex flex-wrap gap-2.5 text-sm font-semibold text-[#4a3222] dark:text-[#e2cfbb]">
                      {meTimeProject.stack.map((tech) => (
                          <span key={tech} className={`rounded-full px-2.5 py-1.5 sm:px-3.5 ${getProjectSkillPillClass(tech)}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`pointer-events-none absolute inset-0 flex items-center justify-center p-4 transition duration-300 group-hover:opacity-100 sm:p-6 ${
                  isTouchPreviewDevice && tappedProjectCard === "metime" ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="flex h-full w-full items-center justify-center pb-24 pt-6 sm:pb-16 sm:pt-0">
                    <IPhoneFrame className="!max-w-[250px]">
                      <VimeoEmbed
                        src={meTimeDemoUrl}
                        title="MeTime demo"
                        className="h-full w-full"
                        iframeClassName="h-full w-full"
                        cover
                      />
                    </IPhoneFrame>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-end gap-3 p-6 text-base font-semibold text-[#7a3f22] dark:text-[#d19a6a]">
                  <p className="mr-auto text-xs font-medium text-[#664834] dark:text-[#cdb69f] sm:hidden">
                    {isTouchPreviewDevice && tappedProjectCard === "metime" ? "Tap for info" : "Tap to preview"}
                  </p>
                  <a
                    className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-4 py-2 hover:border-[#b8956a] hover:bg-[#f0e4d1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a4f2a] dark:border-[#3e2d20] dark:bg-[#221810] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
                    href={meTimeProject.link}
                    aria-label={`Read more about ${meTimeProject.title}`}
                    onClick={(event) => event.stopPropagation()}
                  >
                    Read more
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 rounded-3xl border border-[#dfceb6] bg-gradient-to-r from-[#8a4f2a] via-[#7a3f22] to-[#6f3f20] p-8 text-white shadow-lg shadow-[#251409]/25 dark:border-[#3e2d20]">
          <div className="mb-4 flex flex-col gap-2">
            {/* <p className="text-sm uppercase tracking-[0.1em] text-[#fff0df]">Contact</p> */}
            <h2 className="text-2xl font-semibold">Open to new connections and opportunities. Let&apos;s chat!</h2>
          </div>
          <form
            className="space-y-4"
            action="https://formspree.io/f/xgoyoqka"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleContactSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-zinc-100">
                Name
                <input
                  className="rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-base text-white placeholder:text-[#f0e4d1] focus:border-white focus:outline-none"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  suppressHydrationWarning
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-zinc-100">
                Email
                <input
                  className="rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-base text-white placeholder:text-[#f0e4d1] focus:border-white focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  suppressHydrationWarning
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-100">
              Message
              <textarea
                className="min-h-[160px] rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-base text-white placeholder:text-[#f0e4d1] focus:border-white focus:outline-none"
                name="message"
                placeholder="What would you like to collaborate on?"
                required
                suppressHydrationWarning
              />
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={contactSubmitState === "sending"}
                className={`inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full bg-white px-4 py-4 text-sm font-semibold hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-80 ${
                  contactSubmitState === "sent"
                    ? "text-emerald-700 shadow-emerald-500/35"
                    : "text-[#251409] shadow-black/20"
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
                        className="inline-block h-3.5 w-3.5 rounded-full border-2 border-[#251409]/30 border-t-[#251409]"
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
              <p aria-live="polite" className="text-sm text-[#fff0df]">
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
    </div>
  );
}
