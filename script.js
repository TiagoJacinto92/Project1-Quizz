// DOM STARTS
const questions = document.querySelector(".questions");

const quizzQuestions = [
  {
    question: "Who's the first king of Portugal?",
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
    image: "Henriques.jpg",
    soluctions: [
      { text: "Tiago Jacinto", correct: false },
      { text: "Nuno Moniz", correct: false },
      { text: "Alexandre Costa", correct: false },
      { text: "Lourenço Morejón", correct: false },
    ],
  },
];

// This function's arguments have the same name as the above object's keys. Maybe change them...
function createQuestions(
  title,
  picture,
  soluction1,
  soluction2,
  soluction3,
  soluction4
) {
  const question = document.createElement("div");
  question.classList.add("question");
  question.innerHTML = `${title}`;
  questions.appendChild(question);

  const questionImg = document.createElement("img");
  questionImg.src = `${picture}`;
  questionImg.classList.add("questImg");
  question.appendChild(questionImg);

  const answerButtons = document.createElement("div");
  answerButtons.classList.add("answerButtons");
  question.appendChild(answerButtons);

  const answer1 = document.createElement("button");
  answer1.classList.add("btn");
  answer1.classList.add("anwserBtn");
  answer1.innerHTML = `${soluction1}`;
  answerButtons.appendChild(answer1);

  const answer2 = document.createElement("button");
  answer2.classList.add("btn");
  answer2.classList.add("anwserBtn");
  answer2.innerHTML = `${soluction2}`;
  answerButtons.appendChild(answer2);

  const answer3 = document.createElement("button");
  answer3.classList.add("btn");
  answer3.classList.add("anwserBtn");
  answer3.innerHTML = `${soluction3}`;
  answerButtons.appendChild(answer3);

  const answer4 = document.createElement("button");
  answer4.classList.add("btn");
  answer4.classList.add("anwserBtn");
  answer4.innerHTML = `${soluction4}`;
  answerButtons.appendChild(answer4);

  const nextButton = document.createElement("button");
  nextButton.classList.add("next-question-btn");
  nextButton.classList.add("btn");
  nextButton.classList.add("hide");
  nextButton.innerHTML = "Next question";
  questions.appendChild(nextButton);
}

for (const challenge of quizzQuestions) {
  createQuestions(
    challenge.question,
    challenge.image,
    challenge.soluction1,
    challenge.soluction2,
    challenge.soluction3,
    challenge.soluction4
  );
}
// DOM ENDS

function selectAnswer() { }
