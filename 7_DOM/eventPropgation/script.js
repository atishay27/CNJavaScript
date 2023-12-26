document.querySelector("h1").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Heading 3 Clicked");
});

document.querySelector(".outer-div").addEventListener("click", () => {
  console.log("Outer Div Clicked");
});

document.querySelector(".inner-div").addEventListener("click", () => {
  console.log("Inner Div Clicked");
});

document.body.addEventListener("click", () => {
  console.log("Body Clicked");
});

const heading = document.querySelector("h1");
console.log(document.body.appendChild(heading));
