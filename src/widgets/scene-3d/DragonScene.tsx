'use client';

import dynamic from 'next/dynamic';
import { useReducedMotion } from '@/shared/lib/useReducedMotion';
import { useInViewOnce } from '@/shared/lib/useInViewOnce';

/** Canvas грузится только на клиенте и только когда секция близко к экрану. */
const HeroScene = dynamic(() => import('./ui/HeroScene'), {
  ssr: false,
  loading: () => <SceneFallback />,
});

/** Статичная «заглушка»: радиальное золотое свечение вместо тяжёлого 3D. */
function SceneFallback() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),rgba(193,18,31,0.12)_45%,transparent_70%)] blur-2xl" />
    </div>
  );
}

/**
 * Обёртка 3D-сцены дракона. На устройствах с prefers-reduced-motion
 * или до появления секции в зоне видимости показываем лёгкую заглушку.
 */
export function DragonScene() {
  const reduced = useReducedMotion();
  const { ref, inView } = useInViewOnce<HTMLDivElement>('300px');

  return (
    <div ref={ref} className="absolute inset-0 -z-0" aria-hidden>
      {inView && !reduced ? <HeroScene /> : <SceneFallback />}
    </div>
  );
}
