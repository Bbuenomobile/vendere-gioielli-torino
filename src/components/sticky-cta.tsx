import Link from 'next/link';
import { site } from '@/lib/site';

export function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#08162b]/95 backdrop-blur border-t border-white/10 py-3 px-4 md:hidden">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        <a
          href={`tel:${site.phone.replace(/\s/g, '')}`}
          className="flex-1 text-center py-2.5 px-4 rounded-xl border border-[#d4af37]/40 text-[#d4af37] text-xs font-semibold uppercase tracking-wider hover:bg-[#d4af37]/10 transition-colors"
        >
          📞 Chiama Subito
        </a>
        <Link
          href="/valutazione-gratuita"
          className="flex-1 text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89127] text-[#08162b] text-xs font-semibold uppercase tracking-wider shadow-md hover:brightness-110 transition-all"
        >
          Stima Gratuita
        </Link>
      </div>
    </div>
  );
}
