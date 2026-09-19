import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Vendere Gioielli a Moncalieri e Chieri | Stima Oro & Diamanti Piemonte | " + site.name,
  description: "Servizio di stima e acquisto gioielli a Moncalieri, Chieri, Pino Torinese e Pecetto. Visite a domicilio per collezioni ed eredità.",
  alternates: {
    canonical: `${site.url}/vendere-gioielli-torino-moncalieri-chieri`,
  },
};

const highlights = [{'title': 'Perizie a Domicilio in Collina', 'desc': 'Sopralluogo riservato di periti gemmologi muniti di strumenti di analisi.'}, {'title': 'Quotazioni di Rango Internazionale', 'desc': "Stime parametrate sui realizzi d'asta e listini Rapaport mondiali."}, {'title': 'Massima Sicurezza Operativa', 'desc': 'Contratto formale di compravendita e pagamento istantaneo.'}];
const faqs = [{'q': 'Effettuate visite a domicilio a Moncalieri o Chieri?', 'a': 'Certamente. Per patrimoni di famiglia o ragioni di comodità, i nostri gemmologi eseguono perizie direttamente presso la vostra residenza.'}, {'q': "Come valutate i diamanti montati su anelli d'epoca?", 'a': 'I nostri esperti analizzano caratura, purezza e taglio direttamente sulla montatura tramite microscopio gemmologico, preservando il manufatto.'}, {'q': 'Quali orologi sono maggiormente richiesti?', 'a': 'Orologi sportivi in acciaio e modelli classici in oro dei marchi Rolex, Patek Philippe, Audemars Piguet, Omega e Jaeger-LeCoultre.'}];
const relatedAreas = [{'label': 'Collina & Crimea', 'href': '/vendere-gioielli-torino-collina-crimea'}, {'label': 'Centro Storico', 'href': '/vendere-gioielli-torino-centro-storico-via-roma'}, {'label': 'Gioielli Firmati', 'href': '/compro-gioielli-firmati-torino'}, {'label': 'Orologi di Lusso', 'href': '/compro-orologi-lusso-torino'}];

export default function Page() {
  return (
    <LocalPage
      slug="vendere-gioielli-torino-moncalieri-chieri"
      district="Moncalieri & Chieri"
      postalCode="10024"
      hero={{
        eyebrow: "Cintura Sud · Moncalieri, Chieri, Pino & Pecetto Torinese",
        title: "Vendere Gioielli a Moncalieri, Chieri e Pino Torinese",
        titleHighlight: "Moncalieri Centro Storico, Chieri, Pecetto & Pino Torinese",
        intro: "Consulenza gemmologica di alto livello per i residenti della collina di Moncalieri, Chieri e paesi limitrofi: perizie a domicilio e acquisto immediato.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Perizia gioielli e diamanti a Moncalieri e Chieri",
      }}
      introBlock={{
        eyebrow: "La Collina Storica Sabauda di Moncalieri",
        title: "Servizio Gemmologico per Moncalieri, Chieri e la Cintura Sud",
        paragraphs: ["Con la maestosa presenza del Castello Reale di Moncalieri e le splendide ville che punteggiano le colline di Pino e Pecetto Torinese, quest'area ospita collezioni private di grande valore.", 'I nostri periti si recano direttamente a domicilio per esaminare orologi di grandi marchi (Rolex, Patek, Cartier), solitari certificati GIA e parure in oro 18 carati.', 'Garantiamo una trattativa confidenziale, senza intermediari, con saldo istantaneo tramite bonifico bancario certificato.'],
      }}
      highlights={highlights}
      faqs={faqs}
      relatedAreas={relatedAreas}
    />
  );
}
