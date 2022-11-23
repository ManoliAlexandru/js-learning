const array = [-1, 3, 0, 11, 3, 43, -65, 12, 34, 456, 345, 242, -7, 5, 32, 5, 6, 5,66];

const findLessFiveNumber = (numberArray) => {
  for (const value of numberArray) {
    if (value < 5 ) {
      console.log(value);
    };
  };
};

const findMaxAndMin = (numberArray) =>{
  let minNumberIndex = null;
  let maxNumberIndex = null;
  let minNumber = array[0];
  let maxNumber = array[0];

  numberArray.forEach((value, index) => {
    if (value > maxNumber) {
      maxNumber = value;
      maxNumberIndex = index
    }

    if (value < minNumber) {
      minNumber = value;
      minNumberIndex = index
    }
  });

  console.log(`Numarul maxim este: ${maxNumber}, indexul este: ${maxNumberIndex}`);
  console.log(`Numarul minim este: ${minNumber}, indexul este: ${minNumberIndex}`);
};

const sortArray = (numberArray) => {
  numberArray.sort((a, b) => b - a)
  console.log(numberArray);
};

const average = (numberArray) => {
  let averageSum = numberArray.reduce((accumulator, item) => accumulator + item) / numberArray.length
  averageSum = Math.round(averageSum)
  console.log(`Average is: ${averageSum}`);

  const biggerThenAverage = numberArray.filter((item) => item > averageSum);
  console.log(biggerThenAverage);

  // numberArray.forEach((value) => {
  //   if (value > averageSum) {
  //     console.log(`${value} > ${averageSum}`);
  //   };
  // });
};

findMaxAndMin(array);
findLessFiveNumber(array);
sortArray(array);
average(array);
