import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Laboratorio Gemmologico a Torino | Vendere Gioielli Torino",
  description: "Strumentazione scientifica di precisione per l'analisi di diamanti, pietre preziose e metalli nobili in Via Roma a Torino. Diagnostica non distruttiva certificata.",
  alternates: { canonical: `${site.url}/laboratorio-gemmologico-torino` },
};

export default function LaboratorioPage() {
  const instruments = [
    {
      name: "Microscopio Gemmologico a Campo Oscuro",
      desc: "Ispezione di inclusioni diagnostiche, microfratture e lettura dell'incisione laser sulla cintura del diamante (numero report GIA/HRD/IGI).",
    },
    {
      name: "Rifrattometro Ottico Gemmologico",
      desc: "Determinazione dell'indice di rifrazione (IR) e della birifrangenza per identificare univocamente smeraldi, zaffiri, rubini e gemme sintetiche.",
    },
    {
      name: "Spettrometro e Lampada UV a Onde Corte/Lunghe",
      desc: "Valutazione della fluorescenza nei diamanti e rilevamento di trattamenti termici o impregnazioni con resine nelle pietre di colore.",
    },
    {
      name: "Bilancia Elettronica Idrostatica Omologata",
      desc: "Pesatura di precisione al centesimo di carato e misurazione del peso specifico per metalli nobili e gemme sfuse.",
    },
  ];

  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Tecnologia & Scienza dei Materiali</span>
          <h1 className="h1 text-white">Laboratorio Gemmologico e Analisi Scientifica a Torino</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Disponiamo di strumentazione analitica all'avanguardia in Via Roma per verificare autenticità, purezza e assenza di trattamenti su ciascuna gemma.
          </p>
        </div>
      </Section>

      <TrustBar />

      <Section>
        <div className="container-x max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-ink-700 leading-relaxed">
              <SectionHeading
                eyebrow="Metodologia Scientifica"
                title="Rigore Analitico per una Stima Inconfutabile"
              />
              <p>
                Nel mercato contemporaneo dei preziosi, la diffusione di diamanti sintetici coltivati in laboratorio (CVD e HPHT) e di pietre trattate richiede apparecchiature avanzate per tutelare appieno la sicurezza delle transazioni.
              </p>
              <p>
                Nel nostro laboratorio di Torino, ogni perizia si avvale di metodologie non distruttive che preservano la perfetta integrità dei gioielli. Esaminiamo la struttura cristallina e i pattern di fluorescenza per garantire un verdetto scientifico inattaccabile.
              </p>
              <p>
                Le determinazioni dei nostri gemmologi diplomati costituiscono la base per offerte di acquisto certe, trasparenti e conformi alle quotazioni Rapaport e LBMA.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
                  alt="Laboratorio gemmologico scientifico a Torino Via Roma"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="container-x max-w-5xl">
          <SectionHeading
            eyebrow="Strumentazione di Laboratorio"
            title="Apparecchiature di Precisione nei Nostri Salotti di Torino"
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {instruments.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-ink-900/10 space-y-3 shadow-sm">
                <h3 className="font-display font-semibold text-lg text-ink-900">{item.name}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#08162b] text-white">
        <div className="container-x max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl font-semibold">Richiedi una Perizia Strumentale a Torino</h2>
          <p className="text-ink-200 text-sm md:text-base leading-relaxed">
            Fissate un appuntamento confidenziale nei nostri salotti in Via Roma per far analizzare i vostri diamanti, pietre di colore o gioielli d'epoca in vostra presenza.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link href="/valutazione-gratuita" className="btn-gold">Prenota la Perizia</Link>
            <Link href="/contatti" className="btn-outline border-white/30 text-white hover:bg-white/10">Contattaci</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
