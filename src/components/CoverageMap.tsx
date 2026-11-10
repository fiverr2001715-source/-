import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import { Translation, Language } from '../data/translations';
import { SAFI_NEIGHBORHOODS, Neighborhood } from '../data/neighborhoods';

interface CoverageMapProps {
  t: Translation;
  lang: Language;
}

export const CoverageMap: React.FC<CoverageMapProps> = ({ t, lang }) => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<Neighborhood>(SAFI_NEIGHBORHOODS[0]);
  const isRtl = lang === 'ar';

  const googleMapsUrl = 'https://maps.google.com/?q=Safi,+Morocco&ll=32.2994,-9.2372&z=13';

  return (
    <section id="coverage" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-600 mb-2">
              <MapPin className="w-4 h-4" />
              <span>{isRtl ? 'خريطة النطاق الجغرافي' : 'Périmètre de Livraison'}</span>
              <span aria-hidden="true">·</span>
              <span>Safi, Morocco</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.coverage.heading}
            </h2>
            <p className="mt-2 text-base text-slate-600">
              {t.coverage.subheading}
            </p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors shrink-0"
          >
            <Navigation className="w-4 h-4 text-orange-400" />
            <span>{t.coverage.viewOnGoogleMaps}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Neighborhood Grid & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Neighborhood list cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[580px] overflow-y-auto pr-1">
            {SAFI_NEIGHBORHOODS.map((n) => {
              const isSelected = selectedNeighborhood.id === n.id;
              return (
                <div
                  key={n.id}
                  onClick={() => setSelectedNeighborhood(n)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all text-left ${
                    isSelected
                      ? 'bg-orange-50/70 border-orange-500 shadow-sm ring-1 ring-orange-500'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                  style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-900 text-sm">
                      {isRtl ? n.nameAr : n.nameFr}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                      تغطية 100%
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                    {isRtl ? n.descriptionAr : n.descriptionFr}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-200/60 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      <span>{n.avgTimeMin} {isRtl ? 'دقيقة' : 'min'}</span>
                    </span>
                    <span className="font-bold text-slate-900">
                      {isRtl ? 'ابتداءً من' : 'Dès'} {n.baseFareMAD} MAD
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map Preview & Details Card */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Embedded interactive Google Map iframe */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-slate-100 aspect-[16/11]">
              <iframe
                title="Google Maps Safi Express Delivery Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54273.74384469796!2d-9.255956044738753!3d32.2994017684074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac21262d1c6df3%3A0x6b7fa98894451000!2sSafi!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Verified Pin Overlay */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-2 rounded-xl shadow-lg text-xs flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-slate-800">
                  {isRtl ? 'مقر أسفي إكسبريس (الهضبة)' : 'Siège Safi Express (Plateau)'}
                </span>
              </div>
            </div>

            {/* Selected Zone Quick Card */}
            <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-4">
              <div>
                <div className="text-xs text-orange-400 font-semibold">
                  {isRtl ? 'المنطقة المحددة للتوصيل:' : 'Zone Sélectionnée:'}
                </div>
                <div className="font-bold text-sm sm:text-base">
                  {isRtl ? selectedNeighborhood.nameAr : selectedNeighborhood.nameFr}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {isRtl ? selectedNeighborhood.descriptionAr : selectedNeighborhood.descriptionFr}
                </div>
              </div>
              <a
                href={`https://wa.me/212682199993?text=${encodeURIComponent(
                  `السلام عليكم، أريد طلب توصيل إلى حي ${selectedNeighborhood.nameAr}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-orange-600 hover:bg-orange-500 rounded-lg text-white font-semibold text-xs whitespace-nowrap transition-colors"
              >
                {isRtl ? 'طلب التوصيل هنا' : 'Livrer ici'}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
