export interface Hall {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  capacity: string;
  image: string;
}

/** Залы и зоны заведения — из описания на оригинальном сайте. */
export const halls: Hall[] = [
  {
    id: 'banquet',
    title: 'Банкетный зал',
    titleZh: '宴会厅',
    description:
      'Просторный зал на 60 персон для свадеб, корпоративов и торжеств. Продумаем меню и оформление под ваш праздник.',
    capacity: 'до 60 гостей',
    image: '/images/hall-banquet.jpg',
  },
  {
    id: 'private',
    title: 'Уютные кабинки',
    titleZh: '雅间',
    description:
      'Отдельные кабинки на втором этаже для отдыха в близком кругу — приватная атмосфера и китайский колорит.',
    capacity: 'от 2 до 10 гостей',
    image: '/images/hall-private.jpg',
  },
  {
    id: 'main',
    title: 'Основной зал',
    titleZh: '大堂',
    description:
      'Тёплый свет фонарей, ароматы вока и живая атмосфера настоящего китайского ресторана в центре Костромы.',
    capacity: 'зал на каждый день',
    image: '/images/exterior-night.jpg',
  },
];
