import type { SelectHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "w-full appearance-none rounded-2xl border border-[var(--border)] bg-white/4 px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)] focus:bg-white/6",
        props.className
      )}
      {...props}
    />
  );
}
