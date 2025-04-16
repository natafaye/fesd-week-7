const myFriends = ["Michele", "Timothy", "Ray"]

// someString.includes("what you're looking for")
const friendsWithINames = myFriends.filter(name => name.includes('i'))
console.log(friendsWithINames)


// ["Hello Michele!", "Hello Timothy!", "Hello Ray!"]
// bonus points if you use template literal

const friendGreetings = myFriends.map(name => `Hello ${name}!`)
//alert(friendGreetings.join("\n"))

// Job Skill of this week:
// map filter and find with arrays of objects (using arrow function for the callback functions)

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

// Map - most frequently used to map an array of objects to how those objects should be displayed
alert(
  books.map( book => `${book.title} (${book.genre})` ) // book.title + " (" + book.genre + ")"
)

// Filter - most frequently used to filter (search, filters, in weird situations delete)
const scienceFiction = books.filter(book => book.genre === "Science Fiction")
alert(
  "Science Fiction Books:\n" +
  scienceFiction.map( book => `${book.title} (${book.genre})` )
)

// Find - most frequently used to get something by its id
const book2 = books.find(book => book.id === 2)
console.log(book2)