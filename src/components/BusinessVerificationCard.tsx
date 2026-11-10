import React, { useState } from 'react';
import { ShieldCheck, Phone, Mail, Clock, MapPin, Check, Copy, ExternalLink, Building2, User } from 'lucide-react';
import { Translation, Language } from '../data/translations';

interface BusinessVerificationCardProps {
  t: Translation;
  lang: Language;
}

export const BusinessVerificationCard: React.FC<BusinessVerificationCardProps> = ({ t, lang }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const isRtl = lang === 'ar';

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const googleMapsUrl = 'https://maps.google.com/?q=Safi+Express+Delivery+Safi+Morocco&ll=32.2994,-9.2372&z=15';

  return (
    <section id="verification" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-400 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t.verification.officialProfile}</span>
            <span aria-hidden="true">·</span>
            <span>Google Maps Verified Data</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            {t.verification.heading}
          </h2>
          <p className="mt-2 text-base text-slate-400">
            {t.verification.subheading}
          </p>
        </div>

        {/* Verification Hub Card */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Verification Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-slate-700 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Safi Express Delivery
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <Check className="w-3 h-3" />
                    <span>Verified Business</span>
                  </span>
                </div>
                <div className="text-sm text-orange-400 font-semibold mt-0.5">
                  توصيل أسفي إكسبريس · Service de Livraison à Safi
                </div>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-600 transition-colors"
            >
              <span>{t.verification.mapsButton}</span>
              <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
            </a>
          </div>

          {/* Business Credentials Grid matching Google Maps verification requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 border-b border-slate-700">
            
            {/* Phone Number */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-700/70 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>{t.verification.phoneLabel}</span>
                </span>
                <button
                  onClick={() => copyToClipboard('+212682199993', 'phone')}
                  className="text-slate-400 hover:text-white transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <a
                href="tel:+212682199993"
                className="block text-lg font-bold text-white hover:text-orange-400 font-mono transition-colors"
              >
                +212 682-199993
              </a>
              <p className="text-[11px] text-slate-500">
                {isRtl ? 'اتصال مباشر وواتساب شغال على مدار 24 ساعة' : 'Ligne directe & WhatsApp actif 24h/24'}
              </p>
            </div>

            {/* Email Address */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-700/70 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>{t.verification.emailLabel}</span>
                </span>
                <button
                  onClick={() => copyToClipboard('saidlhamri2001715@gmail.com', 'email')}
                  className="text-slate-400 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <a
                href="mailto:saidlhamri2001715@gmail.com"
                className="block text-sm sm:text-base font-bold text-white hover:text-orange-400 font-mono transition-colors break-all"
              >
                saidlhamri2001715@gmail.com
              </a>
              <p className="text-[11px] text-slate-500">
                {isRtl ? 'البريد الإلكتروني الرسمي لتوثيق المنشأة' : 'E-mail professionnel pour facturation et contrats'}
              </p>
            </div>

            {/* Operating Hours */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-700/70 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>{t.verification.hoursLabel}</span>
                </span>
                <span className="font-mono text-[11px] text-emerald-400 font-bold">24/7 Open</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-white">
                {t.hours}
              </div>
              <p className="text-[11px] text-slate-500">
                {isRtl ? 'طيلة أيام الأسبوع (من الإثنين إلى الأحد دون انقطاع)' : '7 jours sur 7 sans interruption'}
              </p>
            </div>

            {/* Registered Physical Address */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-700/70 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>{t.verification.addressLabel}</span>
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      'Boulevard Moulay Youssef, Plateau, 46000 Safi, Morocco',
                      'address'
                    )
                  }
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {copiedField === 'address' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                {isRtl
                  ? 'شارع مولاي يوسف، الهضبة (Plateau)، أسفي 46000، المغرب'
                  : 'Boulevard Moulay Youssef, Plateau, 46000 Safi, Maroc'}
              </div>
              <p className="text-[11px] text-slate-500 font-mono">
                Geo: 32.2994° N, 9.2372° W · Safi, Morocco
              </p>
            </div>

            {/* Service Area */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-700/70 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{t.verification.coverageLabel}</span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono">100% Safi</span>
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                {isRtl
                  ? 'كل أحياء أسفي: الهضبة، الكورس، بيوكي، سيدي بوزيد، المدينة القديمة، جنوب وشمال أسفي'
                  : 'Tous les quartiers : Le Plateau, Al Kours, Biouki, Sidi Bouzid, Médina, Safi Sud & Nord'}
              </div>
              <p className="text-[11px] text-slate-500">
                {isRtl ? 'توصيل فوري مباشر لباب المنزل والمكتب' : 'Livraison directe à domicile et au bureau'}
              </p>
            </div>

            {/* Representative Manager */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-700/70 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-orange-400" />
                  <span>{isRtl ? 'المسؤول الإداري والتنفيذي' : 'Responsable d’Exploitation'}</span>
                </span>
                <span className="text-[11px] text-slate-400">Said Lhamri</span>
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                Said Lhamri (سعيد العمري)
              </div>
              <p className="text-[11px] text-slate-500">
                {isRtl ? 'إدارة العمليات واللوجستيك الميداني بأسفي' : 'Direction des opérations & flotte de coursiers'}
              </p>
            </div>

          </div>

          {/* Bottom Action Footer for Google Reviewers & Customers */}
          <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              <span className="text-slate-300 font-medium">
                Google Business Profile Verification Ref:
              </span>{' '}
              <span className="font-mono text-orange-400">SF-MAPS-MA-46000-2026</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:+212682199993"
                className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{isRtl ? 'اتصال مباشر' : 'Appeler'}</span>
              </a>
              <a
                href="mailto:saidlhamri2001715@gmail.com"
                className="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{isRtl ? 'مراسلة عبر الإيميل' : 'Envoyer un Email'}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
