import { Playfair_Display, Manrope } from 'next/font/google';

/** Заголовочный шрифт с характером — под «имперскую» подачу. */
export const fontDisplay = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

/** Основной текстовый шрифт — чистый гротеск, хорошо читается на тёмном. */
export const fontSans = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});
