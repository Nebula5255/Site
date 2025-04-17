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
        card.style.animationDelay = `${0.8 + (index * 0.1)}s`;
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
                setTimeout(typeWriter, 100);
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
});
