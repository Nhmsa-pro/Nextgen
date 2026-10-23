import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import { HomePage } from '@/components/public/homepage';

export const metadata: Metadata = {
  title: 'Home | NHMSA',
};

export default function LocaleHomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  return <HomePage locale={locale} />;
}
