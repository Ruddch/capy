// CAPY Landing Page JavaScript

// Function to copy contract address
function copyContractAddress() {
    const contractAddress = '0x461ec28f77a9a5afe5cf2b99dfa3d48c91391242';
    navigator.clipboard.writeText(contractAddress).then(() => {
        // Show feedback
        const button = document.querySelector('.ca-btn');
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = '#90EE90';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Contract address: ' + contractAddress);
    });
}

// Function to open chart
function openChart() {
    window.open('https://dexscreener.com/abstract/0x461ec28f77a9a5afe5cf2b99dfa3d48c91391242', '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
    // Add click handlers for CA and CHART buttons
    const caButton = document.querySelector('.ca-btn');
    const chartButton = document.querySelector('.chart-btn');
    const bButton = document.querySelector('.buy-btn');

    // CA button handler
    if (caButton) {
        caButton.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Copy contract address
            copyContractAddress();
        });
    }

    // CHART button handler
    if (chartButton) {
        chartButton.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Open chart
            openChart();
        });
    }

    // BUY button handler
    if (bButton) {
        bButton.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Scroll to how to buy section
            const buySection = document.querySelector('.how-to-buy');
            buySection.scrollIntoView({ behavior: 'smooth' });
        });
    }

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

    // Function to calculate lore image sizes based on .lore container width
    function updateLoreImageSizes() {
        const loreContainer = document.querySelector('.lore');
        if (!loreContainer) return;

        const loreWidth = loreContainer.offsetWidth;
        
        // Calculate sizes as percentages of .lore width
        const image1Width = Math.round(loreWidth * 0.42); // 42% of .lore width
        const image2Width = Math.round(loreWidth * 0.47); // 47% of .lore width  
        const image3Width = Math.round(loreWidth * 0.52); // 52% of .lore width

        // Apply sizes to images
        const image1 = document.querySelector('.lore-image-1');
        const image2 = document.querySelector('.lore-image-2');
        const image3 = document.querySelector('.lore-image-3');

        if (image1) image1.style.width = image1Width + 'px';
        if (image2) image2.style.width = image2Width + 'px';
        if (image3) image3.style.width = image3Width + 'px';

        // Update text bubble padding and positioning
        const bubble1 = document.querySelector('.lore-text-bubble-1');
        const bubble2 = document.querySelector('.lore-text-bubble-2');
        const bubble3 = document.querySelector('.lore-text-bubble-3');

        if (bubble1) {
            bubble1.style.padding = `${Math.round(loreWidth * 0.026)}px ${Math.round(loreWidth * 0.035)}px ${Math.round(loreWidth * 0.026)}px ${Math.round(loreWidth * 0.089)}px`;
            bubble1.style.top = Math.round(loreWidth * 0.05) + 'px';
            bubble1.style.left = Math.round(loreWidth * -0.06) + 'px';
        }

        if (bubble2) {
            bubble2.style.padding = `${Math.round(loreWidth * 0.029)}px ${Math.round(loreWidth * 0.038)}px ${Math.round(loreWidth * 0.030)}px ${Math.round(loreWidth * 0.039)}px`;
            bubble2.style.top = Math.round(loreWidth * 0.05) + 'px';
        }

        if (bubble3) {
            bubble3.style.padding = `${Math.round(loreWidth * 0.027)}px ${Math.round(loreWidth * 0.061)}px ${Math.round(loreWidth * 0.027)}px ${Math.round(loreWidth * 0.061)}px`;
            bubble3.style.top = Math.round(loreWidth * 0.05) + 'px';
            bubble3.style.left = Math.round(loreWidth * -0.06) + 'px';
        }

        // Update font size proportionally
        const loreTexts = document.querySelectorAll('.lore-text');
        loreTexts.forEach(text => {
            const fontSize = Math.round(loreWidth * 0.022); // 2.2% of .lore width
            text.style.fontSize = fontSize + 'px';
        });
    }

    // Function to calculate hero element sizes based on .hero container width
    function updateHeroElementSizes() {
        const heroContainer = document.querySelector('.hero');
        if (!heroContainer) return;

        const heroWidth = heroContainer.offsetWidth;
        const viewportWidth = window.innerWidth;
        
        // Calculate hero title font size with responsive scaling
        const heroTitle = document.querySelector('.hero-title h1');
        if (heroTitle) {
            let titleFontSize;
            
            // Responsive scaling based on viewport width
            if (viewportWidth <= 1200) {
                // For small screens, use 15% of hero width (equivalent to 15vw)
                titleFontSize = Math.round(heroWidth * 0.14);
            } else if (viewportWidth <= 1600) {
                // For medium screens, use 20% of hero width (equivalent to 20vw)
                titleFontSize = Math.round(heroWidth * 0.14);
            } else {
                // For large screens, use 27% of hero width (equivalent to 27vmin)
                titleFontSize = Math.round(heroWidth * 0.14);
            }
            
            heroTitle.style.fontSize = titleFontSize + 'px';
        }

        // Calculate capybara image sizes (30vmin equivalent)
        const capybaraImages = document.querySelectorAll('.capybara-image');
        capybaraImages.forEach(image => {
            // 30vmin is roughly 30% of viewport width, but we'll use hero width
            const imageWidth = Math.round(heroWidth * 0.28);
            image.style.width = imageWidth + 'px';
        });
    }

    // Call functions on load and resize
    updateLoreImageSizes();
    updateHeroElementSizes();
    window.addEventListener('resize', () => {
        updateLoreImageSizes();
        updateHeroElementSizes();
    });
});

// Utility function for smooth scrolling
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
