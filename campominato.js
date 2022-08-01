// L’utente clicca su un bottone che genererà una griglia di gioco quadrata. (quindi prima del click la griglia è vuota)
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 100 caselle in una griglia 10 x 10.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// variabili
const griglia = document.getElementById("griglia");
let cella = document.getElementsByClassName("cella");
const diffSet = document.getElementById("select");


// difficoltà
document.getElementById("facile").addEventListener("click", diffFacile);
document.getElementById("medio").addEventListener("click", diffMedio);
document.getElementById("difficile").addEventListener("click", diffDifficile);

// funzioni
function diffFacile() {
  diffSet.classList.add("hidden");
  griglia.innerHTML = "";
  griglia.classList.remove("animazione", "medio", "difficile");
  griglia.classList.add("animazione", "facile");
  for (i=1; i<101; i++) {
    griglia.innerHTML += `<div class="cella">${i}</div>`;
  }
  cellaAzzurra();
}

function diffMedio() {
  diffSet.classList.add("hidden");
  griglia.innerHTML = "";
  griglia.classList.remove("animazione", "facile", "difficile");
  griglia.classList.add("animazione", "medio");
  for (i=1; i<82; i++) {
    griglia.innerHTML += `<div class="cella">${i}</div>`;
  }
  cellaAzzurra();
}

function diffDifficile() {
  diffSet.classList.add("hidden");
  griglia.innerHTML = "";
  griglia.classList.remove("animazione", "facile", "medio");
  griglia.classList.add("animazione", "difficile");
  for (i=1; i<50; i++) {
    griglia.innerHTML += `<div class="cella">${i}</div>`;
  }
  cellaAzzurra();
}

// click cella
function cellaAzzurra() {
  for (i=0; i<cella.length; i++) {
    cella[i].addEventListener("click", function(){
      this.classList.add("azzurro");
    });
  }
}