import { Suspense } from "react";

import { PageTransition } from "@/components/motion/page-transition";
import { FadeUp } from "@/components/motion/fade-up";
import { QuoteFlow } from "@/components/sections/quote-flow";
import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Request a Quote",
  description:
    "Start a conversational quote request for website development, mobile app development, SEO, hosting, branding, and digital support.",
  path: "/request-quote",
  keywords: [
    "request quote software solutions",
    "website development quote",
    "mobile app development quote",
    "digital solutions inquiry"
  ]
});

export default function RequestQuotePage() {
  return (
    <PageTransition>
      <SectionShell className="pt-16 sm:pt-20">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5">Request a Quote</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:text-6xl">
              A more thoughtful way to ask for a quote
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
              Instead of a stiff contact form, this page guides people through a short, service-based conversation so the request feels clearer, easier, and more premium.
            </p>
          </div>
        </FadeUp>
        <div className="mt-14">
          <Suspense fallback={null}>
            <QuoteFlow />
          </Suspense>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
