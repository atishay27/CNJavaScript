/* Constructor Function */
console.log("Constructor Function");
console.log("*********************");

//Factory Function (Simulating Constructor Function Working)
function movieFunc(title, year) {
  const movieObj = {
    title: title,
    year: year,
    getDetails() {
      console.log(`Title: ${this.title}\nYear:${this.year}`);
    },
  };
  return movieObj;
}
const movie1 = movieFunc("The Avengers", 2012);
movie1.getDetails();

//Constructor Function (start with capital letter)
function Movie(title, year) {
  this.title = title;
  this.year = year;
  this.getDetails = function () {
    console.log(`Title: ${this.title}\nYear:${this.year}`);
  };
}

//new keyword
const movie2 = new Movie("Animal", 2023);
movie2.getDetails();
