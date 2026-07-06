'use client';

import { useEffect, useState } from 'react';

/**
 * Возвращает true, если пользователь просит уменьшить количество анимаций
 * (системная настройка prefers-reduced-motion). Используем, чтобы отключать
 * тяжёлый 3D и параллаксы ради доступности и производительности.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return reduced;
}
