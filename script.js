// ===== بيانات المستويات =====
var TIERS = {
    normal: { name: 'عادي', price: 1, color: '#4A90D9', label: '💎' },
    silver: { name: 'فضي', price: 5, color: '#C0C0C0', label: '⭐' },
    gold: { name: 'ذهبي', price: 10, color: '#FFD700', label: '👑' },
    royal: { name: 'ملكي', price: 100, color: '#9B59B6', label: '💠' }
};

// ===== بيانات افتراضية =====
var NAMES = [
    'أحمد محمد السيد', 'محمد عبدالله العمري', 'سارة خالد الخالدي', 'نورة سعيد الحربي',
    'علي حسن الشمري', 'فاطمة محمد الزهراء', 'حسن علي الغامدي', 'زينب عبدالله العلي',
    'خالد إبراهيم المالكي', 'ليلى عبدالرحمن القحطاني', 'عمر سعود العتيبي', 'منى صالح الشهراني'
];

var LOCATIONS = [
    'الرياض', 'جدة', 'مكة', 'المدينة', 'الدمام',
    'الخبر', 'تبوك', 'حائل', 'القصيم', 'نجران',
    'دبي', 'أبوظبي', 'القاهرة', 'الإسكندرية', 'بيروت'
];

// ===== المتغيرات العامة =====
var members = [];
var sponsors = [];
var suggestions = [];
var totalRevenue = 0;
var virtualRevenue = 0;
var currentZoom = 1;
var currentLang = 'ar';
var adminClickCount = 0;
var adminClickTimer = null;

// ===== عناصر DOM =====
var gridCanvas, searchInput, filterTier;
var totalMembersDisplay, totalMembers, totalRevenueEl, availableSquares;
var membersTableBody, loginError, siteBackground, loadingIndicator;

// ===== حساب الإيرادات =====
function calculateRevenue() {
    var real = 0, virtual = 0;
    for (var i = 0; i < members.length; i++) {
        var price = TIERS[members[i].tier].price;
        if (members[i].isVirtual) virtual += price;
        else real += price;
    }
    return { real: real, virtual: virtual, total: real + virtual };
}

// ===== إنشاء مشتركين افتراضيين =====
function generateVirtualMembers(count) {
    var result = [];
    var tierKeys = ['normal', 'silver', 'gold', 'royal'];
    var phones = ['0501234567', '0559876543', '0567890123', '0543210987'];
    for (var i = 0; i < count; i++) {
        var tier = tierKeys[i % tierKeys.length];
        var nameIndex = i % NAMES.length;
        var locIndex = i % LOCATIONS.length;
        var trialEnd = new Date();
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
    var data = { members: members, sponsors: sponsors, suggestions: suggestions, totalRevenue: totalRevenue, virtualRevenue: virtualRevenue };
    try { localStorage.setItem('millionSquaresData', JSON.stringify(data)); } catch(e) {}
}

function loadData() {
    try {
        var saved = localStorage.getItem('millionSquaresData');
        if (saved) {
            var data = JSON.parse(saved);
            members = data.members || [];
            sponsors = data.sponsors || [];
            suggestions = data.suggestions || [];
            totalRevenue = data.totalRevenue || 0;
            virtualRevenue = data.virtualRevenue || 0;
            return true;
        }
    } catch(e) {}
    return false;
}

// ===== تهيئة البيانات =====
if (!loadData() || members.length === 0) {
    members = generateVirtualMembers(100);
    var rev = calculateRevenue();
    totalRevenue = rev.real;
    virtualRevenue = rev.virtual;
    saveData();
}

// ===== عرض المربعات =====
function renderGrid() {
    if (!gridCanvas) return;
    if (loadingIndicator) loadingIndicator.classList.add('active');
    
    setTimeout(function() {
        gridCanvas.innerHTML = '';
        var fragment = document.createDocumentFragment();
        var totalCells = 1500;
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
                var isTrialActive = member.trialEnd && new Date(member.trialEnd) > new Date();
                
                cell.innerHTML = 
                    (member.image ? '<img src="' + member.image + '" class="cell-image" loading="lazy">' : '') +
                    '<div class="cell-name">' + member.name + '</div>' +
                    '<div class="cell-tier">' + tierInfo.label + '</div>' +
                    (member.isVirtual ? '<div class="cell-virtual-badge">افتراضي</div>' : '') +
                    (isTrialActive ? '<div class="trial-badge">🎁 تجربة</div>' : '') +
                    '<div class="cell-tooltip"><strong>' + member.name + '</strong><br>📍 ' + member.location + '<br>✉️ ' + member.email + '<br>📞 ' + (member.phone || '-') + '<br><span style="color:' + tierInfo.color + ';font-weight:700">' + tierInfo.label + ' ' + tierInfo.name + ' ($' + tierInfo.price + '/سنة)</span><br><small>⭐ ' + stars + ' (' + (member.votes || 0) + ')</small></div>' +
                    '<div class="cell-rating"><span class="stars">' + stars + '</span><span class="votes">(' + (member.votes || 0) + ')</span></div>' +
                    (member.isRoyal ? '<div class="royal-crown">👑</div>' : '');
                
                (function(m) {
                    cell.addEventListener('click', function() {
                        var tierName = TIERS[m.tier].name;
                        var isTrial = m.trialEnd && new Date(m.trialEnd) > new Date();
                        alert('👤 ' + m.name + '\n📧 ' + m.email + '\n📞 ' + (m.phone || '-') + '\n📍 ' + m.location + '\n🏷️ ' + TIERS[m.tier].label + ' ' + tierName + '\n💰 $' + TIERS[m.tier].price + '/سنة' + (isTrial ? '\n🎁 فترة تجريبية: حتى ' + m.trialEnd : ''));
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
    var virtualCount = 0, realCount = 0;
    for (var i = 0; i < members.length; i++) {
        if (members[i].isVirtual) virtualCount++;
        else realCount++;
    }
    var totalCount = members.length;
    var rev = calculateRevenue();
    totalRevenue = rev.real;
    virtualRevenue = rev.virtual;
    
    if (totalMembers) totalMembers.textContent = totalCount;
    if (totalMembersDisplay) totalMembersDisplay.textContent = totalCount;
    if (availableSquares) availableSquares.textContent = (1000000 - totalCount).toLocaleString();
    if (totalRevenueEl) totalRevenueEl.textContent = '$' + (totalRevenue + virtualRevenue).toFixed(0);
    
    updateAdminStats();
    updateGridStats();
}

function updateGridStats() {
    var totalCount = members.length;
    var gmc = document.getElementById('gridMemberCount');
    var gac = document.getElementById('gridAvailableCount');
    if (gmc) gmc.textContent = totalCount;
    if (gac) gac.textContent = (1000000 - totalCount).toLocaleString();
}

// ===== دالة الحجز =====
function bookSquare() {
    var options = '';
    for (var key in TIERS) {
        options += key + ': ' + TIERS[key].label + ' ' + TIERS[key].name + ' - $' + TIERS[key].price + '/سنة\n';
    }
    var choice = prompt('💳 اختر مستوى الاشتراك:\n' + options + '\nأدخل نوع المستوى (normal, silver, gold, royal):');
    if (!choice || !TIERS[choice]) { alert('❌ مستوى غير صحيح'); return; }

    var tierInfo = TIERS[choice];
    var name = prompt('👤 أدخل اسمك الكامل:');
    if (!name) return;
    var email = prompt('✉️ أدخل بريدك الإلكتروني:');
    if (!email) return;
    var phone = prompt('📞 أدخل رقم هاتفك (اختياري):') || '';
    var location = prompt('📍 أدخل موقعك:') || 'غير محدد';
    var website = prompt('🔗 رابط موقعك (اختياري):') || '';
    var image = prompt('🖼️ رابط الصورة (اختياري):') || 'https://picsum.photos/seed/' + Date.now() + '/100/100';

    var trialEnd = new Date();
    trialEnd.setDate(trialEnd.getDate() + 3);
    var trialEndStr = trialEnd.toLocaleDateString('ar-EG');

    var newMember = {
        id: 'm' + Date.now(),
        name: name,
        email: email,
        phone: phone,
        location: location,
        tier: choice,
        website: website,
        image: image,
        message: 'مرحباً، أنا ' + name + ' من ' + location,
        isRoyal: choice === 'royal',
        isVirtual: false,
        position: members.length,
        rating: 0,
        votes: 0,
        joinDate: new Date().toLocaleDateString('ar-EG'),
        trialEnd: trialEndStr,
        isTrial: true
    };
    
    members.push(newMember);
    totalRevenue += tierInfo.price;
    var rev = calculateRevenue();
    totalRevenue = rev.real;
    virtualRevenue = rev.virtual;
    saveData();
    renderGrid();
    renderMembersTable();
    updateStats();
    alert('🎉 تم الاشتراك بنجاح! فترة تجريبية 3 أيام');
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
function renderMembersTable() {
    if (!membersTableBody) return;
    membersTableBody.innerHTML = '';
    
    var searchInput = document.getElementById('adminSearchInput');
    var searchText = searchInput ? searchInput.value.toLowerCase() : '';
    
    var filtered = members.filter(function(m) {
        return m.name.toLowerCase().includes(searchText) || 
               m.email.toLowerCase().includes(searchText) || 
               (m.phone && m.phone.includes(searchText));
    });
    
    filtered.forEach(function(m) {
        var tr = document.createElement('tr');
        var tierInfo = TIERS[m.tier];
        tr.className = m.isVirtual ? 'virtual-member' : 'real-member';
        var typeBadge = m.isVirtual ? 
            '<span class="member-type-badge virtual">🔄 افتراضي</span>' : 
            '<span class="member-type-badge real">✅ حقيقي</span>';
        var index = members.indexOf(m);
        var isTrialActive = m.trialEnd && new Date(m.trialEnd) > new Date();
        var trialStatus = isTrialActive ? '🟢 نشطة' : '🔴 منتهية';
        
        tr.innerHTML = 
            '<td><strong>' + m.name + '</strong></td>' +
            '<td>' + m.email + '</td>' +
            '<td><span style="color:' + tierInfo.color + ';font-weight:700">' + tierInfo.label + ' ' + tierInfo.name + '</span></td>' +
            '<td>' + m.location + '</td>' +
            '<td>' + typeBadge + '</td>' +
            '<td>' + trialStatus + (m.trialEnd ? '<br><small>' + m.trialEnd + '</small>' : '') + '</td>' +
            '<td><button class="delete-btn" data-index="' + index + '">🗑️ حذف</button></td>';
        membersTableBody.appendChild(tr);
    });
    
    updateAdminStats();
    
    document.querySelectorAll('.delete-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var index = parseInt(this.dataset.index);
            deleteMember(index);
        });
    });
}

function updateAdminStats() {
    var realCount = 0, virtualCount = 0;
    for (var i = 0; i < members.length; i++) {
        if (members[i].isVirtual) virtualCount++;
        else realCount++;
    }
    var totalCount = members.length;
    var rev = calculateRevenue();
    
    var ids = ['adminTotalMembers', 'adminRealMembers', 'adminVirtualMembers', 'adminTotalRevenue'];
    var values = [totalCount, realCount, virtualCount, '$' + (rev.real + rev.virtual).toFixed(0)];
    
    for (var i = 0; i < ids.length; i++) {
        var el = document.getElementById(ids[i]);
        if (el) el.textContent = values[i];
    }
}

function deleteMember(index) {
    var member = members[index];
    if (!member) return;
    if (!confirm('هل أنت متأكد من حذف هذا المشترك؟')) return;
    if (member.isVirtual) virtualRevenue -= TIERS[member.tier].price;
    else totalRevenue -= TIERS[member.tier].price;
    members.splice(index, 1);
    saveData();
    renderMembersTable();
    renderGrid();
    updateStats();
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

// ===== تطبيق الزوم =====
function applyZoom() {
    var size = Math.max(30, 60 * currentZoom);
    document.querySelectorAll('.pixel-cell').forEach(function(cell) {
        cell.style.minHeight = size + 'px';
        cell.style.fontSize = (size * 0.015) + 'rem';
    });
}

// ===== البحث =====
function filterGrid() {
    if (!searchInput || !gridCanvas) return;
    var text = searchInput.value.toLowerCase();
    document.querySelectorAll('.pixel-cell .cell-name').forEach(function(el) {
        var cell = el.closest('.pixel-cell');
        if (cell) {
            cell.style.display = el.textContent.toLowerCase().includes(text) ? 'block' : 'none';
        }
    });
}

// ===== الترجمة =====
function translatePage(lang) {
    var translations = {
        ar: {
            banner: '🚀 انضم الآن واحجز مربعك المميز',
            available: 'المربعات المتاحة',
            members: 'مشترك',
            revenue: 'إيرادات',
            site_title: 'مليون مربع',
            subtitle: 'منصة التواصل البصرية الأولى',
            sponsors_title: '🌟 الرعاة الداعمون',
            become_sponsor: 'كن راعياً',
            search: '🔎 بحث...',
            all_tiers: 'جميع المستويات',
            normal: '💎 عادي',
            silver: '⭐ فضي',
            gold: '👑 ذهبي',
            royal: '💠 ملكي',
            year: 'سنة',
            loading: '⏳ جاري تحميل مليون مربع...',
            loading_grid: '⏳ جاري تحميل المربعات...',
            total_squares: 'إجمالي المربعات',
            virtual_members: 'افتراضي',
            online: 'متصلون',
            today: 'جديد اليوم',
            book_square: 'احجز مربعك الآن',
            book_hint: 'انقر هنا لحجز مربع جديد',
            what_is: '🎯 ما هو مليون مربع؟',
            description: 'منصة ثورية تتيح للأفراد والشركات امتلاك مساحة رقمية تفاعلية.',
            steps_title: '📋 خطوات الاشتراك',
            step1: 'اختر موقعك - انقر على مربع فارغ',
            step2: 'حدد المستوى - عادي، فضي، ذهبي، أو ملكي',
            step3: 'املأ بياناتك - الاسم، البريد، الموقع، صورة',
            step4: 'فترة تجريبية - 3 أيام مجانية',
            step5: 'انطلق! - سيظهر مربعك فوراً',
            sponsor_payment_title: '🌟 نظام الدفع للرعاة',
            sponsor_payment_desc: 'اختر الباقة المناسبة لشركتك',
            weekly: 'أسبوعي',
            monthly: 'شهري',
            yearly: 'سنوي',
            choose: 'اختر',
            popular: 'الأكثر طلباً',
            sp_weekly_1: '✅ عرض اسم الشركة',
            sp_weekly_2: '✅ مدة: 7 أيام',
            sp_monthly_1: '✅ عرض اسم الشركة',
            sp_monthly_2: '✅ مدة: 30 يوماً',
            sp_monthly_3: '✅ شعار مميز',
            admin_hint: 'انقر مرتين للدخول إلى لوحة المدير',
            admin_login: 'الدخول إلى لوحة التحكم',
            login: 'دخول',
            login_error: 'اسم المستخدم أو كلمة السر غير صحيحة',
            username: 'اسم المستخدم',
            password: 'كلمة السر',
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
            real_members: 'حقيقي',
            virtual_members_list: 'افتراضي',
            real_revenue: 'أرباح حقيقية',
            virtual_revenue: 'أرباح افتراضية',
            total_revenue: 'إجمالي الأرباح',
            join_date: 'تاريخ الانضمام',
            edit: 'تعديل',
            delete: 'حذف',
            payment_settings: 'إعدادات الدفع',
            save: 'حفظ الإعدادات',
            sponsor_management: 'إدارة الرعاة',
            add_sponsor: 'إضافة راعي',
            sponsor_name: 'اسم الراعي',
            sponsor_link: 'رابط الموقع',
            sponsor_amount: 'المبلغ',
            social_media: 'إدارة وسائل التواصل',
            suggestions_title: 'اقتراحات المشتركين',
            no_suggestions: 'لا توجد اقتراحات',
            settings_title: 'إعدادات الموقع',
            admin_email: 'بريد المدير:',
            admin_name: 'اسم المدير:',
            change_password: 'تغيير كلمة السر',
            change: 'تغيير',
            suggest_idea: '💡 شاركنا اقتراحك',
            send: 'إرسال الاقتراح',
            your_name: 'اسمك',
            your_email: 'بريدك الإلكتروني',
            your_suggestion: 'فكرتك لتطوير الموقع',
            contact_us: '📧 تواصل معنا',
            about_us: '📍 عن الموقع',
            about_text: 'منصة مليون مربع',
            follow_us: '📱 تابعنا',
            rights: 'جميع الحقوق محفوظة',
            badge_normal: 'مبتدئ',
            badge_silver: 'شائع',
            badge_gold: 'مميز',
            badge_royal: 'VIP',
            lang_ar: '🇸🇦 عربي',
            lang_en: '🇬🇧 English',
            lang_fr: '🇫🇷 Français',
            admin_search: '🔍 بحث...',
            admin_filter_type: 'فلترة حسب النوع',
            all_types: 'جميع الأنواع',
            sort_type: 'ترتيب حسب النوع',
            phone: 'الهاتف',
            trial: 'فترة تجريبية',
            trial_banner: '🎁 3 أيام تجريبية مجانية'
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
            search: '🔎 Search...',
            all_tiers: 'All Tiers',
            normal: '💎 Normal',
            silver: '⭐ Silver',
            gold: '👑 Gold',
            royal: '💠 Royal',
            year: 'year',
            loading: '⏳ Loading Million Squares...',
            loading_grid: '⏳ Loading squares...',
            total_squares: 'Total squares',
            virtual_members: 'Virtual',
            online: 'Online',
            today: 'Today',
            book_square: 'Book Your Square Now',
            book_hint: 'Click here to book a new square',
            what_is: '🎯 What is Million Squares?',
            description: 'A revolutionary platform for interactive digital space.',
            steps_title: '📋 Subscription Steps',
            step1: 'Choose your spot - Click on empty square',
            step2: 'Select tier - Normal, Silver, Gold, Royal',
            step3: 'Fill your data - Name, email, location, image',
            step4: 'Free trial - 3 days',
            step5: 'Go! - Your square will appear',
            sponsor_payment_title: '🌟 Sponsor Payment System',
            sponsor_payment_desc: 'Choose the right package for your company',
            weekly: 'Weekly',
            monthly: 'Monthly',
            yearly: 'Yearly',
            choose: 'Choose',
            popular: 'Most Popular',
            sp_weekly_1: '✅ Display company name',
            sp_weekly_2: '✅ Duration: 7 days',
            sp_monthly_1: '✅ Display company name',
            sp_monthly_2: '✅ Duration: 30 days',
            sp_monthly_3: '✅ Featured logo',
            admin_hint: 'Double click to access admin panel',
            admin_login: 'Login to Dashboard',
            login: 'Login',
            login_error: 'Invalid username or password',
            username: 'Username',
            password: 'Password',
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
            real_members: 'Real',
            virtual_members_list: 'Virtual',
            real_revenue: 'Real Revenue',
            virtual_revenue: 'Virtual Revenue',
            total_revenue: 'Total Revenue',
            join_date: 'Join date',
            edit: 'Edit',
            delete: 'Delete',
            payment_settings: 'Payment Settings',
            save: 'Save Settings',
            sponsor_management: 'Sponsor Management',
            add_sponsor: 'Add Sponsor',
            sponsor_name: 'Sponsor name',
            sponsor_link: 'Website link',
            sponsor_amount: 'Amount',
            social_media: 'Social Media',
            suggestions_title: 'Member Suggestions',
            no_suggestions: 'No suggestions',
            settings_title: 'Site Settings',
            admin_email: 'Admin Email:',
            admin_name: 'Admin Name:',
            change_password: 'Change Password',
            change: 'Change',
            suggest_idea: '💡 Share Your Suggestion',
            send: 'Send',
            your_name: 'Your name',
            your_email: 'Your email',
            your_suggestion: 'Your idea to improve',
            contact_us: '📧 Contact Us',
            about_us: '📍 About Us',
            about_text: 'Million Squares Platform',
            follow_us: '📱 Follow Us',
            rights: 'All Rights Reserved',
            badge_normal: 'Beginner',
            badge_silver: 'Popular',
            badge_gold: 'Featured',
            badge_royal: 'VIP',
            lang_ar: '🇸🇦 Arabic',
            lang_en: '🇬🇧 English',
            lang_fr: '🇫🇷 French',
            admin_search: '🔍 Search...',
            admin_filter_type: 'Filter by type',
            all_types: 'All types',
            sort_type: 'Sort by type',
            phone: 'Phone',
            trial: 'Trial period',
            trial_banner: '🎁 3 days free trial'
        },
        fr: {
            banner: '🚀 Rejoignez maintenant',
            available: 'Carrés disponibles',
            members: 'Membres',
            revenue: 'Revenus',
            site_title: 'Million de Carrés',
            subtitle: 'Plateforme de communication visuelle',
            sponsors_title: '🌟 Sponsors',
            become_sponsor: 'Devenir Sponsor',
            search: '🔎 Rechercher...',
            all_tiers: 'Tous les niveaux',
            normal: '💎 Normal',
            silver: '⭐ Argent',
            gold: '👑 Or',
            royal: '💠 Royal',
            year: 'an',
            loading: '⏳ Chargement...',
            loading_grid: '⏳ Chargement des carrés...',
            total_squares: 'Total des carrés',
            virtual_members: 'Virtuel',
            online: 'En ligne',
            today: "Aujourd'hui",
            book_square: 'Réservez votre carré',
            book_hint: 'Cliquez ici pour réserver',
            what_is: "🎯 Qu'est-ce que Million de Carrés?",
            description: 'Plateforme révolutionnaire pour espace numérique interactif.',
            steps_title: "📋 Étapes d'abonnement",
            step1: 'Choisissez votre emplacement',
            step2: 'Sélectionnez le niveau',
            step3: 'Remplissez vos données',
            step4: 'Essai gratuit - 3 jours',
            step5: 'Go!',
            sponsor_payment_title: '🌟 Système de paiement',
            sponsor_payment_desc: 'Choisissez le forfait adapté',
            weekly: 'Hebdomadaire',
            monthly: 'Mensuel',
            yearly: 'Annuel',
            choose: 'Choisir',
            popular: 'Le plus populaire',
            sp_weekly_1: "✅ Afficher le nom",
            sp_weekly_2: '✅ Durée: 7 jours',
            sp_monthly_1: "✅ Afficher le nom",
            sp_monthly_2: '✅ Durée: 30 jours',
            sp_monthly_3: '✅ Logo en vedette',
            admin_hint: 'Double-cliquez pour accéder',
            admin_login: 'Connexion',
            login: 'Connexion',
            login_error: 'Identifiants incorrects',
            username: "Nom d'utilisateur",
            password: 'Mot de passe',
            payments: 'Paiements',
            sponsors: 'Sponsors',
            social: 'Réseaux sociaux',
            suggestions: 'Suggestions',
            settings: 'Paramètres',
            add_member: 'Ajouter',
            export: 'Exporter',
            refresh: 'Rafraîchir',
            name: 'Nom',
            email: 'Email',
            tier: 'Niveau',
            location: 'Emplacement',
            type: 'Type',
            actions: 'Actions',
            total_members: 'Total des membres',
            real_members: 'Réel',
            virtual_members_list: 'Virtuel',
            real_revenue: 'Revenus réels',
            virtual_revenue: 'Revenus virtuels',
            total_revenue: 'Revenus totaux',
            join_date: "Date d'adhésion",
            edit: 'Modifier',
            delete: 'Supprimer',
            payment_settings: 'Paramètres de paiement',
            save: 'Enregistrer',
            sponsor_management: 'Gestion des sponsors',
            add_sponsor: 'Ajouter',
            sponsor_name: "Nom du sponsor",
            sponsor_link: "Lien du site",
            sponsor_amount: 'Montant',
            social_media: 'Réseaux sociaux',
            suggestions_title: 'Suggestions',
            no_suggestions: 'Aucune suggestion',
            settings_title: 'Paramètres du site',
            admin_email: "Email de l'admin:",
            admin_name: "Nom de l'admin:",
            change_password: 'Changer mot de passe',
            change: 'Changer',
            suggest_idea: '💡 Partagez votre suggestion',
            send: 'Envoyer',
            your_name: 'Votre nom',
            your_email: 'Votre email',
            your_suggestion: 'Votre idée',
            contact_us: '📧 Contactez-nous',
            about_us: '📍 À propos',
            about_text: 'Plateforme Million de Carrés',
            follow_us: '📱 Suivez-nous',
            rights: 'Tous droits réservés',
            badge_normal: 'Débutant',
            badge_silver: 'Populaire',
            badge_gold: 'En vedette',
            badge_royal: 'VIP',
            lang_ar: '🇸🇦 Arabe',
            lang_en: '🇬🇧 Anglais',
            lang_fr: '🇫🇷 Français',
            admin_search: '🔍 Rechercher...',
            admin_filter_type: 'Filtrer par type',
            all_types: 'Tous les types',
            sort_type: 'Trier par type',
            phone: 'Téléphone',
            trial: "Période d'essai",
            trial_banner: '🎁 3 jours d\'essai gratuit'
        }
    };
    
    var t = translations[lang];
    if (!t) return;
    
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.dataset.i18n;
        if (t[key] !== undefined) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        var key = el.dataset.i18nPlaceholder;
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });
    
    document.querySelectorAll('select option[data-i18n]').forEach(function(opt) {
        var key = opt.dataset.i18n;
        if (t[key] !== undefined) {
            opt.textContent = t[key];
        }
    });
    
    var bookBtn = document.getElementById('bookSquareBtn');
    if (bookBtn) {
        var span = bookBtn.querySelector('span');
        if (span && t.book_square) span.textContent = t.book_square;
    }
    
    var bookHint = document.querySelector('.book-hint');
    if (bookHint && t.book_hint) bookHint.textContent = t.book_hint;
    
    var loadingText = document.getElementById('loadingText');
    if (loadingText && t.loading) loadingText.textContent = t.loading;
    
    var loadingIndicatorText = document.querySelector('#loadingIndicator span');
    if (loadingIndicatorText && t.loading_grid) loadingIndicatorText.textContent = t.loading_grid;
    
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        var key = 'lang_' + btn.dataset.lang;
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
    
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    translatePage(lang);
    saveData();
}

// ===== تهيئة الموقع =====
document.addEventListener('DOMContentLoaded', function() {
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
    setInterval(function() {
        if (liveClock) {
            var now = new Date();
            liveClock.textContent = now.toLocaleTimeString('ar-EG');
        }
    }, 1000);

    // عرض المربعات
    renderGrid();

    // زر الحجز
    document.getElementById('bookSquareBtn').addEventListener('click', bookSquare);

    // البحث
    if (searchInput) {
        searchInput.addEventListener('input', filterGrid);
    }

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

    // لوحة التحكم - زر الدخول المخفي
    document.getElementById('adminSecretBtn').addEventListener('click', function() {
        adminClickCount++;
        if (adminClickCount === 1) {
            adminClickTimer = setTimeout(function() { adminClickCount = 0; }, 500);
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

    // لوحة التحكم - تسجيل الدخول
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
            document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(function(tc) { tc.classList.remove('active'); });
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });

    // أحداث لوحة التحكم
    var adminSearch = document.getElementById('adminSearchInput');
    if (adminSearch) {
        adminSearch.addEventListener('input', renderMembersTable);
    }

    // إضافة مشترك
    document.getElementById('addMemberBtn').addEventListener('click', function() {
        var name = prompt('👤 اسم المشترك الكامل:');
        if (!name) return;
        var email = prompt('✉️ البريد:');
        if (!email) return;
        var phone = prompt('📞 رقم الهاتف (اختياري):') || '';
        var location = prompt('📍 الموقع:') || 'غير محدد';
        var tier = prompt('🏷️ المستوى (normal/silver/gold/royal):') || 'normal';
        if (!TIERS[tier]) { alert('❌ مستوى غير صحيح'); return; }
        var image = prompt('🖼️ رابط الصورة:') || 'https://picsum.photos/seed/' + Date.now() + '/100/100';
        
        var trialEnd = new Date();
        trialEnd.setDate(trialEnd.getDate() + 3);
        var trialEndStr = trialEnd.toLocaleDateString('ar-EG');

        members.push({
            id: 'm' + Date.now(),
            name: name,
            email: email,
            phone: phone,
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
            joinDate: new Date().toLocaleDateString('ar-EG'),
            trialEnd: trialEndStr,
            isTrial: true
        });
        totalRevenue += TIERS[tier].price;
        saveData();
        renderMembersTable();
        renderGrid();
        updateStats();
        alert('✅ تم إضافة المشترك مع فترة تجريبية 3 أيام');
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
        if (!name || !amount || isNaN(amount)) { alert('❌ أدخل البيانات'); return; }
        sponsors.push({ name: name, link: link, amount: amount, duration: duration });
        saveData();
        renderSponsorList();
        renderSponsors();
        document.getElementById('sponsorName').value = '';
        document.getElementById('sponsorLink').value = '';
        document.getElementById('sponsorAmount').value = '';
        alert('✅ تم إضافة الراعي');
    });

    // إعدادات المدير
    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        localStorage.setItem('adminEmail', document.getElementById('adminEmailSetting').value);
        alert('✅ تم حفظ الإعدادات');
    });

    // تغيير كلمة السر
    document.getElementById('changePasswordBtn').addEventListener('click', function() {
        var pass = document.getElementById('newPassword').value.trim();
        if (pass.length < 4) { alert('❌ 4 أحرف على الأقل'); return; }
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
        if (!name || !email || !text) { alert('❌ ملء جميع الحقول'); return; }
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
            list.innerHTML = '<p class="empty-msg">لا توجد اقتراحات</p>';
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
            if (!method || !['1','2','3'].includes(method)) { alert('❌ طريقة غير صحيحة'); return; }
            var methods = ['PayPal','Stripe','IBAN'];
            alert('✅ جارٍ التحويل إلى ' + methods[parseInt(method)-1] + '\nالمبلغ: $' + amount);
            sponsors.push({ name: name, link: link, amount: parseInt(amount), duration: plan });
            saveData();
            renderSponsorList();
            renderSponsors();
            alert('🎉 تمت الرعاية بنجاح!');
        });
    });

    // أزرار اللغة
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
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

    // إخفاء شاشة التحميل
    setTimeout(function() {
        var loading = document.getElementById('loadingScreen');
        if (loading) loading.classList.add('hidden');
    }, 800);

    console.log('🚀 مليون مربع - تم التحميل بنجاح');
    console.log('👥 المشتركين: ' + members.length);
});
