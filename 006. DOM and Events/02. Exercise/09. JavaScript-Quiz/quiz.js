document.addEventListener('DOMContentLoaded', solve);

function solve() {

  const answers = [
      "onclick",
      "JSON.stringify()",
      "A programming API for HTML and XML documents"
  ];

  const section = Array.from(document.querySelectorAll(".question"));

  let currQuest = 0;
  let correctAnswer = 0;

  const main = document.querySelector("main");
  const result = document.querySelector("#results");


  main.addEventListener("click", function (e) {

      if (e.target.nodeName !== "LI") return;
      if (!e.target.classList.contains("quiz-answer")) return;

      section[currQuest].classList.add("hidden");
      const user = e.target.textContent;

      if (user === answers[currQuest]) {
          correctAnswer++;
      }

      currQuest++;

      if (currQuest === section.length) {

        if (correctAnswer === answers.length) {
            result.textContent = "You are recognized as top JavaScript fan!";

        } else if (correctAnswer === 1) {
            result.textContent = "You have 1 right answer";

        } else {
            result.textContent = `You have ${correctAnswer} right answers`;
        }

      } else {
          section[currQuest].classList.remove("hidden");
      }
  });
}
