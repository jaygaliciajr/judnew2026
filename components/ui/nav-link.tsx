"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export function NavLink({ href, label, className }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm text-[var(--text-soft)] transition duration-200 hover:text-[var(--text)]",
        active && "text-[var(--text)]",
        className
      )}
    >
      <span>{label}</span>
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 -bottom-2 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,transparent,var(--primary-strong),transparent)] transition duration-200",
          active && "scale-x-100"
        )}
      />
    </Link>
  );
}
