export type Language = 'ar' | 'fr' | 'en';

export interface Translation {
  dir: 'rtl' | 'ltr';
  brandName: string;
  brandTagline: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  nav: {
    services: string;
    pricing: string;
    coverage: string;
    tracking: string;
    contact: string;
    orderNow: string;
    callNow: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaWhatsApp: string;
    ctaCall: string;
    ctaTrack: string;
    stats: {
      speed: { label: string; value: string };
      availability: { label: string; value: string };
      coverage: { label: string; value: string };
      satisfaction: { label: string; value: string };
    };
  };
  services: {
    heading: string;
    subheading: string;
    food: {
      title: string;
      desc: string;
      features: string[];
    };
    ecommerce: {
      title: string;
      desc: string;
      features: string[];
    };
    documents: {
      title: string;
      desc: string;
      features: string[];
    };
    errands: {
      title: string;
      desc: string;
      features: string[];
    };
  };
  tracking: {
    heading: string;
    subheading: string;
    placeholder: string;
    button: string;
    samplePrompt: string;
    statusDelivered: string;
    statusInTransit: string;
    statusAssigned: string;
    statusReceived: string;
  };
  calculator: {
    heading: string;
    subheading: string;
    pickup: string;
    dropoff: string;
    type: string;
    estPrice: string;
    estTime: string;
    confirmWhatsApp: string;
  };
  coverage: {
    heading: string;
    subheading: string;
    safiCity: string;
    popularZones: string;
    viewOnGoogleMaps: string;
  };
  verification: {
    heading: string;
    subheading: string;
    officialProfile: string;
    verifiedBadge: string;
    businessNameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    hoursLabel: string;
    coverageLabel: string;
    mapsButton: string;
  };
  testimonials: {
    heading: string;
    subheading: string;
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
    quickLinks: string;
    contactInfo: string;
  };
}

export const translations: Record<Language, Translation> = {
  ar: {
    dir: 'rtl',
    brandName: 'Safi Express Delivery',
    brandTagline: 'توصيل أسفي إكسبريس',
    phone: '+212682199993',
    email: 'saidlhamri2001715@gmail.com',
    address: 'شارع مولاي يوسف، الهضبة (Plateau)، أسفي 46000، المغرب',
    hours: 'متاح على مدار الساعة (24/7)',
    nav: {
      services: 'خدماتنا',
      pricing: 'الأسعار والتقدير',
      coverage: 'مناطق التغطية',
      tracking: 'تتبع الطلبية',
      contact: 'معلومات الاتصال',
      orderNow: 'اطلب عبر الواتساب',
      callNow: 'اتصل بنا مباشرة',
    },
    hero: {
      kicker: 'الخدمة اللوجستية الأولى والموثوقة في حاضرة المحيط',
      title: 'أسرع خدمة توصيل في مدينة أسفي - Livraison Rapide & Fiable à Safi',
      subtitle:
        'نوفر خدمة التوصيل السريع للمطاعم، المتاجر الإلكترونية، الطرود، والوثائق المستعجلة في كافة أرجاء مدينة أسفي على مدار الساعة 24/7 مع ضمان الأمانة والسرعة.',
      ctaWhatsApp: 'اطلب عبر الواتساب الآن',
      ctaCall: 'اتصال مباشر: 0682199993',
      ctaTrack: 'تتبع طلبيتك',
      stats: {
        speed: { label: 'متوسط زمن التوصيل', value: '25-35 دقيقة' },
        availability: { label: 'جاهزية التوصيل', value: '24/7 مدار الساعة' },
        coverage: { label: 'أحياء مغطاة بأسفي', value: '100% كل الأحياء' },
        satisfaction: { label: 'تسليم يدوي آمن', value: 'ضمان التحصيل COD' },
      },
    },
    services: {
      heading: 'خدماتنا الاحترافية في أسفي',
      subheading: 'حلول لوجستية متكاملة تلبي حاجيات الأفراد، المطاعم، والشركات مع التزام تام بالمواعيد',
      food: {
        title: 'توصيل المأكولات والمطاعم',
        desc: 'حقائب حرارية عازلة تحافظ على حرارة وجباتك من أفضل مطاعم وسناكات أسفي وتصل إلى باب منزلك ساخنة وطازجة.',
        features: ['حقائب حرارية معتمدة', 'توصيل مباشر دون توقف', 'تغطية وجبات الغداء والعشاء والسحور'],
      },
      ecommerce: {
        title: 'توصيل السلع والمتاجر الإلكترونية',
        desc: 'شريكك اللوجستي الموثوق للتجارة الإلكترونية في أسفي، مع خدمة استلام البضائع وتحصيل الأموال الفوري (COD).',
        features: ['تحصيل فوري للأموال COD', 'تقارير تسليم فورية عبر الواتساب', 'إرجاع واستبدال منظم'],
      },
      documents: {
        title: 'توصيل الوثائق والطلبات المستعجلة',
        desc: 'نقل سريع وسري للوثائق الرسمية، المعاملات الإدارية، العقود، والأوراق البنكية بين مقرات الشركات والإدارات.',
        features: ['سرية وأمانة تامة', 'تسليم مع وصل استلام وتوقيع', 'أولوية قصوى للتسليم الفوري'],
      },
      errands: {
        title: 'قضاء الأغراض والمشتريات الخاصة',
        desc: 'خدمة تسوق شخصية للمستلزمات الصيدلانية، السوبرماركت، وقطع الغيار المستعجلة وتوصيلها فورياً.',
        features: ['شراء وتوصيل من أي محل بأسفي', 'خدمة طوارئ صيدليات الحراسة', 'سائقين محترفين وأمناء'],
      },
    },
    tracking: {
      heading: 'تتبع طلبيتك مباشرة',
      subheading: 'أدخل رقم التتبع الخاص بك لمعرفة موقع الشحنة وحالة السائق في شوارع أسفي',
      placeholder: 'أدخل رقم الشحنة (مثال: SF-2026-8821)...',
      button: 'بحث عن الشحنة',
      samplePrompt: 'أو جرب أحد النماذج الحية:',
      statusDelivered: 'تم التسليم بنجاح',
      statusInTransit: 'في الطريق مع السائق',
      statusAssigned: 'تم تعيين السائق وجارٍ الاستلام',
      statusReceived: 'تم تسجيل الطلب في المنظومة',
    },
    calculator: {
      heading: 'حاسبة أسعار التوصيل الفورية',
      subheading: 'أسعار شفافة وبسيطة تبدأ من 15 درهم داخل أحياء مدينة أسفي',
      pickup: 'حي الاستلام (من)',
      dropoff: 'حي التسليم (إلى)',
      type: 'نوع الطلبية',
      estPrice: 'السعر التقديري',
      estTime: 'الوقت المتوقع',
      confirmWhatsApp: 'تأكيد الطلب بهذا السعر عبر الواتساب',
    },
    coverage: {
      heading: 'تغطية شاملة لجميع أحياء أسفي',
      subheading: 'سائقونا متواجدون في كل نقطة لضمان وصول الطلبية في أسرع وقت ممكن',
      safiCity: 'مدينة أسفي',
      popularZones: 'أهم المناطق المغطاة',
      viewOnGoogleMaps: 'فتح الموقع الرسمي على خرائط Google',
    },
    verification: {
      heading: 'بيانات النشاط التجاري الرسمية',
      subheading: 'معلومات موثقة رسمياً ومطابقة لبيانات التحقق على Google Maps وخرائط جوجل',
      officialProfile: 'ملف الأعمال المعتمد على Google Business Profile',
      verifiedBadge: 'شركة محلية موثقة ومعتمدة بأسفي',
      businessNameLabel: 'اسم النشاط التجاري',
      phoneLabel: 'رقم الهاتف الرسمي',
      emailLabel: 'البريد الإلكتروني المهني',
      addressLabel: 'العنوان الفعلي والمقر',
      hoursLabel: 'أوقات العمل وساعات الخدمة',
      coverageLabel: 'نطاق الخدمة الجغرافي',
      mapsButton: 'عرض الموقع والاتجاهات على Google Maps',
    },
    testimonials: {
      heading: 'آراء زبنائنا وشركائنا في أسفي',
      subheading: 'ثقة مئات أصحاب المطاعم، المتاجر الإلكترونية، والساكنة المسفيوية',
    },
    footer: {
      copyright: 'جميع الحقوق محفوظة 2026 © Safi Express Delivery (توصيل أسفي إكسبريس)',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة والاستخدام',
      quickLinks: 'روابط سريعة',
      contactInfo: 'معلومات التواصل المعتمدة',
    },
  },
  fr: {
    dir: 'ltr',
    brandName: 'Safi Express Delivery',
    brandTagline: 'Livraison Express à Safi',
    phone: '+212682199993',
    email: 'saidlhamri2001715@gmail.com',
    address: 'Boulevard Moulay Youssef, Plateau, 46000 Safi, Maroc',
    hours: 'Disponible 24h/24 et 7j/7',
    nav: {
      services: 'Nos Services',
      pricing: 'Tarification',
      coverage: 'Zones Couvertes',
      tracking: 'Suivi de Colis',
      contact: 'Contact & Google Maps',
      orderNow: 'Commander via WhatsApp',
      callNow: 'Appeler Maintenant',
    },
    hero: {
      kicker: 'Service Logistique Local de Référence à Safi',
      title: 'أسرع خدمة توصيل في مدينة أسفي - Livraison Rapide & Fiable à Safi',
      subtitle:
        'Service professionnel de livraison à domicile et aux entreprises à Safi : repas de restaurants, colis e-commerce avec paiement à la livraison (COD), et plis urgents 24h/24.',
      ctaWhatsApp: 'Commander via WhatsApp',
      ctaCall: 'Appel Direct: 0682199993',
      ctaTrack: 'Suivre un Colis',
      stats: {
        speed: { label: 'Délai moyen', value: '25-35 minutes' },
        availability: { label: 'Disponibilité', value: '24h/24 & 7j/7' },
        coverage: { label: 'Quartiers de Safi', value: '100% de la ville' },
        satisfaction: { label: 'Règlement COD', value: 'Transfert garanti' },
      },
    },
    services: {
      heading: 'Nos Services de Livraison à Safi',
      subheading: 'Des solutions sur-mesure pour commerçants, restaurateurs et particuliers.',
      food: {
        title: 'Livraison de Repas & Restaurants',
        desc: 'Caissons isothermes certifiés pour garantir des repas chauds livrés directement à votre porte.',
        features: ['Sacs et caissons thermiques', 'Livraison directe sans escale', 'Service déjeuner, dîner et nuit'],
      },
      ecommerce: {
        title: 'E-commerce & Colis avec COD',
        desc: 'Votre partenaire logistique à Safi : ramassage quotidien, livraison rapide et encaissement sécurisé.',
        features: ['Encaissement Cash on Delivery', 'Confirmation WhatsApp instantanée', 'Gestion proactive des retours'],
      },
      documents: {
        title: 'Documents & Plis Urgents',
        desc: 'Acheminement confidentiel et sécurisé de vos contrats, dossiers notariés et documents bancaires.',
        features: ['Confidentialité absolue', 'Accusé de réception avec signature', 'Priorité urgente express'],
      },
      errands: {
        title: 'Courses & Achats Express',
        desc: 'Achat et livraison de médicaments en pharmacie de garde, fournitures et courses de supermarché.',
        features: ['Achat dans tout Safi', 'Pharmacies de garde 24/7', 'Coursiers sérieux et fiables'],
      },
    },
    tracking: {
      heading: 'Suivi de Commande en Temps Réel',
      subheading: 'Saisissez votre code de suivi pour localiser votre coursier à travers les rues de Safi.',
      placeholder: 'Entrez le numéro de suivi (ex: SF-2026-8821)...',
      button: 'Rechercher',
      samplePrompt: 'Ou testez un exemple actif :',
      statusDelivered: 'Livré avec succès',
      statusInTransit: 'En cours de livraison avec coursier',
      statusAssigned: 'Coursier assigné, récupération en cours',
      statusReceived: 'Commande enregistrée dans le système',
    },
    calculator: {
      heading: 'Estimateur de Tarif Immédiat',
      subheading: 'Tarifs transparents à partir de 15 MAD dans tous les quartiers de Safi.',
      pickup: 'Quartier de départ',
      dropoff: "Quartier d'arrivée",
      type: 'Type de commande',
      estPrice: 'Prix estimé',
      estTime: 'Délai estimé',
      confirmWhatsApp: 'Confirmer ce trajet sur WhatsApp',
    },
    coverage: {
      heading: 'Couverture Intégrale de la Ville de Safi',
      subheading: 'Nos livreurs sillonnent en permanence tous les secteurs pour des livraisons ultra rapides.',
      safiCity: 'Ville de Safi',
      popularZones: 'Principaux quartiers desservis',
      viewOnGoogleMaps: 'Ouvrir sur Google Maps',
    },
    verification: {
      heading: 'Fiche d’Établissement Officielle',
      subheading: 'Informations professionnelles certifiées conformes aux données Google Maps Business.',
      officialProfile: 'Profil Certifié Google Maps & Entreprise Locale',
      verifiedBadge: 'Entreprise de livraison locale enregistrée à Safi',
      businessNameLabel: "Nom de l'entreprise",
      phoneLabel: 'Téléphone direct',
      emailLabel: 'E-mail professionnel',
      addressLabel: 'Adresse physique du siège',
      hoursLabel: "Heures d'ouverture",
      coverageLabel: 'Zone de chalandise',
      mapsButton: 'Voir la localisation sur Google Maps',
    },
    testimonials: {
      heading: 'Témoignages de nos Partenaires & Clients',
      subheading: 'Ce que disent les restaurateurs et commerçants de Safi de notre sérieux.',
    },
    footer: {
      copyright: 'Tous droits réservés 2026 © Safi Express Delivery (توصيل أسفي إكسبريس)',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions Générales de Service',
      quickLinks: 'Navigation',
      contactInfo: 'Coordonnées Officielles',
    },
  },
  en: {
    dir: 'ltr',
    brandName: 'Safi Express Delivery',
    brandTagline: 'Fast & Reliable Local Courier',
    phone: '+212682199993',
    email: 'saidlhamri2001715@gmail.com',
    address: 'Boulevard Moulay Youssef, Plateau, 46000 Safi, Morocco',
    hours: 'Open 24/7 (Around the clock)',
    nav: {
      services: 'Services',
      pricing: 'Pricing',
      coverage: 'Coverage Area',
      tracking: 'Track Order',
      contact: 'Contact & Google Maps',
      orderNow: 'WhatsApp Order',
      callNow: 'Call Now',
    },
    hero: {
      kicker: 'Safi’s Top-Rated Local On-Demand Courier Service',
      title: 'أسرع خدمة توصيل في مدينة أسفي - Livraison Rapide & Fiable à Safi',
      subtitle:
        'Fast and dependable 24/7 delivery across all neighborhoods of Safi, Morocco: hot restaurant takeout, e-commerce parcels with Cash on Delivery (COD), and urgent documents.',
      ctaWhatsApp: 'Order via WhatsApp Now',
      ctaCall: 'Direct Call: +212682199993',
      ctaTrack: 'Track an Order',
      stats: {
        speed: { label: 'Average Delivery', value: '25-35 mins' },
        availability: { label: 'Operating Hours', value: '24/7 Active' },
        coverage: { label: 'Safi Neighborhoods', value: '100% Citywide' },
        satisfaction: { label: 'COD Cash Transfer', value: '100% Guaranteed' },
      },
    },
    services: {
      heading: 'Core Delivery Services in Safi',
      subheading: 'Comprehensive logistics tailored for restaurants, merchants, and local residents.',
      food: {
        title: 'Food & Restaurant Delivery (توصيل المأكولات)',
        desc: 'Insulated thermal boxes keep your food piping hot and intact from top Safi kitchens straight to your doorstep.',
        features: ['Thermal insulated boxes', 'Direct non-stop delivery', 'Lunch, dinner & late-night shifts'],
      },
      ecommerce: {
        title: 'E-commerce & Package Delivery (توصيل السلع والطرود)',
        desc: 'Your trusted e-commerce fulfillment partner in Safi with same-day delivery and fast Cash on Delivery remittance.',
        features: ['Cash on Delivery (COD)', 'Instant WhatsApp delivery receipts', 'Seamless return handling'],
      },
      documents: {
        title: 'Document & Urgent Courier (توصيل الوثائق والطلبات المستعجلة)',
        desc: 'Confidential, hand-to-hand delivery for legal contracts, notarized files, banking records, and urgent packages.',
        features: ['Confidential handling', 'Signature & delivery confirmation', 'Express top priority'],
      },
      errands: {
        title: 'Personal Errands & Pharmacy Errands',
        desc: 'Quick shopping and retrieval from on-duty night pharmacies, supermarkets, and specialty hardware stores in Safi.',
        features: ['Citywide shopping support', 'Night duty pharmacy pickup', 'Punctual & vetted couriers'],
      },
    },
    tracking: {
      heading: 'Real-Time Order Tracking',
      subheading: 'Enter your dispatch code to view live courier status and timeline across Safi.',
      placeholder: 'Enter tracking code (e.g. SF-2026-8821)...',
      button: 'Track Parcel',
      samplePrompt: 'Or select an active live order demo:',
      statusDelivered: 'Delivered Successfully',
      statusInTransit: 'Out for Delivery with Courier',
      statusAssigned: 'Courier Assigned & Picking Up',
      statusReceived: 'Order Registered in Dispatch System',
    },
    calculator: {
      heading: 'Instant Delivery Fee Calculator',
      subheading: 'Clear, competitive pricing starting from 15 MAD across Safi neighborhoods.',
      pickup: 'Pickup Neighborhood (From)',
      dropoff: 'Dropoff Neighborhood (To)',
      type: 'Order Category',
      estPrice: 'Estimated Cost',
      estTime: 'Estimated Time',
      confirmWhatsApp: 'Confirm Order on WhatsApp',
    },
    coverage: {
      heading: 'Full Coverage Across Safi, Morocco',
      subheading: 'Our riders are strategically positioned across all key districts for minimum wait times.',
      safiCity: 'Safi City, Morocco',
      popularZones: 'Active Neighborhoods',
      viewOnGoogleMaps: 'Open on Google Maps',
    },
    verification: {
      heading: 'Verified Business Profile (Google Maps)',
      subheading: 'Official corporate credentials verified for Google Business Profile registration in Safi.',
      officialProfile: 'Google Maps Business Directory Official Record',
      verifiedBadge: 'Verified & Operating Local Courier in Safi, Morocco',
      businessNameLabel: 'Business Name',
      phoneLabel: 'Direct Phone',
      emailLabel: 'Official Email',
      addressLabel: 'Physical Office Location',
      hoursLabel: 'Operating Hours',
      coverageLabel: 'Service Area',
      mapsButton: 'View on Google Maps',
    },
    testimonials: {
      heading: 'Trusted by Local Safi Businesses',
      subheading: 'Real feedback from Safi merchants, restaurant managers, and residents.',
    },
    footer: {
      copyright: 'Copyright 2026 © Safi Express Delivery (توصيل أسفي إكسبريس). All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      quickLinks: 'Quick Links',
      contactInfo: 'Verified Contact Info',
    },
  },
};
