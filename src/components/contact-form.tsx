'use client';

import { useActionState, useState } from 'react';
import { submitContact, type ContactState } from '@/lib/contact-action';
import { compresserImages, formaterMo } from '@/lib/compresser-images';

type Props = {
  variant?: 'compact' | 'full' | 'estimation' | 'contact';
  category?: string;
  defaultSubject?: string;
  defaultItemType?: string;
  source?: string;
  headline?: string;
  intro?: string;
};

const initial: ContactState = { ok: false, message: '' };

export function ContactForm({
  variant = 'full',
  category = 'Generale',
  defaultSubject = '',
  defaultItemType = '',
  source = 'website',
  headline,
  intro,
}: Props) {
  const [state, action, pending] = useActionState(submitContact, initial);

  const [fichiersInfo, setFichiersInfo] = useState('');
  const [fichiersErreur, setFichiersErreur] = useState(false);

  const MAX_FICHIERS = 6;
  const MAX_OCTETS = 8 * 1024 * 1024;
  const MAX_TOTAL = 22 * 1024 * 1024;

  async function onFichiers(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target;
    const liste = Array.from(input.files ?? []);
    if (liste.length === 0) {
      setFichiersInfo('');
      setFichiersErreur(false);
      return;
    }

    const retenus = liste.slice(0, MAX_FICHIERS);
    const ecartes = liste.length - retenus.length;

    setFichiersErreur(false);
    setFichiersInfo('Preparazione delle fotografie per il caricamento sicuro…');

    const { fichiers, octetsAvant, octetsApres, compresses } = await compresserImages(retenus);

    let total = 0;
    for (const f of fichiers) {
      total += f.size;
      if (f.size > MAX_OCTETS) {
        setFichiersErreur(true);
        setFichiersInfo(`Il file « ${f.name} » supera ${formaterMo(MAX_OCTETS)} dopo l'ottimizzazione.`);
        input.value = '';
        return;
      }
    }
    if (total > MAX_TOTAL) {
      setFichiersErreur(true);
      setFichiersInfo(`La dimensione totale (${formaterMo(total)}) supera il limite massimo consentito (${formaterMo(MAX_TOTAL)}).`);
      input.value = '';
      return;
    }

    try {
      const dt = new DataTransfer();
      fichiers.forEach((f) => dt.items.add(f));
      input.files = dt.files;
    } catch {
      // Browser legacy
    }

    const details: string[] = [
      `${fichiers.length} foto ${fichiers.length > 1 ? 'pronte' : 'pronta'} (${formaterMo(total)})`,
    ];
    if (compresses > 0 && octetsAvant > octetsApres) {
      details.push(`ottimizzate`);
    }
    if (ecartes > 0) {
      details.push(`limite di ${MAX_FICHIERS} immagini raggiunto`);
    }
    setFichiersInfo(details.join(' — '));
  }

  return (
    <form action={action} className="space-y-4">
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="category" value={category} />

      {headline && (
        <div>
          <h3 className="font-display text-xl md:text-2xl text-ink-900 font-semibold">{headline}</h3>
          {intro && <p className="mt-1 text-sm text-ink-600">{intro}</p>}
        </div>
      )}

      {state?.ok && (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 text-sm">
          {state.message || "La vostra richiesta di stima è stata inviata con successo. I nostri gemmologi vi risponderanno entro poche ore lavorative."}
        </div>
      )}

      {state && !state.ok && state.message && (
        <div className="rounded-xl bg-rose-50 border border-rose-200 p-4 text-rose-800 text-sm">
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
            Nome e Cognome *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Es.: Dott. Alessandro Rossi"
            className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-[#08162b] focus:outline-none focus:ring-1 focus:ring-[#08162b]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
            Telefono / WhatsApp *
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+39 333..."
            className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-[#08162b] focus:outline-none focus:ring-1 focus:ring-[#08162b]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
            Indirizzo Email *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="alessandro.rossi@email.it"
            className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-[#08162b] focus:outline-none focus:ring-1 focus:ring-[#08162b]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
            Zona o Quartiere (Torino & Piemonte)
          </label>
          <input
            type="text"
            name="city"
            placeholder="Es.: Centro Storico, Via Roma, Crocetta, Collina, Cit Turin, Moncalieri..."
            className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-[#08162b] focus:outline-none focus:ring-1 focus:ring-[#08162b]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
          Tipologia di Prezioso
        </label>
        <select
          name="itemType"
          defaultValue={defaultItemType || 'Diamante'}
          className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 focus:border-[#08162b] focus:outline-none focus:ring-1 focus:ring-[#08162b]"
        >
          <option value="Diamante">Diamante Certificato (GIA, HRD, IGI, Solitario)</option>
          <option value="Gioielli Firmati">Alta Gioielleria Firmata (Bulgari, Cartier, Buccellati, Van Cleef & Arpels)</option>
          <option value="Oro & Antichità">Oro 18 Carati (750), Gioielli d'Epoca, Eredità</option>
          <option value="Lingotti e Monete">Lingotti da Investimento & Monete d'Oro (LBMA, Sterline, Marenghi)</option>
          <option value="Orologio di Lusso">Orologio Svizzero di Prestigio (Rolex, Patek Philippe, AP)</option>
          <option value="Pietre Preziose">Pietre di Colore (Smeraldo, Zaffiro, Rubino) & Perle Naturali</option>
          <option value="Eredità / Lotto">Eredità completa o collezione di più beni</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
          Descrizione & Dettagli per la Valutazione
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Indicate dettagli: caratura, numero di certificato GIA/HRD, titolo oro, firma della maison, stato di conservazione, presenza di scatola e garanzia originale..."
          className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-[#08162b] focus:outline-none focus:ring-1 focus:ring-[#08162b]"
        ></textarea>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
          Fotografie & Certificati (fino a 6 immagini)
        </label>
        <input
          type="file"
          name="photos"
          accept="image/*"
          multiple
          onChange={onFichiers}
          className="w-full text-xs text-ink-600 file:mr-4 file:rounded-xl file:border-0 file:bg-[#08162b] file:px-4 file:py-2.5 file:text-xs file:font-semibold file:text-white hover:file:bg-[#0e274a] file:cursor-pointer"
        />
        {fichiersInfo && (
          <p className={`mt-1.5 text-xs ${fichiersErreur ? 'text-rose-600' : 'text-ink-500'}`}>
            {fichiersInfo}
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={pending}
          className="w-full btn-gold justify-center py-3 text-sm uppercase tracking-wider font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
        >
          {pending ? 'Invio protetto in corso…' : 'Richiedi Stima Gratuita'}
        </button>
      </div>

      <p className="text-[11px] text-ink-400 text-center">
        Riservatezza assoluta garantita. Trattamento dei dati conforme al GDPR. Per maggiori informazioni, consultate la nostra <a href="/privacy-policy" className="underline hover:text-ink-600">Privacy Policy</a>.
      </p>
    </form>
  );
}
