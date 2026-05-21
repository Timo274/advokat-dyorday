import type { Metadata } from 'next';
import { Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCTA from '@/components/layout/MobileCTA';
import FloatingWidget from '@/components/layout/FloatingWidget';
import BackToTop from '@/components/ui/BackToTop';
import Providers from '@/app/Providers';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lawyer-diodiai.vercel.app'),
  title: {
    default: 'Адвокат Дьордяй Іван Васильович — Кримінальний адвокат у Києві | Захист прав ТЦК',
    template: '%s | Адвокат Дьордяй І.В. Київ',
  },
  description:
    'Адвокат Дьордяй Іван Васильович — професійний кримінальний адвокат у Києві. Захист прав при взаємодії з ТЦК, мобілізаційні питання, сімейне, земельне та господарське право. 20+ років досвіду, 98% успішних справ. Гарантія результату у договорі. ☎ (096) 507 71 72',
  keywords: [
    'адвокат Київ',
    'кримінальний адвокат Київ',
    'адвокат ТЦК',
    'адвокат ТЦК Київ',
    'захист прав ТЦК',
    'адвокат мобілізація',
    'оскарження рішення ВЛК',
    'захист прав громадян',
    'сімейний адвокат Київ',
    'земельні спори адвокат',
    'господарські спори',
    'кримінальний адвокат',
    'правова допомога Київ',
    'Дьордяй адвокат',
    'адвокат кримінальні справи Київ',
    'адвокат по мобілізації Київ',
    'юрист Київ',
    'захист у суді Київ',
  ],
  authors: [{ name: 'Адвокат Дьордяй Іван Васильович', url: 'https://lawyer-diodiai.vercel.app' }],
  creator: 'Адвокат Дьордяй І.В.',
  publisher: 'Адвокат Дьордяй Іван Васильович',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://lawyer-diodiai.vercel.app',
    siteName: 'Адвокат Дьордяй Іван Васильович',
    title: 'Адвокат Дьордяй Іван Васильович — Кримінальний адвокат у Києві',
    description:
      'Професійний правовий захист у Києві. Кримінальне право, захист прав при взаємодії з ТЦК, мобілізаційні питання, сімейне та земельне право. 20+ років досвіду. 98% успішних справ. Гарантія результату.',
    images: [
      {
        url: '/images/main-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Адвокат Дьордяй Іван Васильович — кримінальний адвокат у Києві',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Адвокат Дьордяй Іван Васильович — Кримінальний адвокат Київ',
    description:
      'Професійний правовий захист у Києві. 20+ років досвіду. 98% успішних справ. Гарантія результату у договорі.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://lawyer-diodiai.vercel.app',
  },
  verification: {
    google: 'C8ica_9WNOrtSsBsrVfmQkPoU4PDH2MHkvmHLKCjMJg',
  },
  other: {
    'geo.region': 'UA-30',
    'geo.placename': 'Київ',
    'geo.position': '50.4501;30.5234',
    'ICBM': '50.4501, 30.5234',
    'revisit-after': '7 days',
    'rating': 'general',
  },
};

// Comprehensive JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // Attorney / Person
    {
      '@type': ['Attorney', 'LegalService'],
      '@id': 'https://lawyer-diodiai.vercel.app/#attorney',
      name: 'Дьордяй Іван Васильович',
      alternateName: 'Адвокат Дьордяй',
      description:
        'Адвокат з понад 20-річним досвідом. Кримінальне право, захист прав громадян при взаємодії з ТЦК та СП, мобілізаційні питання, сімейне, земельне та господарське право.',
      url: 'https://lawyer-diodiai.vercel.app',
      telephone: '+380965077172',
      email: 'dordavan@gmail.com',
      image: 'https://lawyer-diodiai.vercel.app/images/main-hero.jpg',
      logo: 'https://lawyer-diodiai.vercel.app/images/main-hero.jpg',
      founder: {
        '@type': 'Person',
        name: 'Дьордяй Іван Васильович',
        jobTitle: 'Адвокат',
        knowsLanguage: ['uk', 'ru'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'вул. Богдана Хмельницького, 66, оф. 1',
        addressLocality: 'Київ',
        addressRegion: 'Київська область',
        postalCode: '01030',
        addressCountry: 'UA',
      },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Свідоцтво про право на заняття адвокатською діяльністю',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Рада адвокатів України'
        },
        credentialCategory_description: 'Свідоцтво №4296 від 21.12.2010'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 50.4501,
        longitude: 30.5234,
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Київ',
          sameAs: 'https://uk.wikipedia.org/wiki/%D0%9A%D0%B8%D1%97%D0%B2',
        },
        {
          '@type': 'Country',
          name: 'Україна',
        },
      ],
      priceRange: '₴₴-₴₴₴',
      currenciesAccepted: 'UAH',
      paymentAccepted: 'Cash, Bank Transfer',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '10:00',
          closes: '15:00',
        },
      ],
      sameAs: ['https://t.me/ivan19771'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Юридичні послуги',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Кримінальне право',
              description: 'Захист прав підозрюваних, обвинувачених та потерпілих у кримінальному провадженні',
              url: 'https://lawyer-diodiai.vercel.app/poslugy/kryminalne-pravo',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Захист прав при взаємодії з ТЦК',
              description: 'Правова допомога громадянам при взаємодії з ТЦК та оскарження рішень ВЛК',
              url: 'https://lawyer-diodiai.vercel.app/poslugy/vzayemodiya-z-tck',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Мобілізаційні питання',
              description: 'Адміністративний та правовий супровід у питаннях мобілізації',
              url: 'https://lawyer-diodiai.vercel.app/poslugy/mobilizatsiyni-pytannya',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Сімейне право',
              description: 'Розлучення, поділ майна, аліменти, визначення місця проживання дитини',
              url: 'https://lawyer-diodiai.vercel.app/poslugy/simeyне-pravo',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Земельні спори',
              description: 'Захист прав власності на земельні ділянки, вирішення межових спорів',
              url: 'https://lawyer-diodiai.vercel.app/poslugy/zemelni-spory',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Майнові спори',
              description: 'Захист права власності, спадкові справи, стягнення боргів',
              url: 'https://lawyer-diodiai.vercel.app/poslugy/maynovi-spory',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Господарські спори',
              description: 'Правовий супровід бізнесу та представництво у господарських судах',
              url: 'https://lawyer-diodiai.vercel.app/poslugy/gospodarski-spory',
            },
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Сергій О.' },
          datePublished: '2024-09-15',
          reviewBody: 'Іван Васильович чесно та відкрито роз\'яснив мені ситуацію у справі і дуже швидко з його участю була поставлена крапка.',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Володимир А.' },
          datePublished: '2024-07-20',
          reviewBody: 'Адвокат домігся моєї повної реабілітації та закриття кримінальної справи через Верховний Суд.',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        },
      ],
    },
    // WebSite
    {
      '@type': 'WebSite',
      '@id': 'https://lawyer-diodiai.vercel.app/#website',
      url: 'https://lawyer-diodiai.vercel.app',
      name: 'Адвокат Дьордяй Іван Васильович',
      description: 'Професійний правовий захист у Києві',
      publisher: { '@id': 'https://lawyer-diodiai.vercel.app/#attorney' },
      inLanguage: 'uk-UA',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://lawyer-diodiai.vercel.app/blog?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    // BreadcrumbList for homepage
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://lawyer-diodiai.vercel.app/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Головна',
          item: 'https://lawyer-diodiai.vercel.app',
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0A1628" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileCTA />
          <FloatingWidget />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
