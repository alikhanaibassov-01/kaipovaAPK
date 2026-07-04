"use client";

import { type ResourceCategory } from "@/data/resources";

interface FilterTabsProps {
  tabs: { id: ResourceCategory; label: string }[];
  active: ResourceCategory;
  onChange: (id: ResourceCategory) => void;
}

export function FilterTabs({ tabs, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={[
              "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
              isActive
                ? "bg-navy text-white shadow-sm"
                : "border border-border bg-surface text-muted hover:border-accent/40 hover:text-navy",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
