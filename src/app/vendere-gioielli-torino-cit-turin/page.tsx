import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Vendere Gioielli a Cit Turin e San Donato | Valutazione Liberty Torino | " + site.name,
  description: "Stima professionale e acquisto di gioielli Liberty, diamanti, oro 18 carati e orologi svizzeri nei quartieri Cit Turin, San Donato e Piazza Benefica.",
  alternates: {
    canonical: `${site.url}/vendere-gioielli-torino-cit-turin`,
  },
};

const highlights = [{'title': 'Facilmente Raggiungibile', 'desc': "A poche fermate di metropolitana (Bernini/Principi d'Acaja) dai nostri salotti di Via Roma."}, {'title': "Valorizzazione dell'Antico", 'desc': 'Non solo metallo: apprezzamento per lo stile Liberty e la lavorazione artistica.'}, {'title': 'Pagamento Diretto', 'desc': "Nessuna commissione né attesa: saldo contestuale all'accordo."}];
const faqs = [{'q': 'Come raggiungere la sede da Cit Turin?', 'a': "In metropolitana dalla fermata Principi d'Acaja o Bernini fino a Porta Nuova o Re Umberto, a brevissima distanza a piedi da Via Roma."}, {'q': "Acquistate anche spille e pendenti d'epoca non firmati?", 'a': "Sì, periziamo e acquistiamo manufatti orafi del periodo Liberty o Belle Époque valutando sia le pietre che la manifattura d'epoca."}, {'q': "I prezzi dell'oro sono aggiornati?", 'a': 'Le nostre quotazioni seguono in tempo reale il fixing ufficiale di Londra (LBMA) per garantire sempre la massima trasparenza.'}];
const relatedAreas = [{'label': 'Crocetta', 'href': '/vendere-gioielli-torino-crocetta'}, {'label': 'Rivoli', 'href': '/vendere-gioielli-torino-rivoli-val-di-susa'}, {'label': "Oro & Gioielli d'Epoca", 'href': '/compro-oro-gioielli-torino'}, {'label': 'Lingotti & Marenghi', 'href': '/compro-lingotti-monete-oro-torino'}];

export default function Page() {
  return (
    <LocalPage
      slug="vendere-gioielli-torino-cit-turin"
      district="Cit Turin & San Donato"
      postalCode="10138"
      hero={{
        eyebrow: "Cit Turin · Piazza Benefica, Corso Francia & San Donato",
        title: "Vendere Gioielli a Cit Turin e San Donato: Valutazione Esperta",
        titleHighlight: "Cit Turin, Piazza Benefica, Corso Francia & Liberty Torinese",
        intro: "Nel quartiere simbolo dello stile Liberty torinese, offriamo perizie scientifiche trasparenti e acquisto immediato per gioielli storici e moderni.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Valutazione gioielli e oro a Cit Turin Torino",
      }}
      introBlock={{
        eyebrow: "Architettura Floreale e Tradizione Borghese",
        title: "Stima Trasparente di Gioielli d'Epoca a Cit Turin",
        paragraphs: ["Cit Turin ('Piccola Torino' in piemontese) e l'adiacente quartiere San Donato vantano una tradizione di borghesia professionale, con raffinati palazzi Liberty come Casa Fenoglio-Lafleur.", "Nei nostri salotti di Via Roma o mediante consulenza concordata, valutiamo gioielli Liberty del primo Novecento, spille floreali in oro e platino con diamanti taglio rosa o brillante, e orologi d'epoca.", 'Offriamo pesatura a vista, applicazione fedele del listino Rapaport e bonifico bancario immediato.'],
      }}
      highlights={highlights}
      faqs={faqs}
      relatedAreas={relatedAreas}
    />
  );
}
