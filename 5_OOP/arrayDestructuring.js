/* Array Destructuring */
console.log("Array Destructuring");
console.log("*********************");

const fruits = ["Apple", "Mango", "Kiwi", "Berry", "Banana", "Lichi"];

//Binding Pattern
const [a, m] = fruits;
console.log(a);
console.log(m);
const [, , , , b, l] = fruits;
console.log(b);
console.log(l);

const [apple, mango, ...otherFruits] = fruits;
console.log(apple);
console.log(mango);
console.log(otherFruits);

const [, , ...[, be, ba]] = fruits;
console.log(be);
console.log(ba);
