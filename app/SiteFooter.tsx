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
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5a42] dark:text-[#d7c4b6]">Open to opportunities</p>
          <h3 className="text-lg font-semibold">UX Engineer · Software Engineer</h3>
          <p className="max-w-xl text-sm leading-6 text-[#5a4030] dark:text-[#e4d4c6]">
            I build user-centered, full-stack web and mobile products.
          </p>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-[#5a4030] dark:text-[#e4d4c6]">
            <span>Ann Arbor, MI</span>
            <span>Willing to relocate (U.S. only)</span>
          </p>
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
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-[#e6d8c8] pt-4 text-sm dark:border-[#3b2a1f] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[#7a5a42] dark:text-[#cbb8aa]">Designed and developed by Siraaj Kudtarkar using Tailwind CSS, Motion, and Next.js.</p>
        <p className="text-xs text-[#7a5a42] dark:text-[#cbb8aa]">© {new Date().getFullYear()} Siraaj Kudtarkar. All rights reserved.</p>
      </div>
    </footer>
  );
}
