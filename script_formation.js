$(document).ready(function() {
// Charger le fichier JSON contenant les informations des formations
$.getJSON('formations.json', function(data) {
    // Boucler à travers chaque formation dans le fichier JSON
    $.each(data, function(index, formation) {
    // Dupliquer le template de formation
    var $formationTemplate = $('#formation-template').clone().removeAttr('id').show();
    
    // Remplir les informations de la formation à partir du JSON
    $formationTemplate.find('img').attr('src', 'images/' + formation.image);
    $formationTemplate.find('h2').text(formation.nom);
    $formationTemplate.find('.date-debut').text(formation.date_debut);
    $formationTemplate.find('.date-fin').text(formation.date_fin);
    $formationTemplate.find('.duree').text(formation.duree);
    $formationTemplate.find('.lieu').text(formation.lieu);
    $formationTemplate.find('.cout').text(formation.cout);
    $formationTemplate.find('.formateur').text(formation.formateur);
    $formationTemplate.find('.description').text(formation.description);
    
    // Ajouter la formation à la liste des formations
    $('.formations-container').append($formationTemplate);
    });
});
});

