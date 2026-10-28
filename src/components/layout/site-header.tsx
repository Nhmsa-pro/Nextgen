'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { getLocalizedNav, getLocaleCopy, getLocaleLabel, type Locale } from '@/lib/site-content';

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const navigation = getLocalizedNav(locale);
  const copy = getLocaleCopy(locale);
  const [menuOpen, setMenuOpen] = useState(false);

  const oppositeLocale = locale === 'en' ? 'so' : 'en';
  const localeHref = pathname?.startsWith(`/${locale}`)
    ? pathname.replace(new RegExp(`^/${locale}`), `/${oppositeLocale}`) || `/${oppositeLocale}`
    : `/${oppositeLocale}`;

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href={`/${locale}`} className="flex items-center gap-3 text-lg font-semibold text-slate-900" aria-label="NHMSA home">
          <img src="/images/brand/IMG-20261023-WA0005.jpg" alt="NHMSA logo" className="h-12 w-auto rounded-lg" />
          <span className="hidden sm:inline">NHMSA</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-secondary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={localeHref}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-300 hover:text-brand-secondary"
            aria-label={`Switch language to ${oppositeLocale === 'en' ? 'English' : 'Somali'}`}
          >
            {oppositeLocale === 'en' ? 'EN' : 'SO'}
          </Link>

          <div className="hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 md:flex">
            {getLocaleLabel(locale)}
          </div>

          <Link
            href={`/${locale}/apply`}
            className="rounded-lg bg-brand-secondary px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            {copy.nav.apply}
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white md:hidden">
          <nav aria-label="Mobile navigation" className="container-shell flex flex-col gap-3 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={localeHref}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              {oppositeLocale === 'en' ? 'Switch to English' : 'Bedel afka Soomaaliga'}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
