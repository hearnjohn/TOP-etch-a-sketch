// Create grid

function createGrid() {
  var e = document.getElementById("board"); // whatever you want to append the rows to:
  for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let x = 0; x < 16; x++) {
      let cell = document.createElement("div");
      cell.className = "gridsquare-uncolored";
      row.appendChild(cell);
    }
    e.appendChild(row);
  }
}

function clearCells() {
  let squares = document.querySelectorAll("div.gridsquare-colored");
  squares.forEach((square) => {
    square.classList.add("gridsquare-uncolored");
    square.classList.remove("gridsquare-colored");
  });
}

function addGridEventListeners() {
  let squares = document.querySelectorAll("div.gridsquare-uncolored");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.classList.add("gridsquare-colored");
      square.classList.remove("gridsquare-uncolored");
    });
  });
}

createGrid();
addGridEventListeners();
