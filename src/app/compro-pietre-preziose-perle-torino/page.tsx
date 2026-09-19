import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Compro Pietre Preziose e Perle a Torino: Smeraldi, Rubini, Zaffiri | " + site.name,
  description: "Esame gemmologico scientifico e acquisto diretto di smeraldi colombiani, rubini birmani, zaffiri naturali di Ceylon e perle coltivate a Torino. Bonifico istantaneo.",
  alternates: {
    canonical: `${site.url}/compro-pietre-preziose-perle-torino`,
  },
};

const criteria = {'title': 'Criteri di Valutazione delle Pietre di Colore e Perle', 'items': [{'label': 'Origine Geografica', 'text': 'Certificazione dei giacimenti storici più rinomati (Muzo, Mogok, Ceylon, Kashmir).'}, {'label': 'Assenza di Trattamenti', 'text': "Valore fortemente superiore per rubini 'unheated' e smeraldi 'no oil'."}, {'label': 'Tonalità & Saturazione', 'text': 'Purezza del colore primario senza sfumature secondarie scure o grigiastre.'}, {'label': 'Trasparenza & Cristallinità', 'text': 'Assenza di inclusioni che compromettano la brillantezza e la trasmissione luminosa.'}, {'label': 'Qualità delle Perle', 'text': "Oriente, lucentezza, sfericità, spessore del perlagio e omogeneità dell'infilatura."}]};
const process = {'title': 'Procedura di Vendita delle Vostre Gemme', 'steps': [{'title': '1. Primo Contatto', 'body': 'Inviate fotografie e qualsiasi certificato gemmologico pregresso (SSEF, Gübelin, GIA).'}, {'title': '2. Analisi Strumentale', 'body': "Verifica ottica dell'indice di rifrazione e delle inclusioni diagnostiche in Via Roma."}, {'title': '3. Stima e Proposta', 'body': "Valutazione comparata con le quotazioni d'asta internazionali per gemme analoghe."}, {'title': '4. Conclusione Immediata', 'body': 'Liquidazione contestuale tramite bonifico bancario istantaneo con regolare contratto.'}]};
const faqs = [{'q': 'Come riconoscete uno smeraldo sintetico o trattato a Torino?', 'a': 'Attraverso il microscopio a campo oscuro esaminiamo la natura delle inclusioni trifasi tipiche degli smeraldi colombiani naturali ed eseguiamo test UV per individuare resine polimeriche.'}, {'q': 'Acquistate fili di perle coltivate Akoya o dei Mari del Sud?', 'a': "Sì, acquistiamo sia perle naturali d'epoca sia fili di perle coltivate di grande diametro (Akoya, Tahiti, South Sea) con fermature in oro o platino."}, {'q': 'È possibile far valutare gemme ancora montate su castoni chiusi?', 'a': "I nostri gemmologi riescono ad analizzare gran parte delle caratteristiche ottiche senza smontare la pietra, tutelando l'integrità del gioiello antico."}];
const related = [{'label': 'Diamanti Certificati', 'href': '/compro-diamanti-torino'}, {'label': 'Gioielli Firmati', 'href': '/compro-gioielli-firmati-torino'}, {'label': "Oro & Gioielli d'Epoca", 'href': '/compro-oro-gioielli-torino'}, {'label': 'Langhe & Alba', 'href': '/vendere-gioielli-torino-langhe-roero-alba'}];
const gallery = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
];

export default function Page() {
  return (
    <ServicePage
      slug="compro-pietre-preziose-perle-torino"
      hero={{
        eyebrow: "Gemmologia Scientifica di Colore · Torino",
        title: "Compro Pietre Preziose e Perle a Torino: Smeraldi, Rubini, Zaffiri",
        titleHighlight: "Analisi Scientifica & Origine Naturale",
        intro: "Valutazione e acquisto di pietre preziose di colore di alta caratura: smeraldi naturali, rubini non riscaldati, zaffiri nobili e perle naturali o coltivate d'epoca a Torino.",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Perizia e acquisto di smeraldi, rubini, zaffiri e perle a Torino",
      }}
      category="Pietre Preziose & Perle"
      defaultItemType="Pietre Preziose o Perle"
      defaultSubject="Valutazione Pietre Preziose e Perle a Torino"
      introBlock={{
        eyebrow: "Gemmologia Scientifica di Colore · Torino",
        title: "Identificazione Scientifica e Stima di Gemme di Colore a Torino",
        paragraphs: ['A differenza dei diamanti, le pietre preziose di colore presentano complessità uniche legate alla provenienza geografica (Colombia per gli smeraldi, Birmania per i rubini, Kashmir o Ceylon per gli zaffiri) e alla presenza di eventuali trattamenti termici o impregnazioni con oli e resine.', 'Nel nostro laboratorio di Torino disponiamo di rifrattometri, polariscopi e microscopi a immersione per distinguere con certezza le gemme naturali non trattate da quelle sintetiche o migliorate artificialmente.', "Acquistiamo sia pietre sfuse che gemme montate su gioielli d'epoca, anelli solitari o collane di perle naturali, formulando offerte dirette e pagamenti immediati."],
      }}
      criteria={criteria}
      process={process}
      gallery={gallery}
      faqs={faqs}
      related={related}
    />
  );
}
