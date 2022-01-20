// let popup = prompt("Enter a grid size. Example: 4 -> 4x4")

const grid = document.querySelector(".grid");
const resetButton = document.createElement("button");
const btn = document.querySelector(".reset");



function createGridCell(x) {
  for (i = 0; i < x; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-cell");
    grid.appendChild(gridItem);
  }
}

createGridCell(16*16);

const gridCells = document.querySelectorAll(".grid-cell");
gridCells.forEach((gridCells) => {
  gridCells.addEventListener("mouseover", () => {
    gridCells.classList.add("grid-cell-black");
  });
});


btn.addEventListener("click", () => {
  gridCells.forEach((gridCells) => {
    gridCells.classList.remove("grid-cell-black");
  });
});