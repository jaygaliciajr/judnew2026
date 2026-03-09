import { PageTransition } from "@/components/motion/page-transition";
import { FadeUp } from "@/components/motion/fade-up";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact for Software Solutions and Web Services",
  description:
    "Get in touch for website development, mobile apps, domain, hosting, SEO, branding, or ongoing web support in the Philippines and for clients abroad.",
  path: "/contact",
  keywords: [
    "contact web developer philippines",
    "request software solution quote",
    "website development inquiry philippines"
  ]
});

export default function ContactPage() {
  return (
    <PageTransition>
      <SectionShell className="pt-16 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <FadeUp>
            <div className="max-w-3xl">
              <Badge className="mb-5">Contact</Badge>
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:text-6xl">
                Let’s talk about the website or digital support your business needs.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
                Reach out for website development, mobile apps, domain and hosting support, SEO, graphics, video editing, or post-launch maintenance in the Philippines and for clients abroad.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.06}>
            <Card blur className="h-full">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-strong)]">Inquiry Framing</p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                The clearer the requirement, the faster the project can move.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                Helpful details include the service needed, target timeline, current issues, whether support is for a new build or existing setup, and whether the project is based in the Philippines or international.
              </p>
            </Card>
          </FadeUp>
        </div>

        <div className="mt-14">
          <ContactFormSection />
        </div>
      </SectionShell>
      <FinalCTA />
    </PageTransition>
  );
}
