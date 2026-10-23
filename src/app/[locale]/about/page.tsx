export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'so';
  const copy = locale === 'so'
    ? {
        heading: 'Ku saabsan akadeemiyada',
        summary: 'Akadeemiyada waxay daabici doontaa ujeedada, qiyamka, tababarka iyo faahfaahinta la xaqiijiyay marka macluumaadka ugu dambeeya la ansixiyo.',
        items: ['Macaamiisha rasmiga ah', 'Habka tababarka', 'Xiriirka bulshada'],
      }
    : {
        heading: 'About the academy',
        summary: 'The academy will publish its mission, values, teaching approach and verified operational details once the final launch facts are confirmed.',
        items: ['Verified mission', 'Training approach', 'Community impact'],
      };

  return (
    <main className="container-shell py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">NHMSA</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">{copy.heading}</h1>
        <p className="mt-5 text-lg text-slate-600">{copy.summary}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {copy.items.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-base font-medium text-slate-900">{item}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
