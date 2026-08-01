// ===== بيانات المستويات =====
const TIERS = {
    normal: { name: 'عادي', price: 1, color: '#4A90D9', label: '💎' },
    silver: { name: 'فضي', price: 5, color: '#C0C0C0', label: '⭐' },
    gold: { name: 'ذهبي', price: 10, color: '#FFD700', label: '👑' },
    royal: { name: 'ملكي', price: 100, color: '#9B59B6', label: '💠' }
};

// ===== أسماء متنوعة =====
const NAMES = [
    'أحمد محمد السيد', 'محمد عبدالله العمري', 'سارة خالد الخالدي', 'نورة سعيد الحربي',
    'علي حسن الشمري', 'فاطمة محمد الزهراء', 'حسن علي الغامدي', 'زينب عبدالله العلي',
    'خالد إبراهيم المالكي', 'ليلى عبدالرحمن القحطاني', 'عمر سعود العتيبي', 'منى صالح الشهراني',
    'سعيد مبارك الدوسري', 'هدى فيصل الفهد', 'ياسر ناصر المطيري', 'سمية خالد العيسى',
    'ماجد عبدالعزيز البلوي', 'رانيا محمد العنزي', 'إبراهيم علي السبيعي', 'سعاد عبدالله الزهراني',
    'عبدالله خالد الناصر', 'نجوى سليمان الخريف', 'ناصر عبدالرحمن السديري', 'غادة محمد الغامدي',
    'سامر عبدالله الحربي', 'دينا خالد الشريف', 'رامي فيصل الزيد', 'شيرين محمود المصري',
    'طارق ناصر الشهري', 'مها عبدالعزيز العبدالله', 'زياد خالد الفيصل', 'نادية حسن الحسن',
    'فهد ناصر النفيسي', 'ريما سعود السالم', 'سلطان عبدالعزيز القحطاني', 'نوال خالد الحمود',
    'مشاري عبدالله العجاجي', 'حياة سعد الموسى', 'بدر خالد العنزي', 'أمل صالح السيف',
    'شركة التقنية الرقمية المحدودة', 'مؤسسة الإبداع للاستشارات', 'أكاديمية المستقبل للتدريب',
    'مركز الابتكار التقني', 'مجموعة الرواد الدولية', 'شركة الحلول الذكية المتقدمة',
    'مختبر التصميم الإبداعي', 'استوديو إبداع للإنتاج', 'منصة الأعمال الرقمية',
    'شركة التطوير المتقدم للبرمجيات'
];

// ===== مواقع متنوعة =====
const LOCATIONS = [
    'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام',
    'الخبر', 'تبوك', 'حائل', 'القصيم', 'نجران',
    'جازان', 'عسير', 'الباحة', 'الجوف', 'الحدود الشمالية',
    'دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'رأس الخيمة',
    'القاهرة', 'الإسكندرية', 'الجيزة', 'بورسعيد', 'الإسماعيلية',
    'بيروت', 'طرابلس', 'صيدا', 'صور', 'زحلة',
    'عمان', 'الزرقاء', 'إربد', 'السلط', 'المفرق',
    'الكويت', 'حولي', 'الفحيحيل', 'الجهراء', 'مبارك الكبير',
    'الدوحة', 'الريان', 'الوكرة', 'الخور', 'مسيعيد',
    'مسقط', 'صحار', 'صلالة', 'نزوى', 'البريمي'
];

// ===== رسائل حسب المستوى =====
const MESSAGES = {
    normal: [
        'سعيد بانضمامي للمنصة! نتطلع للتعاون مع الجميع.',
        'شكراً لهذه الفرصة الرائعة. نحن هنا لنصنع الفرق.',
        'بداية مشوار جديد مع منصة مليون مربع.',
        'نتطلع لبناء علاقات مميزة مع الجميع.'
    ],
    silver: [
        'نحن رواد في مجال التقنية ونسعى للتميز والإبداع.',
        'شريككم الموثوق في النجاح. نبني المستقبل معاً.',
        'نحو آفاق جديدة مع منصة مليون مربع.',
        'نسعى لتقديم أفضل الحلول التقنية.'
    ],
    gold: [
        '⭐ قادة في الصناعة نصنع التميز كل يوم.',
        '👑 رواد التغيير الإيجابي في المجتمع.',
        '💡 نبتكر حلولاً ذكية لمستقبل أفضل.',
        '🚀 نطلق الإبداع ونحقق الطموحات.'
    ],
    royal: [
        '💠 نمثل قمة التميز والاحترافية في العمل.',
        '👑 القيادة الحقيقية تبدأ من هنا.',
        '🌟 نلهم العالم بأفكارنا المبتكرة.',
        '💫 نصنع التاريخ ونترك بصمة مميزة.',
        '🏆 رواد بلا منافس في مجالنا.'
    ]
};

// ===== الترجمات =====
const TRANSLATIONS = {
    ar: {
        banner: '🚀 انضم الآن واحجز مربعك المميز',
        available: 'المربعات المتاحة',
        members: 'مشترك',
        revenue: 'إيرادات',
        site_title: 'مليون مربع',
        subtitle: 'منصة التواصل البصرية الأولى',
        sponsors_title: '🌟 الرعاة الداعمون',
        become_sponsor: 'كن راعياً',
        all_tiers: 'جميع المستويات',
        normal: '💎 عادي',
        silver: '⭐ فضي',
        gold: '👑 ذهبي',
        royal: '💠 ملكي',
        search: '🔎 بحث عن مشترك...',
        year: 'سنة',
        loading: '⏳ جاري تحميل المربعات...',
        total_squares: 'إجمالي المربعات',
        virtual_members: 'افتراضي',
        sort_name: 'ترتيب حسب الاسم',
        sort_location: 'ترتيب حسب البلد',
        sort_tier: 'ترتيب حسب الفئة',
        sort_date: 'الأحدث أولاً',
        what_is: '🎯 ما هو مليون مربع؟',
        description: 'منصة ثورية تتيح للأفراد والشركات امتلاك مساحة رقمية تفاعلية.',
        steps_title: '📋 خطوات الاشتراك',
        step1: '<span class="step-number">1</span> <strong>اختر موقعك</strong> - انقر على أي مربع فارغ',
        step2: '<span class="step-number">2</span> <strong>حدد المستوى</strong> - عادي، فضي، ذهبي، أو ملكي',
        step3: '<span class="step-number">3</span> <strong>املأ بياناتك</strong> - الاسم، البريد، الموقع، صورة',
        step4: '<span class="step-number">4</span> <strong>ادفع بأمان</strong> - عبر PayPal أو Stripe أو IBAN',
        step5: '<span class="step-number">5</span> <strong>انطلق!</strong> - سيظهر مربعك فوراً',
        sponsor_payment_title: '🌟 نظام الدفع للرعاة',
        sponsor_payment_desc: 'اختر الباقة المناسبة لشركتك وادفع مباشرة عبر بوابة الدفع الإلكتروني',
        weekly: 'أسبوعي',
        monthly: 'شهري',
        yearly: 'سنوي',
        choose: 'اختر',
        popular: 'الأكثر طلباً',
        sp_weekly_1: '✅ عرض اسم الشركة',
        sp_weekly_2: '✅ مدة: 7 أيام',
        sp_weekly_3: '✅ رابط موقعك',
        sp_monthly_1: '✅ عرض اسم الشركة',
        sp_monthly_2: '✅ مدة: 30 يوماً',
        sp_monthly_3: '✅ رابط موقعك',
        sp_monthly_4: '✅ شعار مميز',
        sp_yearly_1: '✅ عرض اسم الشركة',
        sp_yearly_2: '✅ مدة: 365 يوماً',
        sp_yearly_3: '✅ رابط موقعك',
        sp_yearly_4: '✅ شعار مميز',
        sp_yearly_5: '✅ فيديو تعريفي',
        admin_hint: 'انقر مرتين للدخول إلى لوحة المدير',
        admin_login: 'الدخول إلى لوحة التحكم',
        login: 'دخول',
        payments: 'الدفع',
        sponsors: 'الرعاة',
        social: 'وسائل التواصل',
        suggestions: 'الاقتراحات',
        settings: 'الإعدادات',
        add_member: 'إضافة مشترك',
        export: 'تصدير',
        refresh: 'تحديث',
        name: 'الاسم',
        email: 'البريد',
        tier: 'المستوى',
        location: 'الموقع',
        type: 'النوع',
        actions: 'الإجراءات',
        total_members: 'إجمالي المشتركين',
        payment_settings: 'إعدادات الدفع',
        save: 'حفظ الإعدادات',
        sponsor_management: 'إدارة الرعاة',
        add_sponsor: 'إضافة راعي',
        social_media: 'إدارة وسائل التواصل الاجتماعي',
        suggestions_title: 'اقتراحات المشتركين',
        no_suggestions: 'لا توجد اقتراحات حالياً',
        settings_title: 'إعدادات الموقع',
        admin_email: 'بريد المدير:',
        admin_name: 'اسم المدير:',
        change_password: 'تغيير كلمة السر',
        change: 'تغيير',
        suggest_idea: '💡 شاركنا اقتراحك',
        send: 'إرسال الاقتراح',
        your_name: 'اسمك',
        your_email: 'بريدك الإلكتروني',
        your_suggestion: 'ما هي فكرتك لتطوير الموقع؟',
        contact_us: '📧 تواصل معنا',
        about_us: '📍 عن الموقع',
        about_text: 'منصة مليون مربع - حيث الإبداع يلتقي بالفرص',
        follow_us: '📱 تابعنا',
        rights: 'جميع الحقوق محفوظة',
        f_normal_1: '✅ عرض الاسم',
        f_normal_2: '✅ عرض الموقع',
        f_silver_1: '✅ عرض الاسم',
        f_silver_2: '✅ عرض الموقع',
        f_silver_3: '✅ رابط الموقع',
        f_silver_4: '✅ إطار فضي لامع',
        f_gold_1: '✅ عرض الاسم',
        f_gold_2: '✅ عرض الموقع',
        f_gold_3: '✅ رابط الموقع',
        f_gold_4: '✅ صورة شخصية',
        f_gold_5: '✅ إطار ذهبي لامع',
        f_gold_6: '✅ أولوية الظهور',
        f_royal_1: '✅ جميع ميزات الذهبي',
        f_royal_2: '✅ خلفية شفافة متحركة',
        f_royal_3: '✅ تأثير نبض مميز',
        f_royal_4: '✅ صورة خلفية مخصصة',
        f_royal_5: '✅ ظهور في الأعلى'
    },
    en: {
        banner: '🚀 Join now and book your special square',
        available: 'Available squares',
        members: 'Members',
        revenue: 'Revenue',
        site_title: 'Million Squares',
        subtitle: 'The First Visual Communication Platform',
        sponsors_title: '🌟 Supporting Sponsors',
        become_sponsor: 'Become a Sponsor',
        all_tiers: 'All Tiers',
        normal: '💎 Normal',
        silver: '⭐ Silver',
        gold: '👑 Gold',
        royal: '💠 Royal',
        search: '🔎 Search members...',
        year: 'year',
        loading: '⏳ Loading squares...',
        total_squares: 'Total squares',
        virtual_members: 'Virtual',
        sort_name: 'Sort by Name',
        sort_location: 'Sort by Location',
        sort_tier: 'Sort by Tier',
        sort_date: 'Latest First',
        what_is: '🎯 What is Million Squares?',
        description: 'A revolutionary platform that allows individuals and companies to own an interactive digital space.',
        steps_title: '📋 Subscription Steps',
        step1: '<span class="step-number">1</span> <strong>Choose your spot</strong> - Click on any empty square',
        step2: '<span class="step-number">2</span> <strong>Select tier</strong> - Normal, Silver, Gold, or Royal',
        step3: '<span class="step-number">3</span> <strong>Fill your data</strong> - Name, email, website, image',
        step4: '<span class="step-number">4</span> <strong>Pay securely</strong> - Via PayPal, Stripe, or IBAN',
        step5: '<span class="step-number">5</span> <strong>Go!</strong> - Your square will appear immediately',
        sponsor_payment_title: '🌟 Sponsor Payment System',
        sponsor_payment_desc: 'Choose the right package for your company and pay directly.',
        weekly: 'Weekly',
        monthly: 'Monthly',
        yearly: 'Yearly',
        choose: 'Choose',
        popular: 'Most Popular',
        sp_weekly_1: '✅ Display company name',
        sp_weekly_2: '✅ Duration: 7 days',
        sp_weekly_3: '✅ Your website link',
        sp_monthly_1: '✅ Display company name',
        sp_monthly_2: '✅ Duration: 30 days',
        sp_monthly_3: '✅ Your website link',
        sp_monthly_4: '✅ Featured logo',
        sp_yearly_1: '✅ Display company name',
        sp_yearly_2: '✅ Duration: 365 days',
        sp_yearly_3: '✅ Your website link',
        sp_yearly_4: '✅ Featured logo',
        sp_yearly_5: '✅ Promotional video',
        admin_hint: 'Double click to access admin panel',
        admin_login: 'Login to Dashboard',
        login: 'Login',
        payments: 'Payments',
        sponsors: 'Sponsors',
        social: 'Social Media',
        suggestions: 'Suggestions',
        settings: 'Settings',
        add_member: 'Add Member',
        export: 'Export',
        refresh: 'Refresh',
        name: 'Name',
        email: 'Email',
        tier: 'Tier',
        location: 'Location',
        type: 'Type',
        actions: 'Actions',
        total_members: 'Total Members',
        payment_settings: 'Payment Settings',
        save: 'Save Settings',
        sponsor_management: 'Sponsor Management',
        add_sponsor: 'Add Sponsor',
        social_media: 'Social Media Management',
        suggestions_title: 'Member Suggestions',
        no_suggestions: 'No suggestions yet',
        settings_title: 'Site Settings',
        admin_email: 'Admin Email:',
        admin_name: 'Admin Name:',
        change_password: 'Change Password',
        change: 'Change',
        suggest_idea: '💡 Share Your Suggestion',
        send: 'Send Suggestion',
        your_name: 'Your name',
        your_email: 'Your email',
        your_suggestion: 'What is your idea to improve the site?',
        contact_us: '📧 Contact Us',
        about_us: '📍 About Us',
        about_text: 'Million Squares Platform - Where Creativity Meets Opportunity',
        follow_us: '📱 Follow Us',
        rights: 'All Rights Reserved',
        f_normal_1: '✅ Show name',
        f_normal_2: '✅ Show location',
        f_silver_1: '✅ Show name',
        f_silver_2: '✅ Show location',
        f_silver_3: '✅ Website link',
        f_silver_4: '✅ Shiny silver border',
        f_gold_1: '✅ Show name',
        f_gold_2: '✅ Show location',
        f_gold_3: '✅ Website link',
        f_gold_4: '✅ Profile image',
        f_gold_5: '✅ Shiny gold border',
        f_gold_6: '✅ Priority display',
        f_royal_1: '✅ All gold features',
        f_royal_2: '✅ Animated transparent background',
        f_royal_3: '✅ Distinct pulse effect',
        f_royal_4: '✅ Custom background image',
        f_royal_5: '✅ Top display'
    },
    fr: {
        banner: '🚀 Rejoignez maintenant et réservez votre carré spécial',
        available: 'Carrés disponibles',
        members: 'Membres',
        revenue: 'Revenus',
        site_title: 'Million de Carrés',
        subtitle: 'La première plateforme de communication visuelle',
        sponsors_title: '🌟 Sponsors soutenant',
        become_sponsor: 'Devenir Sponsor',
        all_tiers: 'Tous les niveaux',
        normal: '💎 Normal',
        silver: '⭐ Argent',
        gold: '👑 Or',
        royal: '💠 Royal',
        search: '🔎 Rechercher des membres...',
        year: 'an',
        loading: '⏳ Chargement des carrés...',
        total_squares: 'Total des carrés',
        virtual_members: 'Virtuel',
        sort_name: 'Trier par nom',
        sort_location: 'Trier par lieu',
        sort_tier: 'Trier par niveau',
        sort_date: 'Plus récent',
        what_is: '🎯 Qu\'est-ce que Million de Carrés?',
        description: 'Une plateforme révolutionnaire qui permet de posséder un espace numérique interactif.',
        steps_title: '📋 Étapes d\'abonnement',
        step1: '<span class="step-number">1</span> <strong>Choisissez votre emplacement</strong> - Cliquez sur un carré vide',
        step2: '<span class="step-number">2</span> <strong>Sélectionnez le niveau</strong> - Normal, Argent, Or, ou Royal',
        step3: '<span class="step-number">3</span> <strong>Remplissez vos données</strong> - Nom, email, site web, image',
        step4: '<span class="step-number">4</span> <strong>Payez en toute sécurité</strong> - Via PayPal, Stripe, ou IBAN',
        step5: '<span class="step-number">5</span> <strong>Go!</strong> - Votre carré apparaîtra immédiatement',
        sponsor_payment_title: '🌟 Système de paiement des sponsors',
        sponsor_payment_desc: 'Choisissez le forfait adapté à votre entreprise.',
        weekly: 'Hebdomadaire',
        monthly: 'Mensuel',
        yearly: 'Annuel',
        choose: 'Choisir',
        popular: 'Le plus populaire',
        sp_weekly_1: '✅ Afficher le nom de l\'entreprise',
        sp_weekly_2: '✅ Durée: 7 jours',
        sp_weekly_3: '✅ Lien vers votre site',
        sp_monthly_1: '✅ Afficher le nom de l\'entreprise',
        sp_monthly_2: '✅ Durée: 30 jours',
        sp_monthly_3: '✅ Lien vers votre site',
        sp_monthly_4: '✅ Logo en vedette',
        sp_yearly_1: '✅ Afficher le nom de l\'entreprise',
        sp_yearly_2: '✅ Durée: 365 jours',
        sp_yearly_3: '✅ Lien vers votre site',
        sp_yearly_4: '✅ Logo en vedette',
        sp_yearly_5: '✅ Vidéo promotionnelle',
        admin_hint: 'Double-cliquez pour accéder au panneau',
        admin_login: 'Connexion au tableau de bord',
        login: 'Connexion',
        payments: 'Paiements',
        sponsors: 'Sponsors',
        social: 'Réseaux sociaux',
        suggestions: 'Suggestions',
        settings: 'Paramètres',
        add_member: 'Ajouter un membre',
        export: 'Exporter',
        refresh: 'Rafraîchir',
        name: 'Nom',
        email: 'Email',
        tier: 'Niveau',
        location: 'Emplacement',
        type: 'Type',
        actions: 'Actions',
        total_members: 'Total des membres',
        payment_settings: 'Paramètres de paiement',
        save: 'Enregistrer',
        sponsor_management: 'Gestion des sponsors',
        add_sponsor: 'Ajouter un sponsor',
        social_media: 'Gestion des réseaux sociaux',
        suggestions_title: 'Suggestions des membres',
        no_suggestions: 'Aucune suggestion',
        settings_title: 'Paramètres du site',
        admin_email: 'Email de l\'administrateur:',
        admin_name: 'Nom de l\'administrateur:',
        change_password: 'Changer le mot de passe',
        change: 'Changer',
        suggest_idea: '💡 Partagez votre suggestion',
        send: 'Envoyer',
        your_name: 'Votre nom',
        your_email: 'Votre email',
        your_suggestion: 'Quelle est votre idée?',
        contact_us: '📧 Contactez-nous',
        about_us: '📍 À propos de nous',
        about_text: 'Plateforme Million de Carrés',
        follow_us: '📱 Suivez-nous',
        rights: 'Tous droits réservés',
        f_normal_1: '✅ Afficher le nom',
        f_normal_2: '✅ Afficher l\'emplacement',
        f_silver_1: '✅ Afficher le nom',
        f_silver_2: '✅ Afficher l\'emplacement',
        f_silver_3: '✅ Lien site web',
        f_silver_4: '✅ Bordure argentée',
        f_gold_1: '✅ Afficher le nom',
        f_gold_2: '✅ Afficher l\'emplacement',
        f_gold_3: '✅ Lien site web',
        f_gold_4: '✅ Photo de profil',
        f_gold_5: '✅ Bordure dorée',
        f_gold_6: '✅ Affichage prioritaire',
        f_royal_1: '✅ Toutes les fonctionnalités Or',
        f_royal_2: '✅ Fond transparent animé',
        f_royal_3: '✅ Effet de pulsation',
        f_royal_4: '✅ Image de fond personnalisée',
        f_royal_5: '✅ Affichage en haut'
    },
    es: {
        banner: '🚀 Únete ahora y reserva tu cuadrado especial',
        available: 'Cuadrados disponibles',
        members: 'Miembros',
        revenue: 'Ingresos',
        site_title: 'Millón de Cuadrados',
        subtitle: 'La primera plataforma de comunicación visual',
        sponsors_title: '🌟 Patrocinadores',
        become_sponsor: 'Ser Patrocinador',
        all_tiers: 'Todos los niveles',
        normal: '💎 Normal',
        silver: '⭐ Plata',
        gold: '👑 Oro',
        royal: '💠 Real',
        search: '🔎 Buscar miembros...',
        year: 'año',
        loading: '⏳ Cargando cuadrados...',
        total_squares: 'Total de cuadrados',
        virtual_members: 'Virtual',
        sort_name: 'Ordenar por nombre',
        sort_location: 'Ordenar por ubicación',
        sort_tier: 'Ordenar por nivel',
        sort_date: 'Más reciente',
        what_is: '🎯 ¿Qué es Millón de Cuadrados?',
        description: 'Una plataforma revolucionaria para poseer un espacio digital interactivo.',
        steps_title: '📋 Pasos de suscripción',
        step1: '<span class="step-number">1</span> <strong>Elige tu lugar</strong> - Haz clic en un cuadrado vacío',
        step2: '<span class="step-number">2</span> <strong>Selecciona el nivel</strong> - Normal, Plata, Oro o Real',
        step3: '<span class="step-number">3</span> <strong>Completa tus datos</strong> - Nombre, email, sitio web, imagen',
        step4: '<span class="step-number">4</span> <strong>Paga con seguridad</strong> - Vía PayPal, Stripe o IBAN',
        step5: '<span class="step-number">5</span> <strong>¡Adelante!</strong> - Tu cuadrado aparecerá',
        sponsor_payment_title: '🌟 Sistema de pago para patrocinadores',
        sponsor_payment_desc: 'Elige el paquete adecuado para tu empresa.',
        weekly: 'Semanal',
        monthly: 'Mensual',
        yearly: 'Anual',
        choose: 'Elegir',
        popular: 'Más popular',
        sp_weekly_1: '✅ Mostrar nombre de empresa',
        sp_weekly_2: '✅ Duración: 7 días',
        sp_weekly_3: '✅ Enlace a tu sitio',
        sp_monthly_1: '✅ Mostrar nombre de empresa',
        sp_monthly_2: '✅ Duración: 30 días',
        sp_monthly_3: '✅ Enlace a tu sitio',
        sp_monthly_4: '✅ Logo destacado',
        sp_yearly_1: '✅ Mostrar nombre de empresa',
        sp_yearly_2: '✅ Duración: 365 días',
        sp_yearly_3: '✅ Enlace a tu sitio',
        sp_yearly_4: '✅ Logo destacado',
        sp_yearly_5: '✅ Video promocional',
        admin_hint: 'Haga doble clic para acceder al panel',
        admin_login: 'Iniciar sesión en el panel',
        login: 'Iniciar sesión',
        payments: 'Pagos',
        sponsors: 'Patrocinadores',
        social: 'Redes sociales',
        suggestions: 'Sugerencias',
        settings: 'Configuración',
        add_member: 'Agregar miembro',
        export: 'Exportar',
        refresh: 'Actualizar',
        name: 'Nombre',
        email: 'Email',
        tier: 'Nivel',
        location: 'Ubicación',
        type: 'Tipo',
        actions: 'Acciones',
        total_members: 'Total de miembros',
        payment_settings: 'Configuración de pago',
        save: 'Guardar configuración',
        sponsor_management: 'Gestión de patrocinadores',
        add_sponsor: 'Agregar patrocinador',
        social_media: 'Gestión de redes sociales',
        suggestions_title: 'Sugerencias de miembros',
        no_suggestions: 'No hay sugerencias',
        settings_title: 'Configuración del sitio',
        admin_email: 'Email del administrador:',
        admin_name: 'Nombre del administrador:',
        change_password: 'Cambiar contraseña',
        change: 'Cambiar',
        suggest_idea: '💡 Comparte tu sugerencia',
        send: 'Enviar',
        your_name: 'Tu nombre',
        your_email: 'Tu email',
        your_suggestion: '¿Cuál es tu idea?',
        contact_us: '📧 Contáctanos',
        about_us: '📍 Sobre nosotros',
        about_text: 'Plataforma Millón de Cuadrados',
        follow_us: '📱 Síguenos',
        rights: 'Todos los derechos reservados',
        f_normal_1: '✅ Mostrar nombre',
        f_normal_2: '✅ Mostrar ubicación',
        f_silver_1: '✅ Mostrar nombre',
        f_silver_2: '✅ Mostrar ubicación',
        f_silver_3: '✅ Enlace web',
        f_silver_4: '✅ Borde plateado',
        f_gold_1: '✅ Mostrar nombre',
        f_gold_2: '✅ Mostrar ubicación',
        f_gold_3: '✅ Enlace web',
        f_gold_4: '✅ Imagen de perfil',
        f_gold_5: '✅ Borde dorado',
        f_gold_6: '✅ Visualización prioritaria',
        f_royal_1: '✅ Todas las características Oro',
        f_royal_2: '✅ Fondo transparente animado',
        f_royal_3: '✅ Efecto de pulso',
        f_royal_4: '✅ Imagen de fondo personalizada',
        f_royal_5: '✅ Visualización superior'
    },
    de: {
        banner: '🚀 Jetzt beitreten und dein spezielles Quadrat buchen',
        available: 'Verfügbare Quadrate',
        members: 'Mitglieder',
        revenue: 'Einnahmen',
        site_title: 'Million Quadrate',
        subtitle: 'Die erste visuelle Kommunikationsplattform',
        sponsors_title: '🌟 Unterstützende Sponsoren',
        become_sponsor: 'Sponsor werden',
        all_tiers: 'Alle Stufen',
        normal: '💎 Normal',
        silver: '⭐ Silber',
        gold: '👑 Gold',
        royal: '💠 Königlich',
        search: '🔎 Mitglieder suchen...',
        year: 'Jahr',
        loading: '⏳ Quadrate werden geladen...',
        total_squares: 'Gesamt Quadrate',
        virtual_members: 'Virtuell',
        sort_name: 'Sortieren nach Name',
        sort_location: 'Sortieren nach Ort',
        sort_tier: 'Sortieren nach Stufe',
        sort_date: 'Neueste zuerst',
        what_is: '🎯 Was ist Million Quadrate?',
        description: 'Eine revolutionäre Plattform für interaktive digitale Räume.',
        steps_title: '📋 Abonnementschritte',
        step1: '<span class="step-number">1</span> <strong>Wähle deinen Platz</strong> - Klicke auf ein leeres Quadrat',
        step2: '<span class="step-number">2</span> <strong>Wähle die Stufe</strong> - Normal, Silber, Gold oder Königlich',
        step3: '<span class="step-number">3</span> <strong>Fülle deine Daten aus</strong> - Name, E-Mail, Webseite, Bild',
        step4: '<span class="step-number">4</span> <strong>Sicher bezahlen</strong> - Über PayPal, Stripe oder IBAN',
        step5: '<span class="step-number">5</span> <strong>Los!</strong> - Dein Quadrat erscheint sofort',
        sponsor_payment_title: '🌟 Sponsor-Zahlungssystem',
        sponsor_payment_desc: 'Wähle das passende Paket für dein Unternehmen.',
        weekly: 'Wöchentlich',
        monthly: 'Monatlich',
        yearly: 'Jährlich',
        choose: 'Wählen',
        popular: 'Am beliebtesten',
        sp_weekly_1: '✅ Firmennamen anzeigen',
        sp_weekly_2: '✅ Dauer: 7 Tage',
        sp_weekly_3: '✅ Link zu deiner Website',
        sp_monthly_1: '✅ Firmennamen anzeigen',
        sp_monthly_2: '✅ Dauer: 30 Tage',
        sp_monthly_3: '✅ Link zu deiner Website',
        sp_monthly_4: '✅ Hervorgehobenes Logo',
        sp_yearly_1: '✅ Firmennamen anzeigen',
        sp_yearly_2: '✅ Dauer: 365 Tage',
        sp_yearly_3: '✅ Link zu deiner Website',
        sp_yearly_4: '✅ Hervorgehobenes Logo',
        sp_yearly_5: '✅ Werbevideo',
        admin_hint: 'Doppelklick für Admin-Panel',
        admin_login: 'Zum Dashboard anmelden',
        login: 'Anmelden',
        payments: 'Zahlungen',
        sponsors: 'Sponsoren',
        social: 'Soziale Medien',
        suggestions: 'Vorschläge',
        settings: 'Einstellungen',
        add_member: 'Mitglied hinzufügen',
        export: 'Exportieren',
        refresh: 'Aktualisieren',
        name: 'Name',
        email: 'E-Mail',
        tier: 'Stufe',
        location: 'Standort',
        type: 'Typ',
        actions: 'Aktionen',
        total_members: 'Gesamt Mitglieder',
        payment_settings: 'Zahlungseinstellungen',
        save: 'Einstellungen speichern',
        sponsor_management: 'Sponsorenverwaltung',
        add_sponsor: 'Sponsor hinzufügen',
        social_media: 'Social Media Verwaltung',
        suggestions_title: 'Mitgliedervorschläge',
        no_suggestions: 'Noch keine Vorschläge',
        settings_title: 'Website-Einstellungen',
        admin_email: 'Admin-E-Mail:',
        admin_name: 'Admin-Name:',
        change_password: 'Passwort ändern',
        change: 'Ändern',
        suggest_idea: '💡 Teile deinen Vorschlag',
        send: 'Senden',
        your_name: 'Dein Name',
        your_email: 'Deine E-Mail',
        your_suggestion: 'Was ist deine Idee?',
        contact_us: '📧 Kontaktiere uns',
        about_us: '📍 Über uns',
        about_text: 'Million Quadrate Plattform',
        follow_us: '📱 Folge uns',
        rights: 'Alle Rechte vorbehalten',
        f_normal_1: '✅ Name anzeigen',
        f_normal_2: '✅ Standort anzeigen',
        f_silver_1: '✅ Name anzeigen',
        f_silver_2: '✅ Standort anzeigen',
        f_silver_3: '✅ Weblink',
        f_silver_4: '✅ Silberner Rand',
        f_gold_1: '✅ Name anzeigen',
        f_gold_2: '✅ Standort anzeigen',
        f_gold_3: '✅ Weblink',
        f_gold_4: '✅ Profilbild',
        f_gold_5: '✅ Goldener Rand',
        f_gold_6: '✅ Prioritätsanzeige',
        f_royal_1: '✅ Alle Gold-Funktionen',
        f_royal_2: '✅ Animierter transparenter Hintergrund',
        f_royal_3: '✅ Deutlicher Pulseffekt',
        f_royal_4: '✅ Benutzerdefiniertes Hintergrundbild',
        f_royal_5: '✅ Oben anzeigen'
    }
};

// ===== المتغيرات العامة =====
let members = [];
let sponsors = [
    { name: 'شركة الاتصالات', link: '#', amount: 1000, duration: 'monthly' },
    { name: 'بنك الرياض', link: '#', amount: 500, duration: 'weekly' },
    { name: 'أكاديمية البرمجة', link: '#', amount: 2000, duration: 'monthly' }
];
let suggestions = [];
let socialLinks = { facebook: '', twitter: '', instagram: '', youtube: '', linkedin: '', tiktok: '', snapchat: '' };
let totalRevenue = 0;
let currentZoom = 1;
let currentLang = 'ar';
let virtualGrid = null;

// ===== عناصر DOM =====
let gridCanvas, searchInput, filterTier, sortBy, liveClock;
let totalMembersDisplay, totalMembers, totalRevenueEl, availableSquares;
let membersTableBody, loginError, siteBackground, loadingIndicator;

// ===== إنشاء مشتركين افتراضيين (100 فقط) =====
function generateVirtualMembers(count) {
    const result = [];
    const tierKeys = ['normal', 'silver', 'gold', 'royal'];
    const step = Math.floor(1000000 / count);
    
    for (let i = 0; i < count; i++) {
        const tier = tierKeys[i % tierKeys.length];
        const isCompany = i % 5 === 0 && i > 10;
        
        let name, email;
        if (isCompany) {
            const companyNames = [
                'شركة التقنية الرقمية المحدودة', 'مؤسسة الإبداع للاستشارات', 
                'أكاديمية المستقبل للتدريب', 'مركز الابتكار التقني', 
                'مجموعة الرواد الدولية', 'شركة الحلول الذكية المتقدمة'
            ];
            name = companyNames[i % companyNames.length];
            email = `info@${name.replace(/شركة |مؤسسة |أكاديمية |مركز |مجموعة /g, '').replace(/ /g, '').toLowerCase()}.com`;
        } else {
            const nameIndex = i % NAMES.length;
            name = NAMES[nameIndex];
            email = `${name.replace(/ /g, '').toLowerCase()}${i}@example.com`;
        }
        
        const locIndex = i % LOCATIONS.length;
        const location = LOCATIONS[locIndex];
        const imageUrl = `https://picsum.photos/seed/${i + 100}/100/100`;
        
        const tierMessages = MESSAGES[tier] || MESSAGES.normal;
        const message = tierMessages[i % tierMessages.length];
        
        result.push({
            id: `v${i + 1}`,
            name: name,
            email: email,
            location: location,
            tier: tier,
            website: isCompany ? `https://${name.replace(/ /g, '').toLowerCase()}.com` : `https://${name.replace(/ /g, '').toLowerCase()}.com`,
            message: message,
            image: imageUrl,
            isRoyal: tier === 'royal',
            isCompany: isCompany,
            isVirtual: true,
            position: i * step,
            joinDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString('ar-EG'),
            rating: Math.floor(Math.random() * 5) + 1,
            votes: Math.floor(Math.random() * 50) + 1
        });
    }
    return result;
}

// ===== التخزين المحلي =====
function saveData() {
    const dataToSave = {
        members: members.map(m => ({ ...m, isVirtual: m.isVirtual || false })),
        sponsors: sponsors,
        suggestions: suggestions,
        totalRevenue: totalRevenue,
        socialLinks: socialLinks
    };
    localStorage.setItem('millionSquaresData', JSON.stringify(dataToSave));
}

function loadData() {
    const saved = localStorage.getItem('millionSquaresData');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            members = data.members || [];
            sponsors = data.sponsors || sponsors;
            suggestions = data.suggestions || suggestions;
            totalRevenue = data.totalRevenue || 0;
            socialLinks = data.socialLinks || socialLinks;
            
            const realMembers = members.filter(m => !m.isVirtual);
            if (realMembers.length >= 1000) {
                members = members.filter(m => !m.isVirtual);
                saveData();
            }
            return true;
        } catch(e) { return false; }
    }
    return false;
}

// ===== تهيئة البيانات =====
if (!loadData() || members.length === 0) {
    members = generateVirtualMembers(100);
    totalRevenue = members.reduce((sum, m) => sum + TIERS[m.tier].price, 0);
    saveData();
} else {
    const virtualCount = members.filter(m => m.isVirtual).length;
    const realCount = members.filter(m => !m.isVirtual).length;
    if (virtualCount === 0 && realCount < 100) {
        const newVirtual = generateVirtualMembers(100 - realCount);
        members = [...members, ...newVirtual];
        saveData();
    }
}

// ===== محاكاة متصلين =====
function simulateLiveUsers() {
    const liveUsers = document.getElementById('liveUsers');
    const todayMembers = document.getElementById('todayMembers');
    if (liveUsers) liveUsers.textContent = Math.floor(Math.random() * 33) + 12;
    if (todayMembers) todayMembers.textContent = Math.floor(Math.random() * 12) + 3;
}
setInterval(simulateLiveUsers, 10000);
simulateLiveUsers();

// ===== إشعارات =====
function showNotification() {
    const realMembers = members.filter(m => !m.isVirtual);
    if (realMembers.length === 0) return;
    const randomMember = realMembers[Math.floor(Math.random() * realMembers.length)];
    const tierLabels = { normal: '💎 عادي', silver: '⭐ فضي', gold: '👑 ذهبي', royal: '💠 ملكي' };
    const notification = document.createElement('div');
    notification.className = 'notification-popup';
    notification.innerHTML = `<div class="notification-content"><span class="notification-icon">🎉</span><span>${randomMember.name} من ${randomMember.location} اشترك في ${tierLabels[randomMember.tier]}</span></div>`;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => { notification.classList.remove('show'); setTimeout(() => notification.remove(), 500); }, 5000);
}
setInterval(() => { if (members.filter(m => !m.isVirtual).length > 0) showNotification(); }, Math.random() * 30000 + 30000);

// ===== نظام الترتيب =====
function sortMembers(sortByValue) {
    const sorted = [...members];
    switch(sortByValue) {
        case 'name': sorted.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'location': sorted.sort((a, b) => a.location.localeCompare(b.location)); break;
        case 'tier': { const order = { royal: 0, gold: 1, silver: 2, normal: 3 }; sorted.sort((a, b) => (order[a.tier] || 4) - (order[b.tier] || 4)); break; }
        case 'date': sorted.sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate)); break;
    }
    return sorted;
}

// ===== نظام التحميل التدريجي =====
class VirtualGrid {
    constructor(container, totalCells = 1000000) {
        this.container = container;
        this.totalCells = totalCells;
        this.loadedCount = 0;
        this.batchSize = 5000;
        this.isLoading = false;
        this.allCells = [];
        this.filtered = false;
        this.sortByValue = 'name';
        this.container.addEventListener('scroll', () => this.handleScroll());
        this.loadMore();
    }

    handleScroll() {
        if (this.filtered) return;
        const { scrollTop, clientHeight, scrollHeight } = this.container;
        if (scrollTop + clientHeight >= scrollHeight - 300) this.loadMore();
    }

    loadMore() {
        if (this.isLoading || this.loadedCount >= this.totalCells || this.filtered) return;
        this.isLoading = true;
        if (loadingIndicator) loadingIndicator.classList.add('active');

        requestAnimationFrame(() => {
            const start = this.loadedCount;
            const end = Math.min(start + this.batchSize, this.totalCells);
            const fragment = document.createDocumentFragment();
            const sortedMembers = sortMembers(this.sortByValue);
            const memberCount = sortedMembers.length;
            const step = memberCount > 0 ? Math.floor(this.totalCells / memberCount) : 1;

            for (let i = start; i < end; i++) {
                const cell = document.createElement('div');
                cell.className = 'pixel-cell';
                cell.dataset.index = i;
                let member = sortedMembers.find(m => m.position === i);
                if (!member && memberCount > 0) {
                    const memberIndex = Math.floor(i / step) % memberCount;
                    member = sortedMembers[memberIndex];
                }

                if (member) {
                    const tierInfo = TIERS[member.tier];
                    const stars = '⭐'.repeat(member.rating || 3) + '☆'.repeat(5 - (member.rating || 3));
                    cell.className = `pixel-cell tier-${member.tier}`;
                    cell.innerHTML = `
                        ${member.image ? `<img src="${member.image}" class="cell-image" loading="lazy">` : ''}
                        <div class="cell-name">${member.name}</div>
                        <div class="cell-tier">${tierInfo.label}</div>
                        ${member.isVirtual ? '<div class="cell-virtual-badge">افتراضي</div>' : ''}
                        <div class="cell-tooltip">
                            <strong>${member.name}</strong><br>📍 ${member.location}<br>✉️ ${member.email}<br>${member.website ? `🔗 ${member.website}` : ''}<br>💬 ${member.message || 'مرحباً!'}<br>
                            <span style="color:${tierInfo.color};font-weight:700">${tierInfo.label} ${tierInfo.name} ($${tierInfo.price}/سنة)</span>
                            <br><small>⭐ ${stars} (${member.votes || 0} تقييم)</small>${member.isVirtual ? '<br><small>🔄 مشترك افتراضي</small>' : ''}
                        </div>
                        <div class="cell-rating"><span class="stars">${stars}</span><span class="votes">(${member.votes || 0})</span></div>
                        ${member.isRoyal ? '<div class="royal-crown">👑</div>' : ''}
                    `;
                    cell.addEventListener('click', () => showMemberInfo(member));
                } else {
                    cell.className = 'pixel-cell empty';
                    cell.textContent = '+';
                    cell.addEventListener('click', showPaymentDialog);
                }
                fragment.appendChild(cell);
                this.allCells.push(cell);
            }

            this.container.appendChild(fragment);
            this.loadedCount = end;
            this.isLoading = false;
            if (loadingIndicator) loadingIndicator.classList.remove('active');
            if (this.loadedCount < this.totalCells) setTimeout(() => this.loadMore(), 20);
            else if (loadingIndicator) { loadingIndicator.innerHTML = '<span>✅ تم تحميل جميع المربعات!</span>'; setTimeout(() => loadingIndicator.classList.remove('active'), 2000); }
            updateStats();
        });
    }

    updateSort(sortValue) { this.sortByValue = sortValue; this.reset(); }

    filter(text, tier) {
        this.filtered = true;
        const lowerText = text.toLowerCase();
        const sortedMembers = sortMembers(this.sortByValue);
        const memberCount = sortedMembers.length;
        const step = memberCount > 0 ? Math.floor(this.totalCells / memberCount) : 1;
        this.allCells.forEach((cell, index) => {
            let member = sortedMembers.find(m => m.position === index);
            if (!member && memberCount > 0) { const mi = Math.floor(index / step) % memberCount; member = sortedMembers[mi]; }
            if (!member) { cell.style.display = 'block'; return; }
            const matchText = member.name.includes(lowerText) || member.email.includes(lowerText) || member.location.includes(lowerText);
            const matchTier = tier === 'all' || member.tier === tier;
            cell.style.display = (matchText && matchTier) ? 'block' : 'none';
        });
    }

    resetFilter() { this.filtered = false; this.allCells.forEach(cell => cell.style.display = 'block'); }
    reset() { this.container.innerHTML = ''; this.allCells = []; this.loadedCount = 0; this.filtered = false; this.loadMore(); }
}

// ===== دوال العرض =====
function updateStats() {
    const realCount = members.filter(m => !m.isVirtual).length;
    const virtualCount = members.filter(m => m.isVirtual).length;
    const totalCount = members.length;
    if (realCount >= 1000) { members = members.filter(m => !m.isVirtual); saveData(); updateStats(); return; }
    if (totalMembers) totalMembers.textContent = totalCount;
    if (totalMembersDisplay) totalMembersDisplay.textContent = totalCount;
    if (availableSquares) availableSquares.textContent = (1000000 - totalCount).toLocaleString();
    if (totalRevenueEl) totalRevenueEl.textContent = `$${totalRevenue.toFixed(0)}`;
    const virtualCountEl = document.getElementById('virtualCount');
    if (virtualCountEl) virtualCountEl.textContent = virtualCount;
    const tableVirtualCount = document.getElementById('tableVirtualCount');
    if (tableVirtualCount) tableVirtualCount.textContent = virtualCount;
    updateGridStats();
}

function updateGridStats() {
    const totalCount = members.length;
    const gridMemberCount = document.getElementById('gridMemberCount');
    const gridAvailableCount = document.getElementById('gridAvailableCount');
    const tableTotal = document.getElementById('tableTotalMembers');
    if (gridMemberCount) gridMemberCount.textContent = totalCount;
    if (gridAvailableCount) gridAvailableCount.textContent = (1000000 - totalCount).toLocaleString();
    if (tableTotal) tableTotal.textContent = totalCount;
}

function showMemberInfo(member) {
    const tierInfo = TIERS[member.tier];
    const stars = '⭐'.repeat(member.rating || 3) + '☆'.repeat(5 - (member.rating || 3));
    const type = member.isVirtual ? '(افتراضي)' : '(حقيقي)';
    alert(`👤 ${member.name} ${type}\n📧 ${member.email}\n📍 ${member.location}\n${member.website ? `🔗 ${member.website}\n` : ''}💬 ${member.message}\n⭐ التقييم: ${stars} (${member.votes || 0} صوت)\n\n🏷️ المستوى: ${tierInfo.label} ${tierInfo.name}\n💰 السعر: $${tierInfo.price}/سنة`);
}

function showPaymentDialog() {
    const options = Object.entries(TIERS).map(([k,v]) => `${k}: ${v.label} ${v.name} - $${v.price}/سنة`).join('\n');
    const choice = prompt(`💳 اختر مستوى الاشتراك:\n${options}\n\nأدخل نوع المستوى (normal, silver, gold, royal):`);
    if (!choice || !TIERS[choice]) { alert('❌ مستوى غير صحيح'); return; }

    const tierInfo = TIERS[choice];
    const name = prompt('👤 أدخل اسمك الكامل:');
    if (!name) return;
    const email = prompt('✉️ أدخل بريدك الإلكتروني:');
    if (!email) return;
    const location = prompt('📍 أدخل موقعك:') || 'غير محدد';
    const website = prompt('🔗 رابط موقعك (اختياري):') || '';
    const image = prompt('🖼️ رابط الصورة (اختياري):') || `https://picsum.photos/seed/${Date.now()}/100/100`;

    const method = prompt('💳 طريقة الدفع:\n1. PayPal\n2. Stripe\n3. IBAN\n\nأدخل الرقم (1-3):');
    if (!method || !['1','2','3'].includes(method)) { alert('❌ طريقة غير صحيحة'); return; }

    const methods = ['PayPal','Stripe','IBAN'];
    alert(`✅ جارٍ التحويل إلى ${methods[parseInt(method)-1]}\nالمبلغ: $${tierInfo.price}`);

    const maxPosition = members.reduce((max, m) => Math.max(max, m.position || 0), 0);
    const newPosition = maxPosition + 1000;
    const newMember = {
        id: `m${Date.now()}`, name, email, location, tier: choice, website, image,
        message: `مرحباً، أنا ${name} من ${location}`,
        isRoyal: choice === 'royal', isCompany: false, isVirtual: false,
        position: newPosition, rating: 0, votes: 0,
        joinDate: new Date().toLocaleDateString('ar-EG')
    };
    members.push(newMember);
    totalRevenue += tierInfo.price;
    saveData();
    if (virtualGrid) virtualGrid.reset();
    renderMembersTable();
    updateStats();
    updateRoyalBackground();
    alert(`🎉 تم الاشتراك بنجاح!\nالمستوى: ${tierInfo.label} ${tierInfo.name}\nالمبلغ: $${tierInfo.price}`);
}

// ===== الرعاة =====
function renderSponsors() {
    const track = document.getElementById('marqueeTrack');
    if (!track) return;
    track.innerHTML = '';
    const durationMap = { weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي' };
    sponsors.forEach(s => {
        const item = document.createElement('span');
        item.className = 'sponsor-item';
        item.innerHTML = `🏢 ${s.name} <span class="sponsor-badge">${durationMap[s.duration]}</span> $${s.amount}`;
        track.appendChild(item);
    });
    sponsors.forEach(s => {
        const item = document.createElement('span');
        item.className = 'sponsor-item';
        item.innerHTML = `🏢 ${s.name} <span class="sponsor-badge">${durationMap[s.duration]}</span> $${s.amount}`;
        track.appendChild(item);
    });
}

// ===== خلفية الملكيين =====
let royalInterval = null;
let royalIndex = 0;

function updateRoyalBackground() {
    const royals = members.filter(m => m.tier === 'royal' && m.image);
    if (royals.length === 0) {
        if (siteBackground) { siteBackground.classList.remove('active'); siteBackground.style.backgroundImage = ''; }
        if (royalInterval) clearInterval(royalInterval);
        return;
    }
    if (royalInterval) clearInterval(royalInterval);
    royalIndex = 0;
    setRoyalImage(royals[0]);
    royalInterval = setInterval(() => {
        royalIndex = (royalIndex + 1) % royals.length;
        setRoyalImage(royals[royalIndex]);
    }, 8000);
}

function setRoyalImage(member) {
    if (member && member.image && siteBackground) {
        siteBackground.style.backgroundImage = `url(${member.image})`;
        siteBackground.classList.add('active');
    }
}

// ===== لوحة التحكم =====
let adminClickCount = 0;
let adminClickTimer = null;

function renderMembersTable() {
    if (!membersTableBody) return;
    membersTableBody.innerHTML = '';
    const sortedForTable = [...members].sort((a, b) => {
        if (a.isVirtual && !b.isVirtual) return 1;
        if (!a.isVirtual && b.isVirtual) return -1;
        return 0;
    });
    sortedForTable.forEach((m, i) => {
        const tr = document.createElement('tr');
        const tierInfo = TIERS[m.tier];
        const type = m.isVirtual ? '🔄 افتراضي' : '✅ حقيقي';
        tr.innerHTML = `<td>${m.name}</td><td>${m.email}</td><td><span style="color:${tierInfo.color}">${tierInfo.label} ${tierInfo.name}</span></td><td>${m.location}</td><td>${type}</td><td><button class="delete-btn" data-index="${members.indexOf(m)}">🗑️ حذف</button></td>`;
        membersTableBody.appendChild(tr);
    });
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const member = members[index];
            if (member.isVirtual && !confirm('هذا مشترك افتراضي. هل أنت متأكد من حذفه؟')) return;
            if (!member.isVirtual && !confirm('هل أنت متأكد من حذف هذا المشترك؟')) return;
            totalRevenue -= TIERS[members[index].tier].price;
            members.splice(index, 1);
            saveData();
            renderMembersTable();
            if (virtualGrid) virtualGrid.reset();
            updateStats();
            updateRoyalBackground();
        });
    });
    updateGridStats();
}

function renderSponsorList() {
    const list = document.getElementById('sponsorList');
    if (!list) return;
    list.innerHTML = '';
    const durationMap = { weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي' };
    sponsors.forEach((s, i) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>🏢 ${s.name} - $${s.amount} (${durationMap[s.duration]})</span><button onclick="removeSponsor(${i})">🗑️</button>`;
        list.appendChild(li);
    });
}

window.removeSponsor = function(i) {
    if (confirm('هل أنت متأكد؟')) {
        sponsors.splice(i, 1);
        saveData();
        renderSponsorList();
        renderSponsors();
    }
};

// ===== روابط التواصل =====
function updateSocialLinks() {
    const socialFields = { facebook: document.getElementById('socialFacebook'), twitter: document.getElementById('socialTwitter'), instagram: document.getElementById('socialInstagram'), youtube: document.getElementById('socialYoutube'), linkedin: document.getElementById('socialLinkedin'), tiktok: document.getElementById('socialTiktok'), snapchat: document.getElementById('socialSnapchat') };
    for (const [key, field] of Object.entries(socialFields)) {
        if (field && socialLinks[key]) field.value = socialLinks[key];
    }
    renderFooterSocialLinks();
}

function renderFooterSocialLinks() {
    const container = document.getElementById('footerSocialLinks');
    if (!container) return;
    const socialIcons = { facebook: 'fab fa-facebook', twitter: 'fab fa-twitter', instagram: 'fab fa-instagram', youtube: 'fab fa-youtube', linkedin: 'fab fa-linkedin', tiktok: 'fab fa-tiktok', snapchat: 'fab fa-snapchat' };
    container.innerHTML = '';
    let hasLinks = false;
    for (const [key, icon] of Object.entries(socialIcons)) {
        if (socialLinks[key] && socialLinks[key].trim() !== '') {
            hasLinks = true;
            const link = document.createElement('a');
            link.href = socialLinks[key];
            link.target = '_blank';
            link.title = key.charAt(0).toUpperCase() + key.slice(1);
            link.innerHTML = `<i class="${icon}"></i>`;
            container.appendChild(link);
        }
    }
    if (!hasLinks) container.innerHTML = '<span style="color: var(--text-muted); font-size: 0.8rem;">لا توجد روابط</span>';
}

// ===== الترجمة =====
function translatePage(lang) {
    const translations = TRANSLATIONS[lang];
    if (!translations) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = translations[key];
            else el.innerHTML = translations[key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[key]) el.placeholder = translations[key];
    });
    document.querySelectorAll('select option[data-i18n]').forEach(opt => {
        const key = opt.dataset.i18n;
        if (translations[key]) opt.textContent = translations[key];
    });
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    translatePage(lang);
    const loadingText = document.getElementById('loadingText');
    if (loadingText && TRANSLATIONS[lang]) loadingText.textContent = TRANSLATIONS[lang].loading || '⏳ جاري تحميل مليون مربع...';
    saveData();
    if (virtualGrid) virtualGrid.reset();
    renderSponsors();
    renderMembersTable();
    updateStats();
    updateRoyalBackground();
}

// ===== تهيئة الموقع =====
document.addEventListener('DOMContentLoaded', function() {
    gridCanvas = document.getElementById('gridCanvas');
    searchInput = document.getElementById('searchInput');
    filterTier = document.getElementById('filterTier');
    sortBy = document.getElementById('sortBy');
    liveClock = document.getElementById('liveClock');
    totalMembersDisplay = document.getElementById('totalMembersDisplay');
    totalMembers = document.getElementById('totalMembers');
    totalRevenueEl = document.getElementById('totalRevenue');
    availableSquares = document.getElementById('availableSquares');
    membersTableBody = document.getElementById('membersTableBody');
    loginError = document.getElementById('loginError');
    siteBackground = document.getElementById('siteBackground');
    loadingIndicator = document.getElementById('loadingIndicator');

    setInterval(() => { if (liveClock) { const now = new Date(); liveClock.textContent = now.toLocaleTimeString('ar-EG'); } }, 1000);

    if (gridCanvas) virtualGrid = new VirtualGrid(gridCanvas, 1000000);

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            if (virtualGrid) {
                const text = this.value.toLowerCase();
                const tier = filterTier ? filterTier.value : 'all';
                if (text || tier !== 'all') virtualGrid.filter(text, tier);
                else virtualGrid.resetFilter();
            }
        });
    }

    if (filterTier) {
        filterTier.addEventListener('change', function() {
            if (virtualGrid) {
                const text = searchInput ? searchInput.value.toLowerCase() : '';
                if (text || this.value !== 'all') virtualGrid.filter(text, this.value);
                else virtualGrid.resetFilter();
            }
        });
    }

    if (sortBy) {
        sortBy.addEventListener('change', function() {
            if (virtualGrid) virtualGrid.updateSort(this.value);
        });
    }

    document.getElementById('zoomInBtn')?.addEventListener('click', () => { currentZoom = Math.min(2, currentZoom + 0.1); applyZoom(); });
    document.getElementById('zoomOutBtn')?.addEventListener('click', () => { currentZoom = Math.max(0.5, currentZoom - 0.1); applyZoom(); });
    document.getElementById('resetViewBtn')?.addEventListener('click', () => { currentZoom = 1; applyZoom(); });

    function applyZoom() {
        const size = Math.max(30, 60 * currentZoom);
        document.querySelectorAll('.pixel-cell').forEach(cell => { cell.style.minHeight = size + 'px'; cell.style.fontSize = (size * 0.015) + 'rem'; });
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() { setLanguage(this.dataset.lang); });
    });

    document.getElementById('themeToggle')?.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        this.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
    if (localStorage.getItem('theme') === 'light') { document.body.classList.add('light-mode'); const toggle = document.getElementById('themeToggle'); if (toggle) toggle.innerHTML = '<i class="fas fa-sun"></i>'; }

    document.getElementById('fullscreenBtn')?.addEventListener('click', function() {
        if (!document.fullscreenElement) { document.documentElement.requestFullscreen(); this.innerHTML = '<i class="fas fa-compress"></i>'; }
        else { if (document.exitFullscreen) { document.exitFullscreen(); this.innerHTML = '<i class="fas fa-expand"></i>'; } }
    });
    document.addEventListener('fullscreenchange', () => { const btn = document.getElementById('fullscreenBtn'); if (btn) btn.innerHTML = document.fullscreenElement ? '<i class="fas fa-compress"></i>' : '<i class="fas fa-expand"></i>'; });

    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
        window.addEventListener('scroll', () => { backBtn.classList.toggle('visible', window.scrollY > 300); });
        backBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }

    document.getElementById('adminSecretBtn')?.addEventListener('click', function() {
        adminClickCount++;
        if (adminClickCount === 1) adminClickTimer = setTimeout(() => { adminClickCount = 0; }, 500);
        else if (adminClickCount === 2) {
            clearTimeout(adminClickTimer);
            adminClickCount = 0;
            const panel = document.getElementById('adminPanel');
            if (panel) {
                panel.classList.toggle('hidden');
                if (!panel.classList.contains('hidden')) {
                    document.getElementById('adminEmail').value = '';
                    document.getElementById('adminPassword').value = '';
                    if (loginError) loginError.classList.add('hidden');
                    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    });

    document.getElementById('adminLoginBtn')?.addEventListener('click', function() {
        const email = document.getElementById('adminEmail').value;
        const password = document.getElementById('adminPassword').value;
        const storedEmail = localStorage.getItem('adminEmail') || 'fedaaali';
        const storedPassword = localStorage.getItem('adminPassword') || 'fida1271980';
        if (email === storedEmail && password === storedPassword) {
            document.getElementById('adminContent').classList.remove('hidden');
            document.querySelector('.admin-login').style.display = 'none';
            renderMembersTable();
            renderSponsorList();
            updateSocialLinks();
            alert('✅ تم الدخول إلى لوحة التحكم');
        } else {
            if (loginError) loginError.classList.remove('hidden');
            document.getElementById('adminPassword').value = '';
            document.getElementById('adminPassword').focus();
        }
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });

    document.getElementById('addMemberBtn')?.addEventListener('click', function() {
        const name = prompt('👤 اسم المشترك الكامل:');
        if (!name) return;
        const email = prompt('✉️ البريد:');
        if (!email) return;
        const location = prompt('📍 الموقع:') || 'غير محدد';
        const tier = prompt('🏷️ المستوى (normal/silver/gold/royal):') || 'normal';
        if (!TIERS[tier]) { alert('❌ مستوى غير صحيح'); return; }
        const image = prompt('🖼️ رابط الصورة:') || `https://picsum.photos/seed/${Date.now()}/100/100`;
        const maxPosition = members.reduce((max, m) => Math.max(max, m.position || 0), 0);
        const newPosition = maxPosition + 1000;
        members.push({ id: `m${Date.now()}`, name, email, location, tier, image, website: '', message: `مرحباً، أنا ${name}`, isRoyal: tier === 'royal', isCompany: false, isVirtual: false, position: newPosition, rating: 0, votes: 0, joinDate: new Date().toLocaleDateString('ar-EG') });
        totalRevenue += TIERS[tier].price;
        saveData();
        renderMembersTable();
        if (virtualGrid) virtualGrid.reset();
        updateStats();
        updateRoyalBackground();
        alert('✅ تم إضافة المشترك');
    });

    document.getElementById('exportMembersBtn')?.addEventListener('click', function() {
        let csv = 'الاسم,البريد,المستوى,الموقع,النوع\n';
        members.forEach(m => csv += `${m.name},${m.email},${m.tier},${m.location},${m.isVirtual ? 'افتراضي' : 'حقيقي'}\n`);
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'المشتركين.csv';
        a.click();
        URL.revokeObjectURL(url);
    });

    document.getElementById('refreshMembersBtn')?.addEventListener('click', function() {
        renderMembersTable();
        updateStats();
        alert('✅ تم تحديث البيانات');
    });

    document.getElementById('addSponsorBtn')?.addEventListener('click', function() {
        const name = document.getElementById('sponsorName').value.trim();
        const link = document.getElementById('sponsorLink').value.trim();
        const amount = parseFloat(document.getElementById('sponsorAmount').value);
        const duration = document.getElementById('sponsorDuration').value;
        if (!name || !amount || isNaN(amount)) { alert('❌ أدخل البيانات'); return; }
        sponsors.push({ name, link, amount, duration });
        saveData();
        renderSponsorList();
        renderSponsors();
        document.getElementById('sponsorName').value = '';
        document.getElementById('sponsorLink').value = '';
        document.getElementById('sponsorAmount').value = '';
        alert('✅ تم إضافة الراعي');
    });

    document.getElementById('saveSocialSettings')?.addEventListener('click', function() {
        socialLinks.facebook = document.getElementById('socialFacebook').value.trim();
        socialLinks.twitter = document.getElementById('socialTwitter').value.trim();
        socialLinks.instagram = document.getElementById('socialInstagram').value.trim();
        socialLinks.youtube = document.getElementById('socialYoutube').value.trim();
        socialLinks.linkedin = document.getElementById('socialLinkedin').value.trim();
        socialLinks.tiktok = document.getElementById('socialTiktok').value.trim();
        socialLinks.snapchat = document.getElementById('socialSnapchat').value.trim();
        saveData();
        renderFooterSocialLinks();
        alert('✅ تم حفظ روابط التواصل الاجتماعي');
    });

    document.getElementById('savePaymentSettings')?.addEventListener('click', function() {
        localStorage.setItem('paypal', document.getElementById('paypalSetting').value);
        localStorage.setItem('stripe', document.getElementById('stripeSetting').value);
        localStorage.setItem('iban', document.getElementById('ibanSetting').value);
        alert('✅ تم حفظ إعدادات الدفع');
    });

    document.getElementById('saveSettingsBtn')?.addEventListener('click', function() {
        localStorage.setItem('adminEmail', document.getElementById('adminEmailSetting').value);
        localStorage.setItem('adminName', document.getElementById('adminNameSetting').value);
        alert('✅ تم حفظ إعدادات المدير');
    });

    document.getElementById('changePasswordBtn')?.addEventListener('click', function() {
        const pass = document.getElementById('newPassword').value.trim();
        if (pass.length < 4) { alert('❌ 4 أحرف على الأقل'); return; }
        localStorage.setItem('adminPassword', pass);
        alert('✅ تم تغيير كلمة السر');
        document.getElementById('newPassword').value = '';
    });

    document.getElementById('suggestionForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('suggesterName').value.trim();
        const email = document.getElementById('suggesterEmail').value.trim();
        const text = document.getElementById('suggestionText').value.trim();
        if (!name || !email || !text) { alert('❌ ملء جميع الحقول'); return; }
        suggestions.push({ name, email, text, date: new Date().toLocaleDateString() });
        saveData();
        updateSuggestions();
        this.reset();
        alert('✅ تم إرسال الاقتراح');
    });

    function updateSuggestions() {
        const list = document.getElementById('suggestionsList');
        if (!list) return;
        if (suggestions.length === 0) { list.innerHTML = '<p class="empty-msg">لا توجد اقتراحات حالياً</p>'; return; }
        list.innerHTML = suggestions.slice().reverse().map(s => `<div class="suggestion-item"><strong>${s.name}</strong> (${s.email}) - ${s.date}<p>${s.text}</p></div>`).join('');
    }

    document.querySelectorAll('.sponsor-pay-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const plan = this.dataset.plan;
            const amount = this.dataset.amount;
            const planMap = { weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي' };
            const name = prompt('🏢 أدخل اسم الشركة:');
            if (!name) return;
            const link = prompt('🔗 أدخل رابط الموقع:');
            if (!link) return;
            const method = prompt('💳 طريقة الدفع:\n1. PayPal\n2. Stripe\n3. IBAN\n\nأدخل الرقم (1-3):');
            if (!method || !['1','2','3'].includes(method)) { alert('❌ طريقة غير صحيحة'); return; }
            const methods = ['PayPal','Stripe','IBAN'];
            alert(`✅ جارٍ التحويل إلى ${methods[parseInt(method)-1]}\nالمبلغ: $${amount}`);
            sponsors.push({ name, link, amount: parseInt(amount), duration: plan });
            saveData();
            renderSponsorList();
            renderSponsors();
            alert(`🎉 تمت الرعاية بنجاح!\nالشركة: ${name}\nالمبلغ: $${amount}\nالمدة: ${planMap[plan]}`);
        });
    });

    renderSponsors();
    renderMembersTable();
    renderSponsorList();
    updateSuggestions();
    updateStats();
    updateRoyalBackground();
    updateSocialLinks();

    document.getElementById('adminEmailSetting').value = localStorage.getItem('adminEmail') || '';
    document.getElementById('adminNameSetting').value = localStorage.getItem('adminName') || '';
    document.getElementById('paypalSetting').value = localStorage.getItem('paypal') || '';
    document.getElementById('stripeSetting').value = localStorage.getItem('stripe') || '';
    document.getElementById('ibanSetting').value = localStorage.getItem('iban') || '';
    
    for (const [key, value] of Object.entries(socialLinks)) {
        const field = document.getElementById(`social${key.charAt(0).toUpperCase() + key.slice(1)}`);
        if (field && value) field.value = value;
    }

    setTimeout(() => { const loading = document.getElementById('loadingScreen'); if (loading) loading.classList.add('hidden'); }, 1500);

    console.log('🚀 مليون مربع - تم التحميل بنجاح');
    console.log(`👥 المشتركين: ${members.length}`);
    console.log(`💰 الإيرادات: $${totalRevenue}`);
    console.log(`📦 المربعات: 1,000,000 (تحميل تدريجي)`);
    console.log(`🔐 لوحة التحكم: انقر مرتين على زر 🔐`);
    console.log(`🌐 اللغة الحالية: ${currentLang}`);
    console.log(`🔄 عدد المشتركين الافتراضيين: ${members.filter(m => m.isVirtual).length}`);
});
