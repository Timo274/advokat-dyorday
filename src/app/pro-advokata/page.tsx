import React from 'react';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import About from '@/components/sections/About';
import WhyChooseMe from '@/components/sections/WhyChooseMe';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Про адвоката | Дьордяй Іван Васильович',
  description: 'Дьордяй Іван Васильович — адвокат з понад 20-річним досвідом у сфері кримінального, сімейного та земельного права.',
  alternates: {
    canonical: `https://${SITE_CONFIG.domain}/pro-advokata`,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 bg-surface-light">
      <div className="container-custom mt-4 mb-4">
        <Breadcrumbs />
      </div>
      <About />
      <CTASection />
    </div>
  );
}
