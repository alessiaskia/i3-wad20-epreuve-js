import './styles.scss';
import { vaccines } from './src/data';

// get element from the DOM
const app = document.getElementById('app');

// create h1
const title = '<h1>Précommande de vaccins contre la COVID-19</h1>';

// create header w/2 buttons
const header = '<header><button class="btn-filter-by-price btn-outline-primary">Filtrer par prix</button><button class="btn-filter-by-approval btn-outline-primary">Cacher les vaccins non approuvés</button></header>';

// create card for each vaccine
let card = '';
let container = '<main class="wrapper">';

for (const vaccine of vaccines) {
  card = `<div class="card" id="${vaccine.id}">
    <img src="./${vaccine.id}.jpg" class="card-img-top" />
    <div class="card-body">
     <h5 class="card-title">${vaccine.name}</h5>
     <ul class="list-group list-group-flush">
            <li class="list-group-item">Inventeurs : ${vaccine.inventor}</li>
            <li class="list-group-item">Lieux de production : ${vaccine.place}</li>
            <li class="list-group-item">Technologie : ${vaccine.technology}</li>
            <li class="list-group-item">Quantité : ${vaccine.quantity}</li>
            <li class="list-group-item">Prix unitaire : ${vaccine.price}</li>`;
  if (vaccine.approved) {
    card += '<li class="list-group-item">Approuvé : oui</li>';
  } else {
    card += '<li class="list-group-item">Approuvé : non</li>';
  }
  card += `<li class="list-group-item">
            <label for="quantity">Quantity : </label>
            <input type="number" id="quantity">
            <button class="btn-book btn-primary btn-sm">Réserver </button>
            </li>
        </ul>
    </div>
    </div>`;
  container += card;
}
container += '</main>';

// create footer
const footer = '<footer><h3>Résumé de votre commande</h3><button class="btn-order btn-primary btn-lg">Passer la commande</button></footer>';

// --> to HTML
app.innerHTML = `${title + header + container + footer}`;
