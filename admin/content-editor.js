/* 
 * content-editor.js - Üstün Başarı Akademisi İçerik Editörü Scriptleri
 */

document.addEventListener('DOMContentLoaded', function() {
    // İçerik sekmeleri arası geçiş
    const contentTabs = document.querySelectorAll('.content-tab');
    const contentTabContents = document.querySelectorAll('.content-tab-content');

    contentTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.getAttribute('data-tab');
            
            // Aktif sekmeyi güncelle
            contentTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // İlgili içeriği göster
            contentTabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${target}-content`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Medya filtreleme
    const mediaFilters = document.querySelectorAll('.media-filter');
    const mediaItems = document.querySelectorAll('.media-item');

    mediaFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Aktif filtreyi güncelle
            mediaFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Medya öğelerini filtrele
            mediaItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-type') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // İçerik düzenleme modalını aç
    const editButtons = document.querySelectorAll('.edit-content');
    const contentEditorModal = document.getElementById('contentEditorModal');
    const closeEditor = document.getElementById('closeEditor');
    const contentForm = document.getElementById('contentForm');
    const contentId = document.getElementById('contentId');
    const contentType = document.getElementById('contentType');
    const contentTitle = document.getElementById('contentTitle');
    const contentStatus = document.getElementById('contentStatus');
    const contentCategory = document.getElementById('contentCategory');
    const contentEditor = document.getElementById('contentEditor');
    const categoryGroup = document.getElementById('categoryGroup');
    const featuredImageGroup = document.getElementById('featuredImageGroup');
    const sliderLinkGroup = document.getElementById('sliderLinkGroup');
    const editorTitle = document.getElementById('editorTitle');

    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const type = this.getAttribute('data-type');
            
            // Modal başlığını güncelle
            if (type === 'page') {
                editorTitle.textContent = 'Sayfa Düzenle';
            } else if (type === 'blog') {
                editorTitle.textContent = 'Blog Yazısı Düzenle';
            } else if (type === 'announcement') {
                editorTitle.textContent = 'Duyuru Düzenle';
            } else if (type === 'slider') {
                editorTitle.textContent = 'Slider Düzenle';
            }
            
            // Form alanlarını göster/gizle
            if (type === 'page' || type === 'slider') {
                categoryGroup.style.display = 'none';
            } else {
                categoryGroup.style.display = 'block';
            }
            
            if (type === 'slider') {
                sliderLinkGroup.style.display = 'block';
            } else {
                sliderLinkGroup.style.display = 'none';
            }
            
            // Örnek veri yükleme (gerçek uygulamada API'den gelecek)
            loadContentData(id, type);
            
            // Modalı aç
            contentEditorModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Yeni içerik ekleme butonları
    const addNewPage = document.getElementById('addNewPage');
    const addNewBlog = document.getElementById('addNewBlog');
    const addNewAnnouncement = document.getElementById('addNewAnnouncement');
    const addNewSlider = document.getElementById('addNewSlider');

    if (addNewPage) {
        addNewPage.addEventListener('click', function() {
            resetForm();
            editorTitle.textContent = 'Yeni Sayfa Ekle';
            contentType.value = 'page';
            categoryGroup.style.display = 'none';
            sliderLinkGroup.style.display = 'none';
            contentEditorModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (addNewBlog) {
        addNewBlog.addEventListener('click', function() {
            resetForm();
            editorTitle.textContent = 'Yeni Blog Yazısı Ekle';
            contentType.value = 'blog';
            categoryGroup.style.display = 'block';
            sliderLinkGroup.style.display = 'none';
            contentEditorModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (addNewAnnouncement) {
        addNewAnnouncement.addEventListener('click', function() {
            resetForm();
            editorTitle.textContent = 'Yeni Duyuru Ekle';
            contentType.value = 'announcement';
            categoryGroup.style.display = 'block';
            sliderLinkGroup.style.display = 'none';
            contentEditorModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (addNewSlider) {
        addNewSlider.addEventListener('click', function() {
            resetForm();
            editorTitle.textContent = 'Yeni Slider Ekle';
            contentType.value = 'slider';
            categoryGroup.style.display = 'none';
            sliderLinkGroup.style.display = 'block';
            contentEditorModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // İçerik düzenleme modalını kapat
    if (closeEditor) {
        closeEditor.addEventListener('click', function() {
            contentEditorModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Modal dışına tıklayınca kapat
    window.addEventListener('click', function(e) {
        if (e.target === contentEditorModal) {
            contentEditorModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // İçerik formunu gönder
    if (contentForm) {
        contentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form verilerini topla
            const formData = {
                id: contentId.value,
                type: contentType.value,
                title: contentTitle.value,
                status: contentStatus.value,
                content: contentEditor.innerHTML
            };
            
            if (contentType.value !== 'page' && contentType.value !== 'slider') {
                formData.category = contentCategory.value;
            }
            
            if (contentType.value === 'slider') {
                formData.link = document.getElementById('sliderLink').value;
            }
            
            // Verileri kaydet (gerçek uygulamada API'ye gönderilecek)
            saveContentData(formData);
            
            // Modalı kapat
            contentEditorModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Başarı mesajı göster
            showNotification('İçerik başarıyla kaydedildi.');
        });
    }

    // Zengin metin editörü araç çubuğu
    const editorToolbarButtons = document.querySelectorAll('.editor-toolbar button');
    const editorToolbarSelects = document.querySelectorAll('.editor-toolbar select');

    editorToolbarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const command = this.getAttribute('data-command');
            
            if (command === 'createLink') {
                const url = prompt('Bağlantı URL\'sini girin:');
                if (url) {
                    document.execCommand(command, false, url);
                }
            } else if (command === 'insertImage') {
                const url = prompt('Görsel URL\'sini girin:');
                if (url) {
                    document.execCommand(command, false, url);
                }
            } else {
                document.execCommand(command, false, null);
            }
        });
    });

    editorToolbarSelects.forEach(select => {
        select.addEventListener('change', function() {
            const command = this.getAttribute('data-command');
            const value = this.value;
            
            document.execCommand(command, false, value);
        });
    });

    // Görsel seçme ve kaldırma
    const selectImage = document.getElementById('selectImage');
    const removeImage = document.getElementById('removeImage');
    const previewImage = document.getElementById('previewImage');

    if (selectImage) {
        selectImage.addEventListener('click', function() {
            // Gerçek uygulamada medya kütüphanesini açacak
            // Şimdilik örnek bir URL ile değiştirelim
            const imageUrl = prompt('Görsel URL\'sini girin:');
            if (imageUrl) {
                previewImage.src = imageUrl;
            }
        });
    }

    if (removeImage) {
        removeImage.addEventListener('click', function() {
            previewImage.src = '../images/image-placeholder.jpg';
        });
    }

    // Medya yükleme modalı
    const uploadMedia = document.getElementById('uploadMedia');
    const mediaUploadModal = document.getElementById('mediaUploadModal');
    const closeMediaUpload = document.getElementById('closeMediaUpload');
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const selectFiles = document.getElementById('selectFiles');
    const uploadPreview = document.getElementById('uploadPreview');
    const startUpload = document.getElementById('startUpload');
    const cancelUpload = document.getElementById('cancelUpload');
    const mediaUploadForm = document.getElementById('mediaUploadForm');

    if (uploadMedia) {
        uploadMedia.addEventListener('click', function() {
            mediaUploadModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeMediaUpload) {
        closeMediaUpload.addEventListener('click', function() {
            mediaUploadModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Modal dışına tıklayınca kapat
    window.addEventListener('click', function(e) {
        if (e.target === mediaUploadModal) {
            mediaUploadModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Dosya seçme butonu
    if (selectFiles) {
        selectFiles.addEventListener('click', function() {
            fileInput.click();
        });
    }

    // Dosya sürükle-bırak
    if (uploadArea) {
        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', function() {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            
            if (e.dataTransfer.files.length) {
                handleFiles(e.dataTransfer.files);
            }
        });
    }

    // Dosya seçildiğinde
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            if (this.files.length) {
                handleFiles(this.files);
            }
        });
    }

    // Medya yükleme formunu gönder
    if (mediaUploadForm) {
        mediaUploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Gerçek uygulamada dosyaları sunucuya yükleyecek
            // Şimdilik başarılı olduğunu varsayalım
            
            // Modalı kapat
            mediaUploadModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Başarı mesajı göster
            showNotification('Dosyalar başarıyla yüklendi.');
            
            // Medya listesini güncelle (gerçek uygulamada)
            // updateMediaList();
        });
    }

    // İptal butonu
    if (cancelUpload) {
        cancelUpload.addEventListener('click', function() {
            mediaUploadModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            uploadPreview.innerHTML = '';
        });
    }

    // Admin paneline geri dön
    const backToAdmin = document.getElementById('backToAdmin');
    if (backToAdmin) {
        backToAdmin.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Yardımcı fonksiyonlar
    function resetForm() {
        contentId.value = '';
        contentTitle.value = '';
        contentStatus.value = 'published';
        contentEditor.innerHTML = '<p>İçeriğinizi buraya girin...</p>';
        previewImage.src = '../images/image-placeholder.jpg';
        if (document.getElementById('sliderLink')) {
            document.getElementById('sliderLink').value = '';
        }
    }

    function loadContentData(id, type) {
        // Gerçek uygulamada API'den veri çekilecek
        // Şimdilik örnek veriler
        contentId.value = id;
        contentType.value = type;
        
        if (type === 'page') {
            if (id === '1') {
                contentTitle.value = 'Ana Sayfa';
                contentStatus.value = 'published';
                contentEditor.innerHTML = '<h1>Üstün Başarı Akademisi</h1><p>Eğitimde mükemmelliğin adresi...</p>';
            } else if (id === '2') {
                contentTitle.value = 'YKS Hazırlık';
                contentStatus.value = 'published';
                contentEditor.innerHTML = '<h1>YKS Hazırlık Programı</h1><p>Üniversite sınavına hazırlık için kapsamlı eğitim programı...</p>';
            }
        } else if (type === 'blog') {
            if (id === '1') {
                contentTitle.value = 'YKS 2025 Değişiklikleri';
                contentStatus.value = 'published';
                contentCategory.value = 'exam';
                contentEditor.innerHTML = '<h1>YKS 2025\'te Neler Değişiyor?</h1><p>Yeni sınav sistemi hakkında bilmeniz gerekenler...</p>';
            }
        } else if (type === 'announcement') {
            if (id === '1') {
                contentTitle.value = 'Yaz Kampı Kayıtları Başladı';
                contentStatus.value = 'published';
                contentCategory.value = 'announcement';
                contentEditor.innerHTML = '<h1>Yaz Kampı Kayıtları Başladı</h1><p>Erken kayıt avantajlarından yararlanmak için acele edin...</p>';
            }
        } else if (type === 'slider') {
            if (id === '1') {
                contentTitle.value = 'YKS Hazırlık Kampı';
                contentStatus.value = 'published';
                document.getElementById('sliderLink').value = '/yks-hazirlik.html';
                contentEditor.innerHTML = '<h2>YKS Hazırlık Kampı</h2><p>Yoğun ve etkili program ile sınava hazırlanın</p>';
            }
        }
    }

    function saveContentData(formData) {
        // Gerçek uygulamada API'ye gönderilecek
        console.log('Kaydedilen veriler:', formData);
        
        // Başarılı kayıt sonrası listeyi güncelle (gerçek uygulamada)
        // updateContentList(formData.type);
    }

    function handleFiles(files) {
        uploadPreview.innerHTML = '';
        
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const uploadItem = document.createElement('div');
                uploadItem.className = 'upload-item';
                
                const preview = document.createElement('div');
                preview.className = 'upload-item-preview';
                
                let previewContent = '';
                if (file.type.startsWith('image/')) {
                    previewContent = `<img src="${e.target.result}" alt="${file.name}">`;
                } else if (file.type.startsWith('video/')) {
                    previewContent = `<i class="fas fa-play-circle"></i>`;
                } else if (file.type === 'application/pdf') {
                    previewContent = `<i class="fas fa-file-pdf"></i>`;
                } else {
                    previewContent = `<i class="fas fa-file"></i>`;
                }
                
                preview.innerHTML = previewContent;
                
                const info = document.createElement('div');
                info.className = 'upload-item-info';
                info.textContent = file.name;
                
                const removeButton = document.createElement('button');
                removeButton.className = 'upload-item-remove';
                removeButton.innerHTML = '<i class="fas fa-times"></i>';
                removeButton.addEventListener('click', function() {
                    uploadItem.remove();
                });
                
                uploadItem.appendChild(preview);
                uploadItem.appendChild(info);
                uploadItem.appendChild(removeButton);
                
                uploadPreview.appendChild(uploadItem);
            };
            
            if (file.type.startsWith('image/')) {
                reader.readAsDataURL(file);
            } else {
                reader.readAsArrayBuffer(file);
            }
        }
    }

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
});
