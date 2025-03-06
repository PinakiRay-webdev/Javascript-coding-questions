const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<css>", "<script>", "<link>"],
    correctAnswer: "<style>",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "background-color", "bgcolor", "background"],
    correctAnswer: "background-color",
  },
  {
    question: "Which JavaScript method is used to write HTML output?",
    options: [
      "document.write()",
      "console.log()",
      "window.write()",
      "response.write()",
    ],
    correctAnswer: "document.write()",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "font", "styles"],
    correctAnswer: "style",
  },
];

let currentScore = 0;

const questions = document.querySelector(".questions");
const options = document.querySelector(".options");
const nextBtn = document.querySelector("#nextBtn");
const score = document.querySelector("#score");

const questionName = document.createElement("h3");
const questionNumber = document.createElement("h4");

let index = 0;

questionName.textContent = quizQuestions[index].question;
questionNumber.textContent = `Question ${index + 1} / ${quizQuestions.length}`;
questions.append(questionNumber, questionName);
score.innerHTML = `Score: ${currentScore}`;

const showOptions = (index) => {
  options.innerHTML = "";
  quizQuestions[index].options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.setAttribute("data", option);
    optionButton.textContent = option;
    options.append(optionButton);

    optionButton.addEventListener("click", () => {
      if (index >= quizQuestions.length - 1) {
        options.innerHTML = "";
        questions.innerHTML = "";
        score.remove();

        questions.innerHTML = "Thanks for giving the test";
        options.innerHTML = `Total Score: ${currentScore + 1}`;
      }

      if (
        optionButton.getAttribute("data") === quizQuestions[index].correctAnswer
      ) {
        currentScore += 1;
        score.innerHTML = `Score: ${currentScore}`;
      } else {
        currentScore -= 0.25;
        score.innerHTML = `Score: ${currentScore}`;
      }

      index += 1;
      questionName.textContent = quizQuestions[index].question;
      questionNumber.textContent = `Question ${index + 1} / ${
        quizQuestions.length
      }`;
      showOptions(index);
    });
  });
};

showOptions(index);

// nextBtn.addEventListener("click", () => {
//   if (index >= quizQuestions.length-1) {
//     options.innerHTML = "";
//     questions.innerHTML = "";

//     questions.innerHTML = 'Thanks for giving the test'
//     options.innerHTML = `Total Score: `
//   }
//   index += 1;
//   questionName.textContent = quizQuestions[index].question;
//   showOptions(index);
//   console.log(index);
// });