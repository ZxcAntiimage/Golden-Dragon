import type { Metadata } from 'next';
import { ContactsScreen } from '@/screens/contacts/ContactsScreen';
import { breadcrumbsJsonLd } from '@/shared/lib/jsonLd';
import { JsonLd } from '@/shared/ui/JsonLd';

export const metadata: Metadata = {
  title: 'Контакты и адрес',
  description:
    'Контакты ресторана «Золотой Дракон» в Костроме: адрес ул. Титова, 2Б, телефоны, часы работы 11:00–22:00, карта проезда и форма обратной связи.',
  alternates: { canonical: '/contacts' },
};

export default function ContactsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: 'Главная', path: '/' },
          { name: 'Контакты', path: '/contacts' },
        ])}
      />
      <ContactsScreen />
    </>
  );
}
