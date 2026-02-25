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

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className ?? "h-full w-full"}`}>
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#fffdf9]/90 dark:bg-[#111111]/90">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#c9a988]/50 border-t-[#8a4a2b] dark:border-[#5a3e2c]/50 dark:border-t-[#f7ede4]" />
          <p className="text-sm font-semibold text-[#7a5a42] dark:text-[#d7c4b6]">Loading video...</p>
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
          window.setTimeout(() => setIsLoaded(true), 500);
        }}
      />
    </div>
  );
}
