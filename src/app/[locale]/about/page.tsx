import Link from 'next/link';
import { getLocaleCopy, type Locale } from '@/lib/site-content';

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const copy = getLocaleCopy(locale);

  return (
    <main className="container-shell py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">NHMSA</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">{copy.about.heading}</h1>
        <p className="mt-5 text-lg text-slate-600">{copy.about.summary}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {copy.about.cards.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-base font-medium text-slate-900">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-slate-900">{copy.about.heading}</h2>
        <p className="mt-4 text-slate-600">{copy.about.intro}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href={`/${locale}/courses`} className="rounded-lg bg-brand-secondary px-5 py-3 font-medium text-white transition hover:bg-blue-700">
            {copy.cta.browseCourses}
          </Link>
          <Link href={`/${locale}/contact`} className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-800 transition hover:border-slate-400">
            {copy.nav.contact}
          </Link>
        </div>
      </div>
    </main>
  );
}
