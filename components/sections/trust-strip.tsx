import { SectionShell } from "@/components/layout/section-shell";

const trustPoints = [
  { label: "Since", value: "Serving clients since 2012" },
  { label: "Focus", value: "Websites, mobile apps, SEO, and support" },
  { label: "Delivery", value: "Practical, clear, and business-focused" },
  { label: "Reach", value: "Philippines-based, remote-ready" }
];

export function TrustStrip() {
  return (
    <SectionShell className="py-8">
      <div className="grid gap-4 rounded-[var(--radius-xl)] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((item) => (
          <div key={item.label} className="rounded-2xl border border-[var(--border-subtle)] bg-white/4 px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--primary-strong)]">{item.label}</p>
            <p className="mt-2 text-sm font-medium tracking-[-0.01em] text-[var(--text-soft)]">{item.value}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
