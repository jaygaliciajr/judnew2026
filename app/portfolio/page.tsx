import { PageTransition } from "@/components/motion/page-transition";
import { FadeUp } from "@/components/motion/fade-up";
import { FinalCTA } from "@/components/sections/final-cta";
import { PortfolioGallery } from "@/components/sections/portfolio-gallery";
import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description: "Selected website development, hosting support, and digital creative work for businesses and professionals.",
  path: "/portfolio",
  keywords: ["website portfolio", "software solutions portfolio", "web development projects"]
});

export default function PortfolioPage() {
  return (
    <PageTransition>
      <SectionShell className="pt-16 sm:pt-20">
        <FadeUp>
          <div className="max-w-3xl">
            <Badge className="mb-5">Portfolio</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:text-6xl">
              Selected work focused on practical website delivery and digital business support.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              A concise view of the kinds of web and digital work delivered for businesses that need clearer presentation and dependable online support.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.04}>
          <PortfolioGallery />
        </FadeUp>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeUp>
            <Card className="h-full">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">Case-study framing</p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                The work is positioned around business usefulness, not just visuals.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                The focus is on helping clients launch faster, communicate services more clearly, and keep their websites easier to manage over time.
              </p>
            </Card>
          </FadeUp>
          <FadeUp delay={0.06}>
            <Card className="h-full">
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">Websites</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">Business, company, and service-focused website builds.</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">Support</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">Hosting, maintenance, and domain-related support.</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">Creative</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">Graphics, branding support, and digital content assets.</p>
                </div>
              </div>
            </Card>
          </FadeUp>
        </div>
      </SectionShell>
      <FinalCTA />
    </PageTransition>
  );
}
