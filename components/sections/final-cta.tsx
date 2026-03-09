import { SectionShell } from "@/components/layout/section-shell";
import { BlurOrb } from "@/components/ui/blur-orb";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteContent } from "@/content/site";

export function FinalCTA() {
  return (
    <SectionShell className="overflow-hidden">
      <Card blur className="relative overflow-hidden border-[var(--border-strong)] px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
        <BlurOrb className="right-[-6rem] top-[-5rem] h-64 w-64" />
        <BlurOrb className="left-[-3rem] bottom-[-5rem] h-56 w-56 opacity-70" />
        <div className="relative max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary-strong)]">Ready for the next level</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--text)] sm:text-4xl lg:text-5xl">
            If the current digital presence feels below the level of the business, it is time to fix that properly.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
            Best suited for teams that value premium design quality, clear communication, and launch-ready execution without unnecessary layers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/request-quote">{siteContent.ctas.primary}</ButtonLink>
            <ButtonLink href="/services" variant="ghost">
              Review Services
            </ButtonLink>
          </div>
        </div>
      </Card>
    </SectionShell>
  );
}
