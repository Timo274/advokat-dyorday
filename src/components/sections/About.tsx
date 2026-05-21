'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { SITE_CONFIG } from '@/lib/constants';

export default function About() {
  return (
    <section id="pro-advokata" className="py-16 sm:py-20 md:py-32 bg-surface-light relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/50 -skew-x-12 transform translate-x-20 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent z-10" />
              <Image 
                src="/images/main-about.jpg" 
                alt="Адвокат Дьордяй Іван Васильович — професійний правовий захист у Києві" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            {/* License Badge — static on mobile, absolute on md+ */}
            <div className="mt-4 md:mt-0 md:absolute md:-bottom-8 md:-right-12 z-20 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
              <div className="flex items-start">
                <div className="bg-accent-gold/10 p-2.5 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark mb-1 text-sm sm:text-base">Свідоцтво про право на заняття адвокатською діяльністю</h4>
                  <p className="text-xs sm:text-sm text-text-secondary font-medium">№4296 від 21.12.2010</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div>
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-2">
                {SITE_CONFIG.fullName}
              </h2>
              <div className="text-lg sm:text-xl text-accent-gold font-serif italic mb-6 sm:mb-8">
                Адвокат, правозахисник
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-text-secondary text-base sm:text-lg mb-8 sm:mb-10">
                <p>
                  Я — практикуючий адвокат з понад 20-річним досвідом у сфері права. Моя спеціалізація — складні кримінальні справи, захист прав громадян при взаємодії з державними органами (включаючи ТЦК та СП), а також сімейні та майнові спори.
                </p>
                <p>
                  Моя філософія проста: я не берусь за справу, якщо не бачу реальної перспективи для клієнта. Кожна справа для мене — це репутація, яку я будував роками.
                </p>
              </div>

              {/* Quote/Guarantee */}
              <blockquote className="relative p-6 sm:p-8 bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 sm:mb-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent-gold" />
                <div className="relative z-10">
                  <p className="text-primary-dark font-medium italic text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                    &quot;Я офіційно гарантую повернення гонорару у разі, якщо позитивний результат у вашій справі не буде досягнутий. Ця умова чітко прописується в нашому договорі.&quot;
                  </p>
                  <footer className="font-bold text-primary-dark">— {SITE_CONFIG.lastName} І.В.</footer>
                </div>
              </blockquote>

              {/* Official Credentials (E-E-A-T) */}
              <div className="bg-primary-dark/5 p-5 rounded-xl border border-primary-dark/10 mb-8 sm:mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div>
                  <h4 className="font-bold text-primary-dark mb-1">Офіційний статус адвоката</h4>
                  <p className="text-sm text-text-secondary">
                    {SITE_CONFIG.license} від {SITE_CONFIG.licenseDate}<br />
                    <span className="text-xs">{SITE_CONFIG.licenseOrg}</span>
                  </p>
                </div>
                <a 
                  href="https://erau.unba.org.ua/" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="mt-4 sm:mt-0 inline-flex items-center text-sm font-bold text-primary hover:text-accent-gold transition-colors bg-white px-4 py-2 rounded-lg shadow-sm"
                >
                  Перевірити в ЄРАУ
                </a>
              </div>

              {/* Quick stats list */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  'Понад 20 років юридичної практики',
                  'Сотні виграних кримінальних справ',
                  'Особисте ведення кожної справи',
                  'Повна конфіденційність (адвокатська таємниця)'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-3 shrink-0 mt-0.5" />
                    <span className="text-primary-dark font-medium text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Certificates Images */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
                <div className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden rounded-xl shadow-md border border-gray-200 group">
                  <Image 
                    src="/images/certificate-1.png" 
                    fill
                    alt="Свідоцтво адвоката (сторінка 1)" 
                    className="object-contain bg-white group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden rounded-xl shadow-md border border-gray-200 group">
                  <Image 
                    src="/images/certificate-2.png" 
                    fill
                    alt="Свідоцтво адвоката (сторінка 2)" 
                    className="object-contain bg-white group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
          
        </div>
      </div>
    </section>
  );
}
