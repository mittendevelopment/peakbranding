// Mobile Navigation Toggle
document.getElementById('navToggle').addEventListener('click', function () {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('open');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            window.scrollTo({
                top: targetSection.offsetTop - 62,
                behavior: 'smooth'
            });
            // Close nav on mobile after click
            document.getElementById('navLinks').classList.remove('open');
        }
    });
});

// Application Form Handling
document.getElementById('applicationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('appName').value.trim();
    const email = document.getElementById('appEmail').value.trim();
    const portfolio = document.getElementById('appPortfolio').value.trim();
    const motivation = document.getElementById('appMotivation').value.trim();
    const messageEl = document.getElementById('applicationMessage');
    // Simple validation
    if (!name || !email || !portfolio || !motivation) {
        messageEl.textContent = "Please fill in all fields.";
        messageEl.style.color = "#e74c3c";
        return;
    }
    // Simulate submission
    messageEl.textContent = "Thank you for applying! We'll review your application soon.";
    messageEl.style.color = "#1d72b8";
    this.reset();
});

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const messageEl = document.getElementById('contactFormMessage');
    if (!name || !email || !message) {
        messageEl.textContent = "Please fill in all fields.";
        messageEl.style.color = "#e74c3c";
        return;
    }
    // Simulate submission
    messageEl.textContent = "Thank you for reaching out! We'll get back to you soon.";
    messageEl.style.color = "#1d72b8";
    this.reset();
});

<script disable-devtool-auto src='https://cdn.jsdelivr.net/npm/disable-devtool'></script>