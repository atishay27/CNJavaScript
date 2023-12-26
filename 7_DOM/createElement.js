const btn = document.createElement("button");
btn.textContent = "Click Here";
btn.className = "btn1";
const division = document.querySelector("div");
division.appendChild(btn);

const newdivision = document.createElement("div");
const newPara = document.createElement("p");
newPara.textContent =
  "I am a new Paragraph inside new Division added using Javascript";
newdivision.appendChild(newPara);

const body = document.querySelector("body");
body.insertBefore(newdivision, division);
