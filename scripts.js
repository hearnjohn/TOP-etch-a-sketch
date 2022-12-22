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
  let squares = document.querySelectorAll("gridsquare-colored");
  squares.forEach((square) => {
    square.classList.add("gridsquare-uncolored");
    square.classList.remove("gridsquare-uncolored");
  });
}

function addGridEventListeners() {}

createGrid();
