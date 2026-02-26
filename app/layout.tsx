import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import InteractionFlair from "./InteractionFlair";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeInitScript = `(() => {
  const storageKey = "theme";
  const stored = window.localStorage.getItem(storageKey);
  const mode = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
  if (stored !== "light" && stored !== "dark" && stored !== "system") {
    window.localStorage.setItem(storageKey, "system");
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDark = mode === "dark" || (mode === "system" && prefersDark);
  const root = document.documentElement;
  root.classList.toggle("dark", shouldUseDark);
})();`;

export const metadata: Metadata = {
  title: "Siraaj Kudtarkar | Portfolio",
  description: "Product-focused software engineer crafting clean, thoughtful experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <InteractionFlair />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
