import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Vendere Gioielli a Rivoli e Cintura Ovest | Stima Oro & Orologi Torino | " + site.name,
  description: "Stima professionale e acquisto di gioielli, diamanti, oro 18 carati e orologi a Rivoli, Collegno, Grugliasco e inizio Val di Susa.",
  alternates: {
    canonical: `${site.url}/vendere-gioielli-torino-rivoli-val-di-susa`,
  },
};

const highlights = [{'title': 'Trasparenza Assoluta', 'desc': "Pesatura e test dell'oro eseguiti direttamente davanti al cliente."}, {'title': 'Prezzi di Mercato Reali', 'desc': 'Valorizzazione secondo il fixing ufficiale LBMA e Rapaport Report.'}, {'title': 'Liquidazione Immediata', 'desc': 'Bonifico bancario istantaneo confermato in tempo reale sul vostro conto.'}];
const faqs = [{'q': 'Come raggiungere i salotti da Rivoli o Collegno?', 'a': 'I nostri uffici di Via Roma sono facilmente raggiungibili in auto tramite Corso Francia o tramite la linea 1 della Metropolitana da Collegno.'}, {'q': "Acquistate anche lingotti d'oro da investimento?", 'a': 'Sì, ritiriamo lingotti certificati LBMA e monete da investimento (Sterline, Marenghi, Krugerrand) al fixing spot ufficiale.'}, {'q': 'È possibile ricevere una valutazione orientativa a distanza?', 'a': 'Certamente: inviando foto e dettagli tramite il nostro modulo o WhatsApp riceverete una prima stima indicativa entro poche ore.'}];
const relatedAreas = [{'label': 'Cit Turin', 'href': '/vendere-gioielli-torino-cit-turin'}, {'label': 'Centro Storico', 'href': '/vendere-gioielli-torino-centro-storico-via-roma'}, {'label': 'Compro Oro 18K', 'href': '/compro-oro-gioielli-torino'}, {'label': 'Lingotti & Marenghi', 'href': '/compro-lingotti-monete-oro-torino'}];

export default function Page() {
  return (
    <LocalPage
      slug="vendere-gioielli-torino-rivoli-val-di-susa"
      district="Rivoli & Cintura Ovest"
      postalCode="10098"
      hero={{
        eyebrow: "Cintura Ovest · Rivoli, Collegno, Grugliasco & Bassa Val di Susa",
        title: "Vendere Gioielli a Rivoli e Cintura Ovest di Torino",
        titleHighlight: "Rivoli Castello, Collegno, Grugliasco & Bassa Val di Susa",
        intro: "Stima professionale e acquisto di oro 18k, parure ereditate e orologi di lusso per residenti di Rivoli, Collegno, Grugliasco e cintura ovest di Torino.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Vendere gioielli a Rivoli e cintura ovest Torino",
      }}
      introBlock={{
        eyebrow: "Polo Residenziale e Storico della Cintura Ovest",
        title: "Perizia e Acquisto Immediato di Gioielli a Rivoli",
        paragraphs: ['Dominata dalla mole storica del Castello di Rivoli, la cintura ovest di Torino (Rivoli, Collegno, Grugliasco) costituisce un importante polo residenziale dove molte famiglie custodiscono gioielli e ori di famiglia.', 'Offriamo un servizio serio e trasparente a chi desidera monetizzare gioielli inutilizzati, successioni ereditarie o orologi di valore, senza le penalizzazioni dei compro oro improvvisati.', 'Pesatura a vista su bilance bollate, spiegazione tecnica delle caratteristiche delle pietre e pagamento immediato con bonifico.'],
      }}
      highlights={highlights}
      faqs={faqs}
      relatedAreas={relatedAreas}
    />
  );
}
