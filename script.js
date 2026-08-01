// ===== بيانات المستويات =====
const TIERS = {
    normal: { name: 'عادي', price: 1, color: '#4A90D9', label: '💎' },
    silver: { name: 'فضي', price: 5, color: '#C0C0C0', label: '⭐' },
    gold: { name: 'ذهبي', price: 10, color: '#FFD700', label: '👑' },
    royal: { name: 'ملكي', price: 100, color: '#9B59B6', label: '💠' }
};

// ===== أسماء متنوعة =====
var NAMES = [
    'أحمد محمد السيد', 'محمد عبدالله العمري', 'سارة خالد الخالدي', 'نورة سعيد الحربي',
    'علي حسن الشمري', 'فاطمة محمد الزهراء', 'حسن علي الغامدي', 'زينب عبدالله العلي',
    'خالد إبراهيم المالكي', 'ليلى عبدالرحمن القحطاني', 'عمر سعود العتيبي', 'منى صالح الشهراني',
    'سعيد مبارك الدوسري', 'هدى فيصل الفهد', 'ياسر ناصر المطيري', 'سمية خالد العيسى',
    'ماجد عبدالعزيز البلوي', 'رانيا محمد العنزي', 'إبراهيم علي السبيعي', 'سعاد عبدالله الزهراني',
    'عبدالله خالد الناصر', 'نجوى سليمان الخريف', 'ناصر عبدالرحمن السديري', 'غادة محمد الغامدي'
];

var LOCATIONS = [
    'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام',
    'الخبر', 'تبوك', 'حائل', 'القصيم', 'نجران',
    'دبي', 'أبوظبي', 'القاهرة', 'الإسكندرية', 'بيروت', 'عمان'
];

// ===== الترجمات =====
var TRANSLATIONS = {
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
        description: 'منصة ثورية تتيح للأفراد والشركات امتلاك مساحة رقمية تفاعلية.',
        steps_title: '📋 خطوات الاشتراك',
        step1: 'اختر موقعك - انقر على أي مربع فارغ',
        step2: 'حدد المستوى - عادي، فضي، ذهبي، أو ملكي',
        step3: 'املأ بياناتك - الاسم، البريد، الموقع، صورة',
        step4: 'ادفع بأمان - عبر PayPal أو Stripe أو IBAN',
        step5: 'انطلق! - سيظهر مربعك فوراً',
        sponsor_payment_title: '🌟 نظام الدفع للرعاة',
        sponsor_payment_desc: 'اختر الباقة المناسبة لشركتك وادفع مباشرة.',
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
        book_square: 'احجز مربعك الآن',
        book_hint: 'انقر هنا لحجز مربع جديد في أي مكان بالجدار'
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
        description: 'A revolutionary platform for interactive digital space.',
        steps_title: '📋 Subscription Steps',
        step1: 'Choose your spot - Click on any empty square',
        step2: 'Select tier - Normal, Silver, Gold, or Royal',
        step3: 'Fill your data - Name, email, website, image',
        step4: 'Pay securely - Via PayPal, Stripe, or IBAN',
        step5: 'Go! - Your square will appear immediately',
        sponsor_payment_title: '🌟 Sponsor Payment System',
        sponsor_payment_desc: 'Choose the right package for your company.',
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
        book_square: 'Book Your Square Now',
        book_hint: 'Click here to book a new square anywhere on the wall'
    }
};

// ===== المتغيرات العامة =====
var members = [];
var sponsors = [
    { name: 'شركة الاتصالات', link: '#', amount: 1000, duration: 'monthly' },
    { name: 'بنك الرياض', link: '#', amount: 500, duration: 'weekly' },
    { name: 'أكاديمية البرمجة', link: '#', amount: 2000, duration: 'monthly' }
];
var suggestions = [];
var socialLinks = { facebook: '', twitter: '', instagram: '', youtube: '', linkedin: '', tiktok: '' };
var totalRevenue = 0;
var currentZoom = 1;
var currentLang = 'ar';
var totalCellsToShow = 2000;

// ===== عناصر DOM =====
var gridCanvas, searchInput, filterTier, sortBy, liveClock;
var totalMembersDisplay, totalMembers, totalRevenueEl, availableSquares;
var membersTableBody, loginError, siteBackground, loadingIndicator;

// ===== إنشاء مشتركين افتراضيين (100 فقط) =====
function generateVirtualMembers(count) {
    var result = [];
    var tierKeys = ['normal', 'silver', 'gold', 'royal'];
    
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
            position: i,
            joinDate: new Date().toLocaleDateString('ar-EG'),
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
    try {
        localStorage.setItem('millionSquaresData', JSON.stringify(dataToSave));
    } catch(e) {}
}

function loadData() {
    try {
        var saved = localStorage.getItem('millionSquaresData');
        if (saved) {
            var data = JSON.parse(saved);
            members = data.members || [];
            sponsors = data.sponsors || sponsors;
            suggestions = data.suggestions || suggestions;
            totalRevenue = data.totalRevenue || 0;
            socialLinks = data.socialLinks || socialLinks;
            if (data.currentLang) currentLang = data.currentLang;
            return true;
        }
    } catch(e) {}
    return false;
}

// ===== تهيئة البيانات =====
if (!loadData() || members.length === 0) {
    members = generateVirtualMembers(100);
    totalRevenue = 0;
    for (var i = 0; i < members.length; i++) {
        totalRevenue += TIERS[members[i].tier].price;
    }
    saveData();
}

// ===== عرض المربعات =====
function renderGrid() {
    if (!gridCanvas) return;
    
    if (loadingIndicator) loadingIndicator.classList.add('active');
    
    setTimeout(function() {
        gridCanvas.innerHTML = '';
        var fragment = document.createDocumentFragment();
        var totalCells = Math.min(totalCellsToShow, 5000);
        var memberCount = members.length;
        
        for (var i = 0; i < totalCells; i++) {
            var cell = document.createElement('div');
            cell.className = 'pixel-cell';
            
            var memberIndex = i % memberCount;
            var member = members[memberIndex];
            
            if (member) {
                var tierInfo = TIERS[member.tier];
                var stars = '⭐'.repeat(member.rating || 3) + '☆'.repeat(5 - (member.rating || 3));
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
                            tierInfo.label + ' ' + tierInfo.name + ' ($' + tierInfo.price + '/سنة)' +
                        '</span><br>' +
                        '<small>⭐ ' + stars + ' (' + (member.votes || 0) + ')</small>' +
                        (member.isVirtual ? '<br><small>🔄 مشترك افتراضي</small>' : '') +
                    '</div>' +
                    '<div class="cell-rating"><span class="stars">' + stars + '</span><span class="votes">(' + (member.votes || 0) + ')</span></div>' +
                    (member.isRoyal ? '<div class="royal-crown">👑</div>' : '');
                
                (function(m) {
                    cell.addEventListener('click', function() {
                        showMemberInfo(m);
                    });
                })(member);
            } else {
                cell.className = 'pixel-cell empty';
                cell.textContent = '+';
                cell.addEventListener('click', showPaymentDialog);
            }
            
            fragment.appendChild(cell);
        }
        
        gridCanvas.appendChild(fragment);
        
        if (loadingIndicator) loadingIndicator.classList.remove('active');
        applyZoom();
        updateStats();
        
    }, 50);
}

// ===== دوال العرض =====
function updateStats() {
    var virtualCount = 0;
    for (var i = 0; i < members.length; i++) {
        if (members[i].isVirtual) virtualCount++;
    }
    var totalCount = members.length;
    
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
    var stars = '⭐'.repeat(member.rating || 3) + '☆'.repeat(5 - (member.rating || 3));
    var type = member.isVirtual ? '(افتراضي)' : '(حقيقي)';
    alert('👤 ' + member.name + ' ' + type + '\n📧 ' + member.email + '\n📍 ' + member.location + '\n' + 
          (member.website ? '🔗 ' + member.website + '\n' : '') + '💬 ' + member.message + '\n⭐ التقييم: ' + stars + 
          ' (' + (member.votes || 0) + ' صوت)\n\n🏷️ المستوى: ' + tierInfo.label + ' ' + tierInfo.name + 
          '\n💰 السعر: $' + tierInfo.price + '/سنة');
}

// ===== دالة الحجز =====
function bookSquare() {
    var lang = currentLang;
    var options = '';
    for (var key in TIERS) {
        options += key + ': ' + TIERS[key].label + ' ' + TIERS[key].name + ' - $' + TIERS[key].price + '/سنة\n';
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
        position: members.length,
        rating: 0,
        votes: 0,
        joinDate: new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US')
    };
    
    members.push(newMember);
    totalRevenue += tierInfo.price;
    saveData();
    renderGrid();
    renderMembersTable();
    updateStats();
    updateRoyalBackground();
    
    alert((lang === 'ar' ? '🎉 تم الاشتراك بنجاح!\nالمستوى: ' : '🎉 Subscription successful!\nTier: ') + 
          tierInfo.label + ' ' + tierInfo.name + 
          (lang === 'ar' ? '\nالمبلغ: $' : '\nAmount: $') + tierInfo.price);
}

// ===== دالة الدفع من المربع الفارغ =====
function showPaymentDialog() {
    bookSquare();
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
    
    for (var i = 0; i < members.length; i++) {
        var m = members[i];
        var tr = document.createElement('tr');
        var tierInfo = TIERS[m.tier];
        var type = m.isVirtual ? '🔄 افتراضي' : '✅ حقيقي';
        tr.innerHTML = '<td>' + m.name + '</td><td>' + m.email + '</td><td><span style="color:' + tierInfo.color + '">' + 
                       tierInfo.label + ' ' + tierInfo.name + '</span></td><td>' + m.location + '</td><td>' + type + 
                       '</td><td><button class="delete-btn" data-index="' + i + '">🗑️ حذف</button></td>';
        membersTableBody.appendChild(tr);
    }
    
    var deleteBtns = document.querySelectorAll('.delete-btn');
    for (var j = 0; j < deleteBtns.length; j++) {
        deleteBtns[j].addEventListener('click', function() {
            var index = parseInt(this.dataset.index);
            var member = members[index];
            if (member.isVirtual) {
                if (!confirm('هذا مشترك افتراضي. هل أنت متأكد من حذفه؟')) return;
            } else {
                if (!confirm('هل أنت متأكد من حذف هذا المشترك؟')) return;
            }
            totalRevenue -= TIERS[members[index].tier].price;
            members.splice(index, 1);
            saveData();
            renderMembersTable();
            renderGrid();
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
        tiktok: document.getElementById('socialTiktok')
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
        tiktok: 'fab fa-tiktok'
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
        container.innerHTML = '<span style="color: var(--text-muted); font-size: 0.8rem;">لا توجد روابط</span>';
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
    
    // تحديث نص زر الحجز
    var bookBtn = document.getElementById('bookSquareBtn');
    if (bookBtn) {
        var span = bookBtn.querySelector('span');
        if (span && TRANSLATIONS[lang]) {
            span.textContent = TRANSLATIONS[lang].book_square || 'احجز مربعك الآن';
        }
    }
    
    var bookHint = document.querySelector('.book-hint');
    if (bookHint && TRANSLATIONS[lang]) {
        bookHint.textContent = TRANSLATIONS[lang].book_hint || 'انقر هنا لحجز مربع جديد في أي مكان بالجدار';
    }
    
    saveData();
}

// ===== تطبيق الزوم =====
function applyZoom() {
    var size = Math.max(30, 60 * currentZoom);
    var cells = document.querySelectorAll('.pixel-cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.minHeight = size + 'px';
        cells[i].style.fontSize = (size * 0.015) + 'rem';
    }
}

// ===== البحث =====
function filterGrid() {
    if (!searchInput || !gridCanvas) return;
    var text = searchInput.value.toLowerCase();
    var cells = gridCanvas.querySelectorAll('.pixel-cell');
    for (var i = 0; i < cells.length; i++) {
        var nameEl = cells[i].querySelector('.cell-name');
        if (nameEl) {
            var match = nameEl.textContent.toLowerCase().includes(text);
            cells[i].style.display = match ? 'block' : 'none';
        }
    }
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
            liveClock.textContent = now.toLocaleTimeString('ar-EG');
        }
    }, 1000);

    // عرض المربعات
    renderGrid();

    // زر حجز مربع مستقل
    document.getElementById('bookSquareBtn').addEventListener('click', bookSquare);

    // أحداث البحث
    if (searchInput) {
        searchInput.addEventListener('input', filterGrid);
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
            alert('✅ تم الدخول إلى لوحة التحكم');
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
        var name = prompt('👤 اسم المشترك الكامل:');
        if (!name) return;
        var email = prompt('✉️ البريد:');
        if (!email) return;
        var location = prompt('📍 الموقع:') || 'غير محدد';
        var tier = prompt('🏷️ المستوى (normal/silver/gold/royal):') || 'normal';
        if (!TIERS[tier]) {
            alert('❌ مستوى غير صحيح');
            return;
        }
        var image = prompt('🖼️ رابط الصورة:') || 'https://picsum.photos/seed/' + Date.now() + '/100/100';

        members.push({
            id: 'm' + Date.now(),
            name: name,
            email: email,
            location: location,
            tier: tier,
            image: image,
            website: '',
            message: 'مرحباً، أنا ' + name,
            isRoyal: tier === 'royal',
            isVirtual: false,
            position: members.length,
            rating: 0,
            votes: 0,
            joinDate: new Date().toLocaleDateString('ar-EG')
        });

        totalRevenue += TIERS[tier].price;
        saveData();
        renderMembersTable();
        renderGrid();
        updateStats();
        updateRoyalBackground();
        alert('✅ تم إضافة المشترك');
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
        alert('✅ تم تحديث البيانات');
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
        saveData();
        renderFooterSocialLinks();
        alert('✅ تم حفظ روابط التواصل الاجتماعي');
    });

    // إعدادات الدفع
    document.getElementById('savePaymentSettings').addEventListener('click', function() {
        localStorage.setItem('paypal', document.getElementById('paypalSetting').value);
        localStorage.setItem('stripe', document.getElementById('stripeSetting').value);
        localStorage.setItem('iban', document.getElementById('ibanSetting').value);
        alert('✅ تم حفظ إعدادات الدفع');
    });

    // إعدادات المدير
    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        localStorage.setItem('adminEmail', document.getElementById('adminEmailSetting').value);
        localStorage.setItem('adminName', document.getElementById('adminNameSetting').value);
        alert('✅ تم حفظ إعدادات المدير');
    });

    // تغيير كلمة السر
    document.getElementById('changePasswordBtn').addEventListener('click', function() {
        var pass = document.getElementById('newPassword').value.trim();
        if (pass.length < 4) {
            alert('❌ 4 أحرف على الأقل');
            return;
        }
        localStorage.setItem('adminPassword', pass);
        alert('✅ تم تغيير كلمة السر');
        document.getElementById('newPassword').value = '';
    });

    // الاقتراحات
    document.getElementById('suggestionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('suggesterName').value.trim();
        var email = document.getElementById('suggesterEmail').value.trim();
        var text = document.getElementById('suggestionText').value.trim();
        if (!name || !email || !text) {
            alert('❌ ملء جميع الحقول');
            return;
        }
        suggestions.push({ name: name, email: email, text: text, date: new Date().toLocaleDateString() });
        saveData();
        updateSuggestions();
        this.reset();
        alert('✅ تم إرسال الاقتراح');
    });

    function updateSuggestions() {
        var list = document.getElementById('suggestionsList');
        if (!list) return;
        if (suggestions.length === 0) {
            list.innerHTML = '<p class="empty-msg">لا توجد اقتراحات حالياً</p>';
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
            
            var name = prompt('🏢 أدخل اسم الشركة:');
            if (!name) return;
            var link = prompt('🔗 أدخل رابط الموقع:');
            if (!link) return;
            
            var method = prompt('💳 طريقة الدفع:\n1. PayPal\n2. Stripe\n3. IBAN\n\nأدخل الرقم (1-3):');
            if (!method || !['1','2','3'].includes(method)) {
                alert('❌ طريقة غير صحيحة');
                return;
            }
            
            var methods = ['PayPal','Stripe','IBAN'];
            alert('✅ جارٍ التحويل إلى ' + methods[parseInt(method)-1] + '\nالمبلغ: $' + amount);
            
            sponsors.push({ name: name, link: link, amount: parseInt(amount), duration: plan });
            saveData();
            renderSponsorList();
            renderSponsors();
            alert('🎉 تمت الرعاية بنجاح!\nالشركة: ' + name + '\nالمبلغ: $' + amount + '\nالمدة: ' + planMap[plan]);
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

    // تطبيق اللغة المحفوظة
    setLanguage(currentLang);

    // إخفاء شاشة التحميل
    setTimeout(function() {
        var loading = document.getElementById('loadingScreen');
        if (loading) loading.classList.add('hidden');
    }, 800);

    console.log('🚀 مليون مربع - تم التحميل بنجاح');
    console.log('👥 المشتركين: ' + members.length);
    console.log('💰 الإيرادات: $' + totalRevenue);
    console.log('📦 المربعات المعروضة: ' + totalCellsToShow);
    console.log('🔐 لوحة التحكم: انقر مرتين على زر 🔐');
});
