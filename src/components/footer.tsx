import Link from 'next/link';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-[#050f1d] text-ink-100 border-t border-white/10">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#997b24] text-[#081a30] font-serif font-bold text-lg">
              VT
            </span>
            <span className="font-display text-xl text-white font-semibold">{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-ink-300 leading-relaxed max-w-xs">
            Gabinetto gemmologico indipendente e acquisto diretto di alta gioielleria a Torino: diamanti certificati GIA / HRD secondo listino Rapaport, gioielli d'epoca e firmati (Bulgari, Cartier, Buccellati, Damiani), oro da investimento e orologi di prestigio.
          </p>
          <div className="mt-5 text-sm text-ink-300 space-y-1">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="block text-[#d4af37] hover:text-white font-medium">{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`} className="block hover:text-white">{site.email}</a>
            <p className="pt-2">{site.address.street}</p>
            <p>{site.address.postalCode} {site.address.city} ({site.region}), Italia</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#d4af37]">La Nostra Competenza</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/compro-diamanti-torino" className="text-ink-300 hover:text-white">Diamanti Certificati (GIA, HRD)</Link></li>
            <li><Link href="/compro-oro-gioielli-torino" className="text-ink-300 hover:text-white">Oro Usato & Eredità (18k)</Link></li>
            <li><Link href="/compro-gioielli-firmati-torino" className="text-ink-300 hover:text-white">Alta Gioielleria Firmata</Link></li>
            <li><Link href="/compro-lingotti-monete-oro-torino" className="text-ink-300 hover:text-white">Lingotti & Marenghi d'Oro</Link></li>
            <li><Link href="/compro-orologi-lusso-torino" className="text-ink-300 hover:text-white">Orologi di Lusso (Rolex, Patek)</Link></li>
            <li><Link href="/compro-pietre-preziose-perle-torino" className="text-ink-300 hover:text-white">Pietre Preziose & Perle</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#d4af37]">La Maison</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/chi-siamo" className="text-ink-300 hover:text-white">Chi Siamo</Link></li>
            <li><Link href="/laboratorio-gemmologico-torino" className="text-ink-300 hover:text-white">Laboratorio Gemmologico</Link></li>
            <li><Link href="/come-funziona" className="text-ink-300 hover:text-white">Come Funziona</Link></li>
            <li><Link href="/faq" className="text-ink-300 hover:text-white">Domande Frequenti (FAQ)</Link></li>
            <li><Link href="/blog" className="text-ink-300 hover:text-white">Guide & Notizie</Link></li>
            <li><Link href="/contatti" className="text-ink-300 hover:text-white">Salotti Riservati & Contatti</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#d4af37]">Torino & Piemonte</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/vendere-gioielli-torino-centro-storico-via-roma" className="text-ink-300 hover:text-white">Centro Storico & Via Roma</Link></li>
            <li><Link href="/vendere-gioielli-torino-crocetta" className="text-ink-300 hover:text-white">Crocetta</Link></li>
            <li><Link href="/vendere-gioielli-torino-collina-crimea" className="text-ink-300 hover:text-white">Collina Torinese & Crimea</Link></li>
            <li><Link href="/vendere-gioielli-torino-cit-turin" className="text-ink-300 hover:text-white">Cit Turin & San Donato</Link></li>
            <li><Link href="/vendere-gioielli-torino-san-salvario-parco-valentino" className="text-ink-300 hover:text-white">San Salvario & Valentino</Link></li>
            <li><Link href="/vendere-gioielli-torino-moncalieri-chieri" className="text-ink-300 hover:text-white">Moncalieri & Chieri</Link></li>
            <li><Link href="/vendere-gioielli-torino-rivoli-val-di-susa" className="text-ink-300 hover:text-white">Rivoli & Cintura Ovest</Link></li>
            <li><Link href="/vendere-gioielli-torino-langhe-roero-alba" className="text-ink-300 hover:text-white">Langhe & Roero (Alba)</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-xs text-ink-400">
        <div className="container-x flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {site.name}. Tutti i diritti riservati. Maison Obagem Torino.</p>
          <div className="flex gap-6">
            <Link href="/note-legali" className="hover:text-white">Note Legali</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/valutazione-gratuita" className="hover:text-white">Valutazione Gratuita</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
