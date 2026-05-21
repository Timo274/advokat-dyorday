'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate Schema.org JSON-LD for FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-white relative">
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <AnimatedSection>
              <div className="w-16 h-16 rounded-2xl bg-surface-light flex items-center justify-center mb-8">
                <HelpCircle className="w-8 h-8 text-accent-gold" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-4 sm:mb-6 heading-gold-line">
                Часті питання
              </h2>
              <p className="text-text-secondary text-base sm:text-lg mb-6 sm:mb-8">
                Знайдіть відповіді на найпоширеніші запитання щодо послуг, вартості та процесу співпраці.
              </p>
              
              <div className="p-6 bg-surface-light rounded-2xl border border-gray-100">
                <h4 className="font-bold text-primary-dark mb-2">Не знайшли відповідь?</h4>
                <p className="text-sm text-text-secondary mb-4">
                  Зателефонуйте мені прямо зараз для безкоштовної консультації.
                </p>
                <a href="tel:+380965077172" className="text-primary font-bold hover:text-accent-gold transition-colors">
                  +38 096 507 71 72
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <div 
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen ? 'border-accent-gold shadow-md bg-white' : 'border-gray-200 bg-white hover:border-accent-gold/50'
                      }`}
                    >
                      <button
                        className="w-full px-6 py-5 flex items-center justify-between focus:outline-none text-left"
                        onClick={() => toggleItem(index)}
                        aria-expanded={isOpen}
                      >
                        <span className={`text-lg font-bold pr-8 ${isOpen ? 'text-primary-dark' : 'text-primary-dark/80'}`}>
                          {item.question}
                        </span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen ? 'bg-accent-gold text-white' : 'bg-surface-light text-text-secondary'
                        }`}>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-2 text-text-secondary leading-relaxed border-t border-gray-100 mx-6 mt-2">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
