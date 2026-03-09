import { PageTransition } from "@/components/motion/page-transition";
import { FAQPreview } from "@/components/sections/faq-preview";
import { FinalCTA } from "@/components/sections/final-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { ProcessPreview } from "@/components/sections/process-preview";
import { ServicesPreview } from "@/components/sections/services-preview";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Software Solutions, Website Development, and Mobile App Development",
  description:
    "Software solutions, website development, mobile app development, SEO, and digital support for businesses in the Philippines and abroad.",
  keywords: [
    "software solutions philippines",
    "website development",
    "mobile app development",
    "web developer philippines",
    "digital solutions for business"
  ]
});

export default function HomePage() {
  return (
    <PageTransition>
      <HomeHero />
      <TrustStrip />
      <ServicesPreview />
      <PortfolioPreview />
      <ProcessPreview />
      <WhyWorkWithMe />
      <FAQPreview />
      <FinalCTA />
    </PageTransition>
  );
}
