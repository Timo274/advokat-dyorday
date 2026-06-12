'use client';

import React, { useActionState } from 'react';
import { Phone, Send, MessageCircle, MapPin, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { submitContactForm, ContactFormState } from '@/app/actions/contact';

const initialState: ContactFormState = {
  success: false,
};

export default function CTASection() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <section id="consultation-form" className="py-16 sm:py-20 md:py-32 bg-primary-dark relative overflow-hidden">
      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark pointer-events-none opacity-80" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-30" />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto bg-surface-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Side - Info */}
            <div className="p-6 sm:p-10 md:p-16 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl" />
              
              <AnimatedSection direction="left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                  Потрібна правова <span className="text-gradient-gold">допомога?</span>
                </h2>
                <p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-12">
                  Залиште заявку або зателефонуйте. Я особисто ознайомлюсь з вашою ситуацією та запропоную варіанти вирішення.
                </p>

                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4 sm:mr-6 shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-white/50 uppercase tracking-wider mb-1">Безкоштовна телефонна консультація</p>
                      <a href={`tel:${SITE_CONFIG.phone}`} className="text-xl sm:text-2xl font-bold text-white hover:text-accent-gold transition-colors">
                        {SITE_CONFIG.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4 sm:mr-6 shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-white/50 uppercase tracking-wider mb-1">Адреса офісу</p>
                      <p className="text-base sm:text-lg font-medium text-white">{SITE_CONFIG.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4 sm:mr-6 shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-white/50 uppercase tracking-wider mb-1">Email</p>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="text-base sm:text-lg font-medium text-white hover:text-accent-gold transition-colors">
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={SITE_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#0088cc] hover:bg-[#0077b3] text-white py-3.5 sm:py-4 rounded-xl flex items-center justify-center font-bold transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" /> Telegram
                  </a>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.phone.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 sm:py-4 rounded-xl flex items-center justify-center font-bold transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg> WhatsApp
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Side - Form */}
            <div className="p-6 sm:p-10 md:p-16 bg-white/5 border-t lg:border-t-0 lg:border-l border-white/10">
              <AnimatedSection direction="right" delay={0.2}>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Записатися на консультацію</h3>
                
                {state.success ? (
                  <div className="bg-success/10 border border-success/30 rounded-2xl p-6 sm:p-8 text-center h-full flex flex-col items-center justify-center min-h-[250px] sm:min-h-[300px]">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-success rounded-full flex items-center justify-center mb-4 sm:mb-6">
                      <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Заявку відправлено!</h4>
                    <p className="text-white/70 text-base sm:text-lg">
                      Я зателефоную вам найближчим часом.
                    </p>
                  </div>
                ) : (
                  <form action={formAction} className="space-y-4 sm:space-y-6">
                    {/* Honeypot field — invisible to humans, bots fill it in */}
                    <input
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="absolute left-[-9999px] top-[-9999px] h-0 w-0 opacity-0"
                    />
                    {state.error && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 sm:p-4 flex items-start text-red-400 text-sm">
                        <AlertCircle className="w-5 h-5 mr-3 shrink-0" />
                        <p>{state.error}</p>
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Ваше ім&#39;я</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={`w-full bg-white/5 border ${state.fieldErrors?.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-colors`}
                        placeholder="Олександр"
                      />
                      {state.fieldErrors?.name && (
                        <p className="mt-1 text-xs text-red-400">{state.fieldErrors.name[0]}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">Номер телефону</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className={`w-full bg-white/5 border ${state.fieldErrors?.phone ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-colors`}
                        placeholder="+38 (000) 000-00-00"
                      />
                      {state.fieldErrors?.phone && (
                        <p className="mt-1 text-xs text-red-400">{state.fieldErrors.phone[0]}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white/70 mb-2">Тип справи (необов&#39;язково)</label>
                      <select
                        id="service"
                        name="service"
                        className="w-full bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-colors appearance-none"
                      >
                        <option value="">Оберіть напрямок</option>
                        <option value="criminal">Кримінальне право</option>
                        <option value="tck">Взаємодія з ТЦК</option>
                        <option value="family">Сімейне право</option>
                        <option value="land">Земельні спори</option>
                        <option value="other">Інше</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Короткий опис ситуації (необов&#39;язково)</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-colors resize-none"
                        placeholder="Опишіть ваше питання..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="w-full mt-2 sm:mt-4"
                      disabled={isPending}
                    >
                      {isPending ? 'Відправка...' : 'Відправити заявку'}
                    </Button>
                    
                    <p className="text-xs text-white/40 text-center mt-3 sm:mt-4">
                      Натискаючи кнопку, ви даєте згоду на обробку персональних даних. Конфіденційність гарантовано.
                    </p>
                  </form>
                )}
              </AnimatedSection>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
