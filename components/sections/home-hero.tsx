import { FadeUp } from "@/components/motion/fade-up";
import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import { BlurOrb } from "@/components/ui/blur-orb";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteContent } from "@/content/site";

const capabilityChips = ["Website Development", "Mobile Apps", "Domain & Hosting", "SEO Support"];

export function HomeHero() {
  return (
    <SectionShell className="overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      <BlurOrb className="left-[-8rem] top-[2rem] h-72 w-72 sm:h-[28rem] sm:w-[28rem]" />
      <BlurOrb className="right-[-8rem] top-[-4rem] h-72 w-72 opacity-80 sm:h-[28rem] sm:w-[28rem]" />
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeUp>
          <div className="max-w-3xl">
            <Badge className="mb-5">Premium Design Partner</Badge>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.065em] text-[var(--text)] sm:text-6xl lg:text-[5.1rem] lg:leading-[0.96]">
              Your digital partner
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
              {siteContent.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-quote">{siteContent.ctas.primary}</ButtonLink>
              <ButtonLink href="/portfolio" variant="secondary">
                {siteContent.ctas.secondary}
              </ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {capabilityChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex rounded-full border border-[var(--border)] bg-white/5 px-4 py-2 text-sm text-[var(--text-soft)]"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-[var(--text-soft)]">
              <span>Philippines-based, serving clients locally and abroad since 2012</span>
              <span className="text-[var(--success)]">Fast, strategic, launch-ready execution</span>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <Card blur className="relative overflow-hidden p-7 sm:p-8">
            <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(155,201,255,0.84),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(86,168,255,0.12),transparent_35%)]" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--text-soft)]">Current focus</p>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-4xl font-semibold tracking-[-0.05em] text-[var(--text)]">High-trust digital experiences</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    Premium presentation, cleaner UX, and technical execution structured to make the business look more established.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-[var(--border)] bg-white/4 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-soft)]">Service Focus</p>
                    <p className="mt-3 text-2xl font-semibold text-[var(--text)]">Websites + Mobile Apps</p>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                      Built for service brands, entrepreneurs, and growing businesses in the Philippines and beyond.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[var(--border)] bg-white/4 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-soft)]">Engagement Style</p>
                    <p className="mt-3 text-2xl font-semibold text-[var(--text)]">Practical + Reliable</p>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">Clear communication, efficient delivery, and dependable support.</p>
                  </div>
                </div>
                <div className="theme-hero-metric grid gap-3 rounded-3xl border border-[var(--border)] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-[var(--text-soft)]">Positioning</span>
                    <span className="text-sm font-medium text-[var(--primary-strong)]">Premium / Modern / Trust-led</span>
                  </div>
                  <div className="theme-hero-meter h-2 rounded-full">
                    <div className="h-2 w-[82%] rounded-full bg-[linear-gradient(90deg,var(--primary),var(--primary-strong))]" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </FadeUp>
      </div>
    </SectionShell>
  );
}
