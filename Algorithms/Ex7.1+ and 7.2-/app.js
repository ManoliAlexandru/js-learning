const fillArray = (dimension) => {
  if (dimension > 10) {
    throw new Error("Maximal allowed size is 10!!!");
  }

  const array = new Array(dimension).fill().map(() => new Array(dimension));

  let counter = 0;

  // fill the main diagonal
  for (let i = 0; i < dimension; i++) {
    array[i][i] = counter;
    counter++;
  }

  // fill the upper diagonals
  for (let i = 1; i < dimension; i++) {
    for (let j = 0; j + i < dimension; j++) {
      array[j][j + i] = counter;
      counter++;
    }
  }

  // fill the downer diagonals
  for (let i = 1; i < dimension; i++) {
    for (let j = i; j < dimension; j++) {
      array[j][j - i] = counter;
      counter++;
    }
  }

  return array;
};

const array = fillArray(3);

console.table(array);
