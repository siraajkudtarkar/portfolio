"use client";

import { useTheme } from "./ThemeProvider";

export default function ProjectNav() {
  const { theme, setTheme } = useTheme();
  const navItemClass = "inline-flex w-full items-center justify-center rounded-full px-4 py-2 transition hover:-translate-y-0.5 hover:bg-[#f6ebdf] dark:hover:bg-[#121212]";

  return (
    <nav className="sticky top-4 z-30 mb-8 flex flex-col gap-3 rounded-2xl border border-[#e6d8c8] bg-[#fffbf7]/90 px-4 py-3 shadow-md shadow-[#2e1c10]/10 backdrop-blur dark:border-[#3b2a1f] dark:bg-black dark:text-white">
      <div className="flex items-center justify-between gap-3">
        <a className="text-lg font-semibold tracking-tight" href="/#top">
          Siraaj Kudtarkar
        </a>
        <div className="flex items-center gap-1 rounded-full border border-[#e6d8c8] bg-[#fffbf7] px-1.5 py-1 shadow-sm dark:border-[#3b2a1f] dark:bg-[#121212]">
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
                    : "text-[#5a4030] hover:bg-[#f6ebdf] dark:text-white dark:hover:bg-[#121212]"
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
      <div className="grid grid-cols-4 gap-4 text-sm font-semibold">
        <a className={navItemClass} href="/#top">
          Home
        </a>
        <a className={navItemClass} href="/#work">
          Work
        </a>
        <a className={navItemClass} href="/#contact">
          Contact
        </a>
        <a
          className={navItemClass}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
