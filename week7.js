// console: '🎫'

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

let ticket = '🎫'
enterTheater('🎫')

// strings, numbers, booleans are small, and just go straight in the variable
// If your friend asks you for a picture of yourself you just text it to them, if they ask for a shirt you hand it to them

// objects and arrays are too big to go straight in, so instead the variable just points to them
// If your friend asks you for your favorite restaurant, you point to it (with an address maybe)



function filter(array, shouldKeep) {
  // let array = ["apple", "berry", "banana"]; 
  // let shouldKeep = (food) => food.includes("a")       let food = "banana"
  const filteredArray = [] // [ "apple", "banana" ]
  for (let i = 0; i < array.length; i++) {
    const item = array[i] // "banana"
    if (shouldKeep(item)) {
      filteredArray.push(item)
    }
  }
  return filteredArray
}


const fruits = ["apple", "😆", "banana"]
const fullStrings = filter(fruits, food => food.includes("a"))







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

// ["Jane Eyre", "Ancillary Justice", "Atomic Habits", "Dune"]

books[1].title // "Ancillary Justice"

// Filter - filter for all Science Fiction books (Ancillary Justice, Dune)

const scienceFictionBooks = books.filter( book => book.genre === "Science Fiction" )
console.log(scienceFictionBooks)


// Map - map each book in this style: "Jane Eyre (Classic)"
// We frequently use map to map an array of objects to a nice way to display them

alert(   books.map(  book => `${book.title} (${book.genre})`  )   )
