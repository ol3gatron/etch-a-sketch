const container = document.querySelector(".container");
let fieldSize = prompt("Введите размер сетки")

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

createColumns(fieldSize)

const rows = document.querySelectorAll(".row");
rows.forEach(row => {
  row.addEventListener("mouseover", () => {
    row.classList.toggle("black")
  })
});