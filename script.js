// ===== بيانات المستويات =====
const TIERS = {
    normal: { name: 'عادي', price: 1, color: '#4A5568', label: '💎' },
    silver: { name: 'فضي', price: 5, color: '#C0C0C0', label: '⭐' },
    gold: { name: 'ذهبي', price: 10, color: '#FFD700', label: '👑' },
    royal: { name: 'ملكي', price: 100, color: '#9B59B6', label: '💠' }
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

// ===== عناصر DOM =====
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
                                ${tierInfo.label} ${tierInfo.name} ($${tierInfo.price}/سنة)
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
                    loadingIndicator.innerHTML = '<span>✅ تم تحميل جميع المربعات!</span>';
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
    updateGridStats();
}

function updateGridStats() {
    const count = members.length;
    const gridMemberCount = document.getElementById('gridMemberCount');
    const gridAvailableCount = document.getElementById('gridAvailableCount');
    const tableTotal = document.getElementById('tableTotalMembers');
    
    if (gridMemberCount) gridMemberCount.textContent = count;
    if (gridAvailableCount) gridAvailableCount.textContent = (1000000 - count).toLocaleString();
    if (tableTotal) tableTotal.textContent = count;
}

function showMemberInfo(member) {
    const tierInfo = TIERS[member.tier];
    alert(`👤 ${member.name}\n📧 ${member.email}\n📍 ${member.location}\n${member.website ? `🔗 ${member.website}\n` : ''}💬 ${member.message}\n\n🏷️ المستوى: ${tierInfo.label} ${tierInfo.name}\n💰 السعر: $${tierInfo.price}/سنة`);
}

function showPaymentDialog() {
    const options = Object.entries(TIERS).map(([k,v]) => 
        `${k}: ${v.label} ${v.name} - $${v.price}/سنة`
    ).join('\n');
    
    const choice = prompt(`💳 اختر مستوى الاشتراك:\n${options}\n\nأدخل نوع المستوى (normal, silver, gold, royal):`);
    if (!choice || !TIERS[choice]) { 
        alert('❌ مستوى غير صحيح'); 
        return; 
    }

    const tierInfo = TIERS[choice];
    const name = prompt('👤 أدخل اسمك:');
    if (!name) return;
    const email = prompt('✉️ أدخل بريدك الإلكتروني:');
    if (!email) return;
    const location = prompt('📍 أدخل موقعك:') || 'غير محدد';
    const website = prompt('🔗 رابط موقعك (اختياري):') || '';
    const image = prompt('🖼️ رابط الصورة (اختياري):') || `https://picsum.photos/seed/${Date.now()}/100/100`;

    const method = prompt('💳 طريقة الدفع:\n1. PayPal\n2. Stripe\n3. IBAN\n\nأدخل الرقم (1-3):');
    if (!method || !['1','2','3'].includes(method)) { 
        alert('❌ طريقة غير صحيحة'); 
        return; 
    }

    const methods = ['PayPal','Stripe','IBAN'];
    alert(`✅ جارٍ التحويل إلى ${methods[parseInt(method)-1]}\nالمبلغ: $${tierInfo.price}`);

    const newMember = {
        id: `m${Date.now()}`,
        name, email, location, tier: choice, website, image,
        message: `مرحباً، أنا ${name} من ${location}`,
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
    
    alert(`🎉 تم الاشتراك بنجاح!\nالمستوى: ${tierInfo.label} ${tierInfo.name}\nالمبلغ: $${tierInfo.price}`);
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
        tr.innerHTML = `
            <td>${m.name}</td>
            <td>${m.email}</td>
            <td><span style="color:${tierInfo.color}">${tierInfo.label} ${tierInfo.name}</span></td>
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
    updateGridStats();
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

// ===== الترجمة =====
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // تحديث النصوص البسيطة (يمكن توسيعها)
    const texts = {
        ar: { search: '🔎 بحث عن مشترك...', all: 'جميع المستويات' },
        en: { search: '🔎 Search members...', all: 'All Tiers' },
        fr: { search: '🔎 Rechercher...', all: 'Tous les niveaux' },
        es: { search: '🔎 Buscar...', all: 'Todos los niveles' },
        de: { search: '🔎 Suchen...', all: 'Alle Stufen' }
    };
    
    const searchInput = document.getElementById('searchInput');
    const filterTier = document.getElementById('filterTier');
    
    if (searchInput && texts[lang]) {
        searchInput.placeholder = texts[lang].search;
    }
    if (filterTier && texts[lang]) {
        filterTier.options[0].text = texts[lang].all;
    }
    
    // إعادة إنشاء المشتركين باللغة الجديدة
    members = generateVirtualMembers(500);
    saveData();
    
    if (virtualGrid) virtualGrid.reset();
    renderSponsors();
    renderMembersTable();
    updateStats();
    updateRoyalBackground();
}

// ===== تهيئة الموقع =====
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
            liveClock.textContent = now.toLocaleTimeString('ar-EG');
        }
    }, 1000);

    // ===== تهيئة الشبكة =====
    if (gridCanvas) {
        virtualGrid = new VirtualGrid(gridCanvas, 1000000);
    }

    // ===== أحداث البحث والفلترة =====
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

    // ===== التحكم بالزوم =====
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

    function applyZoom() {
        const size = Math.max(30, 60 * currentZoom);
        document.querySelectorAll('.pixel-cell').forEach(cell => {
            cell.style.minHeight = size + 'px';
            cell.style.fontSize = (size * 0.015) + 'rem';
        });
    }

    // ===== أزرار اللغة =====
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    // ===== تبديل الثيم =====
    document.getElementById('themeToggle')?.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        this.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // تحميل الثيم المحفوظ
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        const toggle = document.getElementById('themeToggle');
        if (toggle) toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // ===== الشاشة الكاملة =====
    document.getElementById('fullscreenBtn')?.addEventListener('click', function() {
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

    document.addEventListener('fullscreenchange', () => {
        const btn = document.getElementById('fullscreenBtn');
        if (btn) {
            btn.innerHTML = document.fullscreenElement ? 
                '<i class="fas fa-compress"></i>' : 
                '<i class="fas fa-expand"></i>';
        }
    });

    // ===== زر العودة للأعلى =====
    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
        window.addEventListener('scroll', () => {
            backBtn.classList.toggle('visible', window.scrollY > 300);
        });
        backBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== زر الدخول المخفي =====
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

    // ===== الدخول إلى لوحة التحكم =====
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

    // ===== تبويبات =====
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });

    // ===== إضافة مشترك =====
    document.getElementById('addMemberBtn')?.addEventListener('click', function() {
        const name = prompt('👤 اسم المشترك:');
        if (!name) return;
        const email = prompt('✉️ البريد:');
        if (!email) return;
        const location = prompt('📍 الموقع:') || 'غير محدد';
        const tier = prompt('🏷️ المستوى (normal/silver/gold/royal):') || 'normal';
        if (!TIERS[tier]) { alert('❌ مستوى غير صحيح'); return; }
        const image = prompt('🖼️ رابط الصورة:') || `https://picsum.photos/seed/${Date.now()}/100/100`;

        members.push({
            id: `m${Date.now()}`,
            name, email, location, tier, image,
            website: '', message: `مرحباً، أنا ${name}`,
            isRoyal: tier === 'royal'
        });

        totalRevenue += TIERS[tier].price;
        saveData();
        renderMembersTable();
        if (virtualGrid) virtualGrid.reset();
        updateStats();
        updateRoyalBackground();
        alert('✅ تم إضافة المشترك');
    });

    // ===== تصدير =====
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

    // ===== تحديث الجدول =====
    document.getElementById('refreshMembersBtn')?.addEventListener('click', function() {
        renderMembersTable();
        updateStats();
        alert('✅ تم تحديث البيانات');
    });

    // ===== إضافة راعي =====
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

    // ===== إعدادات الدفع =====
    document.getElementById('savePaymentSettings')?.addEventListener('click', function() {
        localStorage.setItem('paypal', document.getElementById('paypalSetting').value);
        localStorage.setItem('stripe', document.getElementById('stripeSetting').value);
        localStorage.setItem('iban', document.getElementById('ibanSetting').value);
        alert('✅ تم حفظ إعدادات الدفع');
    });

    // ===== إعدادات المدير =====
    document.getElementById('saveSettingsBtn')?.addEventListener('click', function() {
        localStorage.setItem('adminEmail', document.getElementById('adminEmailSetting').value);
        localStorage.setItem('adminName', document.getElementById('adminNameSetting').value);
        alert('✅ تم حفظ إعدادات المدير');
    });

    // ===== تغيير كلمة السر =====
    document.getElementById('changePasswordBtn')?.addEventListener('click', function() {
        const pass = document.getElementById('newPassword').value.trim();
        if (pass.length < 4) { alert('❌ 4 أحرف على الأقل'); return; }
        localStorage.setItem('adminPassword', pass);
        alert('✅ تم تغيير كلمة السر');
        document.getElementById('newPassword').value = '';
    });

    // ===== الاقتراحات =====
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
        if (suggestions.length === 0) {
            list.innerHTML = '<p class="empty-msg">لا توجد اقتراحات حالياً</p>';
            return;
        }
        list.innerHTML = suggestions.slice().reverse().map(s => `
            <div class="suggestion-item">
                <strong>${s.name}</strong> (${s.email}) - ${s.date}
                <p>${s.text}</p>
            </div>
        `).join('');
    }

    // ===== رعاة الدفع =====
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
            if (!method || !['1','2','3'].includes(method)) { 
                alert('❌ طريقة غير صحيحة'); 
                return; 
            }
            
            const methods = ['PayPal','Stripe','IBAN'];
            alert(`✅ جارٍ التحويل إلى ${methods[parseInt(method)-1]}\nالمبلغ: $${amount}`);
            
            sponsors.push({ name, link, amount: parseInt(amount), duration: plan });
            saveData();
            renderSponsorList();
            renderSponsors();
            alert(`🎉 تمت الرعاية بنجاح!\nالشركة: ${name}\nالمبلغ: $${amount}\nالمدة: ${planMap[plan]}`);
        });
    });

    // ===== تهيئة العناصر =====
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

    // إخفاء شاشة التحميل
    setTimeout(() => {
        const loading = document.getElementById('loadingScreen');
        if (loading) loading.classList.add('hidden');
    }, 1500);

    console.log('🚀 مليون مربع - تم التحميل بنجاح');
    console.log(`👥 المشتركين: ${members.length}`);
    console.log(`💰 الإيرادات: $${totalRevenue}`);
    console.log(`📦 المربعات: 1,000,000 (تحميل تدريجي)`);
    console.log(`🔐 لوحة التحكم: انقر مرتين على زر 🔐`);
});
