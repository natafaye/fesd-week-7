// CONSOLE: '🎫'

function getTicket(money) { // let money = 10
  if (money >= 10) {
    return '🎫' //console.log('🎫')
  }
}

function enterTheater(movieTicket) { // let movieTicket = undefined
  if (movieTicket === '🎫') {
    alert('Enjoy your movie!')
  } else {
    alert('You need a ticket to see the movie.')
  }
}

// Function calls simplify to whatever that function returns
// If the function has no return statement it simplifies to undefined
const ticket = getTicket(10) // WAIT
enterTheater(ticket)


// DATA TYPES

// BASIC
// bool, string, number
// Actually in the variable

// FANCY
// object, array
// too big to actually be "in" the variable
// pointed to



// const and let make a new variable
// Scope: wherever that const or let is, the variable is trapped inside there
// You can have two variables with the same name if they're in different scopes
// When you use a variable name it looks for the "closest" line with a let or const and that variable name
// STRONG GUIDELINE: Don't use the same name for a variable in overlapping scope
// We do reuse variable names constantly and we should to make it easy to understand what's in it

let myString = "Here is an equation + (5 + 3) + isn't it great"
let mySecondString = "Here is an equation " + (5 + 3) + " isn't it great"
let myThirdString = `Here is an equation ${5 + 3} isn't it great`

console.log(myString)
console.log(mySecondString)
console.log(myThirdString)


// The most confusing thing is that input is a variable (specifically a parameter)
// Somewhere this happens: let input = WHATEVER THEY PASS IN
// const myFunction = input => "output"
// // c u l8r

// function myFunction(input) {
//   return "output"
// }
// see you later




const teach = () => alert("smart things")

// ALERT: "smart things"

function getTeachFunction() {
  // On a line with a return the first thing it will do is simplify the part after the return to a value
  // To simplify a function call it calls the function and simplifies to whatever that function returns
  return teach
}

// teach is a toaster
// teach() is toast

//  log out what getTeachFunction returns
console.log(getTeachFunction()) // () => alert("smart things")


//specialFunction(teach, isDeveloper)





// function filterOutEmpty(array) {
//   const filteredArray = []
//   for (let i = 0; i < array.length; i++) {
//     const item = array[i]
//     if (item < 100) {
//       filteredArray.push(item)
//     }
//   }
//   return filteredArray // ["apple", "banana"]
// }

// const fruits = ["apple", "", "banana", "", ""]
// const fullStrings = filterOutEmpty(fruits)


// const prices = [10, 150, 40, 37]
// const cheaperPrices = filterOutEmpty(prices)


// In professional I almost never see a for loop only .map, .filter, .find, .foreach


// THE BIG CONCEPTS
// Array methods (map, filter, find) with arrays of objects
//     Callbacks
//     Functions calling other functions
//     Navigating inside of arrays of objects



const books = [
  {
    id: 0,
    title: "Jane Eyre",
    genre: "Classic"
  },
  {
    id: 1,
    title: "Ancillary Justice",
    genre: "Science Fiction"
  },
  {
    id: 2,
    title: "Atomic Habits",
    genre: "Nonfiction"
  },
  {
    id: 3,
    title: "Dune",
    genre: "Science Fiction"
  },
]

// Map - map each book in this style: "Jane Eyre (Classic)"
// Filter - filter for all Science Fiction books (Ancillary Justice, Dune)
// Find - find the book with the id of 2 (Atomic Habits)


// MAP - most common use of map is to map objects to how we want them displayed
// Callback that takes in each book as input and returns the string in this format "Title (Genre)"
alert("Here are the boooks " + books.map(  book => book.title + " (" + book.genre + ")"  )  )

// FILTER - most common use of filter is to filter or search
const scienceFictionBooks = books.filter( book => book.genre === "Science Fiction" )
console.log(scienceFictionBooks)


// FIND - most common use of find is to find one with a particular id
const specificBook = books.find( book => book.id === 3 )
console.log(specificBook)