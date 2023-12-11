/*** Type Conversion */

// Convert to string

//use String()

//Number to String
console.log("***********Number to String***********");
let num = 100;
let res = String(num);
console.log(num);
console.log(res);

//Boolean to String
console.log("***********Boolean to String***********");

res = String(true);
console.log(res);

//Null or Undefined to String
console.log("***********Null or Undefined to String***********");
res = String(null);
console.log(res);
res = String(undefined);
console.log(res);

//use toString()
//Can't convert null or undefined using toString
console.log("***********using toString()***********");

res = true.toString();
console.log(res);

/* Convert to Number */
//using Number()
console.log("***********Convert to Number***********");
let st = "1203";
console.log(typeof st + " : " + st);
res = Number(st);
console.log(typeof res + " : " + res);
console.log(Number("Value"));
console.log(Number(false));

//Unary + Operator --- works on variable
console.log(++st);

//parseInt()
console.log(parseInt("123.4f"));

//parseInt() can parse "1234f" but Number() will return NaN

//parseFLoat()
console.log(parseFloat("1.234f"));

/** Convert to Boolean **/
console.log(Boolean(undefined));
