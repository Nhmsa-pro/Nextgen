import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export const metadata: Metadata = {
  title: 'NHMSA | Public website',
  description: 'Public website foundation for NHMSA.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="min-h-screen bg-surface-page text-text-primary">
          <SiteHeader locale="en" />
          <main>{children}</main>
          <SiteFooter locale="en" />
        </div>
      </body>
    </html>
  );
}
