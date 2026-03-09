import { SectionShell } from "@/components/layout/section-shell";
import { FadeUp } from "@/components/motion/fade-up";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioItems } from "@/content/portfolio";

export function PortfolioPreview() {
  return (
    <SectionShell>
      <FadeUp>
        <SectionHeading
          eyebrow="Selected Work"
          title="Case-study style work shaped around business clarity and premium product perception."
          description="A concise showcase of launch, redesign, and product design projects across digital categories."
        />
      </FadeUp>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <FadeUp key={item.slug} delay={index * 0.06}>
            <Card className="h-full">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">{item.category}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{item.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--text-soft)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeUp>
        ))}
      </div>
      <div className="mt-10">
        <ButtonLink href="/portfolio" variant="secondary">
          View Portfolio
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
