import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Vendere Gioielli in Collina Torinese e Crimea | Servizio VIP Riservato | " + site.name,
  description: "Acquisto e valutazione d'alta gioielleria, diamanti e collezioni d'arte nelle ville della Collina Torinese, Crimea, Borgo Po e Gran Madre.",
  alternates: {
    canonical: `${site.url}/vendere-gioielli-torino-collina-crimea`,
  },
};

const highlights = [{'title': 'Massima Discrezione e Privacy', 'desc': 'Protocollo di sicurezza e riservatezza rigoroso per clienti di alto profilo patrimoniale.'}, {'title': "Laboratorio Mobile d'Avanguardia", 'desc': 'Strumenti per microscopia e rifrattometria operativa anche fuori sede.'}, {'title': 'Liquidazione Immediata Senza Limiti', 'desc': "Capacità finanziaria immediata per l'acquisizione di patrimoni importanti."}];
const faqs = [{'q': 'È possibile richiedere una perizia direttamente presso la mia villa in collina?', 'a': 'Certamente. Organizziamo visite private in tutta la collina torinese (Crimea, Borgo Po, Cavoretto, Pino Torinese) con preavviso concordato.'}, {'q': 'Gestite pratiche di successione o eredità complesse?', 'a': "Sì, collaboriamo frequentemente con studi notarili e legali per l'inventario e la stima imparziale di cespiti preziosi ereditari."}, {'q': 'Quali orologi ricercate principalmente?', 'a': 'Rolex vintage e moderni, Patek Philippe complicati, Audemars Piguet Royal Oak, Cartier da collezione e Vacheron Constantin.'}];
const relatedAreas = [{'label': 'Centro Storico', 'href': '/vendere-gioielli-torino-centro-storico-via-roma'}, {'label': 'Moncalieri & Chieri', 'href': '/vendere-gioielli-torino-moncalieri-chieri'}, {'label': 'Gioielli Firmati', 'href': '/compro-gioielli-firmati-torino'}, {'label': 'Diamanti Certificati', 'href': '/compro-diamanti-torino'}];

export default function Page() {
  return (
    <LocalPage
      slug="vendere-gioielli-torino-collina-crimea"
      district="Collina Torinese & Crimea"
      postalCode="10131"
      hero={{
        eyebrow: "Collina Torinese · Crimea, Borgo Po & Gran Madre",
        title: "Vendere Gioielli in Collina Torinese e Crimea: Servizio d'Élite",
        titleHighlight: "Crimea, Gran Madre, Borgo Po, Cavoretto & Ville Collina",
        intro: "Per i residenti delle esclusive dimore collinari di Torino, offriamo un servizio gemmologico dedicato di altissimo livello con perizie riservate e liquidazione immediata.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Vendere gioielli in Collina Torinese e quartiere Crimea",
      }}
      introBlock={{
        eyebrow: "Dimore Storiche e Collezionismo d'Alta Fascia",
        title: "Servizio Riservato per Collezioni di Pregio in Collina e Crimea",
        paragraphs: ['Affacciata sul Po e dominata da panorami straordinari, la Collina Torinese insieme al borgo residenziale di Crimea e alla Gran Madre custodisce capolavori di gioielleria e orologeria di manifattura elvetica.', 'Per rispondere alle esigenze di discrezione assoluta dei clienti collinari, garantiamo appuntamenti personalizzati direttamente in villa o nei nostri salotti protetti di Via Roma.', 'Acquistiamo collezioni complete, diamanti di eccezionale caratura (da 2 a oltre 10 carati) e creazioni di alta gioielleria firmate dalle grandi maison internazionali.'],
      }}
      highlights={highlights}
      faqs={faqs}
      relatedAreas={relatedAreas}
    />
  );
}
