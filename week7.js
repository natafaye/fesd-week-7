function getTicket(money) { // let money = 10
  if (money >= 10) {
    return '🎫'
  }
}

function enterTheater(movieTicket) { // let movieTicket = '🎫'
  if (movieTicket === '🎫') {
    alert('Enjoy your movie!')
  } else {
    alert('You need a ticket to see the movie.')
  }
}

// Simplify right hand side down to a value
// A function call simplifies to whatever that function returns
let ticket = getTicket(10) // undefined
// Anything we pass in will be simplified to a value
enterTheater(ticket)


// ticket = '🎫'



// Little machine
function getFrozenYogurt(isCone) {
  if (isCone) {
    return '🍦'
  } else {
    return '🍨'
  }
}

function addToppings(yogurt) { // let yogurt = '🍨'
  return yogurt + '🍬'
}

// Go to the yogurt place with your significant other

const myCup = getFrozenYogurt(false) // '🍨'
const beauCup = getFrozenYogurt(true) // '🍦'

const myFinishedCup = addToppings(myCup)
const beauFinishedCup = addToppings(beauCup) // '🍦🍬'

console.log("I'm eating " + myFinishedCup) // '🍨🍬'
console.log("Boo eating " + beauFinishedCup) // '🍦🍬'



// let = variable can change whenever
// const = set once never changed
// "Constant" = a variable that ALWAYS has one specific value

// let (keyword)
let myAge = 40
myAge++

// const (keyword)
const myFavoriteColor = prompt("What's your favorite color?") // "yellow"
// won't ever change

// Constant (concept not a keyword)
// Often name in 'screaming snake case' (you don't have to know that)
// Computer doesn't know or care about this
const NUMBER_OF_ROWS = 3




// Simple Data Types
// string, boolean, number
// Put straight into the variable
// If a friend texts you asking for a picture, you send them a copy of the picture

const number = 20
const duncansNumber = number // puts a copy of number in duncansNumber

// Complex Data Types
// array, object, function
// Pointed to by the variable (too big to go inside a variable)
// If a friends text you asking for your favorite restaurant, you might send them a pin to that restaurant (123 main st)

const list = [1, 2, 3]
list.push(4) // ALL GOOD

const duncansList = list // points to the exact same array as list



const raceFinishers = ["paulette", "duncan"]
raceFinishers.push("natalie")
raceFinishers[0] // "paulette"


const email = {
  id: 23, // identifier for us (could be named whatever but it's often 'id')
  author: "Natalie",
  subject: "How are you?",
  text: "Hey, good to see you, how are you doing?",
  dateSent: "1/26/26",
  hasBeenRead: false
}

// email.dateSent





let users = [
  {
    id: 0,
    username: "abby324",
    isAdmin: false
  },
  {
    id: 1,
    username: "mcp23",
    isAdmin: true
  },
  {
    id: 3,
    username: "derek55",
    isAdmin: false
  }
]


console.log(users[2])


// array: [2343, "hello", 3]
// Access into array: myArray[0]
// object: { id: 234233432, something: "hello", somethingElse: 3 }
// Access into object: myObject.something



let tasks = [
  {
    text: "Laundry",
    tags: [
      "home",
      "annoying"
    ]
  },
  {
    text: "Emails",
    tags: [
      "work"
    ]
  },
]

tasks[1].tags[0] // "work"



let listOfUsers = [
  {
    name: "Patrick",
    address: {
      city: "Atlanta",
      state: "Georgia",
      zipCode: 88343
    }
  }
]

listOfUsers[0].address.state // "Georgia"

listOfUsers[0].name // "Patrick"



// Most Important Concepts:
// 1) Functions calling other functions (returning, passing parameters)
// 2) Arrays of objects
// 3) Reading arrow functions: something => something + 5


// cannot
// can't
// can not

function myFunction() {

}

const myFunction2 = () => {

}


const addOne = (number) => {
  return number + 1
}



const prices = [43, 25, 16, 456, 12]

const cheaperPrices = prices.filter(price => price <= 25)
// [25, 16, 12]




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

console.log(books)

// Filter - filter for all Science Fiction books(Ancillary Justice, Dune)
const sciFi = books.filter(  book => book.genre === "Science Fiction"  )
console.log(sciFi)
// a callback function that takes in one book object and returns true if it is a science fiction book
// price => price <= 25

// Concepts Involved:
// arrays of objects
// arrays
// objects
// functions
// parameters
// arrow functions
// callback functions