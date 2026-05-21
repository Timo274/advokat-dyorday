import React from 'react';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Юридичний блог адвоката — Поради, зміни законодавства, практика',
  description: 'Юридичний блог адвоката Дьордяй І.В. Актуальні статті про оскарження рішень ТЦК та ВЛК, права при мобілізації, поділ майна при розлученні. Практичні поради від адвоката з 20+ річним досвідом у Києві.',
  alternates: {
    canonical: `https://${SITE_CONFIG.domain}/blog`,
  },
  openGraph: {
    title: 'Юридичний блог | Адвокат Дьордяй І.В.',
    description: 'Актуальні статті, аналіз змін законодавства та практичні поради від адвоката.',
    url: `https://${SITE_CONFIG.domain}/blog`,
    type: 'website',
  },
};

import { POSTS } from '@/lib/blog-data';

// JSON-LD for blog listing
const blogJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': `https://${SITE_CONFIG.domain}/blog#blog`,
      name: 'Юридичний блог адвоката Дьордяй І.В.',
      description: 'Актуальні статті, аналіз змін законодавства та практичні поради від адвоката.',
      url: `https://${SITE_CONFIG.domain}/blog`,
      publisher: {
        '@type': 'Attorney',
        name: 'Дьордяй Іван Васильович',
        url: `https://${SITE_CONFIG.domain}`,
      },
      inLanguage: 'uk-UA',
      blogPost: POSTS.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        url: `https://${SITE_CONFIG.domain}/blog/${post.slug}`,
        author: {
          '@type': 'Person',
          name: 'Дьордяй Іван Васильович',
          jobTitle: 'Адвокат',
          url: `https://${SITE_CONFIG.domain}/pro-advokata`,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Адвокат Дьордяй І.В.',
          url: `https://${SITE_CONFIG.domain}`,
        },
        articleSection: post.category,
        inLanguage: 'uk-UA',
      })),
    },
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
          name: 'Блог',
          item: `https://${SITE_CONFIG.domain}/blog`,
        },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-surface-light min-h-screen">
        <div className="container-custom">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <Breadcrumbs />
          </div>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4 sm:mb-6 heading-gold-line-center">
              Юридичний блог
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary">
              Актуальні статті, аналіз змін законодавства та практичні поради від адвоката з 20-річним досвідом.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[...POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 0.1}>
                <article>
                  <Card className="h-full flex flex-col p-0 overflow-hidden" hover>
                    <div className="h-48 sm:h-56 bg-surface-dark relative overflow-hidden">
                      {post.image && (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                      <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 z-10">
                        <span className="bg-accent-gold text-primary-dark px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                        <time dateTime={post.date}>{post.dateDisplay}</time>
                      </div>
                      
                      <Link href={`/blog/${post.slug}`} className="group">
                        <h2 className="text-lg sm:text-2xl font-bold text-primary-dark mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                      </Link>
                      
                      <p className="text-text-secondary mb-4 sm:mb-6 line-clamp-3 text-sm sm:text-base">
                        {post.excerpt}
                      </p>
                      
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="mt-auto inline-flex items-center font-bold text-primary hover:text-accent-gold transition-colors text-sm sm:text-base"
                      >
                        Читати статтю <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </Card>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
