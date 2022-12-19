const isPrimaryCell = (i, j) => {
  return i % 2 === j % 2;
};

const drawTable = (rows = 8, cols = 8, style) => {
  const table = document.createElement("table");

  for (let i = 0; i <= rows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j <= cols; j++) {
      const cell = document.createElement("td");

      cell.style.backgroundColor = isPrimaryCell(i, j) ? style.secondaryColor : style.primaryColor;  // to do сделать через if
      row.append(cell);
    }
    table.append(row);
  }

  document.body.appendChild(table);
};

drawTable(8, 8, {
  primaryColor: "blue",
  secondaryColor: "green",
});
