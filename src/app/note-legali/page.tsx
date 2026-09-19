import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Note Legali & Informazioni Societarie | " + site.name,
  description: "Informazioni legali, termini di utilizzo e riferimenti di conformità per il portale Vendere Gioielli Torino.",
  alternates: { canonical: `${site.url}/note-legali` },
};

export default function NoteLegaliPage() {
  return (
    <Section className="py-16 md:py-24">
      <div className="container-x max-w-4xl space-y-8 text-ink-700 leading-relaxed text-sm md:text-base">
        <h1 className="h1 text-ink-900">Note Legali</h1>
        
        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold text-ink-900">1. Informazioni Generali</h2>
          <p>
            Il presente sito web (<strong>{site.domain}</strong>) è gestito da <strong>{site.legalName}</strong>.
          </p>
          <p>
            <strong>Sede di Rappresentanza:</strong> {site.address.street}, {site.address.postalCode} {site.address.city} ({site.region}), Italia.<br/>
            <strong>Recapito Telefonico:</strong> {site.phoneDisplay}<br/>
            <strong>Contatto Email:</strong> {site.email}
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold text-ink-900">2. Attività Professionale e Conformità di Legge</h2>
          <p>
            L'attività di compravendita di preziosi, oro usato, gioielli d'epoca, diamanti e orologi di prestigio viene svolta nel pieno rispetto delle norme del Testo Unico delle Leggi di Pubblica Sicurezza (T.U.L.P.S. - R.D. 773/1931) e del D.Lgs. 92/2017 in materia di tracciabilità e contrasto al riciclaggio.
          </p>
          <p>
            Tutte le operazioni sono subordinate all'identificazione certa del cliente mediante documento d'identità in corso di validità e codice fiscale, con trascrizione nei registri di carico e scarico a disposizione delle competenti autorità di Polizia.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold text-ink-900">3. Proprietà Intellettuale</h2>
          <p>
            Tutti i contenuti presenti sul sito (testi, marchi, loghi, fotografie, elementi grafici) sono di proprietà esclusiva di {site.legalName} o concessi in licenza d'uso. Ne è vietata la riproduzione, anche parziale, senza previa autorizzazione scritta.
          </p>
        </div>
      </div>
    </Section>
  );
}
