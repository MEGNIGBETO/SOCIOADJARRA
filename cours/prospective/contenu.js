const sectionsList = document.getElementById('sections-list');
const sectionContent = document.getElementById('section-content');
const toggleSummaryBtn = document.getElementById('toggleSummaryBtn');
const sidebar = document.getElementById('sidebar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const numSection = document.getElementById('numSection');

let currentSection = 0;
let sections = []; // Contiendra les données du JSON

// Fonction pour charger le JSON depuis un fichier externe
async function loadJSON() {
    try {
        const response = await fetch('prospective.json');
        sections = await response.json();
        //loadSection(currentSection);
        loadSection(0);
        showSummary();
    } catch (error) {
        console.error('Erreur lors du chargement du JSON :', error);
    }
}

// Fonction pour afficher ou masquer le sommaire
function toggleSummary() {
    sidebar.classList.toggle('hidden');
}

toggleSummaryBtn.addEventListener('click', toggleSummary);
loadJSON();

//Gestion du contenu proprement dit

function loadSection(index) {
    const section = sections[index];
    let longSection = section.sousSectionTitle.length;
    let i = 0;
    sectionContent.innerHTML = `<div id="section-title">${section.sectionTitle}</div>`;
    //sectionTitle.textContent = section.section;
    //sectionContent.textContent = section.paragraphe;

    while(i < longSection){

        const sousSectionTitle = document.createElement("h3");
        const class_sousSectionTitle = document.createAttribute('class');
        class_sousSectionTitle.value = "sous-section-title";
        sousSectionTitle.setAttributeNode(class_sousSectionTitle);

        const sousSectionContent = document.createElement("div");
        const class_sousSectionContent = document.createAttribute('class');
        class_sousSectionContent.value = "sous-section-content";
        sousSectionContent.setAttributeNode(class_sousSectionContent);

        const sousSectionIllustration = document.createElement("img");
        const class_sousSectionIllustration = document.createAttribute('class');
        class_sousSectionIllustration.value = "sous-section-illustration";
        sousSectionIllustration.setAttributeNode(class_sousSectionIllustration);

        const sousSectionList = document.createElement("ul");
        const class_sousSectionList = document.createAttribute('class');
        class_sousSectionList.value = "sous-section-list";
        sousSectionList.setAttributeNode(class_sousSectionList);

        sousSectionTitle.innerHTML = `${section.sousSectionTitle[i]}`;
        sousSectionContent.innerHTML = `${section.sousSectionContent[i]}`;
        sousSectionIllustration.innerHTML = `${section.sousSectionIllustration[i]}`;
        sousSectionList.innerHTML = `${section.sousSectionList[i]}`;

        sectionContent.append(
            sousSectionTitle,
            sousSectionContent,
            sousSectionIllustration,
            sousSectionList
        );
        i++;
    };
    
    numSection.innerHTML = `${index+1}/${sections.length}`
  
    if (index === 0) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
  
    if (index === sections.length - 1) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }
}

function showSummary() {
    // Générer la liste des sections dans le sommaire
    sectionsList.innerHTML = '';
    sections.forEach((section, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = section.sectionTitle;
        listItem.addEventListener('click', () => {
        currentSection = index;
        loadSection(currentSection);
        });
        sectionsList.appendChild(listItem);
    });
}

prevBtn.addEventListener('click', () => {
  if (currentSection > 0) {
    currentSection--;
    loadSection(currentSection);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSection < sections.length - 1) {
    currentSection++;
    loadSection(currentSection);
  }
});

// Chargement initial de la première section
loadSection(currentSection);
