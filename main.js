'use strict';

const gameBoard = (() => {
  const boardContainer = document.querySelector(".game-board-container");
  let boardArr = ["x", "x", "x", "o", "o", "o", "x", "x", "x"];
  
  const displayBoard = () => { 
    boardArr.map((i, idx) => {
      const boardSqare = `<div class="board-square" data-index="${idx}">${i}</div>`;
      boardContainer.innerHTML += boardSqare;
    });
  };

  return {
    displayBoard
  }
})();

const player = (sign) => {
  // alert for choice
  const choice = sign
}

const playGame = (() => {

  const pickSquare = () => {
    const boardContainer = document.querySelector(".game-board-container");
    boardContainer.addEventListener("click", (e) => {
      const boardSquare = e.target;
      if (boardSquare.classList.contains("board-square")) {
        boardSquare.innerHTML =  'z';
      } else {
        return;
      };
    });
  };

  return {
    pickSquare
  }
})();
gameBoard.displayBoard();

playGame.pickSquare();