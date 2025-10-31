document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Newsletter subscription
    const newsletterForm = document.querySelector('#newsletter form');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const successMessage = document.createElement('p');
            successMessage.textContent = "Check your inbox — free starter guide: '5 Quick Ways to Earn $10 Today'";
            this.replaceWith(successMessage);
        });
    }

    // Back to top button visibility
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Earning Potential Calculator
    const calculateBtn = document.getElementById('calculate-btn');
    if(calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            const hours = document.getElementById('hours').value;
            const hustle = document.getElementById('hustle').value;
            const resultDiv = document.getElementById('result');
            const weeklyEarning = hours * hustle;
            resultDiv.innerHTML = `Your estimated weekly earning is: <span>$${weeklyEarning.toFixed(2)}</span>`;
        });
    }

    // Exit-Intent Modal
    const modal = document.getElementById('exit-intent-modal');
    const closeModal = document.querySelector('.close-modal');
    
    document.addEventListener('mouseout', (e) => {
        if (e.toElement === null && e.relatedTarget === null) {
            modal.classList.add('visible');
        }
    });

    if(closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('visible');
        });
    }

    const modalForm = document.getElementById('modal-newsletter-form');
    if(modalForm) {
        modalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            this.innerHTML = "<p>Thank you for subscribing!</p>";
        });
    }
});
