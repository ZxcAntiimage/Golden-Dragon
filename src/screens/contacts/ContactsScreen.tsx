import { Contacts } from '@/widgets/contacts/Contacts';
import { SectionHeading } from '@/shared/ui/SectionHeading';

/** Отдельная страница контактов. */
export function ContactsScreen() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pb-2 pt-32 sm:px-8">
        <SectionHeading
          eyebrow="Контакты"
          eyebrowZh="联系"
          title="Свяжитесь с «Золотым Драконом»"
          subtitle="Кострома, ул. Титова, 2Б. Бронь столов и заказ банкетов, доставка блюд по городу."
        />
      </div>
      <Contacts withHeading={false} />
    </>
  );
}
