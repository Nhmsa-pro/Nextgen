'use client';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-xl px-6 py-20 text-center">
      <h2 className="text-3xl font-semibold text-slate-900">Something went wrong.</h2>
      <p className="mt-3 text-slate-600">An unexpected issue interrupted the page. Please try again.</p>
      <button
        onClick={() => reset()}
        className="mt-6 rounded-lg bg-brand-secondary px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Try again
      </button>
    </main>
  );
}
