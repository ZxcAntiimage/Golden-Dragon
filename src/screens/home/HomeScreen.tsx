import { About } from '@/widgets/about/About';
import { Contacts } from '@/widgets/contacts/Contacts';
import { Delivery } from '@/widgets/delivery/Delivery';
import { Hero } from '@/widgets/hero/Hero';
import { Interior } from '@/widgets/interior/Interior';
import { Marquee } from '@/widgets/marquee/Marquee';
import { PopularDishes } from '@/widgets/popular-dishes/PopularDishes';
import { VideoShowcase } from '@/widgets/video/VideoShowcase';

/** Главная страница: собирает все секции в нужном порядке. */
export function HomeScreen() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <PopularDishes />
      <VideoShowcase />
      <Interior />
      <Delivery />
      <Contacts />
    </>
  );
}
