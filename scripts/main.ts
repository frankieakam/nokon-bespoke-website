// modal functionality
const consultationBtn = document.getElementById('consultationBtn') as HTMLButtonElement;
const consultationModal = document.getElementById('consultationModal') as HTMLDivElement;
const closeModalBtn = consultationModal.querySelector('button') as HTMLButtonElement;

consultationBtn.addEventListener('click', () => {
    consultationModal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    consultationModal.classList.remove('active');
});

// consultation form whatsApp
const consultationForm = document.getElementById('consultationForm') as HTMLFormElement;
consultationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(consultationForm);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const location = formData.get('location') as string;
    const interests = formData.get('interests') as string;

    // better formatting with proper encoding
    const message = `New Consultation Request:%0A%0A` + `*Name:* ${encodeURIComponent(name)}%0A` + `*Phone:* ${encodeURIComponent(phone)}%0A` + `*Location:* ${encodeURIComponent(location)}%0A` + `*Interests:* ${encodeURIComponent(interests)}`;
    const whatsappUrl = `https://wa.me/2348108738972?text=${message}`;
    
    // close modal and open whatsApp
    consultationModal.classList.remove('active');
    window.open(whatsappUrl, '_blank');

    // reset the form
    consultationForm.reset();
});

// lightbox functionality
const lightbox = document.getElementById('lightbox') as HTMLDivElement;
const lightboxImage = document.getElementById('lightboxImage') as HTMLImageElement;
const lightboxClose = lightbox.querySelector('.lightbox-close') as HTMLButtonElement;
const lightboxPrev = lightbox.querySelector('.lightbox-prev') as HTMLButtonElement;
const lightboxNext = lightbox.querySelector('.lightbox-next') as HTMLButtonElement;

const galleryImages = [
    './images/gallery-1.jpg',
    './images/gallery-2.jpg',
    './images/gallery-3.jpgg',
    './images/gallery-4.jpg',
    './images/gallery-5.jpg',
    './images/gallery-6.jpg',
    './images/gallery-7.jpg',
    './images/gallery-8.jpg',
    './images/gallery-9.jpg',
    './images/gallery-10.jpg',
    './images/gallery-11.jpg',
    './images/gallery-12.jpg',
    './images/gallery-13.jpg',
];

let currentImageIndex = 0;

// add click events to masonry items
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

// contact form whatsApp
const contactForm = document.getElementById('contactForm') as HTMLFormElement;
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    // better formatting without email
    const whatsappMessage = `New Contact Form Submission:%0A%0A` + `*Name:* ${encodeURIComponent(name)}%0A` + `*Phone:* ${encodeURIComponent(phone)}%0A` + `*Message:* ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/2348108738972?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');

    // reset the form
    contactForm.reset();
});

// close lightbox when clicking outside image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn') as HTMLButtonElement;
const mobileMenu = document.getElementById('mobileMenu') as HTMLDivElement;

mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
    // change icon based on menu state
    const icon = mobileMenuBtn.querySelector('i');
    if (icon) {
        if (mobileMenu?.classList.contains('hidden')) {
            icon.className = 'fas fa-bars';
        } else {
            icon.className = 'fas fa-times';
        }
    }
});

// close mobile menu when clicking on a link
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu?.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-bars';
        }
    });
});

// close mobile menu when clicking outside
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

// dynamic date functionality
function updateDynamicDates() {
    // update copyright year
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear().toString();
    }
}

// initialize dates when page loads
document.addEventListener('DOMContentLoaded', updateDynamicDates);

// footer modals functionality
const termsBtn = document.getElementById('termsBtn') as HTMLButtonElement;
const privacyBtn = document.getElementById('privacyBtn') as HTMLButtonElement;
const termsModal = document.getElementById('termsModal') as HTMLDivElement;
const privacyModal = document.getElementById('privacyModal') as HTMLDivElement;

// terms modal
termsBtn?.addEventListener('click', () => {
    termsModal.classList.add('active');
});

termsModal?.querySelector('button')?.addEventListener('click', () => {
    termsModal.classList.remove('active');
});

// privacy modal
privacyBtn?.addEventListener('click', () => {
    privacyModal.classList.add('active');
});

privacyModal?.querySelector('button')?.addEventListener('click', () => {
    privacyModal.classList.remove('active');
});

// close modals when clicking outside
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

// close modals with escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        termsModal?.classList.remove('active');
        privacyModal?.classList.remove('active');
    }
});

// smooth continuous scroll reveal
function initSmoothScrollReveal() {
    const sections = document.querySelectorAll('.reveal-section');
    
    // function to check section visibility
    const checkSections = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // pixels from bottom of viewport
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            
            // if section is in viewport
            if (sectionTop < windowHeight - revealPoint && sectionBottom > revealPoint) {
                section.classList.add('revealed');
                
                // also reveal staggered children
                const staggeredChildren = section.querySelectorAll('.reveal-stagger');
                staggeredChildren.forEach(child => {
                    child.classList.add('revealed');
                });
            } else {
                section.classList.remove('revealed');
                
                // also hide staggered children
                const staggeredChildren = section.querySelectorAll('.reveal-stagger');
                staggeredChildren.forEach(child => {
                    child.classList.remove('revealed');
                });
            }
        });
    };
    
    // throttle scroll events for performance
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
    
    // event listeners
    window.addEventListener('scroll', throttleScroll);
    window.addEventListener('resize', throttleScroll);
    window.addEventListener('load', throttleScroll);
    
    // initial check
    checkSections();
}

// initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrollReveal();
    updateDynamicDates();
});

// re-check on hash changes (for anchor links)
window.addEventListener('hashchange', () => {
    setTimeout(() => {
        initSmoothScrollReveal();
    }, 300);
});
