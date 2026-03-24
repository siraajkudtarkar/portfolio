"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import IPhoneFrame from "../IPhoneFrame";
import VimeoEmbed from "../VimeoEmbed";

type ViewMode = "desktop" | "mobile";

type HeroMediaPickerProps = {
  desktopImage: StaticImageData;
  mobileImage: StaticImageData;
  desktopAlt: string;
  mobileAlt: string;
  desktopVimeoUrl?: string;
  mobileVimeoUrl?: string;
  mobileIphoneFrame?: boolean;
};

export default function HeroMediaPicker({
  desktopImage,
  mobileImage,
  desktopAlt,
  mobileAlt,
  desktopVimeoUrl,
  mobileVimeoUrl,
  mobileIphoneFrame = false,
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
        <div className="mx-auto -mx-2 w-[calc(100%+1rem)] max-w-[980px] overflow-hidden rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] p-2 shadow-sm sm:mx-auto sm:w-full sm:p-4 dark:border-[#3b2a1f] dark:bg-black">
          {desktopVimeoUrl ? (
            <VimeoEmbed
              src={desktopVimeoUrl}
              title={desktopAlt}
              className="aspect-video h-auto w-full overflow-hidden rounded-xl"
            />
          ) : (
            <Image
              src={desktopImage}
              alt={desktopAlt}
              className="h-auto w-full rounded-xl object-contain"
              unoptimized
              priority
            />
          )}
        </div>
      ) : (
        mobileIphoneFrame ? (
          <div className="mx-auto flex items-center justify-center py-4 sm:py-2">
            <IPhoneFrame className={mobileVimeoUrl ? "max-w-[300px]" : "max-w-[196px] sm:max-w-[190px]"}>
              {mobileVimeoUrl ? (
                <VimeoEmbed
                  src={mobileVimeoUrl}
                  title={mobileAlt}
                  className="h-full w-full"
                  iframeClassName="h-full w-full"
                  cover
                />
              ) : (
                <Image
                  src={mobileImage}
                  alt={mobileAlt}
                  className="h-full w-full object-contain"
                  unoptimized
                />
              )}
            </IPhoneFrame>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-[#e6d8c8] bg-[#fffdf9] p-3 shadow-sm dark:border-[#3b2a1f] dark:bg-black">
            {mobileVimeoUrl ? (
              <VimeoEmbed
                src={mobileVimeoUrl}
                title={mobileAlt}
                className="aspect-[9/19] h-auto w-full overflow-hidden rounded-xl"
                cover
              />
            ) : (
              <Image
                src={mobileImage}
                alt={mobileAlt}
                className="h-auto w-full rounded-xl object-cover"
                unoptimized
              />
            )}
          </div>
        )
      )}
    </div>
  );
}
