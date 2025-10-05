let employes=[{
  nom: "idrissi",
  prenom: "karim",
  sexe: "H",
  enfants: 0,
  salaireBrut: 4500
},
{
  nom: "bahar",
  prenom: "samia",
  sexe: "F",
  enfants: 3,
  salaireBrut: 4400
},
{
  nom: "fahim",
  prenom: "said",
  sexe: "H",
  enfants: 2,
  salaireBrut: 5000
},
{
  nom: "malki",
  prenom: "souad",
  sexe: "F",
  enfants: 1,
  salaireBrut: 4700
},
{
  nom: "lamir",
  prenom: "ihab",
  sexe: "H",
  enfants: 0,
  salaireBrut: 6300
}
];
employes.forEach(employe => {
    const net = calculerSalaireNet(employe);
    console.log(`${employe.prenom} ${employe.nom} : Salaire net = ${net.toFixed(2)} DH`);
});

function calculerSalaireNet(employe) {
    let tauxImpots = 0.18;
    
    if (employe.sex === 'F') {
        tauxImpots -= 0.02;
    }
    if (employe.nombreEnfants === 3) {
        tauxImpots -= 0.01;
    } else if (employe.nombreEnfants >= 4) {
        tauxImpots -= 0.02;
    }
    
    const impots = employe.salaireBrut * tauxImpots;
    const assurance = employe.salaireBrut * 0.07;
    const pension = employe.salaireBrut * 0.05;
    
    const salaireNet = employe.salaireBrut - impots - assurance - pension + 100 + 150;
    
    return salaireNet;
}

const tbody = document.querySelector("tbody");

function afficherTableau() {
  tbody.innerHTML = "<br>";
  employes.forEach((emp, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${emp.nom}</td>
      <td>${emp.prenom}</td>
      <td>${emp.sexe}</td>
      <td>${emp.enfants}</td>
      <td>${emp.salaireBrut}</td>
      <td>
        <button onclick="afficherSalaire(${index})">Afficher Salaire Net</button>
        <button onclick="supprimer(${index})">Supprimer</button>
        <button onclick="cloner(${index})">Cloner</button>
        <button onclick="simplifier()">Simplifier</button>
      </td>`;
    tbody.appendChild(tr);
  });
}

afficherTableau();

function afficherSalaire(i) {
  const tr = tbody.rows[i];
  const salaireNet = calculerSalaireNet(employes[i]);
  let tdSalaire = tr.insertCell(tr.cells.length - 1);
  tdSalaire.textContent = salaireNet + " DH";
}

function supprimer(i) {
  employes.splice(i, 1);
  afficherTableau();
}

function cloner(i) {
  employes.push({ ...employes[i] });
  afficherTableau();
}

function simplifier() {
  tbody.innerHTML = "";
  employes.forEach(emp => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${emp.nom}</td>
      <td>${calculerSalaireNet(emp)} $</td>
    `;
    tbody.appendChild(tr);
  });
}





function showHxContent(n) {
    const div = document.getElementById('title' + n);
    if (div) {
        div.style.display = 'block';
    }
}
function hideAllDivs() {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.style.display = 'none';
    });
}
function alertTitle() {
    const n = parseInt(document.getElementById('title').value);
    const titres = document.querySelectorAll('h1');
    if (titres[n-1]) { 
        alert(titres[n-1].textContent);
    } else {
        alert('Titre non trouvé');
    }
}
function deleteTitle() {
    const n = parseInt(document.getElementById('title').value);
    const titres = document.querySelectorAll('h1');
    const titre = titres[n-1];
    if (titre && titre.firstChild) {
        titre.removeChild(titre.firstChild); 
    }
}
function defineTitle() {
    const n = parseInt(document.getElementById('title').value);
    const titres = document.querySelectorAll('h1');
    const titre = titres[n-1];
    if (titre) {
        if (titre.firstChild) {
            titre.removeChild(titre.firstChild); 
        }
        const nouveauTexte = document.createTextNode('Nouveau titre');
        titre.appendChild(nouveauTexte);
    }
}


