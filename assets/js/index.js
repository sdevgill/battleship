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

  createContainer('container');
  createGrid(board.numRows, board.numCols);

  const hits = e => {
    const row = e.target.getAttribute("data-row");
    const col = e.target.getAttribute("data-col");
    // Print the result of the hit to the console
    console.log(row, col);
    // console.log(board.makeHit(row, col));
    const hit = board.makeHit(row, col);
    const squareNum = createParagraph("square-num", board.grid[row][col]);
    // If player clicks a square with no ship, change the color to red, else change the color to green with ship number
    if (hit === null) {
      e.target.style.backgroundColor = "red";
    } else if (hit !== null) {
      e.target.style.backgroundColor = "green";
      e.target.appendChild(squareNum);
    }
  }

  document.addEventListener('click', hits);

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
