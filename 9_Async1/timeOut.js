const myDiv = document.querySelector("#test");

const heading = document.createElement("h2");
heading.textContent = "TimeOut";
myDiv.appendChild(heading);

const btn = document.createElement("button");
btn.textContent = "Click Here";
myDiv.appendChild(btn);

const output = document.createElement("h3");
myDiv.appendChild(output);

btn.addEventListener("click", () => {
  output.textContent = "Button is Pressed";
  setTimeout(() => {
    output.textContent = "";
  }, 2000);
});

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
