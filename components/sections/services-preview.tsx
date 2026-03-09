import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/services";

export function ServicesPreview() {
  return (
    <SectionShell id="services" variant="muted">
      <FadeUp>
        <SectionHeading
          eyebrow="Services"
          title="Design and digital execution built for brands that need more than surface-level polish."
          description="Each engagement is structured to improve perception, usability, and business confidence across every customer-facing touchpoint."
        />
      </FadeUp>
      <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.slice(0, 6).map((service) => (
          <StaggerItem key={service.slug}>
            <Link href={`/services/${service.slug}`} className="group block h-full">
              <Card className="service-card-flash relative h-full overflow-hidden p-7">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,180,255,0.08),transparent_34%)] opacity-70 transition duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex h-full flex-col">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-strong)]">{service.tags[0]}</p>
                  <p className="mt-4 min-h-[3rem] text-xl font-semibold tracking-[-0.03em] text-[var(--text)]">
                    {service.title}
                  </p>
                  <p className="mt-3 min-h-[4.75rem] text-sm leading-7 text-[var(--text-muted)] line-clamp-3">
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
          </StaggerItem>
        ))}
      </StaggerGroup>
      <FadeUp delay={0.08}>
        <div className="mt-10">
          <ButtonLink href="/services" variant="secondary">
            Explore Services
          </ButtonLink>
        </div>
      </FadeUp>
    </SectionShell>
  );
}
