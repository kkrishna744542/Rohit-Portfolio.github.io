// ==========================================
// Portfolio Website - Rohit Raj
// JavaScript Functionality
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // TYPING EFFECT FOR NAVBAR
    // ==========================================
    const typingText = document.getElementById('typing-text');
    const textToType = 'Rohit Raj Profile';
    let charIndex = 0;
    let isTyping = false;
    
    // Start typing after 2 seconds (as per requirement)
    setTimeout(() => {
        typeText();
    }, 2000);
    
    function typeText() {
        if (charIndex < textToType.length) {
            typingText.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // Speed of typing
        } else {
            // Add blinking cursor after typing completes
            typingText.innerHTML += '<span class="typing-cursor"></span>';
        }
    }
    
    // ==========================================
    // MOBILE MENU TOGGLE
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
    
    // ==========================================
    // THEME SWITCHER
    // ==========================================
    const themeButtons = document.querySelectorAll('.theme-btn');
    const html = document.documentElement;
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateActiveThemeButton(savedTheme);
    
    themeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            html.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            updateActiveThemeButton(theme);
        });
    });
    
    function updateActiveThemeButton(theme) {
        themeButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-theme') === theme) {
                btn.classList.add('active');
            }
        });
    }
    
    // ==========================================
    // ACTIVE NAV LINK ON SCROLL
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    function updateActiveNavLink() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinksItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // ==========================================
    // SCROLL TO TOP BUTTON
    // ==========================================
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ==========================================
    // FADE IN ANIMATIONS ON SCROLL
    // ==========================================
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => observer.observe(el));
    
    // ==========================================
    // CONTACT FORM HANDLING
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const btnText = document.getElementById('btnText');
    const btnLoading = document.getElementById('btnLoading');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        
        // ===== EMAIL CONFIGURATION =====
        // IMPORTANT: Replace these with your EmailJS credentials
        // Get them from: https://www.emailjs.com/
        const serviceID = 'service_3f0j8r6';      // your provided Service ID
        const templateID = 'template_szhnqra';    // your provided Template ID
        // ================================
        
        // Get form data
        const formData = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            to_email: 'krishnakumar7257ind@gmail.com' // Your email
        };
        
        // Map to template parameters (new template structure)
        const templateParams = {
            name: formData.from_name,
            from_name: formData.from_name,
            email: formData.from_email,
            message: formData.message,
            phone: formData.phone,
            subject: formData.subject,
            to_email: formData.to_email
        };
        
        // Send email using EmailJS
        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);
                
                // Hide form and show success message
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Reset button state
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                
                // Show form again after 5 seconds
                setTimeout(() => {
                    contactForm.style.display = 'block';
                    formSuccess.style.display = 'none';
                }, 5000);
            })
            .catch(function(error) {
                console.error('Failed to send email:', error);
                
                // Show error message
                alert('Sorry, there was an error sending your message. Please try again or contact directly: krishnakumar7257ind@gmail.com\n\nError: ' + error.message);
                
                // Reset button state
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
            });
    });
    
    // ==========================================
    // ENQUIRY FORM HANDLING
    // ==========================================
    const enquiryForm = document.getElementById('enquiryForm');
    const enqFormSuccess = document.getElementById('enqFormSuccess');
    const enqBtnText = document.getElementById('enqBtnText');
    const enqBtnLoading = document.getElementById('enqBtnLoading');
    
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        enqBtnText.style.display = 'none';
        enqBtnLoading.style.display = 'inline-block';
        
        // EmailJS configuration - Replace these with your actual values
        const serviceID = 'your_service_id'; // Replace with your EmailJS service ID
        const templateID = 'your_template_id'; // Replace with your EmailJS template ID
        
        // Get form data
        const formData = {
            from_name: document.getElementById('enq_name').value,
            from_email: document.getElementById('enq_email').value,
            company: document.getElementById('enq_company').value,
            phone: document.getElementById('enq_phone').value,
            service: document.getElementById('enq_service').value,
            budget: document.getElementById('enq_budget').value,
            message: document.getElementById('enq_message').value,
            to_email: 'krishnakumar7257ind@gmail.com' // Your email address
        };
                // Map to template parameters (new template structure)
        const templateParams = {
            name: formData.from_name,
            from_name: formData.from_name,
            email: formData.from_email,
            message: formData.message,
            company: formData.company,
            phone: formData.phone,
            service: formData.service,
            budget: formData.budget,
            to_email: formData.to_email
        };
                // Send email using EmailJS
        emailjs.send(serviceID, templateID, formData)
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);
                
                // Hide form and show success message
                enquiryForm.style.display = 'none';
                enqFormSuccess.style.display = 'block';
                
                // Reset form
                enquiryForm.reset();
                
                // Reset button state
                enqBtnText.style.display = 'inline';
                enqBtnLoading.style.display = 'none';
                
                // Show form again after 5 seconds
                setTimeout(() => {
                    enquiryForm.style.display = 'block';
                    enqFormSuccess.style.display = 'none';
                }, 5000);
            })
            .catch(function(error) {
                console.error('Failed to send email:', error);
                
                // Show error message
                alert('Sorry, there was an error sending your enquiry. Please try again or contact me directly at krishnakumar7257ind@gmail.com');
                
                // Reset button state
                enqBtnText.style.display = 'inline';
                enqBtnLoading.style.display = 'none';
            });
    });
    
    // ==========================================
    // NAVBAR BACKGROUND ON SCROLL
    // ==========================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 30px var(--shadow-color)';
        } else {
            navbar.style.boxShadow = '0 2px 20px var(--shadow-color)';
        }
    });
    
    // ==========================================
    // GALLERY LIGHTBOX (Optional Enhancement)
    // ==========================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const overlay = document.createElement('div');
            overlay.className = 'lightbox-overlay';
            overlay.innerHTML = `
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="lightbox-close">&times;</button>
                </div>
            `;
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                cursor: pointer;
            `;
            overlay.querySelector('.lightbox-content').style.cssText = `
                position: relative;
                max-width: 90%;
                max-height: 90%;
            `;
            overlay.querySelector('img').style.cssText = `
                max-width: 100%;
                max-height: 90vh;
                border-radius: 10px;
            `;
            overlay.querySelector('.lightbox-close').style.cssText = `
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
            `;
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';
            
            // Close lightbox
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay || e.target.className === 'lightbox-close') {
                    document.body.removeChild(overlay);
                    document.body.style.overflow = '';
                }
            });
        });
    });
    
    // ==========================================
    // FORM VALIDATION ENHANCEMENT
    // ==========================================
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            if (this.value) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });
    
    // ==========================================
    // INITIALIZE
    // ==========================================
    console.log('Portfolio website loaded successfully!');
    console.log('Theme: ' + (localStorage.getItem('theme') || 'light'));
});