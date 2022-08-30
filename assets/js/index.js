import Board from "./board.js";

document.addEventListener("DOMContentLoaded", () => {
  // Examine the grid of the game board in the browser console
  // Create the UI of the game using HTML elements based on this grid
  let board = new Board();
  console.log(board.grid);

  const createContainer = (className) => {
    const container = document.createElement("div");
    container.className = className;
    document.body.appendChild(container);
  }

  const createGrid = (rows, cols) => {
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        const square = document.createElement("div");
        square.className = "square";
        square.setAttribute("data-row", i);
        square.setAttribute("data-col", j);
        document.querySelector(".container").appendChild(square);
      }
    }
  }

  createContainer('container');
  createGrid(board.numRows, board.numCols);

});


// Grid:
// [null,    3, null, null, null, null, null, null, null]
// [null,    3, null, null, null, null, null, null, null]
// [null,    3,    3, null, null, null, null, null, null]
// [null, null,    3, null,    5,    5,    5,    5,    5]
// [null, null,    3, null, null, null, null, null, null]
// [null,    4, null, null, null, null, null, null, null]
// [null,    4, null, null, null, null, null, null, null]
// [null,    4, null, null, null, null, null, null,    2]
// [null,    4, null, null, null, null, null, null,    2]
