'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Возвращает ref и флаг "элемент появился в зоне видимости хотя бы раз".
 * Нужен, чтобы монтировать тяжёлые блоки (3D, видео) только когда они
 * действительно нужны — экономит трафик и ускоряет первую отрисовку.
 */
export function useInViewOnce<T extends HTMLElement = HTMLDivElement>(
  rootMargin = '200px',
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [inView, rootMargin]);

  return { ref, inView } as const;
}
