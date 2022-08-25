
// Normal function
function isJose(user) {
    return user.username === "jose"
}

// Arrow function
const isJose = (user) => {
    return user.username === "jose"
}

// Get rid of the parenthesis
const isJose = user => {
    return user.username === "jose"
}

// Get rid of the body of the function {}
const isJose = user => user.username === "jose"

function isNotEmpty(paper) {
    return paper !== '';
}

(paper) => {
    return paper !== ''
}

(paper) => paper !== ''

// (p) => p !== ''

// p => p !== ''




//ingredient => ingredient + " in microwave" // "butter"

// Function that takes a callback function as a parameter
const cookIngredients = (cookingFunction) => { // cookingFunction = ingredient => ingredient + " in microwave"
    const ingredients = ["flour", "butter", "milk", "cheese"]
    let result = "";
    // result += cookingFunction("flour") + " "
    // result += cookingFunction("butter") + " "
    // result += cookingFunction("milk") + " "
    // result += cookingFunction("cheese")
    for(let i = 0; i < ingredients.length; i++) {
        result += cookingFunction( ingredients[i] ) + " "
    }
    // STUFF TO DO HERE
    alert(result)
}

// Callling it with a callback function
cookIngredients(ingredient => ingredient + " in microwave") // callback function is: ingredient => ingredient + " in microwave"




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


// MAP - map each object in an array to how we want that object displayed
const arrayOfStrings = emailList.map(email => email.author + ": " + email.message) 

alert(arrayOfStrings.join("\n"));


// FILTER
const unreadEmailsStringList = emailList
    .filter(email => !email.read)
    .map(email => email.author + ": " + email.message )
    .join("\n")

alert( `UNREAD EMAILS\n${unreadEmailsStringList}` )




const names = ["something", "whatever"]
const namesLength = []

for(let i = 0; i < names.length; i++) {
    const name = names[i]
    namesLength.push( name.length )
}

for(const name of names) {
    namesLength.push( name.length )
}

names.forEach(name => namesLength.push(name.length))

console.log(namesLength)