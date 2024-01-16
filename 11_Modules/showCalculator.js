const mainDivEl = document.querySelector("#test");

const headingEL = document.createElement("h1");
headingEL.innerText = "Circle Area Calculator";
mainDivEl.appendChild(headingEL);

const spanEL = document.createElement("span");
spanEL.innerText = "Enter the radius: ";
mainDivEl.appendChild(spanEL);

const inputEL = document.createElement("input");
inputEL.id = "radius";
inputEL.type = "number";
inputEL.placeholder = "Enter Radius";
mainDivEl.appendChild(inputEL);

const btnEL = document.createElement("button");
btnEL.textContent = "Calculate";
btnEL.addEventListener("click", () => {
  let val = inputEL.value;
  let res = calculateArea(Number(val));
  const resEL = document.createElement("p");
  resEL.textContent = `Area is: ${res.toFixed(2)}`;
  mainDivEl.appendChild(resEL);
});
mainDivEl.appendChild(btnEL);
