import { type ReactNode } from "react";

type IPhoneFrameProps = {
  children: ReactNode;
  className?: string;
  screenClassName?: string;
  showNotch?: boolean;
};

export default function IPhoneFrame({
  children,
  className,
  screenClassName,
  showNotch = true,
}: IPhoneFrameProps) {
  return (
    <div
      className={`relative overflow-hidden aspect-[9/19] w-full max-w-[190px] rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] dark:border-[#3b2a1f] dark:bg-[#111111] md:rounded-[2.4rem] md:border-[#d8c3b0]/70 md:bg-[#2b2018] md:p-[8px] md:shadow-md md:shadow-[#2e1c10]/20 md:dark:border-[#4a3324] md:dark:bg-[#18110c] ${className ?? ""}`}
    >
      {showNotch && (
        <div className="pointer-events-none absolute left-1/2 top-[7px] hidden h-[18px] w-[108px] -translate-x-1/2 rounded-b-2xl bg-[#1f1611]/95 dark:bg-black/90 md:block" />
      )}
      <div
        className={`relative isolate h-full w-full overflow-hidden rounded-2xl bg-[#fffdf9] [contain:paint] dark:bg-[#111111] md:rounded-t-[1.9rem] md:rounded-b-[3.2rem] md:sm:rounded-[1.9rem] ${screenClassName ?? ""}`}
      >
        <div className="h-full w-full">
          {children}
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden h-[16px] bg-[#fffdf9] dark:bg-[#111111] md:block" />
      </div>
    </div>
  );
}