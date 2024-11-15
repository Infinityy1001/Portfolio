// Script pour le formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message ! Je reviendrai vers vous rapidement.');
    this.reset();
});
