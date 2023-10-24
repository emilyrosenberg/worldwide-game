
// Idea from https://www.sitepoint.com/simple-javascript-quiz/
// Array of quiz questions generated from Open Trivia Database https://opentdb.com/api_config.php
let quizQuestions = [
    {question: "The Republic of Malta is the smallest microstate worldwide.",
    answer: "false",
    }

]
    // future questions
    // {question:"Greenland is almost as big as Africa.",
    // answer: "false"
    // },
    // {question: "Greenland is covered with grass and Iceland covered with ice.",
    // answer: "false",
    // },
    // {question: "There is a city called Rome in every continent on Earth.",
    // answer: "false",
    // },
    // {question: "California is larger than Japan.",
    // answer: "true",
    // }
   
// From tutoring (Roman)
// Display question from question array above
function displayQuestion() {
    document.getElementById('question').textContent = quizQuestions[0].question;
    }
    displayQuestion();
// Add code to display the next question

//  Listen for true/false button click event
 button.addEventListener("click", function() {
        checkAnswer();
    })

// If true button is clicked and answer = true, show alert and increment score and show the next question. If answer true button is clicked and answer = false, show alert and show the next question. And vice-versa.
function checkAnswer() {
    let isCorrect = userAnswer === correctAnswer[0];
}

// If checkAnswer returned correct then increment the score
function incrementScore() {

}

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