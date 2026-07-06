'use client';

import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/features/contact-form/ContactForm';
import { site } from '@/shared/config/site';
import { Reveal } from '@/shared/ui/Reveal';
import { Section } from '@/shared/ui/Section';
import { SectionHeading } from '@/shared/ui/SectionHeading';

const items = [
  { icon: MapPin, label: 'Адрес', value: site.address.full },
  { icon: Clock, label: 'Часы работы', value: `Ежедневно ${site.hours.open}–${site.hours.close}` },
  { icon: Mail, label: 'Почта', value: site.email, href: `mailto:${site.email}` },
];

export function Contacts({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <Section id={withHeading ? 'contacts' : undefined}>
      {withHeading && (
        <SectionHeading
          eyebrow="Контакты"
          eyebrowZh="联系"
          title="Как нас найти"
          subtitle="Забронируйте стол, закажите банкет или доставку — мы всегда на связи."
        />
      )}

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            {site.phones.map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="group flex items-center gap-4 rounded-2xl border border-gold/15 bg-ink-700/40 p-5 transition-colors hover:border-gold/40"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-deep text-ink">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="font-display text-xl font-bold text-paper group-hover:text-gold">
                  {p.label}
                </span>
              </a>
            ))}
          </div>

          <div className="grid gap-3">
            {items.map((it) => {
              const content = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold/20 text-gold">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-paper/40">
                      {it.label}
                    </span>
                    <span className="text-paper/85">{it.value}</span>
                  </span>
                </>
              );
              return it.href ? (
                <a
                  key={it.label}
                  href={it.href}
                  className="flex items-center gap-4 rounded-2xl border border-gold/10 bg-ink-700/30 p-4 transition-colors hover:border-gold/30"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={it.label}
                  className="flex items-center gap-4 rounded-2xl border border-gold/10 bg-ink-700/30 p-4"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-gold/15 bg-ink-700/40 p-6">
            <h3 className="mb-4 font-display text-xl font-bold text-paper">Напишите нам</h3>
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-h-104 overflow-hidden rounded-4xl border border-gold/20 lg:min-h-112">
          <iframe
            src={site.mapEmbed}
            title={`${site.name} на карте — ${site.address.full}`}
            loading="lazy"
            className="h-full min-h-104 w-full grayscale-[0.3] lg:min-h-112"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </Section>
  );
}
