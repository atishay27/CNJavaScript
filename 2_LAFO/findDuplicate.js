let arr = [22, 23, 24, 25, 26, 26, 31, 22, 32];

function findDuplicate(arr) {
  let dup = [];
  for (let x in arr) {
    x = Number(x);
    if (
      (arr.slice(0, x).includes(arr[x]) || arr.slice(x + 1).includes(arr[x])) &&
      !dup.includes(arr[x])
    ) {
      dup.push(arr[x]);
    }
  }
  return dup;
}

console.log(findDuplicate(arr));
