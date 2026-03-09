"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { siteContent } from "@/content/site";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ButtonLink } from "@/components/ui/button";
import { ThemeMark } from "@/components/ui/theme-mark";
import { NavLink } from "@/components/ui/nav-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const primaryNavItems = siteContent.navItems.filter((item) =>
  ["/services", "/portfolio", "/process"].includes(item.href)
);

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;

      setScrolled(currentScrollY > 16);

      if (open) {
        setVisible(true);
      } else if (currentScrollY <= 24) {
        setVisible(true);
      } else if (scrollingUp) {
        setVisible(true);
      } else if (currentScrollY - lastScrollY.current > 6) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "z-50 md:sticky md:top-0 md:transition-transform md:duration-300 md:ease-out",
        visible ? "md:translate-y-0" : "md:-translate-y-full"
      )}
    >
      <div className="mx-auto hidden max-w-[var(--container)] px-5 pt-4 sm:px-6 md:block lg:px-8 xl:px-10">
        <div
          className={cn(
            "theme-header-shell relative grid grid-cols-[auto_1fr_auto] items-center gap-6 rounded-full border px-4 py-3 backdrop-blur-2xl transition duration-300 sm:px-5",
            scrolled &&
              "theme-header-shell-scrolled"
          )}
        >
          <div className="theme-header-glow pointer-events-none absolute inset-0 rounded-full" />
          <div className="theme-header-topline pointer-events-none absolute inset-x-6 top-0 h-px" />
          <Link href="/" aria-label={siteContent.name} className="relative z-10 flex items-center justify-center">
            <ThemeMark alt={`${siteContent.name} mark`} size={44} className="h-11 w-11" />
          </Link>

          <nav className="relative z-10 flex items-center justify-center gap-8">
            {primaryNavItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div className="relative z-10 flex items-center justify-end gap-3">
            <ThemeToggle />
            <ButtonLink href="/request-quote" variant="secondary" className="nav-cta-pulse">
              {siteContent.ctas.primary}
            </ButtonLink>
          </div>

        </div>
      </div>
      <MobileNav open={open} onClose={() => setOpen(false)} onToggle={() => setOpen((value) => !value)} />
    </header>
  );
}
