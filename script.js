const p1round = document.querySelector("#r1");
const p2round = document.querySelector("#r2");
const p1global = document.querySelector("#g1");
const p2global = document.querySelector("#g2");
const victory = document.querySelector("#victory");
let currentPlayer = 1;
let global = p1global;
let round = p1round;

function changeTurn() {
  if (currentPlayer == 1) {
    currentPlayer = 2
  } else { 
    currentPlayer = 1
  }

  if (currentPlayer == 1) {
    round = p1round;
    global = p1global;
    document.querySelector("#p1name").style.textDecoration = "underline";
    document.querySelector("#p2name").style.textDecoration = "none";
  } else {
    round = p2round;
    global = p2global;
    document.querySelector("#p2name").style.textDecoration = "underline";
    document.querySelector("#p1name").style.textDecoration = "none";
  }
}

function rollDice() {
  var result = Math.floor(Math.random() * 6) + 1;
  
  document.querySelector(".dice").setAttribute("src",
                "img/Dice" + result + ".png");
  
  if (result == 1) {
    round.innerHTML = "0";
    changeTurn();
  } else { 
    round.innerHTML = Number(round.innerHTML) + result;
  } 
}

function holdScore() {
  global.innerHTML = Number(round.innerHTML) + Number(global.innerHTML);
  round.innerHTML = "0";

  endGame();
  changeTurn();
}

function newGame() {
  p1round.innerHTML = "0";
  p2round.innerHTML = "0";
  p1global.innerHTML = "0";
  p2global.innerHTML = "0";
  victory.innerHTML = "";
  document.querySelector('.rollbtn').disabled = false;
  document.querySelector('.holdbtn').disabled = false;

  currentPlayer = 2;
  changeTurn();
}


function endGame() {
  if (global.innerHTML >= 100) {
    victory.innerHTML = "Le joueur " + currentPlayer + " a gagné";
    document.querySelector('.holdbtn').disabled = true;
    document.querySelector('.rollbtn').disabled = true;
  } else {
    return;
  }
}
