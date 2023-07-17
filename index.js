let rs = require("readline-sync");

// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"
// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// After the user enters a valid operation, ask the user, "Please enter the first number"
// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

let optionSelection = "";
let number = /^\d+$/;
let storedNumbers = [];

function chooseOperator() {
  optionSelection = rs.question(
    `What operation would you like to perform? Please choose between "/" "*" "-" and "+". `
  );
}

// Asks what operation I would like to perform

// checks if the operation is the correct one

// If not correct, asks again what operation I want to perform

// Ask for the first number

// If the first number is not correct, tells about it and asks for the first number

// Saves the first number

// Asks for the second number

// If the second number is not correct, tells about it and asks for the second number

// Saves the second number

// Does the calculation in a function

// Asking for first number

// this function should operate by itself, meaning no if statement. The if statement should be outside of the function
function calculus() {
  //rework the variable and see if you can put num1 at the top as an independant variable which will be later used for function calculator(num1, num2)
  let num1 = rs.question("Please enter the first number ");
  if (number.test(num1)) {
    storedNumbers.push(num1);
  } else {
    console.log("This is not a number ");
  }
}

chooseOperator();
calculus();

// checking if the right selector has been selected
if (/^[*/\-\+]$/.test(optionSelection)) {
  // optionSelection matches the regex
  console.log("Good choice");
  calculus();
} else {
  // optionSelection does not match the regex
  console.log("That is not a valid operation");
  chooseOperator();
}
