import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Vendere Gioielli a San Salvario e Parco del Valentino | Stima Torino | " + site.name,
  description: "Valutazione e compro gioielli, diamanti certificati e oro usato a San Salvario, Corso Massimo d'Azeglio e residenze lungo il Po a Torino.",
  alternates: {
    canonical: `${site.url}/vendere-gioielli-torino-san-salvario-parco-valentino`,
  },
};

const highlights = [{'title': 'Vicinanza a Porta Nuova', 'desc': 'Comodità logistica eccellente a pochi passi da Via Roma e Piazza San Carlo.'}, {'title': 'Esame Gemmologico Accurato', 'desc': 'Analisi delle 4C del diamante e verifica del titolo aureo 750/1000.'}, {'title': 'Bonifico Immediato', 'desc': 'Accredito immediato in Euro sul conto bancario del venditore.'}];
const faqs = [{'q': 'Come fissare un appuntamento da San Salvario?', 'a': 'È sufficiente compilare il modulo online o contattarci via telefono per concordare un orario riservato nei nostri salotti di Via Roma.'}, {'q': "Comprate anche monete d'oro sabaude e Marenghi?", 'a': "Sì, acquistiamo Marenghi italiani, Sterline d'oro, Krugerrand e monete da collezione alla migliore quotazione di mercato."}, {'q': 'Quale documentazione serve per la compravendita?', 'a': "A norma delle disposizioni di legge italiane in materia di pubblica sicurezza occorrono carta d'identità valida e codice fiscale."}];
const relatedAreas = [{'label': 'Centro Storico', 'href': '/vendere-gioielli-torino-centro-storico-via-roma'}, {'label': 'Collina Torinese', 'href': '/vendere-gioielli-torino-collina-crimea'}, {'label': 'Compro Diamanti', 'href': '/compro-diamanti-torino'}, {'label': 'Orologi di Lusso', 'href': '/compro-orologi-lusso-torino'}];

export default function Page() {
  return (
    <LocalPage
      slug="vendere-gioielli-torino-san-salvario-parco-valentino"
      district="San Salvario & Parco del Valentino"
      postalCode="10125"
      hero={{
        eyebrow: "San Salvario · Corso Massimo d'Azeglio & Parco del Valentino",
        title: "Vendere Gioielli a San Salvario e Parco del Valentino",
        titleHighlight: "Corso Massimo d'Azeglio, Corso Vittorio Emanuele II & Valentino",
        intro: "Per i residenti della prestigiosa direttrice di Corso Massimo d'Azeglio e dell'area del Parco del Valentino, offriamo perizie riservate e acquisto immediato.",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Stima gioielli San Salvario e Valentino Torino",
      }}
      introBlock={{
        eyebrow: "Residenze sul Fiume Po e Quartiere Storico",
        title: "Consulenza Gemmologica a San Salvario e Lungo Po",
        paragraphs: ['Tra le sponde alberate del Po, il Parco del Valentino e i grandi viali residenziali, San Salvario conserva palazzi storici di notevole caratura architettonica.', 'I nostri gemmologi mettono a disposizione dei proprietari di gioielli, parure ereditarie e orologi di prestigio una valutazione obiettiva e fondata sui mercati globali.', 'Ogni stima rispetta i più severi criteri di riservatezza, garantendo un pagamento istantaneo tramite bonifico bancario tracciato.'],
      }}
      highlights={highlights}
      faqs={faqs}
      relatedAreas={relatedAreas}
    />
  );
}
