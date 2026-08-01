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
    'عبدالله خالد الناصر', 'نجوى سليمان الخريف', 'ناصر عبدالرحمن السديري', 'غادة محمد الغامدي'
];

const LOCATIONS = [
    'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام',
    'الخبر', 'تبوك', 'حائل', 'القصيم', 'نجران',
    'دبي', 'أبوظبي', 'القاهرة', 'الإسكندرية', 'بيروت', 'عمان'
];

// ===== المتغيرات العامة =====
let members = [];
let sponsors = [
    { name: 'شركة الاتصالات', link: '#', amount: 1000, duration: 'monthly' },
    { name: 'بنك الرياض', link: '#', amount: 500, duration: 'weekly' }
];
let suggestions = [];
let socialLinks = { facebook: '', twitter: '', instagram: '', youtube: '', linkedin: '', tiktok: '' };
let totalRevenue = 0;
let currentZoom = 1;
let virtualGrid = null;
let isGridLoading = false;
let gridLoadTimeout = null;

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
        socialLinks: socialLinks
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
    if (liveUsers) {
        liveUsers.textContent = Math.floor(Math.random() * 33) + 12;
    }
    if (todayMembers) {
        todayMembers.textContent = Math.floor(Math.random() * 12) + 3;
    }
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

// ===== عرض المربعات بشكل محسّن =====
function renderGridOptimized() {
    if (isGridLoading) return;
    isGridLoading = true;
    
    var container = document.getElementById('gridCanvas');
    if (!container) return;
    
    // استخدام DocumentFragment لتقليل إعادة الرسم
    var fragment = document.createDocumentFragment();
    var sortedMembers = sortMembers('name');
    var memberCount = sortedMembers.length;
    var totalCells = 10000; // عرض 10000 مربع فقط للسرعة
    
    // عرض المربعات بشكل متدرج
    var batchSize = 500;
    var currentIndex = 0;
    
    function loadBatch() {
        var end = Math.min(currentIndex + batchSize, totalCells);
        
        for (var i = currentIndex; i < end; i++) {
            var cell = document.createElement('div');
            cell.className = 'pixel-cell';
            
            var member = sortedMembers[i % memberCount];
            
            if (member) {
                var tierInfo = TIERS[member.tier];
                var stars = '⭐'.repeat(member.rating || 3) + '☆'.repeat(5 - (member.rating || 3));
                cell.className = 'pixel-cell tier-' + member.tier;
                
                var imageHtml = member.image ? '<img src="' + member.image + '" class="cell-image" loading="lazy">' : '';
                var virtualBadge = member.isVirtual ? '<div class="cell-virtual-badge">افتراضي</div>' : '';
                var royalCrown = member.isRoyal ? '<div class="royal-crown">👑</div>' : '';
                
                // عرض الاسم الكامل
                var displayName = member.name.length > 12 ? member.name.substring(0, 10) + '..' : member.name;
                
                cell.innerHTML = imageHtml + 
                    '<div class="cell-name">' + displayName + '</div>' +
                    '<div class="cell-tier">' + tierInfo.label + '</div>' +
                    virtualBadge +
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
                    royalCrown;
                
                cell.addEventListener('click', (function(m) {
                    return function() { showMemberInfo(m); };
                })(member));
            } else {
                cell.className = 'pixel-cell empty';
                cell.textContent = '+';
                cell.addEventListener('click', showPaymentDialog);
            }
            
            fragment.appendChild(cell);
        }
        
        container.appendChild(fragment);
        currentIndex = end;
        
        if (currentIndex < totalCells) {
            // تحميل الدفعة التالية بعد 100ms
            gridLoadTimeout = setTimeout(loadBatch, 100);
        } else {
            isGridLoading = false;
            updateStats();
            applyZoom();
            
            // إخفاء مؤشر التحميل
            var loadingIndicator = document.getElementById('loadingIndicator');
            if (loadingIndicator) {
                loadingIndicator.classList.remove('active');
                loadingIndicator.innerHTML = '<span>✅ تم تحميل ' + totalCells + ' مربع</span>';
                setTimeout(function() {
                    loadingIndicator.classList.remove('active');
                }, 2000);
            }
        }
    }
    
    // بدء التحميل
    var loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
        loadingIndicator.classList.add('active');
        loadingIndicator.innerHTML = '<div class="spinner"></div><span>⏳ جاري تحميل المربعات...</span>';
    }
    
    loadBatch();
}

// ===== دوال العرض =====
function updateStats() {
    var virtualCount = 0;
    for (var i = 0; i < members.length; i++) {
        if (members[i].isVirtual) virtualCount++;
    }
    var totalCount = members.length;
    
    var totalMembers = document.getElementById('totalMembers');
    var totalMembersDisplay = document.getElementById('totalMembersDisplay');
    var availableSquares = document.getElementById('availableSquares');
    var totalRevenueEl = document.getElementById('totalRevenue');
    
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

function showPaymentDialog() {
    var options = '';
    for (var key in TIERS) {
        options += key + ': ' + TIERS[key].label + ' ' + TIERS[key].name + ' - $' + TIERS[key].price + '/سنة\n';
    }
    
    var choice = prompt('💳 اختر مستوى الاشتراك:\n' + options + '\nأدخل نوع المستوى (normal, silver, gold, royal):');
    if (!choice || !TIERS[choice]) {
        alert('❌ مستوى غير صحيح');
        return;
    }

    var tierInfo = TIERS[choice];
    var name = prompt('👤 أدخل اسمك الكامل:');
    if (!name) return;
    var email = prompt('✉️ أدخل بريدك الإلكتروني:');
    if (!email) return;
    var location = prompt('📍 أدخل موقعك:') || 'غير محدد';
    var website = prompt('🔗 رابط موقعك (اختياري):') || '';
    var image = prompt('🖼️ رابط الصورة (اختياري):') || 'https://picsum.photos/seed/' + Date.now() + '/100/100';

    var method = prompt('💳 طريقة الدفع:\n1. PayPal\n2. Stripe\n3. IBAN\n\nأدخل الرقم (1-3):');
    if (!method || !['1','2','3'].includes(method)) {
        alert('❌ طريقة غير صحيحة');
        return;
    }

    var methods = ['PayPal','Stripe','IBAN'];
    alert('✅ جارٍ التحويل إلى ' + methods[parseInt(method)-1] + '\nالمبلغ: $' + tierInfo.price);

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
        message: 'مرحباً، أنا ' + name + ' من ' + location,
        isRoyal: choice === 'royal',
        isVirtual: false,
        position: newPosition,
        rating: 0,
        votes: 0,
        joinDate: new Date().toLocaleDateString('ar-EG')
    };
    
    members.push(newMember);
    totalRevenue += tierInfo.price;
    saveData();
    renderGridOptimized();
    renderMembersTable();
    updateStats();
    updateRoyalBackground();
    alert('🎉 تم الاشتراك بنجاح!\nالمستوى: ' + tierInfo.label + ' ' + tierInfo.name + '\nالمبلغ: $' + tierInfo.price);
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
    
    var siteBackground = document.getElementById('siteBackground');
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
    var siteBackground = document.getElementById('siteBackground');
    if (member && member.image && siteBackground) {
        siteBackground.style.backgroundImage = 'url(' + member.image + ')';
        siteBackground.classList.add('active');
    }
}

// ===== لوحة التحكم =====
var adminClickCount = 0;
var adminClickTimer = null;

function renderMembersTable() {
    var membersTableBody = document.getElementById('membersTableBody');
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
        var type = m.isVirtual ? '🔄 افتراضي' : '✅ حقيقي';
        var index = members.indexOf(m);
        tr.innerHTML = '<td>' + m.name + '</td><td>' + m.email + '</td><td><span style="color:' + tierInfo.color + '">' + 
                       tierInfo.label + ' ' + tierInfo.name + '</span></td><td>' + m.location + '</td><td>' + type + 
                       '</td><td><button class="delete-btn" data-index="' + index + '">🗑️ حذف</button></td>';
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
            renderGridOptimized();
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

// ===== تطبيق الزوم =====
function applyZoom() {
    var size = Math.max(30, 60 * currentZoom);
    var cells = document.querySelectorAll('.pixel-cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.minHeight = size + 'px';
        cells[i].style.fontSize = (size * 0.015) + 'rem';
    }
}

// ===== تهيئة الموقع =====
document.addEventListener('DOMContentLoaded', function() {
    // الساعة
    var liveClock = document.getElementById('liveClock');
    setInterval(function() {
        if (liveClock) {
            var now = new Date();
            liveClock.textContent = now.toLocaleTimeString('ar-EG');
        }
    }, 1000);

    // عرض المربعات
    renderGridOptimized();

    // أحداث البحث والفلترة
    var searchInput = document.getElementById('searchInput');
    var filterTier = document.getElementById('filterTier');
    var sortBy = document.getElementById('sortBy');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            // بحث بسيط
            var text = this.value.toLowerCase();
            var cells = document.querySelectorAll('.pixel-cell');
            for (var i = 0; i < cells.length; i++) {
                var name = cells[i].querySelector('.cell-name');
                if (name) {
                    var match = name.textContent.toLowerCase().includes(text);
                    cells[i].style.display = match ? 'block' : 'none';
                }
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
    var loginError = document.getElementById('loginError');
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
    var tabBtns = document.querySelectorAll('.tab-btn');
    for (var i = 0; i < tabBtns.length; i++) {
        tabBtns[i].addEventListener('click', function() {
            var allBtns = document.querySelectorAll('.tab-btn');
            for (var j = 0; j < allBtns.length; j++) {
                allBtns[j].classList.remove('active');
            }
            this.classList.add('active');
            var allContents = document.querySelectorAll('.tab-content');
            for (var k = 0; k < allContents.length; k++) {
                allContents[k].classList.remove('active');
            }
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    }

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
            message: 'مرحباً، أنا ' + name,
            isRoyal: tier === 'royal',
            isVirtual: false,
            position: newPosition,
            rating: 0,
            votes: 0,
            joinDate: new Date().toLocaleDateString('ar-EG')
        });
        
        totalRevenue += TIERS[tier].price;
        saveData();
        renderMembersTable();
        renderGridOptimized();
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
    var payBtns = document.querySelectorAll('.sponsor-pay-btn');
    for (var i = 0; i < payBtns.length; i++) {
        payBtns[i].addEventListener('click', function() {
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
    }

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

    // إخفاء شاشة التحميل
    setTimeout(function() {
        var loading = document.getElementById('loadingScreen');
        if (loading) loading.classList.add('hidden');
    }, 500);

    console.log('🚀 مليون مربع - تم التحميل بنجاح');
    console.log('👥 المشتركين: ' + members.length);
    console.log('💰 الإيرادات: $' + totalRevenue);
});
