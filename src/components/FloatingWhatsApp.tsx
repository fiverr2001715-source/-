import React, { useState } from 'react';
import { MessageCircle, Phone, X, Send } from 'lucide-react';
import { Language } from '../data/translations';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const isRtl = lang === 'ar';

  const defaultTemplates = isRtl
    ? [
        'السلام عليكم، أريد طلب توصيل وجبة من مطعم.',
        'السلام عليكم، أريد شحن وتوصيل طرد في أسفي (COD).',
        'السلام عليكم، أحتاج توصيل وثائق مستعجلة في أقرب وقت.',
      ]
    : [
        'Bonjour, je souhaite commander une livraison de repas.',
        'Bonjour, j’ai un colis e-commerce à livrer avec paiement COD.',
        'Bonjour, j’ai besoin d’une livraison urgente de documents.',
      ];

  const handleSend = (text: string) => {
    const url = `https://wa.me/212682199993?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className={`fixed bottom-6 z-50 flex flex-col items-end ${isRtl ? 'left-6' : 'right-6'}`}>
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 transition-all">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                <MessageCircle className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Safi Express WhatsApp</h4>
                <p className="text-xs text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span>{isRtl ? 'متاح الآن للرد الفوري' : 'En ligne · Réponse rapide'}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick choices */}
          <div className="p-4 space-y-3 bg-slate-50">
            <p className="text-xs font-semibold text-slate-500">
              {isRtl ? 'اختر نوع طلب التوصيل السريع:' : 'Choisissez votre besoin express:'}
            </p>
            <div className="space-y-2">
              {defaultTemplates.map((template, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(template)}
                  className="w-full text-left p-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 text-xs font-medium text-slate-800 transition-all flex items-center justify-between gap-2 shadow-xs group"
                  style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                >
                  <span className="line-clamp-1">{template}</span>
                  <Send className="w-3.5 h-3.5 text-emerald-600 shrink-0 opacity-70 group-hover:opacity-100" />
                </button>
              ))}
            </div>

            {/* Custom text */}
            <div className="pt-2">
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && customMsg.trim()) {
                      handleSend(customMsg);
                    }
                  }}
                  placeholder={isRtl ? 'اكتب رسالتك لخدمة العملاء...' : 'Votre message...'}
                  className="flex-1 px-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-emerald-500"
                />
                <button
                  onClick={() => customMsg.trim() && handleSend(customMsg)}
                  className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="pt-1 text-center text-[11px] text-slate-400">
              <span>هاتف الدعم: </span>
              <a href="tel:+212682199993" className="font-mono text-slate-600 font-semibold hover:underline">
                +212 682-199993
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Trigger floating button */}
      <div className="flex items-center gap-2">
        <a
          href="tel:+212682199993"
          className="h-12 w-12 rounded-full bg-orange-600 hover:bg-orange-500 text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          title="Direct Phone Call"
        >
          <Phone className="w-5 h-5" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 group font-bold text-sm"
          aria-label="Open WhatsApp Dispatch"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </span>
          </div>
          <span className="hidden sm:inline">WhatsApp (+212 682-199993)</span>
        </button>
      </div>
    </div>
  );
};
