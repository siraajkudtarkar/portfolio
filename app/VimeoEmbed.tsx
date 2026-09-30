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
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#f7eedf]/90 dark:bg-[#221810]/90">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#b8956a]/50 border-t-[#7a3f22] dark:border-[#6b4c35]/50 dark:border-t-[#f5e6d6]" />
          <p className="text-sm font-semibold text-[#664834] dark:text-[#cdb69f]">Loading video...</p>
        </div>
      )}

      {!isLoaded && hasTimedOut && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#f7eedf]/95 px-4 text-center dark:bg-[#221810]/95">
          <p className="text-sm font-semibold text-[#664834] dark:text-[#cdb69f]">This video is taking longer than expected to load.</p>
          <a
            className="inline-flex items-center justify-center rounded-full border border-[#dfceb6] bg-[#f7eedf] px-4 py-2 text-xs font-semibold text-[#4a3222] transition hover:-translate-y-0.5 hover:border-[#b8956a] hover:bg-[#f0e4d1] dark:border-[#3e2d20] dark:bg-[#221810] dark:text-[#f5e6d6] dark:hover:border-[#6b4c35] dark:hover:bg-[#2d2116]"
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
