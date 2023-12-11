// Instructions:
// 1. Implement the updateProfile function to update the user profile using Object.assign.
// 2. Implement the freezeProfile function to freeze the user profile using Object.freeze.

function updateProfile(user, updates) {
  let obj = Object.assign({}, user, updates);
  return obj;
  // Implement the code here
}

function freezeProfile(user) {
  // Implement the code here
}

let user = {
  name: "Atishay",
};
let update = {
  age: 24,
};

console.log(updateProfile(user, update));
console.log(user);
