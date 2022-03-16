'use strict';

const gameBoard = (() => {
  const boardContainer = document.querySelector(".game-board-container");
  let boardArr = ["", "", "", "", "", "", "", "", ""];

  const displayBoard = () => { 
    boardArr.map((i, idx) => {
      const boardSqare = `<div class="board-square" data-cell data-index="${idx}">${i}</div>`;
      boardContainer.innerHTML += boardSqare;
    });

    // const updateArray = (index, currentChoice) => {
    //   boardArr[index] = currentChoice;
    // }
  };

  return {
    displayBoard,
    // updateArray,
  }
})();

const player = (sign) => {
  // alert for choice
  const choice = sign
}

const playGame = (() => {
  const boardContainer = document.querySelector(".game-board-container");
  const boardCells = boardContainer.childNodes;
  const resetButton = document.querySelector(".reset-button");
  const winningMessageContainer = document.querySelector(".winning-message-container");
  const winningMessage = document.querySelector('.message');
  // const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  let circlesTurn;
  let currentChoice;
  const winningCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

  const pickSquare = () => {
    boardContainer.addEventListener("click", (e) => {
      const boardSquare = e.target;
      if (!boardSquare.classList.contains("board-square")) return;
      if ((boardSquare.innerHTML === "x" || boardSquare.innerHTML === "o")) {
        return;
      } else {
        placeMark(boardSquare);
        gameover();
      };
    });
  };
  const placeMark = (boardSquare) => {
    boardSquare.innerHTML = circlesTurn ? "o" : "x";
    currentChoice = circlesTurn ? "o" : "x";
    circlesTurn = !circlesTurn;
  }
  const checkWin = () => {
    return winningCombos.some(combo => {
      return combo.every(index => {
        return boardCells[index].innerHTML === currentChoice;
      });
    });
  };

  const gameover = () => {
    if(checkWin()) {
      winningMessage.innerHTML = `${currentChoice} wins!`;
      winningMessageContainer.classList.remove("hide");
    } else if(checkDraw()) {
      winningMessage.innerHTML = "It's a draw!";
      winningMessageContainer.classList.remove("hide");
    }
    resetButton.addEventListener("click", () => {
      location.reload();
    });
  }

  const checkDraw = () => {
    let boardSquares = document.querySelectorAll(".board-square");
    for (let i = 0; i < boardSquares.length; i++) {
      if (boardSquares[i].innerHTML === "") {
        return false
      }
    }
    return true
  };
  const startGame = () => {
    pickSquare();
  };

  return {
    startGame
  }
})();
gameBoard.displayBoard();
playGame.startGame();