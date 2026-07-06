import type { LucideIcon } from 'lucide-react';
import { Soup, UtensilsCrossed, Truck, PartyPopper, Clock, Sparkles } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  titleZh: string;
  text: string;
}

/** Ключевые преимущества заведения — для секции «О нас». */
export const features: Feature[] = [
  {
    icon: UtensilsCrossed,
    title: 'Аутентичная кухня',
    titleZh: '正宗',
    text: 'Готовим на воке по традиционным рецептам — так, как это делают в Китае.',
  },
  {
    icon: PartyPopper,
    title: 'Зал на 60 персон',
    titleZh: '宴会',
    text: 'Банкетный зал для свадеб, юбилеев и корпоративов под ключ.',
  },
  {
    icon: Truck,
    title: 'Доставка по городу',
    titleZh: '外卖',
    text: 'Привезём горячие блюда с 11:00 до 22:00 при заказе от 1500 ₽.',
  },
  {
    icon: Sparkles,
    title: 'Уютные кабинки',
    titleZh: '雅间',
    text: 'Приватные кабинки на втором этаже для отдыха в близком кругу.',
  },
  {
    icon: Soup,
    title: 'Доступные цены',
    titleZh: '实惠',
    text: 'Уникальная кухня и хорошее настроение по честной стоимости.',
  },
  {
    icon: Clock,
    title: 'Каждый день 11–22',
    titleZh: '每天',
    text: 'Ждём вас без выходных с одиннадцати утра до десяти вечера.',
  },
];
