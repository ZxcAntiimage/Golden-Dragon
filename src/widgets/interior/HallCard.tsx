'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Hall } from '@/entities/hall/data';

/** Крупная карточка зала с раскрывающимся описанием при наведении. */
export function HallCard({ hall, index }: { hall: Hall; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl border border-gold/15"
    >
      <Image
        src={hall.image}
        alt={`${hall.title} — ${hall.description}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

      <span className="pointer-events-none absolute right-5 top-4 font-display text-5xl text-gold/20">
        {hall.titleZh}
      </span>

      <div className="relative z-10 p-6">
        <span className="mb-2 inline-block rounded-full border border-gold/30 bg-ink/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur">
          {hall.capacity}
        </span>
        <h3 className="font-display text-2xl font-bold text-paper">{hall.title}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-paper/70 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
          {hall.description}
        </p>
      </div>
    </motion.article>
  );
}
