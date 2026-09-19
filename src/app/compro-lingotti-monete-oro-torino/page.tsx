import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Compro Lingotti e Monete d'Oro a Torino: Quotazione Spot LBMA & Marenghi | " + site.name,
  description: "Acquisto immediato di lingotti d'oro certificati LBMA (da 10g a 1kg) e monete da investimento (Marenghi sabaudi, Sterline, Krugerrand) a Torino. Pagamento istantaneo.",
  alternates: {
    canonical: `${site.url}/compro-lingotti-monete-oro-torino`,
  },
};

const criteria = {'title': 'Parametri di Acquisto di Lingotti e Monete', 'items': [{'label': 'Certificazione LBMA', 'text': 'Sigillo integro, certificato di fonderia Good Delivery e numero seriale registrato.'}, {'label': 'Titolo Garantito', 'text': 'Purezza 999,9/1000 per i lingotti e titolo specifico di conio (900/1000 per Marenghi o 916,7/1000 per Sterline).'}, {'label': 'Stato di Conservazione Monete', 'text': 'Assenza di colpi, usura eccessiva o graffi sui rilievi storici per conservare il valore pieno.'}, {'label': 'Quotazione in Borsa Live', 'text': "Aggiornamento in tempo reale basato sui prezzi correnti del mercato dell'oro di Londra."}, {'label': 'Conformità Fiscale', 'text': "Regime fiscale dell'oro da investimento conforme alla Legge 7/2000 (esenzione IVA)."}]};
const process = {'title': 'Procedimento di Vendita dei Vostri Lingotti', 'steps': [{'title': '1. Verifica Telefono o Email', 'body': "Comunicateci peso, fonderia o tipologia delle monete d'oro."}, {'title': '2. Fissazione della Quotazione', 'body': 'Blocco del prezzo in accordo con il fixing di mercato del momento.'}, {'title': '3. Consegna in Salotto', 'body': 'Ricevimento sicuro in Via Roma con controllo elettronico di densità e peso.'}, {'title': '4. Bonifico Istantaneo', 'body': 'Accredito immediato sul vostro conto con rilascio del contratto di cessione a norma.'}]};
const faqs = [{'q': "Quale documentazione occorre per vendere lingotti d'oro a Torino?", 'a': "Per la vendita di oro da investimento a norma della legge italiana occorrono un documento d'identità in corso di validità e il codice fiscale."}, {'q': 'Comprate anche lingotti senza blister o con sigillo aperto?', 'a': "Sì. In tal caso eseguiamo un test strumentale non distruttivo (bilancia idrostatica o spettrometria XRF) per accertare la purezza a 24 carati prima dell'acquisto."}, {'q': 'Ci sono limiti di importo?', 'a': 'Non vi sono limiti quantitativi. Per importi elevati garantiamo bonifico istantaneo o concordato secondo le vostre preferenze bancarie.'}];
const related = [{'label': "Oro & Gioielli d'Epoca", 'href': '/compro-oro-gioielli-torino'}, {'label': 'Diamanti Certificati', 'href': '/compro-diamanti-torino'}, {'label': 'Orologi di Lusso', 'href': '/compro-orologi-lusso-torino'}, {'label': 'Cit Turin', 'href': '/vendere-gioielli-torino-cit-turin'}];
const gallery = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
];

export default function Page() {
  return (
    <ServicePage
      slug="compro-lingotti-monete-oro-torino"
      hero={{
        eyebrow: "Oro Fisico da Investimento · Torino",
        title: "Compro Lingotti e Monete d'Oro a Torino: Quotazione Spot LBMA",
        titleHighlight: "Trasparenza Totale & Fixing di Londra",
        intro: "Acquisto immediato di lingotti d'oro fino (999,9/1000) sigillati LBMA e monete storiche d'investimento alla quotazione di borsa in tempo reale a Torino.",
        image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Stima e acquisto di lingotti d'oro certificati e Marenghi a Torino",
      }}
      category="Lingotti & Monete d'Oro"
      defaultItemType="Lingotti o Monete d'Oro"
      defaultSubject="Valutazione Lingotti e Monete d'Oro a Torino"
      introBlock={{
        eyebrow: "Oro Fisico da Investimento · Torino",
        title: "Compravendita Professionale di Oro Fisico da Investimento a Torino",
        paragraphs: ["I lingotti d'oro puro certificati da raffinerie Good Delivery LBMA (Argor-Heraeus, Valcambi, Umicore, C.Hafner) e le monete d'oro storiche costituiscono la forma più liquida e sicura di riserva aurea.", 'Nel nostro gabinetto di Torino acquistiamo lingotti di ogni peso (da 5 grammi fino a 1.000 grammi) e monete da investimento riconosciute dalla legge italiana (Marenghi italiani ed epoca sabauda, Sterline oro britanniche, Krugerrand sudafricani, Maple Leaf canadesi, American Eagle).', 'La valorizzazione si basa fedelmente sulla quotazione spot ufficiale di Londra (LBMA Fixing) con pagamento immediato tramite bonifico bancario tracciabile.'],
      }}
      criteria={criteria}
      process={process}
      gallery={gallery}
      faqs={faqs}
      related={related}
    />
  );
}
