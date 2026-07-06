'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import { gallery } from '@/entities/gallery/data';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { closeLightbox, stepLightbox } from '@/shared/store/uiSlice';

/** Полноэкранный просмотр фото галереи со стрелками и управлением с клавиатуры. */
export function Lightbox() {
  const dispatch = useAppDispatch();
  const index = useAppSelector((s) => s.ui.lightboxIndex);
  const total = gallery.length;
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch(closeLightbox());
      if (e.key === 'ArrowRight') dispatch(stepLightbox({ dir: 1, total }));
      if (e.key === 'ArrowLeft') dispatch(stepLightbox({ dir: -1, total }));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, dispatch, total]);

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 backdrop-blur-md"
          onClick={() => dispatch(closeLightbox())}
        >
          <button
            className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10"
            onClick={() => dispatch(closeLightbox())}
            aria-label="Закрыть"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 sm:left-8"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(stepLightbox({ dir: -1, total }));
            }}
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 sm:right-8"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(stepLightbox({ dir: 1, total }));
            }}
            aria-label="Следующее фото"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[80vh] w-[92vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[index].src}
              alt={gallery[index].alt}
              fill
              sizes="92vw"
              className="rounded-2xl object-contain"
              priority
            />
          </motion.div>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-paper/60">
            {index + 1} / {total}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
