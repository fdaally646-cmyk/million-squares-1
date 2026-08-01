// ===== بيانات المستويات =====
const TIERS = {
    normal: { name: { ar: 'عادي', en: 'Normal', fr: 'Normal', es: 'Normal', de: 'Normal' }, price: 1, color: '#4A90D9', label: '💎' },
    silver: { name: { ar: 'فضي', en: 'Silver', fr: 'Argent', es: 'Plata', de: 'Silber' }, price: 5, color: '#C0C0C0', label: '⭐' },
    gold: { name: { ar: 'ذهبي', en: 'Gold', fr: 'Or', es: 'Oro', de: 'Gold' }, price: 10, color: '#FFD700', label: '👑' },
    royal: { name: { ar: 'ملكي', en: 'Royal', fr: 'Royal', es: 'Real', de: 'Königlich' }, price: 100, color: '#9B59B6', label: '💠' }
};

// ===== الترجمات الكاملة =====
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
        loading: '⏳ جاري تحميل مليون مربع...',
        loading_grid: '⏳ جاري تحميل المربعات...',
        total_squares: 'إجمالي المربعات',
        virtual_members: 'افتراضي',
        online: 'متصلون',
        today: 'جديد اليوم',
        sort_name: 'ترتيب حسب الاسم',
        sort_location: 'ترتيب حسب البلد',
        sort_tier: 'ترتيب حسب الفئة',
        sort_date: 'الأحدث أولاً',
        what_is: '🎯 ما هو مليون مربع؟',
        description: 'منصة ثورية تتيح للأفراد والشركات امتلاك مساحة رقمية تفاعلية لعرض هويتهم.',
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
        badge_normal: 'مبتدئ',
        badge_silver: 'شائع',
        badge_gold: 'مميز',
        badge_royal: 'VIP',
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
        loading: '⏳ Loading Million Squares...',
        loading_grid: '⏳ Loading squares...',
        total_squares: 'Total squares',
        virtual_members: 'Virtual',
        online: 'Online',
        today: 'Today',
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
        badge_normal: 'Beginner',
        badge_silver: 'Popular',
        badge_gold: 'Featured',
        badge_royal: 'VIP',
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
        loading: '⏳ Chargement de Million de Carrés...',
        loading_grid: '⏳ Chargement des carrés...',
        total_squares: 'Total des carrés',
        virtual_members: 'Virtuel',
        online: 'En ligne',
        today: 'Aujourd\'hui',
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
        badge_normal: 'Débutant',
        badge_silver: 'Populaire',
        badge_gold: 'En vedette',
        badge_royal: 'VIP',
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
        loading: '⏳ Cargando Millón de Cuadrados...',
        loading_grid: '⏳ Cargando cuadrados...',
        total_squares: 'Total de cuadrados',
        virtual_members: 'Virtual',
        online: 'En línea',
        today: 'Hoy',
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
        badge_normal: 'Principiante',
        badge_silver: 'Popular',
        badge_gold: 'Destacado',
        badge_royal: 'VIP',
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
        loading: '⏳ Million Quadrate werden geladen...',
        loading_grid: '⏳ Quadrate werden geladen...',
        total_squares: 'Gesamt Quadrate',
        virtual_members: 'Virtuell',
        online: 'Online',
        today: 'Heute',
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
        badge_normal: 'Anfänger',
        badge_silver: 'Beliebt',
        badge_gold: 'Hervorgehoben',
        badge_royal: 'VIP',
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
    'مشاري عبدالله العجاجي', 'حياة سعد الموسى', 'بدر خالد العنزي', 'أمل صالح السيف'
];

// ===== مواقع متنوعة =====
const LOCATIONS = [
    'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام',
    'الخبر', 'تبوك', 'حائل', 'القصيم', 'نجران',
    'دبي', 'أبوظبي', 'الشارقة', 'القاهرة', 'الإسكندرية',
    'بيروت', 'عمان', 'الكويت', 'الدوحة', 'مسقط'
];

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
let gridCanvas, searchInput, filterTier, sortBy, liveClock;
let totalMembersDisplay, totalMembers, totalRevenueEl, availableSquares;
let membersTableBody, loginError, siteBackground, loadingIndicator;

// ===== إنشاء مشتركين افتراضيين (100 فقط) =====
function generateVirtualMembers(count) {
    var result = [];
    var tierKeys = ['normal', 'silver', 'gold', 'royal'];
    var step = Math.floor(1000000 / count);
    
    for (var i = 0; i < count; i++) {
        var tier = tierKeys[i % tierKeys.length];
        var nameIndex = i % NAMES.length;
        var locIndex = i % LOCATIONS.length;
        var imageUrl = 'https://picsum.photos/seed/' + (i + 100) + '/100/100';
        
        result.push({
            id: 'v' + (i + 1),
            name: NAMES[nameIndex],
            email: NAMES[nameIndex].replace(/ /g, '').toLowerCase() + i + '@example.com',
            location: LOCATIONS[locIndex],
            tier: tier,
            website: 'https://' + NAMES[nameIndex].replace(/ /g, '').toLowerCase() + '.com',
            message: 'مرحباً، أنا ' + NAMES[nameIndex] + ' من ' + LOCATIONS[locIndex],
            image: imageUrl,
            isRoyal: tier === 'royal',
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
    var dataToSave = {
        members: members,
        sponsors: sponsors,
        suggestions: suggestions,
        totalRevenue: totalRevenue,
        socialLinks: socialLinks,
        currentLang: currentLang
    };
    localStorage.setItem('millionSquaresData', JSON.stringify(dataToSave));
}

function loadData() {
    var saved = localStorage.getItem('millionSquaresData');
    if (saved) {
        try {
            var data = JSON.parse(saved);
            members = data.members || [];
            sponsors = data.sponsors || sponsors;
            suggestions = data.suggestions || suggestions;
            totalRevenue = data.totalRevenue || 0;
            socialLinks = data.socialLinks || socialLinks;
            if (data.currentLang) currentLang = data.currentLang;
            return true;
        } catch(e) {
            return false;
        }
    }
    return false;
}

// ===== تهيئة البيانات =====
if (!loadData() || members.length === 0) {
    members = generateVirtualMembers(100);
    totalRevenue = members.reduce(function(sum, m) {
        return sum + TIERS[m.tier].price;
    }, 0);
    saveData();
}

// ===== محاكاة متصلين =====
function simulateLiveUsers() {
    var liveUsers = document.getElementById('liveUsers');
    var todayMembers = document.getElementById('todayMembers');
    if (liveUsers) liveUsers.textContent = Math.floor(Math.random() * 33) + 12;
    if (todayMembers) todayMembers.textContent = Math.floor(Math.random() * 12) + 3;
}
setInterval(simulateLiveUsers, 10000);
simulateLiveUsers();

// ===== نظام الترتيب =====
function sortMembers(sortByValue) {
    var sorted = members.slice();
    if (sortByValue === 'name') {
        sorted.sort(function(a, b) { return a.name.localeCompare(b.name); });
    } else if (sortByValue === 'location') {
        sorted.sort(function(a, b) { return a.location.localeCompare(b.location); });
    } else if (sortByValue === 'tier') {
        var order = { royal: 0, gold: 1, silver: 2, normal: 3 };
        sorted.sort(function(a, b) { return (order[a.tier] || 4) - (order[b.tier] || 4); });
    } else if (sortByValue === 'date') {
        sorted.sort(function(a, b) { return new Date(b.joinDate) - new Date(a.joinDate); });
    }
    return sorted;
}

// ===== نظام التحميل التدريجي =====
function VirtualGrid(container, totalCells) {
    this.container = container;
    this.totalCells = totalCells || 1000000;
    this.loadedCount = 0;
    this.batchSize = 5000;
    this.isLoading = false;
    this.allCells = [];
    this.filtered = false;
    this.sortByValue = 'name';
    var self = this;
    
    this.container.addEventListener('scroll', function() {
        self.handleScroll.call(self);
    });
    this.loadMore();
}

VirtualGrid.prototype.handleScroll = function() {
    if (this.filtered) return;
    var scrollTop = this.container.scrollTop;
    var clientHeight = this.container.clientHeight;
    var scrollHeight = this.container.scrollHeight;
    if (scrollTop + clientHeight >= scrollHeight - 500) {
        this.loadMore();
    }
};

VirtualGrid.prototype.loadMore = function() {
    if (this.isLoading || this.loadedCount >= this.totalCells || this.filtered) return;
    this.isLoading = true;
    if (loadingIndicator) loadingIndicator.classList.add('active');

    var self = this;
    requestAnimationFrame(function() {
        var start = self.loadedCount;
        var end = Math.min(start + self.batchSize, self.totalCells);
        var fragment = document.createDocumentFragment();
        var sortedMembers = sortMembers(self.sortByValue);
        var memberCount = sortedMembers.length;
        var step = memberCount > 0 ? Math.floor(self.totalCells / memberCount) : 1;

        for (var i = start; i < end; i++) {
            var cell = document.createElement('div');
            cell.className = 'pixel-cell';
            cell.dataset.index = i;

            var member = null;
            for (var j = 0; j < sortedMembers.length; j++) {
                if (sortedMembers[j].position === i) {
                    member = sortedMembers[j];
                    break;
                }
            }
            if (!member && memberCount > 0) {
                var memberIndex = Math.floor(i / step) % memberCount;
                member = sortedMembers[memberIndex];
            }

            if (member) {
                var tierInfo = TIERS[member.tier];
                var stars = '⭐'.repeat(member.rating || 3) + '☆'.repeat(5 - (member.rating || 3));
                var tierName = tierInfo.name[currentLang] || tierInfo.name.ar;
                cell.className = 'pixel-cell tier-' + member.tier;
                cell.innerHTML = 
                    (member.image ? '<img src="' + member.image + '" class="cell-image" loading="lazy">' : '') +
                    '<div class="cell-name">' + member.name + '</div>' +
                    '<div class="cell-tier">' + tierInfo.label + '</div>' +
                    (member.isVirtual ? '<div class="cell-virtual-badge">افتراضي</div>' : '') +
                    '<div class="cell-tooltip">' +
                        '<strong>' + member.name + '</strong><br>' +
                        '📍 ' + member.location + '<br>' +
                        '✉️ ' + member.email + '<br>' +
                        (member.website ? '🔗 ' + member.website + '<br>' : '') +
                        '💬 ' + member.message + '<br>' +
                        '<span style="color:' + tierInfo.color + ';font-weight:700">' +
                            tierInfo.label + ' ' + tierName + ' ($' + tierInfo.price + '/' + TRANSLATIONS[currentLang].year + ')' +
                        '</span><br>' +
                        '<small>⭐ ' + stars + ' (' + (member.votes || 0) + ' تقييم)</small>' +
                        (member.isVirtual ? '<br><small>🔄 مشترك افتراضي</small>' : '') +
                    '</div>' +
                    '<div class="cell-rating"><span class="stars">' + stars + '</span><span class="votes">(' + (member.votes || 0) + ')</span></div>' +
                    (member.isRoyal ? '<div class="royal-crown">👑</div>' : '');
                
                cell.addEventListener('click', (function(member) {
                    return function() { showMemberInfo(member); };
                })(member));
            } else {
                cell.className = 'pixel-cell empty';
                cell.textContent = '+';
                cell.addEventListener('click', showPaymentDialog);
            }

            fragment.appendChild(cell);
            self.allCells.push(cell);
        }

        self.container.appendChild(fragment);
        self.loadedCount = end;
        self.isLoading = false;
        if (loadingIndicator) loadingIndicator.classList.remove('active');

        if (self.loadedCount < self.totalCells) {
            setTimeout(function() { self.loadMore.call(self); }, 20);
        } else {
            if (loadingIndicator) {
                loadingIndicator.innerHTML = '<span>✅ ' + TRANSLATIONS[currentLang].loading_grid.replace('⏳ ', '') + '</span>';
                setTimeout(function() {
                    loadingIndicator.classList.remove('active');
                }, 2000);
            }
        }
        updateStats();
    });
};

VirtualGrid.prototype.updateSort = function(sortValue) {
    this.sortByValue = sortValue;
    this.reset();
};

VirtualGrid.prototype.filter = function(text, tier) {
    this.filtered = true;
    var lowerText = text.toLowerCase();
    var sortedMembers = sortMembers(this.sortByValue);
    var memberCount = sortedMembers.length;
    var step = memberCount > 0 ? Math.floor(this.totalCells / memberCount) : 1;
    
    for (var i = 0; i < this.allCells.length; i++) {
        var cell = this.allCells[i];
        var index = parseInt(cell.dataset.index);
        var member = null;
        for (var j = 0; j < sortedMembers.length; j++) {
            if (sortedMembers[j].position === index) {
                member = sortedMembers[j];
                break;
            }
        }
        if (!member && memberCount > 0) {
            var memberIndex = Math.floor(index / step) % memberCount;
            member = sortedMembers[memberIndex];
        }
        
        if (!member) {
            cell.style.display = 'block';
            continue;
        }
        var matchText = member.name.includes(lowerText) || 
                         member.email.includes(lowerText) || 
                         member.location.includes(lowerText);
        var matchTier = tier === 'all' || member.tier === tier;
        cell.style.display = (matchText && matchTier) ? 'block' : 'none';
    }
};

VirtualGrid.prototype.resetFilter = function() {
    this.filtered = false;
    for (var i = 0; i < this.allCells.length; i++) {
        this.allCells[i].style.display = 'block';
    }
};

VirtualGrid.prototype.reset = function() {
    this.container.innerHTML = '';
    this.allCells = [];
    this.loadedCount = 0;
    this.filtered = false;
    this.loadMore();
};

// ===== دوال العرض =====
function updateStats() {
    var realCount = 0;
    var virtualCount = 0;
    for (var i = 0; i < members.length; i++) {
        if (members[i].isVirtual) virtualCount++;
        else realCount++;
    }
    var totalCount = members.length;
    
    if (realCount >= 1000) {
        members = members.filter(function(m) { return !m.isVirtual; });
        saveData();
        updateStats();
        return;
    }
    
    if (totalMembers) totalMembers.textContent = totalCount;
    if (totalMembersDisplay) totalMembersDisplay.textContent = totalCount;
    if (availableSquares) availableSquares.textContent = (1000000 - totalCount).toLocaleString();
    if (totalRevenueEl) totalRevenueEl.textContent = '$' + totalRevenue.toFixed(0);
    
    var virtualCountEl = document.getElementById('virtualCount');
    if (virtualCountEl) virtualCountEl.textContent = virtualCount;
    var tableVirtualCount = document.getElementById('tableVirtualCount');
    if (tableVirtualCount) tableVirtualCount.textContent = virtualCount;
    updateGridStats();
}

function updateGridStats() {
    var totalCount = members.length;
    var gridMemberCount = document.getElementById('gridMemberCount');
    var gridAvailableCount = document.getElementById('gridAvailableCount');
    var tableTotal = document.getElementById('tableTotalMembers');
    if (gridMemberCount) gridMemberCount.textContent = totalCount;
    if (gridAvailableCount) gridAvailableCount.textContent = (1000000 - totalCount).toLocaleString();
    if (tableTotal) tableTotal.textContent = totalCount;
}

function showMemberInfo(member) {
    var tierInfo = TIERS[member.tier];
    var tierName = tierInfo.name[currentLang] || tierInfo.name.ar;
    var stars = '⭐'.repeat(member.rating || 3) + '☆'.repeat(5 - (member.rating || 3));
    var type = member.isVirtual ? '(افتراضي)' : '(حقيقي)';
    alert('👤 ' + member.name + ' ' + type + '\n📧 ' + member.email + '\n📍 ' + member.location + '\n' + 
          (member.website ? '🔗 ' + member.website + '\n' : '') + '💬 ' + member.message + '\n⭐ التقييم: ' + stars + 
          ' (' + (member.votes || 0) + ' صوت)\n\n🏷️ المستوى: ' + tierInfo.label + ' ' + tierName + 
          '\n💰 السعر: $' + tierInfo.price + '/' + TRANSLATIONS[currentLang].year);
}

function showPaymentDialog() {
    var lang = currentLang;
    var options = '';
    for (var key in TIERS) {
        var tier = TIERS[key];
        var tierName = tier.name[lang] || tier.name.ar;
        options += key + ': ' + tier.label + ' ' + tierName + ' - $' + tier.price + '/' + TRANSLATIONS[lang].year + '\n';
    }
    
    var choice = prompt((lang === 'ar' ? '💳 اختر مستوى الاشتراك:\n' : '💳 Choose subscription tier:\n') + options + 
                        (lang === 'ar' ? '\nأدخل نوع المستوى (normal, silver, gold, royal):' : '\nEnter tier type (normal, silver, gold, royal):'));
    if (!choice || !TIERS[choice]) {
        alert(lang === 'ar' ? '❌ مستوى غير صحيح' : '❌ Invalid tier');
        return;
    }

    var tierInfo = TIERS[choice];
    var name = prompt(lang === 'ar' ? '👤 أدخل اسمك الكامل:' : '👤 Enter your full name:');
    if (!name) return;
    var email = prompt(lang === 'ar' ? '✉️ أدخل بريدك الإلكتروني:' : '✉️ Enter your email:');
    if (!email) return;
    var location = prompt(lang === 'ar' ? '📍 أدخل موقعك:' : '📍 Enter your location:') || (lang === 'ar' ? 'غير محدد' : 'Not specified');
    var website = prompt(lang === 'ar' ? '🔗 رابط موقعك (اختياري):' : '🔗 Website link (optional):') || '';
    var image = prompt(lang === 'ar' ? '🖼️ رابط الصورة (اختياري):' : '🖼️ Image URL (optional):') || 'https://picsum.photos/seed/' + Date.now() + '/100/100';

    var method = prompt(lang === 'ar' ? 
        '💳 طريقة الدفع:\n1. PayPal\n2. Stripe\n3. IBAN\n\nأدخل الرقم (1-3):' :
        '💳 Payment method:\n1. PayPal\n2. Stripe\n3. IBAN\n\nEnter number (1-3):');
    if (!method || !['1','2','3'].includes(method)) {
        alert(lang === 'ar' ? '❌ طريقة غير صحيحة' : '❌ Invalid method');
        return;
    }

    var methods = ['PayPal','Stripe','IBAN'];
    alert((lang === 'ar' ? '✅ جارٍ التحويل إلى ' : '✅ Redirecting to ') + methods[parseInt(method)-1] + 
          (lang === 'ar' ? '\nالمبلغ: $' : '\nAmount: $') + tierInfo.price);

    var maxPosition = 0;
    for (var i = 0; i < members.length; i++) {
        if (members[i].position > maxPosition) maxPosition = members[i].position;
    }
    var newPosition = maxPosition + 1000;
    
    var newMember = {
        id: 'm' + Date.now(),
        name: name,
        email: email,
        location: location,
        tier: choice,
        website: website,
        image: image,
        message: (lang === 'ar' ? 'مرحباً، أنا ' : 'Hello, I am ') + name + (lang === 'ar' ? ' من ' : ' from ') + location,
        isRoyal: choice === 'royal',
        isVirtual: false,
        position: newPosition,
        rating: 0,
        votes: 0,
        joinDate: new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US')
    };
    
    members.push(newMember);
    totalRevenue += tierInfo.price;
    saveData();
    if (virtualGrid) virtualGrid.reset();
    renderMembersTable();
    updateStats();
    updateRoyalBackground();
    
    alert((lang === 'ar' ? '🎉 تم الاشتراك بنجاح!\nالمستوى: ' : '🎉 Subscription successful!\nTier: ') + 
          tierInfo.label + ' ' + (tierInfo.name[lang] || tierInfo.name.ar) + 
          (lang === 'ar' ? '\nالمبلغ: $' : '\nAmount: $') + tierInfo.price);
}

// ===== الرعاة =====
function renderSponsors() {
    var track = document.getElementById('marqueeTrack');
    if (!track) return;
    track.innerHTML = '';
    var durationMap = { weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي' };
    for (var i = 0; i < sponsors.length; i++) {
        var s = sponsors[i];
        var item = document.createElement('span');
        item.className = 'sponsor-item';
        item.innerHTML = '🏢 ' + s.name + ' <span class="sponsor-badge">' + durationMap[s.duration] + '</span> $' + s.amount;
        track.appendChild(item);
    }
    for (var j = 0; j < sponsors.length; j++) {
        var s2 = sponsors[j];
        var item2 = document.createElement('span');
        item2.className = 'sponsor-item';
        item2.innerHTML = '🏢 ' + s2.name + ' <span class="sponsor-badge">' + durationMap[s2.duration] + '</span> $' + s2.amount;
        track.appendChild(item2);
    }
}

// ===== خلفية الملكيين =====
var royalInterval = null;
var royalIndex = 0;

function updateRoyalBackground() {
    var royals = [];
    for (var i = 0; i < members.length; i++) {
        if (members[i].tier === 'royal' && members[i].image) {
            royals.push(members[i]);
        }
    }
    
    if (royals.length === 0) {
        if (siteBackground) {
            siteBackground.classList.remove('active');
            siteBackground.style.backgroundImage = '';
        }
        if (royalInterval) clearInterval(royalInterval);
        return;
    }
    
    if (royalInterval) clearInterval(royalInterval);
    royalIndex = 0;
    setRoyalImage(royals[0]);
    royalInterval = setInterval(function() {
        royalIndex = (royalIndex + 1) % royals.length;
        setRoyalImage(royals[royalIndex]);
    }, 8000);
}

function setRoyalImage(member) {
    if (member && member.image && siteBackground) {
        siteBackground.style.backgroundImage = 'url(' + member.image + ')';
        siteBackground.classList.add('active');
    }
}

// ===== لوحة التحكم =====
var adminClickCount = 0;
var adminClickTimer = null;

function renderMembersTable() {
    if (!membersTableBody) return;
    membersTableBody.innerHTML = '';
    
    var sortedForTable = members.slice();
    sortedForTable.sort(function(a, b) {
        if (a.isVirtual && !b.isVirtual) return 1;
        if (!a.isVirtual && b.isVirtual) return -1;
        return 0;
    });
    
    for (var i = 0; i < sortedForTable.length; i++) {
        var m = sortedForTable[i];
        var tr = document.createElement('tr');
        var tierInfo = TIERS[m.tier];
        var tierName = tierInfo.name[currentLang] || tierInfo.name.ar;
        var type = m.isVirtual ? '🔄 ' + TRANSLATIONS[currentLang].virtual_members : '✅ ' + TRANSLATIONS[currentLang].members;
        var index = members.indexOf(m);
        tr.innerHTML = '<td>' + m.name + '</td><td>' + m.email + '</td><td><span style="color:' + tierInfo.color + '">' + 
                       tierInfo.label + ' ' + tierName + '</span></td><td>' + m.location + '</td><td>' + type + 
                       '</td><td><button class="delete-btn" data-index="' + index + '">🗑️ ' + TRANSLATIONS[currentLang].actions + '</button></td>';
        membersTableBody.appendChild(tr);
    }
    
    var deleteBtns = document.querySelectorAll('.delete-btn');
    for (var j = 0; j < deleteBtns.length; j++) {
        deleteBtns[j].addEventListener('click', function() {
            var index = parseInt(this.dataset.index);
            var member = members[index];
            if (member.isVirtual) {
                if (!confirm((currentLang === 'ar' ? 'هذا مشترك افتراضي. هل أنت متأكد من حذفه؟' : 'This is a virtual member. Are you sure you want to delete?'))) return;
            } else {
                if (!confirm((currentLang === 'ar' ? 'هل أنت متأكد من حذف هذا المشترك؟' : 'Are you sure you want to delete this member?'))) return;
            }
            totalRevenue -= TIERS[members[index].tier].price;
            members.splice(index, 1);
            saveData();
            renderMembersTable();
            if (virtualGrid) virtualGrid.reset();
            updateStats();
            updateRoyalBackground();
        });
    }
    updateGridStats();
}

function renderSponsorList() {
    var list = document.getElementById('sponsorList');
    if (!list) return;
    list.innerHTML = '';
    var durationMap = { weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي' };
    for (var i = 0; i < sponsors.length; i++) {
        var s = sponsors[i];
        var li = document.createElement('li');
        li.innerHTML = '<span>🏢 ' + s.name + ' - $' + s.amount + ' (' + durationMap[s.duration] + ')</span><button onclick="removeSponsor(' + i + ')">🗑️</button>';
        list.appendChild(li);
    }
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
    var socialFields = {
        facebook: document.getElementById('socialFacebook'),
        twitter: document.getElementById('socialTwitter'),
        instagram: document.getElementById('socialInstagram'),
        youtube: document.getElementById('socialYoutube'),
        linkedin: document.getElementById('socialLinkedin'),
        tiktok: document.getElementById('socialTiktok'),
        snapchat: document.getElementById('socialSnapchat')
    };
    for (var key in socialFields) {
        var field = socialFields[key];
        if (field && socialLinks[key]) {
            field.value = socialLinks[key];
        }
    }
    renderFooterSocialLinks();
}

function renderFooterSocialLinks() {
    var container = document.getElementById('footerSocialLinks');
    if (!container) return;
    container.innerHTML = '';
    var hasLinks = false;
    
    var socialIcons = {
        facebook: 'fab fa-facebook',
        twitter: 'fab fa-twitter',
        instagram: 'fab fa-instagram',
        youtube: 'fab fa-youtube',
        linkedin: 'fab fa-linkedin',
        tiktok: 'fab fa-tiktok',
        snapchat: 'fab fa-snapchat'
    };
    
    for (var key in socialIcons) {
        if (socialLinks[key] && socialLinks[key].trim() !== '') {
            hasLinks = true;
            var link = document.createElement('a');
            link.href = socialLinks[key];
            link.target = '_blank';
            link.title = key.charAt(0).toUpperCase() + key.slice(1);
            link.innerHTML = '<i class="' + socialIcons[key] + '"></i>';
            container.appendChild(link);
        }
    }
    
    if (!hasLinks) {
        container.innerHTML = '<span style="color: var(--text-muted); font-size: 0.8rem;">' + (currentLang === 'ar' ? 'لا توجد روابط' : 'No links') + '</span>';
    }
}

// ===== الترجمة =====
function translatePage(lang) {
    var translations = TRANSLATIONS[lang];
    if (!translations) return;
    
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.dataset.i18n;
        if (translations[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[key];
            } else {
                el.innerHTML = translations[key];
            }
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        var key = el.dataset.i18nPlaceholder;
        if (translations[key]) {
            el.placeholder = translations[key];
        }
    });
    
    document.querySelectorAll('select option[data-i18n]').forEach(function(opt) {
        var key = opt.dataset.i18n;
        if (translations[key]) {
            opt.textContent = translations[key];
        }
    });
    
    // تحديث نص التحميل
    var loadingText = document.getElementById('loadingText');
    if (loadingText && translations.loading) {
        loadingText.textContent = translations.loading;
    }
    
    var loadingIndicatorText = document.querySelector('#loadingIndicator span');
    if (loadingIndicatorText && translations.loading_grid) {
        loadingIndicatorText.textContent = translations.loading_grid;
    }
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    translatePage(lang);
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

    // الساعة
    setInterval(function() {
        if (liveClock) {
            var now = new Date();
            liveClock.textContent = now.toLocaleTimeString(currentLang === 'ar' ? 'ar-EG' : 'en-US');
        }
    }, 1000);

    // تهيئة الشبكة
    if (gridCanvas) {
        virtualGrid = new VirtualGrid(gridCanvas, 1000000);
    }

    // أحداث البحث والفلترة
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            if (virtualGrid) {
                var text = this.value.toLowerCase();
                var tier = filterTier ? filterTier.value : 'all';
                if (text || tier !== 'all') {
                    virtualGrid.filter(text, tier);
                } else {
                    virtualGrid.resetFilter();
                }
            }
        });
    }

    if (filterTier) {
        filterTier.addEventListener('change', function() {
            if (virtualGrid) {
                var text = searchInput ? searchInput.value.toLowerCase() : '';
                if (text || this.value !== 'all') {
                    virtualGrid.filter(text, this.value);
                } else {
                    virtualGrid.resetFilter();
                }
            }
        });
    }

    if (sortBy) {
        sortBy.addEventListener('change', function() {
            if (virtualGrid) {
                virtualGrid.updateSort(this.value);
            }
        });
    }

    // التحكم بالزوم
    document.getElementById('zoomInBtn').addEventListener('click', function() {
        currentZoom = Math.min(2, currentZoom + 0.1);
        applyZoom();
    });

    document.getElementById('zoomOutBtn').addEventListener('click', function() {
        currentZoom = Math.max(0.5, currentZoom - 0.1);
        applyZoom();
    });

    document.getElementById('resetViewBtn').addEventListener('click', function() {
        currentZoom = 1;
        applyZoom();
    });

    function applyZoom() {
        var size = Math.max(30, 60 * currentZoom);
        var cells = document.querySelectorAll('.pixel-cell');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.minHeight = size + 'px';
            cells[i].style.fontSize = (size * 0.015) + 'rem';
        }
    }

    // أزرار اللغة
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    // تبديل الثيم
    document.getElementById('themeToggle').addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        var isLight = document.body.classList.contains('light-mode');
        this.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        var toggle = document.getElementById('themeToggle');
        if (toggle) toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // الشاشة الكاملة
    document.getElementById('fullscreenBtn').addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            this.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                this.innerHTML = '<i class="fas fa-expand"></i>';
            }
        }
    });

    document.addEventListener('fullscreenchange', function() {
        var btn = document.getElementById('fullscreenBtn');
        if (btn) {
            btn.innerHTML = document.fullscreenElement ? '<i class="fas fa-compress"></i>' : '<i class="fas fa-expand"></i>';
        }
    });

    // زر العودة للأعلى
    var backBtn = document.getElementById('backToTop');
    if (backBtn) {
        window.addEventListener('scroll', function() {
            backBtn.classList.toggle('visible', window.scrollY > 300);
        });
        backBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // زر الدخول المخفي للوحة التحكم
    document.getElementById('adminSecretBtn').addEventListener('click', function() {
        adminClickCount++;
        if (adminClickCount === 1) {
            adminClickTimer = setTimeout(function() {
                adminClickCount = 0;
            }, 500);
        } else if (adminClickCount === 2) {
            clearTimeout(adminClickTimer);
            adminClickCount = 0;
            var panel = document.getElementById('adminPanel');
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

    // الدخول إلى لوحة التحكم
    document.getElementById('adminLoginBtn').addEventListener('click', function() {
        var email = document.getElementById('adminEmail').value;
        var password = document.getElementById('adminPassword').value;
        var storedEmail = localStorage.getItem('adminEmail') || 'fedaaali';
        var storedPassword = localStorage.getItem('adminPassword') || 'fida1271980';
        
        if (email === storedEmail && password === storedPassword) {
            document.getElementById('adminContent').classList.remove('hidden');
            document.querySelector('.admin-login').style.display = 'none';
            renderMembersTable();
            renderSponsorList();
            updateSocialLinks();
            alert((currentLang === 'ar' ? '✅ تم الدخول إلى لوحة التحكم' : '✅ Dashboard access granted'));
        } else {
            if (loginError) loginError.classList.remove('hidden');
            document.getElementById('adminPassword').value = '';
            document.getElementById('adminPassword').focus();
        }
    });

    // تبويبات
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(function(b) {
                b.classList.remove('active');
            });
            this.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(function(tc) {
                tc.classList.remove('active');
            });
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });

    // إضافة مشترك
    document.getElementById('addMemberBtn').addEventListener('click', function() {
        var lang = currentLang;
        var name = prompt(lang === 'ar' ? '👤 اسم المشترك الكامل:' : '👤 Full member name:');
        if (!name) return;
        var email = prompt(lang === 'ar' ? '✉️ البريد:' : '✉️ Email:');
        if (!email) return;
        var location = prompt(lang === 'ar' ? '📍 الموقع:' : '📍 Location:') || (lang === 'ar' ? 'غير محدد' : 'Not specified');
        var tier = prompt(lang === 'ar' ? '🏷️ المستوى (normal/silver/gold/royal):' : '🏷️ Tier (normal/silver/gold/royal):') || 'normal';
        if (!TIERS[tier]) {
            alert(lang === 'ar' ? '❌ مستوى غير صحيح' : '❌ Invalid tier');
            return;
        }
        var image = prompt(lang === 'ar' ? '🖼️ رابط الصورة:' : '🖼️ Image URL:') || 'https://picsum.photos/seed/' + Date.now() + '/100/100';

        var maxPosition = 0;
        for (var i = 0; i < members.length; i++) {
            if (members[i].position > maxPosition) maxPosition = members[i].position;
        }
        var newPosition = maxPosition + 1000;

        members.push({
            id: 'm' + Date.now(),
            name: name,
            email: email,
            location: location,
            tier: tier,
            image: image,
            website: '',
            message: (lang === 'ar' ? 'مرحباً، أنا ' : 'Hello, I am ') + name,
            isRoyal: tier === 'royal',
            isVirtual: false,
            position: newPosition,
            rating: 0,
            votes: 0,
            joinDate: new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US')
        });

        totalRevenue += TIERS[tier].price;
        saveData();
        renderMembersTable();
        if (virtualGrid) virtualGrid.reset();
        updateStats();
        updateRoyalBackground();
        alert(lang === 'ar' ? '✅ تم إضافة المشترك' : '✅ Member added');
    });

    // تصدير
    document.getElementById('exportMembersBtn').addEventListener('click', function() {
        var csv = 'الاسم,البريد,المستوى,الموقع,النوع\n';
        for (var i = 0; i < members.length; i++) {
            var m = members[i];
            csv += m.name + ',' + m.email + ',' + m.tier + ',' + m.location + ',' + (m.isVirtual ? 'افتراضي' : 'حقيقي') + '\n';
        }
        var blob = new Blob([csv], { type: 'text/csv' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'المشتركين.csv';
        a.click();
        URL.revokeObjectURL(url);
    });

    // تحديث الجدول
    document.getElementById('refreshMembersBtn').addEventListener('click', function() {
        renderMembersTable();
        updateStats();
        alert('✅ ' + (currentLang === 'ar' ? 'تم تحديث البيانات' : 'Data updated'));
    });

    // إضافة راعي
    document.getElementById('addSponsorBtn').addEventListener('click', function() {
        var name = document.getElementById('sponsorName').value.trim();
        var link = document.getElementById('sponsorLink').value.trim();
        var amount = parseFloat(document.getElementById('sponsorAmount').value);
        var duration = document.getElementById('sponsorDuration').value;
        if (!name || !amount || isNaN(amount)) {
            alert('❌ أدخل البيانات');
            return;
        }
        sponsors.push({ name: name, link: link, amount: amount, duration: duration });
        saveData();
        renderSponsorList();
        renderSponsors();
        document.getElementById('sponsorName').value = '';
        document.getElementById('sponsorLink').value = '';
        document.getElementById('sponsorAmount').value = '';
        alert('✅ تم إضافة الراعي');
    });

    // حفظ إعدادات التواصل الاجتماعي
    document.getElementById('saveSocialSettings').addEventListener('click', function() {
        socialLinks.facebook = document.getElementById('socialFacebook').value.trim();
        socialLinks.twitter = document.getElementById('socialTwitter').value.trim();
        socialLinks.instagram = document.getElementById('socialInstagram').value.trim();
        socialLinks.youtube = document.getElementById('socialYoutube').value.trim();
        socialLinks.linkedin = document.getElementById('socialLinkedin').value.trim();
        socialLinks.tiktok = document.getElementById('socialTiktok').value.trim();
        socialLinks.snapchat = document.getElementById('socialSnapchat').value.trim();
        saveData();
        renderFooterSocialLinks();
        alert('✅ ' + (currentLang === 'ar' ? 'تم حفظ روابط التواصل الاجتماعي' : 'Social media links saved'));
    });

    // إعدادات الدفع
    document.getElementById('savePaymentSettings').addEventListener('click', function() {
        localStorage.setItem('paypal', document.getElementById('paypalSetting').value);
        localStorage.setItem('stripe', document.getElementById('stripeSetting').value);
        localStorage.setItem('iban', document.getElementById('ibanSetting').value);
        alert('✅ ' + (currentLang === 'ar' ? 'تم حفظ إعدادات الدفع' : 'Payment settings saved'));
    });

    // إعدادات المدير
    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        localStorage.setItem('adminEmail', document.getElementById('adminEmailSetting').value);
        localStorage.setItem('adminName', document.getElementById('adminNameSetting').value);
        alert('✅ ' + (currentLang === 'ar' ? 'تم حفظ إعدادات المدير' : 'Admin settings saved'));
    });

    // تغيير كلمة السر
    document.getElementById('changePasswordBtn').addEventListener('click', function() {
        var pass = document.getElementById('newPassword').value.trim();
        if (pass.length < 4) {
            alert('❌ ' + (currentLang === 'ar' ? '4 أحرف على الأقل' : 'At least 4 characters'));
            return;
        }
        localStorage.setItem('adminPassword', pass);
        alert('✅ ' + (currentLang === 'ar' ? 'تم تغيير كلمة السر' : 'Password changed'));
        document.getElementById('newPassword').value = '';
    });

    // الاقتراحات
    document.getElementById('suggestionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('suggesterName').value.trim();
        var email = document.getElementById('suggesterEmail').value.trim();
        var text = document.getElementById('suggestionText').value.trim();
        if (!name || !email || !text) {
            alert('❌ ' + (currentLang === 'ar' ? 'ملء جميع الحقول' : 'Fill all fields'));
            return;
        }
        suggestions.push({ name: name, email: email, text: text, date: new Date().toLocaleDateString() });
        saveData();
        updateSuggestions();
        this.reset();
        alert('✅ ' + (currentLang === 'ar' ? 'تم إرسال الاقتراح' : 'Suggestion sent'));
    });

    function updateSuggestions() {
        var list = document.getElementById('suggestionsList');
        if (!list) return;
        if (suggestions.length === 0) {
            list.innerHTML = '<p class="empty-msg">' + (currentLang === 'ar' ? 'لا توجد اقتراحات حالياً' : 'No suggestions yet') + '</p>';
            return;
        }
        var html = '';
        for (var i = suggestions.length - 1; i >= 0; i--) {
            var s = suggestions[i];
            html += '<div class="suggestion-item"><strong>' + s.name + '</strong> (' + s.email + ') - ' + s.date + '<p>' + s.text + '</p></div>';
        }
        list.innerHTML = html;
    }

    // رعاة الدفع
    document.querySelectorAll('.sponsor-pay-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var plan = this.dataset.plan;
            var amount = this.dataset.amount;
            var planMap = { weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي' };
            var lang = currentLang;
            
            var name = prompt(lang === 'ar' ? '🏢 أدخل اسم الشركة:' : '🏢 Enter company name:');
            if (!name) return;
            var link = prompt(lang === 'ar' ? '🔗 أدخل رابط الموقع:' : '🔗 Enter website link:');
            if (!link) return;
            
            var method = prompt(lang === 'ar' ? 
                '💳 طريقة الدفع:\n1. PayPal\n2. Stripe\n3. IBAN\n\nأدخل الرقم (1-3):' :
                '💳 Payment method:\n1. PayPal\n2. Stripe\n3. IBAN\n\nEnter number (1-3):');
            if (!method || !['1','2','3'].includes(method)) {
                alert(lang === 'ar' ? '❌ طريقة غير صحيحة' : '❌ Invalid method');
                return;
            }
            
            var methods = ['PayPal','Stripe','IBAN'];
            alert((lang === 'ar' ? '✅ جارٍ التحويل إلى ' : '✅ Redirecting to ') + methods[parseInt(method)-1] + 
                  (lang === 'ar' ? '\nالمبلغ: $' : '\nAmount: $') + amount);
            
            sponsors.push({ name: name, link: link, amount: parseInt(amount), duration: plan });
            saveData();
            renderSponsorList();
            renderSponsors();
            alert((lang === 'ar' ? '🎉 تمت الرعاية بنجاح!\nالشركة: ' : '🎉 Sponsorship successful!\nCompany: ') + 
                  name + (lang === 'ar' ? '\nالمبلغ: $' : '\nAmount: $') + amount + 
                  (lang === 'ar' ? '\nالمدة: ' : '\nDuration: ') + planMap[plan]);
        });
    });

    // تهيئة العناصر
    renderSponsors();
    renderMembersTable();
    renderSponsorList();
    updateSuggestions();
    updateStats();
    updateRoyalBackground();
    updateSocialLinks();

    // تحميل الإعدادات
    document.getElementById('adminEmailSetting').value = localStorage.getItem('adminEmail') || '';
    document.getElementById('adminNameSetting').value = localStorage.getItem('adminName') || '';
    document.getElementById('paypalSetting').value = localStorage.getItem('paypal') || '';
    document.getElementById('stripeSetting').value = localStorage.getItem('stripe') || '';
    document.getElementById('ibanSetting').value = localStorage.getItem('iban') || '';
    
    for (var key in socialLinks) {
        var field = document.getElementById('social' + key.charAt(0).toUpperCase() + key.slice(1));
        if (field && socialLinks[key]) {
            field.value = socialLinks[key];
        }
    }

    // تطبيق اللغة المحفوظة
    setLanguage(currentLang);

    // إخفاء شاشة التحميل
    setTimeout(function() {
        var loading = document.getElementById('loadingScreen');
        if (loading) loading.classList.add('hidden');
    }, 1500);

    console.log('🚀 مليون مربع - تم التحميل بنجاح');
    console.log('👥 المشتركين: ' + members.length);
    console.log('💰 الإيرادات: $' + totalRevenue);
    console.log('📦 المربعات: 1,000,000 (تحميل تدريجي)');
    console.log('🔐 لوحة التحكم: انقر مرتين على زر 🔐');
    console.log('🌐 اللغة الحالية: ' + currentLang);
    console.log('🔄 المشتركين الافتراضيين: ' + members.filter(function(m) { return m.isVirtual; }).length);
});
