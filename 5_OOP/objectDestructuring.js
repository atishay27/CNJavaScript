/* Object Destructuring */
console.log("Object Destructuring");
console.log("*********************");

const obj = {
  a: 1,
  b: 2,
  c: ["0", "B", "J"],
  d: { value: "Val" },
};

//Binding Pattern
const { a, c } = obj;
console.log(a);
console.log(c);

const { b: b1 } = obj;
console.log(b1);
// console.log(b);   - This will give error because we renamed b as b1

//Assignment Pattern - Where variable is already declared
let b2;
({ b: b2 } = obj);
console.log(b2);
