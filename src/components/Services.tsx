import React from 'react';
import { Utensils, Package, FileText, ShoppingBag, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Translation, Language } from '../data/translations';

interface ServicesProps {
  t: Translation;
  lang: Language;
  onOpenOrderModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ t, lang, onOpenOrderModal }) => {
  const isRtl = lang === 'ar';
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const servicesData = [
    {
      id: 'food',
      number: '01',
      title: t.services.food.title,
      desc: t.services.food.desc,
      features: t.services.food.features,
      image: '/src/assets/images/service_food_delivery_1793665737952.jpg',
      icon: Utensils,
      color: 'orange',
      badge: isRtl ? 'حفظ الحرارة 100%' : 'Caissons Isothermes',
      actionPrompt: isRtl ? 'اطلب توصيل وجبة' : 'Commander un repas',
      whatsappMsg: isRtl
        ? 'السلام عليكم، أريد طلب توصيل وجبة من مطعم في أسفي.'
        : 'Bonjour, je souhaite commander une livraison de restaurant à Safi.',
    },
    {
      id: 'ecommerce',
      number: '02',
      title: t.services.ecommerce.title,
      desc: t.services.ecommerce.desc,
      features: t.services.ecommerce.features,
      image: '/src/assets/images/service_ecommerce_delivery_1793665737216.jpg',
      icon: Package,
      color: 'blue',
      badge: isRtl ? 'تحصيل COD سريع' : 'Paiement à la livraison',
      actionPrompt: isRtl ? 'توصيل طرد أو سلعة' : 'Livrer un colis e-commerce',
      whatsappMsg: isRtl
        ? 'السلام عليكم، عندي طرود وتجارة إلكترونية وأريد خدمة التوصيل وتحصيل الأموال في أسفي.'
        : 'Bonjour, je gère un commerce en ligne et cherche un service de livraison avec encaissement COD à Safi.',
    },
    {
      id: 'documents',
      number: '03',
      title: t.services.documents.title,
      desc: t.services.documents.desc,
      features: t.services.documents.features,
      image: '/src/assets/images/service_urgent_docs_1793665737805.jpg',
      icon: FileText,
      color: 'slate',
      badge: isRtl ? 'تسليم سري وموقع' : 'Plis Confidentiels',
      actionPrompt: isRtl ? 'طلب مراسل مستعجل' : 'Coursier urgent',
      whatsappMsg: isRtl
        ? 'السلام عليكم، أحتاج توصيل وثائق رسمية ومستعجلة في أسفي.'
        : 'Bonjour, j’ai un pli urgent et confidentiel à faire livrer immédiatement à Safi.',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-600 mb-2">
            <span>{isRtl ? 'خدمات التوصيل الأساسية' : 'Services Logistiques'}</span>
            <span aria-hidden="true">·</span>
            <span>Safi Express Delivery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.services.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.services.subheading}
          </p>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            const waUrl = `https://wa.me/212682199993?text=${encodeURIComponent(service.whatsappMsg)}`;

            return (
              <div
                key={service.id}
                className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/90 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Asset Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-white rounded-md">
                      {service.number}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-white/90 backdrop-blur-md text-slate-800 rounded-md shadow-sm">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      <span>{service.actionPrompt}</span>
                      <Arrow className="w-4 h-4" />
                    </a>
                    <span className="font-mono text-xs text-slate-400">
                      24/7 Safi
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4th Special Banner: Urgent Errands & Night Pharmacy */}
        <div className="mt-8 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-1">
                <span>04 · {isRtl ? 'خدمة إضافية عند الطلب' : 'Service Complémentaire'}</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold">
                {t.services.errands.title}
              </h4>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                {t.services.errands.desc}
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/212682199993?text=${encodeURIComponent(
              isRtl
                ? 'السلام عليكم، أحتاج توصيل غرض مستعجل (صيدلية أو سوبرماركت) في أسفي.'
                : 'Bonjour, j’ai besoin d’une course express à Safi.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm whitespace-nowrap shrink-0 transition-colors"
          >
            {isRtl ? 'طلب خدمة قضاء الأغراض' : 'Commander une course'}
          </a>
        </div>

      </div>
    </section>
  );
};
