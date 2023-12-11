function selectKeysFromArray(arrayOfObjects, keysToSelect) {
  // Ensure the input is valid
  if (!Array.isArray(arrayOfObjects)) {
    throw new Error("Invalid input. Expected arrays.");
  }

  // Filter and map through the array of objects
  return arrayOfObjects.map((object) => {
    // Create a new object with selected keys
    const selectedObject = {};
    keysToSelect.forEach((key) => {
      selectedObject[key] = object.hasOwnProperty(key) ? object[key] : "";
    });
    return selectedObject;
  });
}

// Example usage:
const inputArray = [
  { id: 1, name: "John", age: 30, city: "New York", gender: "Male" },
  { id: 2, name: "Jane", age: 25, city: "San Francisco" },
  { id: 3, name: "Bob", age: 35, country: "Canada" },
];

const selectedKeys = ["id", "name", "age", "gender"];

const resultArray = selectKeysFromArray(inputArray, selectedKeys);
console.log(resultArray);
