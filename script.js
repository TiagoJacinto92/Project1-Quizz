// DOM STARTS
const questions = document.querySelector(".questions");

const quizzQuestions = [
  {
    question: "Who's the first king of Portugal?",
    soluction1: "D. Afonso Henriques",
    soluction2: "Nuno Moniz",
    soluction3: "Alexandre Costa",
    soluction4: "Lourenço Morejón",
  },
  {
    question: "Who was born in the USA?",
    soluction1: "Tiago Jacinto",
    soluction2: "Nuno Moniz",
    soluction3: "Alexandre Costa",
    soluction4: "Lourenço Morejón",
  },
  {
    question: "Who's half cuban?",
    soluction1: "Tiago Jacinto",
    soluction2: "Nuno Moniz",
    soluction3: "Alexandre Costa",
    soluction4: "Lourenço Morejón",
  },
  {
    question: "Who's the best biker?",
    soluction1: "Tiago Jacinto",
    soluction2: "Nuno Moniz",
    soluction3: "Alexandre Costa",
    soluction4: "Lourenço Morejón",
  },
  {
    question: "Who loves guitars?",
    soluction1: "Tiago Jacinto",
    soluction2: "Nuno Moniz",
    soluction3: "Alexandre Costa",
    soluction4: "Lourenço Morejón",
  },
  {
    question: "Who loves anime?",
    soluction1: "Tiago Jacinto",
    soluction2: "Nuno Moniz",
    soluction3: "Alexandre Costa",
    soluction4: "Lourenço Morejón",
  },
  {
    question: "Who loves football?",
    soluction1: "Tiago Jacinto",
    soluction2: "Nuno Moniz",
    soluction3: "Alexandre Costa",
    soluction4: "Lourenço Morejón",
  },
  {
    question: "Which one is your favorite?",
    soluction1: "Tiago Jacinto",
    soluction2: "Nuno Moniz",
    soluction3: "Alexandre Costa",
    soluction4: "Lourenço Morejón",
  },
  {
    question: "Who's the best?",
    soluction1: "Tiago Jacinto",
    soluction2: "Nuno Moniz",
    soluction3: "Alexandre Costa",
    soluction4: "Lourenço Morejón",
  },
  {
    question: "Who's the worst?",
    soluction1: "Tiago Jacinto",
    soluction2: "Nuno Moniz",
    soluction3: "Alexandre Costa",
    soluction4: "Lourenço Morejón",
  },
];

// This function's arguments have the same name as the above object's keys. Maybe change them...
function createQuestions(
  title,
  soluction1,
  soluction2,
  soluction3,
  soluction4
) {
  const question = document.createElement("div");
  question.classList.add("question");
  question.innerHTML = `${title}`;
  questions.appendChild(question);

  const answer1 = document.createElement("div");
  answer1.classList.add("answer1");
  answer1.innerHTML = `${soluction1}`;
  question.appendChild(answer1);

  const answer2 = document.createElement("div");
  answer2.classList.add("answer2");
  answer2.innerHTML = `${soluction2}`;
  question.appendChild(answer2);

  const answer3 = document.createElement("div");
  answer3.classList.add("answer3");
  answer3.innerHTML = `${soluction3}`;
  question.appendChild(answer3);

  const answer4 = document.createElement("div");
  answer4.classList.add("answer4");
  answer4.innerHTML = `${soluction4}`;
  question.appendChild(answer4);
}

for (const challenge of quizzQuestions) {
  createQuestions(
    challenge.question,
    challenge.soluction1,
    challenge.soluction2,
    challenge.soluction3,
    challenge.soluction4
  );
}
// DOM ENDS
