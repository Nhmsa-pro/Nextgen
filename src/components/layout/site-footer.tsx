export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">NHMSA</h3>
          <p className="mt-3 text-sm text-slate-300">
            Professional heavy equipment and vocational training with verified public information only.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Courses</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Policies</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
