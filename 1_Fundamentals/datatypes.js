/*
Data Types
1: Primitive DataType
2: Object
*/

/************** PRIMITIVE DATATYPE **************/
//Number (64 bit)
let num = 10;
console.log(typeof num + " : " + num);

//String
const firstName = "Atishay";
const lastName = `Jain`;
const sentence = 'Atishay Says "I am a good body" ';
console.log(typeof firstName + " : " + firstName);
console.log(typeof lastName + " : " + lastName);
console.log(typeof sentence + " : " + sentence);

//Boolean
const graduated = true;
console.log(typeof graduated + " : " + graduated);

//Undefined
let spouseName = undefined;
console.log(typeof spouseName + " : " + spouseName);

//Null
let marriedOn = null;
console.log(typeof marriedOn + " : " + marriedOn);

//Symbol (ES6/2015)

//Will discuss later

//BigInt (ES2020)
let bigNum = 10n;
console.log(typeof bigNum + " : " + bigNum);

// Infinity Number
let num2 = Infinity / Infinity;
let num3 = Number.MAX_VALUE;
console.log(typeof num2 + " : " + num2);
