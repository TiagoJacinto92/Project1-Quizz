const quizzQuestions = [
  {
    question: "Who's the first king of Portugal?",
    id: 1,
    image: "Henriques.jpg",
    soluctions: [
      { answerID: 1, text: "D. Afonso Henriques", correct: true },
      { answerID: 2, text: "Nuno Moniz", correct: false },
      { answerID: 3, text: "Alexandre Costa", correct: false },
      { answerID: 4, text: "Lourenço Morejón", correct: false },
    ],
  },
  {
    question: "Who was born in the USA?",
    id: 2,
    image: "Henriques.jpg",
    soluctions: [
      { answerID: 5, text: "Tiago Jacinto", correct: false },
      { answerID: 6, text: "Nuno Moniz", correct: true },
      { answerID: 7, text: "Alexandre Costa", correct: false },
      { answerID: 8, text: "Lourenço Morejón", correct: false },
    ],
  },
  {
    question: "Who's half cuban?",
    id: 3,
    image: "Henriques.jpg",
    soluctions: [
      { answerID: 9, text: "Tiago Jacinto", correct: false },
      { answerID: 10, text: "Nuno Moniz", correct: false },
      { answerID: 11, text: "Alexandre Costa", correct: false },
      { answerID: 12, text: "Lourenço Morejón", correct: true },
    ],
  },
  {
    question: "Who's the best biker?",
    id: 4,
    image: "Henriques.jpg",
    soluctions: [
      { answerID: 13, text: "Tiago Jacinto", correct: false },
      { answerID: 14, text: "Nuno Moniz", correct: false },
      { answerID: 15, text: "Alexandre Costa", correct: true },
      { answerID: 16, text: "Lourenço Morejón", correct: false },
    ],
  },
  {
    question: "Who loves guitars?",
    id: 5,
    image: "Henriques.jpg",
    soluctions: [
      { answerID: 17, text: "Tiago Jacinto", correct: false },
      { answerID: 18, text: "Nuno Moniz", correct: false },
      { answerID: 19, text: "Alexandre Costa", correct: true },
      { answerID: 20, text: "Lourenço Morejón", correct: false },
    ],
  },
  {
    question: "Who loves anime?",
    id: 6,
    image: "Henriques.jpg",
    soluctions: [
      { answerID: 21, text: "Tiago Jacinto", correct: false },
      { answerID: 22, text: "Nuno Moniz", correct: false },
      { answerID: 23, text: "Alexandre Costa", correct: false },
      { answerID: 24, text: "Lourenço Morejón", correct: true },
    ],
  },
  {
    question: "Who loves football?",
    id: 7,
    image: "Henriques.jpg",
    soluctions: [
      { answerID: 25, text: "Tiago Jacinto", correct: true },
      { answerID: 26, text: "Nuno Moniz", correct: true },
      { answerID: 27, text: "Alexandre Costa", correct: false },
      { answerID: 28, text: "Lourenço Morejón", correct: true },
    ],
  },
  {
    question: "Which one is your favorite?",
    id: 8,
    image: "Henriques.jpg",
    soluctions: [
      { answerID: 29, text: "Tiago Jacinto", correct: true },
      { answerID: 30, text: "Nuno Moniz", correct: true },
      { answerID: 31, text: "Alexandre Costa", correct: true },
      { answerID: 32, text: "Lourenço Morejón", correct: true },
    ],
  },
  {
    question: "Who's the best?",
    id: 9,
    image: "Henriques.jpg",
    soluctions: [
      { answerID: 33, text: "Tiago Jacinto", correct: true },
      { answerID: 34, text: "Nuno Moniz", correct: true },
      { answerID: 35, text: "Alexandre Costa", correct: true },
      { answerID: 36, text: "Lourenço Morejón", correct: true },
    ],
  },
  {
    question: "Who's the worst?",
    id: 10,
    image: "Henriques.jpg",
    soluctions: [
      { answerID: 37, text: "Tiago Jacinto", correct: false },
      { answerID: 38, text: "Nuno Moniz", correct: false },
      { answerID: 39, text: "Alexandre Costa", correct: false },
      { answerID: 40, text: "Lourenço Morejón", correct: false },
    ],
  },
];

const smallButton1 = document.querySelector(".smallButton1");
const smallButton2 = document.querySelector(".smallButton2");
const smallButton3 = document.querySelector(".smallButton3");
const smallButton4 = document.querySelector(".smallButton4");

const charactersArray = [
  { value: smallButton1, string: "smallButton1" },
  { value: smallButton2, string: "smallButton2" },
  { value: smallButton3, string: "smallButton3" },
  { value: smallButton4, string: "smallButton4" },
];

export { quizzQuestions, charactersArray };
