let rs = require("readline-sync");

// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"
// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// After the user enters a valid operation, ask the user, "Please enter the first number"
// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

// NEED TO WORK WHEN NUM / 0

let optionSelection = "";
let number = /^\d+$/;
let storedNumbers = [];
let num1 = 0;
let num2 = 0;

function chooseOperator() {
  optionSelection = rs.question("What operation would you like to perform? ", {
    limit: /^[*/+\-]$/,
    limitMessage: `That is not a valid operation. Please choose between "/", "*", "-", and "+".`,
  });
}

function askNum1() {
  num1 = rs.question("Please enter the first number ", {
    limit: number,
    limitMessage: "This is not a number",
  });
}

function askNum2() {
  num2 = rs.question("Please enter the second number ", {
    limit: number,
    limitMessage: "This is not a number",
  });
}

function calculus(num1, num2) {
  switch (optionSelection) {
    case "/":
      if (num2 === 0) {
        console.log("Error. Please choose a number higher than 0.");
        return;
        // CORRECT THIS
      }
      return num1 / num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "+":
      return num1 + num2;
      break;
    default:
      return console.log(
        `That is not a valid operation. Please choose between "/", "*", "-", and "+".`
      );
  }
}

chooseOperator();
askNum1();
askNum2();

// check if the right selector has been selected
if (/^[*/\-\+]$/.test(optionSelection)) {
  // check if num1 and num2 are digits
  if (number.test(num1) && number.test(num2)) {
    // save num1 and num2
    storedNumbers.push(num1, num2);
  }
  //calculate the result
  let result = calculus(Number(num1), Number(num2));
  console.log(`The result is: ${result}`);
}
