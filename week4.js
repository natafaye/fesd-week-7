
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
//     "Heyyyy",
//     "What's up?",
//     "Good day"
// ]

// Map - data to how that data should be displayed

// const emailMessagesList = emailList.map(email => email.message)
// const stringOfMessages = emailMessagesList.join("\n") // \n means enter
// alert(stringOfMessages)

//alert(emailList.map(email => email.author + ": " + email.message).join("\n"))


// Filter - filter (read emails, matches a search, folders, filters)

//const unreadEmails = emailList.filter(   email =>  email.read === false  )
//alert("Unread Emails:\n\n" + unreadEmails.map(email => email.author + ": " + email.message).join("\n"))


alert("Unread Emails:\n\n" + emailList // array of all emails
    .filter(   email =>  email.read === false  ) // array of 2 emails
    .map(email => email.author + ": " + email.message) // array of 2 strings
    .join("\n") // one string
)
// Find - find (find by id)

const email = emailList.find(email => email.id === 474)
alert("Here's the email with that id: " + email.message)





// Great if this isn't a callback function
// function sayHi(name) {
// 	return "Hi " + name
// }

// // not the greatest practice, because there's only one line
// const sayHi = (name) => {
//     return "Hi " + name
// }

// // Have to have the curly brackets
// const sayHi = (name) => {
//     const longName = name + " is there name "
//     return "Hi " + longName
// }

// // either of these is great
// const sayHi = (name) => "Hi " + name

// const sayHi = name => "Hi " + name



// // const isNotEmpty = (paper) => {
// //     return paper !== '';
// //  }

// //  const isNotEmpty = (paper) => paper !== ''

// //  const isNotEmpty = p => p !== ''
 

//  const numbers = [0, 1, 2, 34]

//  const highNumbers = numbers.filter(num => num > 2)
//  const lowNumbers = numbers.filter(num => num < 2)


//  let total = 0

//  for(let i = 0; i < 5; i++) {
//     total = total + i
//  }

//  alert(total)