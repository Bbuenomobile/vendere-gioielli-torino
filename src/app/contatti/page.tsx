import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/section';
import { ContactForm } from '@/components/contact-form';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Contatti & Salotti Riservati a Torino | Vendere Gioielli Torino",
  description: "Fissate un appuntamento confidenziale nei nostri salotti di Via Roma 28 a Torino o richiedete una visita VIP a domicilio a Crocetta, Collina o Moncalieri.",
  alternates: { canonical: `${site.url}/contatti` },
};

export default function ContattiPage() {
  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Ricevimento Riservato su Appuntamento</span>
          <h1 className="h1 text-white">Contatti & Salotti Gemmologici a Torino</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Accoglienza discreta in Via Roma 28 a Torino, oppure visite private concordate presso la vostra residenza o istituto bancario in Piemonte.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-x max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <SectionHeading
                  eyebrow="Sede di Rappresentanza"
                  title="Salotto di Via Roma"
                />
                <p className="text-ink-600 text-sm leading-relaxed">
                  I nostri salotti dispongono di standard di sicurezza elevati e laboratorio gemmologico interno per una stima rigorosa in vostra presenza.
                </p>
              </div>

              <div className="space-y-4 text-sm text-ink-700 bg-sand-50 p-6 rounded-2xl border border-ink-900/10">
                <div>
                  <strong className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-1">Indirizzo</strong>
                  <p>{site.address.street}</p>
                  <p>{site.address.postalCode} {site.address.city} ({site.regionContext})</p>
                </div>
                <div className="pt-2 border-t border-ink-200/60">
                  <strong className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-1">Telefono Diretto</strong>
                  <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="text-ink-900 font-semibold hover:text-[#d4af37]">{site.phoneDisplay}</a>
                </div>
                <div className="pt-2 border-t border-ink-200/60">
                  <strong className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-1">Email Ufficiale</strong>
                  <a href={`mailto:${site.email}`} className="text-ink-900 hover:text-[#d4af37]">{site.email}</a>
                </div>
                <div className="pt-2 border-t border-ink-200/60">
                  <strong className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-1">Orari di Apertura</strong>
                  <p>Lunedì - Venerdì: 09:30 - 18:30</p>
                  <p>Sabato: 10:00 - 17:30 (su appuntamento)</p>
                  <p>Domenica: Chiuso</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-[#d4af37]/30 bg-[#08162b] text-white space-y-3">
                <h3 className="font-display font-semibold text-lg text-[#d4af37]">Servizio VIP a Domicilio</h3>
                <p className="text-xs text-ink-200 leading-relaxed">
                  Per successioni familiari, collezioni private di rilievo o esigenze particolari di privacy, i nostri gemmologi si spostano con laboratorio mobile presso la vostra dimora in tutta Torino, nella Collina e nelle Langhe.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-ink-900/10 p-8 shadow-sm">
                <h2 className="font-display text-2xl font-semibold text-ink-900 mb-2">
                  Richiedete il Vostro Appuntamento
                </h2>
                <p className="text-sm text-ink-600 mb-6">
                  Compilate il modulo sottostante: un nostro responsabile vi ricontatterà entro 2 ore lavorative.
                </p>
                <ContactForm source="contatti-page" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
