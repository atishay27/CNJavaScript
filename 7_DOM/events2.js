const secondHeading = document.querySelector(".second");

secondHeading.addEventListener("click", () => {
  secondHeading.remove();
});

const para = document.querySelector("#para");
para.addEventListener("mouseover", () => {
  para.style.backgroundColor = "yellow";
});

para.addEventListener("mousedown", () => {
  para.style.backgroundColor = "green";
});

para.addEventListener("mouseup", () => {
  para.style.backgroundColor = "orange";
});

document.addEventListener("keydown", (e) => {
  console.log(e.key + " key pressed");
  console.log(e.keyCode);
});

document.addEventListener("mousedown", (e) => {
  console.log(e.clientX);
});
