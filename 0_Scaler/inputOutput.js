process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});

function main() {
  let a = inputString[0];
  let b = inputString[1];
  console.log(`${a} says Hi to ${b}`);
}
