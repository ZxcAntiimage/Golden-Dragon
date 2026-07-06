import { MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { navItems } from '@/shared/config/nav';
import { site } from '@/shared/config/site';

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-ink-800">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 select-none font-display text-[16rem] leading-none text-gold/[0.025]"
      >
        金龙
      </span>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 font-display text-lg font-bold text-gold">
              {site.nameZh}
            </span>
            <span className="font-display text-xl font-bold text-paper">{site.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/55">
            {site.description}
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <h3 className="mb-1 font-display text-sm font-bold uppercase tracking-widest text-gold">
            Навигация
          </h3>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-paper/60 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h3 className="mb-1 font-display text-sm font-bold uppercase tracking-widest text-gold">
            Контакты
          </h3>
          {site.phones.map((p) => (
            <a
              key={p.tel}
              href={`tel:${p.tel}`}
              className="flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4 text-gold/70" />
              {p.label}
            </a>
          ))}
          <span className="flex items-start gap-2 text-sm text-paper/60">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
            {site.address.full}
          </span>
          <span className="text-sm text-paper/60">
            Ежедневно {site.hours.open}–{site.hours.close}
          </span>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-paper/40 sm:flex-row sm:px-8">
          <span>
            © {year} {site.legalName}. Все права защищены.
          </span>
          <span>Китайская кухня в {site.city}</span>
        </div>
      </div>
    </footer>
  );
}
