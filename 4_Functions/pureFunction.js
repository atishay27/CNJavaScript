/* Pure Function */
console.log("Pure Functions");
console.log("********************");

function calculate(num1, num2) {
  return num1 * num2;
}

console.log(calculate(2, 4));

const discount = 25;

function calcDisc(price) {
  return price - discount;
}
