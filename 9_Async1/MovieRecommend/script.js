let movieList = null;
let currentIndex = 0;
const imageBaseUrl = "https://image.tmdb.org/t/p/w780";
function Main() {
  const data = null;

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function () {
    if (this.readyState === this.DONE) {
      feedGenre(JSON.parse(this.responseText));
    }
  });

  xhr.open("GET", "https://api.themoviedb.org/3/genre/movie/list?language=en");
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDY2Y2Q1MDRmNWI4NDlmZTAyMjI0M2JiZjMyNTIyNCIsInN1YiI6IjY1OWUzNTNlOGU4ZDMwMDIwMmRiYmU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qAl4CAsMFMK7eyPIekXt-rumQ_WrMsgKlm_DSdPz7Fk"
  );

  xhr.send(data);

  const searchBtn = document.querySelector("#playBtn");
  const genreSelector = document.querySelector("#genres");

  searchBtn.addEventListener("click", () => {
    getMoviesList(genreSelector.value);
  });
}

function getMoviesList(genreName) {
  const req = new XMLHttpRequest();
  req.open(
    "GET",
    `https://api.themoviedb.org/3/discover/movie?api_key=c066cd504f5b849fe022243bbf325224&with_genres=${genreName}`
  );
  req.send();

  req.addEventListener("load", function () {
    movieList = JSON.parse(req.responseText).results;
    currentIndex = 0;
    showMovieCard();
  });
}

function feedGenre(data) {
  const genreSelector = document.querySelector("#genres");
  for (genre of data.genres) {
    const option = document.createElement("option");
    option.value = genre.name;
    option.textContent = genre.name;
    genreSelector.appendChild(option);
  }
}

function showMovieCard() {
  resetMovieCard();
  const movie = movieList[currentIndex];
  console.log(movie);
  const imageDiv = document.querySelector("#moviePoster");
  const imageEl = document.createElement("img");
  imageEl.id = "moviePoster";
  imageEl.alt = "Poster Image";
  imageEl.src = `${imageBaseUrl}${movie.poster_path}`;
  imageDiv.appendChild(imageEl);

  const movieHead = document.querySelector("#movieText");
  const movieTitle = document.createElement("h1");
  movieTitle.id = "movieTitle";
  movieTitle.textContent = movie.original_title;
  movieHead.appendChild(movieTitle);

  const movieOverview = document.createElement("p");
  movieOverview.id = "movieOverview";
  movieOverview.textContent = movie.overview;
  movieHead.append(movieOverview);

  const btn = document.querySelector("#likeOrDislikeBtns");
  btn.hidden = false;
}

function resetMovieCard() {
  const imageDiv = document.querySelector("#moviePoster");
  imageDiv.textContent = "";
  const movieHead = document.querySelector("#movieText");
  movieHead.textContent = "";
  const btn = document.querySelector("#likeOrDislikeBtns");
  btn.hidden = true;
}

const NextBtn = document.querySelector("#likeBtn");
NextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex === movieList.length) {
    currentIndex = 0;
  }

  showMovieCard();
});

Main();
