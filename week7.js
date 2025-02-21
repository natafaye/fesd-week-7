// number, string, boolean, null, undefined
// these go IN the variable

// object, array
// these are just POINTED TO by the variable

// function


const addFive = (number) => number + 5

// function addFive(number) {
//   return number + 5
// }

addFive(3)

// computer simplifies from left to right with accessing inside objects and arrays
// users[2].username
// the big old array[2].username
// the derek object.username
// "derek555"



function specialFunction(a, b) { // let a = (topic) => alert("smart things about" + topic); let b = true
  console.log(a, b)
  //a("javascript")
}

specialFunction(["🧀", "🥑", "🍦"], "Natalie")
specialFunction(32, { lat: 241, long: 54 })
specialFunction((topic) => alert("smart things about" + topic), true)


function alertStuff() {
  alert("smart things")
}

alertStuff()



//(topic) => alert("smart things about" + topic)





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

/*** This is the top of the pyramid, professional-level code using almost every concept we've learned so far ***/
// There's a for loop inside the filter function (we can't see it but I can guarantee it's in there)
// There's an if inside the filter function (we can't see it but I can guarantee it's in there)
// There's boolean logic checking if the genre is science fiction
// There's two functions, the filter function and the callback function that checks the genre
// There's an array of objects that we're filtering
// We're accessing a property on an object, the genre property on the book object
// We're passing parameters - we're passing the callback function to filter and we're passing the book to the callback function
// We're calling the filter function (and the filter function will call the callback function)
const scifiBooks = books.filter(   (book) => book.genre === "Science Fiction"   )
console.log(scifiBooks)



// function checkIfSciFi(book) {
//   return book.genre === "Science Fiction"
// }

// const checkIfSciFi = (book) => book.genre === "Science Fiction"


// checkIfSciFi(books[0])
// checkIfSciFi(books[1])
// checkIfSciFi(books[2])