import { getLocaleCopy, type Locale } from '@/lib/site-content';

export default function CareersPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const copy = getLocaleCopy(locale);

  return (
    <main className="container-shell py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">NHMSA</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">{copy.careers.heading}</h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">{copy.careers.summary}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {copy.careers.cards.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">{item}</h2>
            <p className="mt-3 text-sm text-slate-600">
              {locale === 'en' ? 'Role information will be published when formally approved by the academy.' : 'Macluumaadka doorka waxaa la daabici doonaa markay akadeemiyada si rasmi ah u ansixiso.'}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
