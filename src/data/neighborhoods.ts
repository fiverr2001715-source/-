export interface Neighborhood {
  id: string;
  nameAr: string;
  nameFr: string;
  zone: 'Centre' | 'Nord' | 'Sud' | 'Littoral';
  avgTimeMin: number;
  baseFareMAD: number;
  descriptionAr: string;
  descriptionFr: string;
}

export const SAFI_NEIGHBORHOODS: Neighborhood[] = [
  {
    id: 'plateau',
    nameAr: 'الهضبة (Le Plateau)',
    nameFr: 'Le Plateau & Centre-Ville',
    zone: 'Centre',
    avgTimeMin: 20,
    baseFareMAD: 15,
    descriptionAr: 'المركز الإداري والمالي لمدينة أسفي، شارع مولاي يوسف ومقر الإدارات',
    descriptionFr: 'Centre administratif et commercial, Av. Moulay Youssef',
  },
  {
    id: 'kours',
    nameAr: 'الكورس (Al Kours)',
    nameFr: 'Al Kours',
    zone: 'Nord',
    avgTimeMin: 25,
    baseFareMAD: 15,
    descriptionAr: 'حي سكني وتجاري حيوي يشهد حركة يومية مكثفة للمتاجر والمطاعم',
    descriptionFr: 'Grand quartier résidentiel et artères commerçantes',
  },
  {
    id: 'biouki',
    nameAr: 'بيوكي (Biouki)',
    nameFr: 'Biouki',
    zone: 'Sud',
    avgTimeMin: 25,
    baseFareMAD: 18,
    descriptionAr: 'منطقة سكنية معروفة بالنشاط التجاري والتسوق اليومي',
    descriptionFr: 'Quartier dynamique et résidentiel de Safi',
  },
  {
    id: 'medina',
    nameAr: 'المدينة القديمة والميناء (Médina & Port)',
    nameFr: 'Ancienne Médina & Zone Portuaire',
    zone: 'Littoral',
    avgTimeMin: 20,
    baseFareMAD: 15,
    descriptionAr: 'الحي العتيق، سوق الخزف، وقرب الميناء التاريخي لأسفي',
    descriptionFr: 'Médina historique, artisans potiers et bord de mer',
  },
  {
    id: 'sidi_bouzid',
    nameAr: 'سيدي بوزيد (Sidi Bouzid)',
    nameFr: 'Sidi Bouzid & Corniche',
    zone: 'Littoral',
    avgTimeMin: 35,
    baseFareMAD: 25,
    descriptionAr: 'المنطقة السياحية والساحلية، المطاعم والمقاهي المطلة على المحيط',
    descriptionFr: 'Zone balnéaire, restaurants côtiers et résidences touristiques',
  },
  {
    id: 'hay_salam',
    nameAr: 'حي السلام (Hay Salam)',
    nameFr: 'Hay Salam',
    zone: 'Sud',
    avgTimeMin: 25,
    baseFareMAD: 18,
    descriptionAr: 'من الأحياء السكنية الكبرى مع كثافة طلبات التوصيل المنزلي',
    descriptionFr: 'Grand quartier familial et commerces de proximité',
  },
  {
    id: 'hay_anas',
    nameAr: 'حي أنس (Hay Anas)',
    nameFr: 'Hay Anas',
    zone: 'Nord',
    avgTimeMin: 30,
    baseFareMAD: 20,
    descriptionAr: 'حي حديث النمو وقريب من المنشآت والمراكز الجديدة',
    descriptionFr: 'Zone résidentielle en plein essor',
  },
  {
    id: 'kawki',
    nameAr: 'الكاوكي (Kawki)',
    nameFr: 'Quartier Kawki',
    zone: 'Sud',
    avgTimeMin: 25,
    baseFareMAD: 18,
    descriptionAr: 'منطقة حيوية بجنوب أسفي معروفة بالنشاط المهني والتجاري',
    descriptionFr: 'Secteur animé du sud de Safi',
  },
  {
    id: 'azib_drai',
    nameAr: 'عزيب الدرعي (Azib Drai)',
    nameFr: 'Azib Drai',
    zone: 'Sud',
    avgTimeMin: 30,
    baseFareMAD: 20,
    descriptionAr: 'كثافة سكانية عالية وتوصيل سريع للوجبات والطرود',
    descriptionFr: 'Forte densité résidentielle et commandes régulières',
  },
  {
    id: 'mdina_jdida',
    nameAr: 'المدينة الجديدة (M’dina Jdida)',
    nameFr: 'Nouvelle Ville & Gare',
    zone: 'Centre',
    avgTimeMin: 20,
    baseFareMAD: 15,
    descriptionAr: 'قرب محطة القطار ومحلات التجارة والخدمات',
    descriptionFr: 'Proximité gare ONCF et commerces',
  },
  {
    id: 'safi_nord',
    nameAr: 'أسفي شمال ومحيط الكلية (Safi Nord)',
    nameFr: 'Safi Nord & Faculté Polydisciplinaire',
    zone: 'Nord',
    avgTimeMin: 30,
    baseFareMAD: 20,
    descriptionAr: 'منطقة قطب الكليات والطلبة، وتوصيل الكتب والوجبات',
    descriptionFr: 'Campus universitaire et résidences étudiantes',
  },
  {
    id: 'safi_sud',
    nameAr: 'أسفي جنوب والمنطقة الصناعية (Safi Sud)',
    nameFr: 'Safi Sud & Zone Industrielle',
    zone: 'Sud',
    avgTimeMin: 35,
    baseFareMAD: 25,
    descriptionAr: 'مستودعات وشركات، وتوصيل قطع الغيار والوثائق العاجلة',
    descriptionFr: 'Entreprises, logistique et livraisons professionnelles',
  },
];

export interface MockTrackOrder {
  code: string;
  type: 'food' | 'parcel' | 'document';
  client: string;
  origin: string;
  destination: string;
  status: 'delivered' | 'in_transit' | 'assigned' | 'received';
  rider: string;
  riderPhone: string;
  timeRemaining: string;
  timeline: { time: string; text: string; completed: boolean }[];
}

export const MOCK_ORDERS: Record<string, MockTrackOrder> = {
  'SF-8821': {
    code: 'SF-8821',
    type: 'food',
    client: 'سناك برغر الأطلس (Atlas Burger)',
    origin: 'شارع الحسن الثاني، الهضبة (Plateau)',
    destination: 'حي السلام، إقامة النخيل (Hay Salam)',
    status: 'in_transit',
    rider: 'عمر المسفيوي (Rider Omar)',
    riderPhone: '+212682199993',
    timeRemaining: '12 دقيقة (En route)',
    timeline: [
      { time: '18:10', text: 'تم استلام وتأكيد الطلبية من المطعم', completed: true },
      { time: '18:18', text: 'تم وضع الوجبة في الحقيبة الحرارية العازلة', completed: true },
      { time: '18:22', text: 'السائق عمر انطلق بالدراجة النارية نحو حي السلام', completed: true },
      { time: '18:34', text: 'الاقتراب من عنوان التسليم والتواصل مع الزبون', completed: false },
    ],
  },
  'SF-9430': {
    code: 'SF-9430',
    type: 'parcel',
    client: 'متجر فاشن ستور (Safi Boutique Chic)',
    origin: 'الكورس، قرب المسجد الكبير',
    destination: 'بيوكي، زنقة واد سيبو',
    status: 'in_transit',
    rider: 'حمزة الوردي (Rider Hamza)',
    riderPhone: '+212682199993',
    timeRemaining: '18 دقيقة',
    timeline: [
      { time: '16:00', text: 'استلام طرد ملابس مع وصل تحصيل COD (320 درهم)', completed: true },
      { time: '16:25', text: 'فرز الشحنة بمركز التوزيع بالهضبة', completed: true },
      { time: '16:45', text: 'خرج للتسليم المباشر مع السائق حمزة', completed: true },
      { time: '17:05', text: 'التسليم وتحصيل المبلغ للتاجر', completed: false },
    ],
  },
  'SF-7014': {
    code: 'SF-7014',
    type: 'document',
    client: 'مكتب التوثيق والاستشارات القانونية',
    origin: 'ساحة الاستقلال، الهضبة',
    destination: 'المحكمة الابتدائية بأسفي',
    status: 'delivered',
    rider: 'سعيد (Direct Express)',
    riderPhone: '+212682199993',
    timeRemaining: 'تم التسليم والمصادقة',
    timeline: [
      { time: '10:15', text: 'استلام الملف المغلق بصفة مستعجلة', completed: true },
      { time: '10:30', text: 'الانتقال المباشر بالدراجة دون توقف', completed: true },
      { time: '10:42', text: 'تسليم الملف إلى كتابة الضبط وتوقيع الإشعار بالاستلام', completed: true },
    ],
  },
};
