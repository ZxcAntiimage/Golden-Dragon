'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { cn } from '@/shared/lib/cn';
import type { Dish } from './model';

const tagStyles: Record<string, string> = {
  'острое': 'bg-dragon/20 text-dragon-bright',
  'хит': 'bg-gold/20 text-gold-bright',
  '新': 'bg-paper/10 text-paper',
};

interface DishCardProps {
  dish: Dish;
  priority?: boolean;
  variant?: 'grid' | 'showcase';
  index?: number;
}

/** Карточка блюда: editorial-раскладка для главной, компактная сетка для меню. */
export function DishCard({
  dish,
  priority = false,
  variant = 'grid',
  index = 0,
}: DishCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-5, 5]), {
    stiffness: 180,
    damping: 22,
  });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  if (variant === 'showcase') {
    const reversed = index % 2 === 1;
    const num = String(index + 1).padStart(2, '0');

    return (
      <motion.article
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'group grid items-center gap-8 lg:grid-cols-2 lg:gap-14',
          reversed && 'lg:[direction:rtl] lg:*:[direction:ltr]',
        )}
      >
        <div className="relative">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-2 -top-6 font-display text-[7rem] font-black leading-none text-gold/7 sm:text-[9rem]"
          >
            {num}
          </span>
          <div className="relative aspect-5/4 overflow-hidden rounded-4xl border border-gold/20 bg-ink-800 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={priority}
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-ink/40 via-transparent to-transparent opacity-60" />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-2xl border border-gold/30 bg-ink-800/90 px-5 py-3 backdrop-blur-md">
            <span className="font-display text-2xl font-bold text-gold">{dish.price} ₽</span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-sm font-semibold tracking-[0.3em] text-gold/60">
              {num} · {dish.nameZh}
            </span>
            {dish.tags?.map((tag) => (
              <span
                key={tag}
                className={cn(
                  'rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider',
                  tagStyles[tag],
                )}
              >
                {tag === '新' ? 'новинка' : tag}
              </span>
            ))}
          </div>

          <h3 className="text-balance font-display text-3xl font-black leading-[1.05] text-paper sm:text-4xl md:text-5xl">
            {dish.name}
          </h3>

          <p className="max-w-lg text-pretty text-base leading-relaxed text-paper/60 sm:text-lg">
            {dish.description}
          </p>

          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-paper/40">
            <span>{dish.category}</span>
            <span className="h-1 w-1 rounded-full bg-gold/50" />
            <span>{dish.weight}</span>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gold/10 bg-ink-800/60 transform-3d"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {dish.tags && (
          <div className="absolute left-3 top-3 flex gap-1.5">
            {dish.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  'rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide backdrop-blur-md',
                  tagStyles[tag],
                )}
              >
                {tag === '新' ? 'новинка' : tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="mb-1 font-display text-xs text-gold/50">{dish.nameZh}</p>
            <h3 className="font-display text-lg font-bold text-paper">{dish.name}</h3>
          </div>
          <span className="shrink-0 font-display text-lg font-bold text-gold">{dish.price} ₽</span>
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-paper/55">{dish.description}</p>
        <div className="mt-auto flex justify-between pt-2 text-[10px] uppercase tracking-widest text-paper/35">
          <span>{dish.category}</span>
          <span>{dish.weight}</span>
        </div>
      </div>
    </motion.article>
  );
}
