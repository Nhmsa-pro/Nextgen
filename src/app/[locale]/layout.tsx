import type { Metadata } from 'next';
import { locales, type Locale } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'NHMSA | Localized Layout',
};

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const locale = params.locale as Locale;

  if (!locales.includes(locale)) {
    return null;
  }

  return (
    <div lang={locale} className="min-h-screen">
      {children}
    </div>
  );
}
