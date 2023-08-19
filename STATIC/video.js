//gestion des video pour un affichage automatique à partir du json
$(document).ready(function() {
    $.getJSON('DATA/video.json', function(data) {
        // Générer les videos à partir du JSON
        $.each(data, function(index, video) {
          var videoElement = `
          <div class="video">
            <iframe width="560" height="315" src="${video.lien}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="video-content" data-id="${video.id}">
                <h2>${video.nom}</h2>
                <p>${video.description}</p>
                <p>Lien vers le groupe WhatsApp : <a href="https://chat.whatsapp.com/CiYHOb1Gusw9TZlflyM1LT">clic ici</a></p>
            </div>
          <div>
          `;
          $('.video-library').append(videoElement);
        });
    });  
})
