import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Vendere Gioielli a Torino Centro Storico | Via Roma & Piazza San Carlo | " + site.name,
  description: "Stima e acquisto di alta gioielleria, diamanti certificati e orologi da collezione nel Centro Storico di Torino (Via Roma, San Carlo, Lagrange). Salotti riservati.",
  alternates: {
    canonical: `${site.url}/vendere-gioielli-torino-centro-storico-via-roma`,
  },
};

const highlights = [{'title': 'Salotto di Prestigio in Via Roma', 'desc': 'Ricevimento confidenziale nel cuore di Torino con accesso protetto e discreto.'}, {'title': 'Perizia Immediata de Visu', 'desc': 'Analisi ottica e strumentale del gioiello eseguita direttamente in vostra presenza.'}, {'title': 'Pagamento Istantaneo', 'desc': "Bonifico bancario confermato all'atto della stipula della compravendita."}];
const faqs = [{'q': 'Come raggiungere la vostra sede nel Centro Storico di Torino?', 'a': 'I nostri salotti si trovano in Via Roma 28, a pochi passi da Piazza San Carlo e comodamente raggiungibili dalla Stazione di Porta Nuova.'}, {'q': 'È necessario fissare un appuntamento?', 'a': 'Sì, per tutelare la massima riservatezza e sicurezza dei clienti, riceviamo esclusivamente su appuntamento riservato.'}, {'q': 'Effettuate stime anche di collezioni importanti ed eredità sabaude?', 'a': 'Certamente, siamo specializzati nella perizia e acquisto di patrimoni familiari e successioni complesse in tutto il Piemonte.'}];
const relatedAreas = [{'label': 'Crocetta', 'href': '/vendere-gioielli-torino-crocetta'}, {'label': 'Collina & Crimea', 'href': '/vendere-gioielli-torino-collina-crimea'}, {'label': 'Compro Diamanti', 'href': '/compro-diamanti-torino'}, {'label': 'Gioielli Firmati', 'href': '/compro-gioielli-firmati-torino'}];

export default function Page() {
  return (
    <LocalPage
      slug="vendere-gioielli-torino-centro-storico-via-roma"
      district="Centro Storico & Via Roma"
      postalCode="10121"
      hero={{
        eyebrow: "Torino Centro · Via Roma & Piazza San Carlo",
        title: "Vendere Gioielli a Torino Centro Storico: Valutazione d'Élite",
        titleHighlight: "Via Roma, Piazza San Carlo & Piazza Castello",
        intro: "Nel cuore sabaudo di Torino, la nostra maison accoglie residenti e collezionisti per perizie gemmologiche riservate e acquisto diretto di gioielli preziosi.",
        image: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Vendere gioielli a Torino Centro Storico Via Roma e Piazza San Carlo",
      }}
      introBlock={{
        eyebrow: "Capitale Sabauda e Tradizione Collezionistica",
        title: "L'Eccellenza della Perizia Gemmologica nel Cuore di Torino",
        paragraphs: ['Il centro storico di Torino, racchiuso tra Via Roma, Piazza San Carlo, Piazza Castello e Via Lagrange, custodisce da generazioni patrimoni orafi e collezioni private di altissimo pregio sabaudo.', "I nostri esperti gemmologi mettono a disposizione una competenza indipendente e trasparente per la stima di diamanti solitari, parure d'epoca, ori antichi e orologi di manifattura elvetica.", "Offriamo condizioni d'acquisto ai massimi valori del mercato internazionale, con liquidazione immediata e riservata tramite bonifico bancario istantaneo in Euro."],
      }}
      highlights={highlights}
      faqs={faqs}
      relatedAreas={relatedAreas}
    />
  );
}
