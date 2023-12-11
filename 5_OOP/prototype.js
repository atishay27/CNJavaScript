/*  Prototype */
console.log("Prototype");
console.log("*********************");

function Movie(title) {
  this.title = title;
  //   this.getDetails = function () {
  //     console.log(this.title);
  //   };
}
Movie.prototype.getDetails = function () {
  console.log(`Title:${this.title}`);
};
Movie.prototype.year = 2023;

const movie1 = new Movie("The Avenger");
movie1.year = 2012;
console.log(movie1);
console.log(movie1.__proto__);

const movie2 = new Movie("Avatar");
console.log(movie2);
console.log(movie2.__proto__);
console.log(movie2.__proto__.__proto__);
movie2.__proto__.year = 2026;
const movie3 = {
  title: "Animal",
};
console.log(movie3.__proto__);
