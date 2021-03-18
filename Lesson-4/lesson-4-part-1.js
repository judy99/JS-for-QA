// Ex 1
// Create array, called it Post which should contains any:
// - numeric value,
// - boolean value,
// - string value,
// - undefined,
// - function with some console.log,
// - array of objects
// Each value should have different array index

const f = () => {
    console.log('hi')
}
const person = {firstName: 'Vasya', lastName: 'Pupkin'}
const auth = {login: 'login@net.com', password: '123', checked: true}

const Post = [1, true, 'some string', undefined, f, [ person, auth, {} ]]

// Ex 1.1
// Based on previously created arrray:
// - Get the first and last array value
const firstValue = Post[0]
const lastValue = Post[Post.length - 1]

console.log('firstValue = ', firstValue)
console.log('lastValue = ', lastValue)

// - Get value of the function by array index and log value
console.log(Post[4]())

// - Get value of "array of objects" by array index and log value
console.log(Post[Post.length - 1][0])
