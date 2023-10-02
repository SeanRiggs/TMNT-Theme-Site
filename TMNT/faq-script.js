// JavaScript for FAQ Page

document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('h2');
        const answer = item.querySelector('p');

        question.addEventListener('click', function () {
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });

    // Back to Home button functionality
    const backButton = document.getElementById('back-to-home');
    backButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});
// JavaScript for FAQ Page

// Function to toggle the answer visibility when clicking on a question
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('h2');
        const answer = item.querySelector('p');

        question.addEventListener('click', function () {
            answer.classList.toggle('visible');
        });
    });

    // Scroll-to-top button functionality
    const scrollToTopButton = document.getElementById('scroll-to-top');
    scrollToTopButton.addEventListener('click', scrollToTop);
    
    // Show or hide the button based on scroll position
    window.addEventListener('scroll', toggleScrollButton);
    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    function toggleScrollButton() {
        if (document.documentElement.scrollTop > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    }
});
