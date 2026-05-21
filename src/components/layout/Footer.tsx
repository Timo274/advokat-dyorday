import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-primary-dark pt-12 sm:pt-16 pb-8 border-t-2 border-accent-gold relative overflow-hidden" role="contentinfo">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-12 sm:mb-16">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex flex-col items-start mb-4 sm:mb-6" aria-label="Головна сторінка">
              <span className="text-white font-bold tracking-wider text-2xl font-serif">
                ДЬОРДЯЙ
              </span>
              <span className="text-accent-gold text-sm font-semibold tracking-widest uppercase">
                Адвокат
              </span>
            </Link>
            <p className="text-white/70 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              {SITE_CONFIG.tagline}. Понад 20 років досвіду у сфері права.
            </p>
            <div className="flex flex-col space-y-2 text-white/60 text-sm">
              <span>{SITE_CONFIG.license}</span>
              <span>Видане {SITE_CONFIG.licenseDate}</span>
              <span className="text-xs">{SITE_CONFIG.licenseOrg}</span>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="lg:col-span-1" aria-label="Навігація сайту">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Навігація</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-accent-gold transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold/50 mr-2 group-hover:bg-accent-gold transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="lg:col-span-1" aria-label="Послуги">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Практики</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.find(i => i.label === 'Послуги')?.children?.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-accent-gold transition-colors text-sm line-clamp-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Контакти</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start text-white/80 hover:text-accent-gold transition-colors text-sm group"
                >
                  <Phone className="w-5 h-5 mr-3 text-accent-gold/70 group-hover:text-accent-gold shrink-0 mt-0.5" />
                  <span>
                    <span className="block font-medium text-white">{SITE_CONFIG.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center text-white/80 hover:text-accent-gold transition-colors text-sm group"
                >
                  <Mail className="w-5 h-5 mr-3 text-accent-gold/70 group-hover:text-accent-gold shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <div className="flex items-start text-white/80 text-sm">
                  <MapPin className="w-5 h-5 mr-3 text-accent-gold/70 shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.address}</span>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex space-x-3">
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0088cc] hover:text-white transition-all"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.phone.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#25D366] hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/40 text-xs text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Адвокат {SITE_CONFIG.fullName}. Всі права захищені.
          </p>
          <div className="flex space-x-6">
            <Link href="/polityka-konfidentsiynosti" className="text-white/40 hover:text-white text-xs transition-colors">
              Політика конфіденційності
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
