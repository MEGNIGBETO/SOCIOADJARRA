$(document).ready(function(){

    var jsonData; //Variable pour stocker les données JSON une fois chargées

    //Charger notre fichier JSON
    $.getJSON("sociologie.json", function(data){
        jsonData = data; // stocker les données JSON dans la variable

        //créer une liste unique de toutes les valeurs pour chaque clé
        var disciplines = getUniqueValues("discipline", data);
        var intitules = getUniqueValues("intitule", data);
        var types = getUniqueValues("type", data);

        //Remplir les listes de fitrage
        fillFilterList("disciplineList", disciplines);
        fillFilterList("intituleList", intitules);
        fillFilterList("typeList", types);

        //Gérer le changement de sélection dans les listes de filtrage
        $(".filterList").change(function(){
            applyFilters();
        });

    });

    //Fonction pour obtenir une liste unique de valeurs pour une clé donnée
    function getUniqueValues(key, data){
        var values = data.map(function(item){
            return item[key];
        });
        return [...new Set(values)]; //Utilisez un ensemble pour obtenir des valeurs uniques
    }

    //Fonction pour remplir la list de filtrage avec des options
    function fillFilterList(elementId, values){
        var selectElement = $("#" + elementId);
        values.forEach(function(value){
            selectElement.append("<option value='" + value + "'>" + value + "</option>");
        });
    }

    //Fonction pour appliquer les filtres et afficher les résultats
    function applyFilters(){
        var selectedDiscipline = $("#disciplineList").val();
        var selectedIntitule = $("#intituleList").val();
        var selectedType = $("#typeList").val();

        //Filtrer les données et stocker le résultat
        var filteredData = jsonData.filter(function(item){
            return (
                (selectedDiscipline === "" || item.discipline === selectedDiscipline) &&
                (selectedIntitule === "" || item.intitule === selectedIntitule) &&
                (selectedType === "" || item.type === selectedType)
            );
        });

        //Afficher le résultat de filtre
        displayResults(filteredData);

        //Fonctionnaté pour téléchager le résultat de filtre en une chaîne JSON
        //Convertir les résultats en une chaîne JSON
        var jsonResult = JSON.stringify(filteredData);
        linkDownload(jsonResult)
    }

    // Fonction pour afficher les résultats
    function displayResults(results){
        var resultHtml = "<h2>Résultats :</h2>";
        if(results.length === 0){
            resultHtml += "<p>Aucun résultat trouvé.</p>";
        } else {
            results.forEach(function(item) {
                resultHtml += "<p>Discipline : " + item.discipline + "<br>Intitulé : " + item.intitule + "<br>Type : " + item.type + "</p>";
            });
        }
        $("#results").html(resultHtml);
    }

    //fonction pour créer un lien de téléchargement et l'ajouter à la page
    function linkDownload(objetToDownload){
        var blob = new Blob([objetToDownload], {type: "application/json"});
        var url = URL.createObjectURL(blob);

        var downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = "epreuve.json"; //nom du fichier JSON à télécharger
        downloadLink.textContent = "Télécharger les résultats au format JSON";
        
        //Ajouter le lien de téléchargement à la page
        $("#results").append(downloadLink);
    }

});
