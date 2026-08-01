// ===== إظهار/إخفاء شاشة التحميل =====
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1500);
    }
}

// ===== زر العودة للأعلى =====
function setupBackToTop() {
    const button = document.getElementById('backToTop');
    if (!button) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== تبديل الوضع (Dark/Light) =====
function setupThemeToggle() {
    const button = document.getElementById('themeToggle');
    if (!button) return;
    
    // تحميل الثيم المحفوظ
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        button.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    button.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        button.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

// ===== زر الشاشة الكاملة =====
function setupFullscreen() {
    const button = document.getElementById('fullscreenBtn');
    if (!button) return;
    
    button.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            button.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                button.innerHTML = '<i class="fas fa-expand"></i>';
            }
        }
    });
    
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            button.innerHTML = '<i class="fas fa-expand"></i>';
        }
    });
}

// ===== تحديث إحصائيات الجريد =====
function updateGridStats() {
    const memberCount = members ? members.length : 0;
    const gridMemberCount = document.getElementById('gridMemberCount');
    const gridAvailableCount = document.getElementById('gridAvailableCount');
    
    if (gridMemberCount) gridMemberCount.textContent = memberCount;
    if (gridAvailableCount) gridAvailableCount.textContent = (1000000 - memberCount).toLocaleString();
}

// ===== تحديث إحصائيات الجدول =====
function updateTableStats() {
    const tableTotal = document.getElementById('tableTotalMembers');
    if (tableTotal) tableTotal.textContent = members.length;
}

// ===== تحسين البحث مع أيقونة =====
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.style.borderColor = 'var(--secondary)';
    });
    
    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.style.borderColor = 'var(--border)';
    });
}

// ===== تهيئة جميع التحسينات =====
document.addEventListener('DOMContentLoaded', function() {
    // إخفاء شاشة التحميل
    hideLoadingScreen();
    
    // إعداد الأزرار
    setupBackToTop();
    setupThemeToggle();
    setupFullscreen();
    setupSearch();
    
    // تحديث الإحصائيات
    setTimeout(() => {
        updateGridStats();
        updateTableStats();
    }, 2000);
});

// ===== تحديث عند تغيير البيانات =====
// استدعاء هذه الدوال بعد أي تغيير في البيانات
function refreshUI() {
    updateGridStats();
    updateTableStats();
}

// ===== إضافة تأثيرات حركية للمربعات =====
function addCellAnimations() {
    document.querySelectorAll('.pixel-cell').forEach((cell, index) => {
        cell.style.animationDelay = `${(index % 20) * 0.02}s`;
        cell.classList.add('cell-appear');
    });
}

// ===== إظهار رسائل نجاح أنيقة =====
function showSuccessToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification success';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== إظهار رسائل خطأ أنيقة =====
function showErrorToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification error';
    toast.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== إضافة التصميم للتوست =====
const toastStyles = `
.toast-notification {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    padding: 14px 28px;
    border-radius: 14px;
    font-weight: 600;
    font-size: 0.95rem;
    z-index: 9999;
    opacity: 0;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.3);
}
.toast-notification.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}
.toast-notification.success {
    background: linear-gradient(135deg, #10B981, #059669);
    color: white;
}
.toast-notification.error {
    background: linear-gradient(135deg, #EF4444, #DC2626);
    color: white;
}
.toast-notification i {
    font-size: 1.2rem;
}
`;

// إضافة التصميم
const styleSheet = document.createElement('style');
styleSheet.textContent = toastStyles;
document.head.appendChild(styleSheet);
