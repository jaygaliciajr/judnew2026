"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { siteContent } from "@/content/site";
import { services } from "@/content/services";
import { ButtonLink } from "@/components/ui/button";
import { ThemeMark } from "@/components/ui/theme-mark";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  onToggle: () => void;
};

function AboutIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
      <circle cx="10" cy="6.25" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.75 15.75C6.35 13.55 7.85 12.5 10 12.5C12.15 12.5 13.65 13.55 14.25 15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
      <rect x="3.5" y="4" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="4" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3.5" y="11.5" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="11.5" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
      <rect x="3.5" y="5" width="13" height="10.5" rx="1.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 5V4.25C7 3.56 7.56 3 8.25 3H11.75C12.44 3 13 3.56 13 4.25V5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ProcessIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M5 5.5H15M5 10H12.5M5 14.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14.5" cy="14.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function FaqIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M7.9 7.2C7.9 6.05 8.83 5.12 9.98 5.12C11.13 5.12 12.06 6.05 12.06 7.2C12.06 8.68 10.5 8.96 10.07 10.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="13.65" r="0.7" fill="currentColor" />
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
      <rect x="3.5" y="5" width="13" height="10" rx="1.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 6L10 10.25L15.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const navigateItems = [
  { href: "/about", label: "About", icon: AboutIcon },
  { href: "/services", label: "Services", icon: ServicesIcon },
  { href: "/portfolio", label: "Portfolio", icon: PortfolioIcon },
  { href: "/process", label: "Process", icon: ProcessIcon },
  { href: "/faq", label: "FAQ", icon: FaqIcon },
  { href: "/contact", label: "Contact", icon: ContactIcon }
];

function HomeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4.5 w-4.5">
      <path
        d="M4.75 8.25L10 4L15.25 8.25V14.75H4.75V8.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.25 14.75V11.25H11.75V14.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MobileNav({ open, onClose, onToggle }: MobileNavProps) {
  return (
    <>
      <motion.button
        type="button"
        onClick={onToggle}
        whileTap={{ scale: 0.96 }}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="theme-mobile-trigger fixed bottom-5 right-5 z-[60] inline-flex h-16 w-16 items-center justify-center rounded-full border backdrop-blur-md md:hidden"
      >
        <span className="theme-mobile-trigger-glow absolute inset-0 rounded-full" />
        <ThemeMark alt={`${siteContent.name} menu trigger`} size={42} className="relative z-10 h-10.5 w-10.5" />
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[70] md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="theme-mobile-backdrop absolute inset-0"
              onClick={onClose}
            />
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.985 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="theme-mobile-panel absolute inset-0 overflow-y-auto"
            >
              <div className="mx-auto flex min-h-full max-w-[var(--container)] flex-col px-5 pb-10 pt-6">
                <div className="flex items-center justify-between gap-4">
                  <Link href="/" onClick={onClose} className="flex min-w-0 items-center gap-3">
                    <ThemeMark alt={`${siteContent.name} mark`} size={44} className="h-11 w-11 shrink-0" />
                    <div className="min-w-0">
                      <span className="block truncate text-base font-semibold tracking-[-0.04em] text-[var(--text)]">
                        {siteContent.name}
                      </span>
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                        {siteContent.tagline}
                      </span>
                    </div>
                  </Link>

                  <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <Link
                      href="/"
                      onClick={onClose}
                      aria-label="Go to home"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/6 text-[var(--text)]"
                    >
                      <HomeIcon />
                    </Link>
                    <button
                      type="button"
                      onClick={onClose}
                      aria-label="Close menu"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/6 text-[var(--text)]"
                    >
                      <span className="text-xl leading-none">×</span>
                    </button>
                  </div>
                </div>

                <div className="mt-8 grid gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ delay: 0.02, duration: 0.18 }}
                    className="theme-mobile-card rounded-[2rem] border p-6 shadow-[var(--shadow-sm)]"
                  >
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-strong)]">Navigate</p>
                    <nav className="mt-5 grid grid-cols-2 gap-3">
                      {navigateItems.map((item) => {
                        const Icon = item.icon;
                        return (
                        <div key={item.href}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="flex min-h-28 flex-col items-start justify-between rounded-[1.5rem] border border-[var(--border-subtle)] bg-white/4 px-4 py-4 text-base font-medium text-[var(--text)] transition duration-200 hover:border-[var(--primary)] hover:bg-[rgba(86,168,255,0.1)]"
                          >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white/7 text-[var(--primary-strong)]">
                              <Icon />
                            </span>
                            <span>{item.label}</span>
                          </Link>
                        </div>
                      )})}
                    </nav>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ delay: 0.05, duration: 0.18 }}
                    className="theme-mobile-card rounded-[2rem] border p-6 shadow-[var(--shadow-sm)]"
                  >
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-strong)]">Services</p>
                    <div className="mt-5 grid gap-3">
                      {services.slice(0, 7).map((service) => (
                        <div key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            onClick={onClose}
                            className="flex items-center justify-between rounded-2xl px-1 py-2 text-sm leading-6 text-[var(--text-soft)] transition duration-200 hover:text-[var(--text)]"
                          >
                            <span className="max-w-[85%]">{service.title}</span>
                            <span className="text-[var(--primary-strong)]">→</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.08, duration: 0.18 }}
                  className="theme-mobile-cta mt-8 rounded-[2rem] border p-6 shadow-[0_16px_40px_rgba(3,9,22,0.18)]"
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-strong)]">Start a project</p>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">
                    Tell me what you need and I’ll guide the quote the right way.
                  </p>
                  <div className="mt-5" onClick={onClose}>
                    <ButtonLink href="/request-quote" className="w-full">
                      {siteContent.ctas.primary}
                    </ButtonLink>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
