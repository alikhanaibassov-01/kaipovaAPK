import { site } from "@/data/site";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export function About() {
  return (
    <SectionShell id="about">
      <SectionHeading title="Обо мне" label="Биография" />

      <div className="mt-10 grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-2 space-y-4 text-[15px] leading-[1.7] text-muted">
          {site.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="lg:col-span-3 space-y-5">
          <div className="card-refined relative flex flex-wrap divide-x divide-border rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] gradient-accent-bar" />
            {site.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 min-w-[120px] px-5 py-6 text-center sm:px-6"
              >
                <p className="heading-display text-2xl font-semibold text-accent-deep">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs text-muted leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {site.highlights.map((item, i) => (
              <div
                key={item.id}
                className="card-refined group rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold text-white gradient-header"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {i + 1}
                </div>
                <p className="heading-display text-sm font-semibold text-navy">
                  {item.title}
                </p>
                <p className="mt-2 text-xs text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
