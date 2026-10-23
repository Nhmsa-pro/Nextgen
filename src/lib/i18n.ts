export const locales = ['en', 'so'] as const;

export type Locale = (typeof locales)[number];

export function getLocaleFromPath(pathname: string): Locale {
  const localeSegment = pathname.split('/').filter(Boolean)[0];
  return locales.includes(localeSegment as Locale) ? (localeSegment as Locale) : 'en';
}
