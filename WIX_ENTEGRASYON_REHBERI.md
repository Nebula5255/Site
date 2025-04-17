# Wix Entegrasyon Rehberi - Üstün Başarı Akademisi

Bu rehber, modern web sitesi ve yönetim panelini Wix platformuna entegre etmek için adım adım talimatlar içerir.

## İçindekiler
1. [Giriş ve Genel Bakış](#giriş-ve-genel-bakış)
2. [Wix + iframe Entegrasyonu](#wix--iframe-entegrasyonu)
3. [Wix Velo ile Tam Entegrasyon](#wix-velo-ile-tam-entegrasyon)
4. [Yönetim Paneli Entegrasyonu](#yönetim-paneli-entegrasyonu)
5. [İçerik Yönetimi Entegrasyonu](#içerik-yönetimi-entegrasyonu)
6. [Sorun Giderme](#sorun-giderme)

## Giriş ve Genel Bakış

Üstün Başarı Akademisi için hazırlanan modern web sitesi ve yönetim paneli, iki farklı yöntemle Wix platformuna entegre edilebilir:

1. **iframe Entegrasyonu:** Hızlı ve kolay kurulum, ancak sınırlı etkileşim
2. **Velo Tam Entegrasyonu:** Daha kapsamlı entegrasyon, Wix'in tüm özelliklerinden faydalanma

Her iki yöntem de aşağıda detaylı olarak açıklanmıştır.

## Wix + iframe Entegrasyonu

Bu yöntem, GitHub'a yüklediğiniz modern web sitesini ve yönetim panelini Wix içinde iframe olarak görüntülemenizi sağlar.

### Adımlar:

1. **GitHub'a Yükleme:**
   - Modern web site dosyalarını GitHub repository'nize yükleyin (https://github.com/Nebula5255/Site)
   - GitHub Pages'i etkinleştirin (Settings > Pages)
   - Siteniz https://nebula5255.github.io/Site/ adresinde yayınlanacaktır

2. **Wix'te Ana Site için iframe Ekleme:**
   - Wix Editor'da yeni bir sayfa oluşturun
   - "Ekle" > "Yerleştir" > "HTML iframe" seçin
   - Aşağıdaki kodu yapıştırın:
   ```html
   <iframe 
     src="https://nebula5255.github.io/Site/" 
     width="100%" 
     height="800" 
     frameborder="0" 
     scrolling="yes">
   </iframe>
   ```
   - Boyutları ve diğer ayarları ihtiyacınıza göre düzenleyin

3. **Wix'te Yönetim Paneli için iframe Ekleme:**
   - Wix Editor'da "Yönetim" adında yeni bir sayfa oluşturun
   - Bu sayfaya erişimi kısıtlayın (Sayfa Ayarları > Erişim Kontrolü > "Sadece Belirli Kişiler")
   - "Ekle" > "Yerleştir" > "HTML iframe" seçin
   - Aşağıdaki kodu yapıştırın:
   ```html
   <iframe 
     src="https://nebula5255.github.io/Site/admin/" 
     width="100%" 
     height="800" 
     frameborder="0" 
     scrolling="yes">
   </iframe>
   ```

4. **Avantajları ve Dezavantajları:**
   - ✅ Hızlı ve kolay kurulum
   - ✅ Modern tasarımı ve yönetim panelini olduğu gibi korur
   - ❌ Wix ve iframe içeriği arasında sınırlı etkileşim
   - ❌ SEO açısından optimal değil
   - ❌ İçerik güncellemeleri için GitHub'a erişim gerektirir

## Wix Velo ile Tam Entegrasyon

Bu yöntem, modern tasarımınızı ve yönetim panelinizi Wix'in kendi yapısına uyarlayarak tam entegrasyon sağlar.

### Adımlar:

1. **Wix'te Yeni Site Oluşturma:**
   - Wix.com'da hesabınıza giriş yapın
   - "Yeni Site Oluştur" seçeneğini tıklayın
   - Boş bir şablon seçin ("Sıfırdan Başla")

2. **Velo Geliştirme Ortamını Etkinleştirme:**
   - Site menüsünden "Geliştirici Modu" veya "Velo by Wix" seçeneğini tıklayın
   - "Geliştirici Modunu Aç" butonuna tıklayın

3. **Dosya Yapısını Oluşturma:**
   - Sol menüde "Arka Uç Kodu" bölümünde "Public" klasörü oluşturun
   - CSS ve JS dosyalarını bu klasöre ekleyin:
     - `unified-styles.css`
     - `animations.css`
     - `animation-effects.js`
     - `mobile-nav.js`

4. **masterPage.js Dosyasını Düzenleme:**
   - "Sayfa Kodu" bölümünde "masterPage.js" dosyasını açın
   - Aşağıdaki kodu dosyanın en üstüne ekleyin:
   ```javascript
   import {fetch} from 'wix-fetch';

   $w.onReady(function() {
       // CSS dosyalarını ekle
       const styleLinks = [
           '/unified-styles.css',
           '/animations.css'
       ];
       
       styleLinks.forEach(href => {
           const link = document.createElement('link');
           link.rel = 'stylesheet';
           link.href = href;
           document.head.appendChild(link);
       });
       
       // JavaScript dosyalarını ekle
       const scriptSrcs = [
           '/animation-effects.js',
           '/mobile-nav.js'
       ];
       
       scriptSrcs.forEach(src => {
           const script = document.createElement('script');
           script.src = src;
           document.body.appendChild(script);
       });
   });
   ```

## Yönetim Paneli Entegrasyonu

Yönetim panelini Wix'e entegre etmek için iki yaklaşım bulunmaktadır:

### 1. Özel Sayfa Olarak Entegrasyon:

1. **Yönetim Sayfası Oluşturma:**
   - Wix Editor'da "Yönetim" adında yeni bir sayfa oluşturun
   - Bu sayfaya erişimi kısıtlayın (Sayfa Ayarları > Erişim Kontrolü > "Sadece Belirli Kişiler")

2. **Yönetim Paneli Dosyalarını Ekleme:**
   - "Public" klasörüne aşağıdaki dosyaları ekleyin:
     - `admin-styles.css`
     - `admin-scripts.js`
     - `content-editor.css`
     - `content-editor.js`

3. **Yönetim Sayfasına Kod Ekleme:**
   - "Sayfa Kodu" bölümünde "yonetim.js" dosyasını açın
   - Aşağıdaki kodu ekleyin:
   ```javascript
   import {fetch} from 'wix-fetch';
   import wixUsers from 'wix-users';

   $w.onReady(function() {
       // Kullanıcı giriş kontrolü
       if (!wixUsers.currentUser.loggedIn) {
           // Giriş yapmamış kullanıcıları giriş sayfasına yönlendir
           wixLocation.to('/giris');
           return;
       }
       
       // Admin CSS dosyalarını ekle
       const adminStyleLinks = [
           '/admin-styles.css',
           '/content-editor.css'
       ];
       
       adminStyleLinks.forEach(href => {
           const link = document.createElement('link');
           link.rel = 'stylesheet';
           link.href = href;
           document.head.appendChild(link);
       });
       
       // Admin JS dosyalarını ekle
       const adminScriptSrcs = [
           '/admin-scripts.js',
           '/content-editor.js'
       ];
       
       adminScriptSrcs.forEach(src => {
           const script = document.createElement('script');
           script.src = src;
           document.body.appendChild(script);
       });
       
       // Admin paneli HTML yapısını oluştur
       const adminContainer = document.createElement('div');
       adminContainer.id = 'adminContainer';
       adminContainer.innerHTML = `
           <!-- Yönetim paneli HTML yapısı buraya gelecek -->
           <div class="admin-dashboard">
               <!-- Sidebar -->
               <!-- Content -->
           </div>
       `;
       
       document.body.appendChild(adminContainer);
   });
   ```

### 2. Wix Dashboard Entegrasyonu:

1. **Wix Dashboard Uygulaması Oluşturma:**
   - Velo'da "Dashboard" klasörü oluşturun
   - Bu klasöre admin panel dosyalarını ekleyin

2. **Backend Entegrasyonu:**
   - Wix'in veritabanı koleksiyonlarını oluşturun:
     - Sayfalar
     - Blog Yazıları
     - Duyurular
     - Slider Öğeleri
     - Medya

3. **Velo Kodları ile Veritabanı Bağlantısı:**
   - Admin panelindeki form işlemlerini Wix veritabanına bağlayın
   - Örnek kod:
   ```javascript
   import wixData from 'wix-data';

   // Sayfa kaydetme fonksiyonu
   export function savePage(pageData) {
       return wixData.insert("Sayfalar", {
           title: pageData.title,
           content: pageData.content,
           status: pageData.status,
           url: pageData.url,
           lastUpdated: new Date()
       });
   }

   // Sayfa listeleme fonksiyonu
   export function getPages() {
       return wixData.query("Sayfalar")
           .find()
           .then((results) => {
               return results.items;
           });
   }
   ```

## İçerik Yönetimi Entegrasyonu

İçerik yönetimi özelliklerini Wix'e entegre etmek için:

1. **Wix Koleksiyonları Oluşturma:**
   - "Veritabanı" bölümünde aşağıdaki koleksiyonları oluşturun:
     - Sayfalar (title, content, status, url, lastUpdated)
     - BlogYazilari (title, content, category, author, date, status)
     - Duyurular (title, content, date, priority, status)
     - SliderOgeleri (title, content, image, link, order, status)

2. **İçerik Editörü Entegrasyonu:**
   - content-editor.js dosyasındaki AJAX fonksiyonlarını Wix Velo API çağrılarına dönüştürün:
   ```javascript
   // Örnek: İçerik kaydetme fonksiyonu
   function saveContentData(formData) {
       // Wix Velo API çağrısı
       import {savePage, saveBlogPost, saveAnnouncement, saveSlider} from 'backend/contentManager';
       
       if (formData.type === 'page') {
           savePage(formData)
               .then((results) => {
                   showNotification('Sayfa başarıyla kaydedildi.');
               })
               .catch((error) => {
                   console.error('Hata:', error);
                   showNotification('Hata: ' + error.message, 'error');
               });
       } else if (formData.type === 'blog') {
           saveBlogPost(formData)
               .then((results) => {
                   showNotification('Blog yazısı başarıyla kaydedildi.');
               })
               .catch((error) => {
                   console.error('Hata:', error);
                   showNotification('Hata: ' + error.message, 'error');
               });
       }
       // Diğer içerik tipleri için benzer kodlar...
   }
   ```

3. **Medya Yönetimi Entegrasyonu:**
   - Wix'in medya API'sini kullanarak dosya yükleme işlemlerini entegre edin:
   ```javascript
   import {mediaManager} from 'wix-media-backend';

   // Dosya yükleme fonksiyonu
   export function uploadMedia(file) {
       return mediaManager.upload(file)
           .then((mediaItem) => {
               return mediaItem;
           });
   }
   ```

## Sorun Giderme

### Genel Sorunlar ve Çözümleri:

1. **CSS Çakışmaları:**
   - Sorun: Wix'in kendi CSS'leri ile özel CSS'ler çakışabilir
   - Çözüm: CSS sınıflarını benzersiz öneklerle yeniden adlandırın (örn: `uba-header` gibi)

2. **JavaScript Hataları:**
   - Sorun: Konsol hatalarına dikkat edin
   - Çözüm: Wix Velo'nun JavaScript API'lerini kullanırken doğru import ifadelerini kullandığınızdan emin olun

3. **Velo Erişim Sorunları:**
   - Sorun: Velo'ya erişemiyorsanız
   - Çözüm: Premium Wix planına sahip olduğunuzdan emin olun, tarayıcınızı yenileyin veya farklı bir tarayıcı deneyin

4. **iframe Yükleme Sorunları:**
   - Sorun: iframe içeriği yüklenmiyorsa
   - Çözüm: GitHub Pages'in doğru şekilde yapılandırıldığından emin olun, URL'yi kontrol edin

### Yardım Alma:

Entegrasyon sırasında sorunlarla karşılaşırsanız:

1. Wix Yardım Merkezi'ni ziyaret edin: https://support.wix.com/
2. Wix Velo Forum'unu kullanın: https://www.wix.com/velo/forum
3. GitHub repository üzerinden iletişime geçin

---

Bu rehber, modern web sitenizi ve yönetim panelinizi Wix platformuna entegre etmeniz için temel adımları içerir. Daha detaylı bilgi veya yardım için lütfen iletişime geçin.
