//Questions and answers
const questions = [

    {
        question: "1).Which brand is known for its iconic 'swoosh' logo and is a leading manufacturer of sports apparel and footwear?",
        answers: ["A. Nike", "B. Adidas", "C. Puma", "D. Under Armour"],
        correctAnswer: 0, // Index of the correct answer
    },
    {
        question: "2).In which sport would you commonly find players wearing shin guards?",
        answers: ["A. Soccer", "B. Hockey", "C. Rugby", "D. Martial arts"],
        correctAnswer: 0,
    },
    {
        question: "3).What is the main purpose of wearing compression garments in sports?",
        answers: ["A. Increased muscle support and reduced fatigue", "B.Improved blood circulation and enhanced recovery", "C. Better temperature regulation and reduced muscle soreness", "D. All of the above"],
        correctAnswer: 3,
    },
    {
        question: "4).Which sport is associated with the term 'jersey' referring to a player's uniform?",
        answers: ["A. Football (Soccer)", "B. Basketball", "C. Ice Hockey", "D.  Rugby"],
        correctAnswer: 0,
    },
    {
        question: "5).Rugby players are required to wear a gum shield (gum guard) during matches?",
        answers: ["A. True", "B. False"],
        correctAnswer: 0,
    },
    {
        question: "6).What is the name of the high-performance fabric commonly used in sportswear due to its moisture-wicking and quick-drying properties?",
        answers: ["A. Polyester", "B. Nylon", "C. Spandex", "D. Dri-FIT"],
        correctAnswer: 3,
    },
    {
        question: "7).In tennis, what is the traditional color of tennis balls used in professional matches?",
        answers: ["A. White", "B. Green", "C.  Yellow", "D. Orange"],
        correctAnswer: 2,
    },
    {
        question: "8).What type of shoe is designed with spikes or cleats on the sole to provide better traction on grass or turf?",
        answers: ["A. Running shoes", "B. Soccer cleats", "C. Golf shoes", "D. Track spikes"],
        correctAnswer: 1,
    },
    {
        question: "9).In American football, what protective equipment is worn by players to protect their heads from potential injury?",
        answers: ["A. Girdle", "B. Shoulder pads", "C. Mouth guard", "D. Helmet"],
        correctAnswer: 3,
    },
    {
        question: "10)  What popular athletic brand sponsors the NBA and is known for its basketball sneakers?",
        answers: ["A.Reebok", "B.Under Armour", "C. Nike", "4. Adidas"],
        correctAnswer: 2,
    }

];

let currentIndex = 0;
let correctCount = 0;
let startTime;

// Element references
const quizContainer = document.getElementById("quiz-container");
const quizHeader = document.getElementById("quiz-header");
const quizBody = document.getElementById("quiz-body");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerContainer = document.getElementById("answer-container");
const controlsContainer = document.getElementById("controls-container");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const quizSummary = document.getElementById("quiz-summary");
const correctCountElement = document.getElementById("correct-count");
const timeSpentElement = document.getElementById("time-spent");
const restartButton = document.getElementById("restart-btn");

// Event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
submitButton.addEventListener("click", showSummary);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    startTime = new Date();
    quizHeader.style.display = "none";
    quizBody.style.display = "block";
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentIndex];
    questionElement.textContent = currentQuestion.question;

    answerContainer.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
        const answerBox = document.createElement("div");
        answerBox.classList.add("answer-box");
        answerBox.innerHTML = `<p class="answer">${answer}</p>`;
        answerBox.addEventListener("click", () => checkAnswer(index));
        answerContainer.appendChild(answerBox);
    });
}

function checkAnswer(answerIndex) {
    const currentQuestion = questions[currentIndex];
    const answerBoxes = answerContainer.querySelectorAll(".answer-box");
    answerBoxes.forEach((answerBox, index) => {
        if (index === currentQuestion.correctAnswer) {
            answerBox.classList.add("correct");
        } else if (index === answerIndex) {
            answerBox.classList.add("wrong");
        }
        answerBox.style.pointerEvents = "none";
    });

    if (answerIndex === currentQuestion.correctAnswer) {
        correctCount++;
    }

    nextButton.style.display = currentIndex === questions.length - 1 ? "none" : "block";
    submitButton.style.display = currentIndex === questions.length - 1 ? "block" : "none";
    controlsContainer.style.display = "block";
}

function nextQuestion() {
    currentIndex++;
    controlsContainer.style.display = "none";
    displayQuestion();
}

function showSummary() {
    quizBody.style.display = "none";
    quizSummary.style.display = "block";
    correctCountElement.textContent = correctCount;
    timeSpentElement.textContent = Math.round((new Date() - startTime) / 1000);
}

function restartQuiz() {
    currentIndex = 0;
    correctCount = 0;
    quizSummary.style.display = "none";
    quizHeader.style.display = "block";
}
