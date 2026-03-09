import { PageTransition } from "@/components/motion/page-transition";
import { FadeUp } from "@/components/motion/fade-up";
import { FinalCTA } from "@/components/sections/final-cta";
import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { faqItems } from "@/content/faq";
import { createPageMetadata } from "@/lib/seo";
import { getFaqSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "FAQ",
  description: "Answers to common questions about project scope, workflow, revisions, and support.",
  path: "/faq",
  keywords: ["website development faq", "software solutions faq", "mobile app development faq"]
});

export default function FAQPage() {
  return (
    <PageTransition>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }} />
      <SectionShell className="pt-16 sm:pt-20">
        <FadeUp>
          <div className="max-w-3xl">
            <Badge className="mb-5">FAQ</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:text-6xl">
              Answers to the practical questions clients usually ask before starting.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              The process is intentionally straightforward: aligned goals, clear scope, thoughtful design, and responsive collaboration.
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid gap-4">
          {faqItems.map((item, index) => (
            <FadeUp key={item.question} delay={index * 0.03}>
              <Card>
                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">
                    {item.question}
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-muted)]">{item.answer}</p>
                </details>
              </Card>
            </FadeUp>
          ))}
        </div>

        <div className="mt-14">
          <FadeUp>
            <Card className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">Still evaluating fit?</p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                If the scope is specific, the fastest way to get clarity is to start a direct conversation.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                Early discussion usually covers goals, timeline, current friction points, and whether design-only or design plus execution is the better structure.
              </p>
            </Card>
          </FadeUp>
        </div>
      </SectionShell>
      <FinalCTA />
    </PageTransition>
  );
}
