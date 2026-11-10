import React, { useState } from 'react';
import { Calculator, Clock, CheckCircle2, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Translation, Language } from '../data/translations';
import { SAFI_NEIGHBORHOODS } from '../data/neighborhoods';

interface RateCalculatorProps {
  t: Translation;
  lang: Language;
}

export const RateCalculator: React.FC<RateCalculatorProps> = ({ t, lang }) => {
  const [pickupId, setPickupId] = useState('plateau');
  const [dropoffId, setDropoffId] = useState('kours');
  const [packageType, setPackageType] = useState<'food' | 'parcel' | 'document' | 'errand'>('food');

  const isRtl = lang === 'ar';
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const pickup = SAFI_NEIGHBORHOODS.find((n) => n.id === pickupId) || SAFI_NEIGHBORHOODS[0];
  const dropoff = SAFI_NEIGHBORHOODS.find((n) => n.id === dropoffId) || SAFI_NEIGHBORHOODS[1];

  // Pricing calculation algorithm
  const isSameZone = pickup.zone === dropoff.zone;
  const isSidiBouzid = pickup.id === 'sidi_bouzid' || dropoff.id === 'sidi_bouzid';
  const isIndustrial = pickup.id === 'safi_sud' || dropoff.id === 'safi_sud';

  let estimatedPrice = 15;
  if (!isSameZone) estimatedPrice += 5;
  if (isSidiBouzid) estimatedPrice += 10;
  if (isIndustrial) estimatedPrice += 5;
  if (packageType === 'document') estimatedPrice += 5; // Express priority guarantee

  const estimatedTime = Math.max(pickup.avgTimeMin, dropoff.avgTimeMin) + (isSameZone ? 0 : 10);

  const pickupName = isRtl ? pickup.nameAr : pickup.nameFr;
  const dropoffName = isRtl ? dropoff.nameAr : dropoff.nameFr;

  const typeLabels = {
    food: isRtl ? 'وجبة طعام من مطعم' : 'Repas restaurant',
    parcel: isRtl ? 'طرد تجارة إلكترونية (COD)' : 'Colis e-commerce (COD)',
    document: isRtl ? 'وثائق إدارية مستعجلة' : 'Documents urgents',
    errand: isRtl ? 'أغراض ومشتريات خاصة' : 'Courses diverses',
  };

  const whatsappMessage = isRtl
    ? `السلام عليكم سفي إكسبريس، أريد حجز توصيل من ${pickupName} إلى ${dropoffName}. النوع: ${typeLabels[packageType]}. السعر التقديري: ${estimatedPrice} درهم.`
    : `Bonjour Safi Express, je souhaite commander une livraison de ${pickupName} vers ${dropoffName}. Type: ${typeLabels[packageType]}. Tarif estimé: ${estimatedPrice} MAD.`;

  const waUrl = `https://wa.me/212682199993?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="rates" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-600 mb-2">
            <span>{isRtl ? 'تسعيرة شفافة ومباشرة' : 'Tarifs Transparents'}</span>
            <span aria-hidden="true">·</span>
            <span>Safi Delivery Fare</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.calculator.heading}
          </h2>
          <p className="mt-2 text-base text-slate-600">
            {t.calculator.subheading}
          </p>
        </div>

        {/* Calculator Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            {/* Package Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                {t.calculator.type}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['food', 'parcel', 'document', 'errand'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPackageType(type)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                      packageType === type
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {typeLabels[type]}
                  </button>
                ))}
              </div>
            </div>

            {/* Origin Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t.calculator.pickup}
                </label>
                <select
                  value={pickupId}
                  onChange={(e) => setPickupId(e.target.value)}
                  className="w-full h-12 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:border-orange-500"
                >
                  {SAFI_NEIGHBORHOODS.map((n) => (
                    <option key={n.id} value={n.id}>
                      {isRtl ? n.nameAr : n.nameFr}
                    </option>
                  ))}
                </select>
                <p className="mt-1.5 text-xs text-slate-500 truncate">
                  {isRtl ? pickup.descriptionAr : pickup.descriptionFr}
                </p>
              </div>

              {/* Destination Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t.calculator.dropoff}
                </label>
                <select
                  value={dropoffId}
                  onChange={(e) => setDropoffId(e.target.value)}
                  className="w-full h-12 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:border-orange-500"
                >
                  {SAFI_NEIGHBORHOODS.map((n) => (
                    <option key={n.id} value={n.id}>
                      {isRtl ? n.nameAr : n.nameFr}
                    </option>
                  ))}
                </select>
                <p className="mt-1.5 text-xs text-slate-500 truncate">
                  {isRtl ? dropoff.descriptionAr : dropoff.descriptionFr}
                </p>
              </div>
            </div>

            {/* Features Guarantee List */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isRtl ? 'تسعيرة نهائية بدون مصاريف خفية' : 'Prix fixe sans frais cachés'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isRtl ? 'سائق مجهز بصندوق حراري عازل' : 'Équipé de caisson thermique'}</span>
              </div>
            </div>
          </div>

          {/* Pricing Outcome Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-700 shadow-lg">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-orange-400 font-bold">
                  {t.calculator.estPrice}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded">
                  MAD (درهم مغربي)
                </span>
              </div>

              {/* Big Price Display */}
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                  {estimatedPrice}
                </span>
                <span className="text-xl font-bold text-orange-400">
                  {isRtl ? 'درهم' : 'MAD'}
                </span>
              </div>

              {/* Estimated duration */}
              <div className="mt-6 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-slate-300">{t.calculator.estTime}:</span>
                </div>
                <span className="font-mono font-bold text-white text-base">
                  ~ {estimatedTime} {isRtl ? 'دقيقة' : 'min'}
                </span>
              </div>

              {/* Summary of Route */}
              <div className="mt-4 text-xs text-slate-400 space-y-1">
                <div>
                  <span className="text-slate-500">{isRtl ? 'المسار:' : 'Trajet:'}</span>{' '}
                  <span className="text-slate-200 font-medium">{pickupName}</span> →{' '}
                  <span className="text-slate-200 font-medium">{dropoffName}</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="mt-8 pt-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-600/30 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span className="text-sm sm:text-base">{t.calculator.confirmWhatsApp}</span>
              </a>
              <p className="mt-2.5 text-center text-xs text-slate-400">
                {isRtl ? 'أو اتصل مباشرة بالهاتف: ' : 'Ou contactez directement: '}
                <a href="tel:+212682199993" className="text-orange-400 hover:underline font-bold font-mono">
                  +212 682-199993
                </a>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
