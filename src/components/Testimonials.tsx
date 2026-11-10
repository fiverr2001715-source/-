import React from 'react';
import { Star, Quote, Building, CheckCircle } from 'lucide-react';
import { Translation, Language } from '../data/translations';

interface TestimonialsProps {
  t: Translation;
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ t, lang }) => {
  const isRtl = lang === 'ar';

  const reviews = [
    {
      id: 1,
      name: isRtl ? 'كريم الوردي' : 'Karim El Ouardi',
      role: isRtl ? 'مالك مطعم وسناك الأطلس' : 'Gérant Snack Atlas',
      location: isRtl ? 'الهضبة، أسفي' : 'Plateau, Safi',
      comment: isRtl
        ? 'منذ تعاقدنا مع سفي إكسبريس، انخفضت شكاوى تأخر الوجبات إلى الصفر. الدراجات مجهزة بحقائب حرارية تحافظ على سخونة البيتزا والبرغر تماماً كما تخرج من المطبخ.'
        : 'Nos clients à Safi reçoivent leurs repas encore chauds grâce à leurs caissons isothermes. Ponctualité exemplaire et livreurs polis.',
      rating: 5,
      impact: isRtl ? '+45% طلبات توصيل شهرياً' : '+45% de commandes livrées',
    },
    {
      id: 2,
      name: isRtl ? 'سارة بلقاسم' : 'Sara Belkacem',
      role: isRtl ? 'مؤسسة متجر إلكتروني للملابس' : 'Fondatrice E-shop Mode',
      location: isRtl ? 'الكورس، أسفي' : 'Al Kours, Safi',
      comment: isRtl
        ? 'أهم ميزة بالنسبة لي هي أمانة تحصيل الأموال عند الاستلام (COD). يقومون بتحويل المبالغ المحصلة من الزبائن في نفس اليوم وبكل دقة مع كشف تفصيلي.'
        : 'Gestion irréprochable du Cash on Delivery à Safi. Les encaissements nous sont reversés le jour même sans le moindre litige.',
      rating: 5,
      impact: isRtl ? 'تحصيل COD يومي 100%' : '100% règlements COD le jour même',
    },
    {
      id: 3,
      name: isRtl ? 'ذ. عبد الرحيم الصافي' : 'Me. Abderrahim Safi',
      role: isRtl ? 'مستشار قانوني ومسير مكتب أعمال' : 'Cabinet de Conseil Juridique',
      location: isRtl ? 'ساحة الاستقلال، أسفي' : 'Place de l’Indépendance, Safi',
      comment: isRtl
        ? 'نعتمد عليهم في نقل الملفات القضائية والمستندات الإدارية المستعجلة بين مكاتبنا والمحكمة الابتدائية بأسفي. سرية كاملة وسرعة فائقة في التسليم.'
        : 'Service indispensable pour le transport confidentiel de nos dossiers juridiques et actes notariés dans tout Safi.',
      rating: 5,
      impact: isRtl ? 'تسليم رسمي موقع وموثق' : 'Accusé de réception systématique',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-600 mb-2">
            <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
            <span>{isRtl ? 'شهادات الشركاء والزبناء' : 'Retours d’Expérience'}</span>
            <span aria-hidden="true">·</span>
            <span>Avis Clients Safi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.testimonials.heading}
          </h2>
          <p className="mt-2 text-base text-slate-600">
            {t.testimonials.subheading}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-slate-900 text-sm">
                    {rev.name}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                    {rev.impact}
                  </span>
                </div>
                <div className="text-xs text-slate-500">
                  {rev.role} · <span className="text-slate-700">{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
