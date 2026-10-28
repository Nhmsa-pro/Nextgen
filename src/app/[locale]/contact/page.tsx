import { getLocaleCopy, type Locale } from '@/lib/site-content';

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const copy = getLocaleCopy(locale);

  return (
    <main className="container-shell py-16">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">NHMSA</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">{copy.contact.heading}</h1>
        <p className="mt-4 text-slate-600">{copy.contact.summary}</p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">{copy.contact.name}</label>
            <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" type="text" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">{copy.contact.email}</label>
            <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" type="email" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">{copy.contact.subject}</label>
            <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" type="text" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">{copy.contact.message}</label>
            <textarea className="min-h-32 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" />
          </div>
          <button type="submit" className="rounded-lg bg-brand-secondary px-5 py-3 font-medium text-white hover:bg-blue-700">
            {copy.contact.submit}
          </button>
        </form>
      </div>
    </main>
  );
}
