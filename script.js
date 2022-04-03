import { quizzQuestions } from "/src/js/storage.js";

// DOM STARTS

const questionsContainer = document.querySelector(".questionsAlternative");

// This function's arguments have the same name as the above object's keys. Maybe change them...
function createQuestions(title, picture, questionNumber) {
  const question = document.createElement("div");
  question.id = `${questionNumber}`;
  question.classList.add(`questionContainer${questionNumber}`);
  questionsContainer.appendChild(question);

  const questionImg = document.createElement("img");
  questionImg.src = `${picture}`;
  questionImg.classList.add("imgHenriques");
  question.appendChild(questionImg);

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("h3Container");
  question.appendChild(questionDiv);

  const questionText = document.createElement("h3");
  questionText.innerHTML = `${title}`;
  questionDiv.appendChild(questionText);
}
let counter = 0;

const card = document.querySelector(".charImg");

function generateFinalChar(storage) {
  const imageChar = document.createElement("input");
  imageChar.classList.add(storage);
  imageChar.setAttribute("type", "button");
  card.appendChild(imageChar);
}

const cardName = document.querySelector(".charName");

function generateFinalName(storage2) {
  const mainCharacterScore = document.createElement("div");
  mainCharacterScore.classList.add("playerName");
  cardName.appendChild(mainCharacterScore);

  const name = document.createElement("h3");
  name.classList.add("pName");
  name.innerText = `Congratulations ${storage2}`;
  mainCharacterScore.appendChild(name);
}

const cardScore = document.querySelector(".score");

function generateFinalScore() {
  const scoreTable = document.createElement("h3");
  scoreTable.innerText = `${counter}/10`;
  cardScore.appendChild(scoreTable);
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
  answerButtons.classList.add("allButtons");
  questionID.appendChild(answerButtons);

  const answers = document.createElement("div");
  answers.classList.add("anwser");
  answerButtons.appendChild(answers);

  const answer1 = document.createElement("button");
  answer1.classList.add("anwserAlternative");
  answer1.classList.add(`${answerID1}`);
  answer1.id = answerID1;
  answer1.innerHTML = `${soluction1}`;
  answer1.addEventListener("click", function onClick() {
    if (answerID1) {
      counter = counter + 1;
      answer1.style.backgroundColor = "#52B788";
    } else {
      answer1.style.backgroundColor = "salmon";
    }
  });
  answers.appendChild(answer1);

  const answer2 = document.createElement("button");
  answer2.classList.add("anwserAlternative");
  answer2.classList.add(`${answerID2}`);
  answer2.id = answerID2;
  answer2.innerHTML = `${soluction2}`;
  answer2.addEventListener("click", function onClick() {
    if (answerID2) {
      counter = counter + 1;
      answer2.style.backgroundColor = "#52B788";
    } else {
      answer2.style.backgroundColor = "salmon";
    }
  });
  answers.appendChild(answer2);

  const answer3 = document.createElement("button");
  answer3.classList.add("anwserAlternative");
  answer3.classList.add(`${answerID3}`);
  answer3.id = answerID3;
  answer3.innerHTML = `${soluction3}`;
  answer3.addEventListener("click", function onClick() {
    if (answerID3) {
      counter = counter + 1;
      answer3.style.backgroundColor = "#52B788";
    } else {
      answer3.style.backgroundColor = "salmon";
    }
  });
  answers.appendChild(answer3);

  const answer4 = document.createElement("button");
  answer4.classList.add("anwserAlternative");
  answer4.classList.add(`${answerID4}`);
  answer4.id = answerID4;
  answer4.innerHTML = `${soluction4}`;
  answer4.addEventListener("click", function onClick() {
    if (answerID4) {
      counter = counter + 1;
      answer4.style.backgroundColor = "#52B788";
    } else {
      answer4.style.backgroundColor = "salmon";
    }
  });
  answers.appendChild(answer4);

  const nextButtonDiv = document.createElement("div");
  nextButtonDiv.classList.add("submitAlternative");
  nextButtonDiv.addEventListener("click", function onClick() {
    if (iD === 10) {
      let storage = localStorage.getItem("characterImg");
      let storage2 = localStorage.getItem("playerName");

      generateFinalChar(storage);
      generateFinalName(storage2);
      generateFinalScore();
    }
  });
  answerButtons.appendChild(nextButtonDiv);

  const linkNextQuestion = document.createElement("a");
  // linkNextQuestion.href = `.questionContainer${iD+1}`
  nextButtonDiv.appendChild(linkNextQuestion);

  const nextButton = document.createElement("button");
  nextButton.classList.add("submitAlternative1");
  linkNextQuestion.appendChild(nextButton);

  const span1 = document.createElement("span");
  span1.classList.add("replies");
  span1.innerHTML = "Next question";
  nextButton.appendChild(span1);

  const span2 = document.createElement("span");
  span2.classList.add("comment");
  span2.innerHTML = "Are You Sure?";
  nextButton.appendChild(span2);
}

const resetBtn = document.querySelector("#backbtn");
resetBtn.addEventListener("click", function () {
  window.location.reload();
  localStorage.clear();
});

// DOM ENDS

//! Create function to get characters

const getChars1 = document
  .querySelector("#narutoButton")
  .addEventListener("click", function () {
    localStorage.setItem("characterImg", "smallButton1");
    window.location.reload();
  });

const getChars2 = document
  .querySelector("#camoesButton")
  .addEventListener("click", function () {
    localStorage.setItem("characterImg", "smallButton2");
    window.location.reload();
  });

const getChars3 = document
  .querySelector("#harryButton")
  .addEventListener("click", function () {
    localStorage.setItem("characterImg", "smallButton3");
    window.location.reload();
  });

const getChars4 = document
  .querySelector("#queenButton")
  .addEventListener("click", function () {
    localStorage.setItem("characterImg", "smallButton4");
    window.location.reload();
  });

//! Create function to get player name

const inputName = document
  .getElementById("startQuizz-btn")
  .addEventListener("click", function () {
    const playerName = document.getElementById("name").value;
    localStorage.setItem("playerName", playerName);
    window.location.reload();
  });

const startButton = document
  .getElementById("startbtn")
  .addEventListener("click", function () {
    while (questionsContainer.firstChild) {
      questionsContainer.removeChild(questionsContainer.firstChild);
    }
    quizzQuestions.map((question) => {
      createQuestions(question.question, question.image, question.id);
    });
    quizzQuestions.map((question) => {
      createAnswers(
        question.soluctions[0].text,
        question.soluctions[1].text,
        question.soluctions[2].text,
        question.soluctions[3].text,
        question.id,
        question.soluctions[0].correct,
        question.soluctions[1].correct,
        question.soluctions[2].correct,
        question.soluctions[3].correct
      );
    });
  });
