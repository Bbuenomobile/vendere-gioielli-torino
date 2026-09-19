import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Compro Oro Usato e Gioielli Antichi a Torino | Oro 18K 750 | " + site.name,
  description: "Valutazione e acquisto di oro usato 18 carati (750 millesimi), parure d'epoca, gioielli antichi e successioni patrimoniali a Torino. Bonifico istantaneo.",
  alternates: {
    canonical: `${site.url}/compro-oro-gioielli-torino`,
  },
};

const criteria = {'title': "Criteri di Valutazione dell'Oro e dei Gioielli", 'items': [{'label': "Titolo dell'Oro", 'text': "Verifica del titolo (750/1000 per il 18k o 999/1000 per l'oro puro) tramite acido di saggio o spettrometria."}, {'label': 'Pesatura Trasparente', 'text': 'Bilance elettroniche omologate e visibili con precisione millesimale.'}, {'label': 'Gemme Montate', 'text': 'Gradazione e stima separata di diamanti, smeraldi, zaffiri e rubini incastonati.'}, {'label': 'Stile & Epoca', 'text': "Valorizzazione collezionistica per gioielli d'epoca, Liberty o creazioni storiche."}, {'label': 'Stato di Conservazione', 'text': 'Integrità dei punzoni storici, maglie e castoni.'}]};
const process = {'title': 'Come Vendere il Vostro Oro a Torino', 'steps': [{'title': '1. Appuntamento Riservato', 'body': 'Fissate un incontro presso i nostri salotti di Via Roma o richiedete la visita di un perito.'}, {'title': '2. Analisi a Vista', 'body': 'Pesatura e controllo del titolo aureo in vostra presenza con strumenti conformi.'}, {'title': '3. Offerta Chiara', 'body': 'Proposta determinata in base al fixing spot di giornata senza decurtazioni impreviste.'}, {'title': '4. Pagamento Immediato', 'body': 'Emissione di bonifico bancario istantaneo con attestazione formale di vendita.'}]};
const faqs = [{'q': 'Smontate le pietre prima della valutazione?', 'a': 'No, esaminiamo le pietre direttamente sulla montatura tramite microscopio gemmologico, valorizzando sia il metallo che le gemme.'}, {'q': "Che differenza c'è tra un compro oro comune e il vostro gabinetto a Torino?", 'a': "I compro oro generici pagano unicamente a peso di fusione. Noi stimiamo la caratura delle pietre, la firma e il pregio storico dell'opera d'arte."}, {'q': 'Ritirate anche oro rotto o parure spaiate?', 'a': 'Sì, acquistiamo catenine rotte, orecchini singoli, fedi nuziali e qualsiasi manufatto in oro 18 carati o 24 carati.'}];
const related = [{'label': 'Diamanti Certificati', 'href': '/compro-diamanti-torino'}, {'label': 'Lingotti & Marenghi', 'href': '/compro-lingotti-monete-oro-torino'}, {'label': 'Gioielli Firmati', 'href': '/compro-gioielli-firmati-torino'}, {'label': 'Crocetta', 'href': '/vendere-gioielli-torino-crocetta'}];
const gallery = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
];

export default function Page() {
  return (
    <ServicePage
      slug="compro-oro-gioielli-torino"
      hero={{
        eyebrow: "Oro 18K & Manifattura Storica · Torino",
        title: "Compro Oro Usato e Gioielli Antichi a Torino: Oro 18K / 750",
        titleHighlight: "Massima Quotazione & Valutazione dell'Arte",
        intro: "A differenza dei tradizionali compro oro, nei nostri salotti di Torino valorizziamo non soltanto il peso del metallo prezioso ma la manifattura orafa, le gemme incastonate e la rilevanza storica del gioiello.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Stima oro usato 18k e gioielli antichi a Torino",
      }}
      category="Oro & Gioielli d'Epoca"
      defaultItemType="Oro e Gioielli Antichi"
      defaultSubject="Valutazione Oro e Gioielli d'Epoca a Torino"
      introBlock={{
        eyebrow: "Oro 18K & Manifattura Storica · Torino",
        title: "Compravendita Trasparente di Oro Usato ed Eredità a Torino",
        paragraphs: ["Stimiamo l'oro a 18 carati (750/1000) e a 24 carati (999/1000) seguendo la quotazione ufficiale di borsa LBMA aggiornata in tempo reale.", "Quando ci presentate gioielli antichi (Art Déco, Liberty torinese, epoca sabauda o primo Novecento), i nostri gemmologi e periti orafi effettuano una duplice valutazione: il valore intrinseco dell'oro e dei diamanti montati, combinato con il plusvalore antiquario.", 'Tutte le pesature avvengono su bilance elettroniche certificate con piombo sigillato, alla vista diretta del cliente.'],
      }}
      criteria={criteria}
      process={process}
      gallery={gallery}
      faqs={faqs}
      related={related}
    />
  );
}
