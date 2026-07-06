import Link from 'next/link';
import { Button } from '@/shared/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-5 text-center">
      <span className="font-display text-8xl text-gold/20">龙</span>
      <h1 className="mt-4 font-display text-4xl font-bold text-paper sm:text-5xl">
        Страница не найдена
      </h1>
      <p className="mt-4 max-w-md text-paper/60">
        Кажется, дракон унёс эту страницу. Вернитесь на главную или загляните в меню.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/" variant="primary">
          На главную
        </Button>
        <Button href="/menu" variant="outline">
          Меню
        </Button>
      </div>
    </section>
  );
}
