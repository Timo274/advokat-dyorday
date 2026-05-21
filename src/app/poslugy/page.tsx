import React from 'react';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CTASection from '@/components/sections/CTASection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CostCalculator from '@/components/ui/CostCalculator';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Напрямки практики | Адвокат Дьордяй І.В.',
  description: 'Послуги адвоката у Києві. Кримінальне, сімейне, земельне та господарське право. Захист прав при взаємодії з ТЦК.',
  alternates: {
    canonical: `https://${SITE_CONFIG.domain}/poslugy`,
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32">
      <div className="container-custom mt-4 mb-8">
        <Breadcrumbs />
      </div>
      <Services />
      
      <section className="py-20 bg-surface-light border-y border-gray-100">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Скільки коштують послуги адвоката?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Скористайтеся калькулятором, щоб дізнатися орієнтовну вартість правової допомоги у вашій справі.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <CostCalculator />
          </AnimatedSection>
        </div>
      </section>

      <Process />
      <CTASection />
    </div>
  );
}
