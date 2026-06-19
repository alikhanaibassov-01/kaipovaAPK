import Image from "next/image";
import { appendices } from "@/data/appendices";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export function Appendices() {
  return (
    <SectionShell id="appendices">
      <SectionHeading
        label="QR-материалы"
        title="Приложения"
        description="Сканируйте код для открытия электронных материалов программы ПМ 02"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {appendices.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group card-refined relative flex gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div
              className="absolute top-0 left-6 right-6 h-px gradient-accent-bar opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />

            <div
              className="gradient-header flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-white shadow-md ring-2 ring-warm/20 heading-display"
            >
              {item.letter}
            </div>

            <div className="min-w-0 flex-1 border-l border-border pl-4">
              <p className="heading-display font-semibold text-navy">{item.title}</p>
              <p className="mt-0.5 text-sm font-medium text-accent">{item.subtitle}</p>
              <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>

            <div className="shrink-0 self-center rounded-xl border-2 border-accent-soft bg-surface p-2 shadow-[0_4px_16px_rgb(28,43,58,0.08)] ring-1 ring-warm/20 transition-all duration-300 group-hover:scale-[1.04] group-hover:ring-accent/30">
              <Image
                src={item.qrImage}
                alt={`QR-код ${item.title}`}
                width={76}
                height={76}
                className="h-[76px] w-[76px]"
              />
            </div>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
