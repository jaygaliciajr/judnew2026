import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[var(--container)] px-5 sm:px-6 lg:px-8 xl:px-10", className)}>
      {children}
    </div>
  );
}
