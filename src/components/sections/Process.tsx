'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, FileText, MapPin, Gavel, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { PROCESS_STEPS } from '@/lib/constants';

const IconMap: Record<string, React.ElementType> = {
  Phone,
  MessageSquare,
  FileText,
  MapPin,
  Gavel,
  CheckCircle,
};

export default function Process() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-4 heading-gold-line-center">
            Як ми працюємо
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mt-6">
            Прозорий та зрозумілий процес співпраці на кожному етапі вирішення вашої проблеми.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-accent-gold"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Mobile vertical timeline line */}
          <div className="lg:hidden absolute top-0 left-8 sm:left-10 w-0.5 h-full bg-gray-100" />

          {/* Desktop: 6 columns / Mobile: vertical timeline */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = IconMap[step.icon] || CheckCircle;
              
              return (
                <AnimatedSection 
                  key={index}
                  delay={index * 0.15}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left relative"
                >
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-surface-light shadow-lg flex items-center justify-center mb-6 relative group transition-transform hover:scale-110">
                    <div className="absolute inset-0 rounded-full bg-accent-gold/0 group-hover:bg-accent-gold/10 transition-colors" />
                    <Icon className="w-10 h-10 text-primary group-hover:text-accent-gold transition-colors" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center border-4 border-white shadow-sm text-sm">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden flex flex-col space-y-6 sm:space-y-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = IconMap[step.icon] || CheckCircle;
              
              return (
                <AnimatedSection 
                  key={index}
                  delay={index * 0.1}
                  className="flex items-start gap-4 sm:gap-6 pl-0"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-4 border-surface-light shadow-lg flex items-center justify-center shrink-0 relative">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    <div className="absolute -top-1.5 -right-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center border-3 border-white shadow-sm text-xs">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="pt-2 sm:pt-3">
                    <h3 className="text-lg sm:text-xl font-bold text-primary-dark mb-1.5 sm:mb-2">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
