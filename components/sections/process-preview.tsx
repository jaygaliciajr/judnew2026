import { SectionShell } from "@/components/layout/section-shell";
import { FadeUp } from "@/components/motion/fade-up";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/content/process";

export function ProcessPreview() {
  return (
    <SectionShell variant="panel">
      <FadeUp>
        <SectionHeading
          eyebrow="Process"
          title="A structured collaboration model that keeps quality high and decisions clear."
          description="Simple, transparent stages reduce friction while keeping each phase aligned to business outcome and final execution."
        />
      </FadeUp>
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.slice(0, 4).map((step, index) => (
          <FadeUp key={step.step} delay={index * 0.05}>
            <Card className="h-full bg-white/3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[rgba(86,168,255,0.08)] text-sm font-semibold tracking-[0.18em] text-[var(--primary-strong)]">
                {step.step}
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-[var(--text)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{step.description}</p>
            </Card>
          </FadeUp>
        ))}
      </div>
    </SectionShell>
  );
}
