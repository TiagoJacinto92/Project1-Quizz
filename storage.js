const quizzQuestions = [
  {
    question: "Who's the first king of Portugal?",
    id: 1,
    image: "Henriques.jpg",
    soluctions: [
      { text: "D. Afonso Henriques", correct: true },
      { text: "Nuno Moniz", correct: false },
      { text: "Alexandre Costa", correct: false },
      { text: "Lourenço Morejón", correct: false },
    ],
  },
  {
    question: "Who was born in the USA?",
    id: 2,
    image: "Henriques.jpg",
    soluctions: [
      { text: "Tiago Jacinto", correct: false },
      { text: "Nuno Moniz", correct: true },
      { text: "Alexandre Costa", correct: false },
      { text: "Lourenço Morejón", correct: false },
    ],
  },
  {
    question: "Who's half cuban?",
    id: 3,
    image: "Henriques.jpg",
    soluctions: [
      { text: "Tiago Jacinto", correct: false },
      { text: "Nuno Moniz", correct: false },
      { text: "Alexandre Costa", correct: false },
      { text: "Lourenço Morejón", correct: true },
    ],
  },
  {
    question: "Who's the best biker?",
    id: 4,
    image: "Henriques.jpg",
    soluctions: [
      { text: "Tiago Jacinto", correct: false },
      { text: "Nuno Moniz", correct: false },
      { text: "Alexandre Costa", correct: true },
      { text: "Lourenço Morejón", correct: false },
    ],
  },
  {
    question: "Who loves guitars?",
    id: 5,
    image: "Henriques.jpg",
    soluctions: [
      { text: "Tiago Jacinto", correct: false },
      { text: "Nuno Moniz", correct: false },
      { text: "Alexandre Costa", correct: true },
      { text: "Lourenço Morejón", correct: false },
    ],
  },
  {
    question: "Who loves anime?",
    id: 6,
    image: "Henriques.jpg",
    soluctions: [
      { text: "Tiago Jacinto", correct: true },
      { text: "Nuno Moniz", correct: false },
      { text: "Alexandre Costa", correct: false },
      { text: "Lourenço Morejón", correct: true },
    ],
  },
  {
    question: "Who loves football?",
    id: 7,
    image: "Henriques.jpg",
    soluctions: [
      { text: "Tiago Jacinto", correct: true },
      { text: "Nuno Moniz", correct: true },
      { text: "Alexandre Costa", correct: false },
      { text: "Lourenço Morejón", correct: true },
    ],
  },
  {
    question: "Which one is your favorite?",
    id: 8,
    image: "Henriques.jpg",
    soluctions: [
      { text: "Tiago Jacinto", correct: true },
      { text: "Nuno Moniz", correct: true },
      { text: "Alexandre Costa", correct: true },
      { text: "Lourenço Morejón", correct: true },
    ],
  },
  {
    question: "Who's the best?",
    id: 9,
    image: "Henriques.jpg",
    soluctions: [
      { text: "Tiago Jacinto", correct: true },
      { text: "Nuno Moniz", correct: true },
      { text: "Alexandre Costa", correct: true },
      { text: "Lourenço Morejón", correct: true },
    ],
  },
  {
    question: "Who's the worst?",
    id: 10,
    image: "Henriques.jpg",
    soluctions: [
      { text: "Tiago Jacinto", correct: false },
      { text: "Nuno Moniz", correct: false },
      { text: "Alexandre Costa", correct: false },
      { text: "Lourenço Morejón", correct: false },
    ],
  },
];

const questions = document.querySelector(".questions");
const startButton = document.querySelector(".startQuizz-btn");
const scoreBoard = document.getElementById("scoreBoard");
const smallButton1 = document.querySelector(".smallButton1");
const smallButton2 = document.querySelector(".smallButton2");
const smallButton3 = document.querySelector(".smallButton3");
const smallButton4 = document.querySelector(".smallButton4");
let correctAnswers;

export {
  quizzQuestions,
  questions,
  startButton,
  scoreBoard,
  smallButton1,
  smallButton2,
  smallButton3,
  smallButton4,
  correctAnswers,
};
