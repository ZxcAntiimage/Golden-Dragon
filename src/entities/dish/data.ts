import { dishPhotos } from '@/shared/config/dishPhotos';
import type { Dish } from './model';

/**
 * Меню ресторана «Золотой Дракон».
 * Фото блюд — локальные файлы из public/images.
 */
export const dishes: Dish[] = [
  {
    id: 'funchoza',
    name: 'Салат из фунчозы',
    nameZh: '粉丝沙拉',
    description:
      'Стеклянная лапша с хрустящими овощами, говядиной и пряной заправкой по домашнему рецепту.',
    price: 390,
    weight: '250 г',
    image: dishPhotos.funchoza,
    tags: ['хит'],
    category: 'Салаты',
  },
  {
    id: 'pork-sweet',
    name: 'Свинина в кисло-сладком соусе',
    nameZh: '糖醋里脊',
    description:
      'Нежные кусочки свинины в золотистой корочке под фирменным кисло-сладким соусом с ананасом и перцем.',
    price: 520,
    weight: '300 г',
    image: dishPhotos.porkSweet,
    tags: ['хит'],
    category: 'Горячее',
  },
  {
    id: 'seabass',
    name: 'Судак в кисло-сладком соусе',
    nameZh: '糖醋鱼',
    description:
      'Филе судака во фритюре, политое ярким кисло-сладким соусом с овощами. Гордость нашей кухни.',
    price: 690,
    weight: '320 г',
    image: dishPhotos.seabass,
    tags: ['хит', '新'],
    category: 'Горячее',
  },
  {
    id: 'gunbao',
    name: 'Курица Гунбао',
    nameZh: '宫保鸡丁',
    description:
      'Обжаренная курица с арахисом, чили и овощами в сычуаньском соусе. Классика с характером.',
    price: 470,
    weight: '280 г',
    image: dishPhotos.gunbao,
    tags: ['острое'],
    category: 'Горячее',
  },
  {
    id: 'wok-udon',
    name: 'Удон вок с овощами',
    nameZh: '炒乌冬面',
    description:
      'Пшеничная лапша, обжаренная на воке с овощами и соусом терияки. Сытно и ароматно.',
    price: 380,
    weight: '300 г',
    image: dishPhotos.udon,
    category: 'Рис и лапша',
  },
  {
    id: 'fried-rice',
    name: 'Жареный рис с курицей',
    nameZh: '鸡肉炒饭',
    description:
      'Рассыпчатый рис, обжаренный с яйцом, курицей и овощами по традиционной рецептуре.',
    price: 340,
    weight: '290 г',
    image: dishPhotos.friedRice,
    category: 'Рис и лапша',
  },
  {
    id: 'hot-soup',
    name: 'Острый суп Том Ям по-китайски',
    nameZh: '酸辣汤',
    description:
      'Наваристый кисло-острый суп с креветками, грибами и ростками бамбука. Согревает и бодрит.',
    price: 420,
    weight: '350 мл',
    image: dishPhotos.soup,
    tags: ['острое'],
    category: 'Супы',
  },
  {
    id: 'dumplings',
    name: 'Пельмени «Цзяоцзы»',
    nameZh: '饺子',
    description:
      'Сочные китайские пельмени с мясной начинкой, подаются с ароматным соевым соусом.',
    price: 360,
    weight: '8 шт',
    image: dishPhotos.dumplings,
    tags: ['хит'],
    category: 'Закуски',
  },
  {
    id: 'spring-rolls',
    name: 'Спринг-роллы овощные',
    nameZh: '春卷',
    description:
      'Хрустящие обжаренные роллы с овощной начинкой и кисло-сладким дип-соусом.',
    price: 290,
    weight: '6 шт',
    image: dishPhotos.springRolls,
    category: 'Закуски',
  },
];

/** Три фирменных блюда для главной страницы. */
export const popularDishes = dishes.filter((d) => d.tags?.includes('хит')).slice(0, 3);
