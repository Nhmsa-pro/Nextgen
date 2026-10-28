import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NHMSA | Heavy Machinery & Skills Academy',
  description: 'Bilingual public website for NHMSA, sharing training pathways, admissions guidance, and academy information in English and Somali.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
