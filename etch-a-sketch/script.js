const grid = document.querySelector(".grid");

function createGridCell(x) {
  for (i = 0; i < x; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-cell");
    grid.appendChild(gridItem);
  }
}

createGridCell(16*16);