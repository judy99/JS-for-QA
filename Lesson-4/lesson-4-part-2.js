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

// console.log('sum with for: ', sum1(numbers));
console.log('sum with forEach: ', sum2(numbers));
// console.log('sum with reduce: ', numbers.reduce((sum, number) => sum + number))

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