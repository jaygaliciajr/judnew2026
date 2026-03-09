import { PageTransition } from "@/components/motion/page-transition";
import { FadeUp } from "@/components/motion/fade-up";
import { FinalCTA } from "@/components/sections/final-cta";
import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { processSteps } from "@/content/process";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Process",
  description: "See how projects move from requirement discussion to planning, build, quality check, launch, turnover, and ongoing support.",
  path: "/process",
  keywords: ["web development process", "software project process", "website build workflow"]
});

export default function ProcessPage() {
  return (
    <PageTransition>
      <SectionShell className="pt-16 sm:pt-20">
        <FadeUp>
          <div className="max-w-3xl">
            <Badge className="mb-5">Process</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:text-6xl">
              A simple process designed to keep website projects clear and manageable.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              The flow is straightforward: discuss the requirement, plan the structure, build and refine, check the quality, launch and turn over properly, then continue with support where needed.
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {processSteps.map((step, index) => (
            <FadeUp key={step.step} delay={index * 0.04}>
              <Card className="h-full">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[rgba(86,168,255,0.08)] text-sm font-semibold tracking-[0.18em] text-[var(--primary-strong)]">
                  {step.step}
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">{step.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{step.description}</p>
              </Card>
            </FadeUp>
          ))}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeUp>
            <Card className="h-full">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">How collaboration works</p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                Clear stages help the work move forward without making the project feel overly technical.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                Each stage gives the client visibility into progress while keeping the work practical, organized, and easy to follow from start to handoff.
              </p>
            </Card>
          </FadeUp>
          <FadeUp delay={0.06}>
            <Card className="h-full">
              <div className="space-y-4 text-sm leading-7 text-[var(--text-muted)]">
                <p>Requirements are discussed first so the scope, priorities, and expected output are clear from the beginning.</p>
                <p>Build work moves through planning, refinement, and quality checking instead of jumping straight into launch.</p>
                <p>After turnover, support remains available for maintenance, updates, and future improvements.</p>
              </div>
            </Card>
          </FadeUp>
        </div>
      </SectionShell>
      <FinalCTA />
    </PageTransition>
  );
}
