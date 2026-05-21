import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import WhyChooseMe from '@/components/sections/WhyChooseMe';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <WhyChooseMe />
      <Process />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
