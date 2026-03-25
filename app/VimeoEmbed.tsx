"use client";

import { useEffect, useState } from "react";

type VimeoEmbedProps = {
  src: string;
  title: string;
  className?: string;
  iframeClassName?: string;
  cover?: boolean;
};

export default function VimeoEmbed({ src, title, className, iframeClassName, cover = false }: VimeoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasTimedOut, setHasTimedOut] = useState(false);

  const fallbackUrl = (() => {
    const match = src.match(/player\.vimeo\.com\/video\/(\d+)/);
    if (!match) return src;
    return `https://vimeo.com/${match[1]}`;
  })();

  useEffect(() => {
    setIsLoaded(false);
    setHasTimedOut(false);

    const timeoutId = window.setTimeout(() => {
      setHasTimedOut(true);
    }, 8000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className ?? "h-full w-full"}`}>
      {!isLoaded && !hasTimedOut && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#fffdf9]/90 dark:bg-[#111111]/90">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#c9a988]/50 border-t-[#8a4a2b] dark:border-[#5a3e2c]/50 dark:border-t-[#f7ede4]" />
          <p className="text-sm font-semibold text-[#7a5a42] dark:text-[#d7c4b6]">Loading video...</p>
        </div>
      )}

      {!isLoaded && hasTimedOut && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#fffdf9]/95 px-4 text-center dark:bg-[#111111]/95">
          <p className="text-sm font-semibold text-[#7a5a42] dark:text-[#d7c4b6]">This video is taking longer than expected to load.</p>
          <a
            className="inline-flex items-center justify-center rounded-full border border-[#e6d8c8] bg-[#fffbf7] px-4 py-2 text-xs font-semibold text-[#5a4030] transition hover:-translate-y-0.5 hover:border-[#c9a988] hover:bg-[#f6ebdf] dark:border-[#3b2a1f] dark:bg-[#1a120c] dark:text-[#f7ede4] dark:hover:border-[#5a3e2c] dark:hover:bg-[#2a1b12]"
            href={fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open video on Vimeo
          </a>
        </div>
      )}

      <iframe
        key={src}
        src={src}
        title={title}
        className={`block h-full w-full border-0 ${cover ? "scale-[1.00]" : ""} ${iframeClassName ?? ""}`}
        allow="autoplay; fullscreen; picture-in-picture"
        loading="lazy"
        onLoad={() => {
          setHasTimedOut(false);
          window.setTimeout(() => setIsLoaded(true), 500);
        }}
      />
    </div>
  );
}
