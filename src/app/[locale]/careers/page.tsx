export default function CareersPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'so';
  const copy = locale === 'so'
    ? {
        heading: 'Mashaariicda shaqo',
        summary: 'Fursadaha shaqo iyo macluumaadka shaqaalaha ayaa lagu daabici doonaa kaliya ka dib markii ay akadeemiyada ansixiso.',
      }
    : {
        heading: 'Careers',
        summary: 'Career opportunities and staffing information will be published only after review and approval by the academy.',
      };

  return (
    <main className="container-shell py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">NHMSA</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">{copy.heading}</h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">{copy.summary}</p>
      </div>
    </main>
  );
}
