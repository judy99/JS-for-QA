// 1)
// Create object "post" which should contain following key:
// title body(string value),
// author(string value),
// views(number value),
// isLive (boolean value),
// someFunction(function type) - result of calling console.log('Some value'),
// comment: object which contain information about the authot - first name, last name and comment body.

const post = {
    title: 'My title',
    author: 'Author name',
    view: 3,
    isLive: true,
    someFunction: () => {
        console.log('Some value')
    },
    comment: {
        firstName: 'author first name',
        lastName: 'author last name',
        'comment body': 'some comment'
    }
}

// // Example
// const post = {
// titleBody: 'Some cool title',
// ...
// }
// 1.1 Get "comment body" key and "someFunction" value using dots and bracket notation

console.log('get the value via dot and brackets:', post.comment['comment body'])
console.log('get the value via brackets:', post['comment']['comment body'])

// get "someFunction" value using dots and bracket notation
console.log('"someFunction" value is: ', post.someFunction())
console.log('"someFunction" value is: ', post['someFunction']())

console.log('Comment has ')
for (let key in post.comment) {
    console.log('key: ', key, 'value:', post.comment[key] )
}

// 1.2 Get the length of post object and write the script which should return the list 
// of the properties values of a "post" object
const postLength = Object.keys(post).length
console.log('post length = ', postLength)

const getPropsList = () => {
    if (postLength > 0)
        for (let myKey in post) {
            console.log(`${myKey} : ${post[myKey]}`)
        }
    console.log('Object is empty')
}

// ***************
// better solution
// ***************

for (let key in post){
    console.log(key)
    console.log(post[key])
};

// 2.
// Write the function called "helloColleagues" which should accept two parameter 
// "company" and "team" and should return the string with 
// `I am working in "company" in amazing "team"`
//  - use template string syntax to paramerize string value - ``

function helloColleagues (company = 'Some Company', team = 'Some Team') {
    return `I am working at ${company} in amazing ${team}`
}

console.log(helloColleagues('Google', 'Seller team'))
console.log(helloColleagues('Google'))

// 2.1.
// Write the function isEmpty(obj) which returns true if the object has no properties, 
// false otherwise.
// Should work like that:
// let schedule = {};
// console.log( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) ); // false

const isEmpty = (obj) => {
    return Object.keys(obj).length ? false : true
}

// *******
// another solution
// *******
let isEmpty = (obj) => {
    return !Object.keys(obj).length;
}


let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) );

// 2.2.
// Write the function that takes two numbers and returns the maximum of two
const maxNumber = (a = 0, b = 0) => {
    if ((typeof a) === 'number' && (typeof b) === 'number') {
        return (a > b) ? a : b
    } else {
        return 'Please type valid function argument data'
    }
}

// 3.
// We have an object storing salaries of our team:
// let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 }
// Write the function to sum all salaries and return it. Should be 1000 in the example above.
// If salaries is empty, then the result must be 0.
let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 }
const sumSalaries = (salaries) => {
    let sum = 0
        for (let key in salaries) {
            if (typeof salaries[key] === 'number' && salaries[key] >= 0) {
                sum += salaries[key]
            } else {
                console.log('Invalid data')
                return -1
            }
        }
        return sum
}

console.log(sumSalaries(salaries))


// 3.1.
// We have an object storing salaries of our team:
// let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 } 
// Write the function that returns name and value of employer that gets biggest salary

let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 }

const getMaxSalaryEmployees = (obj) => {
    let maxSalaryEmployees = []

    const salary = Object.values(obj)
    const maxSalary = salary.reduce((mx, salary) => {
        return (mx >= salary) ? mx : salary
    })

    // get all employees with the max salary
    for (let key in salaries) {
        if (obj[key] === maxSalary) {
            maxSalaryEmployees = [ ...maxSalaryEmployees, { [key]: obj[key] } ]
        }    
    }
    return maxSalaryEmployees
}
console.log(getMaxSalaryEmployees(salaries))


// another solution for 1 employee 
// ********
let salaries = { 
    Mykola: 250, 
    Pavlo: 250, 
    Petro: 500 
};

function getBiggestSalary (salariesObject) {
    let highestSalary = 0;
    let richestEmployeeName = '';
    for (let key in salariesObject) {
        if (highestSalary <= salariesObject[key]) {
            highestSalary = salariesObject[key]; // first iteration 250, second iteration 250
            richestEmployeeName = key; // first it Mykola, Petro
        }
    }
    return {  // you can return any data type
        name: richestEmployeeName,
        salary: highestSalary
    };
}

getBiggestSalary(salaries);

// 4.
// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
// For instance:
// // before the call let menu = { width: 200, height: 300, title: "My menu" };
// multiplyNumeric(menu);
// // after the call menu = { width: 400, height: 600, title: "My menu" }; 
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
// P.S. Use typeof to check for a number here.

const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') obj[key] = obj[key] * 2
        else {
            console.log('Wrong data type for multiplying')
        }
    }
}

let menu = { width: 200, height: 300, title: "My menu"};

console.log('menu before multiplyNumeric:', menu)

multiplyNumeric(menu)

console.log('menu after multiplyNumeric:', menu)


// 5.
// Show stars function showStars(rows) { for (let row = 1; row < rows; rows++ ){ let star = *; for() } }
// showStars(4) // * ** *** ****

const showStars = (rows) => {
    if (rows <= 0) return
    let star = '*'

    for (let i = 1; i < rows; i++) {
        star = star + ' '

        for (let j = 0; j <= i; j++) {
            star = star + '*' 
        }
    }
    console.log(star)
}

showStars(4)

// another solution 
function showStars(rows){
    let star = "";
    for (let row = 0; row < rows; row ++) {
        star += "*"; 
        console.log(star);
      }
    }
    showStars (4); 