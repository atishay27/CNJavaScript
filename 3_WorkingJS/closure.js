// Complete the genrateID function
//Do not alter the starter code
function generateID(val) {
  let id = val;
  return function gen() {
    let rv = `A_2023_${id}`;
    id += 1;
    return rv;
  };
  //Implement Your function here
}

const func = generateID(99);
console.log(func()); //Output : A_2023_99
console.log(func());
