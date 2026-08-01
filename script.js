// ===== بيانات المستويات =====
const TIERS = {
    normal: { name: 'عادي', price: 1, color: '#4A90D9', label: '💎' },
    silver: { name: 'فضي', price: 5, color: '#C0C0C0', label: '⭐' },
    gold: { name: 'ذهبي', price: 10, color: '#FFD700', label: '👑' },
    royal: { name: 'ملكي', price: 100, color: '#9B59B6', label: '💠' }
};

// ===== أسماء متنوعة (غير مكررة) =====
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
    'جازان', 'عسير', 'الباحة', 'الجوف', 'الحدود الشمالية',
    'دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'رأس الخيمة',
    'القاهرة', 'الإسكندرية', 'الجيزة', 'بورسعيد', 'الإسماعيلية',
    'بيروت', 'طرابلس', 'صيدا', 'صور', 'زحلة',
    'عمان', 'الزرقاء', 'إربد', 'السلط', 'المفرق',
    'الكويت', 'حولي', 'الفحيحيل', 'الجهراء', 'مبارك الكبير'
];

// ===== المتغيرات العامة =====
let members = [];
let sponsors = [
    { name: 'شركة الاتصالات', link: '#', amount: 1000, duration: 'monthly' },
    { name: 'بنك الرياض', link: '#', amount: 500, duration: 'weekly' },
    { name: 'أكاديمية البرمجة', link: '#', amount: 2000, duration: 'monthly' },
    { name: 'مؤسسة النور', link: '#', amount: 300, duration: 'weekly' }
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
    var result = [];
    var tierKeys = ['normal', 'silver', 'gold', 'royal'];
    var step = Math.floor(1000000 / count);
    
    for (var i = 0; i < count; i++) {
        var tier = tierKeys[i % tierKeys.length];
        var isCompany = i % 5 === 0 && i > 10;
        
        var name, email;
        if (isCompany) {
            var companyNames = [
                'شركة التقنية الرقمية', 'مؤسسة الإبداع', 'أكاديمية المستقبل',
                'مركز الابتكار', 'مجموعة الرواد', 'شركة الحلول الذكية',
                'مختبر التصميم', 'استوديو إبداع', 'منصة الأعمال'
            ];
            name = companyNames[i % companyNames.length] + ' ' + (Math.floor(i / companyNames.length) + 1);
            email = 'info@' + name.replace(/ /g, '').toLowerCase() + '.com';
        } else {
            var nameIndex = i % NAMES.length;
            name = NAMES[nameIndex];
            email = name.replace(/ /g, '').toLowerCase() + i + '@example.com';
        }
        
        var locIndex = i % LOCATIONS.length;
        var location = LOCATIONS[locIndex];
        var imageUrl = 'https://picsum.photos/seed/' + (i + 100) + '/100/100';
        
        var messages = {
            normal: ['سعيد بانضمامي للمنصة!', 'شكراً لهذه الفرصة', 'بداية مشوار جديد', 'نتطلع للتعاون'],
            silver: ['نحن رواد في التقنية', 'شريككم الموثوق', 'نبني المستقبل معاً', 'نحو آفاق جديدة'],
            gold: ['نصنع التميز كل يوم', 'رواد التغيير الإيجابي', 'نبتكر حلولاً ذكية', 'نطلق الإبداع'],
            royal: ['نمثل قمة التميز', 'القيادة الحقيقية', 'نلهم العالم', 'نصنع التاريخ', 'رواد بلا منافس']
        };
        
        var tierMessages = messages[tier] || messages.normal;
        var message = tierMessages[i % tierMessages.length];
        
        result.push({
            id: 'v' + (i + 1),
            name: name,
            email: email,
            location: location,
            tier: tier,
            website: isCompany ? 'https://' + name.replace(/ /g, '').toLowerCase() + '.com' : 'https://' + name.replace(/ /g, '').toLowerCase() + '.com',
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
    var dataToSave = {
        members: members.map(function(m) { 
            var copy = Object.assign({}, m);
            copy.isVirtual = m.isVirtual || false;
            return copy;
        }),
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
            
            // التحقق من عدد المشتركين الحقيقيين
            var realMembers = members.filter(function(m) { return !m.isVirtual; });
            
            // إذا تجاوز عدد المشتركين الحقيقيين 1000، احذف جميع المشتركين الافتراضيين
            if (realMembers.length >= 1000) {
                members = members.filter(function(m) { return !m.isVirtual; });
                saveData();
            }
            
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
} else {
    // التأكد من وجود مشتركين افتراضيين إذا كان العدد أقل من 100
    var virtualCount = 0;
    var realCount = 0;
    for (var i = 0; i < members.length; i++) {
        if (members[i].isVirtual) virtualCount++;
        else realCount++;
    }
    
    if (virtualCount === 0 && realCount < 100) {
        var newVirtual = generateVirtualMembers(100 - realCount);
        members = members.concat(newVirtual);
        saveData();
    }
}

// ===== محاكاة متصلين حقيقيين =====
function simulateLiveUsers() {
    var liveUsers = document.getElementById('liveUsers');
    var todayMembers = document.getElementById('todayMembers');
    
    if (liveUsers) {
        var count = Math.floor(Math.random() * 33) + 12;
        liveUsers.textContent = count;
    }
    
    if (todayMembers) {
        var count2 = Math.floor(Math.random() * 12) + 3;
        todayMembers.textContent = count2;
    }
}

setInterval(simulateLiveUsers, 10000);
simulateLiveUsers();

// ===== إشعارات جديدة =====
function showNotification() {
    var realMembers = members.filter(function(m) { return !m.isVirtual; });
    if (realMembers.length === 0) return;
    
    var randomMember = realMembers[Math.floor(Math.random() * realMembers.length)];
    var tierLabels = { normal: '💎 عادي', silver: '⭐ فضي', gold: '👑 ذهبي', royal: '💠 ملكي' };
    
    var notification = document.createElement('div');
    notification.className = 'notification-popup';
    notification.innerHTML = '<div class="notification-content"><span class="notification-icon">🎉</span><span>' + randomMember.name + ' من ' + randomMember.location + ' اشترك في ' + tierLabels[randomMember.tier] + '</span></div>';
    
    document.body.appendChild(notification);
    
    setTimeout(function() {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(function() {
        notification.classList.remove('show');
        setTimeout(function() {
            notification.remove();
        }, 500);
    }, 5000);
}

setInterval(function() {
    var realMembers = members.filter(function(m) { return !m.isVirtual; });
    if (realMembers.length > 0) {
        showNotification();
    }
}, Math.random() * 30000 + 30000);

// ===== نظام الترتيب =====
function sortMembers(sortByValue) {
    var sorted = members.slice();
    switch(sortByValue) {
        case 'name':
            sorted.sort(function(a, b) { return a.name.localeCompare(b.name); });
            break;
        case 'location':
            sorted.sort(function(a, b) { return a.location.localeCompare(b.location); });
            break;
        case 'tier':
            var order = { royal: 0, gold: 1, silver: 2, normal: 3 };
            sorted.sort(function(a, b) { return (order[a.tier] || 4) - (order[b.tier] || 4); });
            break;
        case 'date':
            sorted.sort(function(a, b) { return new Date(b.joinDate) - new Date(a.joinDate); });
            break;
        default:
            break;
    }
    return sorted;
}

// ===== نظام التحميل التدريجي (محسّن) =====
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
                loadingIndicator.innerHTML = '<span>✅ تم تحميل جميع المربعات!</span>';
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
    
    // حذف المشتركين الافتراضيين إذا تجاوز عدد الحقيقيين 1000
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
        isCompany: false,
        isVirtual: false,
        position: newPosition,
        rating: 0,
        votes: 0,
        joinDate: new Date().toLocaleDateString('ar-EG')
    };
    
    members.push(newMember);
    totalRevenue += tierInfo.price;
    saveData();
    if (virtualGrid) virtualGrid.reset();
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
        container.innerHTML = '<span style="color: var(--text-muted); font-size: 0.8rem;">لا توجد روابط</span>';
    }
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
            sort_date: 'الأحدث أولاً'
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
            sort_date: 'Latest First'
        }
    };
    
    var t = translations[lang];
    if (!t) return;
    
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.dataset.i18n;
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        var key = el.dataset.i18nPlaceholder;
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    document.querySelectorAll('select option[data-i18n]').forEach(function(opt) {
        var key = opt.dataset.i18n;
        if (t[key]) {
            opt.textContent = t[key];
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
    
    var loadingText = document.getElementById('loadingText');
    if (loadingText) {
        var t = { ar: '⏳ جاري تحميل مليون مربع...', en: '⏳ Loading Million Squares...' };
        loadingText.textContent = t[lang] || t.ar;
    }
    
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
            liveClock.textContent = now.toLocaleTimeString('ar-EG');
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
            isCompany: false,
            isVirtual: false,
            position: newPosition,
            rating: 0,
            votes: 0,
            joinDate: new Date().toLocaleDateString('ar-EG')
        });

        totalRevenue += TIERS[tier].price;
        saveData();
        renderMembersTable();
        if (virtualGrid) virtualGrid.reset();
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
        socialLinks.snapchat = document.getElementById('socialSnapchat').value.trim();
        
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
    
    for (var key in socialLinks) {
        var field = document.getElementById('social' + key.charAt(0).toUpperCase() + key.slice(1));
        if (field && socialLinks[key]) {
            field.value = socialLinks[key];
        }
    }

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
    console.log('🔄 عدد المشتركين الافتراضيين: ' + members.filter(function(m) { return m.isVirtual; }).length);
});
