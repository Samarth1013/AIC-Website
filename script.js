document.addEventListener('DOMContentLoaded', function() {
    // Remove smooth scrolling script since it interferes with navigation
    // Add hover effect to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ff5733'; // Change color on hover
        });
        link.addEventListener('mouseout', function() {
            this.style.color = ''; // Revert to original color
        });
    });
});
