import Image from "next/image";

export type SoftwareId = "coreldraw" | "photoshop" | "illustrator";

const icons: Record<SoftwareId, { label: string; src: string }> = {
  coreldraw: { label: "CorelDRAW", src: "/logos/coreldraw.png" },
  photoshop: { label: "Adobe Photoshop", src: "/logos/photoshop.png" },
  illustrator: { label: "Adobe Illustrator", src: "/logos/illustrator.png" },
};

export const softwareIds: SoftwareId[] = [
  "coreldraw",
  "photoshop",
  "illustrator",
];

export function SoftwareIcon({
  id,
  size = 20,
}: {
  id: SoftwareId;
  size?: number;
}) {
  const icon = icons[id];
  return (
    <Image
      src={icon.src}
      alt={icon.label}
      width={size}
      height={size}
      className="shrink-0 rounded-md shadow-sm ring-1 ring-black/8 object-contain bg-white"
      title={icon.label}
    />
  );
}

export function isSoftwareId(value: string): value is SoftwareId {
  return value === "coreldraw" || value === "photoshop" || value === "illustrator";
}
