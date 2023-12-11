/* Filter (inbuilt function) [HOF]*/
console.log("Filter (HOF)");
console.log("********************");
const inputs = [4, 10, 2, 3, -1, -5, 23, -100];
const positives = inputs.filter(noNegative);

function noNegative(num) {
  return num > 0;
}

console.log(positives);

const negatives = inputs.filter((el) => el < 0);
console.log(negatives);

const even = inputs.filter((el) => el % 2 === 0);
console.log(even);
