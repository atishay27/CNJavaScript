/* Callback Function */
console.log("Callback Functions");
console.log("********************");

function greet(wish) {
  console.log(`${wish()}, Welcome to JavaScript`);
}

function sayHi() {
  return "Hi!";
}

function sayHello() {
  return "Hello!";
}

function sayMorning() {
  return "Good Morning!";
}

greet(sayMorning);
greet(sayHi);
greet(sayHello);
