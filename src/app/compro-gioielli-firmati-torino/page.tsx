import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Compro Gioielli Firmati a Torino | Bulgari, Cartier, Buccellati, Damiani | " + site.name,
  description: "Valutazione e acquisto diretto di alta gioielleria firmata: Bulgari, Cartier, Buccellati, Damiani, Van Cleef & Arpels a Torino. Massima quotazione collezionistica.",
  alternates: {
    canonical: `${site.url}/compro-gioielli-firmati-torino`,
  },
};

const criteria = {'title': "Elementi di Valutazione dell'Alta Gioielleria Firmata", 'items': [{'label': 'Firma & Punzonatura', 'text': "Autenticazione della firma della maison, timbro dell'orafo e matricola identificativa."}, {'label': 'Collezione & Iconicità', 'text': 'Riconoscimento delle linee più ambite dal mercato mondiale.'}, {'label': 'Scatola & Certificati', 'text': 'Presenza di cofanetto originale e certificato di garanzia della casa madre.'}, {'label': 'Qualità Gemmologica', 'text': "Gradazione dei diamanti e delle gemme preziose secondo i criteri d'eccellenza della maison."}, {'label': 'Stato di Conservazione', 'text': 'Integrità strutturale, assenza di rilavorazioni non autorizzate e finitura.'}]};
const process = {'title': 'Come Vendere il Vostro Gioiello Firmato', 'steps': [{'title': '1. Informazioni Preliminari', 'body': 'Inviate fotografie della firma, punzoni e corredo via modulo o WhatsApp.'}, {'title': '2. Perizia nei Salotti', 'body': 'Incontro riservato in Via Roma o visita a domicilio a Torino o Collina.'}, {'title': '3. Offerta Premium', 'body': "Formulazione di un'offerta che valorizza la firma e non il solo metallo."}, {'title': '4. Pagamento Immediato', 'body': "Bonifico bancario istantaneo concordato all'atto della vendita."}]};
const faqs = [{'q': 'Posso vendere un gioiello firmato senza scatola o garanzia a Torino?', 'a': 'Sì. Sebbene il corredo completo valorizzi ulteriormente il pezzo, i nostri periti sono in grado di autenticare la manifattura e la punzonatura originale.'}, {'q': 'Quali maison trattate principalmente a Torino?', 'a': 'Bulgari, Cartier, Buccellati, Damiani, Van Cleef & Arpels, Tiffany & Co., Chaumet, Boucheron, Chopard, Pomellato, Graff e Harry Winston.'}, {'q': 'Quanto tempo occorre per la perizia?', 'a': "L'esame dell'autenticità e la formulazione dell'offerta richiedono circa 20-30 minuti in vostra presenza."}];
const related = [{'label': 'Diamanti Certificati', 'href': '/compro-diamanti-torino'}, {'label': 'Orologi di Lusso', 'href': '/compro-orologi-lusso-torino'}, {'label': "Oro & Gioielli d'Epoca", 'href': '/compro-oro-gioielli-torino'}, {'label': 'Collina & Crimea', 'href': '/vendere-gioielli-torino-collina-crimea'}];
const gallery = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
];

export default function Page() {
  return (
    <ServicePage
      slug="compro-gioielli-firmati-torino"
      hero={{
        eyebrow: "Alta Gioielleria di Maison · Torino",
        title: "Compro Gioielli Firmati a Torino: Bulgari, Cartier, Buccellati, Damiani",
        titleHighlight: "Valorizzazione Iconica & Collezionistica",
        intro: "Valorizzazione e acquisto immediato di gioielli iconici delle più celebri maison mondiali: Bulgari, Cartier, Buccellati, Damiani, Van Cleef & Arpels, Tiffany & Co., Chopard a Torino.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Stima e vendita di alta gioielleria firmata Bulgari, Cartier e Damiani a Torino",
      }}
      category="Gioielli Firmati"
      defaultItemType="Gioiello Firmato"
      defaultSubject="Valutazione Gioiello Firmato a Torino"
      introBlock={{
        eyebrow: "Alta Gioielleria di Maison · Torino",
        title: "La Massima Quotazione per i Gioielli di Grandi Firme a Torino",
        paragraphs: ["I gioielli siglati da atelier prestigiosi sono vere e proprie opere d'arte che sul mercato secondario mantengono o accrescono il loro valore nel tempo.", 'Nei nostri salotti di Via Roma ricerchiamo e acquistiamo parure, anelli, bracciali (Love o Juste un Clou di Cartier, Serpenti o B.zero1 di Bulgari, Hawaii o incisioni a pizzo di Buccellati, Alhambra di Van Cleef & Arpels, Belle Époque di Damiani).', "La nostra stima tiene conto dell'originalità dei punzoni, del numero di serie, del corredo (scatola e garanzia d'origine) e della richiesta attuale presso i collezionisti internazionali."],
      }}
      criteria={criteria}
      process={process}
      gallery={gallery}
      faqs={faqs}
      related={related}
    />
  );
}
