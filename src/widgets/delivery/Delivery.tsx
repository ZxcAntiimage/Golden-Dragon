'use client';

import { motion } from 'framer-motion';
import { Clock, Phone, Truck, Wallet } from 'lucide-react';
import { site } from '@/shared/config/site';
import { Button } from '@/shared/ui/Button';
import { Reveal } from '@/shared/ui/Reveal';
import { Section } from '@/shared/ui/Section';
import { SectionHeading } from '@/shared/ui/SectionHeading';

const steps = [
  {
    icon: Clock,
    title: 'С 11:00 до 22:00',
    text: 'Принимаем заказы на доставку каждый день без выходных.',
  },
  {
    icon: Wallet,
    title: 'От 1500 ₽',
    text: 'Минимальная сумма заказа для бесплатной доставки по городу.',
  },
  {
    icon: Truck,
    title: 'Привезём горячим',
    text: 'Бережно упакуем и доставим блюда прямо к вашему столу.',
  },
];

export function Delivery() {
  return (
    <Section id="delivery" className="overflow-hidden">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-br from-ink-700 via-ink-800 to-ink p-8 sm:p-14">
        {/* Декоративное свечение */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-dragon/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold/15 blur-[100px]" />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Доставка"
              eyebrowZh="外卖"
              title={
                <>
                  Китайская кухня <span className="text-gold-gradient text-gold">к вам домой</span>
                </>
              }
              subtitle={site.hours.delivery}
            />
            <div className="mt-8 flex flex-wrap gap-4">
              {site.phones.map((p) => (
                <Button key={p.tel} href={`tel:${p.tel}`} variant="primary" size="lg">
                  <Phone className="h-4 w-4" />
                  {p.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="flex items-start gap-4 rounded-2xl border border-gold/10 bg-ink/40 p-5 transition-colors hover:border-gold/30">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-deep text-ink">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-paper">{s.title}</h3>
                    <p className="text-sm text-paper/60">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
