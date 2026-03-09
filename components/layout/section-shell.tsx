import type { PropsWithChildren } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SectionShellProps = PropsWithChildren<{
  className?: string;
  variant?: "default" | "muted" | "panel";
  containerClassName?: string;
  id?: string;
}>;

export function SectionShell({
  children,
  className,
  variant = "default",
  containerClassName,
  id
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-[var(--space-section)]",
        variant === "muted" && "bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]",
        variant === "panel" && "mx-3 my-4 rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-soft)] sm:mx-6",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
