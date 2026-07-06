import type { MetadataRoute } from 'next';
import { site } from '@/shared/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — китайский ресторан в Костроме`,
    short_name: site.name,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0807',
    theme_color: '#0a0807',
    lang: 'ru',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
