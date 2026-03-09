"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { Card } from "@/components/ui/card";
import { portfolioItems } from "@/content/portfolio";
import { cn } from "@/lib/utils";

const allFilter = "All";

export function PortfolioGallery() {
  const filters = useMemo(
    () => [allFilter, ...new Set(portfolioItems.map((item) => item.service))],
    []
  );
  const [activeFilter, setActiveFilter] = useState(allFilter);

  const filteredItems = useMemo(() => {
    if (activeFilter === allFilter) return portfolioItems;
    return portfolioItems.filter((item) => item.service === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition duration-200",
              activeFilter === filter
                ? "border-[var(--primary)] bg-[rgba(86,168,255,0.12)] text-[var(--text)]"
                : "border-[var(--border)] bg-white/4 text-[var(--text-soft)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <Card key={item.slug} className="h-full overflow-hidden p-0">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(3,8,18,0.18))]" />
            </div>
            <div className="p-6">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">{item.category}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{item.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--text-soft)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
