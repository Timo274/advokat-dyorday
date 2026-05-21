import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import FAQ from '@/components/sections/FAQ';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SERVICES, SITE_CONFIG } from '@/lib/constants';
import { POSTS } from '@/lib/blog-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  
  if (!service) {
    return { title: 'Послуга не знайдена' };
  }

  return {
    title: `Адвокат з ${service.shortTitle.toLowerCase()} у Києві — Дьордяй Іван Васильович`,
    description: `${service.heroDescription} Адвокат Дьордяй І.В. — ${service.price}. 20+ років досвіду. Гарантія результату. ☎ (096) 507 71 72`,
    alternates: {
      canonical: `https://${SITE_CONFIG.domain}/poslugy/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Адвокат Дьордяй І.В.`,
      description: service.heroDescription,
      url: `https://${SITE_CONFIG.domain}/poslugy/${slug}`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES.filter(s => s.slug !== slug).slice(0, 3);

  // JSON-LD for individual service page
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://${SITE_CONFIG.domain}/poslugy/${slug}#service`,
        name: service.title,
        description: service.heroDescription,
        url: `https://${SITE_CONFIG.domain}/poslugy/${slug}`,
        provider: {
          '@type': 'Attorney',
          name: 'Дьордяй Іван Васильович',
          url: `https://${SITE_CONFIG.domain}`,
          telephone: '+380965077172',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'вул. Богдана Хмельницького, 66, оф. 1',
            addressLocality: 'Київ',
            addressCountry: 'UA',
          },
        },
        areaServed: {
          '@type': 'City',
          name: 'Київ',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: service.title,
          itemListElement: service.features.map((feature, i) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: feature,
            },
            position: i + 1,
          })),
        },
        offers: {
          '@type': 'Offer',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'UAH',
            price: service.price,
          },
        },
      },
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Головна',
            item: `https://${SITE_CONFIG.domain}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Послуги',
            item: `https://${SITE_CONFIG.domain}/poslugy`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: `https://${SITE_CONFIG.domain}/poslugy/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 md:pt-40 md:pb-24 bg-primary-dark relative overflow-hidden animated-gradient">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-80" />
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 sm:mb-8">
            <Breadcrumbs light />
          </div>
          <AnimatedSection direction="up">
            <Link href="/poslugy" className="inline-flex items-center text-accent-gold hover:text-white transition-colors mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-2" />
              Всі послуги
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 sm:mb-10">
              {service.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button href="/kontakty" variant="primary" size="lg" className="w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Отримати консультацію
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-surface-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            
            {/* Content Left */}
            <div className="lg:col-span-8">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100 mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-4 sm:mb-6 heading-gold-line">
                    Що включає послуга
                  </h2>
                  <p className="text-text-secondary text-base sm:text-lg mb-6 sm:mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-success mr-3 shrink-0 mt-0.5" />
                        <span className="text-primary-dark font-medium leading-tight text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-4 sm:mb-6 heading-gold-line">
                    Вартість послуг
                  </h2>
                  <p className="text-text-secondary text-base sm:text-lg mb-4 sm:mb-6">
                    Остаточна вартість формується після детального вивчення матеріалів справи та залежить від складності, обсягу роботи та витраченого часу.
                  </p>
                  <div className="bg-surface-light p-4 sm:p-6 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <span className="font-bold text-primary-dark text-base sm:text-lg">Орієнтовна вартість:</span>
                    <span className="text-xl sm:text-2xl font-serif text-accent-gold font-bold">{service.price}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary mt-3 sm:mt-4 italic">
                    * У договорі фіксується гарантія результату або повернення гонорару (залежно від категорії справи).
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar Right */}
            <div className="lg:col-span-4">
              <AnimatedSection delay={0.2} className="sticky top-28 sm:top-32">
                <Card dark glass className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Екстрений зв&#39;язок</h3>
                  <p className="text-white/70 mb-4 sm:mb-6 text-xs sm:text-sm">
                    Якщо вам потрібна термінова правова допомога, телефонуйте в будь-який час.
                  </p>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center justify-center w-full bg-success text-white py-3.5 sm:py-4 rounded-xl font-bold hover:bg-success/90 transition-colors mb-3" aria-label={`Зателефонувати: ${SITE_CONFIG.phoneDisplay}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-xs text-white/50 text-center">Виїзд адвоката на місце 24/7</p>
                </Card>

                <Card className="bg-white mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-dark mb-3 sm:mb-4">Схожі практики</h3>
                  <div className="space-y-3">
                    {otherServices.map((s) => (
                      <Link 
                        key={s.slug} 
                        href={`/poslugy/${s.slug}`}
                        className="flex items-center justify-between group py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-text-secondary group-hover:text-primary transition-colors font-medium text-sm sm:text-base">
                          {s.shortTitle}
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-accent-gold transition-colors" />
                      </Link>
                    ))}
                  </div>
                </Card>

                <Card className="bg-surface-light border-accent-gold/20">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-dark mb-3 sm:mb-4">Корисні статті</h3>
                  <div className="space-y-4">
                    {[...POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 2).map((post) => (
                      <Link 
                        key={post.slug} 
                        href={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <h4 className="text-sm font-bold text-primary-dark group-hover:text-primary transition-colors line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <span className="text-xs text-text-secondary inline-flex items-center">
                          Читати <ArrowRight className="w-3 h-3 ml-1" />
                        </span>
                      </Link>
                    ))}
                    <Link href="/blog" className="block text-center text-sm font-bold text-accent-gold hover:text-primary transition-colors pt-2 border-t border-gray-200">
                      Всі статті блогу
                    </Link>
                  </div>
                </Card>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
