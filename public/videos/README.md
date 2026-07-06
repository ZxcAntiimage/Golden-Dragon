# Видео для сайта

Секция «Видеопрогулка» использует клипы с [Mixkit](https://mixkit.co/) (бесплатная лицензия).

| Файл | Источник | Содержание |
|------|----------|------------|
| `hero.mp4` | [Cooking asian food](https://mixkit.co/free-stock-video/cooking-asian-food-9286/) | Приготовление на воке |
| `wok.mp4` | [Making dumplings](https://mixkit.co/free-stock-video/making-dumplings-in-the-kitchen-22492/) | Лепка пельменей |
| `dish.mp4` | [Chinese dish](https://mixkit.co/free-stock-video/chinese-dish-with-vegetables-20851/) | Китайское блюдо |

Если локальные файлы отсутствуют, сайт автоматически подгружает видео с CDN Mixkit.

Скачать вручную:

```bash
curl -L -o public/videos/hero.mp4 "https://assets.mixkit.co/videos/9286/9286-720.mp4"
curl -L -o public/videos/wok.mp4 "https://assets.mixkit.co/videos/22492/22492-720.mp4"
curl -L -o public/videos/dish.mp4 "https://assets.mixkit.co/videos/20851/20851-720.mp4"
```
