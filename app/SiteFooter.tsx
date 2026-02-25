import Link from "next/link";

type SiteFooterProps = {
  projectPage?: boolean;
};

export default function SiteFooter({ projectPage = false }: SiteFooterProps) {
  const homeHref = projectPage ? "/#top" : "#top";
  const workHref = projectPage ? "/#work" : "#work";
  const aboutHref = projectPage ? "/#about" : "#about";
  const contactHref = projectPage ? "/#contact" : "#contact";
  const containerClass = projectPage
    ? "mt-8 rounded-3xl border border-[#e6d8c8] bg-[#fffbf7]/95 p-6 shadow-md shadow-[#2e1c10]/8 dark:border-[#3b2a1f] dark:bg-black"
    : "rounded-3xl border border-[#e6d8c8] bg-[#fffbf7]/90 p-6 shadow-lg shadow-[#2e1c10]/8 backdrop-blur dark:border-[#3b2a1f] dark:bg-[#1a120c]/85 dark:text-[#f7ede4]";

  return (
    <footer className={containerClass}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1.5">
          <p className="text-lg font-semibold tracking-tight text-[#2e1c10] dark:text-[#f7ede4]">Siraaj Kudtarkar</p>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-3 text-sm font-medium text-[#5a4030] dark:text-[#e4d4c6] sm:justify-end">
          <Link className="hover:text-[#8a4a2b] dark:hover:text-white" href={homeHref}>Home</Link>
          <Link className="hover:text-[#8a4a2b] dark:hover:text-white" href={workHref}>Work</Link>
          <Link className="hover:text-[#8a4a2b] dark:hover:text-white" href={aboutHref}>About</Link>
          <Link className="hover:text-[#8a4a2b] dark:hover:text-white" href={contactHref}>Contact</Link>
          <a
            className="hover:text-[#8a4a2b] dark:hover:text-white"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
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
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-[#e6d8c8] pt-4 text-sm dark:border-[#3b2a1f] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[#7a5a42] dark:text-[#cbb8aa]">Designed and developed using Tailwind CSS, Motion, and Next.js.</p>
        <p className="text-xs text-[#7a5a42] dark:text-[#cbb8aa]">© {new Date().getFullYear()} Siraaj Kudtarkar. All rights reserved.</p>
      </div>
    </footer>
  );
}
