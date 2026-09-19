import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Compro Orologi di Lusso a Torino: Rolex, Patek Philippe, Audemars Piguet | " + site.name,
  description: "Stima professionale e acquisto immediato di orologi di prestigio moderni e vintage a Torino: Rolex, Patek Philippe, Audemars Piguet, Cartier. Salotti riservati.",
  alternates: {
    canonical: `${site.url}/compro-orologi-lusso-torino`,
  },
};

const criteria = {'title': 'Criteri di Perizia di un Orologio di Lusso', 'items': [{'label': 'Referenza & Serial Number', 'text': "Identificazione puntuale dell'anno di produzione e conformità dei punzoni della cassa."}, {'label': 'Stato di Cassa & Bracciale', 'text': 'Verifica degli spigoli originari, assenza di lucidature aggressive e tensione delle maglie.'}, {'label': 'Quadrante & Lancette (Coevità)', 'text': "Controllo dell'originalità del quadrante, indici trizio o superluminova e assenza di ristampe."}, {'label': 'Corredo Completo (Full Set)', 'text': 'Valutazione aggiuntiva per presenza di scatola originale, garanzia ufficiale e libretti.'}, {'label': 'Funzionalità Meccanica', 'text': "Esame cronocomparatore per precisione di marcia, ampiezza d'oscillazione e riserva di carica."}]};
const process = {'title': 'Come Vendere il Vostro Orologio di Lusso', 'steps': [{'title': '1. Valutazione Preliminare', 'body': 'Inviate foto dettagliate di quadrante, fondello, bracciale e corredo documentale.'}, {'title': '2. Perizia nei Salotti', 'body': 'Esame de visu e al cronocomparatore nei nostri locali di Via Roma a Torino.'}, {'title': '3. Offerta Finale', 'body': "Proposta di acquisto trasparente basata sui recenti realizzi di mercato e case d'asta."}, {'title': '4. Pagamento e Contratto', 'body': 'Compilazione del contratto di cessione e bonifico bancario istantaneo accreditato sul posto.'}]};
const faqs = [{'q': 'Acquistate orologi privi di garanzia o scatola a Torino?', 'a': 'Sì, acquistiamo orologi autentici anche senza corredo originale, effettuando verifiche approfondite di lecita provenienza e originalità della meccanica.'}, {'q': 'Valutate anche orologi non funzionanti o da revisionare?', 'a': "Certamente, quantifichiamo l'eventuale costo di ripristino o service ufficiale deducendolo in maniera trasparente dalla quotazione d'acquisto."}, {'q': "Come viene accreditato l'importo?", 'a': "Il pagamento avviene contestualmente alla firma dell'atto di vendita tramite bonifico bancario immediato con ricevuta bancaria rilasciata seduta stante."}];
const related = [{'label': 'Gioielli Firmati', 'href': '/compro-gioielli-firmati-torino'}, {'label': 'Diamanti Certificati', 'href': '/compro-diamanti-torino'}, {'label': "Oro & Gioielli d'Epoca", 'href': '/compro-oro-gioielli-torino'}, {'label': 'Moncalieri & Chieri', 'href': '/vendere-gioielli-torino-moncalieri-chieri'}];
const gallery = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
];

export default function Page() {
  return (
    <ServicePage
      slug="compro-orologi-lusso-torino"
      hero={{
        eyebrow: "Alta Orologeria Svizzera · Torino",
        title: "Compro Orologi di Lusso a Torino: Rolex, Patek Philippe, Audemars Piguet",
        titleHighlight: "Perizia Meccanica & Massima Quotazione",
        intro: "Gabinetto specializzato nella valutazione e acquisto immediato di prestigiosi segnatempo svizzeri: Rolex, Patek Philippe, Audemars Piguet, Vacheron Constantin, Cartier, Omega e Jaeger-LeCoultre a Torino.",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Perizia e acquisto orologi di lusso Rolex e Patek Philippe a Torino",
      }}
      category="Orologi di Lusso"
      defaultItemType="Orologio di Lusso"
      defaultSubject="Valutazione Orologio di Lusso a Torino"
      introBlock={{
        eyebrow: "Alta Orologeria Svizzera · Torino",
        title: "Stima e Vendita di Orologi da Collezione a Torino",
        paragraphs: ["Il mercato degli orologi svizzeri d'alta manifattura richiede competenze tecniche specifiche riguardanti referenze, numeri di serie, coevità dei componenti e stato del movimento meccanico.", "Nel nostro gabinetto di Via Roma accogliamo collezionisti e privati desiderosi di cedere modelli iconici come il Rolex Daytona, Submariner, GMT-Master II, Sea-Dweller, Explorer, così come il Nautilus o l'Aquanaut di Patek Philippe e il Royal Oak di Audemars Piguet.", "Valutiamo sia esemplari contemporanei che modelli vintage con quadranti d'epoca, lunette virate o casse mai lucidate (unpolished), garantendo un'offerta allineata alle aste internazionali."],
      }}
      criteria={criteria}
      process={process}
      gallery={gallery}
      faqs={faqs}
      related={related}
    />
  );
}
