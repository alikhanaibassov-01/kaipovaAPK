import { SoftwareIcon, softwareIds } from "@/components/ui/SoftwareIcon";

export function HeaderSoftwareTools() {
  return (
    <div
      className="hidden items-center gap-1.5 rounded-xl border border-white/50 bg-surface/80 px-2 py-1.5 shadow-sm lg:flex"
      aria-label="Профессиональные графические программы"
    >
      {softwareIds.map((id) => (
        <SoftwareIcon key={id} id={id} size={22} />
      ))}
    </div>
  );
}
