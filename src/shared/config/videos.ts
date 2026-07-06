/** Видео ресторана — загружены владельцем. */
export const siteVideos = {
  hall: {
    src: '/videos/restaurant-1.mov',
    poster: '/images/hall-banquet.jpg',
    label: 'Зал ресторана',
  },
  kitchen: {
    src: '/videos/restaurant-2.mov',
    poster: '/images/exterior-night.jpg',
    label: 'Кухня и атмосфера',
  },
} as const;

export const showcaseVideos = [siteVideos.hall, siteVideos.kitchen] as const;
