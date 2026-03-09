import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = {
  primary:
    "border border-white/50 bg-[linear-gradient(180deg,#f8fbff_0%,#d9e9ff_100%)] !text-[#0a1324] shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:border-white/70 hover:bg-[linear-gradient(180deg,#ffffff_0%,#e4efff_100%)] hover:!text-[#050b16] hover:shadow-[var(--shadow-md)]",
  secondary:
    "border border-[var(--border-strong)] bg-[var(--surface-soft)] text-[var(--text)] hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--surface)]",
  ghost:
    "border border-transparent text-[var(--text-soft)] hover:-translate-y-0.5 hover:bg-white/6 hover:text-[var(--text)]"
};

const baseClass =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[-0.01em] transition duration-200 ease-out active:scale-[0.99]";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof buttonVariants;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button className={cn(baseClass, buttonVariants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ children, className, href, variant = "primary", ...props }: LinkProps) {
  return (
    <Link href={href} className={cn(baseClass, buttonVariants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
