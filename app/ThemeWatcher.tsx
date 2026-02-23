"use client";

import { useEffect } from "react";

type ThemeMode = "light" | "dark" | "system";

const storageKey = "theme";

const resolveTheme = (value: string | null): ThemeMode => {
  return value === "light" || value === "dark" || value === "system" ? value : "system";
};

const applyTheme = (mode: ThemeMode) => {
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDark = mode === "dark" || (mode === "system" && prefersDark);
  root.classList.toggle("dark", shouldUseDark);
};

export function ThemeWatcher() {
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    const resolved = resolveTheme(stored);
    if (stored !== "light" && stored !== "dark" && stored !== "system") {
      localStorage.setItem(storageKey, "system");
    }
    applyTheme(resolved);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = () => {
      applyTheme(resolveTheme(localStorage.getItem(storageKey)));
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== storageKey) return;
      if (event.newValue === null) return;
      applyTheme(resolveTheme(event.newValue));
    };

    media.addEventListener("change", handleMediaChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      media.removeEventListener("change", handleMediaChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return null;
}
