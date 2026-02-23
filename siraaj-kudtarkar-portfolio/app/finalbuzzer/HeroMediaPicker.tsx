"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

type ViewMode = "desktop" | "mobile";

type HeroMediaPickerProps = {
  desktopImage: StaticImageData;
  mobileImage: StaticImageData;
  desktopAlt: string;
  mobileAlt: string;
};

export default function HeroMediaPicker({
  desktopImage,
  mobileImage,
  desktopAlt,
  mobileAlt,
}: HeroMediaPickerProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("desktop");

  return (
    <div className="mt-4 space-y-3">
      <div className="flex justify-end">
        <div className="inline-flex items-center overflow-hidden rounded-full border border-[#e6d8c8] bg-[#fffbf7] text-xs font-semibold text-[#5a4030] shadow-sm dark:border-[#3b2a1f] dark:bg-black dark:text-white">
          <button
            type="button"
            aria-pressed={viewMode === "desktop"}
            className={`px-4 py-2 transition ${
              viewMode === "desktop"
                ? "bg-[#9d5e34] text-white shadow-inner shadow-[#2e1c10]/20 dark:bg-[#9d5e34] dark:text-white"
                : "text-[#5a4030] hover:bg-[#f6ebdf] dark:text-[#d7c4b6] dark:hover:bg-[#2a1b12]"
            }`}
            onClick={() => setViewMode("desktop")}
          >
            Desktop
          </button>
          <button
            type="button"
            aria-pressed={viewMode === "mobile"}
            className={`px-4 py-2 transition ${
              viewMode === "mobile"
                ? "bg-[#2e1c10] text-[#f7ede4] shadow-inner shadow-[#000]/20 dark:bg-[#f7ede4] dark:text-[#2e1c10]"
                : "text-[#5a4030] hover:bg-[#f6ebdf] dark:text-[#d7c4b6] dark:hover:bg-[#2a1b12]"
            }`}
            onClick={() => setViewMode("mobile")}
          >
            Mobile
          </button>
        </div>
      </div>

      {viewMode === "desktop" ? (
        <div className="mx-auto w-full max-w-[920px] overflow-hidden rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] p-4 shadow-sm dark:border-[#3b2a1f] dark:bg-black">
          <Image
            src={desktopImage}
            alt={desktopAlt}
            className="h-auto w-full rounded-xl object-contain"
            unoptimized
            priority
          />
        </div>
      ) : (
        <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] p-3 shadow-sm dark:border-[#3b2a1f] dark:bg-black">
          <Image
            src={mobileImage}
            alt={mobileAlt}
            className="h-auto w-full rounded-xl object-cover"
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
