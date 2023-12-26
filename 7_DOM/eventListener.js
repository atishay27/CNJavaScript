const secondHeading = document.querySelector(".second");
const headingContent = secondHeading.textContent;
secondHeading.addEventListener("click", () => clickPara(headingContent));

function clickPara(content) {
  console.log(content);
  alert("Second Heading Clicked");
}

secondHeading.cl;
