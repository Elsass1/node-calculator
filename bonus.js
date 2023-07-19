const rs = require("readline-sync");

function askQuestion() {
  const question = rs.question("Please enter an operation: ");
  return question;
}

function executeOperation(operation) {
  const array = operation.split(" ");

  if (array.length !== 3) {
    console.log(
      "Wrong input. Please enter the operation in the format: 'number operator number'."
    );
    return false;
  }

  const num1 = Number(array[0]);
  const operator = array[1];
  const num2 = Number(array[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.log("This is not a number. Please enter a number.");
    return false;
  }

  let result;

  switch (operator) {
    case "/":
      if (num2 === 0) {
        console.log("Error. Please choose a number higher than 0.");
        return false;
      }
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
      return false;
  }

  console.log(`The result is: ${result}`);
  return true;
}

let validInput = false;

while (!validInput) {
  const question = askQuestion();
  validInput = executeOperation(question);
}
