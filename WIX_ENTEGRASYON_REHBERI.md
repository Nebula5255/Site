# Wix Entegrasyon Rehberi - Üstün Başarı Akademisi (Güncellenmiş)

Bu rehber, modern web site tasarımınızı Wix platformuna entegre etmek için adım adım talimatlar içerir. Bu doküman, son yapılan güncellemeler ve iyileştirmeler dikkate alınarak hazırlanmıştır.

## İçindekiler
1. [Wix + iframe Entegrasyonu](#wix--iframe-entegrasyonu)
2. [Wix Velo ile Tam Entegrasyon](#wix-velo-ile-tam-entegrasyon)
3. [Birleştirilmiş CSS ve JS Dosyalarının Entegrasyonu](#birleştirilmiş-css-ve-js-dosyalarının-entegrasyonu)
4. [Responsive Tasarım Entegrasyonu](#responsive-tasarım-entegrasyonu)
5. [Dinamik İçerik Koleksiyonları](#dinamik-içerik-koleksiyonları)
6. [Animasyonların Entegrasyonu](#animasyonların-entegrasyonu)
7. [SEO Optimizasyonu](#seo-optimizasyonu)
8. [Mobil Uyumluluk](#mobil-uyumluluk)

## Wix + iframe Entegrasyonu

Bu yöntem, GitHub'a yüklediğiniz modern web sitesini Wix içinde iframe olarak görüntülemenizi sağlar.

### Adımlar:

1. **GitHub'a Yükleme:**
   - Modern web site dosyalarını GitHub repository'nize yükleyin (https://github.com/Nebula5255/Site)
   - GitHub Pages'i etkinleştirin (Settings > Pages)
   - Siteniz https://nebula5255.github.io/Site/ adresinde yayınlanacaktır

2. **Wix'te iframe Ekleme:**
   - Wix Editor'da yeni bir sayfa oluşturun
   - "Add" > "Embed" > "HTML iframe" seçin
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

3. **Avantajları ve Dezavantajları:**
   - ✅ Hızlı ve kolay kurulum
   - ✅ Modern tasarımı olduğu gibi korur
   - ✅ Birleştirilmiş CSS ve JS dosyaları sayesinde daha hızlı yükleme
   - ❌ Wix ve iframe içeriği arasında sınırlı etkileşim
   - ❌ SEO açısından optimal değil
   - ❌ İçerik güncellemeleri için GitHub'a erişim gerektirir

## Wix Velo ile Tam Entegrasyon

Bu yöntem, modern tasarımınızı Wix'in kendi yapısına uyarlayarak tam entegrasyon sağlar.

### Adımlar:

1. **Wix'te Yeni Site Oluşturma:**
   - Wix.com'da hesabınıza giriş yapın
   - "Create New Site" seçeneğini tıklayın
   - Boş bir şablon seçin ("Start from Scratch")

2. **Velo Geliştirme Ortamını Etkinleştirme:**
   - Site menüsünden "Dev Mode" veya "Velo by Wix" seçeneğini tıklayın
   - "Turn on Dev Mode" butonuna tıklayın

3. **Sayfa Yapısını Oluşturma:**
   - Ana Sayfa, Programlar, Şubeler, Hakkımızda, İletişim sayfaları oluşturun
   - Her program için ayrı sayfalar ekleyin (YKS, LGS, İngilizce vb.)

4. **Tasarım Elementlerini Ekleme:**
   - Modern tasarımınızdaki renk şemasını Wix tema ayarlarına uygulayın
   - Font stillerini ve boyutlarını ayarlayın
   - Header ve footer bölümlerini oluşturun

## Birleştirilmiş CSS ve JS Dosyalarının Entegrasyonu

Son güncellemelerle birlikte, tüm CSS ve JavaScript kodları tek dosyada birleştirilmiştir. Bu, Wix entegrasyonunu daha kolay ve performanslı hale getirir.

### Adımlar:

1. **Birleştirilmiş CSS Dosyasını Ekleme:**
   - Velo Code Panel'de "Public" klasörü altında yeni bir CSS dosyası oluşturun (all-styles.css)
   - Modern web sitenizdeki all-styles.css dosyasının içeriğini bu dosyaya kopyalayın
   - Sayfanıza CSS dosyasını eklemek için şu kodu kullanın:
   ```javascript
   import {fetch} from 'wix-fetch';
   
   $w.onReady(function () {
       const link = document.createElement('link');
       link.rel = 'stylesheet';
       link.href = '/all-styles.css';
       document.head.appendChild(link);
   });
   ```

2. **Birleştirilmiş JavaScript Dosyasını Ekleme:**
   - Velo Code Panel'de "Public" klasörü altında yeni bir JS dosyası oluşturun (all-scripts.js)
   - Modern web sitenizdeki all-scripts.js dosyasının içeriğini bu dosyaya kopyalayın
   - Sayfanıza JS dosyasını eklemek için şu kodu kullanın:
   ```javascript
   import {fetch} from 'wix-fetch';
   
   $w.onReady(function () {
       const script = document.createElement('script');
       script.src = '/all-scripts.js';
       document.body.appendChild(script);
   });
   ```

3. **Avantajları:**
   - Daha az HTTP isteği sayesinde daha hızlı sayfa yükleme
   - Daha kolay bakım ve güncelleme
   - Daha temiz kod yapısı

## Responsive Tasarım Entegrasyonu

Son güncellemelerle birlikte, responsive tasarım özellikleri önemli ölçüde geliştirilmiştir. Bu bölüm, bu iyileştirmelerin Wix'e nasıl entegre edileceğini açıklar.

### Adımlar:

1. **Responsive CSS Kurallarını Ekleme:**
   - all-styles.css dosyasındaki tüm medya sorguları (media queries) Wix'in responsive davranışını geliştirmek için kullanılabilir
   - Özellikle aşağıdaki ekran boyutları için optimize edilmiş kurallar bulunmaktadır:
     - 1200px ve altı (büyük ekranlar)
     - 992px ve altı (tablet yatay)
     - 768px ve altı (tablet dikey)
     - 576px ve altı (mobil)

2. **Dokunmatik Cihaz Optimizasyonları:**
   - Dokunmatik cihazlar için eklenen özel CSS kuralları, Wix'in mobil deneyimini iyileştirir
   - Tüm tıklanabilir öğeler minimum 44px yüksekliğe sahiptir
   - Butonlar ve menü öğeleri arasında yeterli boşluk bırakılmıştır

3. **Wix Mobile Editor ile Entegrasyon:**
   - Wix Editor'da "Mobile View" seçeneğini tıklayın
   - Elementlerin mobil görünümünü düzenleyin
   - CSS medya sorgularındaki değişiklikleri Wix'in mobil düzenlemelerine yansıtın

4. **Responsive Test:**
   - Farklı cihazlarda ve ekran boyutlarında sitenizi test edin
   - Chrome DevTools veya benzeri araçları kullanarak responsive davranışı doğrulayın

## Dinamik İçerik Koleksiyonları

Wix'in veritabanı özelliklerini kullanarak dinamik içerik yönetimi oluşturabilirsiniz.

### Adımlar:

1. **Koleksiyonlar Oluşturma:**
   - Wix Dashboard > Content Manager > Add Collection
   - Aşağıdaki koleksiyonları oluşturun:
     - Programlar (YKS, LGS, İngilizce vb.)
     - Şubeler
     - Öğretmenler
     - Başarı Hikayeleri
     - SSS (Sıkça Sorulan Sorular)

2. **Koleksiyon Yapıları:**
   - **Programlar Koleksiyonu:**
     - Başlık (metin)
     - Açıklama (zengin metin)
     - Görsel (resim)
     - Hedef Kitle (metin)
     - Program Süresi (metin)
     - Özellikler (liste)
     - Müfredat (zengin metin)
     - Fiyat (sayı)

   - **Şubeler Koleksiyonu:**
     - Şube Adı (metin)
     - Adres (metin)
     - Telefon (metin)
     - E-posta (metin)
     - Çalışma Saatleri (metin)
     - Konum (adres)
     - Görsel (resim)

3. **Dinamik Sayfalar Oluşturma:**
   - Wix'in "Dynamic Pages" özelliğini kullanarak her program için otomatik sayfalar oluşturun
   - URL yapısını düzenleyin (örn: /programlar/yks-hazirlik)

4. **Veri Bağlantıları:**
   - Sayfa elementlerini koleksiyon verilerine bağlayın
   - Dinamik listeler ve galeriler oluşturun

## Animasyonların Entegrasyonu

Wix Velo kullanarak modern animasyonları entegre edebilirsiniz.

### Adımlar:

1. **JavaScript Kütüphanelerini Ekleme:**
   - Birleştirilmiş all-scripts.js dosyası tüm animasyon kodlarını içerir
   - Sayfanıza JS dosyasını eklemek için yukarıdaki JavaScript entegrasyon adımlarını izleyin

2. **Scroll Animasyonları:**
   - Elementlere data-animation öznitelikleri ekleyin
   - Intersection Observer API kullanarak scroll animasyonlarını tetikleyin
   - Örnek kod:
   ```javascript
   // Animate elements when they come into view
   const animateOnScroll = function() {
       const elements = document.querySelectorAll('.animate-on-scroll');
       
       elements.forEach(element => {
           const elementPosition = element.getBoundingClientRect().top;
           const windowHeight = window.innerHeight;
           
           if (elementPosition < windowHeight - 50) {
               const animationClass = element.dataset.animation || 'animate-fade-in-up';
               element.classList.add(animationClass);
               
               // Add delay if specified
               if (element.dataset.delay) {
                   element.style.animationDelay = element.dataset.delay + 's';
               }
               
               // Add duration if specified
               if (element.dataset.duration) {
                   element.style.animationDuration = element.dataset.duration + 's';
               }
           }
       });
   };
   
   // Run on page load
   animateOnScroll();
   
   // Run on scroll
   window.addEventListener('scroll', animateOnScroll);
   ```

3. **Hover Efektleri:**
   - CSS hover efektlerini özel CSS dosyanıza ekleyin
   - JavaScript ile interaktif hover efektleri oluşturun

## SEO Optimizasyonu

Wix'in SEO araçlarını kullanarak sitenizi optimize edin.

### Adımlar:

1. **Sayfa Meta Bilgileri:**
   - Her sayfa için başlık, açıklama ve anahtar kelimeler ekleyin
   - Wix SEO Wiz aracını kullanın

2. **URL Yapısı:**
   - Temiz ve anlaşılır URL'ler oluşturun
   - Türkçe karakterleri düzenleyin

3. **Yapısal Veri:**
   - Schema.org yapısal verilerini ekleyin
   - Eğitim kursu, yerel işletme gibi şemaları kullanın

## Mobil Uyumluluk

Wix'in mobil editörünü kullanarak responsive tasarımı optimize edin.

### Adımlar:

1. **Mobil Görünüm Düzenleme:**
   - Wix Editor'da "Mobile View" seçeneğini tıklayın
   - Elementlerin mobil görünümünü düzenleyin

2. **Responsive Ayarlar:**
   - Farklı ekran boyutları için görünüm ayarlarını yapın
   - Mobil menüyü özelleştirin

3. **Performans Optimizasyonu:**
   - Görselleri optimize edin
   - Sayfa yükleme hızını artırın

---

Bu güncellenmiş rehber, modern web site tasarımınızı Wix platformuna entegre etmeniz için temel adımları içerir. Son yapılan güncellemeler (birleştirilmiş CSS/JS dosyaları ve geliştirilmiş responsive tasarım) dikkate alınarak hazırlanmıştır. Daha detaylı bilgi veya yardım için lütfen iletişime geçin.
