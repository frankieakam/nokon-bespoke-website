// Modal functionality
const consultationBtn = document.getElementById('consultationBtn') as HTMLButtonElement;
const consultationModal = document.getElementById('consultationModal') as HTMLDivElement;
const closeModalBtn = consultationModal.querySelector('button') as HTMLButtonElement;

consultationBtn.addEventListener('click', () => {
    consultationModal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    consultationModal.classList.remove('active');
});

// Consultation Form WhatsApp
const consultationForm = document.getElementById('consultationForm') as HTMLFormElement;
consultationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(consultationForm);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const location = formData.get('location') as string;
    const interests = formData.get('interests') as string;

    // Better formatting with proper encoding
    const message = `New Consultation Request:%0A%0A` + `*Name:* ${encodeURIComponent(name)}%0A` + `*Phone:* ${encodeURIComponent(phone)}%0A` + `*Location:* ${encodeURIComponent(location)}%0A` + `*Interests:* ${encodeURIComponent(interests)}`;
    const whatsappUrl = `https://wa.me/2348105725081?text=${message}`;
    
    // Close modal and open WhatsApp
    consultationModal.classList.remove('active');
    window.open(whatsappUrl, '_blank');

    // Optional: Reset the form
    consultationForm.reset();
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox') as HTMLDivElement;
const lightboxImage = document.getElementById('lightboxImage') as HTMLImageElement;
const lightboxClose = lightbox.querySelector('.lightbox-close') as HTMLButtonElement;
const lightboxPrev = lightbox.querySelector('.lightbox-prev') as HTMLButtonElement;
const lightboxNext = lightbox.querySelector('.lightbox-next') as HTMLButtonElement;

const galleryImages = [
    './images/gallery-1.jpg',
    './images/gallery-2.jpg',
    './images/gallery-3.png',
    './images/gallery-4.jpg',
    // Add all 10 image paths
];

let currentImageIndex = 0;

// Add click events to masonry items
document.querySelectorAll('.masonry-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox(currentImageIndex);
    });
});

function openLightbox(index: number) {
    lightboxImage.src = galleryImages[index];
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentImageIndex);
});
lightboxNext.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    openLightbox(currentImageIndex);
});

// Contact Form WhatsApp
const contactForm = document.getElementById('contactForm') as HTMLFormElement;
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    // Better formatting without email
    const whatsappMessage = `New Contact Form Submission:%0A%0A` + `*Name:* ${encodeURIComponent(name)}%0A` + `*Phone:* ${encodeURIComponent(phone)}%0A` + `*Message:* ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/2348105725081?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');

    // Optional: Reset the form
    contactForm.reset();
});

// Close lightbox when clicking outside image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn') as HTMLButtonElement;
const mobileMenu = document.getElementById('mobileMenu') as HTMLDivElement;

mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
    // Change icon based on menu state
    const icon = mobileMenuBtn.querySelector('i');
    if (icon) {
        if (mobileMenu?.classList.contains('hidden')) {
            icon.className = 'fas fa-bars';
        } else {
            icon.className = 'fas fa-times';
        }
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu?.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-bars';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!target.closest('nav') && !mobileMenu?.classList.contains('hidden')) {
        mobileMenu?.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-bars';
        }
    }
});

// Dynamic Date Functionality
function updateDynamicDates() {
    // Update copyright year
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear().toString();
    }

    // Update terms and privacy dates
    const termsDateElement = document.getElementById('termsDate');
    const privacyDateElement = document.getElementById('privacyDate');
    
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    if (termsDateElement) {
        termsDateElement.textContent = formattedDate;
    }
    if (privacyDateElement) {
        privacyDateElement.textContent = formattedDate;
    }
}

// Initialize dates when page loads
document.addEventListener('DOMContentLoaded', updateDynamicDates);

// Footer Modals Functionality
const termsBtn = document.getElementById('termsBtn') as HTMLButtonElement;
const privacyBtn = document.getElementById('privacyBtn') as HTMLButtonElement;
const termsModal = document.getElementById('termsModal') as HTMLDivElement;
const privacyModal = document.getElementById('privacyModal') as HTMLDivElement;

// Terms Modal
termsBtn?.addEventListener('click', () => {
    termsModal.classList.add('active');
});

termsModal?.querySelector('button')?.addEventListener('click', () => {
    termsModal.classList.remove('active');
});

// Privacy Modal
privacyBtn?.addEventListener('click', () => {
    privacyModal.classList.add('active');
});

privacyModal?.querySelector('button')?.addEventListener('click', () => {
    privacyModal.classList.remove('active');
});

// Close modals when clicking outside
termsModal?.addEventListener('click', (e) => {
    if (e.target === termsModal) {
        termsModal.classList.remove('active');
    }
});

privacyModal?.addEventListener('click', (e) => {
    if (e.target === privacyModal) {
        privacyModal.classList.remove('active');
    }
});

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        termsModal?.classList.remove('active');
        privacyModal?.classList.remove('active');
    }
});

// Smooth Continuous Scroll Reveal
function initSmoothScrollReveal() {
    const sections = document.querySelectorAll('.reveal-section');
    
    // Function to check section visibility
    const checkSections = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // pixels from bottom of viewport
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            
            // If section is in viewport
            if (sectionTop < windowHeight - revealPoint && sectionBottom > revealPoint) {
                section.classList.add('revealed');
                
                // Also reveal staggered children
                const staggeredChildren = section.querySelectorAll('.reveal-stagger');
                staggeredChildren.forEach(child => {
                    child.classList.add('revealed');
                });
            } else {
                section.classList.remove('revealed');
                
                // Also hide staggered children
                const staggeredChildren = section.querySelectorAll('.reveal-stagger');
                staggeredChildren.forEach(child => {
                    child.classList.remove('revealed');
                });
            }
        });
    };
    
    // Throttle scroll events for performance
    let ticking = false;
    const throttleScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                checkSections();
                ticking = false;
            });
            ticking = true;
        }
    };
    
    // Event listeners
    window.addEventListener('scroll', throttleScroll);
    window.addEventListener('resize', throttleScroll);
    window.addEventListener('load', throttleScroll);
    
    // Initial check
    checkSections();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrollReveal();
    updateDynamicDates();
});

// Re-check on hash changes (for anchor links)
window.addEventListener('hashchange', () => {
    setTimeout(() => {
        initSmoothScrollReveal();
    }, 300);
});
