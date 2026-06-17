import { type ReactNode } from "react";

type AndroidTabletFrameProps = {
  children: ReactNode;
  className?: string;
  screenClassName?: string;
};

export default function AndroidTabletFrame({ children, className, screenClassName }: AndroidTabletFrameProps) {
  return (
    <div
      className={`relative aspect-[5/3] w-full max-w-[950px] shrink-0 overflow-hidden rounded-[2rem] border border-[#d8c3b0] bg-[#2b2018] p-2 shadow-md shadow-[#2e1c10]/20 dark:border-[#4a3324] dark:bg-[#18110c] sm:max-w-[740px] ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[#5c4636] opacity-90 dark:bg-[#2a1d16]" />
      <div
        className={`relative h-full w-full overflow-hidden rounded-[1.5rem] bg-[#fffdf9] [contain:paint] dark:bg-[#111111] ${screenClassName ?? ""}`}
      >
        {children}
      </div>
    </div>
  );
}