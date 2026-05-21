'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Scale, FileCheck, Users, Map, Building, Briefcase, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { SERVICES } from '@/lib/constants';
import Link from 'next/link';

// Map icon strings to actual Lucide components
const IconMap: Record<string, React.ElementType> = {
  Shield,
  Scale,
  FileCheck,
  Users,
  Map,
  Building,
  Briefcase,
};

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="poslugy" className="py-16 sm:py-20 md:py-32 bg-white relative">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-4 heading-gold-line-center">
            Напрямки практики
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mt-6">
            Комплексний правовий захист у ключових галузях права. Багаторічний досвід та індивідуальний підхід до кожної справи.
          </p>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {SERVICES.map((service, index) => {
            const Icon = IconMap[service.icon] || Shield;
            
            const cardClasses = `service-card group cursor-pointer h-full flex flex-col`;

            return (
              <motion.div key={service.slug} variants={itemVariants}>
                <Link href={`/poslugy/${service.slug}`} className="w-full h-full block">
                  <Card className={cardClasses} hover={true}>
                    <div className="w-16 h-16 rounded-2xl bg-primary-dark/5 flex items-center justify-center mb-6 group-hover:bg-accent-gold group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Icon className="w-8 h-8 text-primary-dark group-hover:text-primary-dark transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-4 group-hover:text-accent-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-text-secondary mb-8 flex-grow line-clamp-3 group-hover:text-primary-dark/80 transition-colors">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto pt-6 border-t border-gray-100 gap-4">
                      <span className="inline-flex items-center justify-center bg-surface-light px-3 py-1.5 rounded-lg text-sm font-bold text-primary-dark">
                        {service.price}
                      </span>
                      <span className="inline-flex items-center justify-center bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-bold group-hover:bg-accent-gold group-hover:text-primary-dark transition-all duration-300 transform group-hover:translate-x-1">
                        Детальніше <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
