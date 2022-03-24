import { quizzQuestions, charactersArray } from "./storage.js";

// DOM STARTS

/* const questions = document.querySelector(".questions");
const scoreBoard = document.getElementById("scoreBoard");*/
// const smallButton1 = document.querySelector(".smallButton1");
// const smallButton2 = document.querySelector(".smallButton2");
// const smallButton3 = document.querySelector(".smallButton3");
// const smallButton4 = document.querySelector(".smallButton4");
/* 
localStorage.setItem("characterImg","defaultAvatar")
 */

const questionsContainer = document.querySelector(".questionsAlternative");

// This function's arguments have the same name as the above object's keys. Maybe change them...
function createQuestions(title, picture, questionNumber) {
  const question = document.createElement("div");
  question.id = questionNumber;
  question.classList.add("question");
  question.innerHTML = `${title}`;
  questionsContainer.appendChild(question);

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
  answerID4,
  type1,
  type2,
  type3,
  type4
) {
  const questionID = document.getElementById(iD);
  const answerButtons = document.createElement("div");
  answerButtons.classList.add("answerButtons");
  questionID.appendChild(answerButtons);

  const answer1 = document.createElement("button");
  answer1.classList.add("btn");
  answer1.classList.add("answerBtn");
  answer1.classList.add(`${type1}`);
  answer1.id = answerID1;
  answer1.innerHTML = `${soluction1}`;
  answerButtons.appendChild(answer1);

  const answer2 = document.createElement("button");
  answer2.classList.add("btn");
  answer2.classList.add("answerBtn");
  answer2.classList.add(`${type2}`);
  answer2.id = answerID2;
  answer2.innerHTML = `${soluction2}`;
  answerButtons.appendChild(answer2);

  const answer3 = document.createElement("button");
  answer3.classList.add("btn");
  answer3.classList.add("answerBtn");
  answer3.classList.add(`${type3}`);
  answer3.id = answerID3;
  answer3.innerHTML = `${soluction3}`;
  answerButtons.appendChild(answer3);

  const answer4 = document.createElement("button");
  answer4.classList.add("btn");
  answer4.classList.add("answerBtn");
  answer4.classList.add(`${type4}`);
  answer4.id = answerID4;
  answer4.innerHTML = `${soluction4}`;
  answerButtons.appendChild(answer4);
}

// DOM ENDS

/* function chooseCharacter1() {
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
} */

//! Create function to get characters

const getChars1 = document
  .getElementById("narutoButton")
  .addEventListener("click", function () {
    localStorage.setItem("characterImg", "smallButton1");
    window.location.reload();
  });

const getChars2 = document
  .getElementById("camoesButton")
  .addEventListener("click", function () {
    localStorage.setItem("characterImg", "smallButton2");
    window.location.reload();
  });

const getChars3 = document
  .getElementById("harryButton")
  .addEventListener("click", function () {
    localStorage.setItem("characterImg", "smallButton3");
    window.location.reload();
  });

const getChars4 = document
  .getElementById("queenButton")
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

let storage = localStorage.getItem("characterImg");
let storage2 = localStorage.getItem("playerName");

generateFinalChar(storage);
generateFinalName(storage2);

// function startGame() {
//   quizzQuestions.map((question) => {
//     createQuestions(question.question, question.image, question.id);
//   });

const startButton = document
  .getElementById("startbtn")
  .addEventListener("click", function () {
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
