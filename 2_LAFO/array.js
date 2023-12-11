/* Array */
//Array is a list of multiple elements
console.log("******** ARRAYS ********");

/* Two ways of creating Array */
//Way 1
let lisOfStudent = ["Atishay", "Varun", "Riya"];
//Way 2
let lisOfCars = new Array("BMW", "KIA", "HONDA CITY");
console.log(lisOfStudent);
console.log(typeof lisOfCars);

//Array are hetrogenous in JavaScript (Can store multiple type of DS)
const arr1 = ["Apple", 200, true];
console.log(arr1);

const getArrayDetails = (arr) => {
  console.log(`Elements: ${arr}\nLength: ${arr.length}`);
};

//Array are dynamic in JavaScript
const fruits = ["Apple"];
getArrayDetails(fruits);
fruits.push("Banana");
fruits.push("Kiwi");
fruits.push("Orange");
getArrayDetails(fruits);
fruits[1] = "Grapes";
getArrayDetails(fruits);

/** Methods on Array */

/* Adding an Element */

const iplTeams = ["RCB", "CSK"];
getArrayDetails(iplTeams);

//push - push element at the end of array
iplTeams.push("MI");
getArrayDetails(iplTeams);
iplTeams.push("GT", "RR");
getArrayDetails(iplTeams);

//unshift - push element at the start of array
iplTeams.unshift("LT", "DC");
getArrayDetails(iplTeams);

/* Removing an Element */
//pop - pop element at the end of array
iplTeams.pop();
getArrayDetails(iplTeams);
//shift - pop element at the start of array
iplTeams.shift();
getArrayDetails(iplTeams);

/* Check if the element is present or not */
//indexOf() - return index if element is found otherwise return -1
console.log(`Index of RCB: ${iplTeams.indexOf("RCB")}`);
console.log(`Index of LT: ${iplTeams.indexOf("LT")}`);

//includes() - return boolean true if element is present otherwise false
console.log(`Does MI Exist: ${iplTeams.includes("MI")}`);
console.log(`Does PSK Exist: ${iplTeams.includes("PSK")}`);

//slice() and splice()

//slice()  -- Doesn't change original array, only removes elements
console.log(`Original Arryay: ${iplTeams}`);
//Keep First Elements from index 2 till last
console.log(`Slicing at index 2: ${iplTeams.slice(2)} `);
console.log(`Original Arryay: ${iplTeams}`);
//Keep First Elements from index 2 till index 3
console.log(`Slicing at index 2: ${iplTeams.slice(2, 3)} `);
console.log(`Original Arryay: ${iplTeams}`);
//Keep Last 2 Elements
console.log(`Slicing at index 2: ${iplTeams.slice(-2)} `);

//splice(startIndex,numberOfElementsYouWantToDelete, elementYouWantToAdd)
console.log(`Original Arryay: ${iplTeams}`);
iplTeams.splice(1, 2, "GT");
console.log(`Modified Arryay: ${iplTeams}`);

//concat() -- Doesn't change original array, merges both the array and return the merged array
let classX_A = ["Atishay", "Varun"];
let classX_B = ["Bhanu", "Divas"];
let classX = classX_A.concat(classX_B);
console.log(classX);
classX.splice(2, "X", "Y");
console.log(classX);
