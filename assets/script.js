// Idea from "How to create a TRUE or FALSE quiz question using JavaScript" https://www.youtube.com/watch?v=MnkD82iHe30
let currentQuestion = 0;
let questions = [
    {"question": "The Republic of Malta is the smallest microstate worldwide.",
    "answer": false,
    },
    {"question":"Greenland is almost as big as Africa.",
    "answer": false,
    },
    {"question": "Greenland is covered with grass and Iceland covered with ice.",
    "answer": false,
    },
    {"question": "There is a city called Rome in every continent on Earth.",
    "answer": false,
    },
    {"question": "California is larger than Japan.",
    "answer": true,
    }
];

(function() {
    fnStart();
});

document.getElementById("correct-scores").innerHTML = 0;

document.getElementById("next-question").addEventListener("click", function(event) {
    fnCheck();
});

document.getElementById("true-button").addEventListener("click", function(event) {
    fnCheck(true);
});

document.getElementById("false-button").addEventListener("click", function(event) {
    fnCheck(false);
});

document.getElementById("next-question").addEventListener("click", function(event) {
    fnNext();
});

function fnStart () {
    document.getElementById("question-text").innerHTML = questions[currentQuestion].question;
    currentQuestion = 0;
    // document.getElementById("next-question").classList.add("hide"); 
}

function fnCheck(answer) {
    let userAnswer = questions[currentQuestion].answer;
    if (userAnswer === answer) {
        alert("Great job!");
        incrementScore();
    } else {
        alert("Oops, try again!");
        // Add code to prevent this when "Next answer button is clicked"
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    if (currentQuestion <= questions.length) {
        let oldScore = parseInt(document.getElementById("correct-scores").innerText);
        document.getElementById("correct-scores").innerText = ++oldScore;
    } else {
        // Add code to stop counting up?
        document.getElementById("correct-scores").innerText = questions.length;
    }
}

function fnNext() {
    // document.getElementById(question-text).classList.add("hide");
    if(currentQuestion < questions.length - 1) {
        currentQuestion = currentQuestion + 1;
    //     document.getElementById("next-question").classList.add("hide");
    // } else {
    //     document.getElementById("next-question").classList.add("hide");
    // }
    document.getElementById("question-text").innerHTML = questions[currentQuestion].question;
}}



// Idea from https://www.sitepoint.com/simple-javascript-quiz/
// Array of quiz questions generated from Open Trivia Database https://opentdb.com/api_config.php
// let quizQuestions = [
//     {question: "The Republic of Malta is the smallest microstate worldwide.",
//     answer: "false",
//     }

// ]
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
// function displayQuestion() {
//     document.getElementById('question').textContent = quizQuestions[0].question;
//     }
//     displayQuestion();
// Add code to display the next question

//  Listen for true/false button click event
//  button.addEventListener("click", function() {
//         checkAnswer();
//     })

// If true button is clicked and answer = true, show alert and increment score and show the next question. If answer true button is clicked and answer = false, show alert and show the next question. And vice-versa.
// function checkAnswer() {
//     let isCorrect = userAnswer === correctAnswer[0];
// }

// If checkAnswer returned correct then increment the score
// function incrementScore() {

// }

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