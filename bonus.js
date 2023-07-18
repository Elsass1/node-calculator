const rs = require("readline-sync");

// let number = /^\d+$/;

const question = rs.question("Please enter an operation: ");

function executeOperation(operation) {
  const array = operation.split(" ");

  if (array.length !== 3) {
    console.log(
      "Wrong input. Please enter the operation in the format: 'number operator number'."
    );
    return;
  }

  const num1 = Number(array[0]);
  const operator = array[1];
  const num2 = Number(array[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.log("This is not a number. Please enter a number.");
    return;
  }

  let result;

  switch (operator) {
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "+":
      result = num1 + num2;
      break;
    default:
      console.log(`Wrong operator. Choose between "/", "*", "-", or "+".`);
      return;
  }

  console.log(`The result is: ${result}`);
}

executeOperation(question);
