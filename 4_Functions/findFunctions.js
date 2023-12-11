/* Find and FindIndex (inbuilt function) [HOF]*/
console.log("Find & FindIndex (HOF)");
console.log("********************");

const inputs = [2, 5, 6, 12, 24, 28, 34, 39, 45, 67, 89];
const find1 = inputs.find((el) => el === 24);
console.log(find1);
const find1Index = inputs.findIndex((el) => el === 24);
console.log(find1Index);

const objArr = [
  { id: 1, name: "Atishay" },
  { id: 2, name: "varun" },
];
const find2 = objArr.find((obj) => obj.name === "Atishay");
console.log(find2);
