import React from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, Zap, MapPin, Search } from 'lucide-react';
import { Translation, Language } from '../data/translations';

interface HeroProps {
  t: Translation;
  lang: Language;
  onOpenOrderModal: () => void;
  onScrollToTracking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, lang, onOpenOrderModal, onScrollToTracking }) => {
  const whatsappUrl = `https://wa.me/212682199993?text=${encodeURIComponent(
    lang === 'ar'
      ? 'السلام عليكم سفي إكسبريس، بغيت نطلب خدمة توصيل مستعجلة في أسفي.'
      : 'Bonjour Safi Express Delivery, je souhaite commander une livraison express à Safi.'
  )}`;

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column (or Right if RTL) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Kicker (Zero-Pill Discipline) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-orange-400">
              <span className="uppercase tracking-wider">Safi Express Delivery</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{t.hero.kicker}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-mono">24/7 Operational</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] text-balance">
              {t.hero.title}
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* Official Contact Hotline Pill-Free Callout */}
            <div className="pt-1 pb-1 text-sm text-slate-300 flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-1.5 font-mono text-white">
                <span className="text-slate-400">{t.verification.phoneLabel}:</span>
                <a href="tel:+212682199993" className="text-orange-400 hover:underline font-bold text-base">
                  +212 682-199993
                </a>
              </div>
              <span aria-hidden="true" className="text-slate-700 hidden sm:inline">|</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>الهضبة، شارع مولاي يوسف، أسفي (Plateau)</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-600/30 active:scale-95 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>

              <a
                href="tel:+212682199993"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-orange-600/25 active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>{t.hero.ctaCall}</span>
              </a>

              <button
                onClick={onScrollToTracking}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all whitespace-nowrap"
              >
                <Search className="w-4 h-4 text-orange-400" />
                <span>{t.hero.ctaTrack}</span>
              </button>
            </div>

            {/* Quick Guarantees (Clean unboxed inline list) */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ضمان كامل للبضائع والمبالغ (Cash on Delivery)</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-4 h-4 text-orange-400" />
                <span>استجابة فورية خلال 3 دقائق عبر الواتساب</span>
              </span>
            </div>
          </div>

          {/* Right Visual Carrier: High-Quality Generated Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800 aspect-[16/10] sm:aspect-[16/11]">
              <img
                src="/src/assets/images/hero_safi_courier_1793665736819.jpg"
                alt="Safi Express Delivery Professional Courier in Safi Morocco with Scooter and Thermal Box"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              {/* Subtle gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Verified Dispatch Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">أسطول دراجات نارية وسيارات توصيل بأسفي</div>
                    <div className="text-slate-400 text-[11px]">Yamaha NMax & Express Vans جاهزة في المدينة</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-mono text-[11px] rounded font-medium">
                    24/7 Live
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Claim-to-Proof Adjacency: 4-Column Metric Strip (Section Flow §2.A) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 font-mono tabular-nums">
              {t.hero.stats.speed.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400">
              {t.hero.stats.speed.label}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              {t.hero.stats.availability.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400">
              {t.hero.stats.availability.label}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              {t.hero.stats.coverage.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400">
              {t.hero.stats.coverage.label}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              {t.hero.stats.satisfaction.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400">
              {t.hero.stats.satisfaction.label}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
