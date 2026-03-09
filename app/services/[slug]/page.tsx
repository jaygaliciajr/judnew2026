import { notFound } from "next/navigation";

import { PageTransition } from "@/components/motion/page-transition";
import { FadeUp } from "@/components/motion/fade-up";
import { FinalCTA } from "@/components/sections/final-cta";
import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getServiceBySlug, services } from "@/content/services";
import { createPageMetadata } from "@/lib/seo";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return createPageMetadata({
      title: "Service Not Found",
      description: "The requested service page could not be found.",
      path: `/services/${slug}`
    });
  }

  return createPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    keywords: [service.title.toLowerCase(), ...service.tags.map((tag) => tag.toLowerCase())]
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <PageTransition>
      <SectionShell className="pt-16 sm:pt-20">
        <FadeUp>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-3xl">
              <Badge className="mb-5">Service Detail</Badge>
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">{service.heroDescription}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] bg-white/5 px-4 py-2 text-sm text-[var(--text-soft)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href={`/request-quote?service=${service.quoteKey}`}>Request a Quote</ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  Back to Services
                </ButtonLink>
              </div>
            </div>

            <FadeUp delay={0.05}>
              <Card blur>
                <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">Overview</p>
                <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">{service.summary}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{service.detail}</p>
              </Card>
            </FadeUp>
          </div>
        </FadeUp>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          <FadeUp>
            <Card className="h-full">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">What is included</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-muted)]">
                {service.deliverables.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </Card>
          </FadeUp>
          <FadeUp delay={0.04}>
            <Card className="h-full">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">Best suited for</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-muted)]">
                {service.idealFor.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </Card>
          </FadeUp>
          <FadeUp delay={0.08}>
            <Card className="h-full">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">Expected outcomes</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-muted)]">
                {service.outcomes.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </Card>
          </FadeUp>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeUp>
            <Card className="h-full">
              <SectionHeading
                eyebrow="How this service helps"
                title={`A focused ${service.title.toLowerCase()} engagement, shaped around practical business needs.`}
                description="The work is structured to stay clear, manageable, and aligned with what actually helps the business online, instead of adding unnecessary complexity."
              />
            </Card>
          </FadeUp>
          <FadeUp delay={0.06}>
            <Card className="h-full">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">Need something adjacent?</p>
              <div className="mt-5 space-y-4">
                {relatedServices.map((item) => (
                  <div key={item.slug} className="rounded-3xl border border-[var(--border)] bg-white/4 p-4">
                    <p className="text-base font-semibold text-[var(--text)]">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{item.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-4">
                      <ButtonLink href={`/services/${item.slug}`} variant="ghost" className="px-0 py-0">
                        View service
                      </ButtonLink>
                      <ButtonLink href={`/request-quote?service=${item.quoteKey}`} variant="ghost" className="px-0 py-0 text-[var(--primary-strong)] hover:bg-transparent">
                        Request quote
                      </ButtonLink>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </FadeUp>
        </div>
      </SectionShell>
      <FinalCTA />
    </PageTransition>
  );
}
