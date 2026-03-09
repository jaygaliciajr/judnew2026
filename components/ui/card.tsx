import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type CardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    blur?: boolean;
  }
>;

export function Card({ children, className, blur = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[var(--shadow-sm)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-sm)]",
        blur && "backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
