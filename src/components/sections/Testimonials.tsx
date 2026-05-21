'use client';

import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card from '@/components/ui/Card';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-surface-light relative overflow-hidden">
      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-4 heading-gold-line-center">
            Відгуки клієнтів
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mt-6">
            Реальні історії людей, чиї права були успішно захищені. Задля збереження конфіденційності вказані лише ініціали клієнтів.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.id}
              delay={index * 0.15}
            >
              <Card className="h-full relative overflow-hidden">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-surface-light opacity-50 rotate-180" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-gold fill-current" />
                  ))}
                </div>
                
                <p className="text-primary-dark text-lg leading-relaxed mb-8 italic relative z-10">
                  "{testimonial.text}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-primary-dark text-lg">{testimonial.name}</h4>
                    <span className="text-sm text-text-secondary">{testimonial.caseType}</span>
                  </div>
                  <div className="flex items-center text-success bg-success/10 px-3 py-1 rounded-full text-xs font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                    Клієнт
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
