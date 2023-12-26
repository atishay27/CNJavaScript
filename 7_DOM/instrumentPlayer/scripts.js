function playWKey() {
  var audio = new Audio("https://files.codingninjas.in/tom-1-28537.mp3");
  audio.play();
}

function playAKey() {
  var audio = new Audio("https://files.codingninjas.in/tom-2-28541.mp3");
  audio.play();
}

function playSKey() {
  var audio = new Audio("https://files.codingninjas.in/tom-3-28542.mp3");
  audio.play();
}
function playDKey() {
  var audio = new Audio("https://files.codingninjas.in/tom-4-28543.mp3");
  audio.play();
}

function playJKey() {
  var audio = new Audio("https://files.codingninjas.in/snare-28545.mp3");
  audio.play();
}

function playKKey() {
  var audio = new Audio("https://files.codingninjas.in/crash-28546.mp3");
  audio.play();
}

function playLKey() {
  var audio = new Audio("https://files.codingninjas.in/kick-bass-28547.mp3");
  audio.play();
}

function playAudio(key) {
  switch (key) {
    case "w": {
      playWKey();
      break;
    }
    case "a": {
      playAKey();
      break;
    }
    case "s": {
      playSKey();
      break;
    }
    case "d": {
      playDKey();
      break;
    }
    case "j": {
      playJKey();
      break;
    }
    case "k": {
      playKKey();
      break;
    }
    case "l": {
      playLKey();
      break;
    }
  }
}

document.addEventListener("keypress", (e) => {
  playAudio(e.key);
});

const wButton = document.querySelector(".w");
wButton.addEventListener("click", () => playAudio("w"));

const aButton = document.querySelector(".a");
aButton.addEventListener("click", () => playAudio("a"));

const sButton = document.querySelector(".s");
sButton.addEventListener("click", () => playAudio("s"));

const dButton = document.querySelector(".d");
dButton.addEventListener("click", () => playAudio("d"));

const jButton = document.querySelector(".j");
jButton.addEventListener("click", () => playAudio("j"));

const kButton = document.querySelector(".k");
kButton.addEventListener("click", () => playAudio("k"));

const lButton = document.querySelector(".l");
lButton.addEventListener("click", () => playAudio("l"));
