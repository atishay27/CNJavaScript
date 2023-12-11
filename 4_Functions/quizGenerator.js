function main() {
  const Subject1 = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5",
  ];
  //Write your function here
  function shuffle(arr1) {
    return function () {
      let len = arr1.length;
      let indexArr = [];
      let newArr = [];
      while (indexArr.length < len) {
        let rn = Math.floor(Math.random() * len);
        if (!indexArr.includes(rn)) {
          indexArr.push(rn);
          newArr.push(arr1[rn]);
        } else {
          continue;
        }
      }
      return newArr;
    };
  }
  const func = shuffle(Subject1);
  const shf1 = func();
  const shf2 = func();
  console.log(shf1);
  console.log(shf2);
}

main();
