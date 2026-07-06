import type { Metadata, Viewport } from 'next';
import { fontDisplay, fontSans } from '@/shared/config/fonts';
import { site } from '@/shared/config/site';
import { restaurantJsonLd } from '@/shared/lib/jsonLd';
import { JsonLd } from '@/shared/ui/JsonLd';
import { ScrollProgress } from '@/shared/ui/ScrollProgress';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Header } from '@/widgets/header/Header';
import { Footer } from '@/widgets/footer/Footer';
import './styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — китайский ресторан в Костроме | ${site.nameZh}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'китайский ресторан Кострома',
    'Золотой Дракон Кострома',
    'китайская кухня Кострома',
    'доставка китайской еды Кострома',
    'банкетный зал Кострома',
    'ресторан ул. Титова Кострома',
    'заказать столик Кострома',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.legalName,
  alternates: { canonical: '/' },
  category: 'restaurant',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — китайский ресторан в Костроме`,
    description: site.description,
    images: [
      {
        url: '/images/exterior-night.jpg',
        width: 1200,
        height: 630,
        alt: `${site.name} — китайский ресторан в Костроме`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — китайский ресторан в Костроме`,
    description: site.description,
    images: ['/images/exterior-night.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: '#0a0807',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${fontDisplay.variable} ${fontSans.variable}`}>
      <body>
        <JsonLd data={restaurantJsonLd()} />
        <StoreProvider>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
