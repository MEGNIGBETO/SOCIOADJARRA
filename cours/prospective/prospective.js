const sectionsList = document.getElementById('sections-list');
const sectionTitle = document.getElementById('section-title');
const sectionContent = document.getElementById('section-content');
const toggleSummaryBtn = document.getElementById('toggleSummaryBtn');
const sidebar = document.getElementById('sidebar');
const sectionIllustration = document.getElementById('section-illustration');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSection = 0;
let sections = []; // Contiendra les données du JSON

// Fonction pour charger le JSON depuis un fichier externe
async function loadJSON() {
  try {
    const response = await fetch('prospective.json');
    sections = await response.json();
    loadSection(currentSection);
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

function loadSection(index) {
  const section = sections[index];
  sectionTitle.textContent = section.section;
  sectionContent.textContent = section.paragraphe;
  
  if (section.illustration) {
    sectionIllustration.innerHTML = `<img src="${section.illustration}" alt="Illustration">`;
  } else {
    sectionIllustration.innerHTML = '';
  }

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
    listItem.textContent = section.section;
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


