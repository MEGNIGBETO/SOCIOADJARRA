$(document).ready(function() {
    // Charger le fichier JSON contenant les informations des formations
    $.getJSON('formations.json', function(data) {
      // Générer les offres de formation à partir du JSON
      $.each(data, function(index, formation) {
        var formationElement = `
          <div class="formation-offer" data-id="${formation.ID}">
            <img src="images/${formation.image}" alt="Image de la formation">
            <div class="formation-details">
              <h2>${formation.nom}</h2>
              <p>${formation.description}</p>
              <div class="formation-actions">
                <a href="#formations-details" class="button en-savoir-plus">En savoir plus</a>
              </div>
            </div>
          </div>
        `;
        
        $('.formations-container').append(formationElement);
      });
  
      // Gestion du clic sur le bouton "En savoir plus"
      $('.en-savoir-plus').click(function() {
        var formationID = $(this).closest('.formation-offer').data('id');
        afficherFormation(formationID, data);
      });
    });
  
    function afficherFormation(formationID, data) {
      // Trouver la formation correspondant à l'ID
      var formation = data.find(f => f.ID == formationID);
      if (formation) {
        // Afficher les informations de la formation
        var formationDetails = `
          <h2>${formation.nom}</h2>
          <p>${formation.description}</p>
        `;
  
        // Parcourir les sous-titres et les paragraphes
        for (var sousTitre in formation.sous_titre) {
          detailsHTML += `<h3>${sousTitre}</h3>`;
          var paragraphes = formation.sous_titre[sousTitre];
          for (var paragraphe of paragraphes) {
            detailsHTML += `<p>${paragraphe}</p>`;
          }
        } 

        $('.formations-details-container').append(detailsHTML);

      } else {
        alert("Formation introuvable !");
      }
    }
  });
  

