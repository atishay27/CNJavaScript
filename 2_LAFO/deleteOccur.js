let arr = [22, 23, 24, 25, 26, 26, 31, 26, 32];
let dl = 26;

function deleteOccur(arr, element) {
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === element) {
      arr.splice(x, 1);
      x--;
    }
  }
  return arr;
}
console.log(arr);
console.log(deleteOccur(arr, dl));
