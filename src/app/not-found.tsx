import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-3xl items-center justify-center px-6 py-20">
      <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you requested is not available in the current build.</p>
        <Link href="/en" className="mt-6 inline-flex rounded-lg bg-brand-secondary px-4 py-2 text-white transition hover:bg-blue-700">
          Return home
        </Link>
      </div>
    </main>
  );
}
