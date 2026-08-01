// ===== بيانات المستويات =====
var TIERS = {
    normal: { name: 'عادي', price: 1, color: '#4A90D9', label: '💎' },
    silver: { name: 'فضي', price: 5, color: '#C0C0C0', label: '⭐' },
    gold: { name: 'ذهبي', price: 10, color: '#FFD700', label: '👑' },
    royal: { name: 'ملكي', price: 100, color: '#9B59B6', label: '💠' }
};

// ===== بيانات افتراضية =====
var NAMES = ['أحمد محمد', 'محمد العمري', 'سارة الخالدي', 'نورة الحربي', 'علي الشمري', 'فاطمة الزهراء'];
var LOCATIONS = ['الرياض', 'جدة', 'مكة', 'المدينة', 'الدمام', 'دبي'];

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
var gridCanvas, searchInput, filterTier, liveClock;
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
    for (var i = 0; i < count; i++) {
        var tier = tierKeys[i % tierKeys.length];
        var nameIndex = i % NAMES.length;
        var locIndex = i % LOCATIONS.length;
        result.push({
            id: 'v' + (i + 1),
            name: NAMES[nameIndex],
            email: NAMES[nameIndex].replace(/ /g, '').toLowerCase() + i + '@example.com',
            location: LOCATIONS[locIndex],
            tier: tier,
            website: 'https://' + NAMES[nameIndex].replace(/ /g, '').toLowerCase() + '.com',
            message: 'مرحباً، أنا ' + NAMES[nameIndex],
            image: 'https://picsum.photos/seed/' + (i + 100) + '/100/100',
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
    var data = { 
        members: members, 
        sponsors: sponsors, 
        suggestions: suggestions, 
        totalRevenue: totalRevenue, 
        virtualRevenue: virtualRevenue 
    };
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
    members = generateVirtualMembers(30);
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
        var totalCells = 500;
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
                    '<div class="cell-tooltip"><strong>' + member.name + '</strong><br>📍 ' + member.location + '<br>✉️ ' + member.email + '<br><span style="color:' + tierInfo.color + ';font-weight:700">' + tierInfo.label + ' ' + tierInfo.name + ' ($' + tierInfo.price + '/سنة)</span><br><small>⭐ ' + stars + ' (' + (member.votes || 0) + ')</small></div>' +
                    '<div class="cell-rating"><span class="stars">' + stars + '</span><span class="votes">(' + (member.votes || 0) + ')</span></div>' +
                    (member.isRoyal ? '<div class="royal-crown">👑</div>' : '');
                
                (function(m) {
                    cell.addEventListener('click', function() {
                        alert('👤 ' + m.name + '\n📧 ' + m.email + '\n📍 ' + m.location + '\n🏷️ ' + TIERS[m.tier].label + ' ' + TIERS[m.tier].name + '\n💰 $' + TIERS[m.tier].price + '/سنة');
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
    var location = prompt('📍 أدخل موقعك:') || 'غير محدد';
    var website = prompt('🔗 رابط موقعك (اختياري):') || '';
    var image = prompt('🖼️ رابط الصورة (اختياري):') || 'https://picsum.photos/seed/' + Date.now() + '/100/100';

    var newMember = {
        id: 'm' + Date.now(),
        name: name,
        email: email,
        location: location,
        tier: choice,
        website: website,
        image: image,
        message: 'مرحباً، أنا ' + name,
        isRoyal: choice === 'royal',
        isVirtual: false,
        position: members.length,
        rating: 0,
        votes: 0,
        joinDate: new Date().toLocaleDateString('ar-EG')
    };
    
    members.push(newMember);
    totalRevenue += tierInfo.price;
    saveData();
    renderGrid();
    renderMembersTable();
    updateStats();
    alert('🎉 تم الاشتراك بنجاح!');
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
               m.location.toLowerCase().includes(searchText);
    });
    
    filtered.forEach(function(m) {
        var tr = document.createElement('tr');
        var tierInfo = TIERS[m.tier];
        var typeBadge = m.isVirtual ? 
            '<span style="color:#F59E0B;font-weight:700">🔄 افتراضي</span>' : 
            '<span style="color:#10B981;font-weight:700">✅ حقيقي</span>';
        var index = members.indexOf(m);
        
        tr.innerHTML = 
            '<td><strong>' + m.name + '</strong></td>' +
            '<td>' + m.email + '</td>' +
            '<td><span style="color:' + tierInfo.color + ';font-weight:700">' + tierInfo.label + ' ' + tierInfo.name + '</span></td>' +
            '<td>' + m.location + '</td>' +
            '<td>' + typeBadge + '</td>' +
            '<td><button class="delete-btn" data-index="' + index + '">🗑️ حذف</button></td>';
        membersTableBody.appendChild(tr);
    });
    
    document.querySelectorAll('.delete-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var index = parseInt(this.dataset.index);
            deleteMember(index);
        });
    });
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
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    var translations = {
        ar: {
            banner: '🚀 انضم الآن واحجز مربعك المميز',
            available: 'المربعات المتاحة',
            members: 'مشترك',
            revenue: 'إيرادات',
            site_title: 'مليون مربع',
            subtitle: 'منصة التواصل البصرية الأولى',
            search: '🔎 بحث...',
            all_tiers: 'الكل',
            normal: '💎 عادي',
            silver: '⭐ فضي',
            gold: '👑 ذهبي',
            royal: '💠 ملكي',
            year: 'سنة',
            loading: '⏳ جاري تحميل مليون مربع...',
            loading_grid: '⏳ جاري التحميل...',
            total_squares: 'إجمالي المربعات',
            virtual_members: 'افتراضي',
            online: 'متصلون',
            today: 'جديد اليوم',
            book_square: 'احجز مربعك الآن',
            book_hint: '🎁 3 أيام تجريبية مجانية',
            sponsors: 'الرعاة',
            sponsor_cta: 'كن راعياً',
            admin_hint: 'انقر مرتين للدخول',
            admin_login: 'الدخول إلى لوحة التحكم',
            login: 'دخول',
            login_error: 'اسم المستخدم أو كلمة السر غير صحيحة',
            username: 'اسم المستخدم',
            password: 'كلمة السر',
            settings: 'الإعدادات',
            add: 'إضافة',
            refresh: 'تحديث',
            name: 'الاسم',
            email: 'البريد',
            tier: 'المستوى',
            location: 'الموقع',
            type: 'النوع',
            actions: 'الإجراءات',
            delete: 'حذف',
            settings_title: 'الإعدادات',
            admin_email: 'بريد المدير:',
            admin_email_placeholder: 'بريد المدير',
            change_password: 'تغيير كلمة السر',
            new_password: 'كلمة سر جديدة',
            change: 'تغيير',
            save: 'حفظ',
            suggest_idea: '💡 شاركنا اقتراحك',
            send: 'إرسال',
            your_name: 'اسمك',
            your_email: 'بريدك',
            your_suggestion: 'فكرتك لتطوير الموقع',
            contact_us: '📧 تواصل معنا',
            about_us: '📍 عن الموقع',
            about_text: 'منصة مليون مربع',
            follow_us: '📱 تابعنا',
            rights: 'جميع الحقوق محفوظة',
            badge_normal: 'مبتدئ',
            badge_silver: 'شائع',
            badge_gold: 'مميز',
            badge_royal: 'VIP'
        },
        en: {
            banner: '🚀 Join now and book your special square',
            available: 'Available squares',
            members: 'Members',
            revenue: 'Revenue',
            site_title: 'Million Squares',
            subtitle: 'The First Visual Communication Platform',
            search: '🔎 Search...',
            all_tiers: 'All',
            normal: '💎 Normal',
            silver: '⭐ Silver',
            gold: '👑 Gold',
            royal: '💠 Royal',
            year: 'year',
            loading: '⏳ Loading Million Squares...',
            loading_grid: '⏳ Loading...',
            total_squares: 'Total squares',
            virtual_members: 'Virtual',
            online: 'Online',
            today: 'Today',
            book_square: 'Book Your Square Now',
            book_hint: '🎁 3 days free trial',
            sponsors: 'Sponsors',
            sponsor_cta: 'Sponsor',
            admin_hint: 'Double click to access',
            admin_login: 'Login to Dashboard',
            login: 'Login',
            login_error: 'Invalid username or password',
            username: 'Username',
            password: 'Password',
            settings: 'Settings',
            add: 'Add',
            refresh: 'Refresh',
            name: 'Name',
            email: 'Email',
            tier: 'Tier',
            location: 'Location',
            type: 'Type',
            actions: 'Actions',
            delete: 'Delete',
            settings_title: 'Settings',
            admin_email: 'Admin Email:',
            admin_email_placeholder: 'Admin email',
            change_password: 'Change Password',
            new_password: 'New password',
            change: 'Change',
            save: 'Save',
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
            badge_royal: 'VIP'
        }
    };
    
    var t = translations[lang];
    if (!t) return;
    
    // تحديث النصوص
    document.querySelector('.banner-text').textContent = t.banner;
    document.querySelector('.banner-counter:nth-child(2)').innerHTML = '📊 ' + t.available + ': <strong id="availableSquares">0</strong>';
    document.querySelector('.banner-counter:last-child').innerHTML = '👥 <strong id="totalMembersDisplay">0</strong> ' + t.members;
    document.getElementById('siteTitle').textContent = t.site_title;
    document.getElementById('siteSubtitle').textContent = t.subtitle;
    document.getElementById('searchInput').placeholder = t.search;
    document.getElementById('filterTier').options[0].text = t.all_tiers;
    document.getElementById('filterTier').options[1].text = '💎 ' + t.normal;
    document.getElementById('filterTier').options[2].text = '⭐ ' + t.silver;
    document.getElementById('filterTier').options[3].text = '👑 ' + t.gold;
    document.getElementById('filterTier').options[4].text = '💠 ' + t.royal;
    document.getElementById('bookBtnText').textContent = t.book_square;
    document.getElementById('bookHint').textContent = t.book_hint;
    document.getElementById('sponsorsTitle').textContent = '🌟 ' + t.sponsors;
    document.getElementById('sponsorCta').textContent = t.sponsor_cta;
    document.getElementById('adminHint').textContent = t.admin_hint;
    document.getElementById('adminLoginTitle').textContent = '🔐 ' + t.admin_login;
    document.getElementById('loginBtnText').textContent = t.login;
    document.getElementById('membersLabel').textContent = t.members;
    document.getElementById('revenueLabel').textContent = t.revenue;
    document.getElementById('totalSquaresLabel').innerHTML = '📊 ' + t.total_squares + ': <strong>1,000,000</strong>';
    document.getElementById('gridMembersLabel').innerHTML = '👥 ' + t.members + ': <strong id="gridMemberCount">0</strong>';
    document.getElementById('gridAvailableLabel').innerHTML = '📦 ' + t.available + ': <strong id="gridAvailableCount">0</strong>';
    document.getElementById('whatIsTitle').textContent = '🎯 ' + (lang === 'ar' ? 'ما هو مليون مربع؟' : 'What is Million Squares?');
    document.getElementById('whatIsDesc').textContent = lang === 'ar' ? 'منصة ثورية تتيح للأفراد والشركات امتلاك مساحة رقمية تفاعلية.' : 'A revolutionary platform for interactive digital space.';
    document.getElementById('stepsTitle').textContent = '📋 ' + (lang === 'ar' ? 'خطوات الاشتراك' : 'Subscription Steps');
    document.getElementById('trialBanner').textContent = '🎁 ' + t.book_hint;
    document.getElementById('adminLoginTitle').textContent = '🔐 ' + t.admin_login;
    
    document.getElementById('membersTab').textContent = t.members;
    document.getElementById('settingsTab').textContent = t.settings;
    document.getElementById('addBtnText').textContent = t.add;
    document.getElementById('refreshBtnText').textContent = t.refresh;
    document.getElementById('thName').textContent = t.name;
    document.getElementById('thEmail').textContent = t.email;
    document.getElementById('thTier').textContent = t.tier;
    document.getElementById('thLocation').textContent = t.location;
    document.getElementById('thType').textContent = t.type;
    document.getElementById('thActions').textContent = t.actions;
    document.getElementById('settingsTitle').textContent = t.settings_title;
    document.getElementById('adminEmailLabel').textContent = t.admin_email;
    document.getElementById('adminEmailSetting').placeholder = t.admin_email_placeholder;
    document.getElementById('changePassTitle').textContent = t.change_password;
    document.getElementById('newPassword').placeholder = t.new_password;
    document.getElementById('changeBtnText').textContent = t.change;
    document.getElementById('saveBtnText').textContent = t.save;
    document.getElementById('suggestionTitle').textContent = t.suggest_idea;
    document.getElementById('sendBtnText').textContent = t.send;
    document.getElementById('suggesterName').placeholder = t.your_name;
    document.getElementById('suggesterEmail').placeholder = t.your_email;
    document.getElementById('suggestionText').placeholder = t.your_suggestion;
    document.getElementById('contactTitle').textContent = t.contact_us;
    document.getElementById('aboutTitle').textContent = t.about_us;
    document.getElementById('aboutText').textContent = t.about_text;
    document.getElementById('footerRights').textContent = '© 2026 ' + t.site_title + ' - ' + t.rights;
    
    // تحديث labels في الميزات
    document.getElementById('normalLabel').textContent = t.normal;
    document.getElementById('silverLabel').textContent = t.silver;
    document.getElementById('goldLabel').textContent = t.gold;
    document.getElementById('royalLabel').textContent = t.royal;
    document.querySelectorAll('#yearLabel, #yearLabel2, #yearLabel3, #yearLabel4').forEach(function(el) {
        el.textContent = t.year;
    });
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

    // الثيم
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

    // لوحة التحكم
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
                }
            }
        }
    });

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

    document.querySelectorAll('.tab-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(function(tc) { tc.classList.remove('active'); });
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });

    document.getElementById('adminSearchInput').addEventListener('input', renderMembersTable);

    document.getElementById('addMemberBtn').addEventListener('click', function() {
        var name = prompt('👤 اسم المشترك الكامل:');
        if (!name) return;
        var email = prompt('✉️ البريد:');
        if (!email) return;
        var location = prompt('📍 الموقع:') || 'غير محدد';
        var tier = prompt('🏷️ المستوى (normal/silver/gold/royal):') || 'normal';
        if (!TIERS[tier]) { alert('❌ مستوى غير صحيح'); return; }
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
        alert('✅ تم إضافة المشترك');
    });

    document.getElementById('refreshMembersBtn').addEventListener('click', function() {
        renderMembersTable();
        updateStats();
        alert('✅ تم تحديث البيانات');
    });

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

    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        localStorage.setItem('adminEmail', document.getElementById('adminEmailSetting').value);
        alert('✅ تم حفظ الإعدادات');
    });

    document.getElementById('changePasswordBtn').addEventListener('click', function() {
        var pass = document.getElementById('newPassword').value.trim();
        if (pass.length < 4) { alert('❌ 4 أحرف على الأقل'); return; }
        localStorage.setItem('adminPassword', pass);
        alert('✅ تم تغيير كلمة السر');
        document.getElementById('newPassword').value = '';
    });

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

    renderSponsors();
    renderMembersTable();
    renderSponsorList();
    updateSuggestions();
    updateStats();
    updateRoyalBackground();

    document.getElementById('adminEmailSetting').value = localStorage.getItem('adminEmail') || '';
    
    // تطبيق اللغة
    setLanguage(currentLang);

    // إخفاء شاشة التحميل
    setTimeout(function() {
        var loading = document.getElementById('loadingScreen');
        if (loading) loading.classList.add('hidden');
    }, 1000);

    console.log('🚀 مليون مربع - تم التحميل بنجاح');
    console.log('👥 المشتركين: ' + members.length);
});
