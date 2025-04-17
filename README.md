# Üstün Başarı Akademisi Web Sitesi ve Yönetim Paneli

Bu proje, Üstün Başarı Akademisi için modern, animasyonlu ve responsive bir web sitesi ve kapsamlı bir yönetim paneli içerir.

## Proje İçeriği

Bu paket aşağıdaki bileşenleri içerir:

1. **Modern Web Sitesi**
   - Animasyonlu ve responsive tasarım
   - Tüm programlar için bilgi kartları
   - Şube bilgileri ve iletişim sayfaları
   - Mobil uyumlu navigasyon

2. **Yönetim Paneli**
   - Kullanıcı girişi ve yetkilendirme
   - Gösterge paneli ve istatistikler
   - Program, şube ve öğrenci yönetimi
   - İçerik yönetimi sistemi
   - Medya kütüphanesi

3. **İçerik Yönetimi**
   - Sayfa düzenleme
   - Blog yazıları yönetimi
   - Duyuru sistemi
   - Slider yönetimi
   - Medya yükleme ve düzenleme

4. **Wix Entegrasyonu**
   - iframe entegrasyonu
   - Velo tam entegrasyonu
   - Adım adım kurulum talimatları
   - Sorun giderme rehberi

## Dosya Yapısı

- `index.html` - Ana sayfa
- `program-template.html` - Program sayfaları için şablon
- `unified-styles.css` - Tüm site için ortak stil dosyası
- `animations.css` - Animasyon tanımları ve efektler
- `animation-effects.js` - JavaScript animasyon efektleri
- `mobile-nav.js` - Mobil navigasyon ve UI etkileşimleri
- `images/` - Görseller için klasör
- `admin/` - Yönetim paneli dosyaları
  - `index.html` - Yönetim paneli ana sayfası
  - `content-editor.html` - İçerik düzenleme sayfası
  - `admin-styles.css` - Yönetim paneli stilleri
  - `content-editor.css` - İçerik düzenleme stilleri
  - `admin-scripts.js` - Yönetim paneli scriptleri
  - `content-editor.js` - İçerik düzenleme scriptleri
- `WIX_ENTEGRASYON_REHBERI.md` - Wix entegrasyon talimatları

## Kurulum

### Yerel Kurulum

1. Tüm dosyaları web sunucunuza yükleyin
2. `index.html` dosyasını tarayıcınızda açın
3. Yönetim paneline erişmek için `/admin/index.html` adresini ziyaret edin
4. Yönetim paneli giriş bilgileri:
   - Kullanıcı adı: `admin`
   - Şifre: `admin123`

### GitHub'a Yükleme

1. GitHub hesabınızda yeni bir repository oluşturun
2. Tüm dosyaları bu repository'ye yükleyin
3. GitHub Pages'i etkinleştirin (Settings > Pages)
4. Site `https://[kullanici-adiniz].github.io/[repo-adiniz]/` adresinde yayınlanacaktır

### Wix Entegrasyonu

Wix entegrasyonu için `WIX_ENTEGRASYON_REHBERI.md` dosyasındaki adımları izleyin.

## Özelleştirme

- Renkleri değiştirmek için `unified-styles.css` dosyasındaki `:root` değişkenlerini düzenleyin
- Logoları ve görselleri `images/` klasöründeki dosyalarla değiştirin
- İçerikleri yönetim paneli üzerinden veya doğrudan HTML dosyalarını düzenleyerek değiştirebilirsiniz

## Teknik Detaylar

- HTML5, CSS3 ve JavaScript kullanılarak geliştirilmiştir
- Harici kütüphane bağımlılığı yoktur (sadece Font Awesome ikonları)
- Tüm modern tarayıcılarla uyumludur
- Mobil cihazlar için tam responsive tasarım

## İletişim

Herhangi bir sorunuz veya öneriniz varsa, lütfen iletişime geçin.

---

© 2025 Üstün Başarı Akademisi. Tüm hakları saklıdır.
