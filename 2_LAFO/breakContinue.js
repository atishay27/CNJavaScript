console.log("******** Break vs Continue ********");

const inputs = [11, 32, 12, 45, 65, 94, 7, 78, 10, 100, 131, 67, 81, 92, 53];
const even = [];

for (input of inputs) {
  if (input % 2 !== 0) {
    continue;
  }
  even.push(input);
  if (even.length === 5) {
    break;
  }
}

console.log(even);
