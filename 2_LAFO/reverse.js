//complete the reverseString Function.
//Do not alter the starter Code.

function reverseString(str) {
  let arr = str.split("");
  arr.reverse();
  return arr.join("");
}

console.log(reverseString("Hello"));
//Output : "olleH"
