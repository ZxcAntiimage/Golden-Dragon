'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { gallery } from '@/entities/gallery/data';
import { halls } from '@/entities/hall/data';
import { useAppDispatch } from '@/shared/store/hooks';
import { openLightbox } from '@/shared/store/uiSlice';
import { Section } from '@/shared/ui/Section';
import { SectionHeading } from '@/shared/ui/SectionHeading';
import { HallCard } from './HallCard';
import { Lightbox } from './Lightbox';

/** Секция «Интерьер»: залы + фотогалерея с лайтбоксом. */
export function Interior() {
  const dispatch = useAppDispatch();
  const preview = gallery.slice(0, 10);

  return (
    <Section id="interior" className="bg-ink-800/40">
      <SectionHeading
        eyebrow="Атмосфера"
        eyebrowZh="氛围"
        title="Интерьер и залы"
        subtitle="Тёплый свет фонарей, красное дерево и золотые акценты — атмосфера настоящего китайского ресторана."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {halls.map((hall, i) => (
          <HallCard key={hall.id} hall={hall} index={i} />
        ))}
      </div>

      {/* Мозаичная фотогалерея */}
      <div className="mt-6 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4 lg:grid-cols-5">
        {preview.map((item, i) => (
          <motion.button
            key={item.src}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
            onClick={() => dispatch(openLightbox(i))}
            className={`group relative overflow-hidden rounded-2xl border border-gold/10 ${
              i === 0 ? 'col-span-2 row-span-2' : ''
            } ${i === 3 ? 'row-span-2' : ''}`}
            aria-label="Открыть фото"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 50vw, 20vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-0 grid place-items-center text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full border border-gold/40 bg-ink/60 px-3 py-1 text-xs backdrop-blur">
                Смотреть
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      <Lightbox />
    </Section>
  );
}
