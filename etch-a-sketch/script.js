const grid = document.querySelector(".grid");

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

// const gridCell = document.querySelectorAll(".grid-cell");
// gridCell.forEach((".grid-cell") => {
//   gridCell.addEventListener("mouseover", () => {
//     gridCell.classList.toggle("grid-cell-black");
//   });
// });