

// for(let i = 0; i < fdsfds; i++) {
//     const message = "This is looping " + i
//     alert(message)
// }



// function add(a, b) {
//     return a + b
// }

// const add = (a, b) => {
//     return a + b
// }

//const add = (a, b) => a + b

//const double = (a) => a + a
const double = a => a + a




// function isNotEmpty(paper) {
//     return paper !== '';
// }

// const isNotEmpty = (paper) => {
//     return paper !== '';
// }

// const isNotEmpty = (paper) => paper !== ''

// const isNotEmpty = paper => paper !== ''

// const isNotEmpty = p => p !== ''

// p => p !== ''




// const doesNameStartWithM = name => name[0] === "M"

// doesNameStartWithM("Maria")



// function map(array, callback) {
//     const mappedArray = []
//     for(let i = 0; i < array.length; i++) {
//         mappedArray.push(callback(array[i]))
//     }
//     return mappedArray
// }


function filter(array, callback) { //callback = email => !email.read
    const filteredArray = []
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            filteredArray.push(array[i])
        }
    }
    return filteredArray
}




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

//emailList[0].read

//displayStrings = ["Heyyyy", "What's up?", "Good day"]


// MAP - map data (objects) to how we're going to display it (string)
//const displayStrings = emailList.map( email => email.author + ": " + email.message )
alert(emailList.map( email => `${email.author}: ${email.message}` ).join("\n"))

emailList.push({ 
    id: 2000,
    author: "Dylan",
    to: "Calvin",
    message: "Good day",
    read: false, 
})

alert(emailList.map( email => `${email.author}: ${email.message}` ).join("\n"))

// FILTER - filter for unread emails

// Very expanded version:
function isEmailUnread(email) {
    return !email.read
}
function turnEmailObjectToString(email) {
    return `${email.author}: ${email.message}`
}
const filteredEmailsArrayOfOBjects = emailList.filter( isEmailUnread )
console.log("filteredEmailsArrayOfOBjects", filteredEmailsArrayOfOBjects)
const filteredEmailsArrayOfStrings = filteredEmailsArrayOfOBjects.map( turnEmailObjectToString )
console.log("filteredEmailsArrayOfStrings", filteredEmailsArrayOfStrings)
const stringOfAllFilteredEmails = filteredEmailsArrayOfStrings.join("\n")
console.log("stringOfAllFilteredEmails", stringOfAllFilteredEmails)
alert("UNREAD\n" + stringOfAllFilteredEmails)

// Streamlined version:
alert("UNREAD\n" + emailList.filter(email => !email.read).map(email => `${email.author}: ${email.message}`).join("\n"))


// FIND- find one particular item by its
const emailToShow = emailList.find( e => e.id === 1654 )
const emailAuthorToShow = emailList.find( e => e.id === 1654 ).author
alert("EMAIL TO SHOW\n" + `${emailToShow.author}: ${emailToShow.message}`)