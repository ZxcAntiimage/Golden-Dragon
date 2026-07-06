'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { DishCard } from '@/entities/dish/DishCard';
import { dishes } from '@/entities/dish/data';
import { dishCategories, type DishCategory } from '@/entities/dish/model';
import { cn } from '@/shared/lib/cn';
import { Section } from '@/shared/ui/Section';
import { SectionHeading } from '@/shared/ui/SectionHeading';

type Filter = 'Все' | DishCategory;
const filters: Filter[] = ['Все', ...dishCategories];

/** Страница меню с фильтром по категориям и анимированной перекладкой карточек. */
export function MenuScreen() {
  const [active, setActive] = useState<Filter>('Все');

  const visible = useMemo(
    () => (active === 'Все' ? dishes : dishes.filter((d) => d.category === active)),
    [active],
  );

  return (
    <Section className="pt-32">
      <SectionHeading
        eyebrow="Меню"
        eyebrowZh="菜单"
        title="Меню ресторана «Золотой Дракон»"
        subtitle="Доступные цены, уникальная кухня и хорошее настроение. Готовим на воке по традиционным китайским рецептам."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              'relative rounded-full border px-5 py-2.5 text-sm font-medium transition-colors',
              active === f
                ? 'border-gold text-ink'
                : 'border-gold/20 text-paper/70 hover:border-gold/50 hover:text-gold',
            )}
          >
            {active === f && (
              <motion.span
                layoutId="menu-filter"
                className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-bright via-gold to-gold-deep"
                transition={{ type: 'spring', stiffness: 340, damping: 30 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((dish) => (
            <motion.div
              key={dish.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
            >
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
