"use client";

import { useState } from "react";
import {
  resources,
  filterTabs,
  categoryLabels,
  type ResourceCategory,
} from "@/data/resources";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { Modal } from "@/components/ui/Modal";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export function Works() {
  const [activeFilter, setActiveFilter] = useState<ResourceCategory>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered =
    activeFilter === "all"
      ? resources
      : resources.filter((r) => r.category === activeFilter);

  const selected = resources.find((r) => r.id === selectedId);

  return (
    <SectionShell id="works" className="bg-accent-soft/40 border-y border-border">
      <SectionHeading
        label="ЦОР"
        title="Работы и материалы"
        description="Цифровые образовательные ресурсы по модулю ПМ 02"
      />

      <div className="mt-8">
        <FilterTabs
          tabs={filterTabs}
          active={activeFilter}
          onChange={setActiveFilter}
        />
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((resource) => (
          <button
            key={resource.id}
            type="button"
            onClick={() => setSelectedId(resource.id)}
            className="group card-refined text-left rounded-2xl overflow-hidden ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-accent/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <div className="gradient-header flex h-[88px] items-center justify-center px-4">
              <span className="heading-display text-2xl font-semibold tracking-wide text-white/95">
                {resource.icon}
              </span>
            </div>

            <div className="p-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                {categoryLabels[resource.category]}
              </span>
              <h3 className="heading-display mt-2 text-[15px] font-semibold leading-snug text-navy">
                {resource.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                {resource.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted">
          В этой категории нет материалов.
        </p>
      )}

      {selected && (
        <Modal
          isOpen={!!selected}
          onClose={() => setSelectedId(null)}
          title={selected.title}
        >
          <p>{selected.fullDescription}</p>
          <span className="mt-4 inline-block rounded-md bg-accent-soft px-3 py-1 text-xs font-medium text-accent-deep">
            {categoryLabels[selected.category]}
          </span>
        </Modal>
      )}
    </SectionShell>
  );
}
