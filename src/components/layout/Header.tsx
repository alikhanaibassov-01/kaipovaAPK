"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { HeaderSoftwareTools } from "@/components/layout/HeaderSoftwareTools";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="gradient-accent-bar h-[3px]" />

      <div className="header-bar backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5 lg:px-6">
          <a href="#" className="group flex items-center gap-3 min-w-0">
            <div
              className="gradient-header flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white shadow-[0_4px_14px_rgb(42,74,98,0.4)] ring-2 ring-white/40 transition-transform duration-300 group-hover:scale-[1.03]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              КА
            </div>
            <div className="min-w-0 hidden sm:block">
              <p className="heading-display text-sm font-semibold text-navy leading-tight">
                {site.shortName}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-deep">
                ПМ 02 · ЦОР
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-0.5 md:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-medium text-navy/70 transition-colors hover:text-navy"
              >
                {item.label}
                <span
                  className="absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-accent-deep opacity-0 scale-x-0 transition-all duration-300 origin-left group-hover:opacity-100 group-hover:scale-x-100"
                />
              </a>
            ))}
          </nav>

          <HeaderSoftwareTools />

          <a
            href="#contact"
            className="gradient-header hidden items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgb(28,43,58,0.3)] transition-all duration-300 hover:shadow-[0_6px_24px_rgb(28,43,58,0.4)] hover:-translate-y-px md:inline-flex"
          >
            Контакты
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <button
            type="button"
            className="gradient-header rounded-xl p-2.5 text-white shadow-md md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
            aria-expanded={open}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="border-t border-accent/15 bg-[#d4e0ec]/95 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-white/50 bg-surface/90 px-4 py-3 text-sm font-medium text-navy shadow-sm transition-colors hover:border-accent/30"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="gradient-header rounded-xl px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Контакты
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
