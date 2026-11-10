import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Phone, MapPin, Package } from 'lucide-react';
import { Translation, Language } from '../data/translations';
import { SAFI_NEIGHBORHOODS } from '../data/neighborhoods';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translation;
  lang: Language;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, t, lang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickup, setPickup] = useState('الهضبة (Plateau)');
  const [dropoff, setDropoff] = useState('الكورس (Al Kours)');
  const [orderType, setOrderType] = useState('وجبة مطعم');
  const [notes, setNotes] = useState('');
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const isRtl = lang === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `SF-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedCode(code);

    // Format WhatsApp message
    const msg = isRtl
      ? `طلب توصيل جديد (${code})\nالاسم: ${name}\nالهاتف: ${phone}\nمن: ${pickup}\nإلى: ${dropoff}\nنوع الطلبية: ${orderType}\nملاحظات: ${notes || 'لا يوجد'}`
      : `Nouvelle commande (${code})\nNom: ${name}\nTél: ${phone}\nDépart: ${pickup}\nArrivée: ${dropoff}\nType: ${orderType}\nNotes: ${notes || 'Aucune'}`;

    const waUrl = `https://wa.me/212682199993?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  const handleReset = () => {
    setSubmittedCode(null);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900"
        style={{ direction: isRtl ? 'rtl' : 'ltr' }}
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">
                {isRtl ? 'حجز طلب توصيل في أسفي' : 'Réserver une livraison à Safi'}
              </h3>
              <p className="text-xs text-orange-400 font-mono">
                Safi Express Dispatch · +212 682-199993
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {submittedCode ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-xl font-extrabold text-slate-900">
              {isRtl ? 'تم إرسال الطلب بنجاح إلى الإدارة!' : 'Commande transmise avec succès !'}
            </h4>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 inline-block">
              <span className="text-xs text-slate-500 block">{isRtl ? 'رقم التتبع الخاص بك:' : 'Votre numéro de suivi :'}</span>
              <span className="text-lg font-mono font-bold text-orange-600">{submittedCode}</span>
            </div>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              {isRtl
                ? 'تم فتح محادثة الواتساب مع مسير العمليات (سعيد العمري) لتحديد أقرب سائق دراجة إليك.'
                : 'La conversation WhatsApp a été initiée avec notre responsable pour affecter le coursier le plus proche.'}
            </p>
            <button
              onClick={handleReset}
              className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-slate-800 transition-colors"
            >
              {isRtl ? 'إغلاق ومتابعة' : 'Fermer'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isRtl ? 'الاسم الكامل أو اسم المحل' : 'Nom ou Enseigne'} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isRtl ? 'مثال: كريم المسفيوي' : 'Ex: Karim Safi'}
                  className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isRtl ? 'رقم الهاتف (الواتساب)' : 'Numéro de téléphone'} *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="06 XX XX XX XX"
                  className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isRtl ? 'حي الاستلام (من)' : 'Départ'} *
                </label>
                <select
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500"
                >
                  {SAFI_NEIGHBORHOODS.map((n) => (
                    <option key={n.id} value={isRtl ? n.nameAr : n.nameFr}>
                      {isRtl ? n.nameAr : n.nameFr}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isRtl ? 'حي التسليم (إلى)' : 'Arrivée'} *
                </label>
                <select
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500"
                >
                  {SAFI_NEIGHBORHOODS.map((n) => (
                    <option key={n.id} value={isRtl ? n.nameAr : n.nameFr}>
                      {isRtl ? n.nameAr : n.nameFr}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isRtl ? 'نوع الطلبية' : 'Type de commande'}
              </label>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500"
              >
                <option value="وجبة مطعم">{isRtl ? 'وجبة مطعم / طعام ساخن' : 'Repas restaurant'}</option>
                <option value="طرد تجارة إلكترونية">{isRtl ? 'طرد تجارة إلكترونية (مع تحصيل COD)' : 'Colis e-commerce avec COD'}</option>
                <option value="وثائق وملفات مستعجلة">{isRtl ? 'وثائق إدارية أو قانونية مستعجلة' : 'Documents administratifs urgents'}</option>
                <option value="أغراض ومشتريات خاصة">{isRtl ? 'صيدلية / سوبرماركت / أغراض خاصة' : 'Pharmacie / Courses diverses'}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isRtl ? 'تفاصيل إضافية أو اسم العمارة / الشارع' : 'Détails & adresse exacte'}
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={isRtl ? 'مثال: زنقة الرباط، عمارة 4 الشقة 2، الدفع نقداً عند الاستلام' : 'Ex: Résidence Al Nakhil, Apt 4...'}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/30 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>{isRtl ? 'إرسال الطلب وحجز السائق فوراً عبر الواتساب' : 'Envoyer la commande via WhatsApp'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
