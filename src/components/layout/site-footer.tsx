import Link from 'next/link';
import { getLocalizedNav, getLocaleCopy, type Locale } from '@/lib/site-content';

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale);
  const navigation = getLocalizedNav(locale);

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/brand/IMG-20261023-WA0006.jpg" alt="NHMSA logo" className="h-12 w-auto rounded-lg bg-white/60 p-1" />
            <h3 className="text-lg font-semibold text-white">NHMSA</h3>
          </div>
          <p className="mt-4 max-w-md text-sm text-slate-300">
            {copy.about.summary}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{copy.nav.home}</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{copy.contact.heading}</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <Link href={`/${locale}/contact`} className="transition hover:text-white">
                {copy.contact.formTitle}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/about`} className="transition hover:text-white">
                {copy.about.heading}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/careers`} className="transition hover:text-white">
                {copy.careers.heading}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
