const user1 = {
  username: "Sara",
  age: 24,
  marks: {
    maths: 20,
    english: 25,
  },
  getTotal() {
    return this.marks.maths + this.marks.english;
  },
};

//Deep Copy and Shallow Copy

// const user2 = user1;
// console.log(user1);
// console.log(user2);

// user2.username = "Harry";
// console.log(user2);
// console.log(user1);

//Shallow Copy - It only copies first layer i.e nested object will not get copied properly
const user2 = { ...user1 };
const user3 = Object.assign({}, user1);
user2.username = "Harry";
user2.age = 18;
user2.marks.maths = 30; // This will get changed in all objects due to shallow copy
user3.marks.english = 20; // This will get changed in all objects due to shallow copy
user3.username = "Bobby";
user3.age = 30;
console.log(user1);
console.log(user2);
console.log(user3);

//This is due to only first layer will get copied but for nested objects only refrenced will be passed

//Deep Copy
const user4 = JSON.parse(JSON.stringify(user1));
user4.marks.english = 12;
user4.marks.maths = 21;

console.log(user1.marks);
console.log(user4.marks);
