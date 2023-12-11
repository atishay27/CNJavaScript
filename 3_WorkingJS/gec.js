console.log(userName);
greetUser(userName);

var userName = "Tom";
var userAge = 20;
console.log(`username: ${userName}`);
console.log(`userAge: ${userAge}`);

function greetUser(name) {
  var greet = "I hope you are doing fine";
  console.log(`hello ${name}, ${greet}`);
  var currentYear = 2023;
  const year = currentYear - userAge;
  return `Your birth year is ${year}`;
}
var birthYear = greetUser(userName);

console.log(birthYear);
