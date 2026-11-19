"use client";

import { cn } from "@/lib/utils";

const filters = ["Alles", "Monarch", "Legacy", "Vanguard"] as const;

export type CollectionFilterValue = (typeof filters)[number];

interface CollectionFilterProps {
  activeFilter: CollectionFilterValue;
  onFilterChange: (filter: CollectionFilterValue) => void;
}

export default function CollectionFilter({
  activeFilter,
  onFilterChange,
}: CollectionFilterProps) {
  return (
    <div className="sticky top-[116px] z-30 bg-obsidian/80 backdrop-blur-xl border-b border-smoke">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6 overflow-x-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={cn(
              "text-[12px] uppercase tracking-[0.12em] font-sans pb-2 transition-colors duration-300 whitespace-nowrap",
              activeFilter === filter
                ? "text-champagne border-b border-champagne"
                : "text-silver hover:text-champagne"
            )}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
