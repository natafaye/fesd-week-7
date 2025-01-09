

function functionName(parameter1, parameter2) {
  // code
}
const functionName = (parameter1, parameter2) => {
  // code
}

// const addOne = (number) => {
//   return number + 1
// }

//const addOne = "fdsfds"

// Data Types
// number 5
// boolean true
// string "fdsfds"
// object { id: 0 }
// array [ 4, 3 ]    ["fdsfd", "fdsfds"]
// null
// undefined
// function (parameter) => "result"

// Programming Tools
// if/else
// for
// while


// putting a normal function in a variable
const addOne2 = function(number) {
  return number + 1
}

// putting an arrow function in a variable
const addOne3 = (number) => {
  return number + 1
}

const addOne4 = (number) =>
  number + 1




const specialKitchenChopper = () => {
  fdsfds
  fdsfdsf
  fdsfdsffds
  // DIFFERENT SPECIALIZED BLADES
  fdsfdsf
  fdsfds
  fdsfds
}

// Real World Example
const setUpAButton = () => {
  // give it this class
  // set it up nice like this
  // SPECIALIZED: here's what to do when it's clicked on
  // it should have this border
}


// Ascend filter to a higher plane -> Make this a higher order function
function filter(array, shouldKeep) { // shouldKeep should be a function that returns true if you should keep and false if not
  // function does this in the background
  // let array = ["apple", "", "banana"]
  // let shouldKeep = (fruit) => fruit !== ""
  const filteredArray = []
  for(let i = 0; i < array.length; i++) {
      const item = array[i]
      if(shouldKeep(item)) {
          filteredArray.push(item)
      }
  }
  return filteredArray
}

const fruits = ["apple", "", "banana", "avocado"]
const fullStrings = filter(fruits, (fruit) => fruit !== "")

// check if a string starts with a letter string[0] === "b" string.startsWith("b")
// second parameter needs to be a callback function where it returns true if it starts with A and false if it doesn't
const aNameFruits = filter(fruits, (fruit) => fruit[0] === 'a' ) // ["apple", "avocado"]


// If it's a value that will never change, that is "constant" it makes sense to use const for that
const PI = 3.14

// constant = ALWAYS has the same value (pi is never different)
// const variable = will have the same value for this usage