import { PageTransition } from "@/components/motion/page-transition";
import { FadeUp } from "@/components/motion/fade-up";
import { FinalCTA } from "@/components/sections/final-cta";
import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo";

const principles = [
  {
    title: "Profile Summary",
    body: "The work combines website development, design support, and practical digital execution shaped through years of direct client work."
  },
  {
    title: "Strengths & Approach",
    body: "Projects are handled with direct communication, efficient workflow, and respect for client goals, timelines, and feedback."
  },
  {
    title: "Work Philosophy",
    body: "The goal is not just to build a website, but to help the business grow by being clearer, more visible, and easier to trust online."
  }
];

const standards = [
  "Serving clients since 2012",
  "Philippines-based, remote-ready",
  "Focused on practical business outcomes"
];

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Judy Galicia Jr., a Philippines-based digital partner providing website development, mobile apps, and practical web services for clients locally and abroad.",
  path: "/about",
  keywords: ["about web developer", "website developer philippines", "digital partner philippines"]
});

export default function AboutPage() {
  return (
    <PageTransition>
      <SectionShell className="overflow-hidden pt-16 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <FadeUp>
            <div className="max-w-3xl">
              <Badge className="mb-5">About</Badge>
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:text-6xl">
                A Philippines-based digital partner with practical experience built since 2012.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
                Judy Galicia Jr. works with businesses in the Philippines and abroad that need websites, mobile apps, online visibility, and digital support delivered in a way that feels clear, reliable, and easy to work with.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.06}>
            <Card blur className="relative overflow-hidden">
              <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(155,201,255,0.84),transparent)]" />
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-strong)]">Working Style</p>
              <p className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-[var(--text)]">Making web projects feel less complicated.</p>
              <div className="mt-6 grid gap-3">
                {standards.map((item) => (
                  <div key={item} className="rounded-2xl border border-[var(--border-subtle)] bg-white/4 px-4 py-3 text-sm text-[var(--text-soft)]">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </FadeUp>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {principles.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.05}>
              <Card className="h-full">
                <h2 className="text-xl font-semibold tracking-[-0.04em] text-[var(--text)]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{item.body}</p>
              </Card>
            </FadeUp>
          ))}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeUp>
            <Card className="h-full">
              <SectionHeading
                eyebrow="Approach"
                title="The work is designed to be clear, useful, and reliable from planning through launch."
                description="The goal is practical execution that helps businesses present themselves better online, communicate services more clearly, and stay easier to manage after launch."
              />
            </Card>
          </FadeUp>
          <FadeUp delay={0.06}>
            <Card className="h-full">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">Working Style</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    Can work independently, with minimal supervision, or as part of a team depending on project needs.
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">Best Fit</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    Businesses that want a dependable web partner for websites, maintenance, hosting, SEO, and design support.
                  </p>
                </div>
              </div>
            </Card>
          </FadeUp>
        </div>
      </SectionShell>
      <FinalCTA />
    </PageTransition>
  );
}
