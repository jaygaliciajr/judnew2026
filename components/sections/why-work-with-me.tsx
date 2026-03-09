import { SectionShell } from "@/components/layout/section-shell";
import { FadeUp } from "@/components/motion/fade-up";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    title: "Design quality that raises perception",
    body: "The work is shaped to look established, reduce friction, and make the brand feel more credible from the first screen."
  },
  {
    title: "Strategic thinking, not decoration",
    body: "Structure, messaging hierarchy, and UX choices are tied to how the business needs to be understood and trusted."
  },
  {
    title: "Reliable communication and delivery",
    body: "Projects run with direct feedback, clean milestones, and implementation realism so momentum stays intact."
  }
];

export function WhyWorkWithMe() {
  return (
    <SectionShell>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeUp>
          <SectionHeading
            eyebrow="Why Judy Galicia Jr."
            title="A digital partner focused on sharp thinking, polished execution, and calm delivery."
            description="The work combines visual refinement, UX reasoning, and implementation awareness so the final result feels elevated without becoming impractical."
          />
        </FadeUp>
        <div className="grid gap-4">
          {reasons.map((reason, index) => (
            <FadeUp key={reason.title} delay={index * 0.05}>
              <Card className="bg-white/3">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text)]">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{reason.body}</p>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
