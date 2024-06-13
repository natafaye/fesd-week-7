const myName = "Natalie";

function getWorkDone() {
  const papers = ["some", "", "papers", ""];
  const full = filter(papers, (paper) => paper !== "");
}

const isNotEmpty = function filter(array, callbackFunc) {
  // let array = ["some", "", "papers", ""] // let callbackFunc = (paper) => paper !== ""
  const filteredArray = [];
  for (const item of array) {
    if (callbackFunc(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};

const lunchTime = (foodChoice, drinkChoice) => `We are having ${foodChoice} and ${drinkChoice} for lunch.`;
const dinnerTime = (foodChoice, drinkChoice) => `We are having ${foodChoice} and ${drinkChoice} for dinner.`;


const foodForToday = (foodChoice, drinkChoice, callbackFunction) => {
  // let callbackFunction =  (foodChoice, drinkChoice) => We are having ${foodChoice} and ${drinkChoice} for dinner.
  return callbackFunction(foodChoice, drinkChoice);
}

// We're passing lunchTime in as a callback function
console.log(foodForToday("pizza", "soda", lunchTime));

// Now we're passing dinnerTime in as a callback function
console.log(foodForToday("spaghetti", "wine", dinnerTime));






// Real world example 1

const addUSTax = (amount) => amount * 1.08

const addEUTax = (amount) => amount * 1.20

function getTotal(total, addTax) {
    const totalWithTax = addTax(total)
    console.log("The total is " + totalWithTax)
}

// Spain McDonalds
getTotal(3.48, addEUTax)

// Phoenix McDonalds
getTotal(3.48, addUSTax)




// Real world example 2

const formatUSMoney = (amount) => "$" + amount

const formatEUMoney = (amount) => "E" + amount

function tellCustomerTheirTotal(total, formatMoney) {
    alert( "You total is " + formatMoney(total) + " Please come back to McDonalds" )
}


// Spain McDonalds
tellCustomerTheirTotal(3.45, formatEUMoney)
tellCustomerTheirTotal(4, formatEUMoney)

// Phoenix McDonalds
tellCustomerTheirTotal(2.48, formatUSMoney)
tellCustomerTheirTotal(30.43, formatUSMoney)




// Without a Callback function
// This example does NOT have a callback function

function tellCustomerTheirTotalinUS(total) {
    alert( "You total is " + "$" + total + " Please come back to McDonalds" )
}

function tellCustomerTheirTotalinEU(total) {
    alert( "You total is " + "E" + total + " Please come back to McDonalds" )
}

// Spain McDonalds
tellCustomerTheirTotalinEU(3.45)
tellCustomerTheirTotalinEU(4)

// Phoenix McDonalds
tellCustomerTheirTotalinUS(2.48)
tellCustomerTheirTotalinUS(30.43)