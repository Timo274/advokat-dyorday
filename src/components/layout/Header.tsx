'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || pathname !== '/'
          ? 'glass-dark py-2.5 sm:py-3 shadow-lg'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex flex-col items-start group" aria-label="Головна сторінка — Адвокат Дьордяй">
          <span className="text-white font-bold tracking-wider text-lg sm:text-xl md:text-2xl font-serif">
            ДЬОРДЯЙ
          </span>
          <span className="text-accent-gold text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            Адвокат
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Основна навігація">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <div className="flex items-center text-white/90 hover:text-accent-gold transition-colors text-sm font-medium cursor-pointer py-2">
                  {item.label}
                  <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform" />
                  
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-64">
                    <div className="bg-primary-dark/95 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-xl flex flex-col space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-white/80 hover:text-white hover:bg-white/5 px-4 py-2.5 rounded-lg text-sm transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors py-2 relative overflow-hidden group/link ${
                    pathname === item.href
                      ? 'text-accent-gold'
                      : 'text-white/90 hover:text-accent-gold'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent-gold transform origin-left transition-transform duration-300 ${
                    pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'
                  }`} />
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center text-white/90 hover:text-accent-gold transition-colors text-sm font-medium"
            aria-label={`Зателефонувати: ${SITE_CONFIG.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 mr-2 text-accent-gold" />
            {SITE_CONFIG.phoneDisplay}
          </a>
          <Link
            href="/kontakty"
            className="bg-accent-gold text-primary-dark font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-accent-gold-light transition-colors hover:shadow-lg shadow-accent-gold/20"
          >
            Консультація
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 p-2 text-white hover:text-accent-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary-dark pt-20 sm:pt-24 px-6 pb-6 overflow-y-auto"
          >
            <nav className="flex flex-col space-y-4 sm:space-y-6" aria-label="Мобільна навігація">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="flex flex-col">
                      {/* Accordion toggle for submenu */}
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="flex items-center justify-between text-white text-lg sm:text-xl font-medium py-1"
                        aria-expanded={openSubmenu === item.label}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 ${openSubmenu === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {openSubmenu === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col space-y-3 pl-4 mt-3 border-l border-white/10">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-white/80 text-base sm:text-lg font-medium hover:text-accent-gold transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg sm:text-xl font-medium block py-1 ${
                        pathname === item.href ? 'text-accent-gold' : 'text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-6 sm:pt-8 mt-4 sm:mt-8 border-t border-white/10 flex flex-col space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center text-white text-lg sm:text-xl"
                  aria-label={`Зателефонувати: ${SITE_CONFIG.phoneDisplay}`}
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-accent-gold" />
                  {SITE_CONFIG.phoneDisplay}
                </a>
                <Link
                  href="/kontakty"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-accent-gold text-primary-dark font-bold text-center py-3.5 sm:py-4 rounded-xl text-base sm:text-lg mt-4"
                >
                  Отримати консультацію
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
