import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Chi Siamo — La Nostra Storia & Tradizione Gemmologica | Vendere Gioielli Torino",
  description: "Conoscete la storia, la deontologia e il rigore scientifico di Vendere Gioielli Torino, gabinetto indipendente specializzato in alta gioielleria e diamanti in Via Roma.",
  alternates: { canonical: `${site.url}/chi-siamo` },
};

export default function ChiSiamoPage() {
  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Tradizione & Indipendenza Gemmologica</span>
          <h1 className="h1 text-white">Chi Siamo — Gabinetto Gemmologico in Via Roma a Torino</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Oltre quattro decenni di consulenza riservata a collezionisti privati, famiglie aristocratiche, studi legali e notarili per la stima imparziale e l'acquisto diretto di alta gioielleria, diamanti certificati e orologi svizzeri a Torino e in Piemonte.
          </p>
        </div>
      </Section>

      <TrustBar />

      <Section>
        <div className="container-x max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-ink-700 leading-relaxed">
              <SectionHeading
                eyebrow="La Nostra Storia"
                title="Eccellenza Gemmologica nel Cuore di Torino"
              />
              <p>
                Nel cuore sabaudo di Torino, in Via Roma a pochi passi da Piazza San Carlo, il nostro gabinetto coniuga la tradizione dell'alta oreficeria classica con la più avanzata scienza gemmologica contemporanea.
              </p>
              <p>
                A differenza dei consueti compro oro che fondono le creazioni al solo valore metallico, in Vendere Gioielli Torino stimiamo ciascun gioiello nella sua dimensione globale: la caratura e purezza dei diamanti sul listino Rapaport, la manifattura storica d'autore (Bulgari, Cartier, Buccellati, Damiani, Van Cleef & Arpels) e il fascino collezionistico dell'epoca sabauda o Art Déco.
              </p>
              <p>
                La nostra deontologia si fonda sulla trasparenza più rigorosa: tutte le perizie avvengono in presenza del proprietario con bilance elettroniche omologate e spiegazione chiara di ciascun parametro tecnico.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
                  alt="Gabinetto gemmologico in Via Roma a Torino"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="container-x max-w-5xl">
          <SectionHeading
            eyebrow="I Nostri Valori"
            title="Quattro Pilastri di Fiducia e Riservatezza"
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                t: "Perizia Imparziale",
                d: "Gemmologi diplomati presso i più accreditati istituti internazionali (GIA, HRD) per una stima scientifica e obiettiva.",
              },
              {
                t: "Riservatezza Assoluta",
                d: "Ricevimento in salotti privati in Via Roma e visite VIP a domicilio a Torino, Crocetta, Collina e Langhe.",
              },
              {
                t: "Quotazioni Ufficiali",
                d: "Valutazioni parametrate in tempo reale sul Rapaport Diamond Report e sul fixing internazionale LBMA.",
              },
              {
                t: "Bonifico Istantaneo",
                d: "Accredito immediato e tracciabile in Euro senza attese né commissioni di intermediazione.",
              },
            ].map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-ink-900/10 space-y-3 shadow-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#08162b] text-[#d4af37] font-bold">
                  0{i + 1}
                </div>
                <h3 className="font-display font-semibold text-lg text-ink-900">{p.t}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#08162b] text-white">
        <div className="container-x max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl font-semibold">Incontrate i Nostri Gemmologi a Torino</h2>
          <p className="text-ink-200 text-sm md:text-base leading-relaxed">
            Siamo a vostra completa disposizione per un primo consulto senza impegno o per una perizia approfondita nei nostri salotti riservati di Via Roma.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link href="/valutazione-gratuita" className="btn-gold">Richiedi una Valutazione</Link>
            <Link href="/contatti" className="btn-outline border-white/30 text-white hover:bg-white/10">Contattaci Direttamente</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
