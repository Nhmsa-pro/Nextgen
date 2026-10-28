import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import type { Locale } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'NHMSA',
  description: 'Bilingual public website for NHMSA, including course information, academy details, and admission guidance.',
};

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const locale = params.locale as Locale;

  if (!['en', 'so'].includes(locale)) {
    notFound();
  }

  return (
    <div lang={locale} className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader locale={locale} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
