import Image from "next/image";
import { site } from "@/data/site";
import { SoftwareIcon } from "@/components/ui/SoftwareIcon";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div
        className="pointer-events-none absolute inset-0 pattern-dots opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 88% 12%, #dce8f2 0%, transparent 42%), radial-gradient(circle at 8% 88%, #ede8e0 0%, transparent 38%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 py-14 lg:px-6 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_260px] lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                Портфолио педагога
              </span>
            </div>
            <p className="mt-5 text-sm font-medium text-muted">{site.role}</p>
            <h1 className="heading-display mt-2 text-[2rem] font-semibold leading-[1.15] tracking-tight text-navy sm:text-[2.4rem]">
              {site.name}
            </h1>
            <div className="section-rule mt-5" />
            <p className="mt-5 max-w-lg text-[15px] leading-[1.7] text-muted">
              {site.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {site.skills.map((skill) => (
                <span
                  key={skill.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/90 px-3 py-1.5 text-xs font-medium text-navy/85 shadow-sm backdrop-blur-sm transition-colors hover:border-accent/30 hover:bg-accent-soft/60"
                >
                  {skill.icon && (
                    <SoftwareIcon id={skill.icon} size={20} />
                  )}
                  {skill.label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted">
              <span>{site.organization}</span>
              <span className="h-3 w-px bg-warm" />
              <span>{site.city}</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[260px] lg:mx-0">
            <div className="relative">
              <div
                className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl gradient-header opacity-20"
                aria-hidden="true"
              />
              <div
                className="absolute -top-2 -left-2 h-16 w-16 rounded-full border border-warm/40 bg-warm/10"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-[0_16px_48px_rgb(28,43,58,0.14)] ring-1 ring-white/80">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] gradient-accent-bar z-10" />
                <Image
                  src="/images/hero.jpg"
                  alt={site.name}
                  width={260}
                  height={325}
                  className="w-full aspect-[4/5] object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
