export default function ApplyPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'so';
  const copy = locale === 'so'
    ? {
        heading: 'Dhismaha codsiga',
        summary: 'Nidaamka rasmiga ah ee codsiga ma aha qayb ka mid ah heerarkan aasaasiga ah. Jidkaani wuxuu ilaalinayaa qaabdhismeedka UX wuxuuna lagu beddeli doonaa socodka codsiga dhabta ah xiga.',
      }
    : {
        heading: 'Application pipeline',
        summary: 'The formal application experience is not part of this foundation milestone. This placeholder route preserves the UX structure and will be replaced by the real admissions flow next.',
      };

  return (
    <main className="container-shell py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">Placeholder</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">{copy.heading}</h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">{copy.summary}</p>
      </div>
    </main>
  );
}
