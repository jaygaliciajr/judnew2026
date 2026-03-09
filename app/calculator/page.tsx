import { PageTransition } from "@/components/motion/page-transition";
import { SectionShell } from "@/components/layout/section-shell";
import { FadeUp } from "@/components/motion/fade-up";
import { BudgetCalculator } from "@/components/sections/budget-calculator";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Budget Calculator",
  description:
    "Use a conversational budget calculator for website development, mobile apps, SEO, hosting, branding, video, and support with multi-service estimates in local or international currencies.",
  path: "/calculator",
  keywords: [
    "software solutions budget calculator",
    "website development cost philippines",
    "mobile app development budget estimate",
    "digital services cost calculator",
    "seo pricing estimate philippines"
  ]
});

export default function CalculatorPage() {
  return (
    <PageTransition>
      <SectionShell className="pt-16 sm:pt-20">
        <FadeUp>
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-5">Conversational Calculator</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:text-6xl">
              A smarter way to estimate your digital project budget
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
              This estimator is designed to feel more premium than a static price list. It guides people through a short conversation, supports multiple services in one package, and returns a working budget in the currency that fits them best.
            </p>
          </div>
        </FadeUp>

        <div className="mt-14">
          <BudgetCalculator />
        </div>
      </SectionShell>
    </PageTransition>
  );
}
