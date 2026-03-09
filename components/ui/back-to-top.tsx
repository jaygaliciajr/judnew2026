"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      setVisible(progress >= 0.5);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={cn(
        "theme-back-to-top fixed bottom-24 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-[var(--shadow-md)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary-strong)] md:bottom-6 md:right-6",
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <span className="text-lg leading-none">↑</span>
    </button>
  );
}
