// Animation Effects
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Animate program cards with sequential delay
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach((card, index) => {
        card.style.animationDelay = `${0.2 + (index * 0.1)}s`;
    });
    
    // Animate counter numbers
    const counters = document.querySelectorAll('.counter-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        
        let current = 0;
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start counter animation when element comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-container');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (heroSection) {
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
    
    // Typing effect for hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Image hover effects
    const hoverImages = document.querySelectorAll('.hover-effect');
    hoverImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.classList.add('animate-pulse');
        });
        
        image.addEventListener('mouseleave', function() {
            this.classList.remove('animate-pulse');
        });
    });
    
    // Animated background particles
    const createParticles = function() {
        const particleContainer = document.querySelector('.particles-container');
        if (!particleContainer) return;
        
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            particle.style.left = posX + '%';
            particle.style.top = posY + '%';
            
            // Random size
            const size = Math.random() * 10 + 5;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random animation duration
            const duration = Math.random() * 20 + 10;
            particle.style.animationDuration = duration + 's';
            
            // Random animation delay
            const delay = Math.random() * 5;
            particle.style.animationDelay = delay + 's';
            
            particleContainer.appendChild(particle);
        }
    };
    
    createParticles();
    
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
    
    // Program tabs functionality
    const programTabs = document.querySelectorAll('.program-tab');
    const programCards = document.querySelectorAll('.program-card');
    
    programTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            programTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get category
            const category = this.textContent.trim();
            
            // Show/hide cards based on category
            programCards.forEach(card => {
                const cardTitle = card.querySelector('.program-card-title').textContent.trim();
                
                if (category === 'Tümü' || cardTitle === category) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.classList.add('animate-fade-in-up');
                    }, 100);
                } else {
                    card.style.display = 'none';
                    card.classList.remove('animate-fade-in-up');
                }
            });
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.add('ripple');
        
        button.addEventListener('click', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add 3D tilt effect to cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.classList.add('tilt-effect');
        
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
    
    // Add scroll progress indicator
    const createScrollProgress = function() {
        const scrollProgress = document.createElement('div');
        scrollProgress.classList.add('scroll-progress');
        document.body.appendChild(scrollProgress);
        
        window.addEventListener('scroll', function() {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPosition = window.scrollY;
            const scrollPercentage = (scrollPosition / windowHeight) * 100;
            
            scrollProgress.style.width = scrollPercentage + '%';
        });
    };
    
    createScrollProgress();
    
    // Add reveal animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.classList.add('reveal');
                    section.classList.add('active');
                    observer.unobserve(section);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(section);
    });
    
    // Add text gradient effect to section titles
    const sectionTitles = document.querySelectorAll('.section-title h2');
    sectionTitles.forEach(title => {
        title.classList.add('text-gradient');
    });
    
    // Add hover effects to program cards
    programCards.forEach(card => {
        card.classList.add('hover-lift');
    });
    
    // Add hover effects to branch cards
    const branchCards = document.querySelectorAll('.branch-card');
    branchCards.forEach(card => {
        card.classList.add('hover-lift');
    });
    
    // Add animated background to counter section
    const counterSection = document.querySelector('.counter-section');
    if (counterSection) {
        counterSection.classList.add('animated-bg');
    }
    
    // Add parallax effect to sections with background images
    const parallaxSections = document.querySelectorAll('.hero-container, .branches-section');
    parallaxSections.forEach(section => {
        section.classList.add('parallax');
    });
    
    // Add smooth scrolling to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Create loading placeholder
        const placeholder = document.createElement('div');
        placeholder.classList.add('loading-placeholder');
        placeholder.style.width = '100%';
        placeholder.style.height = '200px';
        placeholder.style.backgroundColor = '#f0f0f0';
        placeholder.style.position = 'relative';
        placeholder.style.overflow = 'hidden';
        
        // Add shimmer effect
        const shimmer = document.createElement('div');
        shimmer.classList.add('animate-shimmer');
        shimmer.style.position = 'absolute';
        shimmer.style.top = '0';
        shimmer.style.left = '0';
        shimmer.style.width = '100%';
        shimmer.style.height = '100%';
        
        placeholder.appendChild(shimmer);
        
        // Replace image with placeholder until loaded
        if (!img.complete) {
            img.style.display = 'none';
            img.parentNode.insertBefore(placeholder, img);
            
            img.onload = function() {
                placeholder.remove();
                img.style.display = 'block';
                img.classList.add('animate-fade-in');
            };
        }
    });
    
    // Add form validation and animation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const inputs = contactForm.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                    input.style.borderColor = 'red';
                    
                    input.addEventListener('input', function() {
                        this.classList.remove('error');
                        this.style.borderColor = '';
                    }, { once: true });
                }
            });
            
            if (isValid) {
                // Show success message
                contactForm.innerHTML = `
                    <div class="success-message animate-fade-in">
                        <div class="success-icon" style="font-size: 3rem; color: green; margin-bottom: 20px;">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3>Teşekkürler!</h3>
                        <p>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
                    </div>
                `;
            }
        });
    }
    
    // Add mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const overlay = document.getElementById('overlay');
    
    if (mobileMenuToggle && mobileMenu && mobileMenuClose && overlay) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        overlay.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Add mobile dropdown functionality
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('active');
        });
    });
    
    // Add header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});
