//Create you project here from scratch
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];
// Use moviesList array for displaing the Name in the dropdown menu
const dropDown = document.querySelector("#selectMovie");
for (movie of moviesList) {
  const option = document.createElement("option");
  option.value = movie.movieName;
  option.textContent = movie.movieName;
  dropDown.appendChild(option);
}
dropDown.addEventListener("change", function (event) {
  const movieNameHeading = document.querySelector("#movieName");
  const moviePriceHeading = document.querySelector("#moviePrice");
  const price = moviesList.filter(
    (el) => el.movieName === event.target.value
  )[0].price;
  moviePriceHeading.textContent = `$ ${price}`;
  movieNameHeading.textContent = event.target.value;
});
//Add eventLister to each unoccupied seats
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button
