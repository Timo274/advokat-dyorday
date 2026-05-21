import React from 'react';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card from '@/components/ui/Card';
import { Scale, CheckCircle, Clock } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Кейси та результати — Успішні справи адвоката Дьордяй у Києві',
  description: 'Реальні приклади з практики адвоката Дьордяй І.В. Закриття кримінальних справ, оскарження рішень ВЛК та ТЦК, поділ майна, земельні спори. 98% справ завершуються на користь клієнта.',
  alternates: {
    canonical: `https://${SITE_CONFIG.domain}/keysy`,
  },
  openGraph: {
    title: 'Кейси та результати | Адвокат Дьордяй І.В.',
    description: 'Понад 1000 успішно завершених справ. Реальні приклади з практики адвоката.',
    url: `https://${SITE_CONFIG.domain}/keysy`,
    type: 'website',
  },
};

const CASES = [
  {
    id: 1,
    title: 'Закриття кримінального провадження — повна реабілітація клієнта',
    category: 'Кримінальне право',
    description: 'Клієнта підозрювали у вчиненні тяжкого злочину. Після ретельного аналізу доказів та проведення адвокатського розслідування було доведено фальсифікацію матеріалів справи.',
    result: 'Справу закрито за відсутністю складу злочину. Клієнта повністю реабілітовано.',
    duration: '8 місяців',
  },
  {
    id: 2,
    title: 'Визнання незаконним рішення ВЛК — оскарження через суд',
    category: 'Взаємодія з ТЦК',
    description: 'Клієнт, маючи серйозні хронічні захворювання, був визнаний ВЛК придатним до військової служби. Ми оскаржили це рішення в судовому порядку.',
    result: 'Рішення ВЛК скасовано судом, призначено повторну експертизу, яка підтвердила непридатність.',
    duration: '4 місяці',
  },
  {
    id: 3,
    title: 'Поділ спільного майна подружжя — захист прихованих активів',
    category: 'Сімейне право',
    description: 'Спір щодо поділу бізнесу та нерухомості при розлученні. Інша сторона намагалася приховати активи, переоформивши їх на третіх осіб.',
    result: 'Суд визнав право власності клієнта на 50% усіх активів, включаючи приховані. Укладено вигідну мирову угоду.',
    duration: '11 місяців',
  },
  {
    id: 4,
    title: 'Захист права власності на земельну ділянку від незаконного вилучення',
    category: 'Земельні спори',
    description: 'Орган місцевого самоврядування незаконно вилучив земельну ділянку клієнта на користь забудовника.',
    result: 'Рішення міськради визнано протиправним та скасовано. Право власності клієнта відновлено, стягнуто моральну шкоду.',
    duration: '1.5 роки',
  },
];

// JSON-LD for cases page
const casesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      name: 'Успішні кейси адвоката Дьордяй І.В.',
      description: 'Приклади успішно завершених справ з практики адвоката',
      numberOfItems: CASES.length,
      itemListElement: CASES.map((caseItem, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          name: caseItem.title,
          description: caseItem.description,
          author: {
            '@type': 'Person',
            name: 'Дьордяй Іван Васильович',
          },
          about: caseItem.category,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Головна',
          item: `https://${SITE_CONFIG.domain}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Кейси',
          item: `https://${SITE_CONFIG.domain}/keysy`,
        },
      ],
    },
  ],
};

export default function CasesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(casesJsonLd) }}
      />
      <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-surface-light">
        <div className="container-custom">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <Breadcrumbs />
          </div>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4 sm:mb-6 heading-gold-line-center">
              Кейси та результати
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary">
              Понад 1000 успішно завершених справ. Ось деякі приклади з моєї практики (деталі змінені задля адвокатської таємниці).
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {CASES.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <article>
                  <Card className="h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0 mb-4 sm:mb-6">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="flex items-center text-text-secondary text-xs sm:text-sm font-medium">
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
                        {item.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-lg sm:text-2xl font-bold text-primary-dark mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {item.description}
                    </p>
                    
                    <div className="mt-auto bg-success/5 border border-success/20 p-4 sm:p-5 rounded-xl flex items-start">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success shrink-0 mr-3 mt-0.5" />
                      <div>
                        <span className="block font-bold text-primary-dark mb-1 text-sm sm:text-base">Результат:</span>
                        <span className="text-success font-medium leading-tight text-sm sm:text-base">{item.result}</span>
                      </div>
                    </div>
                  </Card>
                </article>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={0.4} className="text-center">
            <div className="inline-flex items-center justify-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
              <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-accent-gold mr-4 sm:mr-6 shrink-0" />
              <p className="text-left text-text-secondary font-medium italic text-sm sm:text-base">
                &quot;Кожна справа унікальна. Зверніться за консультацією, і ми розробимо стратегію захисту саме для вашої ситуації з урахуванням останньої судової практики.&quot;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <CTASection />
    </>
  );
}
