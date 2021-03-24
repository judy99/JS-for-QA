// Exercise 1
// Write a function which should return sum of all numbers inside array
const numbers = [1, -1, 2, 3];

// function sum1(numbers) {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i]
//     }
//     return sum
// }

function sum2(numbers) {
    let sum = 0
    numbers.forEach((number) => {
        sum = sum + number
    })
    return sum
}

// solution with for .. in
function sum(numbers) {
    let sum = 0;
    for (let number of numbers){
        sum += number;
    }
    return sum;
}

// solution with reduce
// Reducer
const numbers = [1, -1, 2, 3];

let sum = (numbers) => {return numbers.reduce((sum, current) => sum + current, 0)}

console.log(sum(numbers));

const numbers = [1, -1, 2, 3];
/*
The reducer function returns the value and assigns it to the accumulator.
The battery value is stored after all iterations and returned at the end as the only result.
*/
numbers.reduce((accumulator, currentValue, currentIndex, array) => {
    /*
        accumulator the same as our "let sum = 0;"
        currentValue will iterate throught all elements in array, 
        currentIndex will iterate throught all indexes in array
        array - source array
        so on each call we want to get the current value and add it to the accumulator
    */

    return accumulator + currentValue; // reduce with get the result and store it in accumulator
}, 0) // initial value for accumulator



// console.log('sum with for: ', sum1(numbers));
console.log('sum with forEach: ', sum2(numbers));
// console.log('sum with reduce: ', numbers.reduce((sum, number) => sum + number))


// *******************************************************
// Exercise 2
// When you run arrayFromRange function should dispayed numbers from min to max 
// Also this function should accept negative numbers
function arrayFromRange(min, max) {
    if (max <= min) return []

    const length = max - min;
    let result = []
    for (let i = 0, num = min; i <= length; i++, num++) {
        result = [...result, num]
    }
    result.forEach((num) => console.log(num))
}

arrayFromRange(1, 4)
arrayFromRange(-10, -8)

// better solution using push()
const arrayFromRange = (min, max) => {
    let arr = [];
    min = Number(min);
    max = Number(max);
    while (min <= max) {
        arr.push(min);
        min++;
    }
    return arr;
}


// Exercise 3
// Need to create function which displays the max number from the array
const numbers = [1, 2, 3, 4, 5];
const maxNumber = getMax(numbers);

console.log(maxNumber) // should display max number from the array 5

function getMax(arr) {
    let maxVal = arr[0] 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= maxVal) maxVal = arr[i]
    }
    return maxVal
}

// other solitions
function getMax([]) {
  return Math.max(...numbers) // use native methods
}

const getMax = (numbers) => {
    let max = Number(numbers[0]);
    for(let i = 1; i < numbers.length; i++) {
        max = (numbers[i] >= max) ? Number(numbers[i]) : max;
    }
    return max;
}

getMax = (arr) => {
  arr.sort((a, b) => a - b)
  console.log(arr[arr.length -1])
}

// ***
// Sort function explanation

// If the result is positive b is sorted before a
// If the result is 0 no changes are done with the sort order of the two values.
// If the result is negative a is sorted before b.

console.log(num.sort((a, b) => a - b)); 
// first call (15 - 2) - positive 2 move at the begining
// second call (-25 - 2) - negative vaue

/*
function compare(a, b) {
    if (a is less than b by some ordering criterion) {
      return -1;
    }
    if (a is greater than b by the ordering criterion) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  */


// Exercise 4

let movies = [
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.4},
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'd', year: 2019, rating: 3.9},
]

// Return all movies in 2019 with rating > 4
// Sort them by their rating in descending order
// Pick their title 'a', 'b' ...
// So, the result should be ["a", "c"]

const rating = 4
const year = 2019
const result = movies
    .filter((movie) => movie.year === year && movie.rating > rating)
    .sort((a, b) => b.rating - a.rating )
    .map((movie) => movie.title)

console.log('result = ', result)