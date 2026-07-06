import { site } from '@/shared/config/site';

/**
 * JSON-LD Schema.org для ресторана. Помогает Яндексу и Google показывать
 * адрес, часы работы, телефон и рейтинг прямо в выдаче.
 */
export function restaurantJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${site.url}/#restaurant`,
    name: site.name,
    alternateName: site.nameZh,
    description: site.description,
    servesCuisine: ['Китайская кухня', 'Азиатская кухня'],
    priceRange: '₽₽',
    url: site.url,
    telephone: site.phones[0].tel,
    email: site.email,
    image: [`${site.url}/images/exterior-night.jpg`],
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: site.hours.open,
        closes: site.hours.close,
      },
    ],
    hasMenu: `${site.url}/menu`,
    acceptsReservations: 'True',
    sameAs: site.socials.map((s) => s.href),
  };
}

/** Хлебные крошки для страниц (помогают сформировать сниппет в поиске). */
export function breadcrumbsJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
