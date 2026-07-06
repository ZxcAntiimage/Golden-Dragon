/**
 * Единый источник правды по контактам и данным заведения.
 * Меняйте здесь — обновится на всём сайте (шапка, футер, контакты, SEO/JSON-LD).
 */
export const site = {
  name: 'Золотой Дракон',
  nameZh: '金龙',
  legalName: 'Кафе «Золотой Дракон»',
  tagline: 'Китайская кухня в самом сердце Костромы',
  description:
    'Золотой Дракон — китайский ресторан в Костроме. Уютные залы, банкетный зал на 60 персон, кабинки для отдыха, доставка блюд и аутентичная китайская кухня.',
  city: 'Кострома',
  url: 'https://zolotoydrakon44.ru',
  email: 'info@zolotoydrakon44.ru',

  phones: [
    { label: '+7 (4942) 42-28-68', tel: '+74942422868' },
    { label: '+7 (4942) 31-15-20', tel: '+74942311520' },
  ],

  address: {
    street: 'ул. Титова, д. 2Б',
    city: 'Кострома',
    region: 'Костромская область',
    postalCode: '156019',
    country: 'RU',
    full: 'г. Кострома, ул. Титова, дом 2Б',
  },

  geo: { lat: 57.7776, lng: 40.9264 },

  hours: {
    delivery: 'Доставка с 11:00 до 22:00, от 1500 ₽',
    booking: 'Заказ столов с 11:00 до 22:00',
    open: '11:00',
    close: '22:00',
  },

  socials: [
    { label: 'ВКонтакте', href: 'https://vk.com/', icon: 'vk' },
    { label: 'Telegram', href: 'https://t.me/', icon: 'telegram' },
    { label: 'WhatsApp', href: 'https://wa.me/74942422868', icon: 'whatsapp' },
  ],

  mapEmbed:
    'https://yandex.ru/map-widget/v1/?ll=40.926400%2C57.777600&z=16&text=%D0%9A%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%BC%D0%B0%2C%20%D1%83%D0%BB.%20%D0%A2%D0%B8%D1%82%D0%BE%D0%B2%D0%B0%2C%202%D0%91',
} as const;

export type Site = typeof site;
