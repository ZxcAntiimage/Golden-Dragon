'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { features } from '@/entities/feature/data';
import { site } from '@/shared/config/site';
import { Reveal } from '@/shared/ui/Reveal';
import { Section } from '@/shared/ui/Section';
import { SectionHeading } from '@/shared/ui/SectionHeading';

export function About() {
  return (
    <Section id="about" className="overflow-hidden">
      {/* Фоновые иероглифы-«водяные знаки» */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 select-none font-display text-[22rem] leading-none text-gold/3"
      >
        龙
      </span>

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="О ресторане"
            eyebrowZh="关于"
            title={
              <>
                Уголок Поднебесной <span className="text-gold-gradient text-gold">в Костроме</span>
              </>
            }
            subtitle="Мы предлагаем доступные цены, уникальную кухню и хорошее настроение. Уютные залы, банкетный зал на 60 персон для торжеств и кабинки на втором этаже для отдыха в близком кругу."
          />

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-gold/10 bg-ink-700/40 p-5 transition-colors duration-300 hover:border-gold/40 hover:bg-ink-700/70">
                  <div className="mb-3 flex items-center justify-between">
                    <f.icon className="h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-display text-sm text-dragon-bright/70">
                      {f.titleZh}
                    </span>
                  </div>
                  <h3 className="mb-1 font-display text-base font-bold text-paper">
                    {f.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-paper/55">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal y={40} className="relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-gold/20">
            <Image
              src="/images/exterior-night.jpg"
              alt={`${site.name} — вход в китайский ресторан вечером в Костроме`}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="ken-burns object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-transparent" />
          </div>

          {/* Плашка со статистикой */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass absolute -bottom-6 -left-4 rounded-2xl border border-gold/25 p-5 sm:-left-8"
          >
            <div className="flex items-center gap-5">
              <div className="text-center">
                <div className="font-display text-3xl font-black text-gold">60</div>
                <div className="text-[10px] uppercase tracking-widest text-paper/50">
                  персон
                </div>
              </div>
              <div className="h-10 w-px bg-gold/20" />
              <div className="text-center">
                <div className="font-display text-3xl font-black text-gold">11+</div>
                <div className="text-[10px] uppercase tracking-widest text-paper/50">
                  часов в день
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </Section>
  );
}
