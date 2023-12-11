/* Returning Function */
console.log("Returning Functions");
console.log("********************");

function greet(message) {
  return function (wishes) {
    console.log(`${wishes}, ${message}`);
  };
}

// 1st Way
const greeting = greet("I hope you are doing well");
greeting("Hello");

//2nd Way
greet("Welcome to the session")("Good Morning");
