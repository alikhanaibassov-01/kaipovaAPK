import Image from "next/image";
import { site } from "@/data/site";
import { SectionHeading, SectionShell } from "@/components/ui/Section";
import { TwoGisMap } from "@/components/sections/TwoGisMap";

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0 text-brand-red"
    >
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0 text-brand-red"
    >
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export function Contact() {
  const { map, phones, email, address, city } = site.contacts;

  return (
    <SectionShell id="contact" className="border-t border-border bg-surface">
      <SectionHeading
        label="Связь"
        title="Контакты"
        description="Колледж принтмедиа технологий · Алматы"
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
        <div>
          <TwoGisMap
            firmId={map.firmId}
            lat={map.lat}
            lon={map.lon}
            height={320}
          />
          <a
            href={`https://2gis.kz/almaty/firm/${map.firmId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center rounded-lg bg-brand-red px-4 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            {site.collegeName}
          </a>
          <p className="mt-3 text-center text-base font-medium text-navy">
            {address}, {city}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <Image
            src="/images/printmedia-logo.png"
            alt="Printmedia"
            width={280}
            height={80}
            className="h-auto w-full max-w-[280px] object-contain"
          />

          <div className="flex flex-col gap-4">
            {phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 text-lg font-medium text-navy transition-colors hover:text-brand-red"
              >
                <PhoneIcon />
                {phone}
              </a>
            ))}

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3 text-lg font-medium text-navy transition-colors hover:text-brand-red"
            >
              <MailIcon />
              {email}
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
