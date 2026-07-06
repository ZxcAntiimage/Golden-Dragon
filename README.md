# Золотой Дракон 金龙 — сайт китайского ресторана (Кострома)

Современный 3D-сайт на Next.js 15 (App Router) в китайской стилистике: чёрный ·
золотой · красный. Живой 3D-дракон, сложные анимации, полная оптимизация и SEO.

## Стек

- **Next.js 15 + React 19** (App Router, RSC, статическая генерация)
- **TypeScript** (strict)
- **Tailwind CSS v4** — дизайн-система в `src/app/styles/globals.css`
- **Three.js + React Three Fiber v9 + drei v10** — 3D-сцена героя
  (версии R3F/drei выбраны под React 19 — иначе ломается рантайм внутренних API React)
- **Framer Motion** — анимации появления, параллакс, лайтбокс, фильтры меню
- **Redux Toolkit + react-redux** — глобальный UI-стейт (меню, лайтбокс)
- **Архитектура FSD** (Feature-Sliced Design), строго по слоям

## FSD-структура

Слой `pages` переименован в `screens`, потому что имя `pages` зарезервировано Next.

```
src/
  app/          # Next-роутинг + провайдеры + стили (слой app)
    providers/  # StoreProvider (Redux)
    styles/     # globals.css — дизайн-система
    layout.tsx  page.tsx  menu/  contacts/  sitemap.ts  robots.ts  manifest.ts
  screens/      # FSD-слой pages: home, menu, contacts
  widgets/      # header, footer, hero, about, popular-dishes,
                # video, interior, delivery, contacts, marquee, scene-3d
  features/     # contact-form
  entities/     # dish, hall, gallery, feature (данные + карточки)
  shared/       # ui/, lib/, config/, store/
```

Правило импортов: слой видит только слои ниже себя
(`app → screens → widgets → features → entities → shared`).

## Команды

```bash
npm run dev      # разработка
npm run build    # прод-сборка
npm run start    # запуск прод-сервера
```

## Как добавить видео

Положите файлы в `public/videos/`:

- `hero.mp4` (H.264, без звука, 5–15 сек, зациклено) и по возможности `hero.webm`.

Они автоматически подхватятся секцией «Видеопрогулка». Пока файла нет —
показывается кинематографичное слайд-шоу Ken Burns, поэтому блок не пустует.

```bash
ffmpeg -i input.mov -vf "scale=1920:-2" -an -c:v libx264 -crf 24 -preset slow -movflags +faststart public/videos/hero.mp4
ffmpeg -i input.mov -vf "scale=1920:-2" -an -c:v libvpx-vp9 -crf 34 -b:v 0 public/videos/hero.webm
```

## Оптимизация

- 3D-сцена грузится лениво (`next/dynamic`, `ssr:false`) и только когда секция
  в зоне видимости; при `prefers-reduced-motion` заменяется лёгкой заглушкой.
- `next/image` (AVIF/WebP), приоритетная загрузка только для первого экрана.
- Иммутабельное кэширование статики, сжатие, `optimizePackageImports`.
- Первый экран главной ~185 КБ JS (3D в отдельном чанке по требованию).

## SEO

- Метаданные (title/description/keywords/OpenGraph/Twitter), `canonical`, `lang=ru`.
- **JSON-LD** `Restaurant` (адрес, часы, телефон, кухня, меню) + `BreadcrumbList`.
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, favicon.
- Семантическая разметка, alt у изображений, кликабельные телефоны.

## Данные заведения

Единый источник правды — `src/shared/config/site.ts` (контакты, адрес, часы,
карта). Меню — `src/entities/dish/data.ts`. Меняются в одном месте.

## Яндекс.Метрика

Готово к подключению: вставьте счётчик в `src/app/layout.tsx` через
`next/script` со `strategy="afterInteractive"` и `id` счётчика.
```
