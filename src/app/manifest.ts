import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vendere Gioielli Torino — Gabinetto Gemmologico',
    short_name: 'VendereGioielliTRN',
    description: 'Valutazione gemmologica e acquisto immediato di diamanti, gioielli firmati e oro a Torino.',
    start_url: '/',
    display: 'standalone',
    background_color: '#08162b',
    theme_color: '#08162b',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
