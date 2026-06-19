import { site } from "@/data/site";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export function Contact() {
  return (
    <SectionShell id="contact" className="border-t border-border bg-surface">
      <SectionHeading
        label="Связь"
        title="Контакты"
        description="Для вопросов по учебно-методическим материалам"
      />

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${site.contacts.email}`}
          className="rounded-xl border border-navy bg-navy px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-deep"
        >
          Email
        </a>
        <a
          href={site.contacts.telegram}
          className="rounded-xl border border-border bg-background px-6 py-2.5 text-sm font-medium text-navy transition-all duration-200 hover:border-accent hover:text-accent"
        >
          Telegram
        </a>
        <a
          href={site.contacts.whatsapp}
          className="rounded-xl border border-border bg-background px-6 py-2.5 text-sm font-medium text-navy transition-all duration-200 hover:border-accent hover:text-accent"
        >
          WhatsApp
        </a>
      </div>

      <p className="mt-6 text-sm text-muted">{site.contacts.email}</p>
    </SectionShell>
  );
}
