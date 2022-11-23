const numberArray = [2, 4, 6, 3, 8, 34, 5];

const square = (array) => array.map(el => el ** 2);
const convert = (fn, array) => fn(array);
const result = convert(square, numberArray);
console.log(result);