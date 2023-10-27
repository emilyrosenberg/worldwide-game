// Idea from "How to create a TRUE or FALSE quiz question using JavaScript" https://www.youtube.com/watch?v=MnkD82iHe30

let currentQuestion = 0;

// let quizQuestions = [
//     {question: "The Republic of Malta is the smallest microstate worldwide.",
//     answer: false,
//     },
//     {question: "Greenland is almost as big as Africa.",
//     answer: false,
//     },
//     {question: "Greenland is covered with grass and Iceland covered with ice.",
//     answer: false,
//     },
//     {question: "There is a city called Rome in every continent on Earth.",
//     "answer": false,
//     },
//     {question: "California is larger than Japan.",
//     answer: true,
//     }
// ];

const getQuestions = async function() { 
    //Async Function Expression
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=boolean");
    quizQuestions = (await response.json()).results;
};
(async () => {
    await getQuestions();
    console.log(quizQuestions);
// the remaining codebase comes here
})();

// Hides user feedback elements
document.getElementById("response-correct").classList.add("hide");
document.getElementById("response-incorrect").classList.add("hide");
document.getElementById("play-again-button").classList.add("hide");

// Shows first question and sets score to 0
document.getElementById("question-text").innerHTML = quizQuestions[0].question;
currentQuestion = 0;

document.getElementById("correct-scores").innerText = 0;

document.getElementById("quiz-questions-length").innerText = quizQuestions.length;

// Event listeners
document.getElementById("true-button").addEventListener("click", function(event) {
    checkAnswer(True);
});

document.getElementById("false-button").addEventListener("click", function(event) {
    checkAnswer(False);
});

document.getElementById("next-question").addEventListener("click", function(event) {
    nextQuestion();
});

document.getElementById("play-again-button").addEventListener("click", function(event) {
    resetGame();
});

let answered = false;

function checkAnswer(correct_answer) {
    let userAnswer = quizQuestions[currentQuestion].correct_answer;
    // Don't process if the user has already answered
    // Ideas for setting up this flag and disabling the buttons are from tutoring (Martin)
    if (answered) {
        return;
    }

    if (userAnswer === correct_answer) {
        document.getElementById("response-correct").classList.remove("hide");
        incrementScore();
    } else {
        document.getElementById("response-incorrect").classList.remove("hide");
    }
    document.getElementById("true-button").disabled = true;
    document.getElementById("false-button").disabled = true;
    // Set the answered flag to true
    answered = true; 
}

// Gets the current score from the DOM and increments it by 1
function incrementScore() {
    if (currentQuestion <= quizQuestions.length) {
        let oldScore = parseInt(document.getElementById("correct-scores").innerText);
        document.getElementById("correct-scores").innerText = ++oldScore;
    } 
}

// Shows a new question when the button is clicked and hides the button after the final question
function nextQuestion() {
    document.getElementById("response-correct").classList.add("hide");
    document.getElementById("response-incorrect").classList.add("hide");
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion = currentQuestion + 1;
    } else {
        document.getElementById("next-question").classList.add("hide");
        document.getElementById("play-again-button").classList.remove("hide");
    }
    // Enables the answer buttons for the next question
    document.getElementById("true-button").disabled = false;
    document.getElementById("false-button").disabled = false;
    document.getElementById("question-text").innerHTML = quizQuestions[currentQuestion].question;
    // Resets the answered flag
    answered = false; 
    document.getElementById("question-text").innerHTML = quizQuestions[currentQuestion].question;
}

function resetGame() {
    location.reload();
}