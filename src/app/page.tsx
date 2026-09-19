import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { ContactForm } from '@/components/contact-form';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Vendere Gioielli Torino — Gabinetto Gemmologico & Acquisto Alta Gioielleria",
  description: "Gabinetto gemmologico indipendente a Torino: acquisto e stima immediata di diamanti certificati GIA, gioielli firmati (Bulgari, Cartier, Buccellati, Damiani), oro 18K e orologi svizzeri. Salotti privati in Via Roma e visite VIP a domicilio.",
  alternates: {
    canonical: site.url,
  },
};

export default function HomePage() {
  const services = [
    {
      title: "Diamanti Certificati (GIA, HRD, IGI)",
      desc: "Quotazione ufficiale in tempo reale sul listino Rapaport Diamond Report. Perizia ottica di caratura, colore, purezza e taglio per solitari e diamanti sfusi.",
      href: "/compro-diamanti-torino",
      tag: "Listino Rapaport",
    },
    {
      title: "Oro 18K & Gioielli d'Epoca",
      desc: "Valutazione dell'oro 750 millesimi e valorizzazione artistica di gioielli antichi, parure sabaude, creazioni Art Déco e successioni familiari a Torino.",
      href: "/compro-oro-gioielli-torino",
      tag: "Oro 750 / 18K",
    },
    {
      title: "Alta Gioielleria Firmata",
      desc: "Acquisto e valorizzazione di pezzi storici e contemporanei: Bulgari, Cartier, Buccellati, Van Cleef & Arpels, Damiani, Tiffany & Co., Chopard.",
      href: "/compro-gioielli-firmati-torino",
      tag: "Grandi Firme",
    },
    {
      title: "Lingotti & Monete d'Oro da Investimento",
      desc: "Acquisto di lingotti certificati LBMA, Marenghi italiani d'epoca sabauda, Sterline d'oro (Sovereign) e Krugerrand alla quotazione spot in tempo reale.",
      href: "/compro-lingotti-monete-oro-torino",
      tag: "Oro da Investimento",
    },
    {
      title: "Orologi di Lusso Svizzeri",
      desc: "Stima professionale di orologi moderni e vintage: Rolex (Daytona, Submariner, GMT-Master), Patek Philippe, Audemars Piguet, Cartier, Omega.",
      href: "/compro-orologi-lusso-torino",
      tag: "Alta Orologeria",
    },
    {
      title: "Pietre Preziose di Colore & Perle",
      desc: "Esame gemmologico scientifico di smeraldi colombiani, zaffiri di Ceylon e Kashmir, rubini birmani non trattati termicamente e perle naturali.",
      href: "/compro-pietre-preziose-perle-torino",
      tag: "Gemmologia Scientifica",
    },
  ];

  const districts = [
    { name: "Centro Storico & Via Roma", href: "/vendere-gioielli-torino-centro-storico-via-roma" },
    { name: "Crocetta & Galileo Ferraris", href: "/vendere-gioielli-torino-crocetta" },
    { name: "Collina Torinese & Crimea", href: "/vendere-gioielli-torino-collina-crimea" },
    { name: "Cit Turin & San Donato", href: "/vendere-gioielli-torino-cit-turin" },
    { name: "San Salvario & Valentino", href: "/vendere-gioielli-torino-san-salvario-parco-valentino" },
    { name: "Moncalieri & Chieri", href: "/vendere-gioielli-torino-moncalieri-chieri" },
    { name: "Rivoli & Cintura Ovest", href: "/vendere-gioielli-torino-rivoli-val-di-susa" },
    { name: "Langhe, Roero & Alba", href: "/vendere-gioielli-torino-langhe-roero-alba" },
  ];

  return (
    <>
      <Section className="py-20 md:py-28 bg-[#08162b] text-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="label text-[#d4af37]">Maison Obagem · Torino</span>
              <h1 className="h1 text-white">
                Vendere Gioielli a Torino:
                <span className="block text-[#d4af37] mt-2">Gabinetto Gemmologico & Acquisto Diretto</span>
              </h1>
              <p className="lead text-ink-200 max-w-2xl">
                Oltre quarant'anni di eccellenza nella stima imparziale e nell'acquisto immediato di diamanti certificati GIA, alta gioielleria firmata (Bulgari, Cartier, Buccellati, Damiani), oro 18 carati e orologi da collezione svizzeri a Torino e in Piemonte.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/valutazione-gratuita" className="btn-gold py-3.5 px-8 text-xs uppercase tracking-wider font-semibold">
                  Richiedi Stima Riservata
                </Link>
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="btn-outline border-white/30 text-white hover:bg-white/10 py-3.5 px-6 text-xs uppercase tracking-wider font-semibold"
                >
                  📞 {site.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
                  alt="Gabinetto gemmologico di alta gioielleria a Torino Via Roma"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08162b]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#08162b]/85 backdrop-blur border border-white/10 text-xs text-ink-200">
                  <p className="font-semibold text-white">Salotti di Rappresentanza in Via Roma</p>
                  <p className="mt-1 text-[#d4af37]">Ricevimento esclusivamente su appuntamento riservato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TrustBar />

      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="I Nostri Servizi Gemmologici"
            title="Stima Indipendente & Acquisto Immediato a Torino"
            subtitle="Ogni perizia viene effettuata con strumenti ottici di laboratorio gemmologico e valorizzazione secondo i listini di borsa mondiali in vigore."
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((s, i) => (
              <div key={i} className="card p-8 flex flex-col justify-between hover:shadow-xl transition-all border border-ink-900/10 group">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] bg-[#08162b] px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                  <h3 className="font-display font-semibold text-xl text-ink-900 mt-4 group-hover:text-[#997b24] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-600 mt-3 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-ink-100 flex items-center justify-between">
                  <Link href={s.href} className="text-xs font-semibold uppercase tracking-wider text-ink-900 group-hover:text-[#997b24] flex items-center gap-1">
                    Scopri il servizio <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Presenza sul Territorio"
            title="Aree Servite a Torino & in Tutto il Piemonte"
            subtitle="I nostri esperti vi accolgono nei salotti di Via Roma o si recano a domicilio nelle zone residenziali più prestigiose della provincia."
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {districts.map((d, i) => (
              <Link
                key={i}
                href={d.href}
                className="p-5 rounded-xl bg-white border border-ink-900/10 hover:border-[#d4af37] hover:shadow-md transition-all text-center group"
              >
                <span className="font-display font-medium text-sm text-ink-900 group-hover:text-[#997b24] transition-colors block">
                  {d.name}
                </span>
                <span className="text-[11px] text-ink-500 mt-1 block">Consulenza & Stima →</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x max-w-4xl">
          <div className="bg-white rounded-2xl border border-ink-900/10 p-8 md:p-12 shadow-sm">
            <ContactForm
              headline="Richiedete una Valutazione Riservata a Torino"
              intro="Compilate i campi sottostanti con le caratteristiche del vostro gioiello, diamante o orologio per ricevere una proposta indicativa entro 24 ore."
              source="home-page"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
