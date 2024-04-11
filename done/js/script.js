document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const overlay = document.querySelector('.overlay');

    // Ajouter un écouteur d'événements pour le clic sur l'icône du menu
    menuIcon.addEventListener('click', function () {
        overlay.style.display = 'block'; // Afficher l'overlay lors du clic sur l'icône du menu
    });

    // Ajouter un écouteur d'événements pour le clic sur l'overlay pour le fermer
    overlay.addEventListener('click', function () {
        overlay.style.display = 'none'; // Masquer l'overlay lors du clic dessus
    });
});