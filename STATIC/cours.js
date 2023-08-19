//gestion des cartes de cours pour un affichage automatique à partir du json
$(document).ready(function() {
    $.getJSON('DATA/cours.json', function(data) {
        // Générer les offres de formation à partir du JSON
        $.each(data, function(index, cours) {
          var coursElement = `
            <div class="carte" data-id="${cours.id}">
                <img src="images/${cours.image}" alt="Image du cours">
                <h3>${cours.nom}</h3>
                <p>${cours.description}</p>
                <a href="#cours/${cours.lien}">Etudier</a>
            </div>
          `;
          
          $('.cartes').append(coursElement);
        });
    });
    
})
