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
  showNotch = false,
}: IPhoneFrameProps) {
  return (
    <div
      className={`relative aspect-[9/19] w-full max-w-[168px] shrink-0 overflow-hidden rounded-[1.8rem] border border-[#d8c3b0]/70 bg-[#2b2018] p-[7px] shadow-md shadow-[#251409]/20 sm:max-w-[190px] sm:rounded-[2.2rem] sm:p-[8px] dark:border-[#4a3324] dark:bg-[#18110c] ${className ?? ""}`}
    >
      {showNotch && (
        <div className="pointer-events-none absolute left-1/2 top-[13px] z-20 h-[14px] w-[84px] -translate-x-1/2 rounded-b-xl bg-[#1f1611]/95 dark:bg-black/90 sm:top-[15px] sm:h-[18px] sm:w-[108px] sm:rounded-b-2xl" />
      )}
      <div
        className={`relative isolate h-full w-full overflow-hidden rounded-[1.3rem] bg-[#f7eedf] shadow-[inset_0_0_0_1px_rgba(216,195,176,0.55)] [contain:paint] dark:bg-[#221810] dark:shadow-[inset_0_0_0_1px_rgba(216,195,176,0.25)] sm:rounded-[1.6rem] ${screenClassName ?? ""}`}
      >
        <div className="h-full w-full">
          {children}
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[10px] bg-[#f7eedf] shadow-[inset_0_0_2px_rgba(43,32,24,0.4)] dark:bg-[#221810] sm:h-[14px]" />
      </div>
    </div>
  );
}