import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/section';
import { ContactForm } from '@/components/contact-form';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Come Funziona la Valutazione & Vendita | Vendere Gioielli Torino",
  description: "Scoprite il procedimento trasparente in 4 fasi per stimare e vendere i vostri gioielli, diamanti e orologi a Torino: dal primo contatto al bonifico istantaneo.",
  alternates: { canonical: `${site.url}/come-funziona` },
};

export default function ComeFunzionaPage() {
  const steps = [
    {
      num: "01",
      title: "Primo Contatto e Pre-Stima",
      desc: "Inviateci fotografie e dettagli (certificati, punzoni, scontrini) tramite il modulo protetto o WhatsApp. I nostri gemmologi eseguono una prima analisi indicativa entro 24 ore.",
    },
    {
      num: "02",
      title: "Appuntamento nei Salotti di Via Roma",
      desc: "Vi accogliamo in totale riservatezza nei nostri salotti di Via Roma 28 a Torino, o concordiamo una visita a domicilio a Crocetta, Collina o provincia.",
    },
    {
      num: "03",
      title: "Perizia Ottica e Proposta Trasparente",
      desc: "In vostra presenza, analizziamo caratura, purezza, colore e taglio dei diamanti e testiamo l'oro su bilance elettroniche bollate. Formuliamo una proposta ferma basata sui listini Rapaport e LBMA.",
    },
    {
      num: "04",
      title: "Bonifico Bancario Istantaneo",
      desc: "Se accettate la proposta, stipuliamo un regolare atto di compravendita a norma di legge italiana ed eseguiamo immediatamente il bonifico bancario istantaneo in Euro sul vostro conto.",
    },
  ];

  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Procedura Chiara & Senza Sorprese</span>
          <h1 className="h1 text-white">Come Funziona la Stima e la Vendita di Gioielli a Torino</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Un percorso lineare in quattro tappe, all'insegna della massima trasparenza deontologica, del rigore scientifico e della sicurezza finanziaria.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-x max-w-5xl">
          <SectionHeading
            eyebrow="Il Nostro Metodo"
            title="Dalla Richiesta al Pagamento in 4 Passaggi Semplici"
            align="center"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {steps.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-ink-900/10 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-[#d4af37] font-display">
                  Fase {s.num}
                </div>
                <h3 className="font-display font-semibold text-xl text-ink-900">{s.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="container-x max-w-4xl">
          <div className="bg-white rounded-2xl border border-ink-900/10 p-8 md:p-12 shadow-sm">
            <ContactForm
              headline="Iniziate la Vostra Valutazione a Torino"
              intro="Inviate i dettagli del vostro bene per ricevere una prima risposta orientativa entro oggi."
              source="come-funziona-page"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
