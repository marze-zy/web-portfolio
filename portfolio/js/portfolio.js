/**
 * Portfolio Website JavaScript
 * Handles theme toggle and scroll animations
 */

// ============================================
// Theme Toggle Functionality
// ============================================

const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

/**
 * Initialize theme on page load
 * Checks localStorage first, then system preference
 */
function initializeTheme() {
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    } else {
        // Check system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
}

/**
 * Toggle between light and dark theme
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Initialize theme on page load
initializeTheme();

// Add event listener to theme toggle button
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// ============================================
// Scroll Animation
// ============================================

/**
 * Intersection Observer configuration for scroll animations
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

/**
 * Handle intersection observer callback
 * Animates sections when they come into view
 */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

/**
 * Initialize scroll animations for all sections
 */
function initializeScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
}

// Initialize scroll animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeScrollAnimations);
} else {
    initializeScrollAnimations();
}