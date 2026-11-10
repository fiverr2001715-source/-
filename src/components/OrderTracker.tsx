import React, { useState } from 'react';
import { Search, Package, CheckCircle2, Clock, MapPin, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { Translation, Language } from '../data/translations';
import { MOCK_ORDERS, MockTrackOrder } from '../data/neighborhoods';

interface OrderTrackerProps {
  t: Translation;
  lang: Language;
}

export const OrderTracker: React.FC<OrderTrackerProps> = ({ t, lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentOrder, setCurrentOrder] = useState<MockTrackOrder | null>(MOCK_ORDERS['SF-8821']);
  const [notFound, setNotFound] = useState(false);

  const isRtl = lang === 'ar';

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanQuery = searchQuery.trim().toUpperCase();
    if (!cleanQuery) return;

    if (MOCK_ORDERS[cleanQuery]) {
      setCurrentOrder(MOCK_ORDERS[cleanQuery]);
      setNotFound(false);
    } else {
      // Generate a dynamic tracked delivery simulation for realistic user codes
      setCurrentOrder({
        code: cleanQuery,
        type: 'parcel',
        client: isRtl ? 'طلبية شحنة خاصة' : 'Colis Express Particulier',
        origin: isRtl ? 'الهضبة، أسفي' : 'Plateau, Safi',
        destination: isRtl ? 'الكورس، أسفي' : 'Al Kours, Safi',
        status: 'in_transit',
        rider: isRtl ? 'سعيد العمري (Rider Said)' : 'Said Lhamri (Livreur Express)',
        riderPhone: '+212682199993',
        timeRemaining: isRtl ? '20 دقيقة متبقية' : '20 min restantes',
        timeline: [
          { time: '14:10', text: isRtl ? 'استلام الطرد من نقطة الإرسال' : 'Colis récupéré au point relais', completed: true },
          { time: '14:25', text: isRtl ? 'في الطريق مع دراجة التوصيل' : 'En transit avec livreur moto', completed: true },
          { time: '14:45', text: isRtl ? 'الوصول إلى الوجهة المحددة' : 'Arrivée à destination prévue', completed: false },
        ],
      });
      setNotFound(false);
    }
  };

  const handleSelectSample = (code: string) => {
    setSearchQuery(code);
    setCurrentOrder(MOCK_ORDERS[code]);
    setNotFound(false);
  };

  return (
    <section id="tracking" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 mb-2">
            <span>Safi Express Live Tracking</span>
            <span aria-hidden="true">·</span>
            <span>{isRtl ? 'تتبع فوري 24/7' : 'Suivi en direct'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t.tracking.heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            {t.tracking.subheading}
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="relative flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.tracking.placeholder}
                className="w-full h-13 pl-11 pr-4 bg-slate-800/90 text-white rounded-xl border border-slate-700 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm font-mono placeholder:text-slate-500 transition-colors"
              />
              <Search className="w-5 h-5 text-slate-400 absolute top-4 left-3.5 pointer-events-none" />
            </div>
            <button
              type="submit"
              className="h-13 px-6 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap active:scale-95 shadow-md shadow-orange-600/30"
            >
              <span>{t.tracking.button}</span>
            </button>
          </form>

          {/* Sample quick buttons */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400 justify-center">
            <span>{t.tracking.samplePrompt}</span>
            <button
              onClick={() => handleSelectSample('SF-8821')}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-orange-400 rounded-md font-mono border border-slate-700 transition-colors"
            >
              SF-8821 (مطعم Atlas)
            </button>
            <button
              onClick={() => handleSelectSample('SF-9430')}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-orange-400 rounded-md font-mono border border-slate-700 transition-colors"
            >
              SF-9430 (طرد ملابس COD)
            </button>
            <button
              onClick={() => handleSelectSample('SF-7014')}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-orange-400 rounded-md font-mono border border-slate-700 transition-colors"
            >
              SF-7014 (ملف مستعجل)
            </button>
          </div>
        </div>

        {/* Result Card */}
        {currentOrder && (
          <div className="max-w-3xl mx-auto mt-8 bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xl">
            {/* Header info */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-700">
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">رقم التتبع المسجل</span>
                    <h3 className="font-mono text-lg font-bold text-white">{currentOrder.code}</h3>
                  </div>
                </div>
                <div className="mt-2 text-sm text-slate-300">
                  <span className="text-slate-400">{isRtl ? 'المرسل:' : 'Expéditeur:'} </span>
                  <span className="font-semibold text-white">{currentOrder.client}</span>
                </div>
              </div>

              <div className="text-right">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    {currentOrder.status === 'delivered'
                      ? t.tracking.statusDelivered
                      : t.tracking.statusInTransit}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1.5 font-mono">
                  {currentOrder.timeRemaining}
                </div>
              </div>
            </div>

            {/* Route origin & destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-b border-slate-700 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">{isRtl ? 'نقطة الانطلاق (أسفي):' : 'Départ:'}</div>
                  <div className="font-medium text-slate-200">{currentOrder.origin}</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">{isRtl ? 'وجهة التسليم (أسفي):' : 'Destination:'}</div>
                  <div className="font-medium text-slate-200">{currentOrder.destination}</div>
                </div>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="py-6 space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                {isRtl ? 'المحطات ومراحل التوصيل' : 'Étapes d’Acheminement'}
              </h4>
              <div className="space-y-3">
                {currentOrder.timeline.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                        step.completed
                          ? 'bg-orange-500 text-white'
                          : 'bg-slate-700 text-slate-400'
                      }`}
                    >
                      {step.completed ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                    </div>
                    <div className="flex-1 text-sm">
                      <span className={step.completed ? 'text-white font-medium' : 'text-slate-400'}>
                        {step.text}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">{step.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rider direct contact info */}
            <div className="pt-5 border-t border-slate-700 flex flex-wrap items-center justify-between gap-3 bg-slate-900/50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-4 sm:p-6 rounded-b-2xl">
              <div>
                <span className="text-xs text-slate-400 block">{isRtl ? 'السائق المكلف بالشحنة:' : 'Livreur en charge:'}</span>
                <span className="font-semibold text-white text-sm">{currentOrder.rider}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${currentOrder.riderPhone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                  <span>{isRtl ? 'اتصال بالسائق' : 'Appeler'}</span>
                </a>
                <a
                  href={`https://wa.me/212682199993?text=${encodeURIComponent(
                    `السلام عليكم بخصوص الشحنة رقم ${currentOrder.code}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'واتساب الإدارة' : 'WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
