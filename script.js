/* eslint-disable no-alert */
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
    card += '<li class="list-group-item">Approuvé : oui</li></ul>';
  } else {
    card += '<li class="list-group-item">Approuvé : non</li></ul>';
  }
  card += `<div class="card-footer">
            <label for="quantity">Quantity : </label>
            <input type="number" id="quantity" name="quantity" min="1" max="${vaccine.quantity}">
        <input type="submit" value="Réserver" class="btn-book btn-primary btn-sm"></div>
    </div>
    </div>`;
  container += card;
}
container += '</main>';

// create footer
const footer = '<footer><h3>Résumé de votre commande</h3><div class="booking-area"></div><div class="cancel-area"></div><button class="btn-order btn-primary btn-lg">Passer la commande</button></footer>';

// --> to HTML
app.innerHTML = `${title + header + container + footer}`;

// delegation
const vaccineCards = document.querySelectorAll('.card');
const bookingArea = document.querySelector('.booking-area');
const cancelArea = document.querySelector('.cancel-area');

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
  } else if (e.target.matches('.btn-book')) {
    const selectedVaccine = e.target.parentNode.parentNode.parentNode;
    console.log(selectedVaccine);
    const vaccine = vaccines[selectedVaccine.id];
    const chosenVaccine = vaccine.name;
    const maxQuantity = vaccine.quantity;
    const wantedQuantity = e.target.parentNode.querySelector('#quantity').value;
    const inputArea = e.target.parentNode.children[1];

    // prevent user to select more vaccines than available
    if (wantedQuantity <= maxQuantity) {
      // put selected vaccine + desired quantity in footer
      bookingArea.innerHTML += `<p>${chosenVaccine} - quantité : ${wantedQuantity}`;

      // hide input area
      inputArea.classList.add('invisible');

      // disable booking button
      e.target.disabled = true;
    } else {
      alert(`Vous pouvez commander max ${maxQuantity} vaccins`);
    }

    // create button to cancel booking
    const buttonCancel = '<button id="btn-cancel-booking">Annule la commande</button>';
    cancelArea.innerHTML += buttonCancel;

    // confirm booking
  } else if (e.target.matches('.btn-order')) {
    // only if booking area contains something
    if (bookingArea.innerHTML.length > 0) {
      app.innerHTML = '<h2>La commande a bien été enregistrée</h2>';
    } else {
      alert('Votre commande est vide');
    }
    // cancel the booking in progress (incomplete)
  } else if (e.target.matches('#btn-cancel-booking')) {
    bookingArea.innerHTML = '';
    cancelArea.innerHTML = '';
  }
});
