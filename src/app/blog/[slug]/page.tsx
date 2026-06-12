import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { POSTS } from '@/lib/blog-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find(p => p.slug === slug);
  
  if (!post) {
    return { title: 'Статтю не знайдено' };
  }
  
  return {
    title: `${post.title} | Адвокат Дьордяй Іван Васильович`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://${SITE_CONFIG.domain}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://${SITE_CONFIG.domain}/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: `https://${SITE_CONFIG.domain}/images/og.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Schema markup for the article
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Дьордяй Іван Васильович',
      url: `https://${SITE_CONFIG.domain}/pro-advokata`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Адвокат Дьордяй І.В.',
      logo: {
        '@type': 'ImageObject',
        url: `https://${SITE_CONFIG.domain}/images/og.jpg`
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="pt-32 pb-20 bg-white min-h-screen">
        <div className="container-custom max-w-4xl mx-auto">
          
          <AnimatedSection>
            <div className="mb-8">
              <Breadcrumbs />
            </div>
            
            <div className="mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-text-secondary text-sm gap-6 mb-12 pb-8 border-b border-gray-100">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={post.date}>{post.dateDisplay}</time>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Адвокат {SITE_CONFIG.lastName} І.В.</span>
              </div>
            </div>

            {post.image && (
              <div className="mb-10 w-full h-[300px] md:h-[450px] relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )}

            <div 
              className="prose prose-lg max-w-none prose-headings:text-primary-dark prose-a:text-primary hover:prose-a:text-accent-gold prose-a:transition-colors prose-blockquote:border-l-accent-gold prose-blockquote:bg-surface-light prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-li:marker:text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedSection>
          
        </div>
      </article>
      
      <CTASection />
    </>
  );
}
