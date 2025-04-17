// Mobile Navigation Script
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const header = document.getElementById('header');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const overlay = document.getElementById('overlay');
    const programsToggle = document.getElementById('programsToggle');
    const programsDropdown = document.getElementById('programsDropdown');
    
    // Scroll Effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile Menu Open
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Mobile Menu Close
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Overlay Click
    if (overlay) {
        overlay.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Mobile Dropdown Menu
    if (programsToggle) {
        programsToggle.addEventListener('click', function() {
            programsToggle.classList.toggle('active');
            programsDropdown.classList.toggle('active');
        });
    }
    
    // Create animated background shapes for hero section
    const createHeroShapes = function() {
        const heroContainer = document.querySelector('.hero-bg-animation');
        if (!heroContainer) return;
        
        const shapeCount = 15;
        
        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            shape.classList.add('shape');
            
            // Random size
            const size = Math.random() * 100 + 50;
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            shape.style.left = posX + '%';
            shape.style.top = posY + '%';
            
            // Random animation
            const animationDuration = Math.random() * 30 + 20;
            shape.style.animationDuration = animationDuration + 's';
            
            // Random animation delay
            const delay = Math.random() * 5;
            shape.style.animationDelay = delay + 's';
            
            // Add to container
            heroContainer.appendChild(shape);
        }
    };
    
    createHeroShapes();
});
