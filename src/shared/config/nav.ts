export interface NavItem {
  label: string;
  href: string;
}

/** Пункты навигации. Секции на главной — якоря, страницы — отдельные маршруты. */
export const navItems: NavItem[] = [
  { label: 'Главная', href: '/#hero' },
  { label: 'О нас', href: '/#about' },
  { label: 'Меню', href: '/menu' },
  { label: 'Интерьер', href: '/#interior' },
  { label: 'Доставка', href: '/#delivery' },
  { label: 'Контакты', href: '/contacts' },
];
