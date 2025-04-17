/* 
 * admin-scripts.js - Üstün Başarı Akademisi Yönetim Paneli Scriptleri
 */

document.addEventListener('DOMContentLoaded', function() {
    // Login işlemleri
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.getElementById('loginContainer');
    const dashboardContainer = document.getElementById('dashboardContainer');
    const logoutButton = document.getElementById('logoutButton');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Demo amaçlı basit doğrulama
            if (username === 'admin' && password === 'admin123') {
                loginContainer.style.display = 'none';
                dashboardContainer.style.display = 'flex';
                
                // Kullanıcı bilgilerini localStorage'a kaydet
                localStorage.setItem('adminLoggedIn', 'true');
            } else {
                alert('Hatalı kullanıcı adı veya şifre!');
            }
        });
    }

    // Sayfa yüklendiğinde oturum kontrolü
    if (localStorage.getItem('adminLoggedIn') === 'true' && loginContainer) {
        loginContainer.style.display = 'none';
        dashboardContainer.style.display = 'flex';
    }

    // Çıkış işlemi
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('adminLoggedIn');
            dashboardContainer.style.display = 'none';
            loginContainer.style.display = 'flex';
        });
    }

    // Menü geçişleri
    const menuItems = document.querySelectorAll('.admin-menu-item');
    const sections = document.querySelectorAll('.admin-section');

    menuItems.forEach(item => {
        if (!item.id || item.id !== 'logoutButton') {
            item.addEventListener('click', function() {
                const target = this.getAttribute('data-target');
                
                // Aktif menü öğesini güncelle
                menuItems.forEach(menuItem => {
                    if (menuItem.id !== 'logoutButton') {
                        menuItem.classList.remove('active');
                    }
                });
                this.classList.add('active');
                
                // İlgili bölümü göster
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                document.getElementById(`${target}-section`).classList.add('active');
            });
        }
    });

    // Mobil menü toggle
    const menuToggle = document.querySelector('.admin-menu-toggle');
    const sidebar = document.querySelector('.admin-sidebar');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    // Tıklama dışında menüyü kapat (mobil)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Program düzenleme ve silme işlemleri
    setupCrudOperations('programs');
    
    // Şube düzenleme ve silme işlemleri
    setupCrudOperations('branches');

    // İstatistik sayaçları animasyonu
    animateCounters();
});

// CRUD işlemleri için yardımcı fonksiyon
function setupCrudOperations(section) {
    const editButtons = document.querySelectorAll(`#${section}-section .admin-icon-button:nth-child(1)`);
    const deleteButtons = document.querySelectorAll(`#${section}-section .admin-icon-button:nth-child(2)`);
    
    // Düzenleme işlemi
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const card = this.closest('.admin-branch-card');
            
            if (row) {
                const id = row.cells[0].textContent;
                const name = row.cells[1].textContent;
                alert(`"${name}" düzenleniyor... (ID: ${id})`);
                // Gerçek uygulamada burada düzenleme formu açılacak
            } else if (card) {
                const name = card.querySelector('h3').textContent;
                alert(`"${name}" düzenleniyor...`);
                // Gerçek uygulamada burada düzenleme formu açılacak
            }
        });
    });
    
    // Silme işlemi
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const card = this.closest('.admin-branch-card');
            
            if (row) {
                const id = row.cells[0].textContent;
                const name = row.cells[1].textContent;
                if (confirm(`"${name}" silinecek. Emin misiniz?`)) {
                    row.remove();
                    showNotification(`"${name}" başarıyla silindi.`);
                }
            } else if (card) {
                const name = card.querySelector('h3').textContent;
                if (confirm(`"${name}" silinecek. Emin misiniz?`)) {
                    card.remove();
                    showNotification(`"${name}" başarıyla silindi.`);
                }
            }
        });
    });
}

// Bildirim gösterme fonksiyonu
function showNotification(message) {
    // Bildirim elementi yoksa oluştur
    if (!document.querySelector('.admin-notification')) {
        const notification = document.createElement('div');
        notification.className = 'admin-notification';
        document.body.appendChild(notification);
    }
    
    const notification = document.querySelector('.admin-notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    // 3 saniye sonra bildirim kaybolsun
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// İstatistik sayaçları animasyonu
function animateCounters() {
    const statCards = document.querySelectorAll('.admin-stat-card');
    
    statCards.forEach(card => {
        const statValue = card.querySelector('h3');
        const targetValue = parseInt(statValue.textContent);
        let currentValue = 0;
        const duration = 1500; // ms cinsinden animasyon süresi
        const stepTime = 30; // her adım arasındaki ms cinsinden süre
        const steps = duration / stepTime;
        const increment = targetValue / steps;
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                statValue.textContent = targetValue;
                clearInterval(counter);
            } else {
                statValue.textContent = Math.floor(currentValue);
            }
        }, stepTime);
    });
}

// Grafik oluşturma fonksiyonları (gerçek uygulamada Chart.js gibi bir kütüphane kullanılabilir)
function createCharts() {
    // Bu fonksiyon gerçek bir uygulamada grafikleri oluşturacak
    console.log('Grafikler oluşturuluyor...');
}

// Tarih formatı için yardımcı fonksiyon
function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
}

// Sayfa yüklendiğinde çalışacak ek fonksiyonlar
window.addEventListener('load', function() {
    // Sayfa tamamen yüklendiğinde çalışacak kodlar
    console.log('Yönetim paneli tamamen yüklendi');
    
    // Örnek: Grafikleri oluştur
    createCharts();
});

// CSS ile eklenen stil
const style = document.createElement('style');
style.textContent = `
    .admin-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--primary-color);
        color: white;
        padding: 15px 25px;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 9999;
    }
    
    .admin-notification.show {
        transform: translateY(0);
        opacity: 1;
    }
`;
document.head.appendChild(style);
