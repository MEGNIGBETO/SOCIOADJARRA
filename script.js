// Code JavaScript pour la fonctionnalité de la plateforme éducative

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
}

// Écouteurs d'événements pour les liens de navigation
document.querySelectorAll('nav a').forEach(lien => {
    lien.addEventListener('click', naviguer);
});

// Afficher la section Accueil par défaut
afficherSection('accueil');

// Code JavaScript pour la fonctionnalité du forum de discussion

// Fonction pour afficher les messages dans le conteneur
function afficherMessages(messages) {
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.innerHTML = '';

    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = `<strong>${message.username}</strong>: ${message.message}`;
        messagesContainer.appendChild(messageDiv);
    });
}

// Fonction pour ajouter un nouveau message
function ajouterMessage(username, message) {
    // Charger le contenu du fichier JSON (simulé ici par une variable JavaScript)
    const messages = JSON.parse(localStorage.getItem('forum_messages')) || [];

    messages.push({ username, message });

    // Sauvegarder le nouveau tableau de messages dans le fichier JSON simulé
    localStorage.setItem('forum_messages', JSON.stringify(messages));

    afficherMessages(messages);
}

// Fonction de gestion de l'envoi du formulaire
function envoyerMessage(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    if (username.trim() !== '' && message.trim() !== '') {
        ajouterMessage(username, message);
        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    }
}

// Écouteur d'événement pour le formulaire de message
document.getElementById('message-form').addEventListener('submit', envoyerMessage);

// Charger et afficher les messages initiaux (simulé ici par des données préexistantes)
document.addEventListener('DOMContentLoaded', () => {
    const initialMessages = [
        { username: 'Utilisateur1', message: 'Bienvenue sur le forum !' },
        { username: 'Utilisateur2', message: 'N\'hésitez pas à poser des questions.' }
    ];
    localStorage.setItem('forum_messages', JSON.stringify(initialMessages));
    afficherMessages(initialMessages);
});




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

