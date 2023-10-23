//gestion des cartes de cours pour un affichage automatique à partir du json
$(document).ready(function() {
    $.getJSON('DATA/service.json', function(data) {
        // Générer les cartes à partir du JSON
        $.each(data, function(index, service) {
          var serviceElement = `
            <div class="carte" data-id="${service.id}">
                <h3>${service.intitule}</h3>
                <p>${service.description}</p>
                <a href="service/${service.lien}">Aller</a>
            </div>
          `;
          
          $('.cartes-service').append(serviceElement);
        });
    });
    
})
