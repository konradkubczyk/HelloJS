// Sum of elements of a 2D array

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let array = [];

let xDimension = getRandomInteger(2, 5);
let yDimension = getRandomInteger(2, 5);

for (let i = 0; i < xDimension; i++) {
    array[i] = [];
    for (let j = 0; j < xDimension; j++) {
        array[i][j] = getRandomInteger(0, 10);
    }
    console.log(array[i].join(" "));
}

let sum = 0;
console.log('');

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        sum += array[i][j];
    }
}

console.log(`Sum: ${sum}`)