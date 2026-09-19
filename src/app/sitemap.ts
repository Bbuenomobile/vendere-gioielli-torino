import { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  const routes = [
    // Homepage
    '',

    // 6 Services
    '/compro-diamanti-torino',
    '/compro-oro-gioielli-torino',
    '/compro-gioielli-firmati-torino',
    '/compro-lingotti-monete-oro-torino',
    '/compro-orologi-lusso-torino',
    '/compro-pietre-preziose-perle-torino',

    // 8 Districts
    '/vendere-gioielli-torino-centro-storico-via-roma',
    '/vendere-gioielli-torino-crocetta',
    '/vendere-gioielli-torino-collina-crimea',
    '/vendere-gioielli-torino-cit-turin',
    '/vendere-gioielli-torino-san-salvario-parco-valentino',
    '/vendere-gioielli-torino-moncalieri-chieri',
    '/vendere-gioielli-torino-rivoli-val-di-susa',
    '/vendere-gioielli-torino-langhe-roero-alba',

    // 8 Institutional & Lab
    '/chi-siamo',
    '/come-funziona',
    '/faq',
    '/contatti',
    '/valutazione-gratuita',
    '/laboratorio-gemmologico-torino',
    '/note-legali',
    '/privacy-policy',

    // Blog Index + 6 Articles
    '/blog',
    '/blog/guida-vendere-diamanti-torino',
    '/blog/comprendere-le-4c-del-diamante-torino',
    '/blog/certificati-gia-vs-hrd-torino',
    '/blog/valore-gioielli-firmati-cartier-bulgari-torino',
    '/blog/vendere-orologio-lusso-rolex-patek-torino',
    '/blog/quotazione-oro-fiscalita-lingotti-italia',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-09-19'),
    changeFrequency: route === '' ? 'daily' : route.startsWith('/blog') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/compro-') ? 0.9 : route.startsWith('/vendere-gioielli-') ? 0.8 : 0.7,
  }));
}
