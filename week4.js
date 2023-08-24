

// Use const every time you can and let only if it will be changed
// const username = prompt("What is your username?")

// // INTENDED: if username is equal to natalie alert you're the best
// // ACTUALLY DOING: set username to "natalie" then alert "You're the best"
// if(username === "natalie") {
//     alert("You're the best")
// }


// function checkUsername(user) {
//     return user.username === "jose"
// }

// // Convert it to an arrow function
// const checkUsername = (user) => {
//     return user.username === "jose"
// }

// // Advice: always do this one
// // If you have exactly one line in the body of the function, you can get rid of the curly brackets and the return
// const checkUsername = (user) => user.username === "jose"

// // Advice: only do this one if it makes it more readable to you
// // If you have exactly one parameter you can remove the parenthesis
// const checkUsername = user => user.username === "jose"


// When to use arrow functions
//1) When you feel like it
//2) When it's a callback function
//3) When it only has one line in it -> make it a one line arrow function


// higher order function
// const doSomethingToNumbers = (number1, number2, callback) => {
//     const result = callback(number1, number2)
//     console.log(result)
// }

// const add = (a, b) => a + b

// doSomethingToNumbers(5, 3, add) // add is a callback function right here


// function startSomething() {
//     console.log("We're starting")
//     doSomethingToNumbers(5, 3, (a, b) => {
//         let result = a
//         result += 5
//         result += 5
//         for(let i = 0; i < a; i++) {
//             result += b
//         }
//         return result
//     })


//     return "hello"
// }





let emailList = [
    {
        id: 234,
        author: "Natalie",
        to: "Calvin",
        message: "Heyyyy",
        read: false,
    },
    {
        id: 1654,
        author: "Natalie",
        to: "Calvin",
        message: "What's up?",
        read: true,
    },
    {
        id: 474,
        author: "Dylan",
        to: "Calvin",
        message: "Good day",
        read: false,
    }
]

// [
//     "Natalie: Heyyyy",
//     "Natalie",
//     "Dylan"
// ]

// Map - most common use is mapping an array of objects to how those objects should be displayed
alert(emailList.map( email => email.author + ": " + email.message ).join("\n")) // \n = Enter

// map knows it's working with emailList

// map grabs the first item in emaillist
// callback({ id: 234, author: "Natalie" and more }) // callback is    email => email.author + ": " + email.message
// the string that's spit out "Natalie: Heyyyy" is put in the new array

// map grabs the next item in emaillist
// callback({ id: 1654, author: "Natalie" and more }) // callback is    email => email.author + ": " + email.message
// the string that's spit out "Natalie: What's up" is put in the new array

// map grabs the next item in emaillist
// callback({ id: 474, author: "Dylan" and more }) // callback is    email => email.author + ": " + email.message
// the string that's spit out "Dylan: Good day" is put in the new array

// returns that array with all the strings ["Natalie: Heyyyy", "Natalie: What's up", "Dylan: Good day"]


// Filter - most common use is to filter things (used for search)

const unreadEmails = emailList.filter( email => !email.read )

// copied line to display it
alert("Unread Emails\n\n" + unreadEmails.map( email => email.author + ": " + email.message ).join("\n"))


// Find - most common use is to find by the id

// Get the email with the id of 474

const specialEmail = emailList.find(email => email.id === 474)

alert("Special Email\n\n " + specialEmail.author + ": " + specialEmail.message)