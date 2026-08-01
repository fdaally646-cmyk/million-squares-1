// ===== دوال لوحة التحكم المُحسّنة =====

// ===== عرض المشتركين في لوحة التحكم مع تمييز =====
function renderMembersTable() {
    if (!membersTableBody) return;
    membersTableBody.innerHTML = '';
    
    // الحصول على قيم الفلترة
    var searchText = document.getElementById('adminSearchInput') ? document.getElementById('adminSearchInput').value.toLowerCase() : '';
    var filterType = document.getElementById('adminFilterType') ? document.getElementById('adminFilterType').value : 'all';
    var filterTier = document.getElementById('adminFilterTier') ? document.getElementById('adminFilterTier').value : 'all';
    var sortBy = document.getElementById('adminSortBy') ? document.getElementById('adminSortBy').value : 'name';
    
    // تصفية المشتركين
    var filteredMembers = members.filter(function(m) {
        var matchSearch = m.name.toLowerCase().includes(searchText) || 
                         m.email.toLowerCase().includes(searchText) || 
                         m.location.toLowerCase().includes(searchText);
        var matchType = filterType === 'all' || (filterType === 'real' && !m.isVirtual) || (filterType === 'virtual' && m.isVirtual);
        var matchTier = filterTier === 'all' || m.tier === filterTier;
        return matchSearch && matchType && matchTier;
    });
    
    // ترتيب المشتركين
    filteredMembers.sort(function(a, b) {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'date') return new Date(b.joinDate) - new Date(a.joinDate);
        if (sortBy === 'tier') {
            var order = { royal: 0, gold: 1, silver: 2, normal: 3 };
            return (order[a.tier] || 4) - (order[b.tier] || 4);
        }
        if (sortBy === 'type') return (a.isVirtual ? 1 : 0) - (b.isVirtual ? 1 : 0);
        return 0;
    });
    
    // عرض المشتركين
    filteredMembers.forEach(function(m) {
        var tr = document.createElement('tr');
        var tierInfo = TIERS[m.tier];
        var tierName = tierInfo.name[currentLang] || tierInfo.name.ar;
        
        // إضافة كلاس للتمييز
        tr.className = m.isVirtual ? 'virtual-member' : 'real-member';
        
        var typeBadge = m.isVirtual ? 
            '<span class="member-type-badge virtual">🔄 ' + (currentLang === 'ar' ? 'افتراضي' : 'Virtual') + '</span>' : 
            '<span class="member-type-badge real">✅ ' + (currentLang === 'ar' ? 'حقيقي' : 'Real') + '</span>';
        
        var index = members.indexOf(m);
        tr.innerHTML = 
            '<td><strong>' + m.name + '</strong></td>' +
            '<td>' + m.email + '</td>' +
            '<td><span style="color:' + tierInfo.color + ';font-weight:700">' + tierInfo.label + ' ' + tierName + '</span></td>' +
            '<td>' + m.location + '</td>' +
            '<td>' + typeBadge + '</td>' +
            '<td>' + (m.joinDate || (currentLang === 'ar' ? 'غير محدد' : 'Unknown')) + '</td>' +
            '<td>' +
                '<div class="action-buttons">' +
                    '<button class="action-btn edit" data-index="' + index + '" title="' + (currentLang === 'ar' ? 'تعديل' : 'Edit') + '"><i class="fas fa-edit"></i></button>' +
                    '<button class="action-btn delete" data-index="' + index + '" title="' + (currentLang === 'ar' ? 'حذف' : 'Delete') + '"><i class="fas fa-trash"></i></button>' +
                '</div>' +
            '</td>';
        
        membersTableBody.appendChild(tr);
    });
    
    // تحديث الإحصائيات
    updateAdminStats();
    
    // إضافة أحداث للأزرار
    document.querySelectorAll('.action-btn.edit').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var index = parseInt(this.dataset.index);
            editMember(index);
        });
    });
    
    document.querySelectorAll('.action-btn.delete').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var index = parseInt(this.dataset.index);
            deleteMember(index);
        });
    });
}

// ===== تحديث إحصائيات لوحة التحكم =====
function updateAdminStats() {
    var realCount = 0, virtualCount = 0;
    for (var i = 0; i < members.length; i++) {
        if (members[i].isVirtual) virtualCount++;
        else realCount++;
    }
    var totalCount = members.length;
    var rev = calculateRevenue();
    
    var adminTotalMembers = document.getElementById('adminTotalMembers');
    var adminRealMembers = document.getElementById('adminRealMembers');
    var adminVirtualMembers = document.getElementById('adminVirtualMembers');
    var adminTotalRevenue = document.getElementById('adminTotalRevenue');
    var tableTotalMembers = document.getElementById('tableTotalMembers');
    var tableRealCount = document.getElementById('tableRealCount');
    var tableVirtualCount = document.getElementById('tableVirtualCount');
    var tableRealRevenue = document.getElementById('tableRealRevenue');
    var tableVirtualRevenue = document.getElementById('tableVirtualRevenue');
    
    if (adminTotalMembers) adminTotalMembers.textContent = totalCount;
    if (adminRealMembers) adminRealMembers.textContent = realCount;
    if (adminVirtualMembers) adminVirtualMembers.textContent = virtualCount;
    if (adminTotalRevenue) adminTotalRevenue.textContent = '$' + (rev.real + rev.virtual).toFixed(0);
    if (tableTotalMembers) tableTotalMembers.textContent = totalCount;
    if (tableRealCount) tableRealCount.textContent = realCount;
    if (tableVirtualCount) tableVirtualCount.textContent = virtualCount;
    if (tableRealRevenue) tableRealRevenue.textContent = '$' + rev.real.toFixed(0);
    if (tableVirtualRevenue) tableVirtualRevenue.textContent = '$' + rev.virtual.toFixed(0);
}

// ===== تعديل عضو =====
function editMember(index) {
    var member = members[index];
    var lang = currentLang;
    
    if (!member) return;
    
    var newName = prompt(lang === 'ar' ? '✏️ تعديل اسم المشترك:' : '✏️ Edit member name:', member.name);
    if (newName === null) return;
    if (newName.trim()) member.name = newName.trim();
    
    var newEmail = prompt(lang === 'ar' ? '✏️ تعديل البريد الإلكتروني:' : '✏️ Edit email:', member.email);
    if (newEmail === null) return;
    if (newEmail.trim()) member.email = newEmail.trim();
    
    var newLocation = prompt(lang === 'ar' ? '✏️ تعديل الموقع:' : '✏️ Edit location:', member.location);
    if (newLocation === null) return;
    if (newLocation.trim()) member.location = newLocation.trim();
    
    saveData();
    renderMembersTable();
    renderGrid();
    updateStats();
    alert(lang === 'ar' ? '✅ تم تعديل بيانات المشترك' : '✅ Member data updated');
}

// ===== حذف عضو =====
function deleteMember(index) {
    var member = members[index];
    var lang = currentLang;
    
    if (!member) return;
    
    var confirmMsg = member.isVirtual ? 
        (lang === 'ar' ? 'هذا مشترك افتراضي. هل أنت متأكد من حذفه؟' : 'This is a virtual member. Are you sure?') :
        (lang === 'ar' ? 'هل أنت متأكد من حذف هذا المشترك؟' : 'Are you sure you want to delete this member?');
    
    if (!confirm(confirmMsg)) return;
    
    if (member.isVirtual) {
        virtualRevenue -= TIERS[member.tier].price;
    } else {
        totalRevenue -= TIERS[member.tier].price;
    }
    
    members.splice(index, 1);
    saveData();
    renderMembersTable();
    renderGrid();
    updateStats();
    updateRoyalBackground();
}

// ===== أحداث أدوات التحكم في لوحة التحكم =====
function setupAdminControls() {
    var adminSearch = document.getElementById('adminSearchInput');
    var adminFilterType = document.getElementById('adminFilterType');
    var adminFilterTier = document.getElementById('adminFilterTier');
    var adminSortBy = document.getElementById('adminSortBy');
    
    if (adminSearch) {
        adminSearch.addEventListener('input', function() {
            renderMembersTable();
        });
    }
    
    if (adminFilterType) {
        adminFilterType.addEventListener('change', function() {
            renderMembersTable();
        });
    }
    
    if (adminFilterTier) {
        adminFilterTier.addEventListener('change', function() {
            renderMembersTable();
        });
    }
    
    if (adminSortBy) {
        adminSortBy.addEventListener('change', function() {
            renderMembersTable();
        });
    }
}

// ===== إضافة الترجمات الجديدة =====
// أضف هذه المفاتيح إلى TRANSLATIONS لكل لغة
var newTranslationKeys = {
    ar: {
        admin_search: '🔍 بحث في المشتركين...',
        admin_filter_type: 'فلترة حسب النوع',
        all_types: 'جميع الأنواع',
        sort_type: 'ترتيب حسب النوع',
        join_date: 'تاريخ الانضمام',
        edit: 'تعديل'
    },
    en: {
        admin_search: '🔍 Search members...',
        admin_filter_type: 'Filter by type',
        all_types: 'All types',
        sort_type: 'Sort by type',
        join_date: 'Join date',
        edit: 'Edit'
    },
    fr: {
        admin_search: '🔍 Rechercher des membres...',
        admin_filter_type: 'Filtrer par type',
        all_types: 'Tous les types',
        sort_type: 'Trier par type',
        join_date: "Date d'adhésion",
        edit: 'Modifier'
    },
    es: {
        admin_search: '🔍 Buscar miembros...',
        admin_filter_type: 'Filtrar por tipo',
        all_types: 'Todos los tipos',
        sort_type: 'Ordenar por tipo',
        join_date: 'Fecha de registro',
        edit: 'Editar'
    },
    de: {
        admin_search: '🔍 Mitglieder suchen...',
        admin_filter_type: 'Nach Typ filtern',
        all_types: 'Alle Typen',
        sort_type: 'Nach Typ sortieren',
        join_date: 'Beitrittsdatum',
        edit: 'Bearbeiten'
    }
};

// دمج المفاتيح الجديدة مع الترجمات الموجودة
for (var lang in newTranslationKeys) {
    if (TRANSLATIONS[lang]) {
        for (var key in newTranslationKeys[lang]) {
            TRANSLATIONS[lang][key] = newTranslationKeys[lang][key];
        }
    }
}

// ===== تحديث دالة translatePage =====
// أضف هذه الأسطر في دالة translatePage بعد ترجمة العناصر العادية

// ترجمة خيارات select في لوحة التحكم
document.querySelectorAll('#adminFilterType option[data-i18n], #adminFilterTier option[data-i18n], #adminSortBy option[data-i18n]').forEach(function(opt) {
    var key = opt.dataset.i18n;
    if (translations[key]) {
        opt.textContent = translations[key];
    }
});
