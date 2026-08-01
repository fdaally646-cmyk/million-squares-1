// ===== بيانات المستويات =====
const TIERS = {
    normal: { name: 'عادي', price: 1, color: '#4A90D9', label: '💎' },
    silver: { name: 'فضي', price: 5, color: '#C0C0C0', label: '⭐' },
    gold: { name: 'ذهبي', price: 10, color: '#FFD700', label: '👑' },
    royal: { name: 'ملكي', price: 100, color: '#9B59B6', label: '💠' }
};

// ===== الترجمات الكاملة =====
const LANG = {
    ar: {
        site_title: 'مليون مربع', subtitle: 'منصة التواصل البصرية الأولى',
        banner: '🚀 انضم الآن واحجز مربعك المميز', available: 'المربعات المتاحة',
        members: 'مشترك', revenue: 'إيرادات', year: 'سنة',
        loading: '⏳ جاري تحميل مليون مربع...', loading_grid: '⏳ جاري التحميل...',
        total_squares: 'إجمالي المربعات', virtual_members: 'افتراضي',
        online: 'متصلون', today: 'جديد اليوم',
        search: '🔎 بحث...', all_tiers: 'جميع المستويات',
        normal: '💎 عادي', silver: '⭐ فضي', gold: '👑 ذهبي', royal: '💠 ملكي',
        sponsors_title: '🌟 الرعاة الداعمون', become_sponsor: 'كن راعياً',
        book_square: 'احجز مربعك الآن', book_hint: '🎁 3 أيام تجريبية مجانية',
        welcome_title: '🌟 انضم إلى مليون مربع',
        welcome_desc: 'احجز مساحتك الرقمية التفاعلية الآن واستفيد من <strong>3 أيام تجريبية مجانية</strong>.',
        start_now: 'ابدأ الآن', browse: 'تصفح الموقع',
        more_than: 'أكثر من', members_joined: 'مشترك انضموا بالفعل',
        limited_offer: 'العرض محدود', secure_payment: 'دفع آمن',
        support_24_7: 'دعم 24/7', free_trial: '3 أيام مجانية',
        free_trial_badge: '🎁 3 أيام مجانية',
        what_is: '🎯 ما هو مليون مربع؟',
        description: 'منصة ثورية تتيح للأفراد والشركات امتلاك مساحة رقمية تفاعلية.',
        steps_title: '📋 خطوات الاشتراك',
        step1: 'اختر موقعك', step2: 'حدد المستوى',
        step3: 'املأ بياناتك', step4: '3 أيام تجريبية مجانية', step5: 'انطلق!',
        trial_banner: '3 أيام تجريبية مجانية',
        sponsor_payment_title: '🌟 نظام الدفع للرعاة',
        sponsor_payment_desc: 'اختر الباقة المناسبة لشركتك',
        weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي',
        choose: 'اختر', popular: 'الأكثر طلباً',
        sp_weekly_1: '✅ عرض اسم الشركة', sp_weekly_2: '✅ مدة: 7 أيام',
        sp_monthly_1: '✅ عرض اسم الشركة', sp_monthly_2: '✅ مدة: 30 يوماً',
        sp_monthly_3: '✅ شعار مميز',
        admin_hint: 'انقر مرتين للدخول', admin_login: 'الدخول إلى لوحة التحكم',
        login: 'دخول', login_error: 'اسم المستخدم أو كلمة السر غير صحيحة',
        username: 'اسم المستخدم', password: 'كلمة السر',
        settings: 'الإعدادات',
        add_member: 'إضافة', refresh: 'تحديث',
        name: 'الاسم', email: 'البريد', tier: 'المستوى',
        location: 'الموقع', type: 'النوع', trial: 'التجربة',
        actions: 'الإجراءات', delete: 'حذف',
        settings_title: 'الإعدادات', admin_email: 'بريد المدير:',
        admin_email_placeholder: 'بريد المدير',
        change_password: 'تغيير كلمة السر', new_password: 'كلمة سر جديدة',
        change: 'تغيير', save: 'حفظ',
        suggest_idea: '💡 شاركنا اقتراحك', send: 'إرسال',
        your_name: 'اسمك', your_email: 'بريدك', your_suggestion: 'فكرتك لتطوير الموقع',
        contact_us: '📧 تواصل معنا', about_us: '📍 عن الموقع',
        about_text: 'منصة مليون مربع', follow_us: '📱 تابعنا',
        rights: 'جميع الحقوق محفوظة',
        badge_normal: 'مبتدئ', badge_silver: 'شائع',
        badge_gold: 'مميز', badge_royal: 'VIP',
        f_normal_1: '✅ عرض الاسم', f_normal_2: '✅ عرض الموقع',
        f_silver_1: '✅ عرض الاسم', f_silver_2: '✅ عرض الموقع',
        f_silver_3: '✅ رابط الموقع',
        f_gold_1: '✅ عرض الاسم', f_gold_2: '✅ عرض الموقع',
        f_gold_3: '✅ رابط الموقع', f_gold_4: '✅ صورة شخصية',
        f_royal_1: '✅ جميع الميزات', f_royal_2: '✅ خلفية متحركة',
        f_royal_3: '✅ ظهور مميز',
        admin_search: '🔍 بحث...', all_types: 'الكل',
        real_members: 'حقيقي', virtual_members_list: 'افتراضي',
        referral_title: '👥 أحضر صديقاً واحصل على مكافأة',
        referral_desc: 'شارك رابطك الخاص مع أصدقائك واحصل على خصم 10% عند اشتراكهم.',
        copy: 'نسخ',
        lang_ar: '🇸🇦 عربي', lang_en: '🇬🇧 English', lang_fr: '🇫🇷 Français'
    },
    en: {
        site_title: 'Million Squares', subtitle: 'The First Visual Communication Platform',
        banner: '🚀 Join now and book your special square', available: 'Available squares',
        members: 'Members', revenue: 'Revenue', year: 'year',
        loading: '⏳ Loading Million Squares...', loading_grid: '⏳ Loading...',
        total_squares: 'Total squares', virtual_members: 'Virtual',
        online: 'Online', today: 'Today',
        search: '🔎 Search...', all_tiers: 'All Tiers',
        normal: '💎 Normal', silver: '⭐ Silver', gold: '👑 Gold', royal: '💠 Royal',
        sponsors_title: '🌟 Supporting Sponsors', become_sponsor: 'Become a Sponsor',
        book_square: 'Book Your Square Now', book_hint: '🎁 3 days free trial',
        welcome_title: '🌟 Join Million Squares',
        welcome_desc: 'Book your interactive digital space now and get <strong>3 days free trial</strong>.',
        start_now: 'Start Now', browse: 'Browse Site',
        more_than: 'More than', members_joined: 'members have joined',
        limited_offer: 'Limited offer', secure_payment: 'Secure Payment',
        support_24_7: '24/7 Support', free_trial: '3 days free',
        free_trial_badge: '🎁 3 days free',
        what_is: '🎯 What is Million Squares?',
        description: 'A revolutionary platform for interactive digital space.',
        steps_title: '📋 Subscription Steps',
        step1: 'Choose your spot', step2: 'Select tier',
        step3: 'Fill your data', step4: '3 days free trial', step5: 'Go!',
        trial_banner: '3 days free trial',
        sponsor_payment_title: '🌟 Sponsor Payment System',
        sponsor_payment_desc: 'Choose the right package for your company',
        weekly: 'Weekly', monthly: 'Monthly', yearly: 'Yearly',
        choose: 'Choose', popular: 'Most Popular',
        sp_weekly_1: '✅ Display company name', sp_weekly_2: '✅ Duration: 7 days',
        sp_monthly_1: '✅ Display company name', sp_monthly_2: '✅ Duration: 30 days',
        sp_monthly_3: '✅ Featured logo',
        admin_hint: 'Double click to access', admin_login: 'Login to Dashboard',
        login: 'Login', login_error: 'Invalid username or password',
        username: 'Username', password: 'Password',
        settings: 'Settings',
        add_member: 'Add', refresh: 'Refresh',
        name: 'Name', email: 'Email', tier: 'Tier',
        location: 'Location', type: 'Type', trial: 'Trial',
        actions: 'Actions', delete: 'Delete',
        settings_title: 'Settings', admin_email: 'Admin Email:',
        admin_email_placeholder: 'Admin email',
        change_password: 'Change Password', new_password: 'New password',
        change: 'Change', save: 'Save',
        suggest_idea: '💡 Share Your Suggestion', send: 'Send',
        your_name: 'Your name', your_email: 'Your email', your_suggestion: 'Your idea to improve',
        contact_us: '📧 Contact Us', about_us: '📍 About Us',
        about_text: 'Million Squares Platform', follow_us: '📱 Follow Us',
        rights: 'All Rights Reserved',
        badge_normal: 'Beginner', badge_silver: 'Popular',
        badge_gold: 'Featured', badge_royal: 'VIP',
        f_normal_1: '✅ Show name', f_normal_2: '✅ Show location',
        f_silver_1: '✅ Show name', f_silver_2: '✅ Show location',
        f_silver_3: '✅ Website link',
        f_gold_1: '✅ Show name', f_gold_2: '✅ Show location',
        f_gold_3: '✅ Website link', f_gold_4: '✅ Profile image',
        f_royal_1: '✅ All features', f_royal_2: '✅ Animated background',
        f_royal_3: '✅ Featured display',
        admin_search: '🔍 Search...', all_types: 'All',
        real_members: 'Real', virtual_members_list: 'Virtual',
        referral_title: '👥 Refer a Friend & Get Reward',
        referral_desc: 'Share your special link with friends and get 10% discount when they subscribe.',
        copy: 'Copy',
        lang_ar: '🇸🇦 Arabic', lang_en: '🇬🇧 English', lang_fr: '🇫🇷 French'
    },
    fr: {
        site_title: 'Million de Carrés', subtitle: 'La première plateforme de communication visuelle',
        banner: '🚀 Rejoignez maintenant', available: 'Carrés disponibles',
        members: 'Membres', revenue: 'Revenus', year: 'an',
        loading: '⏳ Chargement...', loading_grid: '⏳ Chargement...',
        total_squares: 'Total des carrés', virtual_members: 'Virtuel',
        online: 'En ligne', today: "Aujourd'hui",
        search: '🔎 Rechercher...', all_tiers: 'Tous les niveaux',
        normal: '💎 Normal', silver: '⭐ Argent', gold: '👑 Or', royal: '💠 Royal',
        sponsors_title: '🌟 Sponsors', become_sponsor: 'Devenir Sponsor',
        book_square: 'Réservez votre carré', book_hint: '🎁 3 jours d\'essai',
        welcome_title: '🌟 Rejoignez Million de Carrés',
        welcome_desc: 'Réservez votre espace numérique interactif maintenant avec <strong>3 jours d\'essai gratuit</strong>.',
        start_now: 'Commencer', browse: 'Parcourir',
        more_than: 'Plus de', members_joined: 'membres ont rejoint',
        limited_offer: 'Offre limitée', secure_payment: 'Paiement sécurisé',
        support_24_7: 'Support 24/7', free_trial: '3 jours gratuits',
        free_trial_badge: '🎁 3 jours gratuits',
        what_is: "🎯 Qu'est-ce que Million de Carrés?",
        description: 'Une plateforme révolutionnaire pour espace numérique interactif.',
        steps_title: "📋 Étapes d'abonnement",
        step1: 'Choisissez votre emplacement', step2: 'Sélectionnez le niveau',
        step3: 'Remplissez vos données', step4: '3 jours d\'essai', step5: 'Go!',
        trial_banner: '3 jours d\'essai gratuit',
        sponsor_payment_title: '🌟 Système de paiement',
        sponsor_payment_desc: 'Choisissez le forfait adapté',
        weekly: 'Hebdomadaire', monthly: 'Mensuel', yearly: 'Annuel',
        choose: 'Choisir', popular: 'Le plus populaire',
        sp_weekly_1: "✅ Afficher le nom", sp_weekly_2: '✅ Durée: 7 jours',
        sp_monthly_1: "✅ Afficher le nom", sp_monthly_2: '✅ Durée: 30 jours',
        sp_monthly_3: '✅ Logo en vedette',
        admin_hint: 'Double-cliquez pour accéder', admin_login: 'Connexion',
        login: 'Connexion', login_error: 'Identifiants incorrects',
        username: "Nom d'utilisateur", password: 'Mot de passe',
        settings: 'Paramètres',
        add_member: 'Ajouter', refresh: 'Rafraîchir',
        name: 'Nom', email: 'Email', tier: 'Niveau',
        location: 'Emplacement', type: 'Type', trial: 'Essai',
        actions: 'Actions', delete: 'Supprimer',
        settings_title: 'Paramètres', admin_email: "Email de l'admin:",
        admin_email_placeholder: "Email de l'admin",
        change_password: 'Changer mot de passe', new_password: 'Nouveau mot de passe',
        change: 'Changer', save: 'Enregistrer',
        suggest_idea: '💡 Partagez votre suggestion', send: 'Envoyer',
        your_name: 'Votre nom', your_email: 'Votre email', your_suggestion: 'Votre idée',
        contact_us: '📧 Contactez-nous', about_us: '📍 À propos',
        about_text: 'Plateforme Million de Carrés', follow_us: '📱 Suivez-nous',
        rights: 'Tous droits réservés',
        badge_normal: 'Débutant', badge_silver: 'Populaire',
        badge_gold: 'En vedette', badge_royal: 'VIP',
        f_normal_1: '✅ Afficher le nom', f_normal_2: "✅ Afficher l'emplacement",
        f_silver_1: '✅ Afficher le nom', f_silver_2: "✅ Afficher l'emplacement",
        f_silver_3: '✅ Lien site web',
        f_gold_1: '✅ Afficher le nom', f_gold_2: "✅ Afficher l'emplacement",
        f_gold_3: '✅ Lien site web', f_gold_4: '✅ Photo de profil',
        f_royal_1: '✅ Toutes les fonctionnalités', f_royal_2: '✅ Fond animé',
        f_royal_3: '✅ Affichage en vedette',
        admin_search: '🔍 Rechercher...', all_types: 'Tous',
        real_members: 'Réel', virtual_members_list: 'Virtuel',
        referral_title: '👥 Parrainez un ami',
        referral_desc: 'Partagez votre lien et obtenez 10% de réduction.',
        copy: 'Copier',
        lang_ar: '🇸🇦 Arabe', lang_en: '🇬🇧 Anglais', lang_fr: '🇫🇷 Français'
    }
};

// ===== البيانات الأساسية =====
const NAMES = [
    'أحمد محمد السيد', 'محمد عبدالله العمري', 'سارة خالد الخالدي', 'نورة سعيد الحربي',
    'علي حسن الشمري', 'فاطمة محمد الزهراء', 'حسن علي الغامدي', 'زينب عبدالله العلي',
    'خالد إبراهيم المالكي', 'ليلى عبدالرحمن القحطاني', 'عمر سعود العتيبي', 'منى صالح الشهراني'
];

const LOCATIONS = [
    'الرياض', 'جدة', 'مكة', 'المدينة', 'الدمام',
    'الخبر', 'تبوك', 'حائل', 'القصيم', 'نجران',
    'دبي', 'أبوظبي', 'القاهرة', 'الإسكندرية', 'بيروت'
];

// ===== المتغيرات العامة =====
let members = [];
let sponsors = [];
let suggestions = [];
let totalRevenue = 0;
let virtualRevenue = 0;
let currentZoom = 1;
let currentLang = 'ar';
let adminClickCount = 0;
let adminClickTimer = null;
let royalInterval = null;
let royalIndex = 0;

// ===== عناصر DOM =====
let gridCanvas, searchInput, filterTier, filterType;
let totalMembersDisplay, totalMembers, totalRevenueEl, availableSquares;
let membersTableBody, loginError, siteBackground, loadingIndicator;

// ===== حساب الإيرادات =====
function calculateRevenue() {
    let real = 0, virtual = 0;
    for (let i = 0; i < members.length; i++) {
        const price = TIERS[members[i].tier].price;
        if (members[i].isVirtual) virtual += price;
        else real += price;
    }
    return { real, virtual, total: real + virtual };
}

// ===== إنشاء مشتركين افتراضيين =====
function generateVirtualMembers(count) {
    const result = [];
    const tierKeys = ['normal', 'silver', 'gold', 'royal'];
    const phones = ['0501234567', '0559876543', '0567890123', '0543210987'];
    for (let i = 0; i < count; i++) {
        const tier = tierKeys[i % tierKeys.length];
        const nameIndex = i % NAMES.length;
        const locIndex = i % LOCATIONS.length;
        const trialEnd = new Date();
        trialEnd.setDate(trialEnd.getDate() + 3);
        result.push({
            id: 'v' + (i + 1),
            name: NAMES[nameIndex],
            email: NAMES[nameIndex].replace(/ /g, '').toLowerCase() + i + '@example.com',
            phone: phones[i % phones.length],
            location: LOCATIONS[locIndex],
            tier: tier,
            website: 'https://' + NAMES[nameIndex].replace(/ /g, '').toLowerCase() + '.com',
            message: 'مرحباً، أنا ' + NAMES[nameIndex] + ' من ' + LOCATIONS[locIndex],
            image: 'https://picsum.photos/seed/' + (i + 100) + '/100/100',
            isRoyal: tier === 'royal',
            isVirtual: true,
            position: i,
            joinDate: new Date().toLocaleDateString('ar-EG'),
            trialEnd: trialEnd.toLocaleDateString('ar-EG'),
            rating: Math.floor(Math.random() * 5) + 1,
            votes: Math.floor(Math.random() * 50) + 1
        });
    }
    return result;
}

// ===== التخزين المحلي =====
function saveData() {
    const data = { members, sponsors, suggestions, totalRevenue, virtualRevenue, currentLang };
    try { localStorage.setItem('millionSquaresData', JSON.stringify(data)); } catch(e) {}
}

function loadData() {
    try {
        const saved = localStorage.getItem('millionSquaresData');
        if (saved) {
            const data = JSON.parse(saved);
            members = data.members || [];
            sponsors = data.sponsors || [];
            suggestions = data.suggestions || [];
            totalRevenue = data.totalRevenue || 0;
            virtualRevenue = data.virtualRevenue || 0;
            if (data.currentLang) currentLang = data.currentLang;
            return true;
        }
    } catch(e) {}
    return false;
}

// ===== تهيئة البيانات =====
if (!loadData() || members.length === 0) {
    members = generateVirtualMembers(100);
    const rev = calculateRevenue();
    totalRevenue = rev.real;
    virtualRevenue = rev.virtual;
    saveData();
}

// ===== الترجمة =====
function translatePage(lang) {
    const t = LANG[lang];
    if (!t) return;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });
    
    document.querySelectorAll('select option[data-i18n]').forEach(opt => {
        const key = opt.dataset.i18n;
        if (t[key] !== undefined) {
            opt.textContent = t[key];
        }
    });
    
    const bookBtn = document.getElementById('bookSquareBtn');
    if (bookBtn) {
        const span = bookBtn.querySelector('span');
        if (span && t.book_square) span.textContent = t.book_square;
    }
    
    const stickyBtn = document.querySelector('.sticky-cta .book-btn span');
    if (stickyBtn && t.book_square) stickyBtn.textContent = t.book_square;
    
    const bookHint = document.querySelector('.book-hint');
    if (bookHint && t.book_hint) bookHint.textContent = t.book_hint;
    
    const loadingText = document.getElementById('loadingText');
    if (loadingText && t.loading) loadingText.textContent = t.loading;
    
    const loadingIndicatorText = document.querySelector('#loadingIndicator span');
    if (loadingIndicatorText && t.loading_grid) loadingIndicatorText.textContent = t.loading_grid;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const key = 'lang_' + btn.dataset.lang;
        if (t[key] !== undefined) {
            btn.innerHTML = t[key];
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
    saveData();
    renderGrid();
    renderMembersTable();
    updateStats();
}

// ===== عرض المربعات =====
function renderGrid() {
    if (!gridCanvas) return;
    if (loadingIndicator) loadingIndicator.classList.add('active');
    
    setTimeout(() => {
        gridCanvas.innerHTML = '';
        const fragment = document.createDocumentFragment();
        const totalCells = 1500;
        const memberCount = members.length;
        const t = LANG[currentLang] || LANG.ar;
        
        for (let i = 0; i < totalCells; i++) {
            const cell = document.createElement('div');
            cell.className = 'pixel-cell';
            const memberIndex = i % memberCount;
            const member = members[memberIndex];
            
            if (member) {
                const tierInfo = TIERS[member.tier];
                const stars = '⭐'.repeat(member.rating || 3) + '☆'.repeat(5 - (member.rating || 3));
                cell.className = 'pixel-cell tier-' + member.tier;
                const isTrialActive = member.trialEnd && new Date(member.trialEnd) > new Date();
                
                cell.innerHTML = 
                    (member.image ? `<img src="${member.image}" class="cell-image" loading="lazy">` : '') +
                    `<div class="cell-name">${member.name}</div>` +
                    `<div class="cell-tier">${tierInfo.label}</div>` +
                    (member.isVirtual ? `<div class="cell-virtual-badge">${t.virtual_members}</div>` : '') +
                    (isTrialActive ? '<div class="trial-badge">🎁 تجربة</div>' : '') +
                    `<div class="cell-tooltip"><strong>${member.name}</strong><br>📍 ${member.location}<br>✉️ ${member.email}<br>📞 ${member.phone || '-'}<br><span style="color:${tierInfo.color};font-weight:700">${tierInfo.label} ${tierInfo.name} ($${tierInfo.price}/${t.year})</span><br><small>⭐ ${stars} (${member.votes || 0})</small></div>` +
                    `<div class="cell-rating"><span class="stars">${stars}</span><span class="votes">(${member.votes || 0})</span></div>` +
                    (member.isRoyal ? '<div class="royal-crown">👑</div>' : '');
                
                (function(m) {
                    cell.addEventListener('click', function() {
                        const tierName = TIERS[m.tier].name;
                        const isTrial = m.trialEnd && new Date(m.trialEnd) > new Date();
                        alert(`👤 ${m.name}\n📧 ${m.email}\n📞 ${m.phone || '-'}\n📍 ${m.location}\n🏷️ ${TIERS[m.tier].label} ${tierName}\n💰 $${TIERS[m.tier].price}/${t.year}${isTrial ? `\n🎁 فترة تجريبية: حتى ${m.trialEnd}` : ''}`);
                    });
                })(member);
            } else {
                cell.className = 'pixel-cell empty';
                cell.textContent = '+';
                cell.addEventListener('click', bookSquare);
            }
            fragment.appendChild(cell);
        }
        gridCanvas.appendChild(fragment);
        if (loadingIndicator) loadingIndicator.classList.remove('active');
        applyZoom();
        updateStats();
    }, 100);
}

// ===== تحديث الإحصائيات =====
function updateStats() {
    let virtualCount = 0, realCount = 0;
    for (let i = 0; i < members.length; i++) {
        if (members[i].isVirtual) virtualCount++;
        else realCount++;
    }
    const totalCount = members.length;
    const rev = calculateRevenue();
    totalRevenue = rev.real;
    virtualRevenue = rev.virtual;
    
    if (totalMembers) totalMembers.textContent = totalCount;
    if (totalMembersDisplay) totalMembersDisplay.textContent = totalCount;
    if (availableSquares) availableSquares.textContent = (1000000 - totalCount).toLocaleString();
    if (totalRevenueEl) totalRevenueEl.textContent = '$' + (totalRevenue + virtualRevenue).toFixed(0);
    
    const vc = document.getElementById('virtualCount');
    if (vc) vc.textContent = virtualCount;
    
    const welcomeCount = document.getElementById('welcomeMemberCount');
    if (welcomeCount) welcomeCount.textContent = totalCount;
    
    updateAdminStats();
    updateGridStats();
}

function updateGridStats() {
    const totalCount = members.length;
    const gmc = document.getElementById('gridMemberCount');
    const gac = document.getElementById('gridAvailableCount');
    if (gmc) gmc.textContent = totalCount;
    if (gac) gac.textContent = (1000000 - totalCount).toLocaleString();
}

// ===== دالة الحجز =====
function bookSquare() {
    const t = LANG[currentLang] || LANG.ar;
    let options = '';
    for (const key in TIERS) {
        options += `${key}: ${TIERS[key].label} ${TIERS[key].name} - $${TIERS[key].price}/${t.year}\n`;
    }
    const choice = prompt(`💳 ${t.choose}:\n${options}\n${currentLang === 'ar' ? 'أدخل نوع المستوى (normal, silver, gold, royal):' : 'Enter tier type (normal, silver, gold, royal):'}`);
    if (!choice || !TIERS[choice]) { alert(`❌ ${currentLang === 'ar' ? 'مستوى غير صحيح' : 'Invalid tier'}`); return; }

    const tierInfo = TIERS[choice];
    const name = prompt(`👤 ${currentLang === 'ar' ? 'أدخل اسمك الكامل:' : 'Enter your full name:'}`);
    if (!name) return;
    const email = prompt(`✉️ ${currentLang === 'ar' ? 'أدخل بريدك الإلكتروني:' : 'Enter your email:'}`);
    if (!email) return;
    const phone = prompt(`📞 ${currentLang === 'ar' ? 'أدخل رقم هاتفك (اختياري):' : 'Enter your phone number (optional):'}`) || '';
    const location = prompt(`📍 ${currentLang === 'ar' ? 'أدخل موقعك:' : 'Enter your location:'}`) || (currentLang === 'ar' ? 'غير محدد' : 'Not specified');
    const website = prompt(`🔗 ${currentLang === 'ar' ? 'رابط موقعك (اختياري):' : 'Website link (optional):'}`) || '';
    const image = prompt(`🖼️ ${currentLang === 'ar' ? 'رابط الصورة (اختياري):' : 'Image URL (optional):'}`) || 'https://picsum.photos/seed/' + Date.now() + '/100/100';

    const trialEnd = new Date();
    trialEnd.setDate(trialEnd.getDate() + 3);
    const trialEndStr = trialEnd.toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US');

    const newMember = {
        id: 'm' + Date.now(),
        name, email, phone, location, tier: choice, website, image,
        message: (currentLang === 'ar' ? 'مرحباً، أنا ' : 'Hello, I am ') + name + (currentLang === 'ar' ? ' من ' : ' from ') + location,
        isRoyal: choice === 'royal',
        isVirtual: false,
        position: members.length,
        rating: 0, votes: 0,
        joinDate: new Date().toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US'),
        trialEnd: trialEndStr,
        isTrial: true
    };
    
    members.push(newMember);
    totalRevenue += tierInfo.price;
    const rev = calculateRevenue();
    totalRevenue = rev.real;
    virtualRevenue = rev.virtual;
    saveData();
    renderGrid();
    renderMembersTable();
    updateStats();
    showNotification(`🎉 ${currentLang === 'ar' ? 'تم الاشتراك بنجاح! فترة تجريبية 3 أيام' : 'Subscription successful! 3 days trial'}`);
}

// ===== الإشعارات =====
function showNotification(message) {
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

// ===== الرعاة =====
function renderSponsors() {
    const track = document.getElementById('marqueeTrack');
    if (!track) return;
    track.innerHTML = '';
    const durationMap = { weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي' };
    for (let i = 0; i < sponsors.length; i++) {
        const s = sponsors[i];
        const item = document.createElement('span');
        item.className = 'sponsor-item';
        item.innerHTML = `🏢 ${s.name} <span class="sponsor-badge">${durationMap[s.duration]}</span> $${s.amount}`;
        track.appendChild(item);
    }
    for (let j = 0; j < sponsors.length; j++) {
        const s2 = sponsors[j];
        const item2 = document.createElement('span');
        item2.className = 'sponsor-item';
        item2.innerHTML = `🏢 ${s2.name} <span class="sponsor-badge">${durationMap[s2.duration]}</span> $${s2.amount}`;
        track.appendChild(item2);
    }
}

// ===== خلفية الملكيين =====
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
function renderMembersTable() {
    if (!membersTableBody) return;
    membersTableBody.innerHTML = '';
    
    const searchInput = document.getElementById('adminSearchInput');
    const filterTypeEl = document.getElementById('adminFilterType');
    const searchText = searchInput ? searchInput.value.toLowerCase() : '';
    const filterTypeVal = filterTypeEl ? filterTypeEl.value : 'all';
    
    const filtered = members.filter(m => {
        const matchSearch = m.name.toLowerCase().includes(searchText) || 
                           m.email.toLowerCase().includes(searchText) || 
                           (m.phone && m.phone.includes(searchText));
        const matchType = filterTypeVal === 'all' || 
                         (filterTypeVal === 'real' && !m.isVirtual) || 
                         (filterTypeVal === 'virtual' && m.isVirtual);
        return matchSearch && matchType;
    });
    
    const t = LANG[currentLang] || LANG.ar;
    
    filtered.forEach(m => {
        const tr = document.createElement('tr');
        const tierInfo = TIERS[m.tier];
        tr.className = m.isVirtual ? 'virtual-member' : 'real-member';
        const typeBadge = m.isVirtual ? 
            `<span class="member-type-badge virtual">🔄 ${t.virtual_members}</span>` : 
            `<span class="member-type-badge real">✅ ${t.real_members}</span>`;
        const index = members.indexOf(m);
        const isTrialActive = m.trialEnd && new Date(m.trialEnd) > new Date();
        const trialStatus = isTrialActive ? '🟢 ' + (currentLang === 'ar' ? 'نشطة' : 'Active') : '🔴 ' + (currentLang === 'ar' ? 'منتهية' : 'Expired');
        
        tr.innerHTML = 
            `<td><strong>${m.name}</strong></td>` +
            `<td>${m.email}</td>` +
            `<td><span style="color:${tierInfo.color};font-weight:700">${tierInfo.label} ${tierInfo.name}</span></td>` +
            `<td>${m.location}</td>` +
            `<td>${typeBadge}</td>` +
            `<td>${trialStatus}${m.trialEnd ? `<br><small>${m.trialEnd}</small>` : ''}</td>` +
            `<td><button class="delete-btn" data-index="${index}">🗑️ ${t.delete}</button></td>`;
        membersTableBody.appendChild(tr);
    });
    
    updateAdminStats();
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            deleteMember(index);
        });
    });
}

function updateAdminStats() {
    let realCount = 0, virtualCount = 0;
    for (let i = 0; i < members.length; i++) {
        if (members[i].isVirtual) virtualCount++;
        else realCount++;
    }
    const totalCount = members.length;
    const rev = calculateRevenue();
    
    const ids = ['adminTotalMembers', 'adminRealMembers', 'adminVirtualMembers', 'adminTotalRevenue'];
    const values = [totalCount, realCount, virtualCount, '$' + (rev.real + rev.virtual).toFixed(0)];
    
    for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i]);
        if (el) el.textContent = values[i];
    }
}

function deleteMember(index) {
    const member = members[index];
    if (!member) return;
    if (!confirm(currentLang === 'ar' ? 'هل أنت متأكد من حذف هذا المشترك؟' : 'Are you sure you want to delete this member?')) return;
    if (member.isVirtual) virtualRevenue -= TIERS[member.tier].price;
    else totalRevenue -= TIERS[member.tier].price;
    members.splice(index, 1);
    saveData();
    renderMembersTable();
    renderGrid();
    updateStats();
}

function renderSponsorList() {
    const list = document.getElementById('sponsorList');
    if (!list) return;
    list.innerHTML = '';
    const durationMap = { weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي' };
    for (let i = 0; i < sponsors.length; i++) {
        const s = sponsors[i];
        const li = document.createElement('li');
        li.innerHTML = `<span>🏢 ${s.name} - $${s.amount} (${durationMap[s.duration]})</span><button onclick="removeSponsor(${i})">🗑️</button>`;
        list.appendChild(li);
    }
}

window.removeSponsor = function(i) {
    if (confirm(currentLang === 'ar' ? 'هل أنت متأكد؟' : 'Are you sure?')) {
        sponsors.splice(i, 1);
        saveData();
        renderSponsorList();
        renderSponsors();
    }
};

// ===== عد التنازلي =====
function createScarcityCounter() {
    let timeLeft = 3600;
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

// ===== تطبيق الزوم =====
function applyZoom() {
    const size = Math.max(30, 60 * currentZoom);
    document.querySelectorAll('.pixel-cell').forEach(cell => {
        cell.style.minHeight = size + 'px';
        cell.style.fontSize = (size * 0.015) + 'rem';
    });
}

// ===== البحث =====
function filterGrid() {
    if (!searchInput || !gridCanvas) return;
    const text = searchInput.value.toLowerCase();
    const tier = filterTier ? filterTier.value : 'all';
    const type = filterType ? filterType.value : 'all';
    
    document.querySelectorAll('.pixel-cell').forEach(cell => {
        const nameEl = cell.querySelector('.cell-name');
        const tierEl = cell.querySelector('.cell-tier');
        const virtualBadge = cell.querySelector('.cell-virtual-badge');
        if (nameEl) {
            const matchSearch = nameEl.textContent.toLowerCase().includes(text);
            const matchTier = tier === 'all' || (tierEl && tierEl.textContent.includes(TIERS[tier]?.label || ''));
            const matchType = type === 'all' || (type === 'real' && !virtualBadge) || (type === 'virtual' && virtualBadge);
            cell.style.display = (matchSearch && matchTier && matchType) ? 'block' : 'none';
        }
    });
}

// ===== تهيئة الموقع =====
document.addEventListener('DOMContentLoaded', function() {
    gridCanvas = document.getElementById('gridCanvas');
    searchInput = document.getElementById('searchInput');
    filterTier = document.getElementById('filterTier');
    filterType = document.getElementById('filterType');
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
            liveClock.textContent = now.toLocaleTimeString('ar-EG');
        }
    }, 1000);

    // عرض المربعات
    renderGrid();

    // عد التنازلي
    createScarcityCounter();

    // زر الحجز
    document.getElementById('bookSquareBtn').addEventListener('click', bookSquare);
    document.getElementById('stickyBookBtn').addEventListener('click', bookSquare);

    // شاشة الترحيب
    const welcomePopup = document.getElementById('welcomePopup');
    const welcomeMemberCount = document.getElementById('welcomeMemberCount');
    if (welcomeMemberCount) welcomeMemberCount.textContent = members.length || 0;
    
    setTimeout(() => {
        if (welcomePopup) welcomePopup.classList.add('hidden');
    }, 5000);

    document.getElementById('welcomeBookBtn')?.addEventListener('click', function() {
        welcomePopup.classList.add('hidden');
        bookSquare();
    });
    document.getElementById('welcomeCloseBtn')?.addEventListener('click', function() {
        welcomePopup.classList.add('hidden');
    });

    // CTA الثابت
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

    // البحث
    if (searchInput) {
        searchInput.addEventListener('input', filterGrid);
    }
    if (filterTier) {
        filterTier.addEventListener('change', filterGrid);
    }
    if (filterType) {
        filterType.addEventListener('change', filterGrid);
    }

    // نظام الإحالات
    document.getElementById('copyReferralLink')?.addEventListener('click', function() {
        const input = document.getElementById('referralLink');
        if (!input) return;
        input.select();
        document.execCommand('copy');
        showNotification('✅ ' + (currentLang === 'ar' ? 'تم نسخ رابط الإحالة!' : 'Referral link copied!'));
    });

    // الزوم
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

    // الثيم
    document.getElementById('themeToggle').addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        this.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        const toggle = document.getElementById('themeToggle');
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

    // زر العودة للأعلى
    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
        window.addEventListener('scroll', function() {
            backBtn.classList.toggle('visible', window.scrollY > 300);
        });
        backBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // لوحة التحكم - زر الدخول المخفي
    document.getElementById('adminSecretBtn').addEventListener('click', function() {
        adminClickCount++;
        if (adminClickCount === 1) {
            adminClickTimer = setTimeout(() => { adminClickCount = 0; }, 500);
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

    // لوحة التحكم - تسجيل الدخول
    document.getElementById('adminLoginBtn').addEventListener('click', function() {
        const email = document.getElementById('adminEmail').value;
        const password = document.getElementById('adminPassword').value;
        const storedEmail = localStorage.getItem('adminEmail') || 'fedaaali';
        const storedPassword = localStorage.getItem('adminPassword') || 'fida1271980';
        if (email === storedEmail && password === storedPassword) {
            document.getElementById('adminContent').classList.remove('hidden');
            document.querySelector('.admin-login').style.display = 'none';
            renderMembersTable();
            renderSponsorList();
            alert('✅ ' + (currentLang === 'ar' ? 'تم الدخول إلى لوحة التحكم' : 'Dashboard access granted'));
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

    // أحداث لوحة التحكم
    document.getElementById('adminSearchInput')?.addEventListener('input', renderMembersTable);

    // إضافة مشترك
    document.getElementById('addMemberBtn').addEventListener('click', function() {
        const t = LANG[currentLang] || LANG.ar;
        const name = prompt(`👤 ${currentLang === 'ar' ? 'اسم المشترك الكامل:' : 'Full member name:'}`);
        if (!name) return;
        const email = prompt(`✉️ ${currentLang === 'ar' ? 'البريد:' : 'Email:'}`);
        if (!email) return;
        const phone = prompt(`📞 ${currentLang === 'ar' ? 'رقم الهاتف (اختياري):' : 'Phone number (optional):'}`) || '';
        const location = prompt(`📍 ${currentLang === 'ar' ? 'الموقع:' : 'Location:'}`) || (currentLang === 'ar' ? 'غير محدد' : 'Not specified');
        const tier = prompt(`🏷️ ${currentLang === 'ar' ? 'المستوى (normal/silver/gold/royal):' : 'Tier (normal/silver/gold/royal):'}`) || 'normal';
        if (!TIERS[tier]) { alert(`❌ ${currentLang === 'ar' ? 'مستوى غير صحيح' : 'Invalid tier'}`); return; }
        const image = prompt(`🖼️ ${currentLang === 'ar' ? 'رابط الصورة:' : 'Image URL:'}`) || 'https://picsum.photos/seed/' + Date.now() + '/100/100';
        
        const trialEnd = new Date();
        trialEnd.setDate(trialEnd.getDate() + 3);
        const trialEndStr = trialEnd.toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US');

        members.push({
            id: 'm' + Date.now(),
            name, email, phone, location, tier, image,
            website: '', message: (currentLang === 'ar' ? 'مرحباً، أنا ' : 'Hello, I am ') + name,
            isRoyal: tier === 'royal', isVirtual: false,
            position: members.length, rating: 0, votes: 0,
            joinDate: new Date().toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US'),
            trialEnd: trialEndStr, isTrial: true
        });
        totalRevenue += TIERS[tier].price;
        saveData();
        renderMembersTable();
        renderGrid();
        updateStats();
        alert(`✅ ${currentLang === 'ar' ? 'تم إضافة المشترك مع فترة تجريبية 3 أيام' : 'Member added with 3 days trial'}`);
    });

    // تحديث الجدول
    document.getElementById('refreshMembersBtn').addEventListener('click', function() {
        renderMembersTable();
        updateStats();
        alert(`✅ ${currentLang === 'ar' ? 'تم تحديث البيانات' : 'Data updated'}`);
    });

    // إضافة راعي
    document.getElementById('addSponsorBtn').addEventListener('click', function() {
        const name = document.getElementById('sponsorName').value.trim();
        const link = document.getElementById('sponsorLink').value.trim();
        const amount = parseFloat(document.getElementById('sponsorAmount').value);
        const duration = document.getElementById('sponsorDuration').value;
        if (!name || !amount || isNaN(amount)) { alert(`❌ ${currentLang === 'ar' ? 'أدخل البيانات' : 'Enter data'}`); return; }
        sponsors.push({ name, link, amount, duration });
        saveData();
        renderSponsorList();
        renderSponsors();
        document.getElementById('sponsorName').value = '';
        document.getElementById('sponsorLink').value = '';
        document.getElementById('sponsorAmount').value = '';
        alert(`✅ ${currentLang === 'ar' ? 'تم إضافة الراعي' : 'Sponsor added'}`);
    });

    // إعدادات المدير
    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        localStorage.setItem('adminEmail', document.getElementById('adminEmailSetting').value);
        alert(`✅ ${currentLang === 'ar' ? 'تم حفظ الإعدادات' : 'Settings saved'}`);
    });

    // تغيير كلمة السر
    document.getElementById('changePasswordBtn').addEventListener('click', function() {
        const pass = document.getElementById('newPassword').value.trim();
        if (pass.length < 4) { alert(`❌ ${currentLang === 'ar' ? '4 أحرف على الأقل' : 'At least 4 characters'}`); return; }
        localStorage.setItem('adminPassword', pass);
        alert(`✅ ${currentLang === 'ar' ? 'تم تغيير كلمة السر' : 'Password changed'}`);
        document.getElementById('newPassword').value = '';
    });

    // الاقتراحات
    document.getElementById('suggestionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('suggesterName').value.trim();
        const email = document.getElementById('suggesterEmail').value.trim();
        const text = document.getElementById('suggestionText').value.trim();
        if (!name || !email || !text) { alert(`❌ ${currentLang === 'ar' ? 'ملء جميع الحقول' : 'Fill all fields'}`); return; }
        suggestions.push({ name, email, text, date: new Date().toLocaleDateString() });
        saveData();
        updateSuggestions();
        this.reset();
        alert(`✅ ${currentLang === 'ar' ? 'تم إرسال الاقتراح' : 'Suggestion sent'}`);
    });

    function updateSuggestions() {
        const list = document.getElementById('suggestionsList');
        if (!list) return;
        const t = LANG[currentLang] || LANG.ar;
        if (suggestions.length === 0) {
            list.innerHTML = `<p class="empty-msg">${t.no_suggestions || 'لا توجد اقتراحات'}</p>`;
            return;
        }
        let html = '';
        for (let i = suggestions.length - 1; i >= 0; i--) {
            const s = suggestions[i];
            html += `<div class="suggestion-item"><strong>${s.name}</strong> (${s.email}) - ${s.date}<p>${s.text}</p></div>`;
        }
        list.innerHTML = html;
    }

    // رعاة الدفع
    document.querySelectorAll('.sponsor-pay-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const plan = this.dataset.plan;
            const amount = this.dataset.amount;
            const planMap = { weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي' };
            const name = prompt(`🏢 ${currentLang === 'ar' ? 'أدخل اسم الشركة:' : 'Enter company name:'}`);
            if (!name) return;
            const link = prompt(`🔗 ${currentLang === 'ar' ? 'أدخل رابط الموقع:' : 'Enter website link:'}`);
            if (!link) return;
            const method = prompt(`💳 ${currentLang === 'ar' ? 'طريقة الدفع:\n1. PayPal\n2. Stripe\n3. IBAN\n\nأدخل الرقم (1-3):' : 'Payment method:\n1. PayPal\n2. Stripe\n3. IBAN\n\nEnter number (1-3):'}`);
            if (!method || !['1','2','3'].includes(method)) { alert(`❌ ${currentLang === 'ar' ? 'طريقة غير صحيحة' : 'Invalid method'}`); return; }
            const methods = ['PayPal','Stripe','IBAN'];
            alert(`✅ ${currentLang === 'ar' ? 'جارٍ التحويل إلى ' : 'Redirecting to '}${methods[parseInt(method)-1]}\n${currentLang === 'ar' ? 'المبلغ: $' : 'Amount: $'}${amount}`);
            sponsors.push({ name, link, amount: parseInt(amount), duration: plan });
            saveData();
            renderSponsorList();
            renderSponsors();
            alert(`🎉 ${currentLang === 'ar' ? 'تمت الرعاية بنجاح!' : 'Sponsorship successful!'}`);
        });
    });

    // أزرار اللغة
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    // تهيئة العناصر
    renderSponsors();
    renderMembersTable();
    renderSponsorList();
    updateSuggestions();
    updateStats();
    updateRoyalBackground();

    // تحميل الإعدادات
    document.getElementById('adminEmailSetting').value = localStorage.getItem('adminEmail') || '';

    // تطبيق اللغة
    setLanguage(currentLang);

    // إخفاء شاشة التحميل مع شريط التقدم
    let progress = 0;
    const progressBar = document.getElementById('progressBar');
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        if (progressBar) progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                const loading = document.getElementById('loadingScreen');
                if (loading) loading.classList.add('hidden');
            }, 300);
        }
    }, 100);

    console.log('🚀 مليون مربع - تم التحميل بنجاح');
    console.log('👥 المشتركين: ' + members.length);
    console.log('💰 الإيرادات: $' + totalRevenue);
    console.log('🌐 اللغة: ' + currentLang);
});
