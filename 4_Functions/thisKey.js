"use strict";
/* This Keyword */
console.log("This Keyword");
console.log("********************");

// console.log(this);
// var user = "John";
// console.log(user);

function checkThis() {
  console.log(this);
}
checkThis();

const checkArrow = () => {
  console.log(this);
};
checkArrow();
// const user1 = {
//   id: 1,
//   name: "Atishay",
//   age: 24,
//   work: function () {
//     console.log(this);
//   },
// };

// user1.work();

// const user2 = {
//   id: 2,
//   name: "Varun",
//   age: 23,
// };

// user2.work = user1.work;
// user2.work();
