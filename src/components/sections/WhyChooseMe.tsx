'use client';

import React from 'react';
import { ShieldCheck, CreditCard, UserCheck } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card from '@/components/ui/Card';
import { USP_ITEMS } from '@/lib/constants';

const IconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  CreditCard,
  UserCheck,
};

export default function WhyChooseMe() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-surface-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('/pattern-dark.png')] opacity-5" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 heading-gold-line-center">
            Чому клієнти обирають мене
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mt-6">
            Мої принципи роботи побудовані на прозорості, професіоналізмі та гарантії результату.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {USP_ITEMS.map((item, index) => {
            const Icon = IconMap[item.icon] || ShieldCheck;
            
            return (
              <AnimatedSection 
                key={index} 
                delay={index * 0.2}
                direction="up"
                className="h-full"
              >
                <Card dark glass className="h-full text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center mb-8">
                    <Icon className="w-8 h-8 text-accent-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
