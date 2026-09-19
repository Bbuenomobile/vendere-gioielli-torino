import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Domande Frequenti (FAQ) | Vendere Gioielli Torino",
  description: "Tutte le risposte sulla valutazione di diamanti, compravendita di oro 18K, perizie d'eredità e orologi di lusso a Torino.",
  alternates: { canonical: `${site.url}/faq` },
};

export default function FaqPage() {
  const faqs = [
    {
      q: "Come avviene la stima di un diamante nei vostri salotti di Torino?",
      a: "La perizia viene condotta in vostra presenza applicando la rigorosa scala internazionale delle 4C (Carato, Colore, Purezza, Taglio) definita dal GIA. Verifichiamo le pietre con microscopi gemmologici e consultiamo in tempo reale il listino mondiale Rapaport Diamond Report.",
    },
    {
      q: "Acquistate oro usato di gioielleria o solo lingotti da investimento?",
      a: "Acquistiamo entrambe le tipologie: gioielli usati in oro 18 carati (750/1000), manufatti d'epoca sabauda o Liberty, catene, fedi, nonché lingotti d'oro puro 24 carati certificati LBMA e monete storiche (Marenghi italiani, Sterline, Krugerrand).",
    },
    {
      q: "Qual è la modalità di pagamento prevista dalla legge?",
      a: "A norma della legislazione italiana in materia di compravendita di beni preziosi e antiriciclaggio, i pagamenti vengono eseguiti tramite bonifico bancario istantaneo o assegno circolare emesso al momento della firma del contratto di cessione.",
    },
    {
      q: "Quali documenti d'identità devo presentare?",
      a: "È necessario esibire un documento d'identità valido (carta d'identità o passaporto) in corso di validità e il codice fiscale o tessera sanitaria.",
    },
    {
      q: "Effettuate stime e perizie a domicilio a Torino e in provincia?",
      a: "Sì. Per patrimoni ereditari consistenti, grandi parure o collezioni di orologi, i nostri periti gemmologi si recano a domicilio con strumentazione idonea a Torino (Crocetta, Collina), Moncalieri, Chieri, Rivoli e in tutta l'area delle Langhe e Roero.",
    },
    {
      q: "Cosa succede se il mio diamante non ha un certificato GIA o HRD?",
      a: "Non costituisce alcun ostacolo. I nostri gemmologi diplomati sono abilitati a redigere la gradazione scientifica completa in sede, attribuendo alla pietra il valore esatto di mercato secondo i parametri ufficiali.",
    },
    {
      q: "Valutate anche orologi di lusso privi di scatola o garanzia?",
      a: "Sì, periziamo orologi autentici anche privi di corredo originario. La presenza di scatola e garanzia originale attribuisce un valore collezionistico ulteriore, ma non è vincolante per l'acquisto.",
    },
    {
      q: "La richiesta di valutazione online è vincolante o a pagamento?",
      a: "La richiesta di pre-valutazione online o telefonica è totalmente gratuita e non comporta alcun impegno di vendita da parte vostra.",
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Chiarezza & Riservatezza</span>
          <h1 className="h1 text-white">Domande Frequenti sulla Vendita di Gioielli a Torino</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Tutto ciò che occorre sapere su procedure di stima, quotazioni Rapaport, fixing oro e modalità di pagamento nei nostri salotti in Via Roma.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-x max-w-4xl space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-2xl border border-ink-900/10 space-y-3 shadow-sm">
              <h3 className="font-display font-semibold text-lg text-ink-900 flex items-start gap-3">
                <span className="text-[#d4af37] font-bold">Q.</span>
                {f.q}
              </h3>
              <p className="text-sm md:text-base text-ink-600 leading-relaxed pl-7">
                {f.a}
              </p>
            </div>
          ))}

          <div className="pt-8 text-center">
            <p className="text-sm text-ink-600 mb-4">Avete altre domande specifiche sui vostri beni preziosi?</p>
            <Link href="/valutazione-gratuita" className="btn-gold">
              Richiedete una Risposta Diretta dai Nostri Gemmologi
            </Link>
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
