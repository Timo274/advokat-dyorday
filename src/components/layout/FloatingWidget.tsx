'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, X, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop (mobile has MobileCTA)
    const checkVisibility = () => {
      if (window.innerWidth >= 768 && window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    
    checkVisibility();
    
    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col items-end"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-64"
              >
                <div className="bg-primary-dark p-4 text-white">
                  <h4 className="font-bold mb-1">Зв&apos;язатися з адвокатом</h4>
                  <p className="text-xs text-white/70">Відповім протягом 15 хвилин</p>
                </div>
                
                <div className="p-2 flex flex-col space-y-1">
                  <a
                    href={SITE_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0088cc]/10 flex items-center justify-center mr-3 group-hover:bg-[#0088cc] transition-colors">
                      <Send className="w-5 h-5 text-[#0088cc] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary-dark">Telegram</div>
                      <div className="text-xs text-text-secondary">@ivan19771</div>
                    </div>
                  </a>
                  
                  <a
                    href={`https://wa.me/${SITE_CONFIG.phone.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center mr-3 group-hover:bg-[#25D366] transition-colors">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary-dark">WhatsApp</div>
                      <div className="text-xs text-text-secondary">Написати повідомлення</div>
                    </div>
                  </a>
                  
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center mr-3 group-hover:bg-success transition-colors">
                      <Phone className="w-5 h-5 text-success group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary-dark">Зателефонувати</div>
                      <div className="text-xs text-text-secondary">{SITE_CONFIG.phoneDisplay}</div>
                    </div>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 rounded-full bg-accent-gold text-primary-dark flex items-center justify-center shadow-lg shadow-accent-gold/30 hover:scale-105 active:scale-95 transition-all"
            aria-label="Contact options"
          >
            {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
            
            {/* Pulse effect when closed */}
            {!isOpen && (
              <span className="absolute w-full h-full rounded-full border-2 border-accent-gold animate-ping opacity-20" />
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
