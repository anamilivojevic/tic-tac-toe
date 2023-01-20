// Tic Tac Toe code

function winFunction(cell1, cell2, cell3) {
  return (
    cell1.innerHTML != "" &&
    cell1.innerHTML == cell2.innerHTML &&
    cell1.innerHTML == cell3.innerHTML
  );
}

function winColumn() {
  return (
    winFunction(c1, c4, c7) ||
    winFunction(c2, c5, c8) ||
    winFunction(c3, c6, c9)
  );
}

function winRow() {
  return (
    winFunction(c1, c2, c3) ||
    winFunction(c4, c5, c6) ||
    winFunction(c7, c8, c9)
  );
}

function winDiagonal() {
  return winFunction(c1, c5, c9) || winFunction(c3, c5, c7);
}

function endGame() {
  if (confirm("Wanna play again?") == true) {
    location.reload();
  } else {
    alert("Thank you for playing, bye!");
  }
}

function changePlayer() {
  if (symbol == player1) {
    symbol = player2;
    btnPlayer2.classList.remove("disabled");
    btnPlayer1.classList.add("disabled");
  } else {
    symbol = player1;
    btnPlayer2.classList.add("disabled");
    btnPlayer1.classList.remove("disabled");
  }
}

function textAppears(id) {
  if (document.getElementById(id).innerHTML != "") {
    return;
  }

  document.getElementById(id).innerHTML = symbol;
  fullCells++;

  // We have to add a delay here using , otherwise writing in the HTML would occur
  // after the rest of the code of the function gets executed.
  // This happens because writing in the HTML is slower than executing JS code
  if (winRow() == true || winColumn() == true || winDiagonal() == true) {
    setTimeout(() => {
      alert(`${symbol} won!`), endGame();
    }, 50);
  } else if (fullCells == 9) {
    setTimeout(() => {
      alert("Draw game!"), endGame();
    }, 50);
  } else {
    changePlayer();
  }
}

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");
const c6 = document.getElementById("c6");
const c7 = document.getElementById("c7");
const c8 = document.getElementById("c8");
const c9 = document.getElementById("c9");

// declaring the symbols for each player
const player1 = "X";
const player2 = "O";

// player1 plays first, so the first symbol to be written is the same as
let symbol = player1;
let fullCells = 0;

const btnPlayer1 = document.getElementById("btn-player-1");
const btnPlayer2 = document.getElementById("btn-player-2");
