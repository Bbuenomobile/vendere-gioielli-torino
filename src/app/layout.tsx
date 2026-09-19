import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyCta } from '@/components/sticky-cta';
import { site } from '@/lib/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Gabinetto Gemmologico & Acquisto Alta Gioielleria Torino`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'vendere gioielli torino',
    'compro diamanti torino',
    'valutazione gioielli via roma torino',
    'compro oro usato torino crocetta',
    'vendere rolex torino',
    'vendere patek philippe torino',
    'gioielli firmati cartier bulgari torino',
    'perizia gemmologica torino',
    'valutazione eredita gioielli torino',
    'vendere gioielli moncalieri chieri',
    'compro oro lingotti marengo torino',
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: site.url,
    title: `${site.name} — Perizia Gemmologica & Compro Gioielli Torino`,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: `${site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${site.name} — Via Roma Piazza San Carlo Torino`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Vendere Gioielli Torino`,
    description: site.description,
    images: [`${site.url}/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#08162b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/icon.png`,
    image: `${site.url}/og-image.jpg`,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    priceRange: '€€€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Bonifico bancario istantaneo',
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
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '18:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '17:30',
      },
    ],
    areaServed: site.areasServed.map((a) => ({
      '@type': 'AdministrativeArea',
      name: a,
    })),
  };

  return (
    <html lang="it" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-ink-900 antialiased selection:bg-[#d4af37]/20 selection:text-[#081a30]">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
