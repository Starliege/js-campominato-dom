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
const griglia = document.querySelector('.campo')
const sceltaDiff = document.getElementById('scelta-diff')
const gioca = document.getElementById('genera')
const punti = document.querySelector('.risultato')
let arrayBombe = []
let punteggio = 0
let puntiMax

// griglia generata a seconda della diff
gioca.addEventListener('click', function(){
  gameReset() 
  if(sceltaDiff.value === '1'){
    // Difficile
    genGriglia(10)
    genBombe(100, arrayBombe)
    puntiMax = 100 - 16
    griglia.classList.add('difficile')
  } else if(sceltaDiff.value === '2'){
    // Medio
    genGriglia(9)
    genBombe(81, arrayBombe)
    puntiMax = 81 - 16 
    griglia.classList.add('medio')
  } else if(sceltaDiff.value === '3'){
    // Facile
    genGriglia(7)
    genBombe(49, arrayBombe)
    puntiMax = 49 - 16
    griglia.classList.add('facile')
  }
  console.log(arrayBombe.sort((a, b) => a - b))
})

// griglia basata sulle var date dalla diff
function genGriglia(dimensione){
  let numeroCelle = dimensione ** 2
  for(let i = 0; i < numeroCelle; i++){
    const cella = getBoxElement() 
    cella.innerHTML = i + 1
    // inserisco la cella
    griglia.append(cella)
    
  }
}

// caselle con l'event listener
function getBoxElement() {
  const box = document.createElement('div')
  box.classList.add('box')
  box.addEventListener('click', clicker)  
  return box
}

// funzione per i click
function clicker(){
  // game over o game win a seconda della casella che viene clicckata
  const box = this
  const numeroCella = parseInt(this.innerHTML) 
  if (arrayBombe.includes(numeroCella)){
    this.classList.add('bomb')
    gameOver()
  } else {
    this.classList.add('safe')
    punteggio++
    if ( puntiMax - punteggio === 0 ){
      gameWin()
    }
    punti.innerHTML = "Punteggio: " + punteggio 
  }
  // impedisco di premere la stessa casella due volte
  box.removeEventListener('click', clicker)
}

function genBombe(numeroDiCaselle, arrayBombe){
  // genero un array di bombe
  while (arrayBombe.length < 16 ){
    const randomNumber = Math.floor(Math.random() * numeroDiCaselle) + 1
    if (arrayBombe.includes(randomNumber)){
    }else{
      arrayBombe.push(randomNumber)
    }
}
  return arrayBombe  
}

function gameOver(){
  alert("GAME OVER")
  console.log("il tuo punteggio finale é " + punteggio)
  griglia.classList.add('gameover')
  punti.innerHTML = "Il tuo punteggio: " + punteggio 
}

function gameWin(){
  alert("YOU ARE WINNER")
  griglia.classList.add('gameover')
  punti.innerHTML = "Il tuo punteggio: " + punteggio 
}

function gameReset(){
    // resetto tutto
    console.clear()
    punteggio = 0
    griglia.innerHTML = ""
    griglia.classList.remove('small', 'medium', 'large', 'extrasmall', 'gameover')
    arrayBombe = []
    punti.innerHTML = 'Punteggio: '
}