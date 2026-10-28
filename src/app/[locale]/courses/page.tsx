'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { getCourses, getLocaleCopy, type Locale } from '@/lib/site-content';

export default function CoursesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const copy = getLocaleCopy(locale);
  const courses = getCourses(locale);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const categoryOptions = ['all', ...Array.from(new Set(courses.map((course) => course.category)))];

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory = category === 'all' || course.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        course.title.toLowerCase().includes(normalizedQuery) ||
        course.category.toLowerCase().includes(normalizedQuery) ||
        course.summary.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, courses, query]);

  return (
    <main className="container-shell py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">NHMSA</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">{copy.coursesPage.heading}</h1>
        <p className="mt-4 text-lg text-slate-600">{copy.coursesPage.summary}</p>
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={locale === 'en' ? 'Search courses' : 'Raadi koorsooyinka'}
            aria-label={locale === 'en' ? 'Search courses' : 'Raadi koorsooyinka'}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-brand-secondary lg:max-w-md"
          />
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setCategory(option)}
                className={`rounded-full border px-3 py-2 text-sm font-medium transition ${
                  category === option
                    ? 'border-brand-secondary bg-brand-secondary text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                {option === 'all' ? (locale === 'en' ? 'All courses' : 'Dhamaan koorsooyinka') : option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 text-sm text-slate-600">
        <p>
          {locale === 'en' ? `Showing ${filteredCourses.length} course${filteredCourses.length === 1 ? '' : 's'}` : `Waxa la tusay ${filteredCourses.length} koorso${filteredCourses.length === 1 ? '' : 'yo'}`}
        </p>
        {query || category !== 'all' ? (
          <button type="button" onClick={() => { setQuery(''); setCategory('all'); }} className="font-medium text-brand-secondary hover:underline">
            {locale === 'en' ? 'Clear filters' : 'Nadiifi shaandhada'}
          </button>
        ) : null}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
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
          ))
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-slate-600 lg:col-span-3">
            <p className="text-lg font-medium text-slate-900">
              {locale === 'en' ? 'No courses match your search.' : 'Ma jiraan koorsooyin ku habboon raadintadaada.'}
            </p>
            <button type="button" onClick={() => { setQuery(''); setCategory('all'); }} className="mt-3 inline-flex rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 font-medium text-slate-800 hover:border-slate-400">
              {locale === 'en' ? 'Clear filters' : 'Nadiifi shaandhada'}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
