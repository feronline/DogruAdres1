// Advanced JavaScript for Premium Web Experience
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations and interactions
    initAnimations();
    initScrollEffects();
    initInteractions();
    initLoadingScreen();
    initCounters();
    initTypingEffect();
    initTiltEffects();
    initParallax();
    initSmoothScrolling();
    initMobileMenu();
    initSearch();
    initBackToTop();
    initCopyToClipboard();
    initToastNotifications();
    initScrollProgress();
    initRippleEffects();
    initHoverEffects();
    initPageTransitions();
});

// Initialize AOS (Animate On Scroll)
function initAnimations() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 100
        });
    }
}

// Initialize GSAP ScrollTrigger
function initScrollEffects() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.minimal-header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero section parallax
        gsap.to('.floating-orb', {
            y: -50,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.hero',
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
        
        // Section titles animation
        gsap.from('.section-title', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.section-title',
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
        
        // Cards stagger animation
        gsap.from('.category-card', {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.category-grid',
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    }
}

// Initialize all interactions
function initInteractions() {
    // Add hover effects to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .category-card, .feature, .organization-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = '<div class="loading-logo"></div>';
    document.body.appendChild(loadingScreen);
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000);
    });
}

// Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
            }
        };
        
        // Start counter when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Typing Effect
function initTypingEffect() {
    if (typeof Typed !== 'undefined') {
        const typingElement = document.querySelector('.typing-text');
        if (typingElement) {
            new Typed('.typing-text', {
                strings: ['Güvenilir Yardım Kaynakları', 'Doğru Adresler', 'Gerçek Yardımlar'],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }
}

// 3D Tilt Effects
function initTiltEffects() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// Parallax Effects
function initParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-orb');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    // Mobile menu functionality removed - using minimal header
    // This function is kept for compatibility but does nothing
}

// Initialize search functionality
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const categoryCards = document.querySelectorAll('.category-card');
            
            categoryCards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const description = card.querySelector('.card-description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'flex';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.opacity = '0.3';
                    card.style.transform = 'scale(0.95)';
                }
            });
        });
    }
}

// Force cards to be visible
function ensureCardsVisible() {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => {
        card.style.display = 'flex';
        card.style.visibility = 'visible';
        card.style.opacity = '1';
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', function() {
    ensureCardsVisible();
    setTimeout(ensureCardsVisible, 100);
    setTimeout(ensureCardsVisible, 500);
});

// Back to Top Button
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'flex';
                backToTop.style.opacity = '1';
            } else {
                backToTop.style.opacity = '0';
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Copy to Clipboard
function initCopyToClipboard() {
    const phoneNumbers = document.querySelectorAll('.phone-number');
    
    phoneNumbers.forEach(phone => {
        phone.addEventListener('click', function() {
            const text = this.textContent.trim();
            navigator.clipboard.writeText(text).then(() => {
                showToast('Telefon numarası kopyalandı!', 'success');
            }).catch(err => {
                console.error('Failed to copy:', err);
                showToast('Kopyalama başarısız!', 'error');
            });
        });
    });
}

// Toast Notifications
function initToastNotifications() {
    // Toast function is defined globally
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    // Style based on type
    if (type === 'success') {
        toast.style.background = 'var(--success-color)';
    } else if (type === 'error') {
        toast.style.background = 'var(--accent-color)';
    }
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    
    if (progressBar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }
}

// Ripple Effects
function initRippleEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Hover Effects
function initHoverEffects() {
    // Icon animations
    const icons = document.querySelectorAll('.category-icon i, .feature-icon i');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(360deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Card shine effects
    const cards = document.querySelectorAll('.category-card, .organization-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const shine = this.querySelector('.card-shine');
            if (shine) {
                shine.style.left = x + 'px';
                shine.style.top = y + 'px';
            }
        });
    });
}

// Page Transitions
function initPageTransitions() {
    const links = document.querySelectorAll('a[href$=".html"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hostname === window.location.hostname) {
                e.preventDefault();
                
                // Add loading effect
                document.body.style.opacity = '0.8';
                
                setTimeout(() => {
                    window.location.href = this.href;
                }, 300);
            }
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const cards = document.querySelectorAll('.organization-card, .emergency-card');
            
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(query)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// Filter functionality
function initFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            const cards = document.querySelectorAll('.organization-card');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Dark mode toggle
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // Load saved preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
}

// Performance optimization
function initPerformanceOptimizations() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function() {
            // Scroll event handling
        }, 10);
    });
}

// Initialize performance optimizations
initPerformanceOptimizations();

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .dark-mode {
        --primary-color: #1a1a1a;
        --secondary-color: #4a9eff;
        --accent-color: #ff6b6b;
        --success-color: #51cf66;
        --dark-color: #ffffff;
        --light-color: #2d2d2d;
        --white: #1a1a1a;
    }
    
    .dark-mode .header {
        background: rgba(26, 26, 26, 0.95);
    }
    
    .dark-mode .category-card,
    .dark-mode .organization-card,
    .dark-mode .feature {
        background: #2d2d2d;
        color: white;
    }
`;
document.head.appendChild(style);