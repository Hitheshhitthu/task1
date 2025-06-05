const questions = [
  {
    question: "Which language is used for web apps?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: 2
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Transfer Markup Language"],
    answer: 1
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Colorful Style System", "Computer Style Syntax", "Creative Styling Solution"],
    answer: 0
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(i);
    answersDiv.appendChild(btn);
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(selected) {
  const correctIndex = questions[current].answer;
  const feedback = document.getElementById("feedback");

  if (selected === correctIndex) {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.textContent = `Wrong! Correct answer is "${questions[current].options[correctIndex]}"`;
    feedback.style.color = "red";
  }

  document.getElementById("next-btn").style.display = "inline-block";
  document.getElementById("score-display").textContent = `Score: ${score}`;
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `
      <h2>Quiz Completed 🎉</h2>
      <p>Your final score is ${score}/${questions.length}</p>
    `;
  }
}

window.onload = loadQuestion;
