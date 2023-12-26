fetch("ques.json")
  .then((response) => response.json())
  .then((json) => {
    main(shuffleOption(json));
  });
function shuffleOption(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}
function main(questionObjects) {
  let score = 0;
  let currentQuestion = 0;
  let totalScore = questionObjects.length;
  const optionElement = document.querySelector("#options");
  const questionElement = document.querySelector("#question");
  const scoreElement = document.querySelector("#score");

  const nextElement = document.querySelector("#next");

  function showQuestion() {
    const { correctAnswer, options, question } =
      questionObjects[currentQuestion];
    optionElement.textContent = "";
    questionElement.textContent = question;

    let shuffledAnswers = shuffleOption(options);
    function addButton(content) {
      const btn = document.createElement("button");
      btn.value = content;
      btn.textContent = content;
      btn.addEventListener("click", () => {
        if (content === correctAnswer) {
          score++;
        } else {
          score = score - 0.25;
        }
        scoreElement.textContent = `Score: ${score} / ${totalScore}`;
        nextQuestion();
      });
      optionElement.appendChild(btn);
    }
    shuffledAnswers.forEach((opt) => {
      addButton(opt);
    });
  }
  function nextQuestion() {
    currentQuestion++;
    optionElement.textContent = "";
    if (currentQuestion >= questionObjects.length) {
      nextElement.remove();
      questionElement.textContent = "Quiz Completed";
    } else {
      showQuestion();
    }
  }
  showQuestion(currentQuestion);
  nextElement.addEventListener("click", () => {
    scoreElement.textContent = `Score: ${score} / ${totalScore}`;
    nextQuestion();
  });
}
