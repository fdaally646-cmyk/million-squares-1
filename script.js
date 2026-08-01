// ===== بيانات المستويات =====
const TIERS = {
    normal: { name: { ar: 'عادي', en: 'Normal', fr: 'Normal', es: 'Normal', de: 'Normal' }, price: 1, color: '#4A5568', label: '💎' },
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
        loading: 'جاري تحميل المربعات...',
        what_is: '🎯 ما هو مليون مربع؟',
        description: 'منصة ثورية تتيح للأفراد والشركات امتلاك مساحة رقمية تفاعلية لعرض هويتهم.',
        steps_title: '📋 خطوات الاشتراك',
        step1: '<strong>اختر موقعك</strong> - انقر على أي مربع فارغ',
        step2: '<strong>حدد المستوى</strong> - عادي، فضي، ذهبي، أو ملكي',
        step3: '<strong>املأ بياناتك</strong> - الاسم، البريد، الموقع، صورة',
        step4: '<strong>ادفع بأمان</strong> - عبر PayPal أو Stripe أو IBAN',
        step5: '<strong>انطلق!</strong> - سيظهر مربعك فوراً',
        sponsor_payment_title: '🌟 نظام الدفع للرعاة',
        sponsor_payment_desc: 'اختر الباقة المناسبة لشركتك وادفع مباشرة عبر بوابة الدفع الإلكتروني',
        weekly: 'أسبوعي',
        monthly: 'شهري',
        yearly: 'سنوي',
        choose: 'اختر',
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
        admin_login: '🔐 الدخول إلى لوحة التحكم',
        login: 'دخول',
        payments: 'الدفع',
        sponsors: 'الرعاة',
        suggestions: 'الاقتراحات',
        settings: 'الإعدادات',
        add_member: 'إضافة مشترك',
        export: 'تصدير',
        name: 'الاسم',
        email: 'البريد',
        tier: 'المستوى',
        location: 'الموقع',
        actions: 'الإجراءات',
        payment_settings: '💳 إعدادات الدفع',
        save: 'حفظ الإعدادات',
        sponsor_management: '🏢 إدارة الرعاة',
        add_sponsor: 'إضافة راعي',
        suggestions_title: '💡 اقتراحات المشتركين',
        no_suggestions: 'لا توجد اقتراحات حالياً',
        settings_title: '⚙️ إعدادات الموقع',
        admin_email: 'بريد المدير:',
        admin_name: 'اسم المدير:',
        change_password: '🔑 تغيير كلمة السر',
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
        loading: 'Loading squares...',
        what_is: '🎯 What is Million Squares?',
        description: 'A revolutionary platform that allows individuals and companies to own an interactive digital space.',
        steps_title: '📋 Subscription Steps',
        step1: '<strong>Choose your spot</strong> - Click on any empty square',
        step2: '<strong>Select tier</strong> - Normal, Silver, Gold, or Royal',
        step3: '<strong>Fill your data</strong> - Name, email, website, image',
        step4: '<strong>Pay securely</strong> - Via PayPal, Stripe, or IBAN',
        step5: '<strong>Go!</strong> - Your square will appear immediately',
        sponsor_payment_title: '🌟 Sponsor Payment System',
        sponsor_payment_desc: 'Choose the right package for your company and pay directly.',
        weekly: 'Weekly',
        monthly: 'Monthly',
        yearly: 'Yearly',
        choose: 'Choose',
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
        admin_login: '🔐 Login to Dashboard',
        login: 'Login',
        payments: 'Payments',
        sponsors: 'Sponsors',
        suggestions: 'Suggestions',
        settings: 'Settings',
        add_member: 'Add Member',
        export: 'Export',
        name: 'Name',
        email: 'Email',
        tier: 'Tier',
        location: 'Location',
        actions: 'Actions',
        payment_settings: '💳 Payment Settings',
        save: 'Save Settings',
        sponsor_management: '🏢 Sponsor Management',
        add_sponsor: 'Add Sponsor',
        suggestions_title: '💡 Member Suggestions',
        no_suggestions: 'No suggestions yet',
        settings_title: '⚙️ Site Settings',
        admin_email: 'Admin Email:',
        admin_name: 'Admin Name:',
        change_password: '🔑 Change Password',
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
        loading: 'Chargement des carrés...',
        what_is: '🎯 Qu\'est-ce que Million de Carrés?',
        description: 'Une plateforme révolutionnaire qui permet de posséder un espace numérique interactif.',
        steps_title: '📋 Étapes d\'abonnement',
        step1: '<strong>Choisissez votre emplacement</strong> - Cliquez sur un carré vide',
        step2: '<strong>Sélectionnez le niveau</strong> - Normal, Argent, Or, ou Royal',
        step3: '<strong>Remplissez vos données</strong> - Nom, email, site web, image',
        step4: '<strong>Payez en toute sécurité</strong> - Via PayPal, Stripe, ou IBAN',
        step5: '<strong>Go!</strong> - Votre carré apparaîtra immédiatement',
        sponsor_payment_title: '🌟 Système de paiement des sponsors',
        sponsor_payment_desc: 'Choisissez le forfait adapté à votre entreprise.',
        weekly: 'Hebdomadaire',
        monthly: 'Mensuel',
        yearly: 'Annuel',
        choose: 'Choisir',
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
        admin_login: '🔐 Connexion au tableau de bord',
        login: 'Connexion',
        payments: 'Paiements',
        sponsors: 'Sponsors',
        suggestions: 'Suggestions',
        settings: 'Paramètres',
        add_member: 'Ajouter un membre',
        export: 'Exporter',
        name: 'Nom',
        email: 'Email',
        tier: 'Niveau',
        location: 'Emplacement',
        actions: 'Actions',
        payment_settings: '💳 Paramètres de paiement',
        save: 'Enregistrer',
        sponsor_management: '🏢 Gestion des sponsors',
        add_sponsor: 'Ajouter un sponsor',
        suggestions_title: '💡 Suggestions des membres',
        no_suggestions: 'Aucune suggestion',
        settings_title: '⚙️ Paramètres du site',
        admin_email: 'Email de l\'administrateur:',
        admin_name: 'Nom de l\'administrateur:',
        change_password: '🔑 Changer le mot de passe',
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
        loading: 'Cargando cuadrados...',
        what_is: '🎯 ¿Qué es Millón de Cuadrados?',
        description: 'Una plataforma revolucionaria para poseer un espacio digital interactivo.',
        steps_title: '📋 Pasos de suscripción',
        step1: '<strong>Elige tu lugar</strong> - Haz clic en un cuadrado vacío',
        step2: '<strong>Selecciona el nivel</strong> - Normal, Plata, Oro o Real',
        step3: '<strong>Completa tus datos</strong> - Nombre, email, sitio web, imagen',
        step4: '<strong>Paga con seguridad</strong> - Vía PayPal, Stripe o IBAN',
        step5: '<strong>¡Adelante!</strong> - Tu cuadrado aparecerá',
        sponsor_payment_title: '🌟 Sistema de pago para patrocinadores',
        sponsor_payment_desc: 'Elige el paquete adecuado para tu empresa.',
        weekly: 'Semanal',
        monthly: 'Mensual',
        yearly: 'Anual',
        choose: 'Elegir',
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
        admin_login: '🔐 Iniciar sesión en el panel',
        login: 'Iniciar sesión',
        payments: 'Pagos',
        sponsors: 'Patrocinadores',
        suggestions: 'Sugerencias',
        settings: 'Configuración',
        add_member: 'Agregar miembro',
        export: 'Exportar',
        name: 'Nombre',
        email: 'Email',
        tier: 'Nivel',
        location: 'Ubicación',
        actions: 'Acciones',
        payment_settings: '💳 Configuración de pago',
        save: 'Guardar configuración',
        sponsor_management: '🏢 Gestión de patrocinadores',
        add_sponsor: 'Agregar patrocinador',
        suggestions_title: '💡 Sugerencias de miembros',
        no_suggestions: 'No hay sugerencias',
        settings_title: '⚙️ Configuración del sitio',
        admin_email: 'Email del administrador:',
        admin_name: 'Nombre del administrador:',
        change_password: '🔑 Cambiar contraseña',
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
        loading: 'Quadrate werden geladen...',
        what_is: '🎯 Was ist Million Quadrate?',
        description: 'Eine revolutionäre Plattform für interaktive digitale Räume.',
        steps_title: '📋 Abonnementschritte',
        step1: '<strong>Wähle deinen Platz</strong> - Klicke auf ein leeres Quadrat',
        step2: '<strong>Wähle die Stufe</strong> - Normal, Silber, Gold oder Königlich',
        step3: '<strong>Fülle deine Daten aus</strong> - Name, E-Mail, Webseite, Bild',
        step4: '<strong>Sicher bezahlen</strong> - Über PayPal, Stripe oder IBAN',
        step5: '<strong>Los!</strong> - Dein Quadrat erscheint sofort',
        sponsor_payment_title: '🌟 Sponsor-Zahlungssystem',
        sponsor_payment_desc: 'Wähle das passende Paket für dein Unternehmen.',
        weekly: 'Wöchentlich',
        monthly: 'Monatlich',
        yearly: 'Jährlich',
        choose: 'Wählen',
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
        admin_login: '🔐 Zum Dashboard anmelden',
        login: 'Anmelden',
        payments: 'Zahlungen',
        sponsors: 'Sponsoren',
        suggestions: 'Vorschläge',
        settings: 'Einstellungen',
        add_member: 'Mitglied hinzufügen',
        export: 'Exportieren',
        name: 'Name',
        email: 'E-Mail',
        tier: 'Stufe',
        location: 'Standort',
        actions: 'Aktionen',
        payment_settings: '💳 Zahlungseinstellungen',
        save: 'Einstellungen speichern',
        sponsor_management: '🏢 Sponsorenverwaltung',
        add_sponsor: 'Sponsor hinzufügen',
        suggestions_title: '💡 Mitgliedervorschläge',
        no_suggestions: 'Noch keine Vorschläge',
        settings_title: '⚙️ Website-Einstellungen',
        admin_email: 'Admin-E-Mail:',
        admin_name: 'Admin-Name:',
        change_password: '🔑 Passwort ändern',
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

// ===== بيانات افتراضية =====
const NAMES = ['أحمد','محمد','سارة','نورة','علي','فاطمة','حسن','زينب','خالد','ليلى','عمر','منى','سعيد','هدى','ياسر','سمية','ماجد','رانيا','إبراهيم','سعاد'];
const LOCATIONS = ['الرياض','جدة','دبي','القاهرة','بيروت','عمان','الكويت','الدوحة','المنامة','مسقط'];

// ===== المتغيرات العامة =====
let members = [];
let sponsors = [
    { name: 'شركة الاتصالات', link: '#', amount: 1000, duration: 'monthly' },
    { name: 'بنك الرياض', link: '#', amount: 500, duration: 'weekly' },
    { name: 'أكاديمية البرمجة', link: '#', amount: 2000, duration: 'monthly' }
];
let suggestions = [];
let totalRevenue = 0;
let currentZoom = 1;
let currentLang = 'ar';
let virtualGrid = null;
let gridCanvas, searchInput, filterTier, liveClock;
let totalMembersDisplay, totalMembers, totalRevenueEl, availableSquares;
let membersTableBody, loginError, siteBackground, loadingIndicator;

// ===== إنشاء مشتركين افتراضيين =====
function generateVirtualMembers(count) {
    const result = [];
    const tierKeys = ['normal', 'silver', 'gold', 'royal'];
    const step = Math.floor(1000000 / count);
    
    for (let i = 0; i < count; i++) {
        const tier = tierKeys[i % tierKeys.length];
        const nameIndex = i % NAMES.length;
        const locIndex = i % LOCATIONS.length;
        const imageUrl = `https://picsum.photos/seed/${i + 100}/100/100`;
        
        result.push({
            id: `m${i + 1}`,
            name: NAMES[nameIndex],
            email: `${NAMES[nameIndex].toLowerCase()}${i}@example.com`,
            location: LOCATIONS[locIndex],
            tier: tier,
            website: `https://${NAMES[nameIndex].toLowerCase()}.com`,
            message: `مرحباً، أنا ${NAMES[nameIndex]} من ${LOCATIONS[locIndex]}`,
            image: imageUrl,
            isRoyal: tier === 'royal',
            position: i * step
        });
    }
    return result;
}

// ===== التخزين المحلي =====
function saveData() {
    localStorage.setItem('millionSquaresData', JSON.stringify({
        members, sponsors, suggestions, totalRevenue
    }));
}

function loadData() {
    const saved = localStorage.getItem('millionSquaresData');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            members = data.members || members;
            sponsors = data.sponsors || sponsors;
            suggestions = data.suggestions || suggestions;
            totalRevenue = data.totalRevenue || 0;
            return true;
        } catch(e) { return false; }
    }
    return false;
}

// ===== تهيئة البيانات =====
if (!loadData() || members.length === 0) {
    members = generateVirtualMembers(500);
    totalRevenue = members.reduce((sum, m) => sum + TIERS[m.tier].price, 0);
    saveData();
}

// ===== دوال الترجمة =====
function translatePage(lang) {
    const translations = TRANSLATIONS[lang];
    if (!translations) return;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[key];
            } else {
                el.innerHTML = translations[key];
            }
        }
    });
    
    document.querySelectorAll('select option[data-i18n]').forEach(opt => {
        const key = opt.dataset.i18n;
        if (translations[key]) {
            opt.textContent = translations[key];
        }
    });
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    translatePage(lang);
    
    // إعادة إنشاء المشتركين باللغة الجديدة
    members = generateVirtualMembers(500);
    saveData();
    
    if (virtualGrid) {
        virtualGrid.reset();
    }
    renderSponsors();
    renderMembersTable();
    updateStats();
    updateRoyalBackground();
}

// ===== نظام التحميل التدريجي =====
class VirtualGrid {
    constructor(container, totalCells = 1000000) {
        this.container = container;
        this.totalCells = totalCells;
        this.loadedCount = 0;
        this.batchSize = 3000;
        this.isLoading = false;
        this.allCells = [];
        this.filtered = false;
        
        this.container.addEventListener('scroll', () => this.handleScroll());
        this.loadMore();
    }

    handleScroll() {
        if (this.filtered) return;
        const { scrollTop, clientHeight, scrollHeight } = this.container;
        if (scrollTop + clientHeight >= scrollHeight - 500) {
            this.loadMore();
        }
    }

    loadMore() {
        if (this.isLoading || this.loadedCount >= this.totalCells || this.filtered) return;
        this.isLoading = true;
        if (loadingIndicator) loadingIndicator.classList.add('active');

        requestAnimationFrame(() => {
            const start = this.loadedCount;
            const end = Math.min(start + this.batchSize, this.totalCells);
            const fragment = document.createDocumentFragment();

            for (let i = start; i < end; i++) {
                const cell = document.createElement('div');
                cell.className = 'pixel-cell';
                cell.dataset.index = i;

                const member = members.find(m => m.position === i || m.position === i % members.length);
                if (member && i < members.length * 100) {
                    const tierInfo = TIERS[member.tier];
                    const tierName = tierInfo.name[currentLang] || tierInfo.name.ar;
                    cell.className = `pixel-cell tier-${member.tier}`;
                    cell.innerHTML = `
                        ${member.image ? `<img src="${member.image}" class="cell-image" loading="lazy">` : ''}
                        <div class="cell-name">${member.name}</div>
                        <div class="cell-tier">${tierInfo.label}</div>
                        <div class="cell-tooltip">
                            <strong>${member.name}</strong><br>
                            📍 ${member.location}<br>
                            ✉️ ${member.email}<br>
                            ${member.website ? `🔗 ${member.website}` : ''}<br>
                            💬 ${member.message}<br>
                            <span style="color:${tierInfo.color};font-weight:700">
                                ${tierInfo.label} ${tierName} ($${tierInfo.price}/${TRANSLATIONS[currentLang].year || 'سنة'})
                            </span>
                        </div>
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

            if (this.loadedCount < this.totalCells) {
                setTimeout(() => this.loadMore(), 50);
            } else {
                if (loadingIndicator) {
                    loadingIndicator.textContent = '✅ ' + (currentLang === 'ar' ? 'تم تحميل جميع المربعات!' : 'All squares loaded!');
                    setTimeout(() => loadingIndicator.classList.remove('active'), 2000);
                }
            }
            updateStats();
        });
    }

    filter(text, tier) {
        this.filtered = true;
        const lowerText = text.toLowerCase();
        this.allCells.forEach((cell, index) => {
            const member = members.find(m => m.position === index || m.position === index % members.length);
            if (!member) {
                cell.style.display = 'block';
                return;
            }
            const matchText = member.name.includes(lowerText) || 
                             member.email.includes(lowerText) || 
                             member.location.includes(lowerText);
            const matchTier = tier === 'all' || member.tier === tier;
            cell.style.display = (matchText && matchTier) ? 'block' : 'none';
        });
    }

    resetFilter() {
        this.filtered = false;
        this.allCells.forEach(cell => cell.style.display = 'block');
    }

    reset() {
        this.container.innerHTML = '';
        this.allCells = [];
        this.loadedCount = 0;
        this.filtered = false;
        this.loadMore();
    }
}

// ===== دوال العرض =====
function updateStats() {
    const count = members.length;
    if (totalMembers) totalMembers.textContent = count;
    if (totalMembersDisplay) totalMembersDisplay.textContent = count;
    if (availableSquares) availableSquares.textContent = (1000000 - count).toLocaleString();
    if (totalRevenueEl) totalRevenueEl.textContent = `$${totalRevenue.toFixed(0)}`;
}

function showMemberInfo(member) {
    const tierInfo = TIERS[member.tier];
    const tierName = tierInfo.name[currentLang] || tierInfo.name.ar;
    alert(`👤 ${member.name}\n📧 ${member.email}\n📍 ${member.location}\n${member.website ? `🔗 ${member.website}\n` : ''}💬 ${member.message}\n\n🏷️ المستوى: ${tierInfo.label} ${tierName}\n💰 السعر: $${tierInfo.price}/${TRANSLATIONS[currentLang].year || 'سنة'}`);
}

function showPaymentDialog() {
    const lang = currentLang;
    const options = Object.entries(TIERS).map(([k,v]) => 
        `${k}: ${v.label} ${v.name[lang] || v.name.ar} - $${v.price}/${TRANSLATIONS[lang].year || 'سنة'}`
    ).join('\n');
    
    const choice = prompt(lang === 'ar' ? 
        `💳 اختر مستوى الاشتراك:\n${options}\n\nأدخل نوع المستوى (normal, silver, gold, royal):` :
        `💳 Choose subscription tier:\n${options}\n\nEnter tier type (normal, silver, gold, royal):`);
    if (!choice || !TIERS[choice]) { 
        alert(lang === 'ar' ? '❌ مستوى غير صحيح' : '❌ Invalid tier'); 
        return; 
    }

    const tierInfo = TIERS[choice];
    const name = prompt(lang === 'ar' ? '👤 أدخل اسمك:' : '👤 Enter your name:');
    if (!name) return;
    const email = prompt(lang === 'ar' ? '✉️ أدخل بريدك الإلكتروني:' : '✉️ Enter your email:');
    if (!email) return;
    const location = prompt(lang === 'ar' ? '📍 أدخل موقعك:' : '📍 Enter your location:') || (lang === 'ar' ? 'غير محدد' : 'Not specified');
    const website = prompt(lang === 'ar' ? '🔗 رابط موقعك (اختياري):' : '🔗 Enter your website (optional):') || '';
    const image = prompt(lang === 'ar' ? '🖼️ رابط الصورة (اختياري):' : '🖼️ Profile image URL (optional):') || `https://picsum.photos/seed/${Date.now()}/100/100`;

    const method = prompt(lang === 'ar' ? 
        '💳 طريقة الدفع:\n1. PayPal\n2. Stripe\n3. IBAN\n\nأدخل الرقم (1-3):' :
        '💳 Payment method:\n1. PayPal\n2. Stripe\n3. IBAN\n\nEnter number (1-3):');
    if (!method || !['1','2','3'].includes(method)) { 
        alert(lang === 'ar' ? '❌ طريقة غير صحيحة' : '❌ Invalid method'); 
        return; 
    }

    const methods = ['PayPal','Stripe','IBAN'];
    alert(lang === 'ar' ? 
        `✅ جارٍ التحويل إلى ${methods[parseInt(method)-1]}\nالمبلغ: $${tierInfo.price}` :
        `✅ Redirecting to ${methods[parseInt(method)-1]}\nAmount: $${tierInfo.price}`);

    const newMember = {
        id: `m${Date.now()}`,
        name, email, location, tier: choice, website, image,
        message: lang === 'ar' ? `مرحباً، أنا ${name} من ${location}` : `Hello, I am ${name} from ${location}`,
        isRoyal: choice === 'royal',
        position: members.length
    };
    
    members.push(newMember);
    totalRevenue += tierInfo.price;
    saveData();
    if (virtualGrid) virtualGrid.reset();
    renderMembersTable();
    updateStats();
    updateRoyalBackground();
    
    alert(lang === 'ar' ? 
        `🎉 تم الاشتراك بنجاح!\nالمستوى: ${tierInfo.label} ${tierInfo.name[lang] || tierInfo.name.ar}\nالمبلغ: $${tierInfo.price}` :
        `🎉 Subscription successful!\nTier: ${tierInfo.label} ${tierInfo.name[lang] || tierInfo.name.ar}\nAmount: $${tierInfo.price}`);
}

// ===== شريط الرعاة =====
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
    members.forEach((m, i) => {
        const tr = document.createElement('tr');
        const tierInfo = TIERS[m.tier];
        const tierName = tierInfo.name[currentLang] || tierInfo.name.ar;
        tr.innerHTML = `
            <td>${m.name}</td>
            <td>${m.email}</td>
            <td><span style="color:${tierInfo.color}">${tierInfo.label} ${tierName}</span></td>
            <td>${m.location}</td>
            <td><button class="delete-btn" data-index="${i}">🗑️ حذف</button></td>
        `;
        membersTableBody.appendChild(tr);
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('هل أنت متأكد؟')) {
                const i = parseInt(this.dataset.index);
                totalRevenue -= TIERS[members[i].tier].price;
                members.splice(i, 1);
                saveData();
                renderMembersTable();
                if (virtualGrid) virtualGrid.reset();
                updateStats();
                updateRoyalBackground();
            }
        });
    });
}

function renderSponsorList() {
    const list = document.getElementById('sponsorList');
    if (!list) return;
    list.innerHTML = '';
    const durationMap = { weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي' };
    sponsors.forEach((s, i) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>🏢 ${s.name} - $${s.amount} (${durationMap[s.duration]})</span>
            <button onclick="removeSponsor(${i})">🗑️</button>
        `;
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

// ===== أحداث البحث والفلترة =====
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة العناصر
    gridCanvas = document.getElementById('gridCanvas');
    searchInput = document.getElementById('searchInput');
    filterTier = document.getElementById('filterTier');
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
    setInterval(() => {
        if (liveClock) {
            const now = new Date();
            liveClock.textContent = now.toLocaleTimeString(currentLang === 'ar' ? 'ar-EG' : 'en-US');
        }
    }, 1000);

    // البحث والفلترة
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            if (virtualGrid) {
                const text = this.value.toLowerCase();
                const tier = filterTier ? filterTier.value : 'all';
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
                const text = searchInput ? searchInput.value.toLowerCase() : '';
                if (text || this.value !== 'all') {
                    virtualGrid.filter(text, this.value);
                } else {
                    virtualGrid.resetFilter();
                }
            }
        });
    }

    // التحكم بالزوم
    document.getElementById('zoomInBtn')?.addEventListener('click', () => {
        currentZoom = Math.min(2, currentZoom + 0.1);
        applyZoom();
    });

    document.getElementById('zoomOutBtn')?.addEventListener('click', () => {
        currentZoom = Math.max(0.5, currentZoom - 0.1);
        applyZoom();
    });

    document.getElementById('resetViewBtn')?.addEventListener('click', () => {
        currentZoom = 1;
        applyZoom();
    });

    // أزرار اللغة
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    // زر الدخول المخفي
    document.getElementById('adminSecretBtn')?.addEventListener('click', function() {
        adminClickCount++;
        if (adminClickCount === 1) {
            adminClickTimer = setTimeout(() => {
                adminClickCount = 0;
            }, 500);
        } else if (adminClickCount === 2) {
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

    // الدخول إلى لوحة التحكم
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
            alert('✅ تم الدخول إلى لوحة التحكم');
        } else {
            if (loginError) loginError.classList.remove('hidden');
            document.getElementById('adminPassword').value = '';
            document.getElementById('adminPassword').focus();
        }
    });

    // تبويبات
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });

    // إضافة مشترك
    document.getElementById('addMemberBtn')?.addEventListener('click', function() {
        const lang = currentLang;
        const name = prompt(lang === 'ar' ? '👤 اسم المشترك:' : '👤 Member name:');
        if (!name) return;
        const email = prompt(lang === 'ar' ? '✉️ البريد:' : '✉️ Email:');
        if (!email) return;
        const location = prompt(lang === 'ar' ? '📍 الموقع:' : '📍 Location:') || (lang === 'ar' ? 'غير محدد' : 'Not specified');
        const tier = prompt(lang === 'ar' ? '🏷️ المستوى (normal/silver/gold/royal):' : '🏷️ Tier (normal/silver/gold/royal):') || 'normal';
        if (!TIERS[tier]) { alert(lang === 'ar' ? '❌ مستوى غير صحيح' : '❌ Invalid tier'); return; }
        const image = prompt(lang === 'ar' ? '🖼️ رابط الصورة:' : '🖼️ Image URL:') || `https://picsum.photos/seed/${Date.now()}/100/100`;

        members.push({
            id: `m${Date.now()}`,
            name, email, location, tier, image,
            website: '', message: lang === 'ar' ? `مرحباً، أنا ${name}` : `Hello, I am ${name}`,
            isRoyal: tier === 'royal'
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
    document.getElementById('exportMembersBtn')?.addEventListener('click', function() {
        let csv = 'الاسم,البريد,المستوى,الموقع\n';
        members.forEach(m => csv += `${m.name},${m.email},${m.tier},${m.location}\n`);
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'المشتركين.csv';
        a.click();
        URL.revokeObjectURL(url);
    });

    // إضافة راعي
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

    // إعدادات الدفع
    document.getElementById('savePaymentSettings')?.addEventListener('click', function() {
        localStorage.setItem('paypal', document.getElementById('paypalSetting').value);
        localStorage.setItem('stripe', document.getElementById('stripeSetting').value);
        localStorage.setItem('iban', document.getElementById('ibanSetting').value);
        alert('✅ تم حفظ إعدادات الدفع');
    });

    // إعدادات المدير
    document.getElementById('saveSettingsBtn')?.addEventListener('click', function() {
        localStorage.setItem('adminEmail', document.getElementById('adminEmailSetting').value);
        localStorage.setItem('adminName', document.getElementById('adminNameSetting').value);
        alert('✅ تم حفظ إعدادات المدير');
    });

    // تغيير كلمة السر
    document.getElementById('changePasswordBtn')?.addEventListener('click', function() {
        const pass = document.getElementById('newPassword').value.trim();
        if (pass.length < 4) { alert('❌ 4 أحرف على الأقل'); return; }
        localStorage.setItem('adminPassword', pass);
        alert('✅ تم تغيير كلمة السر');
        document.getElementById('newPassword').value = '';
    });

    // الاقتراحات
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

    // رعاة الدفع
    document.querySelectorAll('.sponsor-pay-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const plan = this.dataset.plan;
            const amount = this.dataset.amount;
            const lang = currentLang;
            const planMap = { weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي' };
            const planMapEn = { weekly: 'Weekly', monthly: 'Monthly', yearly: 'Yearly' };
            
            const name = prompt(lang === 'ar' ? '🏢 أدخل اسم الشركة:' : '🏢 Enter company name:');
            if (!name) return;
            const link = prompt(lang === 'ar' ? '🔗 أدخل رابط الموقع:' : '🔗 Enter website URL:');
            if (!link) return;
            
            const method = prompt(lang === 'ar' ? 
                '💳 طريقة الدفع:\n1. PayPal\n2. Stripe\n3. IBAN\n\nأدخل الرقم (1-3):' :
                '💳 Payment method:\n1. PayPal\n2. Stripe\n3. IBAN\n\nEnter number (1-3):');
            if (!method || !['1','2','3'].includes(method)) { 
                alert(lang === 'ar' ? '❌ طريقة غير صحيحة' : '❌ Invalid method'); 
                return; 
            }
            
            const methods = ['PayPal','Stripe','IBAN'];
            alert(lang === 'ar' ? 
                `✅ جارٍ التحويل إلى ${methods[parseInt(method)-1]}\nالمبلغ: $${amount}` :
                `✅ Redirecting to ${methods[parseInt(method)-1]}\nAmount: $${amount}`);
            
            sponsors.push({ name, link, amount: parseInt(amount), duration: plan });
            saveData();
            renderSponsorList();
            renderSponsors();
            alert(lang === 'ar' ? 
                `🎉 تمت الرعاية بنجاح!\nالشركة: ${name}\nالمبلغ: $${amount}\nالمدة: ${planMap[plan]}` :
                `🎉 Sponsorship successful!\nCompany: ${name}\nAmount: $${amount}\nDuration: ${planMapEn[plan]}`);
        });
    });

    // تهيئة الشبكة
    if (gridCanvas) {
        virtualGrid = new VirtualGrid(gridCanvas, 1000000);
    }
    
    // تهيئة باقي العناصر
    renderSponsors();
    renderMembersTable();
    renderSponsorList();
    updateSuggestions();
    updateStats();
    updateRoyalBackground();

    // تحميل الإعدادات
    document.getElementById('adminEmailSetting').value = localStorage.getItem('adminEmail') || '';
    document.getElementById('adminNameSetting').value = localStorage.getItem('adminName') || '';
    document.getElementById('paypalSetting').value = localStorage.getItem('paypal') || '';
    document.getElementById('stripeSetting').value = localStorage.getItem('stripe') || '';
    document.getElementById('ibanSetting').value = localStorage.getItem('iban') || '';

    // ترجمة الصفحة الأولية
    translatePage('ar');

    console.log('🚀 مليون مربع - تم التحميل بنجاح');
    console.log(`👥 المشتركين: ${members.length}`);
    console.log(`💰 الإيرادات: $${totalRevenue}`);
    console.log(`📦 المربعات: 1,000,000 (تحميل تدريجي)`);
    console.log(`🌐 اللغات: عربي, English, Français, Español, Deutsch`);
    console.log(`🔐 لوحة التحكم: انقر مرتين على زر 🔐`);
});

// ===== دوال مساعدة =====
function applyZoom() {
    const size = Math.max(30, 60 * currentZoom);
    document.querySelectorAll('.pixel-cell').forEach(cell => {
        cell.style.minHeight = size + 'px';
        cell.style.fontSize = (size * 0.015) + 'rem';
    });
}

function updateSuggestions() {
    const list = document.getElementById('suggestionsList');
    if (!list) return;
    if (suggestions.length === 0) {
        list.innerHTML = `<p class="empty-msg">${TRANSLATIONS[currentLang].no_suggestions || 'لا توجد اقتراحات'}</p>`;
        return;
    }
    list.innerHTML = suggestions.slice().reverse().map(s => `
        <div class="suggestion-item">
            <strong>${s.name}</strong> (${s.email}) - ${s.date}
            <p>${s.text}</p>
        </div>
    `).join('');
    // ===== شاشة الترحيب =====
document.addEventListener('DOMContentLoaded', function() {
    const welcomePopup = document.getElementById('welcomePopup');
    const welcomeBookBtn = document.getElementById('welcomeBookBtn');
    const welcomeCloseBtn = document.getElementById('welcomeCloseBtn');
    const welcomeMemberCount = document.getElementById('welcomeMemberCount');

    // عرض عدد المشتركين في شاشة الترحيب
    if (welcomeMemberCount) {
        welcomeMemberCount.textContent = members.length || 0;
    }

    // إخفاء شاشة الترحيب بعد 5 ثوانٍ أو عند الضغط على زر
    setTimeout(() => {
        if (welcomePopup) welcomePopup.classList.add('hidden');
    }, 5000);

    if (welcomeBookBtn) {
        welcomeBookBtn.addEventListener('click', function() {
            welcomePopup.classList.add('hidden');
            bookSquare(); // استدعاء دالة الحجز
        });
    }

    if (welcomeCloseBtn) {
        welcomeCloseBtn.addEventListener('click', function() {
            welcomePopup.classList.add('hidden');
        });
    }
});

// ===== CTA الثابت =====
const stickyCTA = document.getElementById('stickyCTA');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    if (!stickyCTA) return;
    if (window.scrollY > 300 && window.scrollY < document.body.scrollHeight - 800) {
        stickyCTA.classList.add('visible');
    } else {
        stickyCTA.classList.remove('visible');
    }
});

document.getElementById('stickyBookBtn')?.addEventListener('click', bookSquare);

// ===== الإشعارات الفورية =====
function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    if (!container) return;
    const item = document.createElement('div');
    item.className = 'notification-item';
    item.innerHTML = message;
    container.appendChild(item);
    setTimeout(() => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(120%)';
        setTimeout(() => item.remove(), 500);
    }, 4000);
}

// محاكاة إشعار عند حجز مربع جديد
function notifyNewBooking(memberName) {
    showNotification(`🎉 <span class="highlight">${memberName}</span> انضم للتو!`);
}

// ===== نظام الإحالات =====
document.getElementById('copyReferralLink')?.addEventListener('click', function() {
    const input = document.getElementById('referralLink');
    if (!input) return;
    input.select();
    document.execCommand('copy');
    showNotification('✅ تم نسخ رابط الإحالة!', 'success');
});

// ===== تأثير الندرة (عداد تنازلي) =====
function createScarcityCounter() {
    const counterDiv = document.createElement('div');
    counterDiv.className = 'scarcity-counter';
    counterDiv.innerHTML = `
        <span>🔥 العرض محدود: <span id="scarcityTimer">00:00:00</span></span>
    `;
    document.querySelector('.book-section')?.appendChild(counterDiv);

    let timeLeft = 3600; // ساعة واحدة
    const timerEl = document.getElementById('scarcityTimer');
    if (!timerEl) return;

    setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) timeLeft = 3600;
        const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
        const seconds = String(timeLeft % 60).padStart(2, '0');
        timerEl.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}
// استدعاء الدالة عند تحميل الصفحة
createScarcityCounter();

// ===== إحصائيات ديناميكية =====
function updateDynamicStats() {
    const total = members.length;
    const real = members.filter(m => !m.isVirtual).length;
    const virtual = members.filter(m => m.isVirtual).length;
    const revenue = members.reduce((sum, m) => sum + TIERS[m.tier].price, 0);

    document.querySelector('.stat-total-members')?.textContent = total;
    document.querySelector('.stat-real-members')?.textContent = real;
    document.querySelector('.stat-virtual-members')?.textContent = virtual;
    document.querySelector('.stat-total-revenue')?.textContent = `$${revenue}`;
}
// استدعاء بعد كل تغيير في البيانات
}
