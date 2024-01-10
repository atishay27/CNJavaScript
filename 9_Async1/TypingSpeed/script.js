const sentences = `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`;
let currentSentenceIndex = 0;
let startTime, endTime;
let timerInterval;

const sentenceElement = document.getElementById("sentence");
const inputElement = document.getElementById("input");
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("timer");
const speedElement = document.getElementById("speed");
const accuracyElement = document.getElementById("accuracy");
const resultElement = document.getElementById("result");
const retryButton = document.getElementById("retry-btn");

function startTest() {
  sentenceElement.innerHTML = sentences;
  inputElement.value = "";
  inputElement.disabled = false;
  inputElement.focus();
  startButton.disabled = true;
  startTime = new Date();
  timerInterval = setInterval(updateTimer, 1000);
  setTimeout(endTest, 30000); // End the test after 30 seconds
}

function updateTimer() {
  const currentTime = new Date();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  const remainingTime = 30 - elapsedTime;
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function endTest() {
  clearInterval(timerInterval);
  endTime = new Date();
  const elapsedTime = Math.floor((endTime - startTime) / 1000);
  const typedSentence = inputElement.value.trim();
  const correctSentence = sentenceElement.textContent.trim();

  let speed = 0;
  let typedWords = [];
  if (typedSentence != "") {
    typedWords = typedSentence.split(" ");
  }

  const correctWords = correctSentence.split(" ");
  console.log(correctWords);
  let correctCount = 0;
  let ind = 0;
  typedWords.forEach((word, index) => {
    if (word === correctWords[index]) {
      correctCount++;
      ind = index;
    }
  });
  if (typedSentence != "") {
    speed = Math.floor((correctCount / 30) * 60);
  }
  const accuracy = (correctCount / correctWords.length) * 100;
  speedElement.textContent = speed;
  accuracyElement.textContent = accuracy.toFixed(2);
  resultElement.style.display = "block";
  retryButton.focus();
}

startButton.addEventListener("click", startTest);

retryButton.addEventListener("click", () => {
  resultElement.style.display = "none";
  startButton.disabled = false;
  inputElement.value = "";
});

/*const startBtn = document.querySelector("#start-btn");
const inputField = document.querySelector("#input");
const para = document.querySelector("#sentence");
const timer = document.querySelector("#timer");
const resultDiv = document.querySelector("#result");
const wpmDiv = document.querySelector("#speed");
const accuracyDiv = document.querySelector("#accuracy");
const restartBtn = document.querySelector("#retry-btn");
const mytime = 30;
let timeInt;
let timeRemaining = mytime;
const timeAlloted = timeRemaining * 1000;

function getResult() {
  let score = 0;
  let correct = sentences.split(" ");
  correct = correct.map((value) => value.trim());
  correct = correct.filter((value) => value.length > 0);
  let typed = inputField.value.split(" ");
  typed = typed.map((value) => value.trim());
  typed = typed.filter((value) => value.length > 0);

  for (let i = 0; i < correct.length; i++) {
    if (correct[i] === typed[i]) {
      score++;
    }
  }
  let accuracy = ((score / correct.length) * 100).toFixed(2);
  return [score, accuracy];
}

startBtn.addEventListener("click", () => {
  inputField.disabled = false;
  para.textContent = sentences;
  startBtn.disabled = true;
  timeInt = setInterval(() => {
    timeRemaining--;
    const timeString = String(timeRemaining).padStart(2, "0");
    timer.textContent = `00:${timeString}`;
  }, 1000);
  setTimeout(() => {
    clearInterval(timeInt);
    resultDiv.style.display = "block";
    startBtn.disabled = true;
    inputField.disabled = true;
    let result = getResult();
    let score = result[0];
    wpmDiv.textContent = `${(score / 30) * 60}`;
    let accuracy = result[1];
    accuracyDiv.textContent = `${accuracy}`;
  }, timeAlloted);
});

restartBtn.addEventListener("click", () => {
  timeRemaining = mytime;
  startBtn.disabled = false;
  resultDiv.style.display = "none";
  inputField.value = "";
});*/
