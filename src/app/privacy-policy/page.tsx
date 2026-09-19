import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Informativa sulla Privacy (GDPR) | " + site.name,
  description: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per gli utenti di Vendere Gioielli Torino.",
  alternates: { canonical: `${site.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <Section className="py-16 md:py-24">
      <div className="container-x max-w-4xl space-y-8 text-ink-700 leading-relaxed text-sm md:text-base">
        <h1 className="h1 text-ink-900">Informativa sulla Privacy (GDPR)</h1>
        
        <p className="text-ink-500 text-xs">Ultimo aggiornamento: Settembre 2026</p>

        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold text-ink-900">1. Titolare del Trattamento</h2>
          <p>
            Il Titolare del trattamento dei dati personali raccolti tramite questo sito è <strong>{site.legalName}</strong>, con sede in {site.address.street}, {site.address.postalCode} {site.address.city}, Italia. Email: {site.email}.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold text-ink-900">2. Tipologia di Dati Trattati e Finalità</h2>
          <p>
            Trattiamo i dati forniti volontariamente dall'utente (nome, cognome, recapito telefonico, indirizzo email, descrizione dei beni e fotografie inviate) al solo scopo di:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Rispondere alle richieste di valutazione o preventivo inviate tramite modulo o contatto diretto;</li>
            <li>Organizzare e confermare appuntamenti presso i nostri salotti di Via Roma o visite a domicilio;</li>
            <li>Adempiere agli obblighi di legge previsti in materia di pubblica sicurezza e antiriciclaggio qualora si formalizzi una compravendita.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold text-ink-900">3. Base Giuridica</h2>
          <p>
            Il trattamento si fonda sul consenso espresso dell'interessato all'atto dell'invio del modulo di contatto o sull'esecuzione di misure precontrattuali/contrattuali richieste dall'interessato stesso.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold text-ink-900">4. Diritti dell'Interessato</h2>
          <p>
            Ai sensi degli articoli 15-22 del Regolamento UE 2016/679, l'interessato ha diritto di accedere ai propri dati, richiederne la rettifica, la cancellazione o la limitazione del trattamento inviando un'email a: <strong>{site.email}</strong>.
          </p>
        </div>
      </div>
    </Section>
  );
}
