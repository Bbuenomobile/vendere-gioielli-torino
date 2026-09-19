import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Vendere Gioielli a Torino Crocetta | Stima Oro, Diamanti & Orologi | " + site.name,
  description: "Servizio di stima riservata di gioielli d'epoca, diamanti GIA e orologi Rolex a Torino Crocetta (Corso Galileo Ferraris, Corso Duca degli Abruzzi, Stati Uniti).",
  alternates: {
    canonical: `${site.url}/vendere-gioielli-torino-crocetta`,
  },
};

const highlights = [{'title': 'Visite a Domicilio alla Crocetta', 'desc': 'I nostri periti si spostano con laboratorio portatile per perizie riservate a domicilio.'}, {'title': 'Quotazioni Ufficiali Rapaport', 'desc': 'Nessuna approssimazione: diamanti quotati sul listino ufficiale internazionale.'}, {'title': 'Bonifico Diretto in EUR', 'desc': 'Transazione regolata istantaneamente con massima tracciabilità bancaria.'}];
const faqs = [{'q': 'Come funziona la stima a domicilio alla Crocetta?', 'a': 'Un perito gemmologo concorda giorno e ora, recandosi presso la vostra dimora con strumentazione ottica di precisione per la stima in totale sicurezza.'}, {'q': "Valutate anche gioielli d'epoca Art Déco o del periodo sabaudo?", 'a': "Sì, attribuiamo un valore premium alle manifatture storiche, punzoni d'epoca e finiture orafe antiche."}, {'q': 'I vostri preventivi sono vincolanti?', 'a': 'Forniamo stime gratuite e offerte chiare, lasciandovi totale libertà decisionale senza alcun obbligo di vendita.'}];
const relatedAreas = [{'label': 'Centro Storico', 'href': '/vendere-gioielli-torino-centro-storico-via-roma'}, {'label': 'Cit Turin', 'href': '/vendere-gioielli-torino-cit-turin'}, {'label': 'Compro Oro 18K', 'href': '/compro-oro-gioielli-torino'}, {'label': 'Orologi di Lusso', 'href': '/compro-orologi-lusso-torino'}];

export default function Page() {
  return (
    <LocalPage
      slug="vendere-gioielli-torino-crocetta"
      district="Crocetta & Corso Galileo Ferraris"
      postalCode="10128"
      hero={{
        eyebrow: "Crocetta · Corso Galileo Ferraris & Duca degli Abruzzi",
        title: "Vendere Gioielli a Torino Crocetta: Perizia Confidenziale",
        titleHighlight: "Corso Galileo Ferraris, Corso Re Umberto & Isola Pedonale",
        intro: "Nel quartiere residenziale più elegante e aristocratico di Torino, offriamo a collezionisti e famiglie della Crocetta valutazioni professionali e visite VIP a domicilio.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Valutazione gioielli e diamanti a Torino Crocetta",
      }}
      introBlock={{
        eyebrow: "Aristocrazia Residenziale Torinese",
        title: "Consulenza Gemmologica per le Residenze della Crocetta",
        paragraphs: ["La Crocetta, con i suoi palazzi d'epoca, l'isola pedonale alberata e i viali di Corso Galileo Ferraris e Corso Duca degli Abruzzi, è sinonimo di riservatezza e prestigio borghese.", 'I residenti della Crocetta trovano nel nostro servizio una risposta su misura per la cessione di parure firmate (Cartier, Buccellati, Bulgari, Damiani), solitari con certificato GIA e orologi da collezione (Rolex, Patek Philippe).', 'Mettiamo a disposizione visite private a domicilio o presso la cassetta di sicurezza del vostro istituto di credito.'],
      }}
      highlights={highlights}
      faqs={faqs}
      relatedAreas={relatedAreas}
    />
  );
}
