
const number = [];
let index = 0;
let sum = 0;

const sumInputNumbers = () => {
  while (true) {
    const promptResult = Number(prompt("Введите число"));

    if (!promptResult) {
      break;
    }
    
    number[index] = promptResult;
    sum += number[index];
    index++;
  }
  console.log(number);
  console.log(sum);
};
sumInputNumbers();