import React from 'react';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Контакти адвоката Дьордяй у Києві — Телефон, адреса, Telegram',
  description: 'Зв\'яжіться з адвокатом Дьордяй Іваном Васильовичем для отримання правової допомоги в Києві. ☎ (096) 507 71 72. Адреса: вул. Богдана Хмельницького, 66, оф. 1. Telegram, WhatsApp. Безкоштовна перша консультація.',
  alternates: {
    canonical: `https://${SITE_CONFIG.domain}/kontakty`,
  },
};

export default function ContactPage() {
  // JSON-LD for contact page
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Контакти адвоката Дьордяй І.В.',
    description: 'Контактна інформація адвоката Дьордяй Івана Васильовича в Києві',
    url: `https://${SITE_CONFIG.domain}/kontakty`,
    mainEntity: {
      '@type': 'Attorney',
      name: 'Дьордяй Іван Васильович',
      telephone: '+380965077172',
      email: 'dordavan@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'вул. Богдана Хмельницького, 66, оф. 1',
        addressLocality: 'Київ',
        addressRegion: 'Київська область',
        postalCode: '01030',
        addressCountry: 'UA',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-surface-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-dark/5 -skew-x-12 transform translate-x-20 pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <Breadcrumbs />
          </div>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4 sm:mb-6 heading-gold-line-center">
              Контакти
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary">
              Зв&#39;яжіться зі мною будь-яким зручним для вас способом для отримання оперативної правової допомоги.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <AnimatedSection delay={0.1} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent-gold/10 flex items-center justify-center mb-4 sm:mb-6">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold" />
              </div>
              <h3 className="font-bold text-primary-dark text-base sm:text-lg mb-2">Телефон</h3>
              <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4">Щоденно, в робочий час</p>
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-primary font-bold hover:text-accent-gold transition-colors text-base sm:text-lg mt-auto">
                {SITE_CONFIG.phoneDisplay}
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent-gold/10 flex items-center justify-center mb-4 sm:mb-6">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold" />
              </div>
              <h3 className="font-bold text-primary-dark text-base sm:text-lg mb-2">Email</h3>
              <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4">Для документів та запитів</p>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary font-medium hover:text-accent-gold transition-colors mt-auto text-sm sm:text-base break-all">
                {SITE_CONFIG.email}
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent-gold/10 flex items-center justify-center mb-4 sm:mb-6">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold" />
              </div>
              <h3 className="font-bold text-primary-dark text-base sm:text-lg mb-2">Офіс</h3>
              <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4">Зустрічі за попереднім записом</p>
              <p className="text-primary font-medium mt-auto text-sm sm:text-base">
                {SITE_CONFIG.address}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent-gold/10 flex items-center justify-center mb-4 sm:mb-6">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold" />
              </div>
              <h3 className="font-bold text-primary-dark text-base sm:text-lg mb-2">Месенджери</h3>
              <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4">Екстрений зв&#39;язок 24/7</p>
              <div className="flex gap-4 mt-auto">
                <a href={SITE_CONFIG.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-[#0088cc] hover:opacity-80 transition-opacity" aria-label="Telegram">
                  <Send className="w-6 h-6" />
                </a>
                <a href={`https://wa.me/${SITE_CONFIG.phone.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:opacity-80 transition-opacity" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Google Maps */}
          <AnimatedSection delay={0.5} className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-200">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5!2d30.5134!3d50.4468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf1b0c0b0001%3A0x0!2z0LLRg9C7LiDQkdC-0LPQtNCw0L3QsCDQpdC80LXQu9GM0L3QuNGG0YzQutC-0LPQviwgNjYsINCa0LjRl9Cy!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Офіс адвоката Дьордяй І.В. на карті — вул. Богдана Хмельницького, 66, Київ"
              />
            </div>
            <div className="bg-white p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-accent-gold mr-2 shrink-0" />
                <span className="text-primary-dark font-medium text-sm sm:text-base">{SITE_CONFIG.address}</span>
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE_CONFIG.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-semibold text-sm hover:text-accent-gold transition-colors"
              >
                Побудувати маршрут <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <CTASection />
    </>
  );
}
