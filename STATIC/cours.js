//gestion des cartes de cours pour un affichage automatique à partir du json
$(document).ready(function() {
    $.getJSON('DATA/cours.json', function(data) {
        // Générer les offres de formation à partir du JSON
        $.each(data, function(index, cours) {
          var coursElement = `
            <div class="carte" data-id="${cours.id}">
              <div>
                <!--<img src="images/${cours.image}" alt="Image">-->
                <h3>${cours.nom}</h3>
                <p>${cours.description}</p>
                <p>Auteur(s) : ${cours.auteurs}</p>
              </div>
              <a href="cours/${cours.lien}">Lire</a>
            </div>
          `;
          
          $('.cartes').append(coursElement);
        });
    });
    
})
