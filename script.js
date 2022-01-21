container = document.querySelector(".container");

function createRows(x) {
  for (let i = 0; i < x; i++) {
    gridItem = document.createElement("div");
    gridItem.classList.add("fieldItem")
    container.appendChild(gridItem)
  }
}

createRows(4);