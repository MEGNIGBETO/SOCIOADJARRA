// Code JavaScript pour la fonctionnalité de la plateforme éducative

//Gestion du menu de navigation en responsive
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
 
menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})

// Fonction pour afficher la section spécifiée et masquer les autres sections
function afficherSection(sectionId) {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (section.id === sectionId) {
            section.removeAttribute('hidden');
        } else {
            section.setAttribute('hidden', 'true');
        }
    });
}

// Fonction de gestion de la navigation
function naviguer(e) {
    e.preventDefault();
    const lien = e.target;
    const sectionId = lien.getAttribute('href').substring(1); // Enlève le caractère '#' du lien

    afficherSection(sectionId);
    document.querySelector(".nav-links").classList.toggle('mobile-menu');
    
}

// Écouteurs d'événements pour les liens de navigation
document.querySelectorAll('nav a').forEach(lien => {
    lien.addEventListener('click', naviguer);
});

// Afficher la section Accueil par défaut
afficherSection('accueil');






/*
$(document).ready(function() {
// Compteur des likes et dislikes
let likesCount = 100;
let dislikesCount = 10;

$(".like-button").click(function() {
    likesCount++;
    $(".likes-count").text(likesCount + " Likes");
});

$(".dislike-button").click(function() {
    dislikesCount++;
    $(".dislikes-count").text(dislikesCount + " Dislikes");
});
});

*/