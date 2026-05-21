import React from 'react';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'FAQ - Часті питання | Адвокат Дьордяй І.В.',
  description: 'Відповіді на часті питання щодо послуг адвоката Дьордяй Івана Васильовича.',
  alternates: {
    canonical: `https://${SITE_CONFIG.domain}/faq`,
  },
};

export default function FAQPage() {
  return (
    <div className="pt-28 md:pt-32 bg-surface-light">
      <div className="container-custom mb-8">
        <Breadcrumbs />
      </div>
      <FAQ />
      <CTASection />
    </div>
  );
}
