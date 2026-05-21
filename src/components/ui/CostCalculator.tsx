'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ChevronRight, Check } from 'lucide-react';

const CALC_OPTIONS = {
  categories: [
    { id: 'criminal', label: 'Кримінальні справи', basePrice: 40000 },
    { id: 'tck', label: 'Питання мобілізації / ТЦК', basePrice: 25000 },
    { id: 'family', label: 'Сімейні спори', basePrice: 15000 },
    { id: 'civil', label: 'Цивільні / Майнові спори', basePrice: 20000 },
  ],
  stages: [
    { id: 'consult', label: 'Тільки детальна консультація', multiplier: 0, addPrice: 2000 },
    { id: 'docs', label: 'Підготовка документів (позов, скарга)', multiplier: 0.3, addPrice: 0 },
    { id: 'full', label: 'Повний супровід справи в суді', multiplier: 1, addPrice: 0 },
  ],
  urgency: [
    { id: 'normal', label: 'В звичайному порядку', multiplier: 1 },
    { id: 'urgent', label: 'Терміново (виїзд адвоката негайно)', multiplier: 1.5 },
  ]
};

export default function CostCalculator() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    category: '',
    stage: '',
    urgency: 'normal'
  });

  const calculatePrice = () => {
    if (!selections.category || !selections.stage) return 0;
    
    const category = CALC_OPTIONS.categories.find(c => c.id === selections.category);
    const stage = CALC_OPTIONS.stages.find(s => s.id === selections.stage);
    const urgency = CALC_OPTIONS.urgency.find(u => u.id === selections.urgency);
    
    if (!category || !stage || !urgency) return 0;

    let total = 0;
    if (stage.addPrice > 0) {
      total = stage.addPrice;
    } else {
      total = category.basePrice * stage.multiplier;
    }
    
    return total * urgency.multiplier;
  };

  const handleSelect = (key: string, value: string) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const estimatedPrice = calculatePrice();

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-2xl mx-auto">
      <div className="bg-primary-dark p-6 flex items-center text-white">
        <Calculator className="w-6 h-6 text-accent-gold mr-3" />
        <h3 className="text-xl font-bold">Орієнтовний калькулятор вартості</h3>
      </div>

      <div className="p-6 md:p-8">
        {/* Progress indicator */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((num) => (
            <React.Fragment key={num}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                step >= num ? 'bg-accent-gold text-primary-dark' : 'bg-gray-100 text-gray-400'
              }`}>
                {step > num ? <Check className="w-4 h-4" /> : num}
              </div>
              {num < 3 && (
                <div className={`flex-1 h-1 mx-2 rounded-full transition-colors ${
                  step > num ? 'bg-accent-gold' : 'bg-gray-100'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="min-h-[250px] relative">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3"
              >
                <h4 className="font-bold text-lg mb-4 text-primary-dark">Яка категорія справи вас цікавить?</h4>
                {CALC_OPTIONS.categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { handleSelect('category', cat.id); nextStep(); }}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex justify-between items-center ${
                      selections.category === cat.id 
                        ? 'border-accent-gold bg-accent-gold/5 ring-1 ring-accent-gold' 
                        : 'border-gray-200 hover:border-accent-gold/50 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium text-primary-dark">{cat.label}</span>
                    <ChevronRight className={`w-5 h-5 ${selections.category === cat.id ? 'text-accent-gold' : 'text-gray-400'}`} />
                  </button>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3"
              >
                <h4 className="font-bold text-lg mb-4 text-primary-dark">Який обсяг допомоги потрібен?</h4>
                {CALC_OPTIONS.stages.map(stage => (
                  <button
                    key={stage.id}
                    onClick={() => { handleSelect('stage', stage.id); nextStep(); }}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex justify-between items-center ${
                      selections.stage === stage.id 
                        ? 'border-accent-gold bg-accent-gold/5 ring-1 ring-accent-gold' 
                        : 'border-gray-200 hover:border-accent-gold/50 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium text-primary-dark">{stage.label}</span>
                    <ChevronRight className={`w-5 h-5 ${selections.stage === stage.id ? 'text-accent-gold' : 'text-gray-400'}`} />
                  </button>
                ))}
                <button onClick={() => setStep(1)} className="text-sm text-text-secondary hover:text-primary mt-4 inline-block">
                  ← Назад
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h4 className="font-bold text-lg mb-4 text-primary-dark">Наскільки термінове питання?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {CALC_OPTIONS.urgency.map(urg => (
                    <button
                      key={urg.id}
                      onClick={() => handleSelect('urgency', urg.id)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        selections.urgency === urg.id 
                          ? 'border-accent-gold bg-accent-gold/5 ring-1 ring-accent-gold' 
                          : 'border-gray-200 hover:border-accent-gold/50 hover:bg-gray-50'
                      }`}
                    >
                      <span className="font-medium text-primary-dark block mb-1">{urg.label}</span>
                    </button>
                  ))}
                </div>

                <div className="bg-surface-light p-6 rounded-xl border border-gray-200 mt-6 text-center">
                  <p className="text-text-secondary text-sm uppercase tracking-widest font-semibold mb-2">Орієнтовна вартість</p>
                  <div className="text-4xl font-serif text-accent-gold font-bold mb-2">
                    {estimatedPrice > 0 ? `від ${estimatedPrice.toLocaleString('uk-UA')} ₴` : '—'}
                  </div>
                  <p className="text-xs text-text-secondary italic">
                    * Це попередня оцінка. Точна вартість формується лише після вивчення матеріалів вашої справи.
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <button onClick={() => setStep(2)} className="text-sm text-text-secondary hover:text-primary">
                    ← Назад
                  </button>
                  <a href="#consultation-form" className="bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary transition-colors">
                    Отримати точну ціну
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
