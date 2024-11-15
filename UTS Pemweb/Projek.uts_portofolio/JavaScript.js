// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Hero image click effect
const heroImage = document.querySelector(".hero-content img");
heroImage.addEventListener("click", () => {
    heroImage.style.transition = "transform 0.3s ease";
    heroImage.style.transform = "scale(1.1)";
    setTimeout(() => heroImage.style.transform = "scale(1)", 300);
});

// Download CV button click effect
const downloadButton = document.querySelector(".hero-content a");
downloadButton.addEventListener("click", () => {
    downloadButton.style.transition = "transform 0.2s ease";
    downloadButton.style.transform = "scale(0.95)";
    setTimeout(() => downloadButton.style.transform = "scale(1)", 200);
});

// Portfolio link click effect with animation
document.querySelectorAll('.portfolio-item a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        link.style.transition = 'transform 0.3s ease';
        link.style.transform = 'scale(1.1)';
        setTimeout(() => {
            link.style.transform = 'scale(1)';
            window.location.href = link.href;
        }, 300);
    });
});

// Confirmation prompt for email link
document.querySelector("#contact-link").addEventListener("click", event => {
    if (!confirm("Apakah Anda ingin menghubungi saya melalui email?")) {
        event.preventDefault();
    }
});
