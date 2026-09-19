import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Vendere Gioielli nelle Langhe e Roero | Perizie ad Alba, Bra e Asti | " + site.name,
  description: "Servizio di stima e acquisto alta gioielleria, diamanti e orologi di prestigio nelle Langhe e Roero (Alba, Bra, Asti, Barolo). Consulenza VIP.",
  alternates: {
    canonical: `${site.url}/vendere-gioielli-torino-langhe-roero-alba`,
  },
};

const highlights = [{'title': 'Consulenza VIP ad Alba e nelle Langhe', 'desc': 'Visite dedicate a domicilio o presso fiduciarie bancarie di fiducia.'}, {'title': 'Competenza Gemmologica Indipendente', 'desc': 'Analisi scientifica senza intermediari per massimizzare il valore di realizzo.'}, {'title': 'Bonifico Bancario Istantaneo', 'desc': 'Liquidazione immediata e trasparente a norma di legge.'}];
const faqs = [{'q': 'Come organizzare un appuntamento ad Alba o nelle Langhe?', 'a': 'È sufficiente contattarci telefonicamente o compilare il modulo: concorderemo un sopralluogo privato presso la vostra tenuta o residenza.'}, {'q': 'Acquistate anche pietre preziose di colore (smeraldi, rubini, zaffiri)?', 'a': 'Sì, siamo specializzati nella perizia di gemme naturali importanti con certificazione internazionale (SSEF, Gübelin, GIA).'}, {'q': 'Qual è il massimale di acquisto?', 'a': 'Non vi sono massimali: disponiamo della liquidità necessaria per acquisire anche intere collezioni private e cespiti ereditari.'}];
const relatedAreas = [{'label': 'Torino Centro', 'href': '/vendere-gioielli-torino-centro-storico-via-roma'}, {'label': 'Collina & Crimea', 'href': '/vendere-gioielli-torino-collina-crimea'}, {'label': 'Gioielli Firmati', 'href': '/compro-gioielli-firmati-torino'}, {'label': 'Pietre Preziose & Perle', 'href': '/compro-pietre-preziose-perle-torino'}];

export default function Page() {
  return (
    <LocalPage
      slug="vendere-gioielli-torino-langhe-roero-alba"
      district="Langhe, Roero & Alba"
      postalCode="12051"
      hero={{
        eyebrow: "Piemonte d'Eccellenza · Langhe, Roero, Alba & Bra",
        title: "Vendere Gioielli nelle Langhe e Roero: Perizie ad Alba",
        titleHighlight: "Alba, Bra, Barolo, Canale & Territorio UNESCO",
        intro: "I periti del nostro gabinetto di Torino si recano regolarmente nelle Langhe e nel Roero per la stima confidenziale di collezioni private e patrimoni di rilievo.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Stima e acquisto gioielli nelle Langhe e ad Alba",
      }}
      introBlock={{
        eyebrow: "Territorio d'Eccellenza e Grande Tradizione",
        title: "Alta Gioielleria e Grandi Patrimoni nelle Langhe e Roero",
        paragraphs: ["Le Langhe e il Roero, rinomati in tutto il mondo per l'eccellenza vinicola e imprenditoriale, vantano famiglie con importanti patrimoni collezionistici in gioielli d'alta gamma, pietre preziose e orologi di manifattura elvetica.", 'Per venire incontro alle esigenze di comodità e riservatezza dei clienti di Alba, Bra e delle colline del Barolo, i nostri periti organizzano trasferte private con strumentazione gemmologica portatile.', 'Trattiamo diamanti importanti, gioielli firmati da grandi maison (Bulgari, Buccellati, Cartier, Damiani) e orologi rari con pagamento istantaneo in Euro.'],
      }}
      highlights={highlights}
      faqs={faqs}
      relatedAreas={relatedAreas}
    />
  );
}
