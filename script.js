// ===== بيانات المستويات =====
const TIERS = {
    normal: { name: 'عادي', price: 1, color: '#4A90D9', label: '💎' },
    silver: { name: 'فضي', price: 5, color: '#C0C0C0', label: '⭐' },
    gold: { name: 'ذهبي', price: 10, color: '#FFD700', label: '👑' },
    royal: { name: 'ملكي', price: 100, color: '#9B59B6', label: '💠' }
};

// ===== بيانات افتراضية =====
const NAMES = [
    'أحمد محمد السيد', 'محمد عبدالله العمري', 'سارة خالد الخالدي', 'نورة سعيد الحربي',
    'علي حسن الشمري', 'فاطمة محمد الزهراء', 'حسن علي الغامدي', 'زينب عبدالله العلي',
    'خالد إبراهيم المالكي', 'ليلى عبدالرحمن القحطاني', 'عمر سعود العتيبي', 'منى صالح الشهراني',
    'سعيد مبارك الدوسري', 'هدى فيصل الفهد', 'ياسر ناصر المطيري', 'سمية خالد العيسى'
];

const LOCATIONS = [
    'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام',
    'الخبر', 'تبوك', 'حائل', 'القصيم', 'نجران',
    'دبي', 'أبوظبي', 'القاهرة', 'الإسكندرية', 'بيروت', 'عمان'
];

// ===== المتغيرات العامة =====
let members = [];
let sponsors = [];
let suggestions = [];
let socialLinks = { facebook: '', twitter: '', instagram: '', youtube: '', linkedin: '', tiktok: '' };
let totalRevenue = 0;
let virtualRevenue = 0;
let currentZoom = 1;
let currentLang = 'ar';
let adminClickCount = 0;
let adminClickTimer = null;
let royalInterval = null;
let royalIndex = 0;

// ===== عناصر DOM =====
let gridCanvas, searchInput, filterTier, sortBy, liveClock;
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
    return { real: real, virtual: virtual, total: real + virtual };
}

// ===== إنشاء مشتركين افتراضيين =====
function generateVirtualMembers(count) {
    const result = [];
    const tierKeys = ['normal', 'silver', 'gold', 'royal'];
    for (let i = 0; i < count; i++) {
        const tier = tierKeys[i % tierKeys.length];
        const nameIndex = i % NAMES.length;
        const locIndex = i % LOCATIONS.length;
        result.push({
            id: 'v' + (i + 1),
            name: NAMES[nameIndex],
            email: NAMES[nameIndex].replace(/ /g, '').toLowerCase() + i + '@example.com',
            location: LOCATIONS[locIndex],
            tier: tier,
            website: 'https://' + NAMES[nameIndex].replace(/ /g, '').toLowerCase() + '.com',
            message: 'مرحباً، أنا ' + NAMES[nameIndex] + ' من ' + LOCATIONS[locIndex],
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
    const data = { members, sponsors, suggestions, totalRevenue, virtualRevenue, socialLinks, currentLang };
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
    const rev = calculateRevenue();
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
        const fragment = document.createDocumentFragment();
        const totalCells = 2000;
        const memberCount = members.length;
        
        for (let i = 0; i < totalCells; i++) {
            const cell = document.createElement('div');
            cell.className = 'pixel-cell';
            const memberIndex = i % memberCount;
            const member = members[memberIndex];
            
            if (member) {
                const tierInfo = TIERS[member.tier];
                const stars = '⭐'.repeat(member.rating || 3) + '☆'.repeat(5 - (member.rating || 3));
                cell.className = 'pixel-cell tier-' + member.tier;
                cell.innerHTML = 
                    (member.image ? '<img src="' + member.image + '" class="cell-image" loading="lazy">' : '') +
                    '<div class="cell-name">' + member.name + '</div>' +
                    '<div class="cell-tier">' + tierInfo.label + '</div>' +
                    (member.isVirtual ? '<div class="cell-virtual-badge">افتراضي</div>' : '') +
                    '<div class="cell-tooltip"><strong>' + member.name + '</strong><br>📍 ' + member.location + '<br>✉️ ' + member.email + '<br>💬 ' + member.message + '<br><span style="color:' + tierInfo.color + ';font-weight:700">' + tierInfo.label + ' ' + tierInfo.name + ' ($' + tierInfo.price + '/سنة)</span><br><small>⭐ ' + stars + ' (' + (member.votes || 0) + ')</small></div>' +
                    '<div class="cell-rating"><span class="stars">' + stars + '</span><span class="votes">(' + (member.votes || 0) + ')</span></div>' +
                    (member.isRoyal ? '<div class="royal-crown">👑</div>' : '');
                (function(m) {
                    cell.addEventListener('click', function() {
                        alert('👤 ' + m.name + '\n📧 ' + m.email + '\n📍 ' + m.location + '\n💬 ' + m.message + '\n🏷️ ' + TIERS[m.tier].label + ' ' + TIERS[m.tier].name + '\n💰 $' + TIERS[m.tier].price + '/سنة');
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
    
    updateAdminStats();
    updateGridStats();
}

function updateGridStats() {
    const totalCount = members.length;
    const gmc = document.getElementById('gridMemberCount');
    const gac = document.getElementById('gridAvailableCount');
    const tt = document.getElementById('tableTotalMembers');
    if (gmc) gmc.textContent = totalCount;
    if (gac) gac.textContent = (1000000 - totalCount).toLocaleString();
    if (tt) tt.textContent = totalCount;
}

// ===== دالة الحجز =====
function bookSquare() {
    let options = '';
    for (const key in TIERS) {
        options += key + ': ' + TIERS[key].label + ' ' + TIERS[key].name + ' - $' + TIERS[key].price + '/سنة\n';
    }
    const choice = prompt('💳 اختر مستوى الاشتراك:\n' + options + '\nأدخل نوع المستوى (normal, silver, gold, royal):');
    if (!choice || !TIERS[choice]) { alert('❌ مستوى غير صحيح'); return; }

    const tierInfo = TIERS[choice];
    const name = prompt('👤 أدخل اسمك الكامل:');
    if (!name) return;
    const email = prompt('✉️ أدخل بريدك الإلكتروني:');
    if (!email) return;
    const location = prompt('📍 أدخل موقعك:') || 'غير محدد';
    const website = prompt('🔗 رابط موقعك (اختياري):') || '';
    const image = prompt('🖼️ رابط الصورة (اختياري):') || 'https://picsum.photos/seed/' + Date.now() + '/100/100';

    const method = prompt('💳 طريقة الدفع:\n1. PayPal\n2. Stripe\n3. IBAN\n\nأدخل الرقم (1-3):');
    if (!method || !['1','2','3'].includes(method)) { alert('❌ طريقة غير صحيحة'); return; }
    const methods = ['PayPal','Stripe','IBAN'];
    alert('✅ جارٍ التحويل إلى ' + methods[parseInt(method)-1] + '\nالمبلغ: $' + tierInfo.price);

    const newMember = {
        id: 'm' + Date.now(),
        name, email, location, tier: choice, website, image,
        message: 'مرحباً، أنا ' + name + ' من ' + location,
        isRoyal: choice === 'royal',
        isVirtual: false,
        position: members.length,
        rating: 0, votes: 0,
        joinDate: new Date().toLocaleDateString('ar-EG')
    };
    
    members.push(newMember);
    const rev = calculateRevenue();
    totalRevenue = rev.real;
    virtualRevenue = rev.virtual;
    saveData();
    renderGrid();
    renderMembersTable();
    updateStats();
    updateRoyalBackground();
    alert('🎉 تم الاشتراك بنجاح!');
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
        item.innerHTML = '🏢 ' + s.name + ' <span class="sponsor-badge">' + durationMap[s.duration] + '</span> $' + s.amount;
        track.appendChild(item);
    }
    for (let j = 0; j < sponsors.length; j++) {
        const s2 = sponsors[j];
        const item2 = document.createElement('span');
        item2.className = 'sponsor-item';
        item2.innerHTML = '🏢 ' + s2.name + ' <span class="sponsor-badge">' + durationMap[s2.duration] + '</span> $' + s2.amount;
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
    
    const searchInput = document.getElementById('adminSearchInput');
    const filterType = document.getElementById('adminFilterType');
    const filterTier = document.getElementById('adminFilterTier');
    const sortBy = document.getElementById('adminSortBy');
    
    const searchText = searchInput ? searchInput.value.toLowerCase() : '';
    const filterTypeValue = filterType ? filterType.value : 'all';
    const filterTierValue = filterTier ? filterTier.value : 'all';
    const sortByValue = sortBy ? sortBy.value : 'name';
    
    let filtered = members.filter(function(m) {
        const matchSearch = m.name.toLowerCase().includes(searchText) || 
                           m.email.toLowerCase().includes(searchText) || 
                           m.location.toLowerCase().includes(searchText);
        const matchType = filterTypeValue === 'all' || 
                         (filterTypeValue === 'real' && !m.isVirtual) || 
                         (filterTypeValue === 'virtual' && m.isVirtual);
        const matchTier = filterTierValue === 'all' || m.tier === filterTierValue;
        return matchSearch && matchType && matchTier;
    });
    
    filtered.sort(function(a, b) {
        if (sortByValue === 'name') return a.name.localeCompare(b.name);
        if (sortByValue === 'date') return new Date(b.joinDate) - new Date(a.joinDate);
        if (sortByValue === 'tier') {
            const order = { royal: 0, gold: 1, silver: 2, normal: 3 };
            return (order[a.tier] || 4) - (order[b.tier] || 4);
        }
        if (sortByValue === 'type') return (a.isVirtual ? 1 : 0) - (b.isVirtual ? 1 : 0);
        return 0;
    });
    
    filtered.forEach(function(m) {
        const tr = document.createElement('tr');
        const tierInfo = TIERS[m.tier];
        tr.className = m.isVirtual ? 'virtual-member' : 'real-member';
        const typeBadge = m.isVirtual ? 
            '<span class="member-type-badge virtual">🔄 افتراضي</span>' : 
            '<span class="member-type-badge real">✅ حقيقي</span>';
        const index = members.indexOf(m);
        tr.innerHTML = 
            '<td><strong>' + m.name + '</strong></td>' +
            '<td>' + m.email + '</td>' +
            '<td><span style="color:' + tierInfo.color + ';font-weight:700">' + tierInfo.label + ' ' + tierInfo.name + '</span></td>' +
            '<td>' + m.location + '</td>' +
            '<td>' + typeBadge + '</td>' +
            '<td>' + (m.joinDate || 'غير محدد') + '</td>' +
            '<td><button class="delete-btn" data-index="' + index + '">🗑️ حذف</button></td>';
        membersTableBody.appendChild(tr);
    });
    
    updateAdminStats();
    
    document.querySelectorAll('.delete-btn').forEach(function(btn) {
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
    
    const ids = ['adminTotalMembers', 'adminRealMembers', 'adminVirtualMembers', 'adminTotalRevenue',
                 'tableTotalMembers', 'tableRealCount', 'tableVirtualCount', 'tableRealRevenue', 'tableVirtualRevenue'];
    const values = [totalCount, realCount, virtualCount, '$' + (rev.real + rev.virtual).toFixed(0),
                    totalCount, realCount, virtualCount, '$' + rev.real.toFixed(0), '$' + rev.virtual.toFixed(0)];
    
    for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i]);
        if (el) el.textContent = values[i];
    }
}

function deleteMember(index) {
    const member = members[index];
    if (!member) return;
    const msg = member.isVirtual ? 'هذا مشترك افتراضي. هل أنت متأكد من حذفه؟' : 'هل أنت متأكد من حذف هذا المشترك؟';
    if (!confirm(msg)) return;
    if (member.isVirtual) virtualRevenue -= TIERS[member.tier].price;
    else totalRevenue -= TIERS[member.tier].price;
    members.splice(index, 1);
    saveData();
    renderMembersTable();
    renderGrid();
    updateStats();
    updateRoyalBackground();
}

function renderSponsorList() {
    const list = document.getElementById('sponsorList');
    if (!list) return;
    list.innerHTML = '';
    const durationMap = { weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي' };
    for (let i = 0; i < sponsors.length; i++) {
        const s = sponsors[i];
        const li = document.createElement('li');
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
    const fields = { facebook: 'socialFacebook', twitter: 'socialTwitter', instagram: 'socialInstagram', youtube: 'socialYoutube', linkedin: 'socialLinkedin', tiktok: 'socialTiktok' };
    for (const key in fields) {
        const el = document.getElementById(fields[key]);
        if (el && socialLinks[key]) el.value = socialLinks[key];
    }
    renderFooterSocialLinks();
}

function renderFooterSocialLinks() {
    const container = document.getElementById('footerSocialLinks');
    if (!container) return;
    container.innerHTML = '';
    const icons = { facebook: 'fab fa-facebook', twitter: 'fab fa-twitter', instagram: 'fab fa-instagram', youtube: 'fab fa-youtube', linkedin: 'fab fa-linkedin', tiktok: 'fab fa-tiktok' };
    let has = false;
    for (const key in icons) {
        if (socialLinks[key] && socialLinks[key].trim()) {
            has = true;
            const a = document.createElement('a');
            a.href = socialLinks[key];
            a.target = '_blank';
            a.innerHTML = '<i class="' + icons[key] + '"></i>';
            container.appendChild(a);
        }
    }
    if (!has) container.innerHTML = '<span style="color: var(--text-muted); font-size: 0.8rem;">لا توجد روابط</span>';
}

// ===== الترجمة =====
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-btn').forEach(function(b) {
        b.classList.toggle('active', b.dataset.lang === lang);
    });
    saveData();
    renderGrid();
    renderMembersTable();
    updateStats();
}

// ===== تطبيق الزوم =====
function applyZoom() {
    const size = Math.max(30, 60 * currentZoom);
    document.querySelectorAll('.pixel-cell').forEach(function(cell) {
        cell.style.minHeight = size + 'px';
        cell.style.fontSize = (size * 0.015) + 'rem';
    });
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

    setInterval(function() {
        if (liveClock) {
            const now = new Date();
            liveClock.textContent = now.toLocaleTimeString('ar-EG');
        }
    }, 1000);

    renderGrid();

    document.getElementById('bookSquareBtn').addEventListener('click', bookSquare);

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const text = this.value.toLowerCase();
            document.querySelectorAll('.pixel-cell .cell-name').forEach(function(el) {
                const cell = el.closest('.pixel-cell');
                if (cell) {
                    cell.style.display = el.textContent.toLowerCase().includes(text) ? 'block' : 'none';
                }
            });
        });
    }

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

    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
        window.addEventListener('scroll', function() {
            backBtn.classList.toggle('visible', window.scrollY > 300);
        });
        backBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    document.getElementById('adminSecretBtn').addEventListener('click', function() {
        adminClickCount++;
        if (adminClickCount === 1) {
            adminClickTimer = setTimeout(function() { adminClickCount = 0; }, 500);
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
            updateSocialLinks();
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

    // أحداث لوحة التحكم
    ['adminSearchInput', 'adminFilterType', 'adminFilterTier', 'adminSortBy'].forEach(function(id) {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', renderMembersTable);
            el.addEventListener('change', renderMembersTable);
        }
    });

    document.getElementById('addMemberBtn').addEventListener('click', function() {
        const name = prompt('👤 اسم المشترك الكامل:');
        if (!name) return;
        const email = prompt('✉️ البريد:');
        if (!email) return;
        const location = prompt('📍 الموقع:') || 'غير محدد';
        const tier = prompt('🏷️ المستوى (normal/silver/gold/royal):') || 'normal';
        if (!TIERS[tier]) { alert('❌ مستوى غير صحيح'); return; }
        const image = prompt('🖼️ رابط الصورة:') || 'https://picsum.photos/seed/' + Date.now() + '/100/100';
        members.push({
            id: 'm' + Date.now(),
            name, email, location, tier, image,
            website: '', message: 'مرحباً، أنا ' + name,
            isRoyal: tier === 'royal', isVirtual: false,
            position: members.length, rating: 0, votes: 0,
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

    document.getElementById('exportMembersBtn').addEventListener('click', function() {
        let csv = 'الاسم,البريد,المستوى,الموقع,النوع\n';
        members.forEach(function(m) {
            csv += m.name + ',' + m.email + ',' + m.tier + ',' + m.location + ',' + (m.isVirtual ? 'افتراضي' : 'حقيقي') + '\n';
        });
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'المشتركين.csv';
        a.click();
        URL.revokeObjectURL(url);
    });

    document.getElementById('refreshMembersBtn').addEventListener('click', function() {
        renderMembersTable();
        updateStats();
        alert('✅ تم تحديث البيانات');
    });

    document.getElementById('addSponsorBtn').addEventListener('click', function() {
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

    document.getElementById('savePaymentSettings').addEventListener('click', function() {
        localStorage.setItem('paypal', document.getElementById('paypalSetting').value);
        localStorage.setItem('stripe', document.getElementById('stripeSetting').value);
        localStorage.setItem('iban', document.getElementById('ibanSetting').value);
        alert('✅ تم حفظ إعدادات الدفع');
    });

    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        localStorage.setItem('adminEmail', document.getElementById('adminEmailSetting').value);
        localStorage.setItem('adminName', document.getElementById('adminNameSetting').value);
        alert('✅ تم حفظ إعدادات المدير');
    });

    document.getElementById('changePasswordBtn').addEventListener('click', function() {
        const pass = document.getElementById('newPassword').value.trim();
        if (pass.length < 4) { alert('❌ 4 أحرف على الأقل'); return; }
        localStorage.setItem('adminPassword', pass);
        alert('✅ تم تغيير كلمة السر');
        document.getElementById('newPassword').value = '';
    });

    document.getElementById('suggestionForm').addEventListener('submit', function(e) {
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
        if (suggestions.length === 0) {
            list.innerHTML = '<p class="empty-msg">لا توجد اقتراحات حالياً</p>';
            return;
        }
        let html = '';
        for (let i = suggestions.length - 1; i >= 0; i--) {
            const s = suggestions[i];
            html += '<div class="suggestion-item"><strong>' + s.name + '</strong> (' + s.email + ') - ' + s.date + '<p>' + s.text + '</p></div>';
        }
        list.innerHTML = html;
    }

    document.querySelectorAll('.sponsor-pay-btn').forEach(function(btn) {
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
            alert('✅ جارٍ التحويل إلى ' + methods[parseInt(method)-1] + '\nالمبلغ: $' + amount);
            sponsors.push({ name, link, amount: parseInt(amount), duration: plan });
            saveData();
            renderSponsorList();
            renderSponsors();
            alert('🎉 تمت الرعاية بنجاح!');
        });
    });

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
    updateSocialLinks();

    document.getElementById('adminEmailSetting').value = localStorage.getItem('adminEmail') || '';
    document.getElementById('adminNameSetting').value = localStorage.getItem('adminName') || '';
    document.getElementById('paypalSetting').value = localStorage.getItem('paypal') || '';
    document.getElementById('stripeSetting').value = localStorage.getItem('stripe') || '';
    document.getElementById('ibanSetting').value = localStorage.getItem('iban') || '';

    setLanguage(currentLang);

    setTimeout(function() {
        const loading = document.getElementById('loadingScreen');
        if (loading) loading.classList.add('hidden');
    }, 800);

    console.log('🚀 مليون مربع - تم التحميل بنجاح');
    console.log('👥 المشتركين: ' + members.length);
});
