/******** OPERATORS ********/

/* Arithmetic
 (+, -, *, /, %, **, ++, -- ) */

console.log("******* ARITHMETIC *******");
console.log(5 + 4);
console.log(5 - 4);
console.log(5 * 4);
console.log(5 / 4);
console.log(5 % 4);
console.log(5 ** 4);
let num = 2;
num++;
console.log(num);
num--;
console.log(num);

/* Assignment
 (=,+=, -=, *=, /=, %=, **= ) */

console.log("******* ASSIGNMENT *******");
let x = 2;
x += 3;
console.log(x);

/* Comparison 
 (<,>,<=,>=,==,!=,===,!==) */

console.log("******* COMPARISON *******");
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");

/* Logical
 (&&, ||, !) */
console.log("******* LOGICAL *******");
console.log(true && true);
// AND Operators return last truthy or first falsy
console.log(5 && 2);
console.log(NaN && null);

//Or Operators return first truthy or last falsy
console.log(5 || 2);
console.log(NaN || null);

// [0, '', null, undefined, false, NaN] - Falsy Values
//Except above everything is truthy
console.log("hello" != "Hello"); // -- Since 1 is truthy the opposite is false
