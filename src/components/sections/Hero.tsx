'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Send, Shield, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center pt-24 pb-12 overflow-hidden bg-primary-dark animated-gradient"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('/pattern-dark.png')] opacity-5 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent-gold/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="text-white order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 backdrop-blur-sm">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-gold" />
                <span className="text-xs sm:text-sm font-medium tracking-wider text-white/90">Адвокатське бюро</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 leading-tight font-serif tracking-tight text-white drop-shadow-lg">
                АДВОКАТ <br />
                <span className="text-gradient-gold">ДЬОРДЯЙ</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 mb-4 sm:mb-6">
                ІВАН ВАСИЛЬОВИЧ
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 max-w-xl leading-relaxed">
                Надійний правовий захист та представництво ваших інтересів у найскладніших ситуаціях з гарантією результату.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <Button href={`tel:${SITE_CONFIG.phone}`} variant="primary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Безкоштовна консультація
                </Button>
                <Button href={SITE_CONFIG.telegramUrl} variant="secondary" size="lg" className="border-white/20 hover:border-white text-white hover:text-white">
                  <Send className="w-5 h-5 mr-2" />
                  Написати в Telegram
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
                <div className="flex items-center text-white/80">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold mr-1.5 sm:mr-2" />
                  <span className="font-medium text-sm sm:text-base">Свідоцтво №4296</span>
                </div>
                <div className="flex items-center text-white/80">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold mr-1.5 sm:mr-2" />
                  <span className="font-medium text-sm sm:text-base">20+ років досвіду</span>
                </div>
                <div className="flex items-center text-white/80">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold mr-1.5 sm:mr-2" />
                  <span className="font-medium text-sm sm:text-base">Конфіденційність 100%</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 lg:pl-10 relative perspective-1000">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              style={{ y: imageY, scale: imageScale }}
              className="relative w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[500px] mx-auto aspect-[3/4] rounded-2xl overflow-hidden glass-dark border-white/10 group shadow-[0_0_50px_rgba(201,169,110,0.15)] will-change-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent z-10" />
              <Image 
                src="/images/main-hero.jpg" 
                alt="Адвокат Дьордяй Іван Васильович" 
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 500px"
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
              

            </motion.div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
}
