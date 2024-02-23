
// const myName = prompt("What's your name?")



// // const isNotEmpty = (paper) => {
// //     return paper !== ''
// // }

// const isNotEmpty = paper => paper !== ''



// const names = ["Abigail", "Marco", "Simone", "Maria"]

// const mNames = names.filter( name => name[0] === "S" )

// console.log(mNames) // [ "Simone" ]


// const firstMName = names.find(name => name[0] === "X")

// console.log(firstMName) // undefined
 






// Data
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

// Display the data
// Really common use of the map array method
// Map the data to how we want it displayed
alert(emailList.map( email => email.author + ": " + email.message ))
// [ "Natalie: Heyyy", "Natalie: What's up?", "Dylan: Good day" ]

// Filter - filter the array
const unreadEmails = emailList.filter( email => email.read === false ) // !email.read
// just to display it
alert("UNREAD EMAILS\n\n" + unreadEmails.map( email => email.author + ": " + email.message ))

// Find - find an email by its id
const selectedEmail = emailList.find( email => email.id === 1654 )

alert("SELECTED EMAIL\n\n" + selectedEmail.message)


// Replace writing a for loop yourself
// Faster, easier, more readable

