'use client';

import dynamic from 'next/dynamic';
import { useReducedMotion } from '@/shared/lib/useReducedMotion';
import { useInViewOnce } from '@/shared/lib/useInViewOnce';

const DishesSceneCanvas = dynamic(() => import('./DishesSceneCanvas'), {
  ssr: false,
  loading: () => null,
});

/** Фоновая 3D-сцена для секции блюд — парящие золотые сферы и частицы. */
export function DishesScene() {
  const reduced = useReducedMotion();
  const { ref, inView } = useInViewOnce<HTMLDivElement>('200px');

  if (reduced) return null;

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {inView && <DishesSceneCanvas />}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-ink)_75%)]" />
    </div>
  );
}
