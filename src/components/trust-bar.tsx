import { site } from '@/lib/site';

export function TrustBar() {
  return (
    <section className="bg-[#08162b] text-white border-y border-white/10 py-8">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {site.stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="font-serif text-2xl md:text-3xl font-bold text-[#d4af37]">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-ink-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
