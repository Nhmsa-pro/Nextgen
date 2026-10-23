import { type Locale } from '@/lib/i18n';

const content = {
  en: {
    eyebrow: 'Professional skills training',
    title: 'Training for the next generation of heavy equipment professionals.',
    description:
      'This placeholder homepage reflects the approved UX direction for NHMSA and will be replaced by verified academy content after owner review.',
    primary: 'Browse courses',
    secondary: 'Apply now',
  },
  so: {
    eyebrow: 'Tababada xirfadaha professionalka',
    title: 'Tababar loogu talagalay jiilka xiga ee xirfadlayaasha qalabka culus.',
    description:
      'Boggan degdegga ah wuxuu ka tarjumayaa jihada UX ee la ansixiyay waxaana beddelaya macluumaad la xaqiijiyay kadib dib-u-eegis hayaha.',
    primary: 'Baadh koorsooyinka',
    secondary: 'Codso hada',
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const copy = content[locale] ?? content.en;

  return (
    <section className="container-shell py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">{copy.eyebrow}</p>
          <h1 className="mt-5 max-w-xl text-4xl font-semibold text-slate-900 md:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">{copy.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/en/courses" className="rounded-lg bg-brand-secondary px-5 py-3 font-medium text-white transition hover:bg-blue-700">
              {copy.primary}
            </a>
            <a href="/en/apply" className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-800 transition hover:border-slate-400">
              {copy.secondary}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="rounded-2xl bg-slate-100 p-6">
            <div className="rounded-xl bg-brand-primary p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Placeholder</p>
              <h2 className="mt-3 text-2xl font-semibold">Program overview</h2>
              <p className="mt-3 text-slate-200">
                This panel indicates the approved public structure while verified academy content is still pending.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
