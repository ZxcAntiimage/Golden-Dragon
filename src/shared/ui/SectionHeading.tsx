'use client';

import { motion } from 'framer-motion';
import { cn } from '@/shared/lib/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowZh?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

/** Единый блок заголовка секции: китайская «печать», H2 и подзаголовок. */
export function SectionHeading({
  eyebrow,
  eyebrowZh,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        centered ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold"
        >
          {eyebrowZh && <span className="font-display text-sm text-dragon-bright">{eyebrowZh}</span>}
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="max-w-3xl text-balance font-display text-3xl font-bold leading-tight text-paper sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className={cn(
            'max-w-2xl text-pretty text-base leading-relaxed text-paper/60 sm:text-lg',
            centered && 'mx-auto',
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
