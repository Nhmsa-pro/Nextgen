export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'so';
  const copy = locale === 'so'
    ? {
        heading: 'Xiriir',
        summary: 'Faahfaahinta xiriirka weli lama xaqiijin. Boggan waa tusmo ku meel gaar ah ilaa kanaalada rasmiga ah la ansixiyo.',
        name: 'Magaca',
        email: 'Email',
        subject: 'Mawduuca',
        message: 'Fariinta',
        submit: 'Dir',
      }
    : {
        heading: 'Contact',
        summary: 'Contact details remain pending verification. This page is intentionally placeholder-only until final academy channels are approved.',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send',
      };

  return (
    <main className="container-shell py-16">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">NHMSA</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">{copy.heading}</h1>
        <p className="mt-4 text-slate-600">{copy.summary}</p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">{copy.name}</label>
            <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" type="text" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">{copy.email}</label>
            <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" type="email" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">{copy.subject}</label>
            <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" type="text" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">{copy.message}</label>
            <textarea className="min-h-32 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-secondary" />
          </div>
          <button type="submit" className="rounded-lg bg-brand-secondary px-5 py-3 font-medium text-white hover:bg-blue-700">
            {copy.submit}
          </button>
        </form>
      </div>
    </main>
  );
}
