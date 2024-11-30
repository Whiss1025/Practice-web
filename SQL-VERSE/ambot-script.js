// script.js

let currentQuestion = 1; // Track the current question
let score = 0; // Track the user's score

const correctAnswers = [
    "SELECT * FROM employees;", // Correct answer for question 1
    "SELECT name, salary FROM employees;" // Correct answer for question 2
];

function checkAnswer() {
    const userAnswer = document.getElementById('userAnswer').value.trim();
    const feedback = document.getElementById('feedback');
    const currentCorrectAnswer = correctAnswers[currentQuestion - 1]; // Get the correct answer for the current question

    // Check if the user's answer is correct
    if (userAnswer === currentCorrectAnswer) {
        feedback.textContent = "Correct!";
        feedback.className = "correct";
        score++; // Increment score for correct answer
    } else {
        feedback.textContent = "Wrong!";
        feedback.className = "incorrect";
    }

    // Proceed to the next question automatically
    setTimeout(nextQuestion, 1000); // Wait 1 second before moving to the next question
}

function resetQuiz() {
    document.getElementById('userAnswer').value = '';  // Clear the textarea
    document.getElementById('feedback').textContent = '';  // Clear feedback
    document.getElementById('feedback').className = '';  // Remove feedback class
}

function nextQuestion() {
    // Hide the current question and show the next one
    document.getElementById('question' + currentQuestion).style.display = 'none';
    currentQuestion++;

    if (currentQuestion <= 2) {
        document.getElementById('question' + currentQuestion).style.display = 'block'; // Show the next question
    } else {
        // If it's the last question, show the score
        document.getElementById('quizForm').style.display = 'none'; // Hide the form
        document.getElementById('feedback').style.display = 'none'; // Hide feedback
        document.getElementById('score').style.display = 'block'; // Show the score
        document.getElementById('scoreValue').textContent = score; // Display the score
    }

    // Reset for the next question
    resetQuiz();
}
