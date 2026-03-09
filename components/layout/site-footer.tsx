import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { siteContent } from "@/content/site";
import { services } from "@/content/services";
import { Container } from "@/components/ui/container";
import { ThemeMark } from "@/components/ui/theme-mark";

export function SiteFooter() {
  const companyLinks = [
    ...siteContent.navItems.filter((item) => ["/about", "/process", "/portfolio", "/faq", "/contact"].includes(item.href)),
    { href: "/calculator", label: "Calculator" }
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[radial-gradient(circle_at_top_left,rgba(86,168,255,0.1),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] py-14 sm:py-18">
      <Container>
        <div className="rounded-[2rem] border border-[rgba(164,197,255,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 shadow-[0_24px_80px_rgba(3,9,22,0.18)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.9fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <ThemeMark alt={`${siteContent.name} mark`} size={40} className="h-10 w-10" />
                <div>
                  <p className="text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">{siteContent.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">{siteContent.tagline}</p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-7 text-[var(--text-muted)]">
                Philippines-based digital partner for websites, mobile apps, SEO support, hosting, and launch-ready execution for clients locally and abroad.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary-strong)]">Company</p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--text-muted)]">
                {companyLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="transition hover:translate-x-0.5 hover:text-[var(--text)]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary-strong)]">Services</p>
              <div className="mt-5 grid gap-3 text-sm text-[var(--text-muted)]">
                {services.slice(0, 7).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="transition hover:translate-x-0.5 hover:text-[var(--text)]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="theme-footer-cta rounded-[1.75rem] border p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary-strong)]">Contact / CTA</p>
              <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
                Tell me what you need and I’ll help shape the right digital solution for your business.
              </p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--text-muted)]">
                <a href={`mailto:${siteContent.email}`} className="transition hover:text-[var(--text)]">
                  {siteContent.email}
                </a>
                <a href={`tel:${siteContent.phone.replace(/\s+/g, "")}`} className="transition hover:text-[var(--text)]">
                  {siteContent.phone}
                </a>
                <p>{siteContent.location}</p>
              </div>
              <div className="mt-6">
                <ButtonLink href="/request-quote" className="w-full sm:w-auto">
                  {siteContent.ctas.primary}
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-[rgba(164,197,255,0.12)] pt-6 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {siteContent.name}. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <span>Philippines-based, serving clients locally and abroad.</span>
              <a href={`mailto:${siteContent.email}`} className="transition hover:text-[var(--text)]">
                {siteContent.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
