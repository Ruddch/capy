// CAPY Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navButtons = document.querySelectorAll('.nav-btn, .buy-btn');

    navButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Handle different button actions
            if (this.textContent.includes('CA')) {
                // Scroll to contract address section
                const contractSection = document.querySelector('.how-to-buy');
                contractSection.scrollIntoView({ behavior: 'smooth' });
            } else if (this.textContent.includes('CHART')) {
                // Placeholder for chart functionality
                alert('Chart functionality will be added soon!');
            } else if (this.textContent.includes('BUY')) {
                // Scroll to how to buy section
                const buySection = document.querySelector('.how-to-buy');
                buySection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add floating animation to capybaras
    const capybaras = document.querySelectorAll('.capybara-illustration');
    capybaras.forEach((capybara, index) => {
        // Stagger the animation
        capybara.style.animationDelay = `${index * 0.5}s`;
    });

    // Add copy to clipboard functionality for contract address
    const contractAddress = document.querySelector('.contract-address');
    if (contractAddress) {
        contractAddress.style.cursor = 'pointer';
        contractAddress.title = 'Click to copy contract address';

        contractAddress.addEventListener('click', function () {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                // Show feedback
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.style.background = '#90EE90';

                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '#F5F5F5';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert('Contract address: ' + text);
            });
        });
    }

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('.lore, .how-to-buy, .footer');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;

        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add social media link functionality
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function (e) {
            e.preventDefault();

            // Add click animation
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Placeholder for social media links
            const platform = this.classList.contains('telegram') ? 'Telegram' :
                this.classList.contains('twitter') ? 'Twitter' : 'Discord';
            alert(`${platform} link will be added soon!`);
        });
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add confetti effect on buy button click
    const buyButton = document.querySelector('.buy-btn');
    if (buyButton) {
        buyButton.addEventListener('click', function () {
            // Create confetti effect
            createConfetti();
        });
    }

    // Confetti function
    function createConfetti() {
        const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
        const confettiCount = 50;

        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '1000';
                confetti.style.animation = 'confettiFall 3s linear forwards';

                document.body.appendChild(confetti);

                setTimeout(() => {
                    confetti.remove();
                }, 3000);
            }, i * 20);
        }
    }

    // Add confetti animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Utility function for smooth scrolling
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
