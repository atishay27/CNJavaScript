/* Currying  in JS */
console.log("Currying");
console.log("********************");

/* Traditional Function */
function add1(a, b, c) {
  return a + b + c;
}
// console.log(add1(3, 4, 5));

/* Currying */
function add2(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// console.log(add2(3)(4)(5));

/*Currying Use Case*/
function power(a) {
  return function (b) {
    return b ** a;
  };
}

let square = power(2);
let cube = power(3);

let threeSquare = square(3);
let fiveSquare = square(5);
let sixCube = cube(6);
let nineCube = cube(9);
console.log(threeSquare);
console.log(fiveSquare);
console.log(sixCube);
console.log(nineCube);
