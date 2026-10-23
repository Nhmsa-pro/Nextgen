import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Locale not found | NHMSA',
};

export default function LocaleNotFoundPage({ params }: { params: { locale: string } }) {
  if (!['en', 'so'].includes(params.locale)) {
    notFound();
  }

  return null;
}
