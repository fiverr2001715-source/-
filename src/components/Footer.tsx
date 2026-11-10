import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, ShieldCheck, Heart, FileText } from 'lucide-react';
import { Translation, Language } from '../data/translations';

interface FooterProps {
  t: Translation;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ t, lang }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const isRtl = lang === 'ar';

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-sm">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18.5" cy="17.5" r="3.5" />
                  <circle cx="5.5" cy="17.5" r="3.5" />
                  <circle cx="15" cy="5" r="1" />
                  <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight block">
                  Safi Express Delivery
                </span>
                <span className="text-xs text-orange-400 font-semibold block">
                  توصيل أسفي إكسبريس · Livraison Rapide
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {isRtl
                ? 'الشركة المحلية المعتمدة والرائدة في خدمات التوصيل السريع بمدينة أسفي. نوفر حلولاً لوجستية احترافية للمطاعم، المتاجر الإلكترونية، وأصحاب الأعمال مع الالتزام التام بالسرية والأمانة والمواعيد الدقيقة.'
                : 'Société locale certifiée de livraison express à Safi. Solutions logistiques fiables pour restaurants, e-commerçants et professionnels avec encaissement COD et coursiers dédiés.'}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>
                {isRtl ? 'موثق على خرائط جوجل Google Maps Business' : 'Vérifié sur Google Maps Business Profile'}
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  {t.nav.services} (مطاعم، طرود، وثائق)
                </a>
              </li>
              <li>
                <a href="#rates" className="hover:text-orange-400 transition-colors">
                  {t.nav.pricing} (حاسبة الأسعار الفورية)
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-orange-400 transition-colors">
                  {t.nav.coverage} (أحياء مدينة أسفي)
                </a>
              </li>
              <li>
                <a href="#tracking" className="hover:text-orange-400 transition-colors">
                  {t.nav.tracking} (تتبع الطلبيات)
                </a>
              </li>
              <li>
                <a href="#verification" className="hover:text-orange-400 transition-colors">
                  {t.nav.contact} (بيانات التحقق الرسمية)
                </a>
              </li>
            </ul>
          </div>

          {/* Real Contact & NAP matching Google Maps (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">
                    {t.address}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Code Postal: 46000 · Safi, Maroc
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href="tel:+212682199993"
                  className="font-mono text-white hover:text-orange-400 font-bold transition-colors"
                >
                  +212 682-199993
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href="mailto:saidlhamri2001715@gmail.com"
                  className="font-mono text-white hover:text-orange-400 transition-colors break-all text-xs"
                >
                  saidlhamri2001715@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-emerald-400 font-medium font-mono">
                  {t.hours}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar with Copyright & Policies */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>{t.footer.copyright}</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-slate-300 transition-colors"
            >
              {t.footer.privacy}
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setShowTermsModal(true)}
              className="hover:text-slate-300 transition-colors"
            >
              {t.footer.terms}
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm text-slate-900">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 max-h-[80vh] overflow-y-auto" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>{t.footer.privacy} - Safi Express Delivery</span>
            </h3>
            <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
              <p>
                نحن في «توصيل أسفي إكسبريس» نحترم خصوصية بيانات زبنائنا وشركائنا التجاريين. لا نستخدم أرقام الهواتف أو العناوين إلا لغرض تنفيذ مهام التوصيل اللوجستي والتنسيق المباشر بين السائق والمرسل إليه.
              </p>
              <p>
                لا يتم مشاركة أي معلومات شخصية مع أي جهات خارجية، وتُحفظ كشوفات التحصيل المالي (Cash on Delivery) بسرية وأمان وفق المعايير والقوانين المعمول بها في المملكة المغربية.
              </p>
            </div>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold"
            >
              {isRtl ? 'إغلاق' : 'Fermer'}
            </button>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm text-slate-900">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 max-h-[80vh] overflow-y-auto" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-600" />
              <span>{t.footer.terms} - Safi Express Delivery</span>
            </h3>
            <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
              <p>
                تلتزم شركة سفي إكسبريس بتقديم خدمات نقل وتوصيل البضائع، الأطعمة والوثائق المسموح بها قانونياً داخل النطاق الجغرافي المحدد لمدينة أسفي وضواحيها.
              </p>
              <p>
                يتم تسليم المبالغ المحصلة (COD) للمتاجر الإلكترونية في نفس اليوم أو حسب الاتفاق التجاري المبرم، مع توفير وصولات تسليم موقعة.
              </p>
            </div>
            <button
              onClick={() => setShowTermsModal(false)}
              className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold"
            >
              {isRtl ? 'إغلاق' : 'Fermer'}
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
