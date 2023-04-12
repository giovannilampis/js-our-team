"use strict"

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede

// `
// <div class="col-12 col-sm-12 col-md-6 col-lg-4">

//     <div class="card" style="width: 18rem;">
//         <img class="card-img-top" src="./images/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett">
//         <div class="card-body">
//             <h5 class="card-title">Wayne Barnett</h5>
//             <p class="card-text">Founder & CEO</p>
//         </div>
//     </div>

// </div>`




const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

console.log(team);

for( let i = 0; i < team.length; i++ ) {

const employee = team[i];

console.log('name: ' + employee.name);

console.log('role: ' + employee.role);

console.log('image: ' + employee.image);

}

createGrill();

function createGrill() {

    const container = document.getElementById("app");

    const row = document.createElement("div");

    row.className = "row";

    for( let i = 0; i < team.length; i++ ) {

        const employee = team[i];
    
        createCard(employee)
    
      }
}

function createCard(employee) {

    // console.log(employee);

    const htmlContent = `
    <div class="col-12 col-sm-12 col-md-6 col-lg-4">
    
        <div class="card" style="width: 18rem;">
             <img class="card-img-top" src=./images/${employee.image} alt="${employee.name}">
             <div class="card-body">
                 <h5 class="card-title">${employee.name}</h5>
                 <p class="card-text">${employee.role}</p>
             </div>
        </div>
    
    </div>
    `;


}