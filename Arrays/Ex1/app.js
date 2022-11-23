/*
Создайте массив из n чисел и выводите его в консоль 5 разными способами:
for, while, do … while
for in
for of
forEach
map
*/

const array = [5, 64, 43, -23, 34, 45, 4];
let i = 0;

for (i = 0; i < array.length; i++) {
    // console.log(array[i]);
}

i = 0;
while (i < array.length) {
    // console.log(array[i]);
    i++;
}

i = 0;
do {
    // console.log(array[i]);
    i++;
} while (i < array.length);


i = 0;
for (i in array) {
    // console.log(array[i])
}

for (const value of array) {
    // console.log(value);
}

array.forEach(el => console.log(el));

array.map(el => console.log(el));

