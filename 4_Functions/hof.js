/* Higher Order Function */
console.log("Higher Order Functions");
console.log("********************");

const inputs = [2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 56, 16];

/* Tradional Function */

// function square(input) {
//   const squared = [];
//   for (let i = 0; i < input.length; i++) {
//     squared[i] = input[i] ** 2;
//   }
//   return squared;
// }
// function cube(input) {
//   const squared = [];
//   for (let i = 0; i < input.length; i++) {
//     squared[i] = input[i] ** 3;
//   }
//   return squared;
// }
// console.log(square(inputs));
// console.log(cube(inputs));

/* Higher Order Function */
function operation(input, fn) {
  const output = [];
  for (let num of input) {
    output.push(fn(num));
  }
  return output;
}

function square(x) {
  return x ** 2;
}

console.log(operation(inputs, square));
console.log(operation(inputs, (x) => x ** 3));
