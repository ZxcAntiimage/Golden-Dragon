import type { MetadataRoute } from 'next';
import { site } from '@/shared/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/menu', '/contacts'];
  // Дата задаётся статически, чтобы билд был детерминированным.
  const lastModified = new Date('2026-07-06');
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
