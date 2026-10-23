import Link from 'next/link';
import type { Locale } from '@/lib/site-content';
import { getCourses, getLocaleCopy } from '@/lib/site-content';
import { CourseCard } from '@/components/public/course-card';

export function HomePage({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale);
  const featuredCourses = getCourses(locale).slice(0, 3);

  return (
    <>
      <section className="container-shell py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">{copy.home.eyebrow}</p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold text-slate-900 md:text-6xl">{copy.home.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">{copy.home.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`/${locale}/courses`} className="rounded-lg bg-brand-secondary px-5 py-3 font-medium text-white transition hover:bg-blue-700">
                {copy.cta.browseCourses}
              </Link>
              <Link href={`/${locale}/apply`} className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-800 transition hover:border-slate-400">
                {copy.cta.applyNow}
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="rounded-2xl bg-slate-100 p-6">
              <div className="rounded-xl bg-brand-primary p-6 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Placeholder</p>
                <h2 className="mt-3 text-2xl font-semibold">{copy.home.cardTitle}</h2>
                <p className="mt-3 text-slate-200">{copy.home.cardText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              'Approved public content structure',
              'Bilingual navigation and experience',
              'Operationally clear, responsive interface',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">Placeholder</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">NHMSA</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">{copy.about.heading}</h2>
            <p className="mt-4 max-w-xl text-slate-600">{copy.about.summary}</p>
            <Link href={`/${locale}/about`} className="mt-6 inline-flex rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-800 hover:border-slate-400">
              {copy.cta.learnMore}
            </Link>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {['Verified facts only', 'Responsive bilingual UI', 'Staff-reviewed workflows', 'Placeholder-safe content'].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="container-shell">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">Featured</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">Training pathways</h2>
            </div>
            <Link href={`/${locale}/courses`} className="hidden text-sm font-medium text-brand-secondary hover:underline md:inline-flex">
              {copy.cta.browseCourses}
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.slug} course={course} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">Placeholder</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">Training approach</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              'Hands-on technical instruction',
              'Strong safety and operational standards',
              'Career-focused skill development',
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-5">
                <p className="text-base font-medium text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary py-16 text-white">
        <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Next step</p>
            <h2 className="mt-2 text-3xl font-semibold">Ready to begin your training journey?</h2>
          </div>
          <Link href={`/${locale}/courses`} className="inline-flex rounded-lg bg-white px-5 py-3 font-medium text-brand-primary transition hover:bg-slate-100">
            {copy.cta.browseCourses}
          </Link>
        </div>
      </section>
    </>
  );
}
