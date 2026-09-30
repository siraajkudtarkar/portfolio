import Link from "next/link";

type SiteFooterProps = {
  className?: string;
};

export default function SiteFooter({ className = "" }: SiteFooterProps) {
  const homeHref = "/#top";
  const workHref = "/#work";
  const contactHref = "/#contact";

  return (
    <footer className={`rounded-3xl border border-[#dfceb6] bg-[#f7eedf]/90 p-4 shadow-lg shadow-[#251409]/8 backdrop-blur dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#f5e6d6] ${className}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-[#251409] dark:text-[#f5e6d6]">Siraaj Kudtarkar</p>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-4 text-sm font-medium text-[#4a3222] dark:text-[#e2cfbb] sm:justify-end">
          <Link className="hover:text-[#7a3f22] dark:hover:text-white" href={homeHref}>Home</Link>
          <Link className="hover:text-[#7a3f22] dark:hover:text-white" href={workHref}>Work</Link>
          <Link className="hover:text-[#7a3f22] dark:hover:text-white" href={contactHref}>Contact</Link>
          <a
            className="hover:text-[#7a3f22] dark:hover:text-white"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <div className="flex items-center gap-2">
            <a
              className="inline-flex items-center justify-center rounded-full border border-[#dfceb6] bg-[#f7eedf] p-2 text-[#4a3222] hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#f5e6d6] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
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
              className="inline-flex items-center justify-center rounded-full border border-[#dfceb6] bg-[#f7eedf] p-2 text-[#4a3222] hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#f5e6d6] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
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

      <div className="mt-4 flex flex-col gap-4 border-t border-[#dfceb6] pt-4 text-sm dark:border-[#3e2d20] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#664834] dark:text-[#c2a88f]">
          Designed and developed using Tailwind CSS, Motion, and Next.js by{" "}
          <a
            className="font-semibold hover:text-[#7a3f22] dark:hover:text-white"
            href="https://www.linkedin.com/in/siraaj-kudtarkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Siraaj Kudtarkar
          </a>
          .
        </p>
        <p className="text-sm text-[#664834] dark:text-[#c2a88f]">© {new Date().getFullYear()} Siraaj Kudtarkar. All rights reserved.</p>
      </div>
    </footer>
  );
}
