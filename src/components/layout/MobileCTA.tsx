'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Send, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 w-full z-40 md:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200 p-2.5 sm:p-3 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between gap-2 max-w-sm mx-auto">
              
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex-1 flex flex-col items-center justify-center py-2.5 px-1 bg-success text-white rounded-xl active:scale-95 transition-transform"
                aria-label="Зателефонувати адвокату"
              >
                <Phone className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-medium">Зателефонувати</span>
              </a>
              
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex flex-col items-center justify-center py-2.5 px-1 bg-[#0088cc] text-white rounded-xl active:scale-95 transition-transform"
                aria-label="Написати в Telegram"
              >
                <Send className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-medium">Telegram</span>
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.phone.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex flex-col items-center justify-center py-2.5 px-1 bg-[#25D366] text-white rounded-xl active:scale-95 transition-transform"
                aria-label="Написати в WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mb-1"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                <span className="text-[10px] font-medium">WhatsApp</span>
              </a>
              
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
