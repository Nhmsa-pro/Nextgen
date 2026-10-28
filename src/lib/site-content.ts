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
      en: 'Learn the core skills for safe excavation work, trench awareness, machine control, and routine daily checks.',
      so: 'Baro xirfadaha aasaasiga ah ee shaqada qodista badbaadada leh, garashada xadhkaha, xakamaynta mishiinka, iyo hubinta maalinlaha ah.',
    },
    status: 'Applications Open',
    feeLabel: { en: 'Fee: To be confirmed', so: 'Kharash: La xaqiijin doonaa' },
    durationLabel: { en: 'Duration: To be confirmed', so: 'Muddada: La xaqiijin doonaa' },
    locationLabel: { en: 'Location: To be confirmed', so: 'Goobta: La xaqiijin doonaa' },
    requirementsLabel: { en: 'Entry requirements: age and basic literacy requirements will be confirmed by the academy.', so: 'Shuruudaha gelitaanka: da’da iyo akhriska aasaasiga ah ayaa lagu xaqiijin doonaa akadeemiyada.' },
  },
  {
    id: 'bulldozer-grader-operator',
    slug: 'bulldozer-grader-operator',
    category: { en: 'Heavy Equipment', so: 'Qalabka culus' },
    title: { en: 'Bulldozer & Grader Operator', so: 'Shaqaaleynta Bulldozer iyo Grader' },
    summary: {
      en: 'Build practical skill in site preparation, grading, earth movement, and safe machine operation in demanding work zones.',
      so: 'Samee xirfad la taaban karo oo ku saabsan diyaarinta goobta, jeexashada, dhaqdhaqaaqa dhulka, iyo hawlgelinta mishiinka si badbaado leh meelaha shaqada ee adag.',
    },
    status: 'Coming Soon',
    feeLabel: { en: 'Fee: To be confirmed', so: 'Kharash: La xaqiijin doonaa' },
    durationLabel: { en: 'Duration: To be confirmed', so: 'Muddada: La xaqiijin doonaa' },
    locationLabel: { en: 'Location: To be confirmed', so: 'Goobta: La xaqiijin doonaa' },
    requirementsLabel: { en: 'Entry requirements: age and basic literacy requirements will be confirmed by the academy.', so: 'Shuruudaha gelitaanka: da’da iyo akhriska aasaasiga ah ayaa lagu xaqiijin doonaa akadeemiyada.' },
  },
  {
    id: 'wheel-loader-forklift-operator',
    slug: 'wheel-loader-forklift-operator',
    category: { en: 'Material Handling', so: 'Maareynta alaabta' },
    title: { en: 'Wheel Loader & Forklift Operator', so: 'Shaqaaleynta Wheel Loader iyo Forklift' },
    summary: {
      en: 'Practice safe loading, lifting, stacking, and site logistics for construction and industrial operations.',
      so: 'Ku tababar safmarka, kicinta, xidhashada, iyo maareynta alaabta goobta si badbaado leh oo loogu talagalay dhismo iyo hawlo warshadeed.',
    },
    status: 'Applications Open',
    feeLabel: { en: 'Fee: To be confirmed', so: 'Kharash: La xaqiijin doonaa' },
    durationLabel: { en: 'Duration: To be confirmed', so: 'Muddada: La xaqiijin doonaa' },
    locationLabel: { en: 'Location: To be confirmed', so: 'Goobta: La xaqiijin doonaa' },
    requirementsLabel: { en: 'Entry requirements: age and basic literacy requirements will be confirmed by the academy.', so: 'Shuruudaha gelitaanka: da’da iyo akhriska aasaasiga ah ayaa lagu xaqiijin doonaa akadeemiyada.' },
  },
  {
    id: 'mobile-tower-crane-operator',
    slug: 'mobile-tower-crane-operator',
    category: { en: 'Lifting Operations', so: 'Hawlaha kor u qaadista' },
    title: { en: 'Mobile & Tower Crane Operator', so: 'Shaqaaleynta Mobile iyo Tower Crane' },
    summary: {
      en: 'Develop competence in lifting operations, load awareness, rigging basics, and safe communication on active worksites.',
      so: 'Samee xirfad ku saabsan hawlaha kor u qaadista, garashada culeyska, aasaaska hagaajinta, iyo isgaadhsiinta badbaadada ee goobaha shaqada ee firfircoon.',
    },
    status: 'Currently Unavailable',
    feeLabel: { en: 'Fee: To be confirmed', so: 'Kharash: La xaqiijin doonaa' },
    durationLabel: { en: 'Duration: To be confirmed', so: 'Muddada: La xaqiijin doonaa' },
    locationLabel: { en: 'Location: To be confirmed', so: 'Goobta: La xaqiijin doonaa' },
    requirementsLabel: { en: 'Entry requirements: age and basic literacy requirements will be confirmed by the academy.', so: 'Shuruudaha gelitaanka: da’da iyo akhriska aasaasiga ah ayaa lagu xaqiijin doonaa akadeemiyada.' },
  },
  {
    id: 'heavy-truck-trailer-driving',
    slug: 'heavy-truck-trailer-driving',
    category: { en: 'Transport', so: 'Gaadiidka' },
    title: { en: 'Heavy Truck & Trailer Driving', so: 'Darawalnimada Trakada Culus iyo Trailer' },
    summary: {
      en: 'Build confidence in heavy vehicle operation, defensive driving, route planning, and road safety awareness.',
      so: 'Dhisyga kalsoonida hawlgelinta gaadiidka culus, wadista difaacda, qorshaynta waddooyinka, iyo wacyiga badbaadada wadada.',
    },
    status: 'Applications Open',
    feeLabel: { en: 'Fee: To be confirmed', so: 'Kharash: La xaqiijin doonaa' },
    durationLabel: { en: 'Duration: To be confirmed', so: 'Muddada: La xaqiijin doonaa' },
    locationLabel: { en: 'Location: To be confirmed', so: 'Goobta: La xaqiijin doonaa' },
    requirementsLabel: { en: 'Entry requirements: age and basic literacy requirements will be confirmed by the academy.', so: 'Shuruudaha gelitaanka: da’da iyo akhriska aasaasiga ah ayaa lagu xaqiijin doonaa akadeemiyada.' },
  },
  {
    id: 'plumbing-welding',
    slug: 'plumbing-welding',
    category: { en: 'Trades', so: 'Farsamooyinka' },
    title: { en: 'Plumbing & Welding', so: 'Biyaha & Halbeegga' },
    summary: {
      en: 'Gain practical experience in installation, repair, measurement, fitting, and workshop safety techniques.',
      so: 'Hel waayo-aragnimo la taaban karo oo ku saabsan rakibidda, dayactirka, cabbiraadda, ku habboonaanta, iyo farsamooyinka badbaadada ee workshopka.',
    },
    status: 'Fully Booked',
    feeLabel: { en: 'Fee: To be confirmed', so: 'Kharash: La xaqiijin doonaa' },
    durationLabel: { en: 'Duration: To be confirmed', so: 'Muddada: La xaqiijin doonaa' },
    locationLabel: { en: 'Location: To be confirmed', so: 'Goobta: La xaqiijin doonaa' },
    requirementsLabel: { en: 'Entry requirements: age and basic literacy requirements will be confirmed by the academy.', so: 'Shuruudaha gelitaanka: da’da iyo akhriska aasaasiga ah ayaa lagu xaqiijin doonaa akadeemiyada.' },
  },
  {
    id: 'heavy-equipment-mechanics',
    slug: 'heavy-equipment-mechanics',
    category: { en: 'Maintenance', so: 'Dayactirka' },
    title: { en: 'Heavy Equipment Mechanics', so: 'Farsamayaqaanada Qalabka Culus' },
    summary: {
      en: 'Understand diagnostics, preventive maintenance, repair workflow, and machine service standards for heavy equipment.',
      so: 'Fahmaan ogaanshaha, dayactirka kahortaga, habka dayactirka, iyo heerarka adeega mishiinada ee qalabka culus.',
    },
    status: 'Coming Soon',
    feeLabel: { en: 'Fee: To be confirmed', so: 'Kharash: La xaqiijin doonaa' },
    durationLabel: { en: 'Duration: To be confirmed', so: 'Muddada: La xaqiijin doonaa' },
    locationLabel: { en: 'Location: To be confirmed', so: 'Goobta: La xaqiijin doonaa' },
    requirementsLabel: { en: 'Entry requirements: age and basic literacy requirements will be confirmed by the academy.', so: 'Shuruudaha gelitaanka: da’da iyo akhriska aasaasiga ah ayaa lagu xaqiijin doonaa akadeemiyada.' },
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
      formSubmit: 'Send request',
    },
    home: {
      eyebrow: 'Professional skills training',
      title: 'Practical training for the next generation of heavy machinery and technical trades professionals.',
      description:
        'NHMSA helps students explore accredited-style practical learning pathways in heavy equipment, lifting operations, transport, and skilled trades with clear bilingual guidance.',
      statsTitle: 'What visitors can expect',
      stats: ['Clear course options', 'Bilingual information', 'Straightforward admissions guidance'],
      whyTitle: 'Built for clarity and trust',
      why: ['Open course pathways', 'Verified public information', 'Accessible bilingual experience'],
    },
    about: {
      heading: 'About NHMSA',
      summary:
        'NHMSA is focused on practical, relevant training that helps students prepare for work in heavy machinery, technical operations, and skilled trade environments. The public site presents clear bilingual guidance and keeps information accurate, respectful, and easy to access.',
      intro: 'The academy communicates training opportunities and admissions guidance in English and Somali so families, students, and employers can understand the next steps.',
      cards: [
        'Bilingual public information',
        'Practical training pathways',
        'Transparent admissions guidance',
      ],
    },
    contact: {
      heading: 'Contact NHMSA',
      summary:
        'Use the form below to ask a question about courses, admissions guidance, or general academy information. Public contact channels are shared only once they are approved and confirmed by the academy.',
      formTitle: 'Ask a question',
      name: 'Full name',
      email: 'Email address',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send request',
    },
    careers: {
      heading: 'Careers',
      summary:
        'NHMSA will publish staff opportunities only when roles are confirmed and approved by the academy. This page keeps the process transparent and avoids announcing unverified positions.',
      cards: [
        'Admissions support',
        'Training delivery',
        'Student support and communication',
      ],
    },
    apply: {
      heading: 'Apply to a course',
      summary:
        'Complete the form below to request admission consideration for an available course. The academy reviews every application and confirms the next steps when the intake is active.',
      formTitle: 'Application request',
      fields: {
        fullName: 'Full name',
        phone: 'Phone number',
        email: 'Email address',
        age: 'I confirm I am eligible to apply for this intake',
        course: 'Course',
        location: 'Preferred location',
        education: 'Education level',
        experience: 'Relevant experience',
        notes: 'Additional notes',
      },
      submit: 'Submit application request',
    },
    coursesPage: {
      heading: 'Course catalogue',
      summary:
        'Explore the approved NHMSA training pathways below. Course fees, duration, and location are shared as confirmed by the academy; where details are not yet approved, they are clearly marked as to be confirmed.',
    },
    courseDetail: {
      statusLabel: 'Status',
      summaryLabel: 'Summary',
      detailsHeading: 'Course details',
      note: 'Key public details are published only when confirmed by the academy. If a value is not yet approved, it remains clearly marked as to be confirmed.',
      applyLabel: 'Apply now',
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
      formSubmit: 'Dir codsi',
    },
    home: {
      eyebrow: 'Tababada xirfadaha',
      title: 'Tababar la taaban karo oo loogu talagalay jiilka xiga ee mashiinada culus iyo farsamooyinka farsamada.',
      description:
        'NHMSA waxay caawisaa ardayda inay sahmiyaan dariiqyo tababar oo la taaban karo oo ku saabsan qalabka culus, hawlaha kor u qaadista, gaadiidka, iyo farsamooyinka xirfada leh iyadoo la siinayo tilmaamo labajibbaaran ah.',
      statsTitle: 'Waxa martidu filan karto',
      stats: ['Ikhtiyaar koorso cad', 'Macluumaad labajibbaaran', 'Tilmaamo codsi oo sahlan'],
      whyTitle: 'La dhisay caddayn iyo kalsoonida',
      why: ['Dariiqyo koorso oo furan', 'Macluumaad dadweyne ah oo la xaqiijiyay', 'Xirfad labajibbaaran oo la heli karo'],
    },
    about: {
      heading: 'Kusoo bari NHMSA',
      summary:
        'NHMSA waxay diiradda saartaa tababar la taaban karo oo khuseeya kaasoo ka caawinaya ardayda inay u diyaargaroobaan shaqo ku saabsan mashiinada culus, hawlaha farsamada, iyo deegaanka farsamo ee xirfadeed. Bogga dadweynaha waxa uu soo bandhigaa tilmaamo labajibbaaran oo cad oo macluumaadka ah oo xushmad leh oo fudud in la garto.',
      intro: 'Akadeemiyada waxay u gudbisaa fursadaha tababarka iyo tilmaamaha codsiga af Ingiriis iyo af Soomaali si qoyska, ardayda, iyo shaqo-bixiyeyaashu u fahmaan tillaabooyinka xiga.',
      cards: [
        'Macluumaadka dadweynaha ee labajibbaaran',
        'Dariiqyo tababar oo la taaban karo',
        'Tilmaamo codsi oo cad',
      ],
    },
    contact: {
      heading: 'La xidhiidh NHMSA',
      summary:
        'Isticmaal foomka hoos ku yaal si aad wax uga waydiiso koorsooyinka, tilmaamaha codsiga, ama macluumaadka guud ee akadeemiyada. Kanaalada xiriirka dadweynaha waxaa la daabiciyaa kaliya markii la ansixiyo iyo la xaqiijiyo akadeemiyada.',
      formTitle: 'Wax weydiiso',
      name: 'Magaca oo buuxda',
      email: 'Emailka',
      subject: 'Mawduuca',
      message: 'Fariinta',
      submit: 'Dir codsi',
    },
    careers: {
      heading: 'Mashaariicda shaqo',
      summary:
        'NHMSA waxay daabici doontaa fursadaha shaqada kaliya marka doorashooyinka la xaqiijiyo oo akadeemiyada ansixiso. Boggan wuxuu ilaalinayaa habka caddaynaya oo ka ilaaliya ku dhawaaqista mowduucyo aan la xaqiijin.',
      cards: [
        'Taageerada codsiga',
        'Gaarsiinta tababarka',
        'Taageerada ardayga iyo isgaarsiinta',
      ],
    },
    apply: {
      heading: 'Codso koorso',
      summary:
        'Buuxi foorka hoos ku yaal si aad u codsato tixgelin codsi ee koorso la heli karo. Akadeemiyada waxay dib u eegtaa codsig kasta oo xaqiijisa tillaabooyinka xiga marka intake ay firfircoon tahay.',
      formTitle: 'Codsiga koorsada',
      fields: {
        fullName: 'Magaca oo buuxda',
        phone: 'Talaafon',
        email: 'Emailka',
        age: 'Waan xaqiijinayaa inaan u qalmo codsigaan',
        course: 'Koorso',
        location: 'Goobta la doorbidayo',
        education: 'Heerka waxbarasho',
        experience: 'Waayo-aragnimada ku habboon',
        notes: 'Qoraallo dheeraad ah',
      },
      submit: 'Dir codsiga',
    },
    coursesPage: {
      heading: 'Kataloogga koorsooyinka',
      summary:
        'Sahminta dariiqyada tababarka ee la ansixiyay ee NHMSA. Kharashka, muddada, iyo meesha lagu bixinayo waxaa la wadaaga sida ay akadeemiyada u xaqiijiso; meesha aan weli la ansixin, waa la calaamadiyaa si cad oo ah la xaqiijin doonaa.',
    },
    courseDetail: {
      statusLabel: 'Xaaladda',
      summaryLabel: 'Faahfaahinta',
      detailsHeading: 'Faahfaahinta koorsada',
      note: 'Faahfaahinta guud ee dadweynaha waxaa la daabiciyaa kaliya markii ay akadeemiyada xaqiijiso. Haddii qiimo aan weli la ansixin, waxa si cad loogu calaamadiyaa “la xaqiijin doonaa”.',
      applyLabel: 'Codso hadda',
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
