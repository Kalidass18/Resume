// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will respond shortly.');
    this.reset();
});

// Card hover effects
document.querySelectorAll('.project-card, .skill-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.background = 'linear-gradient(45deg, #00b4db, #0083b0)';
    });
    card.addEventListener('mouseout', () => {
        card.style.background = 'linear-gradient(45deg, #2d3436, #434343)';
    });
});

// About section toggle
document.getElementById('aboutBtn').addEventListener('click', function() {
    document.getElementById('aboutSection').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('backBtn').addEventListener('click', function() {
    document.getElementById('aboutSection').style.display = 'none';
    document.getElementById('aboutBtn').style.display = 'block';
});