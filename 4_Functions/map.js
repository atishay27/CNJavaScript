/* Maps (inbuilt function) [HOF]*/
console.log("Maps (HOF)");
console.log("********************");

const inputs = [4, 6, 1, 8, 9, 12, 34];
let squaredArray = inputs.map(function (currentElement, index, arr) {
  //   console.log(`${index}: ${currentElement}`);
  //   console.log(arr);
  return currentElement ** 2;
});

console.log(squaredArray);

let cubedArray = inputs.map((el) => el ** 3);
console.log(cubedArray);

let data = [2, 4, 6];
console.log(data.map(function (el) {}));

const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
function createUserObjects(ids, names, images) {
  return names.map((el, index) => {
    return { id: ids[index], name: el, image: images[index] };
  });
}
console.log(createUserObjects(ids, names, images));
