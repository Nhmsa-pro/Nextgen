import Link from 'next/link';
import { getLocaleCopy, type Locale } from '@/lib/site-content';

export default function ApplyPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const copy = getLocaleCopy(locale);

  return (
    <main className="container-shell py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">NHMSA</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">{copy.apply.heading}</h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">{copy.apply.summary}</p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">{locale === 'en' ? 'Before you apply' : 'Ka hor intaadan codsan'}</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• {locale === 'en' ? 'Choose an approved intake and course.' : 'Dooro koorso iyo intake la ansixiyay.'}</li>
            <li>• {locale === 'en' ? 'Provide a valid phone number and email address.' : 'Sii nambar taleefan iyo email sax ah.'}</li>
            <li>• {locale === 'en' ? 'The academy will confirm any next steps after review.' : 'Akadeemiyada waxay xaqiijin doontaa tillaabooyinka xiga ka dib dib-u-eegis.'}</li>
          </ul>
          <Link href={`/${locale}/courses`} className="mt-6 inline-flex rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-800 transition hover:border-slate-400">
            {copy.cta.browseCourses}
          </Link>
        </aside>

        <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-slate-900">{copy.apply.formTitle}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium text-slate-700">{copy.apply.fields.fullName}</label>
              <input type="text" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">{copy.apply.fields.phone}</label>
              <input type="tel" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" />
            </div>
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium text-slate-700">{copy.apply.fields.email}</label>
              <input type="email" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">{copy.apply.fields.course}</label>
              <select className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary">
                <option>{locale === 'en' ? 'Excavator Operator' : 'Shaqaale Qalab Riixaya'}</option>
                <option>{locale === 'en' ? 'Bulldozer & Grader Operator' : 'Shaqaaleynta Bulldozer iyo Grader'}</option>
                <option>{locale === 'en' ? 'Wheel Loader & Forklift Operator' : 'Shaqaaleynta Wheel Loader iyo Forklift'}</option>
                <option>{locale === 'en' ? 'Heavy Truck & Trailer Driving' : 'Darawalnimada Trakada Culus iyo Trailer'}</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">{copy.apply.fields.location}</label>
              <input type="text" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">{copy.apply.fields.education}</label>
              <input type="text" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">{copy.apply.fields.experience}</label>
              <textarea className="min-h-24 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">{copy.apply.fields.notes}</label>
              <textarea className="min-h-28 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" />
            </div>
            <div className="md:col-span-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-brand-secondary" />
              <span>{copy.apply.fields.age}</span>
            </div>
          </div>

          <button type="submit" className="mt-8 inline-flex rounded-lg bg-brand-secondary px-5 py-3 font-medium text-white transition hover:bg-blue-700">
            {copy.apply.submit}
          </button>
        </form>
      </div>
    </main>
  );
}
