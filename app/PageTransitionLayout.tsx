"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

export default function PageTransitionLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence initial={false}>
        <motion.div
          key={`${pathname}-overlay`}
          layout
          className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(120deg,rgba(157,94,52,0.32),rgba(214,160,90,0.22),rgba(255,251,247,0.18))] dark:bg-[linear-gradient(120deg,rgba(247,237,228,0.16),rgba(197,140,92,0.24),rgba(26,18,12,0.35))]"
          initial={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
          animate={{ opacity: [0, 0.9, 0], scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
          transition={{ duration: 0.7, times: [0, 0.45, 1], ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
    </div>
  );
}
