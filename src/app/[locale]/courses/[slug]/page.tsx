import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCourseBySlug, getCourses, getLocaleCopy, type Locale } from '@/lib/site-content';

export default function CourseDetailPage({ params }: { params: { locale: string; slug: string } }) {
  const locale = params.locale as Locale;
  const copy = getLocaleCopy(locale);
  const course = getCourseBySlug(params.slug);

  if (!['en', 'so'].includes(locale) || !course) {
    notFound();
  }

  const relatedCourses = getCourses(locale)
    .filter((item) => item.slug !== course.slug)
    .slice(0, 3);

  return (
    <main className="container-shell py-16">
      <Link href={`/${locale}/courses`} className="inline-flex text-sm font-medium text-brand-secondary hover:underline">
        ← {copy.cta.backToCourses}
      </Link>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">{course.category[locale]}</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">{course.title[locale]}</h1>
          </div>
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
            {copy.courseDetail.statusLabel}: {course.status}
          </span>
        </div>

        <p className="mt-6 max-w-3xl text-lg text-slate-600">{course.summary[locale]}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-900">{copy.courseDetail.detailsHeading}</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              <li><strong>{locale === 'en' ? 'Fee:' : 'Kharash:'}</strong> {course.feeLabel[locale]}</li>
              <li><strong>{locale === 'en' ? 'Duration:' : 'Muddada:'}</strong> {course.durationLabel[locale]}</li>
              <li><strong>{locale === 'en' ? 'Location:' : 'Goobta:'}</strong> {course.locationLabel[locale]}</li>
              <li><strong>{locale === 'en' ? 'Entry requirements:' : 'Shuruudaha gelitaanka:'}</strong> {course.requirementsLabel[locale]}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">{copy.courseDetail.summaryLabel}</h2>
            <p className="mt-4 text-slate-600">{copy.courseDetail.note}</p>
            <Link href={`/${locale}/apply`} className="mt-6 inline-flex rounded-lg bg-brand-secondary px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              {copy.courseDetail.applyLabel}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-slate-900">{locale === 'en' ? 'Related courses' : 'Koorsooyin la xidhiidha'}</h2>
          <Link href={`/${locale}/courses`} className="text-sm font-medium text-brand-secondary hover:underline">
            {copy.cta.browseCourses}
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {relatedCourses.map((item) => (
            <article key={item.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">{item.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.summary}</p>
              <Link href={`/${locale}/courses/${item.slug}`} className="mt-5 inline-flex text-sm font-medium text-brand-secondary hover:underline">
                {copy.cta.viewCourse}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
