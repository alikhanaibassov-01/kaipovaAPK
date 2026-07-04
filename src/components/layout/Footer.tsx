import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gradient-header text-white">
      <div className="mx-auto max-w-5xl px-5 py-12 lg:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="heading-display text-lg font-semibold">{site.name}</p>
            <p className="mt-2 text-sm text-white/75">
              {site.organization} · {site.city}
            </p>
          </div>
          <a
            href={`mailto:${site.contacts.email}`}
            className="text-sm text-white/85 underline-offset-4 hover:text-white hover:underline"
          >
            {site.contacts.email}
          </a>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-6 text-xs text-white/50">
          <span>© {year} {site.shortName}</span>
          <span className="hidden sm:inline">Портфолио педагога · ПМ 02</span>
        </div>
      </div>
    </footer>
  );
}
