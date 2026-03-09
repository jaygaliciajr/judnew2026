import Link from "next/link";

import { PageTransition } from "@/components/motion/page-transition";
import { FadeUp } from "@/components/motion/fade-up";
import { FinalCTA } from "@/components/sections/final-cta";
import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Software Solutions and Web Services",
  description:
    "Software solutions, website development, mobile app development, domain registration, hosting, SEO, branding, video editing, and website support services.",
  path: "/services",
  keywords: [
    "software solutions",
    "website development philippines",
    "mobile app development philippines",
    "web hosting philippines",
    "seo services philippines"
  ]
});

export default function ServicesPage() {
  return (
    <PageTransition>
      <SectionShell className="pt-16 sm:pt-20">
        <FadeUp>
          <div className="max-w-3xl">
            <Badge className="mb-5">Services</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:text-6xl">
              Practical web services built around what businesses actually need online.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              Services are focused on websites, mobile apps, digital visibility, and related support that help businesses launch, improve, and maintain their online presence.
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <FadeUp key={service.slug} delay={index * 0.03}>
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <Card className="service-card-flash relative h-full overflow-hidden p-7">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,180,255,0.08),transparent_34%)] opacity-70 transition duration-300 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-full flex-col">
                    <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">{service.tags[0]}</p>
                    <h2 className="mt-4 min-h-[3rem] text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                      {service.title}
                    </h2>
                    <p className="mt-4 min-h-[4.75rem] text-sm leading-7 text-[var(--text-muted)] line-clamp-3">
                      {service.summary}
                    </p>
                    <p className="mt-4 min-h-[7rem] text-sm leading-7 text-[var(--text-soft)] line-clamp-4">
                      {service.detail}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex rounded-full border border-[var(--border)] bg-white/5 px-3 py-1.5 text-xs font-medium tracking-[0.01em] text-[var(--text-soft)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </FadeUp>
          ))}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeUp>
            <Card className="h-full">
              <SectionHeading
                eyebrow="Engagement Model"
                title="Services can be delivered individually or combined into a complete website support scope."
                description="Some clients only need a domain, hosting, or maintenance help. Others need the full website planning, build, launch, and long-term support package."
              />
            </Card>
          </FadeUp>
          <FadeUp delay={0.06}>
            <Card className="h-full">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">How it fits together</p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--text-muted)]">
                <p>Website planning begins with the actual business need, not unnecessary complexity.</p>
                <p>Design, development, hosting, and visibility support can be bundled based on the project scope.</p>
                <p>After launch, maintenance and updates remain available so the website stays usable and current.</p>
              </div>
            </Card>
          </FadeUp>
        </div>
      </SectionShell>
      <FinalCTA />
    </PageTransition>
  );
}
