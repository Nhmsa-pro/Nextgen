import Link from 'next/link';

const navItems = [
  { href: '/en', label: 'Home' },
  { href: '/en/courses', label: 'Courses' },
  { href: '/en/about', label: 'About' },
  { href: '/en/careers', label: 'Careers' },
  { href: '/en/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/en" className="flex items-center gap-3 text-lg font-semibold text-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
            NH
          </span>
          <span>NHMSA</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-secondary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Language selector"
            className="rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700"
          >
            EN / SO
          </button>
          <Link
            href="/en/apply"
            className="rounded-lg bg-brand-secondary px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Apply
          </Link>
        </div>
      </div>
    </header>
  );
}
