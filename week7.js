
// make a function that takes an array and returns true if the sum is greater than 100
function numbersGreaterThan(arr) {
  let ret = false
  let arraySum = 0
  for(let i = 0; i < arr.length; i++) {
    arraySum += arr[1]
  }
  if(arraySum > 100) {
    ret = true
  }
  console.log(ret)
}

numbersGreaterThan([5, 4, 3])

const myFavoriteNumbers = [4, 3, 2]
numbersGreaterThan(myFavoriteNumbers)




function getFirstElement(myArray) {
  return myArray[0]
}

getFirstElement(["fdsfds", "fdsfdsf", "fdsfds"])

// NATALIE MAKE A SLIDE ABOUT THIS



super()
this

// Week 7 - callbacks, es7
// Week 8 - Object Oriented Programming (OOP) (this, super, constructor) - functions calling other functions
// Week 9 - OOP - functions calling other functions
// OOP goes on the shelf (if you are a modern front-end programmer)


let user = {
  name: "Natalie",
  role: "teacher",
  sayHi: () => {
    alert("hello!")
  }
}

// global variable = variable created outside of any function
// 

let myName = "Natalie"





function playRockPaperScissors() {
  const computerPick = getComputerAnswer()
  const humanAnswer = getHumanAnswer()
  const winner = checkWhoWon(computerPick, humanAnswer)
  alert(`${winner} won!`)
}

// takes no parameters, no input
// returns the user's pick
function getHumanAnswer() {
  return prompt("What's your pick?")
}

// takes no parameters, no input
// returns a random pick
function getComputerAnswer() {
  // random number generation to get a random response
  return "paper"
}

// takes two parameters - the computer's answer, the human's answer
// return either "human" or "computer"
function checkWhoWon(computerAnswer, humanAnswer) {
  if(computerAnswer === "rock" && humanAnswer === "paper") {
    return "human"
  }
  // more checks
}

const message = prompt("What's the message")

//message = "something else" // ERROR




// We could do this, but so much duplication!

// function isNotEmpty(item) {
//   return item !== ""
// }

// function filterOutEmpty(array) {
//   const filteredArray = []
//   for(let i = 0; i < array.length; i++) {
//       const item = array[i]
//       if(isNotEmpty(item)) {
//           filteredArray.push(item)
//       }
//   }
//   return filteredArray
// }

// function isNotNasty(item) {
//   return item !== "cucumber" && item !== "kale"
// }

// function filterOutNasty(array) {
//   const filteredArray = []
//   for(let i = 0; i < array.length; i++) {
//       const item = array[i]
//       if(isNotNasty(item)) {
//           filteredArray.push(item)
//       }
//   }
//   return filteredArray
// }

// const fruits = ["cucumber", "strawberry", "", "mango", "kale", ""]
// const goodFoods = filterOutNasty(fruits) // ["strawberry", "", "mango", ""]

// const nonEmpty = filterOutEmpty(goodFoods) // ["strawberry", "mango"]

// Instead we do this

// Specific
function isNotEmpty(item) {
  return item !== ""
}

function isNotNasty(item) {
  return item !== "cucumber" && item !== "kale"
}

// Generic
// shouldKeep needs to be a function that returns true if should be in the filtered
// and false if it should not be in the filtered array
function filter(array, shouldKeep) {
  const filteredArray = []
  for(let i = 0; i < array.length; i++) {
      const item = array[i]
      if(shouldKeep(item)) {
          filteredArray.push(item)
      }
  }
  return filteredArray
}

const fruits = ["cucumber", "strawberry", "", "mango", "kale", ""]
// passing isNotNasty into filter as a callback function
const goodFoods = filter(fruits, isNotNasty) // ["strawberry", "", "mango", ""]

// isNotEmpty = callback function (person that gets sent in the mail)
// filter = function that accepts another function as a parameter (receives the person in the mail)
const nonEmpty = filter(goodFoods, isNotEmpty) // ["strawberry", "mango"]

