import Link from 'next/link';
import type { Locale } from '@/lib/site-content';

export function LocaleLink({
  locale,
  href,
  children,
  className = '',
}: {
  locale: Locale;
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const finalHref = `/${locale}${href.startsWith('/') ? href : `/${href}`}`;

  return (
    <Link href={finalHref} className={className}>
      {children}
    </Link>
  );
}
