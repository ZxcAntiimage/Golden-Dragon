export interface Dish {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  tags?: ('острое' | 'хит' | '新' )[];
  category: DishCategory;
}

export type DishCategory =
  | 'Салаты'
  | 'Горячее'
  | 'Супы'
  | 'Рис и лапша'
  | 'Закуски';

export const dishCategories: DishCategory[] = [
  'Салаты',
  'Горячее',
  'Супы',
  'Рис и лапша',
  'Закуски',
];
