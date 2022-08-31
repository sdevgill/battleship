import Board from "./board.js";

document.addEventListener("DOMContentLoaded", () => {
  const h2 = document.querySelector("h2");
  const resetButton = document.getElementById("reset-game");

  let won = false;
  let board = new Board();
  console.log(board.grid);

  const createContainer = (className) => {
    const container = document.createElement("div");
    container.className = className;
    document.body.appendChild(container);
  }

  createContainer('container');

  const createParagraph = (className, text) => {
    const paragraph = document.createElement("p");
    paragraph.className = className;
    paragraph.innerText = text;
    return paragraph;
  }

  const createGrid = (rows, cols) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const square = document.createElement("div");
        square.className = "square";
        square.setAttribute("data-row", i);
        square.setAttribute("data-col", j);
        document.querySelector(".container").appendChild(square);
      }
    }
  }

  createGrid(board.numRows, board.numCols);

  const hits = e => {
    if (!won) {
      const row = e.target.getAttribute("data-row");
      const col = e.target.getAttribute("data-col");
      console.log(row, col);
      // console.log(board.makeHit(row, col));
      const hit = board.makeHit(row, col);
      const squareNum = createParagraph("square-num", board.grid[row][col]);

      if (hit === null) {
        e.target.style.backgroundColor = "red";
      } else if (hit !== null) {
        e.target.style.backgroundColor = "green";
        e.target.appendChild(squareNum);
      }

      if (board.isGameOver()) {
        h2.innerText = "You win!";
        won = true;
      }
    }
  }

  const resetGame = () => {
    won = false;
    h2.innerText = "";
    board = new Board();
    document.querySelector(".container").innerHTML = "";
    createGrid(board.numRows, board.numCols);
    console.log(board.grid);
    // document.location.reload();
  }

  document.addEventListener('click', hits);
  resetButton.addEventListener('click', resetGame);
});
