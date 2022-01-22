const container = document.querySelector(".container");
let fieldSize = prompt("Enter field size")

function createRows(y) {
  for (let i = 0; i < y; i++) {
    row = document.createElement("div")
    row.classList.add("row")
    column.appendChild(row)
  }
}

function createColumns(x) {
  for (let i = 0; i < x; i++) {
    column = document.createElement("div");
    column.classList.add("column")
    container.appendChild(column)
    createRows(x)
  }
}

function randomColor() {
  let random = Math.floor(Math.random() * 7 + 1);
  switch (random) {
    case 1:
      return "red";
      break;
    case 2:
      return "orange";
      break;
    case 3:
      return "yellow";
      break;
    case 4:
      return "green";
      break;
    case 5:
      return "deepskyblue";
      break;
    case 6:
      return "blue";
      break;
    case 7:
      return "#8b00ff";
      break;
  }
}

createColumns(fieldSize)

const rows = document.querySelectorAll(".row");
rows.forEach(row => {
  row.addEventListener("mouseover", () => {
    row.style.cssText = `background-color: ${randomColor()}`
  })
});