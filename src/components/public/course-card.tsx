import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCourseBySlug, getCourses, getLocaleCopy, type Locale } from '@/lib/site-content';

export function CourseCard({ course, locale }: { course: ReturnType<typeof getCourses>[number]; locale: Locale }) {
  const copy = getLocaleCopy(locale);

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">{course.category}</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">{course.title}</h3>
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
          {course.status}
        </span>
      </div>

      <p className="mt-4 text-base text-slate-600">{course.summary}</p>

      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        <li>{course.feeLabel}</li>
        <li>{course.durationLabel}</li>
        <li>{course.locationLabel}</li>
      </ul>

      <div className="mt-6 flex items-center justify-between">
        <Link href={`/${locale}/courses/${course.slug}`} className="inline-flex rounded-lg bg-brand-secondary px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
          {copy.cta.viewCourse}
        </Link>
      </div>
    </article>
  );
}
