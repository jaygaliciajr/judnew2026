import { SectionShell } from "@/components/layout/section-shell";
import { FadeUp } from "@/components/motion/fade-up";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/content/faq";

export function FAQPreview() {
  return (
    <SectionShell variant="muted">
      <FadeUp>
        <SectionHeading
          eyebrow="FAQ"
          title="Clear answers before the work starts."
          description="A concise preview of how projects, support, and collaboration are usually structured."
        />
      </FadeUp>
      <div className="mt-12 grid gap-4">
        {faqItems.slice(0, 3).map((item, index) => (
          <FadeUp key={item.question} delay={index * 0.05}>
            <Card className="bg-white/3">
              <details className="group">
                <summary className="cursor-pointer list-none text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.answer}</p>
              </details>
            </Card>
          </FadeUp>
        ))}
      </div>
      <div className="mt-10">
        <ButtonLink href="/faq" variant="secondary">
          Explore FAQ
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
