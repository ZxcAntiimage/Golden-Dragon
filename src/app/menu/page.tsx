import type { Metadata } from 'next';
import { MenuScreen } from '@/screens/menu/MenuScreen';
import { breadcrumbsJsonLd } from '@/shared/lib/jsonLd';
import { JsonLd } from '@/shared/ui/JsonLd';

export const metadata: Metadata = {
  title: 'Меню — китайская кухня',
  description:
    'Меню китайского ресторана «Золотой Дракон» в Костроме: салаты, горячее на воке, супы, лапша и закуски по доступным ценам. Доставка от 1500 ₽.',
  alternates: { canonical: '/menu' },
};

export default function MenuPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: 'Главная', path: '/' },
          { name: 'Меню', path: '/menu' },
        ])}
      />
      <MenuScreen />
    </>
  );
}
