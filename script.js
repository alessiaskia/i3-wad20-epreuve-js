import './styles.scss';
import { vaccines } from './src/data';

// get element from the DOM
const app = document.getElementById('app');

// function to get user input on quantity of vaccine to book
// function getQuantity(event) {
//   event.preventDefault();
//   const input = document.getElementById('quantity').value;
//   return `<p>Quantité : ${input}</p>`;
// }

// create h1
const title = '<h1>Précommande de vaccins contre la COVID-19</h1>';

// create header with 2 buttons
const header = '<header><button id="btn-filter-by-price" class="btn-outline-primary">Filtrer par prix</button><button id="btn-filter-by-approval" class="btn-outline-primary">Cacher les vaccins non approuvés</button></header>';

// create card for each vaccine
let card = '';
let container = '<main class="wrapper">';

for (const vaccine of vaccines) {
  if (vaccine.approved) {
    card = `<div class="card approved" id="${vaccine.id}">`;
  } else {
    card = `<div class="card not-approved" id="${vaccine.id}">`;
  }
  card += `
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
            <input type="number" id="quantity" name="quantity">
            </li>
            </ul>
        <button class="btn-book btn-primary btn-sm">Réserver </button>
    </div>
    </div>`;
  container += card;
}
container += '</main>';

// create footer
const footer = '<footer><h3>Résumé de votre commande</h3><div class="booking-area"></div><button class="btn-order btn-primary btn-lg">Passer la commande</button></footer>';

// --> to HTML
app.innerHTML = `${title + header + container + footer}`;

// delegation
const vaccineCards = document.querySelectorAll('.card');

document.body.addEventListener('click', (e) => {
  // show/hide non-approved vaccines
  if (e.target.matches('#btn-filter-by-approval')) {
    if (e.target.innerHTML === 'Cacher les vaccins non approuvés') {
      e.target.innerHTML = 'Voir tous les vaccins';
    } else {
      e.target.innerHTML = 'Cacher les vaccins non approuvés';
    }
    for (const vaccineCard of vaccineCards) {
      if (vaccineCard.classList.contains('not-approved')) {
        vaccineCard.classList.toggle('invisible');
      }
    }
    // actions when user clicks on "réserver"
    //   } else if (e.target.matches('.btn-book')) {
    //     console.log(e.target);
    //     // select vaccine
    //     const selectedVaccine = e.target.parentNode.parentNode;
    //     console.log(selectedVaccine);
    //     const vaccine = vaccines[selectedVaccine.id];
    //     console.log(vaccine);
    //     // put selected vaccine + desired quantity in footer
    //     const chosenVaccine = vaccine.name;
    //     const quantity = document.getElementById('quantity').currentValue;
    //     console.log(chosenVaccine);
    //     console.log(quantity);
    //     const bookingArea = document.querySelector('.booking-area');
    //     const booking = ` ${chosenVaccine} - quantité : ${quantity}`;
    //     console.log(booking);
    //     bookingArea.append(booking);
  }
});
