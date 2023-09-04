//gestion des cartes de cours pour un affichage automatique à partir du json
$(document).ready(function() {
    $.getJSON('DATA/exercice.json', function(data) {
        // Générer les cartes à partir du JSON
        $.each(data, function(index, discipline) {
          var disciplineElement = `
            <div class="carte" data-id="${discipline.id}">
                <h3>${discipline.intitule}</h3>
                <p>${discipline.description}</p>
                <a href="exercice/${discipline.lien}">S'exercer</a>
            </div>
          `;
          
          $('.cartes-exercice').append(disciplineElement);
        });
    });
    
})
