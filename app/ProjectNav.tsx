"use client";

import { useTheme } from "./ThemeProvider";

type ProjectNavProps = {
  /** Id of the currently active/scrolled-to section, e.g. "home" | "work" | "contact". Omit to render all links as inactive (used on project pages, which have no scroll-tracked section). */
  activeSection?: string;
  /** Prefix for the Home/Work/Contact anchors. Use "" on the homepage (in-page anchors) and "/" on other pages (navigate back to the homepage section). */
  basePath?: string;
  /** Extra classes appended to the <nav> element, e.g. "mb-8" on project pages that don't otherwise space it from the next section. */
  className?: string;
};

export default function ProjectNav({ activeSection, basePath = "/", className = "" }: ProjectNavProps) {
  const { theme, setTheme } = useTheme();
  const navItemBaseClass = "inline-flex items-center justify-center whitespace-nowrap rounded-full px-8 py-2 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]";
  const navLinkClass = (id: string) =>
    [
      navItemBaseClass,
      activeSection === id
        ? "border-[#b8956a] bg-[#f7eedf] dark:border-[#6b4c35] dark:bg-[#2d2116]"
        : "border-[#dfceb6] dark:border-[#3e2d20]",
    ].join(" ");
  const socialIconClass = "inline-flex items-center justify-center rounded-full border border-[#dfceb6] bg-[#f7eedf] p-2 text-[#4a3222] hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#f5e6d6] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]";

  return (
    <nav className={`sticky z-30 flex flex-wrap items-center gap-3 border-b border-[#dfceb6] py-2 dark:border-[#3e2d20] dark:text-white ${className}`}>
      <a className="text-lg font-semibold" href={`${basePath}#top`}>
        Siraaj Kudtarkar
      </a>

      <div className="ml-auto flex flex-wrap items-center justify-end gap-3">
        <div className="flex flex-wrap items-center gap-1.5 text-sm font-semibold">
          <a className={navLinkClass("home")} href={`${basePath}#top`}>
            Home
          </a>
          <a className={navLinkClass("work")} href={`${basePath}#work`}>
            Work
          </a>
          <a className={navLinkClass("contact")} href={`${basePath}#contact`}>
            Contact
          </a>
          <a
            className={`${navItemBaseClass} border-[#dfceb6] dark:border-[#3e2d20]`}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            className={socialIconClass}
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
            className={socialIconClass}
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
        </div>

        <div className="flex items-center gap-1 rounded-full border border-[#dfceb6] bg-[#f7eedf] px-1.5 py-1 shadow-sm dark:border-[#3e2d20] dark:bg-[#221810]">
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
                    ? "bg-[#8a4f2a] text-white shadow-inner shadow-[#251409]/15"
                    : "text-[#4a3222] hover:bg-[#f0e4d1] dark:text-white dark:hover:bg-[#2d2116]"
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
    </nav>
  );
}
