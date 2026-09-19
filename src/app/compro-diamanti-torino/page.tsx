import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Compro Diamanti a Torino: Rapaport & GIA | Stima & Acquisto Immediato | " + site.name,
  description: "Gabinetto gemmologico specializzato nella stima e acquisto diretto di diamanti certificati (GIA, HRD, IGI), solitari e brillanti sfusi a Torino. Bonifico istantaneo.",
  alternates: {
    canonical: `${site.url}/compro-diamanti-torino`,
  },
};

const criteria = {'title': 'Criteri di Valutazione del Diamante', 'items': [{'label': 'Caratura (Carat)', 'text': 'Pesatura precisa al centesimo di carato su bilance omologate.'}, {'label': 'Colore (Color)', 'text': 'Gradazione cromatica comparativa con pietre master da D a Z.'}, {'label': 'Purezza (Clarity)', 'text': 'Ispezione microscopica a 10x da FL/IF fino a inclusioni visibili.'}, {'label': 'Qualità del Taglio (Cut)', 'text': 'Verifica di proporzioni, simmetria e lucidatura eccellente.'}, {'label': 'Certificazione Internazionale', 'text': 'Riconoscimento di un valore premium per diamanti GIA, HRD o IGI.'}]};
const process = {'title': 'Procedura di Vendita in 4 Fasi', 'steps': [{'title': '1. Primo Contatto', 'body': 'Inviate dettagli o certificati e concordate un appuntamento in salotto riservato a Torino.'}, {'title': '2. Perizia Gemmologica', 'body': 'Esame visivo e strumentale dettagliato in vostra presenza in Via Roma.'}, {'title': '3. Proposta Ferma', 'body': 'Offerta di acquisto immediato basata sul listino Rapaport del giorno.'}, {'title': '4. Bonifico Immediato', 'body': "Firma dell'atto di vendita e accredito istantaneo in Euro sul vostro conto."}]};
const faqs = [{'q': 'Acquistate diamanti senza certificato a Torino?', 'a': 'Certamente. I nostri gemmologi diplomati eseguono la gradazione scientifica completa delle 4C direttamente nel nostro laboratorio di Via Roma.'}, {'q': "Come viene calcolata l'offerta di acquisto?", 'a': "L'offerta si basa sul listino ufficiale Rapaport Diamond Report aggiornato in tempo reale e sul tasso di cambio euro/dollaro."}, {'q': 'Come avviene il pagamento?', 'a': 'Il saldo viene accreditato contestualmente alla vendita tramite bonifico bancario istantaneo con rilascio di ricevuta bancaria ufficiale.'}];
const related = [{'label': "Oro & Gioielli d'Epoca", 'href': '/compro-oro-gioielli-torino'}, {'label': 'Gioielli Firmati', 'href': '/compro-gioielli-firmati-torino'}, {'label': 'Orologi di Lusso', 'href': '/compro-orologi-lusso-torino'}, {'label': 'Centro Storico & Via Roma', 'href': '/vendere-gioielli-torino-centro-storico-via-roma'}];
const gallery = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
];

export default function Page() {
  return (
    <ServicePage
      slug="compro-diamanti-torino"
      hero={{
        eyebrow: "Gemmologia Ufficiale · Torino Centro & Via Roma",
        title: "Compro Diamanti a Torino: Rapaport & Certificati GIA",
        titleHighlight: "Quotazione Ufficiale Rapaport",
        intro: "Gabinetto gemmologico specializzato nella stima e acquisto diretto di diamanti certificati (GIA, HRD, IGI), solitari e brillanti sfusi di grande caratura a Torino. Pagamento immediato con bonifico bancario.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Acquisto e valutazione diamanti certificati a Torino Via Roma",
      }}
      category="Diamanti Certificati"
      defaultItemType="Diamante"
      defaultSubject="Valutazione Diamante Certificato a Torino"
      introBlock={{
        eyebrow: "Gemmologia Ufficiale · Torino Centro & Via Roma",
        title: "Perizia Scientifica e Acquisto Diretto di Diamanti a Torino",
        paragraphs: ['Nei nostri salotti riservati di Via Roma, la stima del vostro diamante è eseguita da gemmologi diplomati provvisti di strumentazione scientifica: microscopia stereoscopica, rifrattometria ottica e spettroscopia UV.', "Sia che si tratti di un brillante rotondo tradizionale o di tagli fantasia (smeraldo, goccia, cuscino, cuore, princess od ovale) o tagli antichi d'epoca sabauda, determiniamo il reale valore di mercato incrociando le 4C con il listino ufficiale Rapaport Diamond Report.", "Offriamo acquisto diretto senza commissioni d'asta né intermediari, con liquidazione immediata tramite bonifico bancario istantaneo in Euro."],
      }}
      criteria={criteria}
      process={process}
      gallery={gallery}
      faqs={faqs}
      related={related}
    />
  );
}
