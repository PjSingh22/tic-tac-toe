'use strict';

const gameBoard = (() => {
  const boardContainer = document.querySelector(".game-board-container");
  let boardArr = ["x", "x", "x", "o", "o", "o", "x", "x", "x"];
  
  const displayBoard = () => { 
    console.log(boardContainer)
    for (let i = 0; i < boardArr.length; i++) {
      // const boardSquare = document.createElement("div");
      // boardSquare.classList.add("board-square");
      // boardSquare.setAttribute("id", i);
      // boardSquare.textContent = boardArr[i];
      // boardContainer.appendChild(boardSquare);

      const boardSqare = `<div class="board-square" data-index="${i}">${boardArr[i]}</div>`;
      boardContainer.innerHTML += boardSqare;
    }
  };

  return {
    displayBoard
  }
})();


gameBoard.displayBoard();