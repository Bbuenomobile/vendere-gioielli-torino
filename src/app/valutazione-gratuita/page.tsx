import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { ContactForm } from '@/components/contact-form';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Valutazione Gratuita di Gioielli e Diamanti a Torino | Vendere Gioielli Torino",
  description: "Richiedete una perizia preliminare gratuita o prenotate una stima gemmologica nei nostri salotti di Via Roma a Torino. Nessun costo né impegno.",
  alternates: { canonical: `${site.url}/valutazione-gratuita` },
};

export default function ValutazioneGratuitaPage() {
  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Perizia Confidenziale Senza Impegno</span>
          <h1 className="h1 text-white">Valutazione Gratuita di Gioielli, Diamanti e Orologi a Torino</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Inviateci i dettagli del vostro bene prezioso per ricevere una valutazione preliminare obiettiva oppure concordate una stima in presenza in Via Roma 28 a Torino.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-x max-w-3xl">
          <div className="bg-white rounded-2xl border border-ink-900/10 p-8 md:p-12 shadow-sm">
            <ContactForm
              headline="Modulo di Richiesta Valutazione"
              intro="Compilate i campi sottostanti. Più dettagli fornite (caratura, certificati, firma della maison), più accurata sarà la nostra risposta entro 24 ore."
              source="valutazione-gratuita-page"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
