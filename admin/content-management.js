// Admin Panel Content Management
// This file handles the content editing functionality for the admin panel

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the rich text editor for content editing
    initializeRichTextEditor();
    
    // Load the content list
    loadContentList();
    
    // Setup event listeners
    setupEventListeners();
});

// Initialize the rich text editor
function initializeRichTextEditor() {
    if (document.getElementById('contentEditor')) {
        // Using a simple implementation here, in production would use a library like TinyMCE, CKEditor, etc.
        const toolbar = document.querySelector('.editor-toolbar');
        const buttons = toolbar.querySelectorAll('button');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const command = this.dataset.command;
                
                if (command === 'h1' || command === 'h2' || command === 'h3' || command === 'p') {
                    document.execCommand('formatBlock', false, command);
                } else if (command === 'createlink') {
                    const url = prompt('Enter the link URL:');
                    if (url) document.execCommand(command, false, url);
                } else if (command === 'insertimage') {
                    const url = prompt('Enter the image URL:');
                    if (url) document.execCommand(command, false, url);
                } else {
                    document.execCommand(command, false, null);
                }
            });
        });
    }
}

// Load the content list from the server
function loadContentList() {
    const contentList = document.getElementById('contentList');
    if (!contentList) return;
    
    // In a real implementation, this would fetch data from the server
    // For demonstration, we'll use sample data
    const sampleContent = [
        { id: 1, title: 'YKS Hazırlık', type: 'program', lastModified: '2025-04-15' },
        { id: 2, title: 'LGS Hazırlık', type: 'program', lastModified: '2025-04-15' },
        { id: 3, title: 'İngilizce', type: 'program', lastModified: '2025-04-15' },
        { id: 4, title: 'Okul Takviye', type: 'program', lastModified: '2025-04-15' },
        { id: 5, title: 'Deneme Kulübü', type: 'program', lastModified: '2025-04-15' },
        { id: 6, title: 'Yaz Kampı', type: 'program', lastModified: '2025-04-15' },
        { id: 7, title: 'After School', type: 'program', lastModified: '2025-04-15' },
        { id: 8, title: 'Özel Ders', type: 'program', lastModified: '2025-04-15' },
        { id: 9, title: 'Hakkımızda', type: 'page', lastModified: '2025-04-14' },
        { id: 10, title: 'İletişim', type: 'page', lastModified: '2025-04-14' },
        { id: 11, title: 'YKS Başarı Hikayeleri', type: 'blog', lastModified: '2025-04-13' },
        { id: 12, title: 'Yaz Kampı Kayıtları Başladı', type: 'announcement', lastModified: '2025-04-12' }
    ];
    
    // Clear the list
    contentList.innerHTML = '';
    
    // Add each content item to the list
    sampleContent.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.title}</td>
            <td><span class="badge ${getBadgeClass(item.type)}">${item.type}</span></td>
            <td>${item.lastModified}</td>
            <td>
                <button class="btn btn-sm btn-primary edit-content" data-id="${item.id}">
                    <i class="fas fa-edit"></i> Düzenle
                </button>
                <button class="btn btn-sm btn-danger delete-content" data-id="${item.id}">
                    <i class="fas fa-trash"></i> Sil
                </button>
            </td>
        `;
        contentList.appendChild(row);
    });
    
    // Add event listeners to the edit and delete buttons
    document.querySelectorAll('.edit-content').forEach(button => {
        button.addEventListener('click', function() {
            const contentId = this.dataset.id;
            editContent(contentId);
        });
    });
    
    document.querySelectorAll('.delete-content').forEach(button => {
        button.addEventListener('click', function() {
            const contentId = this.dataset.id;
            deleteContent(contentId);
        });
    });
}

// Get the appropriate badge class based on content type
function getBadgeClass(type) {
    switch(type) {
        case 'program':
            return 'bg-primary';
        case 'page':
            return 'bg-success';
        case 'blog':
            return 'bg-info';
        case 'announcement':
            return 'bg-warning';
        default:
            return 'bg-secondary';
    }
}

// Edit content
function editContent(contentId) {
    // In a real implementation, this would fetch the content from the server
    // For demonstration, we'll navigate to the editor page
    window.location.href = 'content-editor.html?id=' + contentId;
}

// Delete content
function deleteContent(contentId) {
    if (confirm('Bu içeriği silmek istediğinizden emin misiniz?')) {
        // In a real implementation, this would send a delete request to the server
        // For demonstration, we'll just show a success message
        showNotification('İçerik başarıyla silindi.', 'success');
        
        // Reload the content list
        loadContentList();
    }
}

// Setup event listeners
function setupEventListeners() {
    // Add new content button
    const addContentBtn = document.getElementById('addContentBtn');
    if (addContentBtn) {
        addContentBtn.addEventListener('click', function() {
            window.location.href = 'content-editor.html';
        });
    }
    
    // Content filter
    const contentFilter = document.getElementById('contentFilter');
    if (contentFilter) {
        contentFilter.addEventListener('change', function() {
            // In a real implementation, this would filter the content list
            // For demonstration, we'll just reload the list
            loadContentList();
        });
    }
    
    // Content search
    const contentSearch = document.getElementById('contentSearch');
    if (contentSearch) {
        contentSearch.addEventListener('input', function() {
            // In a real implementation, this would search the content list
            // For demonstration, we'll just reload the list
            loadContentList();
        });
    }
    
    // Save content button
    const saveContentBtn = document.getElementById('saveContentBtn');
    if (saveContentBtn) {
        saveContentBtn.addEventListener('click', function() {
            saveContent();
        });
    }
    
    // Preview content button
    const previewContentBtn = document.getElementById('previewContentBtn');
    if (previewContentBtn) {
        previewContentBtn.addEventListener('click', function() {
            previewContent();
        });
    }
    
    // Cancel button
    const cancelBtn = document.getElementById('cancelBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            if (confirm('Değişikliklerinizi kaydetmeden çıkmak istediğinizden emin misiniz?')) {
                window.location.href = 'content-management.html';
            }
        });
    }
}

// Save content
function saveContent() {
    // Get the content data
    const title = document.getElementById('contentTitle').value;
    const type = document.getElementById('contentType').value;
    const content = document.getElementById('contentEditor').innerHTML;
    
    // Validate the data
    if (!title) {
        showNotification('Lütfen bir başlık girin.', 'error');
        return;
    }
    
    if (!content) {
        showNotification('Lütfen içerik girin.', 'error');
        return;
    }
    
    // In a real implementation, this would send the data to the server
    // For demonstration, we'll just show a success message
    showNotification('İçerik başarıyla kaydedildi.', 'success');
    
    // Redirect to the content list
    setTimeout(() => {
        window.location.href = 'content-management.html';
    }, 1500);
}

// Preview content
function previewContent() {
    // Get the content data
    const title = document.getElementById('contentTitle').value;
    const content = document.getElementById('contentEditor').innerHTML;
    
    // Open a new window with the preview
    const previewWindow = window.open('', '_blank');
    previewWindow.document.write(`
        <!DOCTYPE html>
        <html lang="tr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title} - Önizleme</title>
            <link rel="stylesheet" href="unified-styles.css">
            <link rel="stylesheet" href="animations.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
            <style>
                body {
                    padding: 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .preview-header {
                    background-color: #f8f9fa;
                    padding: 10px;
                    margin-bottom: 20px;
                    border-radius: 5px;
                    text-align: center;
                }
                .preview-content {
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <div class="preview-header">
                <h1>${title} - Önizleme</h1>
                <p>Bu bir önizleme sayfasıdır. İçerik henüz kaydedilmedi.</p>
            </div>
            <div class="preview-content">
                ${content}
            </div>
        </body>
        </html>
    `);
    previewWindow.document.close();
}

// Show notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification`;
    notification.innerHTML = message;
    
    document.body.appendChild(notification);
    
    // Show the notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Media Library Functions
function initializeMediaLibrary() {
    const mediaLibrary = document.getElementById('mediaLibrary');
    if (!mediaLibrary) return;
    
    // In a real implementation, this would fetch media from the server
    // For demonstration, we'll use sample data
    const sampleMedia = [
        { id: 1, name: 'logo.png', type: 'image', url: 'images/logo.png', size: '24 KB', date: '2025-04-15' },
        { id: 2, name: 'hero-image.jpg', type: 'image', url: 'images/hero-image.jpg', size: '156 KB', date: '2025-04-15' },
        { id: 3, name: 'yks-campaign.jpg', type: 'image', url: 'images/yks-campaign.jpg', size: '120 KB', date: '2025-04-14' },
        { id: 4, name: 'summer-camp.jpg', type: 'image', url: 'images/summer-camp.jpg', size: '135 KB', date: '2025-04-14' },
        { id: 5, name: 'gebze-branch.jpeg', type: 'image', url: 'images/gebze-branch.jpeg', size: '180 KB', date: '2025-04-13' },
        { id: 6, name: 'esenyali-branch.jpeg', type: 'image', url: 'images/esenyali-branch.jpeg', size: '175 KB', date: '2025-04-13' },
        { id: 7, name: 'tanıtım-videosu.mp4', type: 'video', url: 'videos/tanitim-videosu.mp4', size: '4.2 MB', date: '2025-04-12' },
        { id: 8, name: 'katalog.pdf', type: 'document', url: 'documents/katalog.pdf', size: '2.8 MB', date: '2025-04-11' }
    ];
    
    // Clear the library
    mediaLibrary.innerHTML = '';
    
    // Add each media item to the library
    sampleMedia.forEach(item => {
        const mediaItem = document.createElement('div');
        mediaItem.className = 'media-item';
        mediaItem.dataset.id = item.id;
        
        let thumbnail = '';
        if (item.type === 'image') {
            thumbnail = `<img src="${item.url}" alt="${item.name}">`;
        } else if (item.type === 'video') {
            thumbnail = `<div class="video-thumbnail"><i class="fas fa-play"></i></div>`;
        } else if (item.type === 'document') {
            thumbnail = `<div class="document-thumbnail"><i class="fas fa-file-pdf"></i></div>`;
        }
        
        mediaItem.innerHTML = `
            <div class="media-thumbnail">
                ${thumbnail}
            </div>
            <div class="media-info">
                <h4 class="media-name">${item.name}</h4>
                <p class="media-meta">${item.type} • ${item.size} • ${item.date}</p>
            </div>
            <div class="media-actions">
                <button class="btn btn-sm btn-primary media-select" data-id="${item.id}" data-url="${item.url}">
                    <i class="fas fa-check"></i> Seç
                </button>
                <button class="btn btn-sm btn-danger media-delete" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        mediaLibrary.appendChild(mediaItem);
    });
    
    // Add event listeners to the select and delete buttons
    document.querySelectorAll('.media-select').forEach(button => {
        button.addEventListener('click', function() {
            const mediaId = this.dataset.id;
            const mediaUrl = this.dataset.url;
            selectMedia(mediaId, mediaUrl);
        });
    });
    
    document.querySelectorAll('.media-delete').forEach(button => {
        button.addEventListener('click', function() {
            const mediaId = this.dataset.id;
            deleteMedia(mediaId);
        });
    });
}

// Select media
function selectMedia(mediaId, mediaUrl) {
    // In a real implementation, this would insert the media into the editor
    // For demonstration, we'll just close the modal and show a message
    const mediaModal = document.getElementById('mediaModal');
    if (mediaModal) {
        // Insert the media URL into the editor
        document.execCommand('insertimage', false, mediaUrl);
        
        // Close the modal
        const bootstrapModal = bootstrap.Modal.getInstance(mediaModal);
        bootstrapModal.hide();
        
        showNotification('Medya başarıyla eklendi.', 'success');
    }
}

// Delete media
function deleteMedia(mediaId) {
    if (confirm('Bu medyayı silmek istediğinizden emin misiniz?')) {
        // In a real implementation, this would send a delete request to the server
        // For demonstration, we'll just show a success message
        showNotification('Medya başarıyla silindi.', 'success');
        
        // Reload the media library
        initializeMediaLibrary();
    }
}

// Upload media
function uploadMedia() {
    const fileInput = document.getElementById('mediaUpload');
    if (!fileInput.files.length) {
        showNotification('Lütfen bir dosya seçin.', 'error');
        return;
    }
    
    // In a real implementation, this would upload the file to the server
    // For demonstration, we'll just show a success message
    showNotification('Medya başarıyla yüklendi.', 'success');
    
    // Reload the media library
    initializeMediaLibrary();
    
    // Clear the file input
    fileInput.value = '';
}
