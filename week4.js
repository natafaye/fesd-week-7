

// const sayHi = () => "fdsfds"

// // Use an arrow functione very time:
// // 1) If it's one line
// // 2) callback function

// // Exactly one line
// // return and curly brackets go together
// const addFive = (number) => number + 5

// // Don't do this (probably)
// // Makes you look like you're not comfortable with arrow functions
// const addSeven = (number) => {
//     return number + 7
// }

// console.log(addFive(3))

// // Exactly one parameter
// // Don't have to remove the parenthesis I usually keep them
// const addSix = number => number + 6




// //  const full = papers.filter( p => p !== '' )


// // higher order function = a function that has a callback parameter (accepts a callback function as a paramter)
//  const doMathWith3And5AndGiveAnswer = (mathCallback) => { // mathCallback = (a, b) => a - b - 5
//     const result = mathCallback(3, 5)
//     alert(result)
//  }

//  doMathWith3And5AndGiveAnswer(  (firstNumber, secondNumber) => firstNumber - secondNumber  )

//  const add = (a, b) => a + b
//  doMathWith3And5AndGiveAnswer(add)

//  doMathWith3And5AndGiveAnswer("hello") // ERROR

//  const subtract = (a, b) => a - b - 5
//  doMathWith3And5AndGiveAnswer(subtract)

//  // higher order function
//  const fancyTotalOfArray = (array, callback) => {
//     const total = 0
//     for(const item in array) {
//         total += callback(item)
//     }
//     return total
//  }

//  // call higher order function and give it a callback function
//  fancyTotalOfArray([1, 2, 3], (number) => number * number)


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

//  [
//     "Calvin:\nHeyyyy",
//     "Natalie:\nWhat's up?",
//     "Dylan:\nGood day"
// ]

// "Calvin:\nHeyyyy\n\nNatalie:\nWhat's up?\n\nDylan:\nGood day"

// Map
// arrays of data to how that data will be displayed
alert( emailList.map(email => email.author + ":\n" + email.message ).join("\n\n") ) // \n = new line (enter)


// Filter
// filter for emails that are unread
const unreadEmails = emailList.filter(  (email) => !email.read  )

alert( "UNREAD EMAILS\n\n" + unreadEmails.map(email => email.author + ":\n" + email.message ).join("\n\n") )

// Find
// find by id
const specialEmail = emailList.find( email => email.id === 474 )
console.log(specialEmail)
alert("SPECIAL EMAIL\n\n" + specialEmail.author + ":\n" + specialEmail.message)

