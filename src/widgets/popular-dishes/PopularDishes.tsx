import { DishCard } from '@/entities/dish/DishCard';
import { popularDishes } from '@/entities/dish/data';
import { Button } from '@/shared/ui/Button';
import { Reveal } from '@/shared/ui/Reveal';
import { Section } from '@/shared/ui/Section';
import { SectionHeading } from '@/shared/ui/SectionHeading';
import { DishesScene } from '@/widgets/scene-3d/ui/DishesScene';

export function PopularDishes() {
  return (
    <Section id="dishes" className="relative overflow-hidden">
      <DishesScene />

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Фирменные блюда"
          eyebrowZh="招牌菜"
          title={
            <>
              Вкус, который
              <br />
              <span className="text-shimmer">невозможно забыть</span>
            </>
          }
          subtitle="Три блюда, с которых гости начинают знакомство с нашей кухней — каждое приготовлено на воке по традиционным рецептам."
        />

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {popularDishes.map((dish, i) => (
            <DishCard
              key={dish.id}
              dish={dish}
              variant="showcase"
              index={i}
              priority={i === 0}
            />
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <Button href="/menu" variant="dragon" size="lg">
            Всё меню ресторана
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
