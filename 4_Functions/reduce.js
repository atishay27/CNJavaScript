/* Reduce (inbuilt function) [HOF]*/
console.log("Reduce (HOF)");
console.log("********************");

//Syntax
// reduce(callback_Fn, initial_Value);
//function callback_Fn(accumulator, currentValue, currentIndex, arr);
//initial_Value, currentIndex, arr is optional to use

const inputs = [2, 3, 4, 5, 6];
const sum = inputs.reduce((total, cv, index) => {
  //   console.log(`${index}: ${total}`);
  return total + cv;
}, 0);

console.log(sum);
