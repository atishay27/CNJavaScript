/* Object Literals */
console.log("OBJECT LITERALS");
console.log("*********************");
const movie1 = {
  title: "The Avengers",
  year: 2012,
  genre: ["Action", "Sci-Fi", "Thriller"],
  cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
  getDetails: function () {
    console.log(
      `${this.title} was released on ${
        this.year
      } with cast such as ${this.cast.reduce((acc, cv) => {
        return acc + ", " + cv;
      })} and it was a great ${this.genre.reduce((acc, cv) => {
        return acc + ", " + cv;
      })} movie`
    );
  },
};

const movie2 = {
  title: "Avengers: Age of Ultron",
  year: 2015,
  genre: ["Action", "Sci-Fi", "Thriller"],
  cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
  getDetails: function () {
    console.log(
      `${this.title} was released on ${
        this.year
      } with cast such as ${this.cast.reduce((acc, cv) => {
        return acc + ", " + cv;
      })} and it was a great ${this.genre.reduce((acc, cv) => {
        return acc + ", " + cv;
      })} movie`
    );
  },
};

movie1.getDetails();
movie2.getDetails();
