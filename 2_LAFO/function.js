/** Functions in JS **/

function greetUser(username) {
  //username is a parameter
  console.log("Hello " + username + ", Welcome to the session!!");
}

greetUser("Atishay");
greetUser("Bhanu");

//"Atishay" & "Bhanu" is arguments

function isValidIdentifier(t) {
  let sc = Number(t[0]) ? t[0] : null;
  if (sc) {
    return false;
  }
  for (x of t) {
    if ((x < "a" || x > "z") && (x < "A" || x > "Z") && x !== "_" && x != "$") {
      return false;
    }
  }
  return true;
}

console.log(isValidIdentifier("myVariable")); // Logs: myVariable is a valid identifier.
isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
isValidIdentifier("_pr&ivate");

/** Default Parameters */
function sum(num1 = 0, num2 = 0) {
  console.log(`Sum of Number are ${num1 + num2}`);
}

sum(4, 5);
sum(4);
sum();

/** Return Value */

//Calculate area of circle
function square(num) {
  return num * num;
}

function circleArea(radius) {
  return (Math.PI * square(radius)).toFixed(2);
}

console.log(`Area of circle with radius 2 is ${circleArea(2)}`);
