'use server';

import { Resend } from 'resend';

export type ContactState = {
  ok?: boolean;
  success?: boolean;
  error?: string;
  message?: string;
};

export async function submitContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const phone = formData.get('phone')?.toString().trim();
  const message = formData.get('message')?.toString().trim();
  const itemType = formData.get('itemType')?.toString().trim();
  const city = formData.get('city')?.toString().trim();
  const source = formData.get('source')?.toString().trim() || 'sito-web';
  const category = formData.get('category')?.toString().trim() || 'Richiesta Generale';

  if (!name || !email) {
    return { ok: false, error: 'Nome ed email sono campi obbligatori per ricevere la stima.', message: 'Nome ed email sono campi obbligatori per ricevere la stima.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY mancante. Simulazione invio riuscito per test.');
    return {
      ok: true,
      success: true,
      message: 'Grazie per la richiesta. Uno dei nostri gemmologi vi contatterà con la massima discrezione entro 24 ore.',
    };
  }

  const resend = new Resend(apiKey);
  const notifyEmails = (process.env.NOTIFY_EMAILS || 'og.diamantaires@gmail.com,contact@obagem.fr')
    .split(',')
    .map((e) => e.trim());
  const fromEmail = process.env.RESEND_FROM || 'Vendere Gioielli Torino <contact@obagem.fr>';

  const subject = `[Vendere Gioielli Torino] Nuova Richiesta di Valutazione — ${name} (${itemType || category})`;
  const html = `
    <h2>Nuova Richiesta di Valutazione via vendere-gioielli-torino.site</h2>
    <p><strong>Nome:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefono:</strong> ${phone || 'Non indicato'}</p>
    <p><strong>Tipologia Bene:</strong> ${itemType || category}</p>
    <p><strong>Zona / Quartiere (Torino & Piemonte):</strong> ${city || 'Non indicato'}</p>
    <p><strong>Origine Form:</strong> ${source}</p>
    <hr/>
    <p><strong>Descrizione / Messaggio:</strong></p>
    <p>${(message || 'Nessun messaggio aggiuntivo').replace(/\n/g, '<br/>')}</p>
    <hr/>
    <p><small>Inviato tramite il modulo protetto di Vendere Gioielli Torino (Via Roma 28, 10121 Torino).</small></p>
  `;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: notifyEmails,
      replyTo: email,
      subject,
      html,
    });
    return {
      ok: true,
      success: true,
      message: 'La vostra richiesta è stata inoltrata al nostro gabinetto gemmologico. Riceverete una risposta confidenziale entro 24 ore.',
    };
  } catch (err: any) {
    console.error('Errore invio Resend:', err);
    return {
      ok: false,
      error: 'Impossibile completare l\'invio in questo momento. Vi invitiamo a contattarci direttamente via telefono o WhatsApp.',
      message: 'Impossibile completare l\'invio in questo momento. Vi invitiamo a contattarci direttamente via telefono o WhatsApp.',
    };
  }
}
