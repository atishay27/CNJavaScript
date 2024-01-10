const myDiv = document.querySelector("#test");

const heading = document.createElement("h2");
heading.textContent = "Time Interval";
myDiv.appendChild(heading);

const btn = document.createElement("button");
btn.textContent = "Start Timer";
myDiv.appendChild(btn);

const btn2 = document.createElement("button");
btn2.textContent = "Stop Timer";
myDiv.appendChild(btn2);

const output = document.createElement("h3");
myDiv.appendChild(output);
let seconds = 0;

btn.addEventListener("click", () => {
  const timer = setInterval(() => {
    output.textContent = `${seconds} seconds`;
    seconds += 1;
    btn2.addEventListener("click", () => {
      clearInterval(timer);
    });
  }, 1000);
  console.log(typeof timer);
});
