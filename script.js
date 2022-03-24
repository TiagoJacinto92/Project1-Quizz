import {
  quizzQuestions,
  questions,
  startButton,
  scoreBoard,
  correctAnswers,
  charactersArray,
} from "./storage.js";

// DOM STARTS

// This function's arguments have the same name as the above object's keys. Maybe change them...
function createQuestions(title, picture, questionNumber) {
  const question = document.createElement("div");
  question.id = questionNumber;
  question.classList.add("question");
  question.innerHTML = `${title}`;
  questions.appendChild(question);

  const questionImg = document.createElement("img");
  questionImg.src = `${picture}`;
  questionImg.classList.add("questImg");
  question.appendChild(questionImg);

  const nextButton = document.createElement("button");
  nextButton.classList.add("next-question-btn");
  nextButton.classList.add("btn");
  nextButton.classList.add("hide");
  nextButton.innerHTML = "Next question";
  question.appendChild(nextButton);
}

function createAnswers(
  soluction1,
  soluction2,
  soluction3,
  soluction4,
  iD,
  answerID1,
  answerID2,
  answerID3,
  answerID4
) {
  const questionID = document.getElementById(iD);
  const answerButtons = document.createElement("div");
  answerButtons.classList.add("answerButtons");
  questionID.appendChild(answerButtons);

  const answer1 = document.createElement("button");
  answer1.classList.add("btn");
  answer1.classList.add("answerBtn");
  answer1.id = answerID1;
  answer1.innerHTML = `${soluction1}`;
  answerButtons.appendChild(answer1);

  const answer2 = document.createElement("button");
  answer2.classList.add("btn");
  answer2.classList.add("answerBtn");
  answer2.id = answerID2;
  answer2.innerHTML = `${soluction2}`;
  answerButtons.appendChild(answer2);

  const answer3 = document.createElement("button");
  answer3.classList.add("btn");
  answer3.classList.add("answerBtn");
  answer3.id = answerID3;
  answer3.innerHTML = `${soluction3}`;
  answerButtons.appendChild(answer3);

  const answer4 = document.createElement("button");
  answer4.classList.add("btn");
  answer4.classList.add("answerBtn");
  answer4.id = answerID4;
  answer4.innerHTML = `${soluction4}`;
  answerButtons.appendChild(answer4);
}

// DOM ENDS

charactersArray[0].value.addEventListener("click", chooseCharacter1);
charactersArray[1].value.addEventListener("click", chooseCharacter2);
charactersArray[2].value.addEventListener("click", chooseCharacter3);
charactersArray[3].value.addEventListener("click", chooseCharacter4);

function chooseCharacter1() {
  charactersArray[0].value.removeEventListener("click", chooseCharacter1);
  charactersArray[1].value.removeEventListener("click", chooseCharacter2);
  charactersArray[2].value.removeEventListener("click", chooseCharacter3);
  charactersArray[3].value.removeEventListener("click", chooseCharacter4);
  const chosenCharacter = document.createElement("button");
  chosenCharacter.classList.add(charactersArray[0].string);
  scoreBoard.insertBefore(chosenCharacter, scoreBoard.firstChild);
}
function chooseCharacter2() {
  charactersArray[0].value.removeEventListener("click", chooseCharacter1);
  charactersArray[1].value.removeEventListener("click", chooseCharacter2);
  charactersArray[2].value.removeEventListener("click", chooseCharacter3);
  charactersArray[3].value.removeEventListener("click", chooseCharacter4);
  const chosenCharacter = document.createElement("button");
  chosenCharacter.classList.add(charactersArray[1].string);
  scoreBoard.insertBefore(chosenCharacter, scoreBoard.firstChild);
}
function chooseCharacter3() {
  charactersArray[0].value.removeEventListener("click", chooseCharacter1);
  charactersArray[1].value.removeEventListener("click", chooseCharacter2);
  charactersArray[2].value.removeEventListener("click", chooseCharacter3);
  charactersArray[3].value.removeEventListener("click", chooseCharacter4);
  const chosenCharacter = document.createElement("button");
  chosenCharacter.classList.add(charactersArray[2].string);
  scoreBoard.insertBefore(chosenCharacter, scoreBoard.firstChild);
}
function chooseCharacter4() {
  charactersArray[0].value.removeEventListener("click", chooseCharacter1);
  charactersArray[1].value.removeEventListener("click", chooseCharacter2);
  charactersArray[2].value.removeEventListener("click", chooseCharacter3);
  charactersArray[3].value.removeEventListener("click", chooseCharacter4);
  const chosenCharacter = document.createElement("button");
  chosenCharacter.classList.add(charactersArray[3].string);
  scoreBoard.insertBefore(chosenCharacter, scoreBoard.firstChild);
}

startButton.addEventListener("click", startGame);

function startGame() {
  quizzQuestions.map((question) => {
    createQuestions(question.question, question.image, question.id);
  });

  quizzQuestions.map((question) => {
    createAnswers(
      question.soluctions[0].text,
      question.soluctions[1].text,
      question.soluctions[2].text,
      question.soluctions[3].text,
      question.id
    );
  });
}
