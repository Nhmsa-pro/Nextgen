import Link from 'next/link';

export const locales = ['en', 'so'] as const;

export type Locale = (typeof locales)[number];

export type CourseStatus = 'Applications Open' | 'Coming Soon' | 'Currently Unavailable' | 'Fully Booked';

export type Course = {
  id: string;
  slug: string;
  category: Record<Locale, string>;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  status: CourseStatus;
  feeLabel: Record<Locale, string>;
  durationLabel: Record<Locale, string>;
  locationLabel: Record<Locale, string>;
  requirementsLabel: Record<Locale, string>;
};

export const courseCatalog: Course[] = [
  {
    id: 'excavator-operator',
    slug: 'excavator-operator',
    category: { en: 'Heavy Equipment', so: 'Qalabka culus' },
    title: { en: 'Excavator Operator', so: 'Shaqaale Qalab Riixaya' },
    summary: {
      en: 'Placeholder course summary for excavation operations and safe heavy equipment handling.',
      so: 'Qoraal degdeg ah oo ah koorso la sii daayo si qoran oo ku saabsan hawlgelinta qashinka iyo isticmaalka qalabka culus.',
    },
    status: 'Applications Open',
    feeLabel: { en: 'Fee: TBC', so: 'Kharash: La xaqiijin doono' },
    durationLabel: { en: 'Duration: TBC', so: 'Muddada: La xaqiijin doono' },
    locationLabel: { en: 'Location: TBC', so: 'Goobta: La xaqiijin doono' },
    requirementsLabel: { en: 'Entry requirements: pending academy confirmation', so: 'Shuruudaha gelitaanka: la xaqiijin doono' },
  },
  {
    id: 'bulldozer-grader-operator',
    slug: 'bulldozer-grader-operator',
    category: { en: 'Heavy Equipment', so: 'Qalabka culus' },
    title: { en: 'Bulldozer & Grader Operator', so: 'Shaqaaleynta Bulldozer iyo Grader' },
    summary: {
      en: 'Placeholder course summary for earthworks, grading and site preparation operations.',
      so: 'Qoraal degdeg ah oo ku saabsan shaqada dhulka, heerkulka iyo diyaarinta goobaha.',
    },
    status: 'Coming Soon',
    feeLabel: { en: 'Fee: TBC', so: 'Kharash: La xaqiijin doono' },
    durationLabel: { en: 'Duration: TBC', so: 'Muddada: La xaqiijin doono' },
    locationLabel: { en: 'Location: TBC', so: 'Goobta: La xaqiijin doono' },
    requirementsLabel: { en: 'Entry requirements: pending academy confirmation', so: 'Shuruudaha gelitaanka: la xaqiijin doono' },
  },
  {
    id: 'wheel-loader-forklift-operator',
    slug: 'wheel-loader-forklift-operator',
    category: { en: 'Material Handling', so: 'Maareynta alaabta' },
    title: { en: 'Wheel Loader & Forklift Operator', so: 'Shaqaaleynta Wheel Loader iyo Forklift' },
    summary: {
      en: 'Placeholder course summary for loading, lifting and safe site logistics operation.',
      so: 'Qoraal degdeg ah oo ku saabsan rarista, kicinta iyo hawlgalka badbaadada ee goobta.',
    },
    status: 'Applications Open',
    feeLabel: { en: 'Fee: TBC', so: 'Kharash: La xaqiijin doono' },
    durationLabel: { en: 'Duration: TBC', so: 'Muddada: La xaqiijin doono' },
    locationLabel: { en: 'Location: TBC', so: 'Goobta: La xaqiijin doono' },
    requirementsLabel: { en: 'Entry requirements: pending academy confirmation', so: 'Shuruudaha gelitaanka: la xaqiijin doono' },
  },
  {
    id: 'mobile-tower-crane-operator',
    slug: 'mobile-tower-crane-operator',
    category: { en: 'Lifting Operations', so: 'Hawlaha kor u qaadista' },
    title: { en: 'Mobile & Tower Crane Operator', so: 'Shaqaaleynta Mobile iyo Tower Crane' },
    summary: {
      en: 'Placeholder course summary for lifting operations, load control and safe rigging practices.',
      so: 'Qoraal degdeg ah oo ku saabsan hawlaha kor u qaadista, xakamaynta culeyska iyo hababka badbaadada.',
    },
    status: 'Currently Unavailable',
    feeLabel: { en: 'Fee: TBC', so: 'Kharash: La xaqiijin doono' },
    durationLabel: { en: 'Duration: TBC', so: 'Muddada: La xaqiijin doono' },
    locationLabel: { en: 'Location: TBC', so: 'Goobta: La xaqiijin doono' },
    requirementsLabel: { en: 'Entry requirements: pending academy confirmation', so: 'Shuruudaha gelitaanka: la xaqiijin doono' },
  },
  {
    id: 'heavy-truck-trailer-driving',
    slug: 'heavy-truck-trailer-driving',
    category: { en: 'Transport', so: 'Gaadiidka' },
    title: { en: 'Heavy Truck & Trailer Driving', so: 'Darawalnimada Trakada Culus iyo Trailer' },
    summary: {
      en: 'Placeholder course summary for heavy vehicle operation, defensive driving and route awareness.',
      so: 'Qoraal degdeg ah oo ku saabsan gaadiidka culus, wadista badbaadada iyo fahamka waddooyinka.',
    },
    status: 'Applications Open',
    feeLabel: { en: 'Fee: TBC', so: 'Kharash: La xaqiijin doono' },
    durationLabel: { en: 'Duration: TBC', so: 'Muddada: La xaqiijin doono' },
    locationLabel: { en: 'Location: TBC', so: 'Goobta: La xaqiijin doono' },
    requirementsLabel: { en: 'Entry requirements: pending academy confirmation', so: 'Shuruudaha gelitaanka: la xaqiijin doono' },
  },
  {
    id: 'plumbing-welding',
    slug: 'plumbing-welding',
    category: { en: 'Trades', so: 'Farsamooyinka' },
    title: { en: 'Plumbing & Welding', so: 'Biyaha & Halbeegga' },
    summary: {
      en: 'Placeholder course summary for installation, repair and practical workshop techniques.',
      so: 'Qoraal degdeg ah oo ku saabsan rakibidda, dayactirka iyo farsamooyinka shaqada workshopka.',
    },
    status: 'Fully Booked',
    feeLabel: { en: 'Fee: TBC', so: 'Kharash: La xaqiijin doono' },
    durationLabel: { en: 'Duration: TBC', so: 'Muddada: La xaqiijin doono' },
    locationLabel: { en: 'Location: TBC', so: 'Goobta: La xaqiijin doono' },
    requirementsLabel: { en: 'Entry requirements: pending academy confirmation', so: 'Shuruudaha gelitaanka: la xaqiijin doono' },
  },
  {
    id: 'heavy-equipment-mechanics',
    slug: 'heavy-equipment-mechanics',
    category: { en: 'Maintenance', so: 'Dayactirka' },
    title: { en: 'Heavy Equipment Mechanics', so: 'Farsamayaqaanada Qalabka Culus' },
    summary: {
      en: 'Placeholder course summary for diagnostics, repair and maintenance of heavy equipment systems.',
      so: 'Qoraal degdeg ah oo ku saabsan ogaanshaha, dayactirka iyo ilaalinta nidaamyada qalabka culus.',
    },
    status: 'Coming Soon',
    feeLabel: { en: 'Fee: TBC', so: 'Kharash: La xaqiijin doono' },
    durationLabel: { en: 'Duration: TBC', so: 'Muddada: La xaqiijin doono' },
    locationLabel: { en: 'Location: TBC', so: 'Goobta: La xaqiijin doono' },
    requirementsLabel: { en: 'Entry requirements: pending academy confirmation', so: 'Shuruudaha gelitaanka: la xaqiijin doono' },
  },
];

export const publicContent = {
  en: {
    nav: {
      home: 'Home',
      courses: 'Courses',
      about: 'About',
      contact: 'Contact',
      careers: 'Careers',
      apply: 'Apply',
    },
    cta: {
      browseCourses: 'Browse courses',
      applyNow: 'Apply now',
      learnMore: 'Learn more',
      viewCourse: 'View course',
      backToCourses: 'Back to courses',
      placeholder: 'Placeholder content pending verification',
    },
    home: {
      eyebrow: 'Professional skills training',
      title: 'Training for the next generation of heavy equipment professionals.',
      description:
        'This placeholder homepage reflects the approved NHMSA UX direction while academy facts, credentials and approved public content are still being confirmed.',
      cardTitle: 'Program overview',
      cardText: 'Public content is intentionally placeholder-only until verified academy information is approved.',
    },
    about: {
      heading: 'About the academy',
      summary:
        'The academy will publish approved mission, values, training approach and verified operational details once the final launch facts are confirmed.',
    },
    contact: {
      heading: 'Contact',
      summary: 'Contact details remain pending verification. This page is intentionally placeholder-only until final academy channels are approved.',
    },
    careers: {
      heading: 'Careers',
      summary: 'Career opportunities and staffing information will be published only after review and approval by the academy.',
    },
    apply: {
      heading: 'Application pipeline',
      summary: 'The formal application experience is not part of this foundation milestone. This placeholder route preserves the UX structure and will be replaced by the real admissions flow next.',
    },
    coursesPage: {
      heading: 'Course catalogue',
      summary: 'The course catalogue below follows the requested UX structure. Course fees, durations, dates and locations remain placeholders until the academy confirms them.',
    },
    courseDetail: {
      statusLabel: 'Status',
      summaryLabel: 'Summary',
      detailsHeading: 'Important details',
      notFound: 'Course not found',
    },
  },
  so: {
    nav: {
      home: 'Bogga hore',
      courses: 'Koorsooyinka',
      about: 'Kusoo bari',
      contact: 'Xiriir',
      careers: 'Mashaariicda shaqo',
      apply: 'Codso',
    },
    cta: {
      browseCourses: 'Baadh koorsooyinka',
      applyNow: 'Codso hada',
      learnMore: 'Baro wax badan',
      viewCourse: 'Eeg koorsada',
      backToCourses: 'Ku laabo koorsooyinka',
      placeholder: 'Mawduuc ku meel gaar ah oo la sugayo xaqiijinta',
    },
    home: {
      eyebrow: 'Tababada xirfadaha',
      title: 'Tababar loogu talagalay jiilka xiga ee xirfadlayaasha qalabka culus.',
      description:
        'Boggan degdegga ah wuxuu raacayaa jihada UX ee la ansixiyay ee NHMSA, iyadoo macluumaadka rasmiga ah iyo shahaadooyinka weli la sugayo.',
      cardTitle: 'Gambaleelka barnaamijka',
      cardText: 'Mawduucyada dadweynaha waxaa loogu talagalay inay ahaadaan tusmooyin ku meel gaar ah illaa la xaqiijiyo macluumaadka rasmiga ah.',
    },
    about: {
      heading: 'Ku saabsan akadeemiyada',
      summary:
        'Akadeemiyada waxay daabici doontaa ujeedada, qiyamka, habka tababarka iyo faahfaahinta la xaqiijiyay marka macluumaadka ugu dambeeya la xaqiijiyo.',
    },
    contact: {
      heading: 'Xiriir',
      summary: 'Faahfaahinta xiriirka weli lama xaqiijin. Boggan waa tusmo ku meel gaar ah ilaa kanaalada rasmiga ah la ansixiyo.',
    },
    careers: {
      heading: 'Mashaariicda shaqo',
      summary: 'Fursadaha shaqo iyo macluumaadka shaqaalaha ayaa lagu daabici doonaa kaliya ka dib markii ay akadeemiyada ansixiso.',
    },
    apply: {
      heading: 'Dhismaha codsiga',
      summary: 'Nidaamka rasmiga ah ee codsiga ma aha qayb ka mid ah heerarkan aasaasiga ah. Jidkaani wuxuu ilaaliyaa qaab dhismeedka UX wuxuuna lagu beddeli doonaa socodka codsiga dhabta ah xiga.',
    },
    coursesPage: {
      heading: 'Kataloogga koorsooyinka',
      summary: 'Kataloogga koorsooyinka ee hoose wuxuu raacaa qaabdhismeedka UX ee la dalbaday. Kharashka, muddada, taariikhda iyo goobta weli waa tusmooyin ku meel gaar ah.',
    },
    courseDetail: {
      statusLabel: 'Xaaladda',
      summaryLabel: 'Faahfaahinta',
      detailsHeading: 'Faahfaahinta muhiimka ah',
      notFound: 'Koorso lama helin',
    },
  },
} as const;

export function getLocaleLabel(locale: Locale) {
  return locale === 'en' ? 'English' : 'Somali';
}

export function getCourses(locale: Locale) {
  return courseCatalog.map((course) => ({
    ...course,
    category: course.category[locale],
    title: course.title[locale],
    summary: course.summary[locale],
    feeLabel: course.feeLabel[locale],
    durationLabel: course.durationLabel[locale],
    locationLabel: course.locationLabel[locale],
    requirementsLabel: course.requirementsLabel[locale],
  }));
}

export function getCourseBySlug(slug: string) {
  return courseCatalog.find((course) => course.slug === slug) ?? null;
}

export function getLocaleCopy(locale: Locale) {
  return publicContent[locale];
}

export function getLocalizedNav(locale: Locale) {
  return [
    { href: `/${locale}`, label: publicContent[locale].nav.home },
    { href: `/${locale}/courses`, label: publicContent[locale].nav.courses },
    { href: `/${locale}/about`, label: publicContent[locale].nav.about },
    { href: `/${locale}/careers`, label: publicContent[locale].nav.careers },
    { href: `/${locale}/contact`, label: publicContent[locale].nav.contact },
  ];
}

export function getLocaleHref(locale: Locale, path: string) {
  return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
}

export function LocaleLink({ locale, href, children, className = '' }: { locale: Locale; href: string; children: React.ReactNode; className?: string }) {
  return <Link href={getLocaleHref(locale, href)} className={className}>{children}</Link>;
}
