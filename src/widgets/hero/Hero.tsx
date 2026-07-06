'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MapPin, Star } from 'lucide-react';
import { useRef } from 'react';
import { site } from '@/shared/config/site';
import { Button } from '@/shared/ui/Button';
import { DragonScene } from '@/widgets/scene-3d';

const HERO_WORDS = ['Остро', 'Сладко', 'Незабываемо'] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      <DragonScene />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(10,8,7,0.72)_100%)]" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay" />

      <motion.div
        style={{ y: yText, opacity, scale }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center"
      >
        <motion.span
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-ink-700/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold backdrop-blur"
        >
          <Star className="h-3.5 w-3.5 fill-gold" />
          Китайский ресторан · {site.city}
        </motion.span>

        <div className="mb-2 flex flex-col gap-0">
          {HERO_WORDS.map((word, i) => (
            <motion.span
              key={word}
              variants={item}
              className="font-display text-[clamp(2.8rem,11vw,7.5rem)] font-black uppercase leading-[0.92] tracking-tight text-paper"
            >
              <span className={i === 1 ? 'text-shimmer' : i === 2 ? 'text-gold-gradient text-gold' : ''}>
                {word}
              </span>
            </motion.span>
          ))}
        </div>

        <motion.h1 variants={item} className="sr-only">
          {site.name} — китайский ресторан в {site.city}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-pretty text-base text-paper/65 sm:text-lg"
        >
          {site.tagline}. Уютные залы, банкетный зал на 60 персон и аутентичные
          блюда, приготовленные на воке.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/menu" size="lg" variant="primary">
            Смотреть меню
          </Button>
          <Button href="/#delivery" size="lg" variant="outline">
            Заказать доставку
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex items-center gap-2 text-sm text-paper/50"
        >
          <MapPin className="h-4 w-4 text-gold" />
          {site.address.full}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Прокрутить вниз"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold/70"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Листайте</span>
          <ChevronDown className="h-7 w-7" />
        </motion.span>
      </motion.a>
    </section>
  );
}
