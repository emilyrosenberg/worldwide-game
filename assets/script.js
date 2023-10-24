// From Love Maths walkthrough project
// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName("button");

//     for (let button of buttons) {
//         button.addEventListener("click", function() {
//             if (this.getAttribute("data-type") === "submit") {
//                 checkAnswer();
//             } else {
//                 let gameType = this.getAttribute("data-type");
//                 runGame(gameType);
//             }
//         });
//     }    


// Idea from https://www.sitepoint.com/simple-javascript-quiz/

let quizQuestions = [
    {question: "The Republic of Malta is the smallest microstate worldwide.",
    correctAnswer: "false"
    }
     // more questions go here
]

// From tutoring (Roman)
function displayQuestion() {
    document.getElementById('question').textContent = quizQuestions[0].question;
    }
    displayQuestion();

   

// function displayQuestion(quizQuestions) {
//     document.getElementById('question').textContent = quizQuestions;
// }

// quizQuestions.forEach(
//     (currentQuestion, questionNumber) => {
//     }
// )

// function fetch(questions.json).then(res => {
//     console.log(res);
//     return res.json();
// })
// .then(loadedQuestions => {
//     console.log(loadedQuestions);
//     questions = loadedQuestions;
// });

function runGame() {

}

function checkAnswer() {

}

function incrementScore() {

}

