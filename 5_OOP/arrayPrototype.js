/* Array Prototype */
console.log("Array Prototype");
console.log("*********************");

let arr = [2, 4, 6, 8, 10, 12, 14];
let arr2 = arr;
arr2.push(16);
console.log(arr2);
console.log(arr);

let arr3 = new Array(...arr);
arr3.push(18);
console.log(arr3);
console.log(arr);

console.log(Array);
