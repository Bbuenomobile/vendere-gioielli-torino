import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '@/components/section';
import { ContactForm } from '@/components/contact-form';
import { blogPosts } from '@/lib/blog';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Guida Gemmologica Torino | " + site.name,
  description: "Articolo informativo e tecnico redatto dai periti gemmologi diplomati di Vendere Gioielli Torino.",
  alternates: { canonical: `${site.url}/blog/certificati-gia-vs-hrd-torino` },
};

export default function BlogPostPage() {
  const post = blogPosts.find((p) => p.slug === 'certificati-gia-vs-hrd-torino');
  if (!post) return notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: site.legalName, url: site.url },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: { '@type': 'ImageObject', url: `${site.url}/icon.png` },
    },
    mainEntityOfPage: `${site.url}/blog/certificati-gia-vs-hrd-torino`,
  };

  return (
    <>
      <Section className="py-12 md:py-20">
        <div className="container-x max-w-4xl">
          <nav aria-label="Navigazione strutturale" className="text-sm text-ink-500 mb-8">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-ink-900">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-ink-900">Blog</Link></li>
              <li>/</li>
              <li className="text-ink-900 line-clamp-1">{post.title}</li>
            </ol>
          </nav>

          <header className="space-y-4 text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              {post.category}
            </div>
            <h1 className="h1 text-ink-900">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-xs text-ink-500 pt-2">
              <span>Maison Obagem Torino</span>
              <span>•</span>
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-ink-700 space-y-6 leading-relaxed">
            {post.content.map((p, idx) => (
              <p key={idx} className="text-base md:text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-ink-900/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/blog" className="text-sm font-semibold text-ink-900 hover:text-[#d4af37] flex items-center gap-2">
              <span>←</span> Torna a tutte le guide
            </Link>
            <Link href="/valutazione-gratuita" className="btn-gold text-xs uppercase tracking-wider font-semibold py-2.5 px-6">
              Richiedi Stima del Tuo Bene
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="container-x max-w-4xl">
          <div className="bg-white rounded-2xl border border-ink-900/10 p-8 md:p-12 shadow-sm">
            <ContactForm
              headline="Consulenza Gemmologica Personalizzata a Torino"
              intro="Desiderate approfondire il valore di una gemma o di un gioiello in vostro possesso? Contattate i nostri periti in Via Roma."
              source="blog:certificati-gia-vs-hrd-torino"
            />
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
