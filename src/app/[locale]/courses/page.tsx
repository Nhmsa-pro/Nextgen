import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCourseBySlug, getCourses, getLocaleCopy, type Locale } from '@/lib/site-content';

export default function CoursesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const copy = getLocaleCopy(locale);
  const courses = getCourses(locale);

  if (!['en', 'so'].includes(locale)) {
    notFound();
  }

  return (
    <main className="container-shell py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">NHMSA</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">{copy.coursesPage.heading}</h1>
        <p className="mt-4 text-lg text-slate-600">{copy.coursesPage.summary}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
        {['All courses', 'Heavy equipment', 'Material handling', 'Transport'].map((item) => (
          <button key={item} type="button" className="rounded-full border border-slate-200 bg-white px-3 py-2 transition hover:border-slate-300">
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {courses.map((course) => (
          <Link key={course.slug} href={`/${locale}/courses/${course.slug}`} className="block">
            <article className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">{course.category}</p>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
                  {course.status}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">{course.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{course.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li>{course.feeLabel}</li>
                <li>{course.durationLabel}</li>
                <li>{course.locationLabel}</li>
              </ul>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
